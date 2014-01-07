function Book(author, title, price) {
  this.author = author;
  this.title = title;
  this.price = price;
  this.value1 = "Neeraj"
};
var book1 = new Book("Asimov", "Foundation", 3.55);

Book.prototype.description = function () {
  return this.author + ': <i>' + this.title + '</i>  £' + this.price;
}

console.log(book1);
console.log(book1.__proto__);
console.log(book1.description.__proto__);
console.log(book1.author);
console.log(book1.value1);
console.log(book1.value1.__proto__);