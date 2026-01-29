import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Task9RefreshApi = () => {
  const [Dataa, setDataa] = useState([]);
  const [loading, setLoading] = useState(false);

  const Fetchdata = async () => {
    try {
      //   setLoading(true);
      const reponse = await axios.get(
        'https://69609023e7aa517cb79661a7.mockapi.io/Books',
      );
      setDataa(reponse.data);
      console.log(reponse.data);
      setLoading(false);
    } catch (error) {
      console.log('Error', error);
      setLoading(false);
    }
  };
  useEffect(() => {
    Fetchdata();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={Dataa}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.itemStyle}>
              <Text>{item.id}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Task9RefreshApi;

const styles = StyleSheet.create({
  container: { flex: 1 },
  itemStyle: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',

    backgroundColor: '#632020dd',
  },
});
