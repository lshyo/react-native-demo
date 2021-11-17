import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';
interface Props {}
const FadeView: React.FC<Props> = props => {
  const fadeAnim = useRef(new Animated.Value(0.2)).current;
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    fadeIn();
  }, []);
  return (
    <Animated.View style={{opacity: fadeAnim, flex: 1}}>
      {props.children}
    </Animated.View>
  );
};
export default FadeView;
