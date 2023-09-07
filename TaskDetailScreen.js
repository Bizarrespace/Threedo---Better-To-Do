import React from 'react';
import { View, Text, Button } from 'react-native';
import  styles  from './App';

const TaskDetailScreen = ({ route, navigation }) => {
  const { taskId, taskValue, theTaskDuration, taskCurrentDay } = route.params;

  return (
    <View>
      <Button
        title="Edit"
        onPress={() =>
          navigation.navigate('EditDetails', {
            taskId,
            taskValue,
            taskCurrentDay,
          })
        }
      />
      <Text style = {{ color : '#6666FF'}}> Task: {taskValue}</Text>
      <Text style = {{ color : '#6666FF'}}> Task duration: {theTaskDuration}</Text>
      <Text  style = {{ color : '#6666FF'}} > Day added: {taskCurrentDay}</Text>
    </View>
  );
};

export default TaskDetailScreen;
