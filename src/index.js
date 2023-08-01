import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


let books = [
  {
    id: 1,
    title: "The Power of Your Subconscious Mind",
    image: "https://m.media-amazon.com/images/I/811wuvCKC2S._AC_UY218_.jpg",
    author: "Dr.Joseph Murphy",
    edition: 19,
    pages: "235"
  },
  {
    id: 2,
    title: "Do It Today",
    image: "https://m.media-amazon.com/images/I/41W-o6xu2bL._SX323_BO1,204,203,200_.jpg",
    author: "Darius Foroux",
    edition: 1,
    pages: "200"

  },
  {
    id: 3,
    title: "You Only Live Once",
    image: "https://m.media-amazon.com/images/I/71dNsRuYL7L.jpg",
    author: "Stuti Changle",
    edition: 1,
    pages: "250"

  }]


ReactDOM.createRoot(document.getElementById('root')).render(<App books={books} />);