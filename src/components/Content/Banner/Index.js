const BannerImage = window.location.origin + "/images/banner.jpg";

function Index() {
  return (
    <>
        <section className="banner">
            <div className="banner-image">
                <img src={BannerImage} alt="Nothing can stop you" />
            </div>
            <div className="banner-text">
                <h1>Nothing can stop <br /> you</h1>
                <button>FIND OUT MORE</button>
            </div>
        </section>
    </>
  )
}

export default Index