import styled from "styled-components";
import "./Style/Introduction.scss";
 

const Introduction = () => {
    return(
        <section className="IntroContainer">
            <h2 className="title">Introduction</h2>
            <div className="profileImg" />
            <ul className="detailList">
                <li className="desc">"안녕하세요. 생각하고 코딩하는 프론트엔드 개발자입니다.<br/>효율적인 개발을 위해 끝없이 배우고 생각하는 개발자가 되겠습니다."</li>
                <li><strong>Name</strong> / 석준형</li>
                <li><strong>Birth</strong> / 1995.03.16 (만 26세)</li>
                <li><strong>Education</strong> / 아주대학교 경영학과 (2014 - 2020)</li>
                <li><strong>Job</strong> / Front-end Developer</li>
            </ul>
            <article className="language">
                <h3>Programming</h3>
                <div className="skillbox">
                    <span className="skillIcon html" />
                    <h4>HTML5</h4>
                </div>
                <div className="skillbox">
                    <span className="skillIcon js" />
                    <h4>JavaScript</h4>
                </div>
                <div className="skillbox">
                    <span className="skillIcon react" />
                    <h4>React JS</h4>
                </div>
                <div className="skillbox">
                    <span className="skillIcon redux" />
                    <h4>Redux</h4>
                </div>
                <div className="skillbox">
                    <span className="skillIcon scss" />
                    <h4>SCSS</h4>
                </div>
                <div className="skillbox">
                    <span className="skillIcon jquery" />
                    <h4>Jquery</h4>
                </div>
            </article>
            <article className="tool">
                <h3>Tools</h3>
                <div className="skillbox">
                    <span className="skillIcon github" />
                    <h4>Github</h4>
                </div>
                <div className="skillbox">
                    <span className="skillIcon git" />
                    <h4>Git</h4>
                </div>
                <div className="skillbox">
                    <span className="skillIcon figma" />
                    <h4>Figma</h4>
                </div>
                <div className="skillbox">
                    <span className="skillIcon photoshop" />
                    <h4>Photoshop</h4>
                </div>
                <div className="skillbox">
                    <span className="skillIcon zeplin" />
                    <h4>Zeplin</h4>
                </div>
                <div className="skillbox">
                    <span className="skillIcon illustrator" />
                    <h4>Illustrator</h4>
                </div>
            </article>
            <article className="certificate">
                <h3>Certificates</h3>
                <div className="skillbox">
                    <span className="skillIcon gtq" />
                    <h4>GTQ 1급</h4>
                </div>
                <div className="skillbox">
                    <span className="skillIcon computer" />
                    <h4>컴퓨터 활용능력<br/>1급</h4>
                </div>
            </article>
            <div className="logoBottom" ><img alt="logo" src={require("Assets/portfolio/portfolioLogoGreen.png").default} /></div>
        </section>
    )
}

export default Introduction; 