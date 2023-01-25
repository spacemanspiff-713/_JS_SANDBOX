// WEATHER API KEY = e082691f75210af0967a6dd582e4b693
const fruits = ['kiwi','mango','apple','pear'];
function doubleName(value, index){
    console.log(`${index + 1} ${value+value}`)
}
fruits.forEach(doubleName)

// fetch('https://fakestoreapi.com/products')
// .then(res=>res.json())
// .then(json=>console.log(json))

// GET QUOTES FROM AN API
let apiQuotes = [];
let singleQuote = {};
// DEFINE QUOTE SELECTION FUNCTION

async function getQuotes(){
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        console.log(apiQuotes)
        newQuote()
    }catch(error){
        // CATCH ERROR

    }
}

function newQuote(){
    // PICK A RANDOM QUOTE
    const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
    // let quote = apiQuotes[2];
    console.log(quote)
}

newQuote()
getQuotes()