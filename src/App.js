import React, {Component} from 'react';
import Clarifai from 'clarifai';
import logo from './logo.svg';
import Logo from './components/Logo/Logo';
import Recognition from './components/Recognition/Recognition';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';

const app = new Clarifai.App({
 apiKey: '3091feab77ad45cabcea0a8cdd4b989b'
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
    }
  }

  calculateDescription = (response) => {
    return {
      first: response.outputs[0].data.concepts[0].name,
      second: response.outputs[0].data.concepts[1].name,
      third: response.outputs[0].data.concepts[2].name,
      fourth: response.outputs[0].data.concepts[3].name,
      fifth: response.outputs[0].data.concepts[4].name
    }
  }

  displayDescription = (box) => {
    console.log(box);
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models.predict(Clarifai.GENERAL_MODEL, this.state.input)
    .then(response => this.displayDescription(this.calculateDescription(response)))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Logo />
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}/>
        <Recognition box={this.state.box} imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
