import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {commentsList: [], name: '', comment: ''}

  changeName = event => {
    this.setState({name: event.target.value})
  }

  changeComment = event => {
    this.setState({comment: event.target.value})
  }

  deleteCommentInList = id => {
    const {commentsList} = this.state
    const filteredList = commentsList.filter(each => each.id !== id)
    this.setState({commentsList: filteredList})
  }

  changeLikeStatus = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  onAddListItem = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  render() {
    const {commentsList} = this.state
    const commentsCount = commentsList.length

    return (
      <div className="bg-container">
        <h1 className="heading"> Comments </h1>
        <div className="form-container">
          <div>
            <p> Say something about 4.0 technologies </p>
            <form className="form-control" onSubmit={this.onAddListItem}>
              <input
                type="text"
                placeholder="Your Name"
                className="name-input"
                onChange={this.changeName}
              />
              <textarea
                placeholder="Your Comment"
                rows="8"
                cols="10"
                className="comment-input"
                onChange={this.changeComment}
              />
              <button type="submit" className="submit-button">
                Add Comment
              </button>
            </form>
          </div>

          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comments-image"
            />
          </div>
        </div>
        <p>
          <span className="comments-count"> {commentsCount} </span> Comments
        </p>
        <ul className="comments-container">
          {commentsList.map(eachComment => (
            <CommentItem
              userComment={eachComment}
              key={eachComment.id}
              deleteCommentInList={this.deleteCommentInList}
              changeLikeStatus={this.changeLikeStatus}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
