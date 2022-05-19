function findAccountById(accounts, id) {
  //return accounts.find(account=>account.id=id);
  let found=null;
  /*for(let account of accounts){
    if(account.id==id) found = account;
  }*/

  accounts.forEach(account => {
    if(account.id==id) found = account;
  });
  return found;

}

function sortAccountsByLastName(accounts) {}

function getTotalNumberOfBorrows(account, books) {}

function getBooksPossessedByAccount(account, books, authors) {}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
