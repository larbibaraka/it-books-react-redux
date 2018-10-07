import React, { Component } from 'react';
import Books from '../components/Books'; 
import SearchBooks from '../components/searchBooks';
import styled from 'styled-components'
class App extends Component {
  render() {
    const CardBooks = styled.div `
            background: #607D8B;
    
    `
    return (
      
      <div className="App fluid-container" style={{marginTop: '5%'}}>
         <main>
          <div className="card container bg-primary" style={{position:  'static'}}>
              <div className="card-body">
                <SearchBooks /> 
              </div>

          </div>
          <br/>
          <CardBooks className="container card">
              <div className="card-body">
              <Books/>
              </div>
          </CardBooks>
                
         </main>
      </div>
    );
  }
}

export default App;
