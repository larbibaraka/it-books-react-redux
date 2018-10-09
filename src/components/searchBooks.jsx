import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchBooks} from '../actions/booksAction';
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
    }
  }
  
  onSubmit = (e) =>{
        e.preventDefault();
        const textToSearch = this.state.searchItem;
        this.props.fetchBooks(textToSearch);
        this.setState({
          searchItem : ""
        })
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
                value = {this.state.searchItem}
                onChange = {this.onChange.bind(this)}
              />
            </div>
            <button type="submit" className="btn btn-info mx-auto">Search..</button>
        </form>
      </div>
    )
  }
}


 

export default connect(null , {fetchBooks})(SearchBooks);