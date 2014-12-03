'use strict';

var React          = require('react');
var ReactAddons    = require('react/addons');
var ReactTestUtils = React.addons.TestUtils;
var $ = require('jQuery');

var BooksApiApp = require('../../../src/scripts/components/Book.jsx');

var book = {
    "isbn": "c8fabf68-8374-48fe-a7ea-a00ccd07afff",
    "title": "Henri Potier à l'école des sorciers",
    "price": 35,
    "cover": "http://henri-potier.xebia.fr/hp0.jpg"
};

describe('Main', function () {
  var component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    var component = React.renderToString(BooksApiApp({
        isbn: book.isbn,
        title: book.title,
        price: book.price,
        cover: book.cover,
        canAddToCart: false
    }));
    $('#content').append(component);
  });

  afterEach(function () {
    $('#content').remove();
  });

  it('should render the right title', function () {
    var bookTitle = $('#content .bookTitle').text();
    expect(bookTitle).toEqual("Henri Potier à l'école des sorciers");
  });

  it('should render the right cover', function () {
    var bookCover = $('#content .bookCover').attr('src');
    expect(bookCover).toEqual("http://henri-potier.xebia.fr/hp0.jpg");
  });

  it('should render the right price', function () {
    var bookIsbn = $('#content .ref').text();
    expect(bookIsbn).toEqual("ISBN c8fabf68-8374-48fe-a7ea-a00ccd07afff");
  });

  it('should render the right price', function () {
    var bookPrice = $('#content .price').text();
    expect(bookPrice).toEqual('35 €');
  });

});
