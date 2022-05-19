function findAuthorById(authors, id) {
  let foundAuthor = {};
  for (let i = 0; i < authors.length; i++) {
    const author = authors[i];
    if (author.id === id) {
      foundAuthor = author;
    }
  }
  return foundAuthor;
}

function findBookById(books, id) {
  let foundBook = {};
  for (let i = 0; i < books.length; i++) {
    const book = books[i];

    if (book.id === id) {
      foundBook = book;
    }
  }
  return foundBook;
}

function partitionBooksByBorrowedStatus(books) {
  let returned = [];
  let borrowed = [];
  let result = [];

  for (let book of books) {
    if(book.borrows[0].returned){
      returned.push(book);
    }else{
      borrowed.push(book);
    }
    /*let status = books.find((book) => key.borrows[0].returned === false);
    if (status) {
      borrowedStatus1.push(status);
    }
    if (!status) {
      borrowedStatus2.push(status);
    }*/
  }
  //result.push(returned);
  //result.push(borrowed);
  return [borrowed,returned];
}

/*function partitionBooksByBorrowedStatus(books) {
  return books.reduce(
    (acc, book) => {
      const [borrowed, returned] = acc;
      const recent = book.borrows[0];
      if (recent.returned) {
        returned.push(book);
      } else {
        borrowed.push(book);
      }

      return acc;
    },
    [[], []]
  );
}*/

function getBorrowersForBook(book, accounts) {
  const accountsById = accounts.reduce((acc, account) => {
    acc[account.id] = account;
    return acc;
  }, {});

  return book.borrows
    .map(({ id, returned }) => ({
      ...accountsById[id],
      returned,
    }))
    .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};