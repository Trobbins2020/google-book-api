import React, { Component } from "react";
import "./Book.css";

class Book extends Component {
  state = {
    book: this.props.book,
  };

  info = (desc) => {
    alert(desc);
  };

  render() {
    console.log(this.state.book);
    return (
      <div onClick={() => this.info(this.state.book.volumeInfo.description)}>
        <h2>{this.state.book.volumeInfo.title}</h2>
        <div className="Book">
          <img
            src={
              this.state.book.volumeInfo.imageLinks.thumbnail === undefined
                ? ""
                : this.state.book.volumeInfo.imageLinks.thumbnail
            }
            width="250px"
            alt=""
          />
          <div>
            <h2>Author: {this.state.book.volumeInfo.authors}</h2>
            <h2>
              {this.state.book.saleInfo.saleability === "FOR_SALE"
                ? "Price: $" + this.state.book.saleInfo.listPrice.amount
                : "Not For Sale"}
            </h2>
            <h2>{this.state.book.volumeInfo.subtitle}</h2>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Book;
