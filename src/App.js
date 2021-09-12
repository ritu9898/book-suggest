import './App.css';
import React from 'react';
import Book from './book';

class App extends React.Component {

  constructor() {
    super();    
    this.state = {
      books:  [
        ['Atomic Habits', '4/5', 'The #1 New York Times bestseller. Over 2 million copies sold! Tiny Changes, Remarkable Results No matter your goals, Atomic Habits offers a proven framework for improving--every day'],
      ['The 5AM Club', '4/5', '"Legendary leadership and elite performance expert Robin Sharma introduced The 5 am Club concept over twenty years ago, based on a revolutionary morning routine that has helped his clients maximize their productivity.'],
      ['The 4-Hour Workweek', '3.9/5', 'The 4-Hour Workweek: Escape 9–5, Live Anywhere, and Join the New Rich is a self-help book by Timothy Ferriss, an American writer, educational activist, and entrepreneur.']
      ]
    };

    this.setBook = this.setBook.bind(this);
  }

  setBook(e) {
    console.log(e.target.id);
    let id = e.target.id;

    let productivity_book = [
      ['Atomic Habits', '4/5', 'The #1 New York Times bestseller. Over 2 million copies sold! Tiny Changes, Remarkable Results No matter your goals, Atomic Habits offers a proven framework for improving--every day'],
      ['The 5AM Club', '4/5', '"Legendary leadership and elite performance expert Robin Sharma introduced The 5 am Club concept over twenty years ago, based on a revolutionary morning routine that has helped his clients maximize their productivity.'],
      ['The 4-Hour Workweek', '3.9/5', 'The 4-Hour Workweek: Escape 9–5, Live Anywhere, and Join the New Rich is a self-help book by Timothy Ferriss, an American writer, educational activist, and entrepreneur.']

    ];

    let startup_book = [
      ['The Lean Startup', '4.5/5', 'The Lean Startup: How Today\'s Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses is a book by Eric Ries describing his proposed lean startup strategy for startup companies.'],
      ['Zero to One', '3.5/5', 'Zero to One: Notes on Startups, or How to Build the Future is a 2014 book by the American entrepreneur and investor Peter Thiel co-written with Blake Masters.'],
      ['Rework', '3.5/5', 'From the founders of the trailblazing software company 37signals, here is a different kind of business book one that explores a new reality. Today, anyone can be in business. ']
    ];

    let javaScript_book = [
      ['Eloquent JavaScript', '4.5/5', 'Completely revised and updated, this best-selling introduction to programming in JavaScript focuses on writing real applications. '],
      ['JavaScript: The Good Parts', '4.5/5', 'Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before '],
      ['Javascript: The Definitive Guide, 5th edition', '4/5', 'JavaScript is a simple programming language from Netscape that can be embedded in your HTML Web pages.']

    ];

    if(id == 0)
    {
      this.setState({
        books: productivity_book
      });
    }
    if(id == 1)
    {
      this.setState({
        books: startup_book
      });
    }
    if(id == 2)
    {
      this.setState({
        books: javaScript_book
      });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="">
        </header>
        <div className="container">
          <h2><i className="fa fa-book">Book Recommendation</i></h2>
          <p>Here are some book recommendations from my favourite subjects.</p>
          <hr />
          <div>
            <button className="btn btn-secondary" id="0" onClick={this.setBook}>Productivity</button>
            <button className="btn btn-secondary" id="1" onClick={this.setBook}>Startup</button>
            <button className="btn btn-secondary" id="2" onClick={this.setBook}>JavaScript</button>
          </div>
          <div className="tab">
            <Book book={this.state.books}  />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
