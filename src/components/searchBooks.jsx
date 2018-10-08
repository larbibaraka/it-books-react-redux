import React, { Component } from 'react';
import {searchItem, fetchBooks} from '../actions/booksAction';
import {connect} from 'react-redux';

class SearchBooks extends Component {
 
 constructor(props){
    super(props);
    this.state = {
      searchItem : ''
    }
  }

  onChange = (e) =>{
    if(e.target.value.length !== 0){
      this.setState({
        searchItem : e.target.value
      })
      //const text = e.target.value;
      //this.props.searchItem(text);
      
    }
  }
  
  onSubmit = (e) =>{
        e.preventDefault();
        this.props.searchItem(this.state.searchItem);
        console.log(this.state.searchItem);
        console.log(this.props.books)
        console.log(this.props.searchedItem)
        this.props.fetchBooks(this.props.searchedItem)
  }

  render() {
    return (
      <div>
        <form className="form-" onSubmit={this.onSubmit.bind(this)}>
            <div className="form-group">
              <label className="sr-only">Search A book  :</label>
              <input 
                type="search"
                name="search-book"
                className="form-control"
                placeholder="eg : php"
                onChange = {this.onChange.bind(this)}
              />
            </div>
            <button type="submit" className="btn btn-info mx-auto">Search..</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
      books : state.books.books,
      searchedItem : state.books.searchedItem
})



export default connect(mapStateToProps , {searchItem,fetchBooks} )(SearchBooks);