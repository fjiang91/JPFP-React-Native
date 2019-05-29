import React from 'react';
import { FlatList, View } from 'react-native';
import SingleCampus from './SingleCampus';
import AddCampus from './AddCampus';
import { campusSeed, studentSeed } from '../../seed.js';

export class CampusList extends React.Component {
  componentDidMount = () => {
    this.setState(campusSeed);
  };
  console.log(this.state;)

  render() {
    return (
      <View>
        <AddCampus />
        <FlatList
          data={this.state}
          renderItem={obj => console.log(obj) }
          keyExtractor={item => item.name}
        />
      </View>
    );
  }
}
