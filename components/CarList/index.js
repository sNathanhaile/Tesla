import React from 'react';
import { View, Text, FlatList, Dimensions} from "react-native";
import styles from './styles';
import cars from './cars';

import CarItem from '../carItem';


const CarList = (props) =>{

   
return(
    <View style={styles.container}>
        
        <FlatList
         data={cars}
        
         renderItem={({item}) => <CarItem car={item} ></CarItem>}
         showsVerticalScrollIndicator={false}
         snapToAlignment={'start'}
         decelerationRate={'fast'}
         snapToInterval={Dimensions.get('window').height}

         keyExtractor={item=>item.id}
  
        />



           
    </View>

 );


};

export default CarList;


