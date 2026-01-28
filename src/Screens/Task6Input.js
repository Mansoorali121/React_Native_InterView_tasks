import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';

const Task6Input = () => {
  const [search, setSearch] = useState('');
  const [originaldata, setoriginalData] = useState([
    { id: 1, name: 'John' },
    { id: 2, name: 'Mansoor' },
    { id: 3, name: 'Smith' },
    { id: 4, name: 'Ahsan' },
    { id: 5, name: 'Hassan' },
    { id: 6, name: 'Mohsin' },
    { id: 7, name: 'Asad' },
    { id: 8, name: 'Manzoor' },
  ]);
  const [Data,setData] = useState(originaldata);

  //   Search Functionality Here
  const handleSearch = text => {
  setSearch(text);

  const filtered = originaldata.filter(item =>
    item.name.toLowerCase().includes(text.toLowerCase())
  );

  setData(filtered);
};

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputstyle}
        placeholder="Search Names here: "
        value={search}
        onChangeText={handleSearch}
      />
      <FlatList
        data={Data}
        numColumns={2}
        keyExtractor={name => name.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.itemcontainer}>
              <Text style={styles.itemtext}>{item.id}</Text>
              <Text style={styles.itemtext}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Task6Input;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    marginTop: 20,
  },
  inputstyle: {
    borderEndWidth: 2,
    borderColor: 'gray',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '60%',
    borderRadius: 12,
    marginBottom: 20,
  },
  itemcontainer: {
    backgroundColor: '#587688',
    padding: 10,
    width: 100,
    borderRadius: 20,
    height: 40,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: 10,
  },
  itemtext: { color: '#ffff' },
});
