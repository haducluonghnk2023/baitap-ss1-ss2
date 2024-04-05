"use strict";
let text1 = "hello world";
let seen = new Set();
let text2 = '';
for (const iterator of text1) {
    if (!seen.has(iterator)) {
        text2 += iterator;
        seen.add(iterator);
    }
}
console.log(text2);
