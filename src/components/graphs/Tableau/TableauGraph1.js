import React, { Component } from 'react';
import tableau from 'tableau-api';

class Test extends Component {
  componentDidMount() {
    this.initViz();
  }

  initViz() {
    const vizUrl =
      'https://public.tableau.com/profile/alex1040#!/vizhome/1000Startups_30/Sheet2';
    const vizContainer = this.vizContainer;
    let viz = new window.tableau.Viz(vizContainer, vizUrl);
  }

  render() {
    return (
      <div
        ref={div => {
          this.vizContainer = div;
        }}
      ></div>
    );
  }
}

export default Test;
