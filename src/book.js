import './App.css';
import React from 'react';

class Book extends React.Component {

  render(){

    let books = [];

    this.props.book.forEach((element, index) => {
      books.push(<div className="card" style={{width: "25rem"}}><div className="card-body"><h5 className="card-title">{element[0]}</h5><h6 className="card-subtitle mb-2 text-muted">{element[1]}</h6><p className="card-text"></p></div>
    </div>);
    console.log(books);
    });
    for (var i = 0; i < this.props.book.length; i++) {
      return(
       <div>
        {books}
       </div>
      );
    }
  }
}

export default Book;