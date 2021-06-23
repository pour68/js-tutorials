/* operators */
let a = 10;
let b = 16;

// arithmetic (+ - * / % **)
let c = a + b; // 10 + 16 = 26

// assignment (+= -= *= /= %= **=)
a += b; // a = a + b
a *= b; // a = a * b

// conditional (> >= < <= == === != !==)
let d = a >= b; // false
let e = a != b; // true

// logical (|| && !)
let f = a > 0 && a !== b; // true
let g = a < 0 || b > a; // true
let k = !(a < 0); // true

// bitwise (| & ^ ~ << >> >>>)
let h = a | b; // 0b01010 | 0b10000 = 0b11010 == 26
let l = a & b; // 0b01010 & 0b10000 = 0b00000 == 0
let n = ~a; // 0b10101 == 21 but in js it is equal to -417 why?

// JavaScript stores numbers as 64 bits floating point numbers
// but all bitwise operations are performed on 32 bits binary numbers
// Before a bitwise operation is performed, JavaScript converts numbers to 32 bits signed integers
// After the bitwise operation is performed, the result is converted back to 64 bits JavaScript numbers

// type checking (typeof)
let volume = 20.5;
typeof volume; // number
