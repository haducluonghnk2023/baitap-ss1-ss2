"use strict";
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    viewBooks() {
        this.books.forEach((book, index) => {
            console.log(`Sách ${index + 1}: ${book.getTitle()} - Tác giả: ${book.getAuthor()}`);
        });
    }
}
const book1 = new Book("Book 1", "Author 1");
const book2 = new Book("Book 2", "Author 2");
const book3 = new Book("Book 3", "Author 3");
const book4 = new Book("Book 4", "Author 4");
const book5 = new Book("Book 5", "Author 5");
// Khởi tạo một đối tượng từ lớp Library
const library = new Library();
// Thêm 5 quyển sách vào thư viện
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
// Xem danh sách các quyển sách trong thư viện
library.viewBooks();
