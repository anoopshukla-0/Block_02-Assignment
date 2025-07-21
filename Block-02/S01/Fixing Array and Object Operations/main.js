const library = {
  books: [
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }
  ],

  addBook(book) {
    const { title, author, year } = book;

    if (!title || !author || !year) {
      console.error("Book information is incomplete. Please provide title, author, and year.");
      return false;
    }

    this.books.push({ title, author, year });
    console.log(`✅ Book "${title}" added successfully.`);
    return true;
  },

  findBookByTitle(title) {
    return this.books.find(book => book.title === title);
  },

  removeBook(title) {
    const index = this.books.findIndex(book => book.title === title);

    if (index !== -1) {
      const removed = this.books.splice(index, 1);
      console.log(`🗑️ Book "${removed[0].title}" removed successfully.`);
    } else {
      console.warn("Book not found. Cannot remove.");
    }
  }
};

library.addBook({ author: "George Orwell", year: 1949 });

library.addBook({ title: "1984", author: "George Orwell", year: 1949 });

console.log(`Total books in library: ${library.books.length}`);
console.log("Current Books:", library.books);