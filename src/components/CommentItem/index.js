// Write your code here
import './index.css'

const CommentItem = props => {
  const {userComment, deleteCommentInList, changeLikeStatus} = props
  const {id, name, comment, isLiked} = userComment
  const icon = name[0]

  const deleteComment = () => {
    deleteCommentInList(id)
  }

  const onChangeLike = () => {
    changeLikeStatus(id)
  }

  const updateImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const updateClassname = isLiked ? 'liked' : ''

  return (
    <li>
      <div className="user-comment-item">
        <div className="logo-container">
          <p className="user-logo amber"> {icon.toUpperCase()} </p>
        </div>
        <div>
          <h1 className="user-name"> {name} </h1>
          <p className="description"> {comment} </p>
        </div>
      </div>
      <div className="user-interaction">
        <div>
          <img src={updateImage} alt="like" className="like" />
          <button
            className={`hit-like ${updateClassname}`}
            type="button"
            onClick={onChangeLike}
          >
            Like
          </button>
        </div>
        <button className="delete-button" type="button" onClick={deleteComment}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
