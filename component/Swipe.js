import React, { useRef } from 'react';
import { View, Text, PanResponder, Animated } from 'react-native';
import styles from './style/style';

const SwipeLeftComponent = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        { dx: pan.x } // track gesture x coordinate
      ],
      { useNativeDriver: false }
    ),
    onPanResponderRelease: (e, gestureState) => {
      // Check if the gesture was a swipe to the left
      if (gestureState.dx < -100) {
        // Perform action when swiped left
        // For example, navigate to a new screen or render a new component
        // You can use navigation libraries like React Navigation for screen navigation
        // For simplicity, we'll just console log here
        console.log('Swiped left!');
        // Now you can render a new component or perform other actions
        // For demonstration purposes, let's just change the state to render a new component
        // setShouldRenderNewComponent(true);
      }
    }
  });

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[styles.box, { transform: [{ translateX: pan.x }] }]}
      >
        <Text>Swipe me left</Text>
      </Animated.View>
    </View>
  );
};

export default SwipeLeftComponent;
