import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AddStudent from './components/AddStudent';
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
      selectedTeacher: {}
    }
    this.getTeacherID = this.getTeacherID.bind(this)
    // this.getTeacher = this.getTeacher.bind(this)
    this.getData = this.getData.bind(this)
  }

  componentDidMount() {
    this.getData()
  }

  async getData() {
    const response = await axios.get(`${baseURL}/teachers`)
    const data = response.data
    console.log(data)
    this.setState({
      teachers: data
    })
  }

  getTeacherID(id) {
    console.log('getting teacher ID')
    this.state.teachers.map(teacher => {
      console.log('teacher id: ', teacher.id)
      if (teacher.id == id) {
        console.log('ID matches')
        console.log('Teacher object: ', teacher)
        this.setState({
          selectedTeacher: teacher
        })
      }
    })
  }

  // getTeacher() {
  //   this.state.teachers.map(teacher => {
  //     console.log(teacher.id)
  //     console.log(this.state.teacherID)
  //     if (teacher.id == this.state.teacherID) {
  //       this.setState = ({
  //         selectedTeacher: teacher.id
  //       })
  //       console.log('Teacher data: ', teacher.id)
  //     }
  //   })
  // }


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

          <h1>Start</h1>
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
            path={`/teacher/${this.state.teacherID}`}
            render={(props) => (
              <TeacherLanding
                selectedTeacher={this.state.selectedTeacher}
              />
            )}
          />

        </Router >

      </div >
    );
  }
}

export default App;
