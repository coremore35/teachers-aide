import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button, Modal, Form } from 'react-bootstrap'
import axios from 'axios';

const baseURL = 'http://localhost:3000';


class TeacherList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            name: ''
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
            [event.currentTarget.name]: event.currentTarget.value
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        const response = await axios.post(`${baseURL}/teachers`,
            {
                name: this.state.name
            })
        this.setState({
            name: ''
        })
        this.props.handleAddTeacher(response.data)
        this.setRedirect()
        this.toggle()
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }




    render() {
        return (
            <div className="container">
                <>
                    <h3>Teacher List</h3>
                    <h5>Select Your Name to See Assignments</h5>


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
                {(this.state.modal === false) ?
                    <Button variant="info" onClick={this.toggle}>
                        Add New Teacher
                    </Button>
                    : (<Modal show={this.toggle} >
                        <Form onSubmit={this.handleSubmit} className='add-teacher-form'>
                            <Modal.Header>
                                <Modal.Title>Add Teacher</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form.Label htmlFor='name' />
                                <Form.Control
                                    type='text'
                                    id='name'
                                    name='name'
                                    onChange={this.handleChange}
                                    placeholder='Your Name ex. Mr. Morrison'
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

                {this.state.redirect && <Redirect to='/TeacherList' />}


            </div>
        )
    }
}

export default TeacherList;

