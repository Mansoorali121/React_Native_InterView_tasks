import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';

const Task5 = () => {
  const [products, setProducts] = useState([
    { id: 1, Item_Name: 'Foods' },
    { id: 2, Item_Name: 'Clothes' },
    { id: 3, Item_Name: 'Electronics' },
    { id: 4, Item_Name: 'Books' },
    { id: 5, Item_Name: 'Toys' },
    { id: 6, Item_Name: 'Furniture' },
  ]);

  //   Function to Delete Item
  const deleteItem = id => {
    Alert.alert('Deleted item with id is : ' + id);
    const filteredItems = products.filter(item => item.id !== id);
    setProducts(filteredItems);
  };



  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={products}
        keyExtractor={product => product.id.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.itemContainer}>
              <Text>{item.Item_Name}</Text>
              <TouchableOpacity
                style={styles.deleteBtn}
                onPress={() => deleteItem(item.id)}
              >
                <Text style={styles.deleteBtntext}>Delete</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Task5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 20,
  },
  itemContainer: {
    backgroundColor: '#DDDDDD',
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  deleteBtntext: { color: 'red', marginTop: 10 },
  deleteBtn: {
    backgroundColor: '#ffff',
    borderRadius: 10,
    height: 30,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
});
