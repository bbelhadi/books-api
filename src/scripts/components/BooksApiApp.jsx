/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var Router = require('react-router');
// Components
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');

var imageURL = require('../../images/yeoman.png');

var BooksApiApp = React.createClass({

  getInitialState: function (){
    return {
      selectedBooks: JSON.parse(localStorage.getItem('selectedBooks')) || []
    };
  },

  addedBook: function (selectedBooks) {
    // Update selectedBooks with newly added ones
    // This method is triggered from children components
    this.setState({ selectedBooks: selectedBooks });
  },

  render: function() {
    var self = this;

    return (
      <div className='main'>

        <header>
          <nav className="cf">
            <ul>
              <li className="yellow"><Link to="shop">Shop</Link></li>
              <li className="green"><Link to="cart">Cart</Link></li>
            </ul>
          </nav>
         <div className="cart-header">
            <p>{self.state.selectedBooks.length} books in cart</p>
          </div>


        </header>

        <RouteHandler addedBook={self.addedBook}/>
      </div>
    );
  }
});

module.exports = BooksApiApp;
