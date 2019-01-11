import React, { Component } from 'react';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    
    this.state= { comment: '' };
  }
  
  handleChange = event => {
    this.setState({ comment: event.target.value} );
  };
  
  handleSubmit = (event) => {
    event.preventDefault();
    
    this.setState({ comment: ''} );
  };
  
  render() {
   return (
    <form className="comment-box" onSubmit={this.handleSubmit}>
      <textarea
        value={this.state.comment}
        onChange={this.handleChange}
      />
      <button action="submit">Submit comment</button>
    </form>
   );
  }
}

export default CommentBox;