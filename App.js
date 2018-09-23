import React, { Component } from 'react';
import {AppRegistry, StyleSheet, View, Text } from 'react-native';
import Buttons from './components/Buttons';
import Trex from './components/Trex';
import Scoreboard from './components/Scoreboard';

export default class Trexme extends Component {
  constructor(props) {
    super(props);
    this.state = {trex_move: "run"}
    this._onPressButtonJump = this._onPressButtonJump.bind(this)
    this._onPressButtonDuck = this._onPressButtonDuck.bind(this)
  }

  _onPressButtonJump(e) {
     e.preventDefault()
     this.setState({trex_move:'jump'});
   }

  _onPressButtonDuck(e) {
     e.preventDefault()
     this.setState({trex_move:'duck'});
   }

  render() {
    return (
      <View style={styles.container}>
        <Scoreboard />
        <Trex motion= {this.state.trex_move} />
        <Buttons
          _onPressButtonJump = {this._onPressButtonJump}
          _onPressButtonDuck = {this._onPressButtonDuck}/>
      </ View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    left:20,
    flexDirection: 'column',
  },
});
