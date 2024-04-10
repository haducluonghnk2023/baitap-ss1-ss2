function add(a: number|string, b: number|string) :number|string{
    if(typeof a === 'string'){
        const numA = parseFloat(a);
        if(isNaN(numA)){
            return "không hợp lệ"
        }
        a = numA;
    }
    if (typeof b === 'string') {
        const numB = parseFloat(b);
        if (isNaN(numB)) {
            return "Không hợp lệ";
        }
        b = numB;
    }
    return a + b;
}
console.log(add(5, 5)); 
console.log(add("5", "15")); 
console.log(add("abc", "10")); 
