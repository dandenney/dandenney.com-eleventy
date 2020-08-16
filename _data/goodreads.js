const fetch = require("node-fetch");
const xml2js = require("xml2js");

// module.exports = async function() {
//   const key = process.env.GOODREADS_API_KEY;
//   const id = "3444887";

//   let books = [];

//   await fetch(
//     `https://www.goodreads.com/review/list?v=2&id=${id}&shelf=read&key=${key}&per_page=200`
//   )
//     .then(res => res.text())
//     .then(body => {
//       xml2js.parseString(body, function(err, res) {
//         if (err) console.log(err);
//         console.log("Getting Book List from GoodReads API");

//         function sluggify(str) {
//           str = str.replace(/[^\w\s]/gi, "");
//           return str
//             .split(/\s|_|(?=[A-Z])/)
//             .join("-")
//             .toLowerCase();
//         }

//         let bookList = res.GoodreadsResponse.reviews[0].review;

//         for (let i = 0; i < bookList.length; i++) {
//           books.push({
//             title: bookList[i].book[0].title[0],
//             author: bookList[i].book[0].authors[0].author[0].name[0],
//             image_url: bookList[i].book[0].image_url[0],
//             link: bookList[i].book[0].link[0],
//             dateStarted: new Date(bookList[i].date_added[0]),
//             dateFinished: new Date(bookList[i].read_at[0]),
//             rating: bookList[i].rating[0],
//             sluggify: sluggify(bookList[i].book[0].title[0])
//           });
//         }
//       });
//     })
//     .catch(err => console.log(err));

//   return books;
// };
