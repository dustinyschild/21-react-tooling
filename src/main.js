const css = require('./style/main.scss');
const { say,SQUIRREL,DRAGON } = require('cowsay');
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
        cowType: 'cow'
      }
    }
    this.newSaying = this.newSaying.bind(this);
    this.newCow = this.newCow.bind(this);
  }

  newSaying(){
    this.setState(() => {
      this.state.content.text = fake("{{lorem.sentence}}");
      console.log(this.state.content.text);
    })
  }

  newCow(){
    this.setState(() => {
      var dropDown = document.getElementById('select');
      console.log(dropDown.value);
      this.state.content.cowType = dropDown.value;

      switch (dropDown.value){
        case 'cow':
          this.state.content.cow = '';
        break;
        case 'squirrel':
        this.state.content.cow = SQUIRREL;
        break;
        case 'dragon':
        this.state.content.cow = DRAGON;
        break;
      }
    })
  }

  render(){
    return (
      <div>
        <div>
          Content:
            <p>text: {this.state.content.text}</p>
            <p>cowType: {this.state.content.cowType}</p>
        </div>
        <pre>{
            say(this.state.content)
        }</pre>
        <button onClick={this.newSaying}>New Ipsum!</button>
        <select id="select">
          <option value="cow">Cow</option>
          <option value="squirrel">Squirrel</option>
          <option value="dragon">Dragon</option>
        </select>
        <button onClick={this.newCow}>New Cow!</button>
      </div>
    )
  }
}

ReactDOM.render(<Main/>, document.getElementById('root'));
