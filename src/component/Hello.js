import React, { Component } from 'react'

export default class Hello extends Component {
   
       state={
            fname :'Ihsaan',
            color: 'blue'
        }
    
    handleChange(e){
console.log(e.target.value)
this.setState({fname:e.target.value})
if(this.state.fname==='colorChange'){
    this.setState({color:'red'})
}

    }
    render() {
      console.log(this.state)
    const {fname,color} = this.state
    // const myStyle = {
    //    backgroundColor: color
    // }
    return (
      <div>
        Nmae:<input placeholder='Type' value={fname} onChange={this.handleChange.bind(this)} />
        Hello {fname}
        <button style={{backgroundColor:`${color}`}}>Click</button>
      </div>
    )
  }
}
