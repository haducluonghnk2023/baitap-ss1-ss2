let text1: string = "hello world";
let seen: Set<string> = new Set();
let text2: string ='';
for (const iterator of text1) {
    if(!seen.has(iterator)){
        text2 += iterator;
        seen.add(iterator);
    }
}
console.log(text2);

