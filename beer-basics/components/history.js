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
        source={require('./../assets/history1.jpeg')}
      />
      <Text style={styles.titleText}>History</Text>
      <Text style={styles.baseText}>
      Like wine, beer has a long history, one that’s longer than we’ll ever be able to trace. Residue of the first known barley beer was found in a jar at the Godin Tepe excavation site in modern day Iran, presumably sitting there since someone took his or her last sip around 3400 B.C. But chances are, the first beer had been “cracked” millennia before that.
      </Text>
      <Text style={styles.baseText}>
      So while an exact date or time for the first chug, or keg stand, or even hiccup, is not known, what is known is that beer, like bread, developed best in farm-based, agrarian societies where there was an enough grain and time for fermentation. One thing we definitely know is that ancient man loved beer as much as—if not more—than we do: the Babylonians had about 20 recipes for beer, Egyptian Pharaohs were buried with vats of the stuff, even the workers who built the pyramids were essentially paid in beer. One of the first written recipes for beer actually comes from a poem, a 3800 year-old ode to brewing that was etched into clay tablets. Found in ancient Sumer (modern day Iraq), the “Hymn to Ninkasi” celebrates the Sumerian goddess of beer and also conveniently outlines steps for brewing (lines like “The filtering vat, which makes a pleasant sound,/ You place appropriately on a large collector vat” could give Shakespeare a run for his money).
      </Text>
      <Text style={styles.baseText}>
      However it began, beer rapidly took hold as one of civilization’s favorite—and safest—ways to drink. Historically speaking, water wasn’t always reliably potable for most cultures, and alcoholic drinks like beer (also sanitized by the application of heat) would have been safer. Of course, the appearance of beer was changing as brewing methods evolved. Babylonians drank their beer with a straw—it was thicker, full of grain. But by the 16th Century, Germany’s “Reinheitsgebot” beer purity law had essentially removed everything but water, hops, and barley from acceptable brewing ingredients (yeast, a slight oversight, was added back to the list a few centuries later).
      </Text>
      <Text style={styles.baseText}>
      Even hops weren’t always as ubiquitous. Ancient Egyptians would have had a beer stabilized and flavored with things like wild herbs, dates, olive oil, and meadowsweet. And for centuries, beer cultivation in Europe relied on a mixture of herbs and spices called gruit. Only around the turn of the first millennium A.D. were hops regularly finding their way to beer, with Germany exporting hops for brewing around the 13th century.
      </Text>
      <Text style={styles.baseText}>
      Over the centuries, beer’s popularity has risen and fallen and risen again. In America, Prohibition introduced our palates to watered-down beer, a lighter flavor profile that lingers to this day, especially among mass-marketed beers. But craft beer has made serious gains in the market, yielding a historically unprecedented diversity of styles. Craft brewers are even reviving ancient recipes: in 1990, Anchor Steam’s Fritz Maytag brewed a beer using the Ninkasi poem’s recipe, and Dogfish Head’s Ancient Ales line includes beers like the “Ta Henket,” or Egyptian bread beer, which you can simply purchase and imbibe, no pyramid experience required.
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