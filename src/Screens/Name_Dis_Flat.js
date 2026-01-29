import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';

const Name_Dis_Flat = () => {
  const list = [
    { id: 1, name: 'Ali' },
    { id: 2, name: 'Ahsan' },
    { id: 3, name: 'Ahmed' },
    { id: 4, name: 'Asad' },
    { id: 5, name: 'Hassan' },
    { id: 6, name: 'Manzoor' },
    { id: 7, name: 'Mansoor' },
    { id: 8, name: 'Mohsin' },
  ];

  const [selctedItem, setSelectedItem] = useState(null);
  //
  const handleItemPress = item => {
    Alert.alert('Selected Name is: ' + item.name);
    setSelectedItem(item.id);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        keyExtractor={names => names.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={[
                styles.itemcontainer,
                item.id === selctedItem && styles.selectedItembg,
              ]}
              onPress={() => handleItemPress(item)}
            >
              <Text style={styles.nameText}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Name_Dis_Flat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  itemcontainer: {
    width: 200,
    height: 40,
    backgroundColor: '#587688',
    margin: 10,
    marginStart: 10,
    padding: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  nameText: { fontSize: 14, fontWeight: '600', color: '#fff', marginTop: 10 },
  selectedItembg: {
  
    backgroundColor: 'blue',
   
  },
});
