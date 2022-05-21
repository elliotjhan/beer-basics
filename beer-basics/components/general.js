import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

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
        Looking a little more closely, we learn that beer, like leavened bread, 
        is the product of starch-based yeast fermentation. Grains, most often super-starchy barley, are allowed to partially germinate and are then combined with water, creating a kind of cereal mash into which brewers unleash a small, single-celled army of Saccharomyces cerevisiae, or brewer’s yeast. Now, yeast love sugar just about as much as a kid in a candy store, except when yeast eat sugar, instead of having a tantrum and sticky fingers, they create magical byproducts: ethanol and CO2, which can show up in various levels in some of our favorite, and least favorite, beers. (Alcohol in a beer is often recorded on the label as “ABV,” alcohol by volume.) Hops, the cone-shaped flower of a tall climbing plant related to Cannabis, are added in the brewing process both as a means of clarification and stabilization, and to impart their signature flavors—which range from bitter and astringent to floral, fruity, and citrusy. And while beers can look anything from ultra-light golden to almost impenetrably rich brown, because the base of the beer is a grain mash, final colors usually tend to land somewhere in the brownish spectrum.
        Again, variations abound, and just like wine, beer can sometimes assume 
        some of the ambient terroir of its environment (indigenous yeast strains, 
        water content, local fruit or hop flavors, etc.). But wherever water, malt, 
        yeast, and hops come together in such a way that fermentation happens, 
        the result—which you might enjoy out of a bottle or can or Solo cup, or 
        maybe even an elegant Pilsner glass—is beer.
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