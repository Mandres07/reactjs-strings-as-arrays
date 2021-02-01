import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';
import './App.css';

class App extends Component {
   state = {
      text: '',
      length: 0
   }

   changeHandler = (event) => {
      this.setState({ text: event.target.value, length: event.target.value.length })
   };

   deleteItemHandler = (letterIndex) => {
      // USANDO slice de strings
      // const actualText = this.state.text;
      // const newText = actualText.slice(0, letterIndex) + actualText.slice(letterIndex + 1);
      // this.setState({ text: newText, length: newText.length });

      //USANDO split para ocnvertir string a array luego splice y luego join para volverlo a convertir en string
      const text = this.state.text.split('');
      text.splice(letterIndex, 1);
      const updatedText = text.join('');
      this.setState({ text: updatedText, length: updatedText.length });
   }

   render() {
      return (
         <div className="App" >
            <input style={{ marginTop: '20px' }} type="text" value={this.state.text} onChange={this.changeHandler} />
            <p>{this.state.length}</p>
            <ValidationComponent length={this.state.length} />
            {/* {Array.prototype.map.call(this.state.text, (letter, index) => {
               return <CharComponent key={index + 'letter'} letter={letter} deleteItem={this.deleteItemHandler.bind(this, index)} />;
            })} */}
            {this.state.text.split('').map((letter, index) => {
               return <CharComponent key={index + 'letter'} letter={letter} deleteItem={this.deleteItemHandler.bind(this, index)} />;
            })}
         </div>
      );
   }

}

export default App;
