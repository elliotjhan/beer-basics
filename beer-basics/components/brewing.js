import React from 'react';
import { StyleSheet, Text, ScrollView, Image } from 'react-native';
import { useFonts } from 'expo-font';

const General = () => {
  useFonts({
    'Quicksand': require('./../assets/fonts/Quicksand-Regular.ttf'),
    'Quicksand-Bold': require('./../assets/fonts/Quicksand-Medium.ttf')
  });
  return (
    <ScrollView>
      <Image 
        style={styles.image}
        source={require('./../assets/brewing1.jpeg')}
      />
      <Text style={styles.titleText}>Brewing</Text>
      <Text style={styles.baseText}>
      Put simply, “brewing” is the practice of regulating the 
      interactions between water, starch, yeast, and hops so that 
      the end result is what is called beer.
      </Text>
      <Text style={styles.baseText}>
      Of course, the actual process of brewing is a lot more complicated 
      (full of terrifying terms like lautering, wort, and isomerization). 
      It’s the job of the brewer to have as much control over as many 
      elements as possible so that the end result is close to what he or 
      she had in mind.
      </Text>
      <Text style={styles.baseText}>
      In a sense, “brewing” is really about doing as much as possible to 
      influence the results of a process that’s entirely hands off: 
      fermentation. We are able to brew beer (and drink beer, and spill beer) 
      for one reason: single-celled organisms called yeast, most often the 
      Saccharomyces cerevisiae or Saccharomyces pastorianius variety, like 
      to metabolize starch-derived sugars into ethyl alcohol and CO2. When 
      we brew a beer, we are preparing a certain amount and variety of grain 
      to produce those sugars, and then adding yeast so they can feast and 
      create alcohol. If you can wrap your head around that, you can grasp 
      the concept of brewing. (Think of hops, that other essential brewing 
      ingredient, like seasoning, stabilizing the brew and adding flavor.)
      </Text>
      <Text style={styles.baseText}>
      To get a little deeper into brewing, here is a breakdown of the 
      basic steps, with a few key terms:{'\n'}
      {'\n'}1. A starch source, typically a grain (and typically barley) is malted, or allowed to partially germinate and then dried. This partial germination makes for easier conversion of the grain’s starches into sugars.
      {'\n\n'}2. In the mash stage, the malted grains are introduced to water and a certain amount of heat to enable the natural enzymes in the grain to convert its starches into fermentable sugars.
      {'\n\n'}3. The mash is then lautered, basically filtered to remove the solids.
      {'\n\n'}4. The remaining liquid is then boiled. Hops may be added both at the beginning of the boil and, depending on the kind of beer being made, toward the end. The result of the boil is called the wort.
      {'\n\n'}5. The filtered wort is cooled to a specific temperature, at which point yeast is added so that the process of fermentation can begin.
      {'\n\n'}6. Fermentation may be done in a variety of vessels, and may be followed by a period of conditioning (further aging away from dead yeast cells) or secondary fermentation (in bottles, e.g.).
      {'\n\n'}7. However you store it, when you pour it, the result will be beer.
      </Text>
      <Text style={styles.baseText}>
      But don’t open a brewery just yet! This is a very rough outline—and 
      there are myriad variables, from things you can control like the 
      grains, hops, and yeast (or any spices, fruits, or additional 
      ingredients) to things you have less control over (e.g. the 
      ambient environment, even the mineral content of your water source). 
      And then of course there’s how you’re going to ferment the beer 
      (do you want an ale or a lager?) The mastery of these elements, 
      and the willingness to wait a few weeks for yeast to do its work, 
      is the proud, patient, magical craft we call brewing.
      </Text>

      <Text style={styles.baseText}>

      </Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Quicksand",
    paddingTop: 10,
    paddingHorizontal: 20,
    fontSize: 18
  },
  titleText: {
    fontSize: 26,
    fontWeight: "bold",
    fontFamily: "Quicksand",
    paddingTop: 20,
    paddingHorizontal: 20
  },
  image: {
    width: '100vw',
    height: '30vh',
    resizeMode: 'cover'
  }
});

export default General;