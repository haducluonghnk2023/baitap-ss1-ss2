class Circle {
    private radius:number;
    constructor(radius:number) {
        this.radius = radius;
    }
    // diện tích
    calculateArea() :number{
        return Math.PI *this.radius**2;
    }
    // chu vi
    calculatePerimeter() :number{
        return 2 * Math.PI * this.radius;
    }
    // getter cho R
    getRadius():number{
        return this.radius;
    }
    // setter cho R
    setRadius(radius:number):void{
        this.radius = radius;
    }
}
const circle = new Circle(10);
console.log("bán kính hiện tại", circle.getRadius());
console.log("chu vi", circle.calculatePerimeter());
console.log("diện tích", circle.calculateArea());
console.log("----------------------");

circle.setRadius(5);
console.log("bán kính sau khi cập nhật", circle.getRadius());
console.log("chu vi", circle.calculatePerimeter());
console.log("diện tích", circle.calculateArea());



