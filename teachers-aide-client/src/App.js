import React from 'react';
import { BrowserRouter as Router, Route, Link }
  from 'react-router-dom';
import LessonCheck from './components/LessonCheck';
import TeacherList from './components/TeacherList'
import TeacherLanding from './components/TeacherLanding'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Image, Container, Col, Row } from 'react-bootstrap'

const baseURL = 'http://localhost:3000';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teachers: [],
      addStuToggle: false,
      teacherID: null,
      selectedTeacher: {},
      students: [],
      lessons: [],
      selectedLesson: {},
      lessonID: null,
      grades: []
    }
    this.getTeacherID = this.getTeacherID.bind(this)
    this.getLessonID = this.getLessonID.bind(this)
    this.getTeacherData = this.getTeacherData.bind(this)
    this.getLessonData = this.getLessonData.bind(this)
    this.getStudentData = this.getStudentData.bind(this)
    this.getGradeData = this.getGradeData.bind(this)
    this.handleAddTeacher = this.handleAddTeacher.bind(this)
  }

  componentDidMount() {
    this.getTeacherData()
    this.getLessonData()
    this.getStudentData()
    this.getGradeData()
  }


  async getTeacherData() {
    const response = await axios.get(`${baseURL}/teachers`)
    const data = response.data
    console.log(data)
    this.setState({
      teachers: data
    })
  }

  async getLessonData() {
    const response = await axios.get(`${baseURL}/teachers/${this.state.teacherID}/lessons`)
    const data = response.data
    console.log(data)
    this.setState({
      lessons: data
    })
    console.log("lesson Data: ", this.state.lessons)
  }

  async getStudentData() {
    const response = await axios.get(`${baseURL}/teachers/${this.state.teacherID}/lessons/${this.state.lessonID}/students`)
    const data = response.data
    console.log(data)
    this.setState({
      students: data
    })
    console.log("student data: ", this.state.students)
  }


  async getGradeData() {
    const response = await axios.get(`${baseURL}/teachers/${this.state.teacherID}/lessons/${this.state.lessonID}/students/*/grades`)
    const data = response.data
    console.log(data)
    this.setState({
      grades: data
    })
    console.log("grade data: ", this.state.grades)
  }

  getTeacherID(id) {
    console.log('getting teacher ID')
    this.state.teachers.map(teacher => {
      console.log('teacher id: ', teacher.id)
      if (teacher.id == id) {
        console.log('ID matches')
        console.log('Teacher object: ', teacher)
        this.setState({
          selectedTeacher: teacher,
          teacherID: id
        })
      }
    })
  }

  getLessonID(id) {
    console.log('getting lesson ID')
    console.log(this.state.lessons)
    this.state.lessons.map(lesson => {
      console.log('lesson id: ', lesson.id)
      if (lesson.id == id) {
        console.log('Lesson ID matches')
        console.log('Lesson object: ', lesson)
        this.setState({
          selectedLesson: lesson,
          lessonID: id
        })

      }
    })
    console.log("The lessonID is now: ", this.state.lessonID)
    console.log("The selectedLesson is now: ", this.state.selectedLesson)
  }

  handleAddTeacher(teacher) {
    const copyTeachers = [...this.state.teachers, teacher];
    this.setState({
      teachers: copyTeachers
    });
    console.log(this.state.teachers);
  }




  render() {
    return (
      <div>
        <Router>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand to="/">Quick Check <span>&#9989;</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/TeacherList">Teacher List</Nav.Link>
              </Nav>

            </Navbar.Collapse>
          </Navbar>


          <Route
            exact path="/TeacherList"
            render={() => (
              <TeacherList
                handleAddTeacher={this.handleAddTeacher}
                getTeacherID={this.getTeacherID}
                id={this.state.teacherID}
                teachers={this.state.teachers}
              />)}
          />

          <Route
            exact path={`/teacher/${this.state.teacherID}`}
            render={(props) => (
              <TeacherLanding

                selectedTeacher={this.state.selectedTeacher}
                lessons={this.state.lessons}
                getLessonID={this.getLessonID}
              />
            )}
          />

          <Route
            path={`/teacher/${this.state.teacherID}/lessons/${this.state.lessonID}`}
            render={(props) => (
              <LessonCheck
                students={this.state.students}
                selectedLesson={this.state.selectedLesson}
                grades={this.state.grades}
              />
            )}
          />

        </Router >

      </div >
    );
  }
}

export default App;
