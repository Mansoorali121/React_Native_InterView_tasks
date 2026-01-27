import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

const Task3 = () => {
  const [isvisible, setisVisible] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={()=>setisVisible(!isvisible)}
      >
        <Text>Click Me</Text>
      </TouchableOpacity>
      <Text>{isvisible ? 'Click to Hide' : 'CLick to Show'}</Text>
      {isvisible && <Text>This is Some Additional Text</Text>}
    </View>
  );
};

export default Task3;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center' },
  button: {
    backgroundColor: '#DDDDDD',
    height: 50,
    width: 100,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    borderRadius: 20,
  },
});
