function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function _sortObjectByValues(obj){
  let keys = Object.keys(obj);
  keys.sort((keyA,keyB)=>{
     if(obj[keyA] > obj[keyB]){
       return -1;
     } else{
       return 1;
     }
  })
  return keys;
}

function getBooksBorrowedCount(books) {}

function getMostCommonGenres(books) {
    let count = books.reduce((acc,book)=>{
        if(acc[book.genre]){
          acc[book.genre]+=1;
        } else{
          acc[book.genre]=1
        }
        return acc;
    },{})
   //console.log(count);

    let keys = _sortObjectByValues(count);
//console.log(keys);
    console.log(keys.map(genre=>({name:genre, count:count[genre]})))
    
    return keys.map(genre=>({name:genre, count:count[genre]})).slice(0,5);

}

function getMostPopularBooks(books) {}

function getMostPopularAuthors(books, authors) {
//use reduce to format the author ids with the number of borrows for each authors book
    let authorsObj = books.reduce((acc,{authorId, borrows})=>{
      if(acc[authorId]){
        acc[authorId]+=borrows.length;//.push(borrows.length);
      }else{
        acc[authorId]=borrows.length;
      }
      return acc;
    },{})
    //console.log(authorsObj);
    let sorted = _sortObjectByValues(authorsObj); //Sorting author ids based on number of times their books have been borrowed

    console.log(sorted);
    return sorted.map(authorId=>{
      let author = authors.find(auth=>auth.id==authorId);
      let name = `${author.name.first} ${author.name.last}`;  
       let retObj={name,count:authorsObj[authorId]};
       console.log(retObj)
      return retObj;
    }).slice(0,5);

}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
