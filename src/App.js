import React, {Component, Fragment} from 'react';
import Signup from './Component/AuthComponent/Signup';
import SpotifyNavbar from './Component/HeaderComponenr/SpotifyNavbar';
import SpotifySlider from './Component/SliderComponent/SpotifySlider';

class App extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        {/* <h1>Root Component</h1> */}
        <header>
          <SpotifyNavbar />
        </header>
        <main>
          <SpotifySlider />
          {/* <Signup /> */}
        </main>
      </Fragment>
    );
  }
}

export default App;
