// WEATHER API KEY = e082691f75210af0967a6dd582e4b693
const fruits = ['kiwi','mango','apple','pear'];
function doubleName(value, index){
    console.log(`${index + 1} ${value+value}`)
}
fruits.forEach(doubleName)

// fetch('https://fakestoreapi.com/products')
// .then(res=>res.json())
// .then(json=>console.log(json))

//---------- GET QUOTES FROM AN API ----------//
// DEFINE QUOTE VARIABLES AND FUNCTIONS
// ------variables
let apiQuotes = [];
let singleQuote = {};
const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote-text')
const quoteAuthor = document.getElementById('quote-author')
const quoteButton = document.getElementById('quote-button')
const twitterButton = document.getElementById('twitter-button');

//-----functions
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
    if(!quote.author){
        quoteAuthor.textContent = "Unknown";
    }else{
        quoteAuthor.textContent = quote.author;
    }
    if(quote.text.length > 120){
        quoteText.classList.add('text-xl')
    }else{
        quoteText.classList.remove('text-xl')

    }
    quoteText.textContent = quote.text;
}

// -----tweet quote function
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} -${quoteAuthor.textContent}`;
    window.open(twitterUrl, '_blank')
}


// -----event listeners
quoteButton.addEventListener('click', newQuote);
twitterButton.addEventListener('click', tweetQuote)

// newQuote()
getQuotes()