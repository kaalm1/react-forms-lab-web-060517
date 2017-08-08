import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.maxChars = props.maxChars
    this.state = {
      value: ""
    };
  }

  updateValue = (event) =>{
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.updateValue}/>
        <p> {this.maxChars - this.state.value.length} </p>
      </div>
    );
  }
}

export default TwitterMessage;
