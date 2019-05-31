import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import SingleCampus from './SingleCampus';
import AddCampus from './AddCampus';
import { getAllCampuses } from '../reducers/Campus';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    margin: 10,
  },
});

class CampusList extends React.Component {
  componentDidMount = () => {
    this.props.getCampuses();
  }

  render() {
    return (
      <View style={styles.container}>
        <AddCampus />
        <FlatList
          data={this.props.campuses}
          renderItem={obj => <SingleCampus {...obj.item} /> }
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
