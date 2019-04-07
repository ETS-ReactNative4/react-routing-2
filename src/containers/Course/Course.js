import React, { Component } from 'react';

class Course extends Component {
    state = {
        courseTitle: ''
    }

    componentDidMount() {

        const query = new URLSearchParams(this.props.location.search);
        for (let param of query.entries()) {
            this.setState({ courseTitle: param[1] })
        }


    }

    render() {

        let test = '';
        if (this.props.match.params.courseId == 1) {
            test = 'jestem jeden'
        } else if
            (this.props.match.params.courseId == 2) {
            test = 'jestem dwa'

        } else if
            (this.props.match.params.courseId == 3) {
            test = 'jestem trzy'
        }


        return (
            // opcja z query params
            <div>
                <h1>{this.state.courseTitle}</h1>
                <p>You selected the Course with ID: {test}</p>
            </div>
            // <div>
            //     <h1>{this.props.match.params.title}</h1>
            //     <p>You selected the Course with ID: {test}</p>
            // </div>
        );
    }
}

export default Course;