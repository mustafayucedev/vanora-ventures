import { useState } from 'react';
import Navigation from "./Navigation";
const Logo = window.location.origin + "/images/logo.png";
const iconHamburger = window.location.origin + "/images/icon-hamburger.svg";
const iconClose = window.location.origin + "/images/icon-close.svg";

function Index() {

    const [navigation,setNavigation] = useState(false);

    const navigationToggle = () => {
        setNavigation(!navigation)
    }

  return (
    <header>
        <div className="container">
            <div className="header-top">
                <div className="logo">
                    <a href="" title="Alca Digital">
                        <img src={Logo} alt="Alca Digital" />
                    </a>
                </div>
                <div className="desktop-navigation">
                    <Navigation />
                </div>
                <div className="mobile-navigation">
                    <button onClick={navigationToggle}>
                        {
                            navigation  ? 
                            <img src={iconClose} alt="Menü Gizle" />
                            :
                            <img src={iconHamburger} alt="Menü Göster" />
                        }
                    </button>
                    {navigation ? <Navigation /> : false}
                </div>
            </div>
        </div>
    </header>
  )
}

export default Index