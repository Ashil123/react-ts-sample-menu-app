import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import { MyMenu } from './sampleMenu';
import './style.scss';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div className="main-modal">
        <MyMenu />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
