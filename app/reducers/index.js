/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'

// initial state
const initialState = {
  campuses: [],
  campus: {},
  studentsAtCampus: [],
  newCampusName: '',
  newCampusDescription: '',
  updatedCampusName: '',
  updatedCampusDescription: '',
  students: [],
  student: {},
  newStudentFirstName: '',
  newStudentLastName: '',
  newStudentEmail: '',
  newStudentGPA: '',
  updatedStudentFirstName: '',
  updatedStudentLastName: '',
  updatedStudentEmail: '',
  updatedStudentGPA: ''
}

// actions
const GET_CAMPUSES = 'GET_CAMPUSES'
const GET_CAMPUS = 'GET_CAMPUS'
const GET_STUDENTS_AT_CAMPUS = 'GET_STUDENTS_AT_CAMPUS'
const WRITE_CAMPUS_NAME = 'WRITE_CAMPUS_NAME'
const WRITE_CAMPUS_DESCRIPTION = 'WRITE_CAMPUS_DESCRIPTION'
const UPDATE_CAMPUS_NAME = 'UPDATE_CAMPUS_NAME'
const UPDATE_CAMPUS_DESCRIPTION = 'UPDATE_CAMPUS_DESCRIPTION'
const CREATE_CAMPUS = 'CREATE_CAMPUS'
const EDIT_CAMPUS = 'EDIT_CAMPUS'
const DELETE_CAMPUS = 'DELETE_CAMPUS'
const GET_STUDENTS = 'GET_STUDENTS'
const GET_STUDENT = 'GET_STUDENT'
const WRITE_STUDENT_FIRSTNAME = 'WRITE_STUDENT_FIRSTNAME'
const WRITE_STUDENT_LASTNAME = 'WRITE_STUDENT_LASTNAME'
const WRITE_STUDENT_EMAIL = 'WRITE_STUDENT_EMAIL'
const WRITE_STUDENT_GPA = 'WRITE_STUDENT_GPA'
const UPDATE_STUDENT_FIRSTNAME = 'UPDATE_STUDENT_FIRSTNAME'
const UPDATE_STUDENT_LASTNAME = 'UPDATE_STUDENT_LASTNAME'
const UPDATE_STUDENT_EMAIL = 'UPDATE_STUDENT_EMAIL'
const UPDATE_STUDENT_GPA = 'UPDATE_STUDENT_GPA'
const CREATE_STUDENT = 'CREATE_STUDENT'
const EDIT_STUDENT = 'EDIT_STUDENT'
const DELETE_STUDENT = 'DELETE_STUDENT'

const rootReducer = function(state = initialState, action) {
  switch(action.type) {
    case GET_CAMPUSES:
      return Object.assign({}, state, {
        campuses: action.campuses
      })
    case GET_CAMPUS:
      return Object.assign({}, state, {
        campus: action.campus
      })
    case GET_STUDENTS_AT_CAMPUS:
      return Object.assign({}, state, {
        studentsAtCampus: [...action.studentsAtCampus]
      })
    case WRITE_CAMPUS_NAME:
      return Object.assign({}, state, {
        newCampusName: action.newCampusName
      })
    case WRITE_CAMPUS_DESCRIPTION:
      return Object.assign({}, state, {
        newCampusDescription: action.newCampusDescription
      })
    case UPDATE_CAMPUS_NAME:
      return Object.assign({}, state, {
        updatedCampusName: action.updatedCampusName
      })
    case UPDATE_CAMPUS_DESCRIPTION:
      return Object.assign({}, state, {
        updatedCampusDescription: action.updatedCampusDescription
      })
    case CREATE_CAMPUS:
      return Object.assign({}, state, {
        campuses: [...state.campuses, action.campus]
      })
    case EDIT_CAMPUS:
      return Object.assign({}, state, {
        campus: action.campus,
        campuses: [...state.campuses.filter(campus => campus.id !== action.campus.id), action.campus]
      })
    case DELETE_CAMPUS:
      return Object.assign({}, state, {
        campuses: [...state.campuses.filter(campus => campus.id !== action.campus.id)]
      })
    case GET_STUDENTS:
      return Object.assign({}, state, {
        students: action.students
      })
    case GET_STUDENT:
      return Object.assign({}, state, {
        student: action.student
      })
    case WRITE_STUDENT_FIRSTNAME:
      return Object.assign({}, state, {
        newStudentFirstName: action.newStudentFirstName
      })
    case WRITE_STUDENT_LASTNAME:
      return Object.assign({}, state, {
        newStudentLastName: action.newStudentLastName
      })
    case WRITE_STUDENT_EMAIL:
      return Object.assign({}, state, {
        newStudentEmail: action.newStudentEmail
      })
    case WRITE_STUDENT_GPA:
      return Object.assign({}, state, {
        newStudentGPA: action.newStudentGPA
      })
    case CREATE_STUDENT:
      return Object.assign({}, state, {
        students: [...state.students, action.student]
      })
    case UPDATE_STUDENT_FIRSTNAME:
      return Object.assign({}, state, {
        updatedStudentFirstName: action.updatedStudentFirstName
      })
    case UPDATE_STUDENT_LASTNAME:
      return Object.assign({}, state, {
        updatedStudentLastName: action.updatedStudentLastName
      })
    case UPDATE_STUDENT_EMAIL:
      return Object.assign({}, state, {
        updatedStudentEmail: action.updatedStudentEmail
      })
    case UPDATE_STUDENT_GPA:
      return Object.assign({}, state, {
        updatedStudentGPA: action.updatedStudentGPA
      })
    case EDIT_STUDENT:
      return Object.assign({}, state, {
        student: action.student,
        students: [...state.students.filter(student => student.id !== action.student.id), action.student]
      })
    case DELETE_STUDENT:
      return Object.assign({}, state, {
        students: [...state.students.filter(student => student.id !== action.student.id)]
      })
    default:
      return state
  }
};

export default rootReducer
