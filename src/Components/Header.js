import "Components/Style/Header.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

    return(
        <>
            <section className="headerContainer">
                <h1 className="greeting">Hello, I'm a <strong>Front-end developer</strong></h1>
                <div className="viewMoreBtn">
                    <strong>scroll to view more </strong>
                    <FontAwesomeIcon icon={faChevronDown} className="iconArrowDown" />
                </div>
            </section>
        </>
    );
}

export default Header;