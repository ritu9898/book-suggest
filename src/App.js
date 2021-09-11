import './App.css';
import React from 'react';
import Book from './book';

class App extends React.Component {

  constructor() {
    super();    
    this.state = {
      books:  [
        ['Atomic Habits', '4/5'],
        ['The 5AM Club', '4/5']
      ]
    };

    this.setBook = this.setBook.bind(this);
  }

  setBook(e) {
    console.log(e.target.id);
    let id = e.target.id;

    let productivity_book = [
      ['Atomic Habits', '4/5'],
      ['The 5AM Club', '4/5']
    ];

    let startup_book = [
      ['The Lean Startup', '4.5/5'],
      ['Zero to One', '3.5/5']
    ];

    let javaScript_book = [
      ['Eloquent JavaScript', '4/5']
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
