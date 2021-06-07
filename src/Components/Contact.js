import "./Style/Contact.scss";

const Contact = () => {
    return(
        <section className="contactContainer">
            <h2>Contact</h2>
            <div className="contactBox">
                <ul className="contactList">
                    <li className="name">Jun-hyeong Suk</li>
                    <li>Suwon-si, Gyeonggi-do, Korea</li>
                    <li>010.9208.5592</li>
                    <li>greatasher7@gmail.com</li>
                </ul>
                <ul className="linkList">
                    <li><a href="https://github.com/greatasher7" rel="noreferrer" target="_blank" className="github"><img src={require("Assets/github.png").default} alt="github" /></a></li>
                    <li><a href="https://www.rocketpunch.com/@9dbf0d4f" rel="noreferrer" target="_blank" className="rocketpunch"><img src={require("Assets/rocketpunchGray.png").default} alt="rocketpunch" /></a></li>
                </ul>
                <div className="logo"><img alt="logo" src={require("Assets/portfolio/portfolioGreen.png").default} /></div>
            </div>
            <div className="logoBottom" ><img alt="logo" src={require("Assets/portfolio/portfolioLogoGreen.png").default} /></div>
        </section>
    );
}

export default Contact;