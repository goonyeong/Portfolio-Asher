import {Link} from "react-router-dom";
import "./Style/Project.scss";


const Projects = () => {
    return(
        <section className="projectContainer">
            <h2 className="title">Projects</h2>
            <div className="projects">
                <article className="watchup">
                    <Link className="link" to="/watchup">
                        <div className="clickToDetail font-yellow">Click to Detail</div>
                        <span className="sampleImg"></span>
                        <h3><img alt="watchup" src={require("Assets/watchup/watchupLogo.png").default} /></h3>
                        <p className="desc font-gray">"Movie information service"</p>
                        <ul className="skills">
                            <li><span className="react" /><h5 className="font-gray">React</h5></li>
                            <li><span className="js" /><h5 className="font-gray">JS</h5></li>
                            <li><span className="html" /><h5 className="font-gray">HTML5</h5></li>
                        </ul>
                    </Link>
                </article>
                <article className="momentum">
                    <Link className="link" to="/momentum">
                        <div className="clickToDetail">Click to Detail</div>
                        <span className="sampleImg"></span>
                        <h3><img alt="watchup" src={require("Assets/momentum/logo_full.png").default} /></h3>
                        <p className="desc">"Todo list with initial page"</p>
                        <ul className="skills">
                            <li><span className="react" /><h5>React</h5></li>
                            <li><span className="redux" /><h5>Redux</h5></li>
                            <li><span className="js" /><h5>JS</h5></li>
                            <li><span className="html" /><h5>HTML5</h5></li>
                        </ul>
                    </Link>
                </article>
                <article className="portfolio">
                    <Link className="link" to="/portfolio">
                        <div className="clickToDetail font-white">Click to Detail</div>
                        <span className="sampleImg"></span>
                        <h3><img alt="portfolio" src={require("Assets/portfolio/portfolioWhite.png").default}/></h3>
                        <p className="desc font-white">"Front-end portfolio page"</p>
                        <ul className="skills">
                            <li><span className="react" /><h5 className="font-white">React</h5></li>
                            <li><span className="scss" /><h5 className="font-white">SCSS</h5></li>
                            <li><span className="js" /><h5 className="font-white">JS</h5></li>
                            <li><span className="html" /><h5 className="font-white">HTML5</h5></li>
                        </ul>
                    </Link>
                </article>
                <article className="tada">
                    <Link className="link" to="/tada">
                        <div className="clickToDetail">Click to Detail</div>
                        <span className="sampleImg"></span>
                        <h3><img alt="tada" src={require("Assets/tada/tadaLogo.png").default}/></h3>
                        <p className="desc">"TADA web page cloning"</p>
                        <ul className="skills">
                            <li><span className="zeplin" /><h5>Zeplin</h5></li>
                            <li><span className="js" /><h5>JS</h5></li>
                            <li><span className="css" /><h5>CSS3</h5></ li>
                            <li><span className="html" /><h5>HTML5</h5></li>
                        </ul>
                    </Link>
                </article>
                <article className="police">
                    <Link className="link" to="/police">
                        <div className="clickToDetail font-gray">Click to Detail</div>
                        <span className="sampleImg"></span>
                        <h3><img alt="police" src={require("Assets/police/policeLogo.png").default}/></h3>
                        <p className="desc font-gray">"Police agency web page cloning"</p>
                        <ul className="skills">
                            <li><span className="jquery" /><h5 className="font-gray">Jquery</h5></li>
                            <li><span className="js" /><h5 className="font-gray">JS</h5></li>
                            <li><span className="css" /><h5 className="font-gray">CSS3</h5></li>
                            <li><span className="html" /><h5 className="font-gray">HTML5</h5></li>
                        </ul>
                    </Link>
                </article>
            </div>
            <div className="logoBottom" ><img alt="logo" src={require("Assets/portfolio/portfolioLogoGreen.png").default} /></div>
        </section>
    )
}

export default Projects;