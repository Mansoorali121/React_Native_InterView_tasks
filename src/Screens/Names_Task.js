import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';

const Names_Task = () => {
  const namesData = [
    { id: 1, name: 'Mohsin' },
    { id: 2, name: 'Mansoor' },
    { id: 3, name: 'Ahsan' },
    { id: 4, name: 'Hassan' },
    { id: 5, name: 'Ali' },
    { id: 6, name: 'Ahmed' },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={namesData}
        keyExtractor={product => product.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.namecontainer}
              onPress={() => Alert.alert('Button Pressed..!')}
            >
              <Text style={styles.nametext}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  namecontainer: {
    backgroundColor: '#DDDDDD',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 20,
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 20,
  },
  nametext: { color: 'blue', fontSize: 16, fontWeight: '600' },
});

export default Names_Task;
