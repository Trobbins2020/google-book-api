import { Component } from "react";
import Book from "./Book";

class List extends Component {
  render() {
    return this.props.books.map((book) => <Book book={book} key={book.id} />);
  }
}
export default List;
