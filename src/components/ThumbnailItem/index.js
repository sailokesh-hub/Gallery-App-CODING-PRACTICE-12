// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachItem, onFocus} = props
  const {imageUrl, imageAltText, thumbnailUrl, thumbnailAltText} = eachItem

  const buttonClick = () => {
    onFocus(imageUrl, imageAltText)
  }

  return (
    <li className="list-item">
      <button className="btn" type="button">
        <img
          src={thumbnailUrl}
          onClick={buttonClick}
          alt={thumbnailAltText}
          className="thumb"
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
