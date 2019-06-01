import React from 'react';
import { Button } from 'react-native';
import CampusList from './CampusList';
import AddCampus from './AddCampus';
import SingleCampusDetail from './SingleCampusDetail';
import { createStackNavigator } from 'react-navigation';

const CampusStack = createStackNavigator(
  {
    CampusList: {
      screen: CampusList,
      navigationOptions: ({navigation}) => ({
          headerTitle: "Campus List",
          headerRight:  <Button title="Add Campus" onPress={ () => navigation.navigate('AddCampus')} />
        })
    },
    AddCampus: {
      screen: AddCampus,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'New Campus'
      })
    },
    SingleCampusDetail: {
      screen: SingleCampusDetail,
    },
  },
  {
    initialRouteName: 'CampusList',
  }
);

export default CampusStack;
