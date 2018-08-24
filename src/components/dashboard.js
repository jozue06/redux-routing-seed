import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { addThing } from '../store/thing';

class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <h1>Dashboard</h1>
        <h2>Thing count: {this.props.things.length}</h2>
        <button 
          onClick={() => this.props.addThing({ name : 'thing' + Math.floor(Math.random() * 100)})}>
          Add Random Thing
          </button>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ thingState }) => ({ things : thingState });
const mapDispatchToProps = { addThing };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);