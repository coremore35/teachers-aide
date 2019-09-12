import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AddStudent from './components/AddStudent';
import { Navbar, NavItem } from 'react-materialize'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addStuToggle: false,
    }

  }

  render() {
    return (
      <div className="App">
        <Router>

          <Navbar brand={<a />} alignLinks="right" className="light-blue darken-4">
            <NavItem>
              <Link to="/">HOME</Link>
            </NavItem>
            <NavItem>
              <Link to="/add_teacher">ADD TEACHER</Link>
            </NavItem>
            <NavItem>
              <Link to="/add_students">ADD STUDENTS</Link>
            </NavItem>
            <NavItem>
              <Link to="/lessons">LESSONS</Link>
            </NavItem>
            <NavItem>
              <Link to="/grades">GRADES</Link>
            </NavItem>
          </Navbar>

          <div href="#" className="brand-logo">Quick Check <span>&#9989;</span></div>
          { /*         <Route to="/" exact component={} />
*/} {   /*       <Route to="/add_teacher" component={} />
    */} <Route to="/add_students" component={AddStudent} />
          {/*<Route to="/lessons" component={} />
  <Route to="/grades" component={} />*/}
        </Router >
      </div >
    );
  }
}

export default App;
