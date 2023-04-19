import Slick from "react-slick";

function Index() {

  const settings = {
    autoplay: true,
    autoplaySpeed: 6000,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 474,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1.5
          }
        },
        {
          breakpoint: 374,
          settings: {
            slidesToShow: 1.1,
            slidesToScroll: 1.1
          }
        }
    ]
  };

  return (
    <>
      <section className="products">
        <div className="container">
          <div className="products-title">Featured Products</div>
          <div className="products-content">
            <Slick {...settings}>
              <div className="products-item">
                <div className="products-information">
                  <div className="products-name">ICEWAYS 1</div>
                  <div className="products-description">
                    <p>
                      City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use.
                    </p>
                  </div>
                </div>
                <div className="products-buttons">
                  <a href="#" title="Learn More" className="button-learn">Learn More</a>
                  <a href="#" title="Find a Dealer" className="button-find">Find a Dealer</a>
                </div>
              </div>
              <div className="products-item">
                <div className="products-information">
                  <div className="products-name">ICEWAYS 2</div>
                  <div className="products-description">
                    <p>
                      City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use.
                    </p>
                  </div>
                </div>
                <div className="products-buttons">
                  <a href="#" title="Learn More" className="button-learn">Learn More</a>
                  <a href="#" title="Find a Dealer" className="button-find">Find a Dealer</a>
                </div>
              </div>
              <div className="products-item">
                <div className="products-information">
                  <div className="products-name">ICEWAYS 3</div>
                  <div className="products-description">
                    <p>
                      City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use.
                    </p>
                  </div>
                </div>
                <div className="products-buttons">
                  <a href="#" title="Learn More" className="button-learn">Learn More</a>
                  <a href="#" title="Find a Dealer" className="button-find">Find a Dealer</a>
                </div>
              </div>
              <div className="products-item">
                <div className="products-information">
                  <div className="products-name">ICEWAYS 4</div>
                  <div className="products-description">
                    <p>
                      City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use.
                    </p>
                  </div>
                </div>
                <div className="products-buttons">
                  <a href="#" title="Learn More" className="button-learn">Learn More</a>
                  <a href="#" title="Find a Dealer" className="button-find">Find a Dealer</a>
                </div>
              </div>
              <div className="products-item">
                <div className="products-information">
                  <div className="products-name">ICEWAYS 5</div>
                  <div className="products-description">
                    <p>
                      City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use.
                    </p>
                  </div>
                </div>
                <div className="products-buttons">
                  <a href="#" title="Learn More" className="button-learn">Learn More</a>
                  <a href="#" title="Find a Dealer" className="button-find">Find a Dealer</a>
                </div>
              </div>
            </Slick>
          </div>
        </div>
      </section>
    </>
  )
}

export default Index