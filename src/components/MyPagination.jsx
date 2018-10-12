import React, { Component } from 'react';
import {connect} from 'react-redux';
import 'rc-pagination/assets/index.css';
import Pagination from 'rc-pagination';
import {fetchBooksWithPageNumber} from '../actions/booksAction';

class MyPagination extends Component {

    constructor(props){
      super(props);

      this.state = {
        total : this.props.Total,
        currentPage : this.props.CurrentPage
      }
    }


   itemRender = (current, type, element) => {
    if (type === 'page') {
      return <a href={`#${current}`}>{current}</a>;
    }
    return element;
  };

   textItemRender = (current, type, element) => {
    if (type === 'prev') {
      return 'Prev';
    }
    if (type === 'next') {
      return 'Next';
    }
    return element;
  }; 

  onChange = (page) => {
    console.log(page);

    this.props.fetchBooksWithPageNumber(page,this.props.searchText )
    /*this.setState({
      current: page,
    });*/
    //*----> do the action


  }

  render() {
    if(this.props.books.length !== 0){
      return (
        <Pagination 
          total={parseInt(this.props.Total,10)} 
          itemRender={this.textItemRender}
          onChange={this.onChange}
         />
      )
      }else{
        return(false)
      }
  }
}

const mapStateToProps = state => ({
      books : state.books.books,
      CurrentPage : state.books.Page,
      Total : state.books.Total,
      searchText  : state.books.searchText
})
export default connect(mapStateToProps , {fetchBooksWithPageNumber})(MyPagination);