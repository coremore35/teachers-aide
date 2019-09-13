import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class TeacherList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        return (
            <div>
                <>
                    <h3>Teacher List</h3>
                    <h5>Select Your Name to Add Assignments</h5>
                    <div className="container">
                        {this.props.teachers.map(teacher => {
                            console.log("TeacherList ID: ", teacher.id)
                            return (

                                <div key={teacher.id} onClick={() => {
                                    this.props.getTeacherID(teacher.id)

                                }}>
                                    <Link to={`/teacher/${teacher.id}`}><h5>{teacher.name}</h5></Link>

                                </div>
                            )
                        })}

                    </div>
                </>
            </div>
        )
    }
}

export default TeacherList;