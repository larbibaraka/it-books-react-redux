import React, { Component } from 'react'
import {connect} from 'react-redux';


class ResultSearchStats extends Component {
  render() {
    return (
      <div className="text-center text-primary">
        <h4>Result :</h4>
        <h5>your call took : {this.props.Time} s</h5>
        <h5>we Found : {this.props.Total} Book</h5>
      </div>
    )
  }
}


const mapStateToProps = state =>({
      Time  : state.books.Time,
      Total : state.books.Total
})
export default connect(mapStateToProps , {})(ResultSearchStats);
