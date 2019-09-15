import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import axios from 'axios'


class LessonCheck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [{
                dataField: 'first_name',
                text: 'First Name',
                sort: true
            },
            {
                dataField: 'last_name',
                text: 'Last Name',
                sort: true

            }, {
                dataField: 'grade_mark',
                text: 'Grade',
                sort: true
            }]
        }
    }


    render() {
        return (
            <div className="container" style={{ marginTop: 50 }}>
                <h4>Lesson Check</h4>
                <h5>Lesson: {this.props.selectedLesson.lesson_name}</h5>

                <BootstrapTable
                    striped
                    hover
                    keyField='id'
                    data={this.props.students}
                    columns={this.state.columns} />

            </div>
        )
    }
}

export default LessonCheck;