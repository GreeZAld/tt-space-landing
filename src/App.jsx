import "./App.scss";
import logo from "./assets/logo.svg";
import text from "./assets/text.svg";
import rocket from "./assets/rocket.svg";
import CartLogo from "./CartLogo";

function App() {
    return (
        <div className="main">
            <header className="header">
                <div className="header__logo">
                    <img className="header__logo-img" src={logo} alt="logo" />
                    <img className="header__logo-text" src={text} alt="title" />
                </div>
                <nav className="header__nav--desktop">
                    <button>Home</button>
                    <button>Products</button>
                    <button>
                        <CartLogo />
                    </button>
                </nav>
                <nav className="header__nav--mobile">
                    <input type="checkbox" id="menu-toggle" />
                    <label htmlFor="menu-toggle" className="menu-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                    <ul className="menu">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Products</a>
                        </li>
                        <li>
                            <a href="#">Cart</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <section className="banner">
                <h1 className="banner__title">
                    Discover the vast expanses of{" "}
                    <span className="banner__title--highlighted">space</span>
                </h1>
                <h4 className="banner__subtitle">
                    Where the possibilities are{" "}
                    <span className="banner__subtitle--highlighted">
                        endless!
                    </span>
                </h4>
                <button className="banner__button">Learn more</button>
            </section>
            <section className="offers">
                <h5 className="offers__header">Offers</h5>
                <div className="offers__container">
                    <div className="offer">
                        <h1 className="offer__title">
                            Move the borders{" "}
                            <br className="offer__title--break" /> of reality!
                        </h1>
                        <h4 className="offer__subtitle">
                            Go on a space adventure
                            <span className="offer__subtitle--long">
                                {" "}
                                - it's possible with us!
                            </span>
                        </h4>
                        <button className="offer__button">Learn more</button>
                    </div>
                    <div className="offer">
                        <h1 className="offer__title">
                            Space is not just stars and planets
                        </h1>
                        <h4 className="offer__subtitle">
                            it is a majestic journey to
                        </h4>
                        <button className="offer__button">Learn more</button>
                    </div>
                    <div className="offer">
                        <h1 className="offer__title">
                            For those who dream of stars
                        </h1>
                        <h4 className="offer__subtitle">
                            Our offer: make your dream come true
                        </h4>
                        <button className="offer__button">Learn more</button>
                    </div>
                    <div className="offer">
                        <h1 className="offer__title">
                            Fulfill your fantastic dreams
                        </h1>
                        <h4 className="offer__subtitle">
                            Space has never been so close
                        </h4>
                        <button className="offer__button">Learn more</button>
                    </div>
                </div>
            </section>
            <section className="text">
                <h5 className="text__header">Embark on a space journey</h5>
                <p className="text__content">
                    Travelling into space is one of the most exciting and
                    unforgettable adventures that can change your life forever.
                    And if you have ever dreamed of exploring stars, planets and
                    galaxies, then our company is ready to help you realize this
                    dream. We offer a unique experience that will allow you to
                    go on a space journey and see all the secrets of the
                    universe. We guarantee that every moment in space will be
                    filled with incredible impressions, excitement and new
                    discoveries. Our team of professionals takes care of your
                    safety and comfort so that you can fully enjoy your
                    adventure in space. We offer various options for space
                    excursions.
                </p>
                {/* eslint-disable-next-line */}
                <a href="#" className="text__link">
                    Read more
                </a>
            </section>
            <footer className="footer">
                <img className="footer__image" src={rocket} alt="rocket" />
                <p className="footer__text">Exciting space adventure!</p>
            </footer>
        </div>
    );
}

export default App;
