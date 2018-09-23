import React, { Component } from 'react';
import {AppState, AppRegistry, View, Image, Animated, Easing, Text, StyleSheet, Dimensions} from 'react-native'

export const road_style = {
  'flat1'       : require('../img/road_flat1.png'),
  'cactus1'   : require('../img/road_smal_single_cactus.png'),
}

class Road extends Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
    this.state = {road_key: 'flat1'};
    this.runRoad();
  }

  // componentWillReceiveProps (nextProp) {
  //   this.setState({road_key: nextProp.road_key});
  // }

  runRoad() {
    this.animatedValue.setValue(0)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 8000,
        easing: Easing.linear
      }
    ).start(this.runRoad.bind(this))
  }

  render() {
    const imgfilename = road_style[this.state.road_key];
    const screenWidth = Dimensions.get('screen').width;
    const outputRange = {
      rtl: [0, screenWidth],
      ltr: [screenWidth, -55]
    }
    const marginLeft = this.animatedValue.interpolate({
       inputRange: [0, 1],
       outputRange: outputRange['ltr']
     })

    return (
      <View style={styles.container} ref={view => { this.container = view; }}>
          <Animated.Image
            source={imgfilename}
            style={{
              marginLeft,
              height: 80,
              width: 400}} />
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
export default Road;
