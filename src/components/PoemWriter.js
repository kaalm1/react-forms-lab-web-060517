import React from 'react';

class PoemWriter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      showField: "visible",
      textField: "",
      divField: <div
        id='poem-validation-error'
        style={{color: 'red'}}
      >
        This poem is not written in the right structure!
      </div>
    };
  }

  handleInputChange=(event)=>{

    this.setState({
      value: event.target.value
    });

    let value = event.target.value
    let arr = []
    arr = value.split("\n")
    if (arr.filter(function(x){return x!==""}).length === 3 && arr[0].split(' ').filter(function(x){return x!==""}).length === 5 && arr[1].split(' ').filter(function(x){return x!==""}).length === 3 && arr[2].split(' ').filter(function(x){return x!==""}).length === 5){
      this.setState({
        showField: "hidden",
        textField: "",
        divField: <div> </div>
      })
    } else{
      this.setState({
        showField: "visible",
        textField: "This poem is not written in the right structure!",
        divField: <div
          id='poem-validation-error'
          style={{color: 'red'}}
        >
          This poem is not written in the right structure!
        </div>

      })
    }


  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value = {this.state.value}
          onChange = {this.handleInputChange}
        />
        {this.state.divField}
      </div>
    );
  }
}

export default PoemWriter;
