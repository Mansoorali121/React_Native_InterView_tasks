import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

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

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        keyExtractor={names => names.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.itemcontainer}>
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
    marginTop: 20,
    marginHorizontal: 20,
  },
  itemcontainer: {
    width: '80%',
    height: '40%',
    backgroundColor: '#587688',
    margin: 10,
    marginStart: 10,
    padding: 12,
  },
  nameText: { fontSize: 14, fontWeight: '600', color: '#fff', marginTop: 10 },
  selectedItem: {
    width: '80%',
    height: '40%',
    backgroundColor: 'blue',
    margin: 10,
    marginStart: 10,
    padding: 12,
  },
});
