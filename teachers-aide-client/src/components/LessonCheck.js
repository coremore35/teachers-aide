import React, { Component } from 'react';

class LessonCheck extends React.Component {
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
                <h4>LessonCheck</h4>
                <h5>Lesson: {this.props.selectedLesson.lesson_name}</h5>



            </div>
        )
    }
}

export default LessonCheck;