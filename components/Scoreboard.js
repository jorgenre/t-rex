import React, { Component } from 'react';
import {AppRegistry, Text, StyleSheet, View} from 'react-native'

class Scoreboard extends Component {
  constructor(props) {
    super(props);
    let _score = 0;
    this.state = {score: _score};
    setInterval( () => {
      _score = _score + 1;
      this.setState({score: _score})
    }, 700);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.scoreText}>Score: </Text>
        <Text style={styles.scoreCounter}>{this.state.score}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      top: 20,
      right: 1
    },
    scoreText: {
      fontSize: 30,
    },
    scoreCounter: {
      fontSize: 30,
      width:50,
    },

});

export default Scoreboard;
