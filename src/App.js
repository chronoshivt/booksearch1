import './App.css';
import React,{ useState } from 'react';
import axios from 'axios';
import Bookcard from './components/Bookcard';
import noImg from './components/noImg.png'

//API key environment variable
import env from "react-dotenv";

function App() {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  //Loading API key
  const [apiKey] = useState(env.API_KEY);

  function handleChange(event) {
    const book = event.target.value;

    setBook(book);
  }

//Submits search
function handleSubmit(event) {

  event.preventDefault();
  axios.get("https://www.googleapis.com/books/v1/volumes?q="+book+"&key="+apiKey+"&maxResults=40")
  .then(data => {
    setResult(data.data.items);
  }).catch((error) => {
    alert("Enter a book to search")
  })
}

  return (
    <div className="font-mono bg-white mx-4">
      <div className="">
        <form onSubmit={handleSubmit} className="mt-4">
        <div className="text-center text-3xl">
          Search for books on Google
        </div>
            <div className="flex justify-center mt-12">
              <input className="border-4 p-2 rounded-lg
              border-gray-dark" 
              type="text" 
              placeholder="Search for Books"
              onChange={handleChange}></input>
            </div>
            <div className="flex justify-center mt-4">
              <button className="bg-green text-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Search
              </button>
            </div>
        </form>
      </div>
      <div className="grid flex grid-cols-2 md:grid-cols-4">
      {/* Renders search results by mapping and creating card component for each books */}
      {result? result.map(book => (
          <div key={book.volumeInfo.infoLink} className="flex flex-grow">
          <Bookcard
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors? 
            book.volumeInfo.authors[0] : "No author listed"  }
            publisher={book.volumeInfo.publisher? book.volumeInfo.publisher : "No publisher listed"}
            thumbnail={book.volumeInfo.imageLinks? book.volumeInfo.imageLinks.thumbnail : noImg}
            alt={book.title}
            link={book.volumeInfo.infoLink}
          />
          </div>
        )):
        <p className="my-12 w-screen text-center border-b-4 border-green">No results</p> }
      </div>
      <footer className="m-4 text-gray text-center">
        chronoshivt/RD 2021
      </footer>
    </div>
  );
}

export default App;
