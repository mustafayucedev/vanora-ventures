const navigationIcon = window.location.origin + "/images/icon-right.svg";

function Navigation() {
  return (
    <>
      <ul className="navigation">
        <li>
          <a href="#" title="Show All Tyres">
            <span>Show All Tyres</span>
            <img src={navigationIcon} alt="Show All Tyres" />
          </a>
        </li>
        <li>
          <a href="#" title="Find a Dealer">
            <span>Find a Dealer</span>
            <img src={navigationIcon} alt="Find a Dealer" />
          </a>
        </li>
        <li>
          <a href="#" title="Guides & Videos">
            <span>Guides & Videos</span>
            <img src={navigationIcon} alt="Guides & Videos" />
          </a>
        </li>
        <li>
          <a href="#" title="Go with">
            <span>Go with</span>
            <img src={navigationIcon} alt="Go with" />
          </a>
        </li>
        <li>
          <a href="#" title="Service & Help">
            <span>Service & Help</span>
            <img src={navigationIcon} alt="Service & Help" />
          </a>
        </li>
      </ul>
    </>
  )
}

export default Navigation