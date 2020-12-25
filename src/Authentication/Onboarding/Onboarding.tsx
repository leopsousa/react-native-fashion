import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Animated from "react-native-reanimated";
// import { useValue } from "react-native-redash";

import Slide, { SLIDER_HEIGHT } from "./Slide";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDER_HEIGHT,
    backgroundColor: "cyan",
    borderBottomRightRadius: 75,
  },
  footer: {
    flex: 1,
  },
});

const Onboarding: React.FC = () => {
  // const x = useValue(0);
  // const onScroll = onScrollEvent({ x });

  // const backgroundColor = interpolateColors(x, {
  //   inputRange: [0, width, width * 2, width * 3],
  //   outputRange: ["#BFEAF5", "#BEECC4", "#FFE4D9", "#FFDDDD"],
  // });
  return (
    <View style={styles.container}>
      <Animated.View style={styles.slider}>
        <Animated.ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
        >
          <Slide label="Relaxed" />
          <Slide label="Playful" right />
          <Slide label="Excentric" />
          <Slide label="Funky" right />
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor: "cyan" }}
        />
        <View
          style={{ flex: 1, backgroundColor: "white", borderTopLeftRadius: 75 }}
        />
      </View>
    </View>
  );
};

export default Onboarding;
