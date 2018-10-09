import React, { Component } from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {fetchBooks} from '../actions/booksAction';
 class Books extends Component {
  constructor(props){
    super(props);
    this.state = {
      books : []
    }
  }
 /*componentWillReceiveProps(nextProps){
    if(nextProps.searchedItem){
      console.log('hello larbi')
      //this.props.fetchBooks(nextProps.searchedItem)
      console.log()
      //this.props.posts.unshift(nextProps.newPost)
      this.setState({
        books : this.props.books
      })
      console.log("--->" , this.state.books)
    }
  }*/

  componentWillMount(){
    ///this.props.books.fetchBooks("java")
   
     this.props.fetchBooks('java');

     
     console.log('---> : ', this.props.books)
    
  }


  render() {
    const Card = styled.div`
            margin : 1%;
             padding: 2%;
            `;
           
          
    return (
      <div className="">
        <div className="row">
           {this.props.books.map(
             book=>
                   <div className="col-xs-12  col-sm-6 col-md-12  col-lg-6" key={book.ID} >
                      <Card className="card mycard" >
                        <div className="media">
                              <img className="mr-3" src={book.Image} alt=""/>
                                <div className="media-body">
                                  <h5 className="mt-0 text-info">{book.Title}</h5>
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
  }
}

const mapStateToProps = state => ({
      books : state.books.books,
      
    })

export default connect(mapStateToProps , {fetchBooks})(Books);