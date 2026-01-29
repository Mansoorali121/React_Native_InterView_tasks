import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Task9RefreshApi = () => {
  const [Dataa, setDataa] = useState([]);
  const [loading, setLoading] = useState(true);

  const Fetchdata = async () => {
    try {
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
  //   if (loading) return <ActivityIndicator size={'large'} color={'blue'} />;

  useEffect(() => {
    Fetchdata();
  }, []);
  return (
    <View style={styles.container}>
      {loading ? (
        <View style={{marginTop:20}}>
            <ActivityIndicator size="large" color="blue" />
            </View>
      ) : (
        <FlatList
          data={Dataa}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <View style={styles.itemStyle}>
                <Text style={{ color: 'red' }}>{item.id}</Text>

                <Text style={{ color: 'black' }}>{item.author}</Text>
                <Text style={{ color: 'black' }}>{item.name_of_book}</Text>
              </View>
            );
          }}
        />
      )}
    </View>
  );
};

export default Task9RefreshApi;

const styles = StyleSheet.create({
  container: { flex: 1 },
  itemStyle: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginTop: 10,
    marginHorizontal: 20,
    backgroundColor: '#DDDDDD',
    marginBottom: 20,
  },
});
