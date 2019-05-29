import axios from 'axios';

const GET_ALL_CAMPUSES = 'GET_ALL_CAMPUSES';
const ADD_CAMPUS = 'ADD_CAMPUS';

const initialState = {
  campuses: [{
    name: 'One Piece Elementary School',
    imageUrl:'https://images.unsplash.com/photo-1542404937-2132aa1fa6fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    address: 'Victor Plains, Wisokyburgh, 90566-7771',
    description: 'Elementary School for One Piece Students'
  },
  {
    name: 'One Piece Junior High',
    imageUrl: 'https://images.unsplash.com/photo-1541691734047-8345ea5cf6ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    address: 'Hoeger Mall, South Elvis, 53919-4257',
    description: 'Junior High School for One Piece Students'
  },
  {
    name: 'One Piece High School',
    imageUrl: 'https://images.unsplash.com/photo-1547653872-052e3539decc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    address: 'Skiles Walks, Roscoeview, 33263',
    description: 'High School for One Piece Students'
  },
  {
    name: 'One Piece University',
    imageUrl: 'https://images.unsplash.com/photo-1527891751199-7225231a68dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    address: 'Douglas Extension, McKenziehaven, 9590-4157',
    description: 'Univerisity for One Piece Students'
  }
  ]
};

export const getAllCampuses = () => {
  return {
    type: GET_ALL_CAMPUSES,
  }
}

export const campusReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_ALL_CAMPUSES: {
      return {...state};
    }
    default:
      return state;
  }
};
