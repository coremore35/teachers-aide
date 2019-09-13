import React from 'react';
import { BrowserRouter as Router, Route, Link }
  from 'react-router-dom';
import LessonCheck from './components/LessonCheck';
import TeacherList from './components/TeacherList'
import TeacherLanding from './components/TeacherLanding'
import axios from 'axios';

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
      lessonID: null
    }
    this.getTeacherID = this.getTeacherID.bind(this)
    this.getLessonID = this.getLessonID.bind(this)
    this.getTeacherData = this.getTeacherData.bind(this)
    this.getLessonData = this.getLessonData.bind(this)
  }

  componentDidMount() {
    this.getTeacherData()
    this.getLessonData()
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

  render() {
    return (
      <div className="App">
        <Router>
          <nav>
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo">Quick Check <span>&#9989;</span></Link>
              <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              <div id="nav-mobile" className="right hide-on-med-and-down">
                <Link to="/TeacherList">LESSONS</Link>
                <Link to="/grades">GRADES</Link>
              </div>
            </div>
          </nav>

          <div className="sidenav" id="mobile-demo">
            <Link to="/TeacherList">LESSONS</Link>
            <Link to="/grades">GRADES</Link>
          </div>

          <Route
            exact path="/TeacherList"
            render={() => (
              <TeacherList
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
                selectedLesson={this.state.selectedLesson}
              />
            )}
          />

        </Router >

      </div >
    );
  }
}

export default App;
