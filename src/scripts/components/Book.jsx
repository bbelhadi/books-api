/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
require('../../styles/Book.css');

var Book = React.createClass({
  clickHandler: function () {
    this.props.onClick(this.props.isbn);
  },

  render: function () {
    var self = this;
    if (this.props.canAddToCart) {
      var button = <button className="addCard" onClick={self.clickHandler}>Add to cart</button>;
    }

    return (
    <div className="book cf">
        <img className="bookCover" src={self.props.cover} />
        <div className="content">
          <h2 className="bookTitle">{self.props.title}</h2>
          <p className="ref">ISBN {self.props.isbn}</p>
          <span className="price">{self.props.price} €</span>
          <p className="actionCard">{button}</p>
        </div>

      </div>
    );
  }
});

module.exports = Book;
