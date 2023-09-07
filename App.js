import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  FlatList,
  Text,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TaskDetailScreen from './TaskDetailScreen';
import EditDetailsScreen from './EditDetails';


const Stack = createStackNavigator();

const App = () => {
  const [task, setTask] = useState('');
  const [taskDuration, setDuration] = useState('');
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTask] = useState([]);

  const addTask = () => {
    if (task.trim().length > 0) {
      setTasks([
        ...tasks,
        { id: Date.now().toString(), value: task, duration: taskDuration, currentDay: Date() },
      ]);
      setTask('');
      setDuration('');
    }
  };

  const removeTask = (taskId) => {
    const taskToRemove = tasks.find((t) => t.id == taskId);
    const updatedTask = {...taskToRemove, currentDay: Date()};
    //Make a shallow copy of taskToRemove which is going to be our task that matches the id that we want to remove, and then add a currentDay property
    //If currentDay property already exists than rewrite what is in there with the new value
    setCompletedTask([...completedTasks, updatedTask]);
    //Push that updatedTask into the completedTasks array
    setTasks(tasks.filter((t) => t.id !== taskId));
    //Takes the current tasks array, and looks at each item, if the id of that task does not match the current taskId given, then we keep it in our new array
  };

  const editTask = (taskId, newValue) => {
    setTasks(
      tasks.map((t) => (t.id === taskId ? { ...t, value: newValue } : t))
    );
  };

  /*
NavigationContainer is the component that manages and has all navigation functionality in the app, root of nav tree
provdies context for all its child components, so they can access current nav state and do their nav actions.

Stack.navigator is the component that implements the stack naivation pattern. The pattern is that screens are stacked on each other, with the newest one
being at the top, opening a new screen will it to the top, and hitting back will remove it from the top and get the next screen

Stack.screen is the individual screens within the stack.
  Name prop which is how we refer to the screen, and either component prop, which is the component to render what we want in the screen, or can do child function to render

All stackscreens must in the app component because the navigationContainer is in the app component
*/
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TaskList" options={{ title: 'Task List' }}>
          {(props) => (
            <View style={styles.screen}>
              <View style={styles.inputContainer}>
                <Button
                color = "#FD7E14"
                  title="Add"
                  onPress={() => props.navigation.navigate('AddNewTask')}
                />
                <Button
                  color = "#FF6347"
                  title="Completed"
                  onPress={() => props.navigation.navigate('completedTask')}
                />
              </View>
              <FlatList
                data={tasks}
                renderItem={(
                  { item } //item is how we refer to each item within our tasks list
                ) => (
                  <View style={styles.listItem}>
                    <Text
                      style={styles.details}
                      onPress={() =>
                        props.navigation.navigate('TaskDetail', {
                          taskId: item.id,
                          taskValue: item.value,
                          theTaskDuration: item.duration,
                          taskCurrentDay: item.currentDay,
                        })
                      }>
                      {item.value}
                    </Text>
                    <Text style = {styles.date}>Task duration: {item.duration}</Text>
                    <Text style = {styles.date}>Day added: {item.currentDay}</Text>
                    <Button title="X" color = '#FF6347' onPress={() => removeTask(item.id)} />
                  </View>
                )}
                keyExtractor={(item) => item.id}
              />
            </View>
          )}
        </Stack.Screen>

        <Stack.Screen
          name="AddNewTask"
          options={{
            title: 'Task Detail',
            headerBackTitleVisible: false,
            headerBackImage: () => <Text style={{ color: '#FF6347' }}>Done</Text>,
          }}>
          {(props) => (
            //Make sure to wrap it in a view because stack.screen needs something to return
            <View style = {styles.taskContainer}>
              <TextInput
                placeholder="Add a task"
                placeholderTextColor= 'black' 
                style={styles.input}
                onChangeText={setTask}
                value={task}
              />
              <TextInput
                placeholder="Add duration"
                placeholderTextColor= 'black' 
                style={styles.input}
                onChangeText={setDuration}
                value={taskDuration}
              />
              <View>
              <Button
                title="Add Task"
                onPress={() => {
                  addTask();
                  props.navigation.goBack();
                }}
              />
              </View>
            </View>
          )}
        </Stack.Screen>

        <Stack.Screen
          name="completedTask"
          options={{
            title: 'Completed Task Detail',
            headerBackTitleVisible: false,
            headerBackImage: () => <Text style={{ color: '#FF6347' }}>Done</Text>,
          }}>
          {(props) => (
            <View>
              <FlatList
                data={completedTasks}
                contentContainerStyle={{ paddingHorizontal: 16 }}
                renderItem={({ item }) => (
                  <View style={styles.listItem}>
                    <Text style = {{ color : '#FF7276'}}>Task: {item.value} </Text>
                    <Text style = {{ color : '#FF7276'}}>Task Duration: {item.duration} </Text>
                    <Text style = {{ color : '#FF7276'}}>Day completed: {item.currentDay} </Text>
                  </View>
                )}
                keyExtractor={(item) => item.id}
              />
            </View>
          )}
        </Stack.Screen>

        <Stack.Screen
          name="TaskDetail"
          component={TaskDetailScreen}
          options={{
            title: 'Task Detail',
            headerBackTitleVisible: false,
            headerBackImage: () => <Text style={{ color: 'blue' }}>Done</Text>,
          }}
        />
        <Stack.Screen
          name="EditDetails"
          options={{
            title: 'Edit Detail',
            headerBackTitleVisible: false,
            headerBackImage: () => <Text style={{ color: '#FF6347' }}>Done</Text>,
          }}>
          {(props) => (
            <EditDetailsScreen //How to go to another js page, if you do not want to render everything in this screen
              {...props}
              editTask={editTask} //Passing functions through
              addTask={addTask}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 10
  },
  input: {
    color: 'black',
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
  listItem: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderColor: 'grey',
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
  },
  details: {
    color: '#6666FF',
    textDecorationLine: 'underline',
  },
  date: {
    color: 'black'
  },
});

export default App;
