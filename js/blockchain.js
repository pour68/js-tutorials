const SHA256 = require("crypto-js/sha256");
const EC = require("elliptic").ec; // public and private key

const ec = new EC("secp256k1");

const key = ec.genKeyPair();
const publicKey = key.getPublic("hex");
const privateKey = key.getPrivate("hex"); // 97b9da4c46d84e235eb788ea42c77818f7fb4e4fb5018c9087f718212cfe989d

class Transaction {
  constructor(amount, senderPublicId, recieverPublicId) {
    this.amount = amount;
    this.senderPublicId = senderPublicId;
    this.recieverPublicId = recieverPublicId;
  }

  // bitcoin blockchain proof-of-work make sure new block create every 10min
  generateHash() {
    return SHA256(
      `${this.amount}${this.senderPublicId}${this.recieverPublicId}`
    ).toString();
  }

  signTransaction(signingKey) {
    if (signingKey.getPublic("hex") !== this.senderPublicId) {
      throw new Error("You can not use transactions for other wallets.");
    }

    const transactionHash = this.generateHash();
    const sign = signingKey.sign(transactionHash, "base64");

    this.signature = sign.toDER("hex");
  }

  isValid() {
    if (this.senderPublicId === null) return true;

    if (!this.signature || this.signature.length === 0) {
      throw new Error("No signature");
    }

    let publicKey = ec.keyFromPublic(this.senderPublicId, "hex");
    let verified = publicKey.verify(this.generateHash(), this.signature);

    return verified;
  }
}

class Block {
  // index: block's position on the chain.
  // timestamp: datetime of block creation.
  // transaction: include amount, senderPublicId and recieverPublicId.
  // prevHash: reference to previous block's hash.
  constructor(timestamp, transactions, prevHash = "") {
    this.timestamp = timestamp;
    this.transactions = transactions;
    this.prevHash = prevHash;
    this.hash = this.hashGenerator();
    this.nonce = 1;
  }

  hashGenerator() {
    return SHA256(
      `${this.timestamp}${this.prevHash}${this.nonce}${JSON.stringify(
        this.transactions
      )}`
    ).toString();
  }

  mineBlock(difficulty) {
    while (
      this.hash.substring(0, difficulty) != Array(difficulty + 1).join("0")
    ) {
      this.nonce += 1;
      this.hash = this.hashGenerator();
    }

    // new block mined
    return this.hash;
  }

  hasValidTransaction() {
    this.transactions.forEach((transaction) => {
      if (!transaction.isValid()) {
        return false;
      }
    });

    return true;
  }
}

class Chain {
  constructor() {
    this.chain = [this.generateGenesisBlock()];
    this.difficulty = 2;
    this.pendingTransactions = [];
    this.miningAward = 10;
  }

  // first block in blockchain system is called genesis block
  generateGenesisBlock() {
    return new Block(new Date(), [], "Genesis block");
  }

  // addBlock(block) {
  //   block.prevHash = this.getLatestBlock().hash;
  //   block.mineBlock(this.difficulty);

  //   this.chain.push(block);
  // }

  minePendingTransaction(minerAddress) {
    let block = new Block(Date.now(), this.pendingTransactions);
    block.mineBlock(this.difficulty);

    this.chain.push(block);

    this.pendingTransactions = [
      new Transaction(this.miningAward, null, minerAddress),
    ];
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addTransaction(transaction) {
    if (!transaction.senderPublicId || !transaction.recieverPublicId) {
      throw new Error("required sender and reciever public id.");
    }

    if (!transaction.isValid()) {
      throw new Error("wrong transaction.");
    }

    this.pendingTransactions.push(transaction);
  }

  getBalance(publicId) {
    let balance = 0;

    this.chain.forEach((block) => {
      block.transactions.forEach((transaction) => {
        if (transaction.senderPublicId === publicId) {
          balance -= transaction.amount;
        }
        if (transaction.recieverPublicId === publicId) {
          balance += transaction.amount;
        }
      });
    });

    return balance;
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      let currentBlock = this.chain[i];
      let prevBlock = this.chain[i - 1];

      if (!currentBlock.hasValidTransaction()) {
        return false;
      }

      if (currentBlock.hash !== currentBlock.hashGenerator()) {
        return false;
      }

      if (currentBlock.prevHash !== prevBlock.hash) {
        return false;
      }
    }

    return true;
  }
}

const myKey = ec.keyFromPrivate(
  "97b9da4c46d84e235eb788ea42c77818f7fb4e4fb5018c9087f718212cfe989d"
);

// From that we can calculate your public key (which doubles as your wallet address)
const myWalletAddress = myKey.getPublic("hex");

// Create new instance of Blockchain class
const savjeeCoin = new Chain();

// Mine first block
savjeeCoin.minePendingTransaction(myWalletAddress);

// Create a transaction & sign it with your key
const tx1 = new Transaction(100, myWalletAddress, "address2");
tx1.signTransaction(myKey);
savjeeCoin.addTransaction(tx1);

// Mine block
savjeeCoin.minePendingTransaction(myWalletAddress);

// Create second transaction
const tx2 = new Transaction(50, myWalletAddress, "address1");
tx2.signTransaction(myKey);
savjeeCoin.addTransaction(tx2);

// Mine block
savjeeCoin.minePendingTransaction(myWalletAddress);

console.log(`Balance of xavier is ${savjeeCoin.getBalance(myWalletAddress)}`);
