import React, { Component } from 'react';
import {AppRegistry, Text, StyleSheet, Button, View, Alert} from 'react-native'

class Buttons extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Button
            style={styles.buttonDuck}
            onPress={this.props._onPressButtonDuck}
            title="Duck"
        />
        <Button
            style={styles.buttonJump}
            onPress={this.props._onPressButtonJump}
            title="Jump"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    buttonJump: {
      backgroundColor:"#123456",
    },
    buttonDuck: {
      backgroundColor:"#123456",
    }
});

export default Buttons;
