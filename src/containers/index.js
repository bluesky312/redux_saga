import React, {Component} from 'react'
import {bindActionCreators} from 'redux';
import {addMessage, showMessage} from '../actions/index'
import {connect} from "react-redux";
import Message from "./message";

const mapDispatchToProps = dispatch => {
    return {
        handleAddMessage: bindActionCreators(addMessage, dispatch),
        handleShowSaga: bindActionCreators(showMessage, dispatch)
    }
};

// const mapStateToProps = state => {
//     return {
//         rev_message: state.messages
//     }
// };

class MainSaga extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'show message',
            author: 'show author'
        }
    }

    handleAddSaga = () => {
        this.props.handleAddMessage('one message', 'one author');
    };

    handleShowSaga = () => {
        this.props.handleShowSaga(this.state.message, this.state.author);
    };

    render() {
        return (
            <>
                <div>This is main saga</div>
                <input type='button' value='Add a Message' onClick={this.handleAddSaga}/>
                <input type='button' value='Show a Message' onClick={this.handleShowSaga}/>
                <Message/>
            </>
        )
    }
}

export default connect(null, mapDispatchToProps)(MainSaga)