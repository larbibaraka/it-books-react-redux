import React, { Component } from 'react';
import Books from '../components/Books'; 
import SearchBooks from '../components/searchBooks';
import ResultSearchStats from '../components/ResultSearchStats';
import styled from 'styled-components'
class App extends Component {
  render() {
    const CardBooks = styled.div `
            background: #fff;
    
    `
    return (
      
      <div className="App fluid-container" style={{marginTop: '2%'}}>
         <main>
          <div className="card container bg-" style={{position:  'static'}}>
              <div className="card-body">
                <SearchBooks /> 
              </div>

          </div>
          <br/>
          <div className="card cotainer bg-" style={{position:  'static'}}>
              <div className="card-body">
                <ResultSearchStats /> 
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
