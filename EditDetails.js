import React, { useState } from 'react';
import { View, Button, TextInput } from 'react-native';

const EditDetailsScreen = ({ route, editTask, navigation }) => {
  const { taskId, taskValue, taskCurrentDay } = route.params;
  const [newValue, setNewValue] = useState(taskValue);

  // I want the function to on press, do edittask, and take me to the tasklist screen
  const saveAndEdit = () => {
    editTask(taskId, newValue);
    navigation.navigate('TaskList');
  }

  return (
    <View>
      <TextInput style = {{ color : 'black'}}
        value={newValue}
        onChangeText={setNewValue}
      />
      <Button
        title="Save"
        onPress={saveAndEdit}
      />
    </View>
  );
};

export default EditDetailsScreen;

