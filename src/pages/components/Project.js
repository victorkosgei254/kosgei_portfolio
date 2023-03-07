function ProjectView({props})
{

    return(
        <div className="project-view">
            <div className="title">
                <h3>Swaver</h3>
            </div>
            <div className="description">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/10/Websocket_connection.png"/>

                <p>An RFC6544 compliant web socket server used by web services in a distributed architecture system
                    .Database to hold Active IP addresses, implements Publisher Subscriber. Push notification
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                </p>
            </div>
            <div className="info">
                <div className="techstack">
                    <span>
                        <b>C</b>
                        <b>Web</b>
                    </span>
                </div>
                <div className="cta">
                    <span>
                        <a href="#">Github</a>
                        <a href="#">Swiver</a>
                    </span>
                </div>
                <div className="license">
                    <p>MIT</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectView;
