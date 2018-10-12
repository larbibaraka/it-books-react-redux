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
    this.props.fetchBooksWithPageNumber()
    /*this.setState({
      current: page,
    });*/
    //*----> do the action


  }

  render() {
    return (
      <Pagination 
      total={parseInt(this.props.Total,10)} 
      itemRender={this.textItemRender}
     
      onChange={this.onChange}
       />
    )
  }
}

const mapStateToProps = state => ({
      CurrentPage : state.books.Page,
      Total : state.books.Total
})
export default connect(mapStateToProps , {fetchBooksWithPageNumber})(MyPagination);