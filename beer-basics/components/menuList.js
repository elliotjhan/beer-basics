import React from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useFonts } from 'expo-font';

let data = [
  {
    id: 'What Is Beer?',
    title: 'What Is Beer',
    description: '\nLearn about the famous beverage',
    icon: 'beer-outline'
  },
  {
    id: 'Brewing',
    title: 'The Brewing Process',
    description: '\nEverything from the ingredients to the process',
    icon: 'flask-outline'
  },
  {
    id: 'History',
    title: 'History of Beer',
    description: '\nThe rich long history of the world\'s favorite drink',
    icon: 'book-outline'
  }
]

const Item = ({icon, description, title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <View style={styles.itemContainer}>
        <Ionicons 
          name={icon}
          size={35}
          color={'gray'}
        />
        <Text style={styles.title}>
          {title}
          <Text style={styles.description}>
            {description}
          </Text>
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const MenuList = (props) => {
  useFonts({
    'Quicksand': require('./../assets/fonts/Quicksand-Regular.ttf'),
  });
  const renderItem = ({item}) => {
    return (
      <Item 
        icon={item.icon}
        title={item.title} 
        description={item.description}
        onPress={() => props.navigation.navigate(item.id)}
      />
    )
  }

  return(
    <View style={styles.container}>
      <FlatList 
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 8,
    // shadowOffset: {
    //   width: 3,
    //   height: 5,
    // },

  },
  title: {
    fontSize: 25,
    paddingLeft: 20,
    fontFamily: 'Quicksand'
  },
  description: {
    fontSize: 13,
    color: 'gray',
    lineHeight: 10,
    fontFamily: 'Quicksand'
  }
});

export default MenuList;
