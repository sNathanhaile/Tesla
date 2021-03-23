/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 
import React from 'react';
import CarList from './components/CarList';
import CarItem from './components/carItem';
import {StyleSheet,View, Dimensions} from 'react-native';
import Header from './components/Header';





export default function App() {
  // console.warn("working")

  return (
   
    <View style={styles.container }>
    
      <CarList/>
      <Header/>
   
      </View>
     
   
  );
};

const styles = StyleSheet.create({
  
  container: {

     flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   
    
   
  },

  
});

//export default App;
