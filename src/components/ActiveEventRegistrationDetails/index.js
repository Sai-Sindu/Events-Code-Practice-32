// Write your code here
import {Component} from 'react'
import './index.css'

class ActiveEventRegistrationDetails extends Component {
  renderInitialStatus = () => {
    const {status} = this.props
    console.log(status)
    return (
      <div className="initial-event-registration-card">
        <p className="active-event-description">
          Click on an event, to view its registration details
        </p>
      </div>
    )
  }

  renderYetToRegisterStatus = () => {
    const {status} = this.props
    console.log(status)
    return (
      <div className="yet-to-register-event-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
          alt="yet to register"
          className="yet-to-register-img"
        />
        <p className="yet-to-register-event-description">
          A live performance brings so much to your relationship with dance.
          Seeing dance live can often make you fall totally in love with this
          beautiful art form.
        </p>
        <button className="yet-to-register-button" type="button">
          Register Here
        </button>
      </div>
    )
  }

  renderRegisteredStatus = () => {
    const {status} = this.props
    console.log(status)
    return (
      <div className="registered-event-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
          alt="registered"
          className="registered-event-img"
        />
        <h1 className="registered-event-description">
          You have already registered for the event
        </h1>
      </div>
    )
  }

  renderRegistrationClosedStatus = () => {
    const {status} = this.props
    console.log(status)
    return (
      <div className="registration-closed-event-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
          alt="registrations closed"
          className="registration-closed-event-img"
        />
        <h1 className="registration-closed-event-title">
          Registrations Are Closed Now!
        </h1>
        <p className="registration-closed-event-description">
          Stay tuned. We will reopen the registrations soon!
        </p>
      </div>
    )
  }

  render() {
    const {status} = this.props
    switch (status) {
      case 'INITIAL':
        return this.renderInitialStatus()
      case 'YET_TO_REGISTER':
        return this.renderYetToRegisterStatus()
      case 'REGISTERED':
        return this.renderRegisteredStatus()
      case 'REGISTRATIONS_CLOSED':
        return this.renderRegistrationClosedStatus()
      default:
        return null
    }
  }
}

export default ActiveEventRegistrationDetails
