import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button, Modal, Form } from 'react-bootstrap'
import axios from 'axios';

const baseURL = 'http://localhost:3000';

class TeacherLanding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lesson_name: '',
            modal: false
        }
        this.toggle = this.toggle.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.setRedirect = this.setRedirect.bind(this)
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        });
    };

    handleChange(event) {
        this.setState({
            [event.currentTarget.id]: event.currentTarget.value
        });
        console.log("lesson_name: ", this.state.lesson_name)
    }

    async handleSubmit(event) {
        event.preventDefault();
        const response = await axios.post(`${baseURL}/teachers/${this.props.selectedTeacher.id}/lessons`,
            {
                lesson_name: this.state.lesson_name
            })
        this.setState({
            lesson_name: ''
        })
        this.props.handleAddLesson(response.data)
        this.setRedirect()
        this.toggle()
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
                            Add New Lesson
                            </Button>
                        : (<Modal show={this.toggle} >
                            <Form onSubmit={this.handleSubmit} className='add-lesson-form'>
                                <Modal.Header>
                                    <Modal.Title>Add Lesson</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form.Label htmlFor='lesson_name' />
                                    <Form.Control
                                        type='text'
                                        id='lesson_name'
                                        name='lesson_name'
                                        onChange={this.handleChange}
                                        placeholder='Lesson Title'
                                    />
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={this.toggle}>
                                        Close
                                    </Button>
                                    <Button
                                        type='submit'
                                        variant="primary"
                                        className='primary'
                                    >Submit</Button>


                                </Modal.Footer>
                            </Form>
                        </Modal>)}

                </div>
                {this.state.redirect && <Redirect to={`/teacher/${this.props.selectedTeacher.id}`} />}
            </div>
        )
    }
}

export default TeacherLanding;


