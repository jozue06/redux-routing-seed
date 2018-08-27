import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { addThing, addThingAsync } from '../store/thing';
import superagent from 'superagent'

class Dashboard extends Component {

  componentDidMount() {
    // connect
    superagent
      .get('https://lab35-josh.herokuapp.com/login')
      .auth('test', 'fun')
      .then(res => {
        console.log('yay', res.text)
        let token = res.text;
        localStorage.setItem('token', token)
      })
  }

  createRandomThing() {
    return { name: 'thing' + Math.floor(Math.random() * 100) };
  }
  render() {
    return (
      <Fragment>
        <h1>Dashboard</h1>
        <h2>Thing count: {this.props.things.length}</h2>
        <button
          onClick={() => this.props.addThing(this.createRandomThing())}>
          Add Random Thing
        </button>
        <br />
        <button
          onClick={() => this.props.addThingAsync(this.createRandomThing())}>
          Add Random Thing Async
        </button>

        {this.props.things.length ?

          <ul>
            {this.props.things.map(thing => <li key={thing.id}>{thing.name}</li>)}
          </ul>

          :

          <h2>No things :(</h2>
        }
      </Fragment>
    );
  }
}

const mapStateToProps = ({ thingState }) => ({ things: thingState });
const mapDispatchToProps = { addThing, addThingAsync };

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);