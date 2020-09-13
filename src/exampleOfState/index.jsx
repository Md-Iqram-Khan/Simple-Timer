import React, { Component } from "react";


class StateEx extends Component {

  state = {
      count : 0
  }

  intervalID = null; 

  incrementCount = () =>{
      this.setState({count : this.state.count + 1})
  }

  decrementCount = () =>{
      if(this.state.count > 0){
        this.setState({count : this.state.count - 1})}
 }

 startTimer = () =>{
     if (this.state.count > 0 && !this.intervalID){
        this.intervalID = setInterval(()=>{
            this.setState({count: this.state.count - 1},()=>{
                if(this.state.count === 0){
                    alert('Timer Finished')
                    clearInterval(this.intervalID)
                    this.intervalID = null
                }
            }) 
         }, 1000)
     }
 }

  stopTimer = () =>{
      if (this.intervalID){
          clearInterval(this.intervalID)
          this.intervalID = null;
      }
  }
 
  resetTimer = () =>{
    this.setState({count : 0})
    clearInterval(this.intervalID)
    this.intervalID = null
  }
 
  render() {
    return (
      <div>
        <h1>Simple Timer</h1>

        <div className="container">
            <button className='btn' onClick={this.decrementCount}>-</button>
            <span className='Text'>{this.state.count}</span>
            <button className='btn' onClick={this.incrementCount}>+</button>
        </div>

        <div className="container">
            <button className='btn' onClick={this.startTimer}>Start</button>
            <button className='btn' onClick={this.stopTimer}>Stop</button>
            <button className='btn' onClick={this.resetTimer}>Reset</button>
        </div>


      </div>
    );
  }
}

export default StateEx;
