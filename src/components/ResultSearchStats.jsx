import React, { Component } from 'react'
import {connect} from 'react-redux';


class ResultSearchStats extends Component {
  render() {
    if(this.props.books.length !== 0){
      return (
        <div className="text-center text-primary">
          <h4>Result :</h4>
          <h5>your call took : {this.props.Time} s</h5>
          <h5>we Found : {this.props.Total} Book</h5>
        </div>
      )
    }else{
      return (false)
    }
  
  }
}


const mapStateToProps = state =>({
      books : state.books.books,
      Time  : state.books.Time,
      Total : state.books.Total
})
export default connect(mapStateToProps , {})(ResultSearchStats);
