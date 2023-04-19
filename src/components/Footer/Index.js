const videoImage = window.location.origin + "/images/video.jpg";
const videoIcon = window.location.origin + "/images/icon-video.svg";

function Index() {
  return (
    <>
        <footer>
            <div className="container">
                <div className="video">
                    <div className="video-header">
                        <div className="video-title">
                            <p>Feel the excellent wet braking with Driveways!</p>
                        </div>
                        <div className="video-button">
                            <a href="#" title="Watch All Videos">WATCH ALL VIDEOS</a>
                        </div>
                    </div>
                    <div className="video-content">
                        <div className="video-image">
                            <img src={videoImage} alt="Feel the excellent wet braking with Driveways!" />
                        </div>
                        <div className="video-icon">
                            <a href="https://www.youtube.com/watch?v=fgXgcLIIsjc" target="_blank" title="Feel the excellent wet braking with Driveways!">
                                <img src={videoIcon} alt="Feel the excellent wet braking with Driveways!" />
                            </a>
                        </div>
                    </div>
                    <div className="video-button-mobile">
                        <a href="#" title="Watch All Videos">WATCH ALL VIDEOS</a>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Index