import React from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

let data = [
  {
    id: 'General',
    title: 'What Is Beer'
  },
  {
    id: 'Brewing',
    title: 'The Brewing Process'
  },
  {
    id: 'History',
    title: 'History of Beer'
  }
]

const Item = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <Text style={styles.title}>
        { title }
      </Text>
    </TouchableOpacity>
  )
}

const Menu = (props) => {
  const renderItem = ({item}) => {
    return (
      <Item 
        title={item.title} 
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
    flex: 1
  },
  item: {
    backgroundColor: '#2c5fc2',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Menu;
