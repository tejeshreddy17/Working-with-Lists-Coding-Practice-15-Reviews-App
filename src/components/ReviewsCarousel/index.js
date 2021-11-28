// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {id: 0}

  leftarrow = () => {
    const {id} = this.state
    if (id > 0 && id <= 3) {
      this.setState(previousState => ({id: previousState.id - 1}))
    }
  }

  rightarrow = () => {
    const {id} = this.state
    if (id < 3 && id >= 0) {
      this.setState(previousState => ({id: previousState.id + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {id} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[id]

    return (
      <div className="background-card">
        <h1>Reviews</h1>
        <div className="content-card">
          <button className="button-style" testId="leftArrow" type="button">
            <img
              onClick={this.leftarrow}
              alt="left arrow"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            />
          </button>
          <div className="review-card">
            <img alt={username} src={imgUrl} />
            <p>{username}</p>
            <p>{companyName}</p>
            <p>{description}</p>
          </div>
          <button className="button-style" testId="rightArrow" type="button">
            <img
              onClick={this.rightarrow}
              alt="right arrow"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
