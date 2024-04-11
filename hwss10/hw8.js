"use strict";
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    rectangleArea() {
        return this.width * this.height;
    }
    rectanglePerimeter() {
        return 2 * (this.width + this.height);
    }
    // getter cho chiều dài
    getWidth() {
        return this.width;
    }
    // Setter cho chiều rộng
    setWidth(width) {
        this.width = width;
    }
    // Getter cho chiều cao
    getHeight() {
        return this.height;
    }
    // Setter cho chiều cao
    setHeight(height) {
        this.height = height;
    }
}
const rectangle = new Rectangle(4, 6);
// In ra chiều dài, chiều rộng, chu vi và diện tích của đối tượng
console.log("Chieu dai hien tai:", rectangle.getWidth());
console.log("Chieu rong hien tai:", rectangle.getHeight());
console.log("Chu vi:", rectangle.rectanglePerimeter());
console.log("Dien tich:", rectangle.rectangleArea());
// Cập nhật lại kích cỡ của đối tượng và thực hiện lại các yêu cầu trên
rectangle.setWidth(8);
rectangle.setHeight(10);
console.log("\nSau khi cap nhat:");
console.log("Chieu dai hien tai:", rectangle.getWidth());
console.log("Chieu rong hien tai:", rectangle.getHeight());
console.log("Chu vi:", rectangle.rectanglePerimeter());
console.log("Dien tich:", rectangle.rectangleArea());
