import { createStore, applyMiddleware } from 'redux'
import loggingMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios'
import rootReducer from './reducers'


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

// action creators
// *** action creators return objects whose type represents an action string defined above and whose other properties will ultimately be used in the reducer function to update the value of state if and only if the action type occurs
export function getCampuses (campuses) {
  const action = {
    type: GET_CAMPUSES,
    campuses
  }
  return action
}

export function getCampus (campus) {
  const action = {
    type: GET_CAMPUS,
    campus
  }
  return action
}

export function getStudentsAtCampus (studentsAtCampus) {
  const action = {
    type: GET_STUDENTS_AT_CAMPUS,
    studentsAtCampus
  }
  return action
}

export function writeCampusName (newCampusName) {
  const action = {
    type: WRITE_CAMPUS_NAME,
    newCampusName
  }
  return action
}

export function writeCampusDescription (newCampusDescription) {
  const action = {
    type: WRITE_CAMPUS_DESCRIPTION,
    newCampusDescription
  }
  return action
}

export function updateCampusName (updatedCampusName) {
  const action = {
    type: UPDATE_CAMPUS_NAME,
    updatedCampusName
  }
  return action
}

export function updateCampusDescription (updatedCampusDescription) {
  const action = {
    type: UPDATE_CAMPUS_DESCRIPTION,
    updatedCampusDescription
  }
  return action
}

export function createCampus (campus) {
  const action = {
    type: CREATE_CAMPUS,
    campus
  }
  return action
}

export function editCampus (campus) {
  const action = {
    type: EDIT_CAMPUS,
    campus
  }
  return action
}

export function deleteCampus (campus) {
  const action = {
    type: DELETE_CAMPUS,
    campus
  }
  return action
}

export function getStudents (students) {
  const action = {
    type: GET_STUDENTS,
    students
  }
  return action
}

export function getStudent (student) {
  const action = {
    type: GET_STUDENT,
    student
  }
  return action
}

export function writeStudentFirstName (newStudentFirstName) {
  const action = {
    type: WRITE_STUDENT_FIRSTNAME,
    newStudentFirstName
  }
  return action
}

export function writeStudentLastName (newStudentLastName) {
  const action = {
    type: WRITE_STUDENT_LASTNAME,
    newStudentLastName
  }
  return action
}

export function writeStudentEmail (newStudentEmail) {
  const action = {
    type: WRITE_STUDENT_EMAIL,
    newStudentEmail
  }
  return action
}

export function writeStudentGPA (newStudentGPA) {
  const action = {
    type: WRITE_STUDENT_GPA,
    newStudentGPA
  }
  return action
}

export function createStudent (student) {
  const action = {
    type: CREATE_STUDENT,
    student
  }
  return action
}

export function updateStudentFirstName (updatedStudentFirstName) {
  const action = {
    type: UPDATE_STUDENT_FIRSTNAME,
    updatedStudentFirstName
  }
  return action
}

export function updateStudentLastName (updatedStudentLastName) {
  const action = {
    type: UPDATE_STUDENT_LASTNAME,
    updatedStudentLastName
  }
  return action
}

export function updateStudentEmail (updatedStudentEmail) {
  const action = {
    type: UPDATE_STUDENT_EMAIL,
    updatedStudentEmail
  }
  return action
}

export function updateStudentGPA (updatedStudentGPA) {
  const action = {
    type: UPDATE_STUDENT_GPA,
    updatedStudentGPA
  }
  return action
}

export function editStudent (student) {
  const action = {
    type: EDIT_STUDENT,
    student
  }
  return action
}

export function deleteStudent (student) {
  const action = {
    type: DELETE_STUDENT,
    student
  }
  return action
}

// thunk creators
// *** thunk creators return functions that invoke asynchronous actions (in this case, getting data from the database) and then dispatch actions based on the data returned, updated state with that data returned
export function fetchCampuses () {
  return function thunk (dispatch) {
    axios.get('api/campuses')
      .then(res => res.data)
      .then(campuses => {
        const action = getCampuses(campuses)
        dispatch(action)
      })
  }
}

export function fetchCampus (campusId) {
  return function thunk (dispatch) {
    axios.get(`api/campuses/${campusId}`)
      .then(res => res.data)
      .then(campus => {
        const action = getCampus(campus)
        dispatch(action)
      })
  }
}

export function fetchStudentsAtCampus (campusId) {
  return function thunk (dispatch) {
    axios.get(`api/students/campus/${campusId}`)
      .then(res => res.data)
      .then(studentsAtCampus => {
        const action = getStudentsAtCampus(studentsAtCampus)
        dispatch(action)
      })
  }
}

export function postCampus (campus) {
  return function thunk (dispatch) {
    axios.post('api/campuses', campus)
      .then(res => res.data)
      .then(newCampus => {
        const action = createCampus(newCampus)
        dispatch(action)
      })
  }
}

export function updateCampus (campus, campusId) {
  return function thunk (dispatch) {
    axios.put(`api/campuses/${campusId}`, campus)
      .then(res => res.data)
      .then(updatedCampus => {
        const action = editCampus(updatedCampus)
        dispatch(action)
      })
  }
}

export function destroyCampus (campus, campusId) {
  return function thunk (dispatch) {
    axios.delete(`api/campuses/${campusId}`)
      .then(() => {
        const action = deleteCampus(campus)
        dispatch(action)
      })
  }
}

export function fetchStudents () {
  return function thunk (dispatch) {
    axios.get('api/students')
      .then(res => res.data)
      .then(students => {
        const action = getStudents(students)
        dispatch(action)
      })
  }
}

export function fetchStudent (studentId) {
  return function thunk (dispatch) {
    axios.get(`api/students/${studentId}`)
      .then(res => res.data)
      .then(student => {
        const action = getStudent(student)
        dispatch(action)
      })
  }
}

export function postStudent (student) {
  return function thunk (dispatch) {
    axios.post('api/students', student)
      .then(res => res.data)
      .then(newStudent => {
        const action = createStudent(newStudent)
        dispatch(action)
      })
  }
}

export function updateStudent (student, studentId) {
  return function thunk (dispatch) {
    axios.put(`api/students/${studentId}`, student)
      .then(res => res.data)
      .then(updatedStudent => {
        console.log('updated student in thunk after backend request', updatedStudent)
        const action = editStudent(updatedStudent)
        dispatch(action)
      })
  }
}

export function destroyStudent (student, studentId) {
  return function thunk (dispatch) {
    axios.delete(`api/students/${studentId}`, student)
    .then(() => {
      const action = deleteStudent(student)
      dispatch(action)
    })
  }
}

export default createStore(rootReducer, applyMiddleware(thunkMiddleware, loggingMiddleware))
