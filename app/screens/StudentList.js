import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, FlatList } from 'react-native';
import { getAllStudentsThunk } from '../reducers/Student';
import SingleStudent from './SingleStudent';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});


class StudentList extends React.Component {
  componentDidMount = () => {
    this.props.getAllStudents();
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.students}
    renderItem= { obj => <SingleStudent {...obj.item} /> }
          keyExtractor={item => item.email}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.students.students
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllStudents: () => dispatch(getAllStudentsThunk())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(StudentList);
