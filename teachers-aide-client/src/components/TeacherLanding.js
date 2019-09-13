import React, { Component } from 'react';

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
                <h2>Welcome Educator!</h2>
            </div>
        )
    }
}

export default TeacherLanding;