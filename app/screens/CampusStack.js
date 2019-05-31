import CampusList from './CampusList';
import AddCampus from './AddCampus';
import SingleCampusDetail from './SingleCampusDetail';
import { createStackNavigator } from 'react-navigation';

const CampusStack = createStackNavigator(
  {
    CampusList: {
      screen: CampusList,
    },
    AddCampus: {
      screen: AddCampus,
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
