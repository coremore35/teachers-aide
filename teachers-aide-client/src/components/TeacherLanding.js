import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class TeacherLanding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: ''
        }
    }

    render() {
        return (
            <div>
                <h2>Welcome Educator {this.props.selectedTeacher.name}!</h2>

                <div className="container">
                    {this.props.lessons.map(lesson => {
                        console.log("LessonList ID: ", lesson.id)
                        return (

                            <div key={lesson.id} onClick={() => {
                                this.props.getLessonID(lesson.id)

                            }}>
                                <Link to={`/teacher/${this.props.selectedTeacher.id}/lessons/${lesson.id}`}><h5>{lesson.lesson_name}</h5></Link>

                            </div>
                        )
                    })}

                </div>
            </div>
        )
    }
}

export default TeacherLanding;