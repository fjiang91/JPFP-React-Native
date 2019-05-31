import { createStackNavigator } from 'react-navigation';
import StudentList from './StudentList';

const StudentStack = createStackNavigator(
  {
    StudentList: {
      screen: StudentList,
    },
  },
  {
    initialRouteName: 'StudentList',
  }
);

export default StudentStack;
