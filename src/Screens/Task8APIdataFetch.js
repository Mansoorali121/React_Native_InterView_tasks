import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';

const Task8APIdataFetch = () => {
  const [Dataa, setDataa] = useState([]);
  const [loading, setLoading] = useState(false);
  const FetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users',
      );
      const json = await response.json();
      setDataa(json);
      console.log('Fetched Data', json);
      setLoading(false);
    } catch (error) {
      console.log('Error Fetching Data', error);
      setLoading(false);
    }
  };
  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={Dataa}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => {
          return <Text>{item.id}</Text>;
        }}
      />
    </View>
  );
};

export default Task8APIdataFetch;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
});
