class Book1 {
    private quantity: number;

    constructor(private title: string, private author: string, quantity?: number) {
        this.quantity = quantity ?? 1; // Nếu quantity không được truyền vào, sẽ có giá trị mặc định là 1
    }

    // Phương thức thêm sách
    addBook(newTitle: string, newAuthor: string, newQuantity?: number) {
        if (newTitle === this.title && newAuthor === this.author) {
            this.quantity += newQuantity ?? 1; // Tăng số lượng nếu sách đã tồn tại trong thư viện
            console.log(`Số lượng sách "${this.title}" đã được tăng lên thành ${this.quantity}.`);
        } else {
            console.log(`Thêm sách mới "${newTitle}" của tác giả ${newAuthor} vào thư viện.`);
            // Thêm sách mới vào thư viện
        }
    }

    // Các phương thức khác của lớp Book
}

// Sử dụng lớp Book
const myBook = new Book1("Title", "Author", 3);
myBook.addBook("Title", "Author", 2); // Số lượng sách "Title" đã được tăng lên thành 5.
