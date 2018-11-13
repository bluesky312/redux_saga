import React, {Component} from 'react'
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {
        rev_message: state.messages
    }
};

class Message extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <h5>{this.props.rev_message.message}</h5>
                <h5>{this.props.rev_message.author}</h5>
            </>
        )
    }
}

export default connect(mapStateToProps, null)(Message)