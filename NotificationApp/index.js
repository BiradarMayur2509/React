const Notification = props => {
  //  Write your code here.
  const {className, iconUrl, message} = props
  return (
    <div className={`notification-container ${className}`}>
        <img src={iconUrl} alt="icon" className="icon" />
        <p className="message">{message}</p>                
    </div>
  )
}

const element = (
  //  Write your code here.   
    <div className="bg-container">
        <h1 className="heading">Notifications</h1>
        <div className="notifications-container">
            <Notification 
            className="info" 
            iconUrl="https://assets.ccbp.in/frontend/react-js/notification-info.png" 
            message="Information Message" 
            />
            <Notification 
            className="success" 
            iconUrl="https://assets.ccbp.in/frontend/react-js/notification-success.png" 
            message="Success Message" 
            />
            <Notification 
            className="warning" 
            iconUrl="https://assets.ccbp.in/frontend/react-js/notification-warning.png" 
            message="Warning Message" 
            />
            <Notification
            className="danger"
            iconUrl="https://assets.ccbp.in/frontend/react-js/notification-danger.png"
            message="Error Message"                             
            />
        </div>  
    </div>
)

ReactDOM.render(element, document.getElementById('root'))
