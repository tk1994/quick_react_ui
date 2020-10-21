import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class QuickForm extends Component {
  constructor(props){
    super(props);

    this.state = "";
    this.key = "";
    this.value = "";

    this.addValue = this.addValue.bind(this);
    this.updateKey = this.updateKey.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }

  addValue(event) {
    console.log(this.key + ',' + this.value);
  }

  updateKey(event) {
    this.key = event.target.value;
  }

  updateValue(event) {
    this.value = event.target.value;
  }

  render() {
    return (
      <div className="app-conatiner">
        <form noValidate autoComplete="off">
          <TextField id="standard-basic" label="Key" onChange={this.updateKey}/>
          <TextField id="standard-basic" label="Value" onChange={this.updateValue}/>
          <div>
            <Button onClick={this.addValue}>
              Submit
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default QuickForm;
