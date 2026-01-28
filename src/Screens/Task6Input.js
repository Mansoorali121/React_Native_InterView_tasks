import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

const Task6Input = () => {
  const [search, setSearch] = useState('');
  const [Data, setData] = useState([
    { id: 1, name: 'John' },
    { id: 2, name: 'Mansoor' },
    { id: 3, name: 'Smith' },
    { id: 4, name: 'Ahsan' },
  ]);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputstyle}
        placeholder="Search Names here: "
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={Data}
        keyExtractor={name => name.id.toString()}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.name}</Text>
            </View>
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
  },
});
