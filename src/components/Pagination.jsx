import React, { Component } from 'react'
import {connect} from 'react-redux';
class Pagination extends Component {

  createPagination = () =>{
      let Elements = [];

      console.log(this.props.Total/100)
      let pages = Math.round(this.props.Total/40);
    

      for (let i=1; i<=pages; i++){
        Elements.push(
          <li className="page-item" key={i}><a className="page-link" href="#">{i}</a></li>
        )
      }
      return Elements;
  } 
  render() {
    return (
      <div className="mx-auto">
        <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item"><a className="page-link" href="#">Previous</a></li>
              {this.createPagination()}     
              <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
        </nav>
      </div>
    )
  }
}

const mapStateToProps = state => ({
      CurrentPage : state.books.Page,
      Total : state.books.Total
})
export default connect(mapStateToProps , {})(Pagination);