import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

const General = () => {
  return (
    <View>
      <Text style={styles.titleText}>What Is Beer?</Text>
      <Text style={styles.baseText}>
        If we’re talking about a beverage with literal millennia of 
        history, the answer’s bound to get a little complicated.
        Fortunately for beer lovers and beer newbies everywhere, the basic formula 
        for beer has remained the same for centuries: beer is the fermented, 
        alcoholic product of the careful combination of water, malt, hops, and 
        yeast. That’s it. Okay, so hops weren’t always included in the mix, but 
        we’ll get to that later. Where the modern beer industry is concerned, 
        whatever six pack you pick up from your local refrigerated case, the 
        malt-hops-yeast trifecta will be the secret of its glory. Of course, 
        this being the modern beer industry, there’s also a chance someone got a 
        little inspired and brewed apricots into it, or maybe the beer was “hopped” 
        for an extra-long period of time—resulting in a more assertively bitter 
        flavor. But the basic backbone of your beer, from Coors to craft, remains 
        deliciously the same. And that’s because you don’t mess with the simplicity 
        of a good recipe. 
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Cochin"
  }
});

export default General;