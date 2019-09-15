import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap'



class TeacherLanding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            modal: false
        }
        this.toggle = this.toggle.bind(this)
    }


    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
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

                    {(this.state.modal === false) ?
                        <Button variant="info" onClick={this.toggle}>
                            Add New Lesson                        </Button>
                        : (<Modal show={this.toggle} >
                            <Modal.Header >
                                <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.toggle}>
                                    Close
                                 </Button>

                            </Modal.Footer>
                        </Modal>)}
                </div>
            </div>
        )
    }
}

export default TeacherLanding;