import React, { Component } from 'react';

class AddStudent extends React.Component {
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
                <h2>Adding Students</h2>

            </div>
        )
    }
}

export default AddStudent;