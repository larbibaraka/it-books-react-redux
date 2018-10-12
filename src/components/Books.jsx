import React, { Component } from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {fetchBooks} from '../actions/booksAction';
 class Books extends Component {
 
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
                                      <h5 className="mt-1 text-info"><a href="http://it-ebooks-api.info">{book.Title}</a></h5>
                                      <p className="">{book.Description}</p>
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
            <h1 className="text-center text-info">try to search a domain to get result</h1>
          </div>
        )
     }  

    
  }
}

const mapStateToProps = state => ({
      books : state.books.books,
})

export default connect(mapStateToProps , {fetchBooks})(Books);