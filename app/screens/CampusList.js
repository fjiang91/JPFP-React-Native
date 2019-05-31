import React from 'react';
import { FlatList, View } from 'react-native';
import SingleCampus from './SingleCampus';
import AddCampus from './AddCampus';
import { getAllCampuses } from '../reducers/Campus';
import { connect } from 'react-redux';

class CampusList extends React.Component {
  componentDidMount = () => {
    this.props.getCampuses();
  }

  render() {
    return (
      <View>
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
