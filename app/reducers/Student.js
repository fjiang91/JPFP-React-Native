import axios from 'axios';

const initialState = {
  students: []
};

const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS';

export const getAllStudents = (students) => {
  return {
    type: GET_ALL_STUDENTS,
    students
  }
}

export const getAllStudentsThunk = () => {
  return async dispatch => {
    let { data } = await axios.get('https://randomuser.me/api/?results=20&nat=us&seed=8a5c12ae80434e76');
    dispatch(getAllStudents(data.results));
  }
}

const Student = (state = initialState, action) => {
  switch (action.type){
    case GET_ALL_STUDENTS:
      return {...state, students: action.students}
    default:
      return state;
  }
}

export default Student;
