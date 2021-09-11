import './App.css';
import React from 'react';

class Book extends React.Component {

  render(){
    for (var i = 0; i < this.props.book.length; i++) {
      console.log('i: '+i);
      return(
        <div className="card" style={{width: "25rem"}}>
          <div className="card-body">
            <h5 className="card-title">{this.props.book[i][0]}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{this.props.book[i][1]}</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      );
    }
  }
}

export default Book;