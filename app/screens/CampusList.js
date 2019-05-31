import React from 'react';
import { FlatList, View, StyleSheet, Button } from 'react-native';
import SingleCampus from './SingleCampus';
import { getAllCampuses } from '../reducers/Campus';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

class CampusList extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: "Campus List",
      headerRight:  <Button title="Add Campus" onPress={ () => navigation.navigate('AddCampus')} />
    }
  };

  componentDidMount = () => {
    this.props.getCampuses();
  }

  handleSelectContact = (contact) => {
    this.props.navigation.navigate('SingleCampusDetail', {...contact});
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.campuses}
          renderItem={obj => <SingleCampus {...obj.item} handleSelectContact={ (contact) => this.handleSelectContact(contact) } /> }
          keyExtractor={item => item.name}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses.campuses
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCampuses: () => dispatch(getAllCampuses())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CampusList);
