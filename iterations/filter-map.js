const coding  = ["js" , "java" , "cpp"]

// const values = coding.forEach((item)=>{
//     console.log(item);
// })

// console.log(values); // o/p : undefined 

// if you want anything outside the function you usually  add a return statement BUT 

//eg:
const values = coding.forEach((item)=>{
    // console.log(item);
    return item
})

// console.log(values); // the output here still is undefined 
// so, forEach does not return any value 

//TO RETURN A VALUE WE USE FILTER(), EG:
const arr = [ 1,2,3,4,5,6,7]

const x = arr.filter((numb)=> numb > 4)
// console.log(x); // output : [ 5, 6, 7 ] 


//Filtering From A Database 
const books = [
    { bookName: "The Great Gatsby", genre: "Classic", publishingDate: "1925-04-10" },
    { bookName: "To Kill a Mockingbird", genre: "Fiction", publishingDate: "1960-07-11" },
    { bookName: "1984", genre: "Dystopian", publishingDate: "1949-06-08" },
    { bookName: "The Catcher in the Rye", genre: "Fiction", publishingDate: "1951-07-16" },
    { bookName: "The Lord of the Rings", genre: "Fantasy", publishingDate: "1954-07-29" },
    { bookName: "Pride and Prejudice", genre: "Romance", publishingDate: "1813-01-28" },
    { bookName: "The Hobbit", genre: "Fantasy", publishingDate: "1937-09-21" },
    { bookName: "Brave New World", genre: "Dystopian", publishingDate: "1932-08-31" },
    { bookName: "Moby-Dick", genre: "Adventure", publishingDate: "1851-10-18" },
    { bookName: "Harry Potter and the Sorcerer's Stone", genre: "Fantasy", publishingDate: "1997-06-26" }
  ];
  
//   const userBooks = books.filter((bk)=> bk.genre==='Fiction')
const userBooks = books.filter((bk)=> bk.publishingDate > 1950-1-1)
  // console.log(userBooks);

//Chaining 
const myNumbers = [1,2,3,4,5,6]
// const newNums = myNumbers.map((num)=> num * 10).map((num) => num +1 ).filter((num) => num > 40 )
const newNums = myNumbers
              .map((num)=> num * 10)
              .map((num) => num +1 )
              .filter((num) => num > 40 )
console.log(newNums);





  



