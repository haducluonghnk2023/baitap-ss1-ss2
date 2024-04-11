"use strict";
class Song {
    constructor(id, name, length) {
        this.id = id;
        this._name = name;
        this._length = length;
    }
    // Phương thức getter cho thuộc tính name
    get name() {
        return this._name;
    }
    // Phương thức setter cho thuộc tính name
    set name(value) {
        this._name = value;
    }
    // Phương thức getter cho thuộc tính length
    get length() {
        return this._length;
    }
    // Phương thức setter cho thuộc tính length
    set length(value) {
        this._length = value;
    }
}
// Tạo một thực thể từ lớp Song
const song = new Song(1, "waiting for you", 240);
// Truy cập và thay đổi giá trị của thuộc tính name và length
console.log("Trước khi thay đổi:");
console.log("Name:", song.name);
console.log("Length:", song.length);
song.name = "Despacito";
song.length = 210;
console.log("\n Sau khi thay đổi :");
console.log("Name:", song.name);
console.log("Length:", song.length);
