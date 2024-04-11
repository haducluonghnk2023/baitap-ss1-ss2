class Song {
    public readonly id: number;
    private _name: string;
    private _length: number;

    constructor(id: number, name: string, length: number) {
        this.id = id;
        this._name = name;
        this._length = length;
    }

    // Phương thức getter cho thuộc tính name
    public get name(): string {
        return this._name;
    }

    // Phương thức setter cho thuộc tính name
    public set name(value: string) {
        this._name = value;
    }

    // Phương thức getter cho thuộc tính length
    public get length(): number {
        return this._length;
    }

    // Phương thức setter cho thuộc tính length
    public set length(value: number) {
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
