// Write your code here
import './index.css'

const EventItem = props => {
  const {eventItemDetails, getActiveStatus} = props
  const {imageUrl, name, location, registrationStatus} = eventItemDetails

  const onClickEventItemCard = () => {
    getActiveStatus(registrationStatus)
  }

  return (
    <li className="event-item-card">
      <button
        className="event-item-button"
        type="button"
        onClick={onClickEventItemCard}
      >
        <img src={imageUrl} alt="event" className="event-item-img" />
      </button>
      <p className="event-item-title">{name}</p>
      <p className="event-item-location">{location}</p>
    </li>
  )
}

export default EventItem
