import React, { Component } from 'react'
import styled from 'styled-components'
 class Books extends Component {
  
 
  
  constructor(props){
    super(props);
    this.state = {
      books : []
    }
  }


  componentWillMount(){
    const searchItem = "php"
    const url = `http://it-ebooks-api.info/v1/search/${searchItem}`;

    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({
      books : data.Books
    }))

  }
  
  
  
  render() {
    const Card = styled.div`
            margin : 1%;
             padding: 2%;
            `
    return (
      <div className="">
        <div className="row">
           {this.state.books.map(book=>
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
export default Books;