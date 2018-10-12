import React, { Component } from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {fetchBooks, getBookInfo} from '../actions/booksAction';
 class Books extends Component {
 
  onClick(e) {
    //console.log(e.target.id)
    const isbn = e.target.id;
    this.props.getBookInfo(isbn)
    console.log(this.props.link.info_url)

  }

  render() {
    const Card = styled.div`
            margin : 1%;
             padding: 2%;
            `;

      if(this.props.books.length !== 0){
        return (
          <div className="">
            <div className="row">
               {
                  this.props.books.map(
                 book=>
                       <div className="col-xs-12  col-sm-6 col-md-12  col-lg-6" key={book.ID} >
                          <Card className="card mycard" >
                            <div className="media">
                                  <img className="mr-1" src={book.Image} alt=""/>
                                    <div className="media-body">
                                      <h5 className="mt-1 text-success text-center" >{book.Title}</h5>
                                      <p className="text-justify text-muted">{book.Description}</p>
                                      <button id={book.isbn} className="btn btn-info push-right" onClick={this.onClick.bind(this)}>read More ..</button>  
                                    </div>
                              </div>
                          </Card>  
                      </div>              
                    )
    
                }
            </div>
       </div>
        )
     }else{
        return(
          <div>
            <h3 className="text-center text-success">try to search a book to get result</h3>
          </div>
        )
     }  

    
  }
}

const mapStateToProps = state => ({
      books : state.books.books,
      link  : state.books.link
})

export default connect(mapStateToProps , {fetchBooks,getBookInfo})(Books);