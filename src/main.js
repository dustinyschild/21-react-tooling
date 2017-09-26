const css = require('./style/main.scss');
const { say } = require('cowsay');
const { SQUIRREL } = require('cowsay');
const { fake } = require('faker');

import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      content: {
        text: 'grazing in the browser',
        cow: '',
        eyes: 'pp',
        tongue: 'U'
      }
    }
    this.newSaying = this.newSaying.bind(this);
    this.newCow = this.newCow.bind(this);
  }

  newSaying(){
    this.setState(() => {
      this.state.content.text = fake("{{lorem.sentence}}");
      console.log(this.state.content.text);
      return { state: { content: this.state.content.text }};
    })
  }

  newCow(){
    this.setState(() => {
      var dropDown = document.getElementById('selected');
      console.log(dropDown);
    })
  }

  render(){
    return (
      <div>
      <pre>
        Content:
          text: {this.state.content.text}
          cow: {this.state.content.cow}
      </pre>
      <pre>{
          say(this.state.content)
      }</pre>
      <button onClick={this.newSaying}>New Ipsum!</button>
      <button onClick={this.newCow}>New Cow!</button>
      <select id="select">
        <option value="cow">Cow</option>
        <option value="squirrel">Squirrel</option>
        <option value="dragon">Dragon</option>
      </select>
    </div>
    )
  }
}

ReactDOM.render(<Main/>, document.getElementById('root'));
