import React, { Component } from 'react';
import {AppState, AppRegistry, View, Image, Animated, Easing, Text, StyleSheet} from 'react-native'
import Road from './Road';


export const trex_motions = {
  'jump'       : require('../img/trex_upraised.png'),
  'run_left'   : require('../img/trex_upraised_left_foot_up.png'),
  'run_right'  : require('../img/trex_upraised_right_foot_up.png'),
  'duck_left'  : require('../img/trex_duck_left_foot_up.png'),
  'duck_right' : require('../img/trex_duck_right_foot_up.png'),
}

class Trex extends Component {
  constructor(props) {
    super(props);
    this.state = {motion: this.props.motion};
    this.animatedValue = new Animated.Value(0)

    setInterval( () => {
      if(this.state.motion == 'run_left' || this.state.motion == 'run')
        this.setState({motion: 'run_right'})
      else if (this.state.motion == 'run_right')
        this.setState({motion: 'run_left'})
      else if (this.state.motion == 'duck_left' || this.state.motion == 'duck')
        this.setState({motion: 'duck_right'})
      else if (this.state.motion == 'duck_right')
        this.setState({motion: 'duck_left'})
    }, 300);
  }

  componentWillReceiveProps (nextProp) {
    this.setState({motion: nextProp.motion})
    if (!this.state.motion.startsWith('run'))
      return;
    if (nextProp.motion == 'duck') {
      setTimeout( () => {
        this.setState({motion: 'run'});
      }, 2000);
    }
    if (nextProp.motion == 'jump') {
      this.animateJump();
    }
  }

  animateJump() {
    this.animatedValue.setValue(0)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear
      }
    ).start(this.animateDown.bind(this))
  }
  setStatusToRun(){
    this.setState({motion: 'run'});
  }
  animateDown () {
    this.animatedValue.setValue(1)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 0,
        duration: 1000,
        easing: Easing.linear
      }
    ).start(this.setStatusToRun.bind(this))
  }


  render() {
    const imgfilename = trex_motions[this.state.motion];
    const marginTop = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -50]
    });
    return (
      <View style={styles.container} ref={view => { this.container = view; }}>
      <Animated.Image
        source={imgfilename}
        style={{
          marginTop,
          height: 55,
          width: 55}} />
          <Road road_style='flat1' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'baseline'
    },
});
export default Trex;
