import React, { Component, PropTypes } from 'react';
import Header from './Header';
import Footer from './Footer';

class App extends Component {

  render() {
      return (
        <div>
        <Header />
        <section className="section-padding">
          {this.props.children}
        </section>
        <Footer />
        </div>
      );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
