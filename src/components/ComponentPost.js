import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import commentSaveActionCreator from '../actions/saveComment';
import requireAuth from './requireAuth';

class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = { comment: '' }
    }


   

    handleChange = event => {
        this.setState({ comment: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        // this.props.saveComment(this.state.comment);
        this.setState({ comment: '' });
    }

    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a comment</h4>
                    <textarea onChange={this.handleChange} value={this.state.comment}></textarea>
                    <div>
                        <button type="submit">Submit Comment</button>
                    </div>
                    <button className="fetch-comments">Fetch Comments</button>
                </form>
            </div>
         );
    }
}



function mapDispatchToProps(dispatch) {
    return bindActionCreators({saveComment: commentSaveActionCreator}, dispatch);
}

 //here now the connect function is rendering the new created components which was returned inside the hoc 
export default connect(null,mapDispatchToProps)(requireAuth(CommentBox));