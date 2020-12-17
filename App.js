import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './navigators/navigator';


import { createStore , combineReducers } from 'redux';
import {Provider} from 'react-redux';
import {dataReducer} from './store/reducers/reducer';
import {todoReducer} from './store/reducers/todoreducer';


const combine = combineReducers({
  DATAS : dataReducer,
  TODO : todoReducer
})
const Store = createStore(combine);


export default function App() {
  return (
      <Provider store = {Store}><Navigator /></Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
