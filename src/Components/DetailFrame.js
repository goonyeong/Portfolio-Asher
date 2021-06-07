import styled from "styled-components";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight, faCheck, faBolt } from '@fortawesome/free-solid-svg-icons';

const ContainerSection = styled.section`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(30, 30, 30, .98);
    display: flex;
    justify-content: space-between;
    padding: 3rem 7rem;
`;

const Container1 = styled.div`
    width: 25%;
    height: 100%;
    padding: .5rem 1.5rem;
    background-color: #292828;
    border-radius: 2rem;
    display: grid;
    grid-template-rows: 7fr 1fr 1fr .3fr;
    position: relative;
    animation: initailAppear1 3s ease-in-out;
    @keyframes initailAppear1{
        from{opacity: 0; transform: translateX(-6rem)}
        to{opacity: 1; ; transform: translateX(0)}
    }
    .goBack{
        position: absolute;
        top: 50%;
        right: 105%;
        transform: translateY(-50%);
        height: 10%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        color: #9DC3C1;
        .iconArrowLeft{
            font-size: 3.5rem;
            font-weight: 100;
            margin-right: .5rem;
            animation: repeatMoveLeft 2s infinite linear;
            @keyframes repeatMoveLeft{
                0%{opacity: 0;}
                30%{opacity: .4;}
                50%{opacity: .5; transform: translateX(-10%)}
                70%{opacity: .4;}
                100%{opacity: 0; transform: translateX(-30%)}
            }
        }
    }
`;

const Screenshot = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    img{
        width: 55%;
        position: absolute;
        border-radius: .5rem;
        box-shadow: 0 0 .5rem #000;
        &.screen1{z-index: 3; top: 45%; left: 60%; transform: translateX(-50%)}
        &.screen2{z-index: 2; top: 30%; left: 30%; transform: translateX(-50%)}
        &.screen3{z-index: 1; top: 15%; left: 70%; transform: translateX(-50%)}
    }
`;

const MoveTo = styled.a`
    justify-self: center;
    display: flex;
    align-items: center;
    width: 90%;
    height: 70%;
    padding-left: 1.5rem;
    background: #3c4149;
    border-radius: 2rem;
    font-size: .85rem;
    color: #ccc;
    &:hover{
        .hoverAni{
            animation: hoverAni .4s infinite ease-in-out;
            @keyframes hoverAni{
                0%{transform: translateX(0)}
                50%{transform: translateX(.1rem)}
                100%{transform: translateX(0)}
            }
        }
    }
    .rightArrow{
        display: block;
        width: 15%;
        font-size: 1.4rem;
        margin-right: .5rem;
    }
    img{
        display: block;
        width: 15%;
        margin-right: .5rem;
    }
    
`;

const Container2 = styled.div`
    width: 70%;
    height: 100%;
    padding: 3rem 2rem;
    border-radius: 2rem;
    display: grid;
    letter-spacing: .07rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 2fr 2fr 1fr;
    animation: initailAppear2 3s ease-in-out;
    @keyframes initailAppear2{
        from{opacity: 0; transform: translateX(6rem)}
        to{opacity: 1; ; transform: translateX(0)}
    }
`;

const Logo = styled.img`
    align-self: center;
    padding-left: 2rem;
    display: flex;
    width: 60%;
`;

const Skills = styled.div`
    grid-column: 2/3;
    grid-row: 1/2;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const SkillList = styled.ul`
    display: flex;
`;

const Skill = styled.li`
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 2rem;
    background-image: url(${props => props.bgImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: .7;
`;

const Desc = styled.ul`
    grid-row: 2/3;
    grid-column: 1/3;
    align-self: center;
    padding: 0 2rem;
    li{
        font-size: .9rem;
        font-style: italic;
        margin-bottom: 1rem;
    }
`;


const Browsers = styled.div`
    grid-column: 1/2;
    grid-row: 3/4;
    padding: 0 2rem;
    font-size: .9rem;
    h5{
        margin-bottom: 1.2rem;
        font-size: 1rem;
    }
    
`;

const BrowserList = styled.ul`
    li{
        margin-bottom: .8rem;
        display: flex;
        p{
            margin-left: .5rem;
        }
        .cListCheck{
            font-size: 1.1rem;
            transform: translateY(7%);
        }
    }
`;

const Period = styled.p`
    grid-column: 1/2;   
    grid-row: 4/5;
    padding: 0 2rem;
    font-size: 1rem;
`;

const Challenges = styled.div`
    grid-column: 2/3;
    grid-row: 3/5;
    padding: 0 2rem;
    font-size: .9rem;
    h5{
        font-size: 1rem;
        margin-bottom: 1.2rem;
    }
`;

const ChallengeList = styled.ul`
    li{
        margin-bottom: .8rem;
        display: flex;
        p{
            margin-left: .5rem;
        }
        .cListCheck{
            font-size: 1rem;
            transform: translateY(7%);
        }
    }
`;


const DetailFrame = ({data, styles}) => {

    return(
        <ContainerSection>
            <Container1 style = {{boxShadow: `0 0 .5rem ${styles.shadowColor}`}}>
                <Link className="goBack" to="/"><FontAwesomeIcon icon={faAngleDoubleLeft} className="iconArrowLeft" /></Link>
                <Screenshot>
                    <img src={data.screenshot[0].default} alt="screenshot1" className="screen1" />
                    <img src={data.screenshot[1].default} alt="screenshot2" className="screen2" />
                    <img src={data.screenshot[2].default} alt="screenshot3" className="screen3" />
                </Screenshot>
                <MoveTo href={data.pageUrl} rel="noreferrer" target="_blank"><FontAwesomeIcon icon={faAngleDoubleRight} className="rightArrow hoverAni"/> <span className="hoverAni">Move to {data.name}</span></MoveTo>
                <MoveTo href={data.github} rel="noreferrer" target="_blank" className="github"><img src={require("Assets/github.png").default} alt="github" className="hoverAni" /> <span className="hoverAni">View Codes</span></MoveTo>
            </Container1>
            <Container2 style = {{backgroundColor: styles.bgColor, color: styles.fontColor1, boxShadow: `0 0 .5rem ${styles.shadowColor}`}}>
                <Logo src={data.logo.default} />
                <Skills>
                    <SkillList>
                        {data.skills.map(skill => <Skill bgImg={skill.url.default}></Skill>)}
                    </SkillList>
                </Skills>
                <Desc>
                    {data.description.map(row => <li style = {{color: styles.fontColor2}}>{row}</li>)}
                </Desc>
                <Challenges>
                    <h5>Challenges</h5>
                    <ChallengeList>
                        {data.challenges.map(challenge => 
                            <li style = {{color: styles.fontColor2}}>
                                <FontAwesomeIcon icon={faCheck} className="cListCheck" />
                                <p>{challenge}</p>
                            </li>
                        )}
                    </ChallengeList>
                </Challenges>
                <Period>Project Period / {data.period}</Period>
                <Browsers>
                    <h5>Supported Browers</h5>
                    <BrowserList>
                        {data.browsers.map(browser => 
                            <li style = {{color: styles.fontColor2}}>
                                <FontAwesomeIcon icon={faBolt} className="bListArrow"/>
                                <p>{browser}</p>
                            </li>
                        )}
                    </BrowserList>
                </Browsers>
            </Container2>
        </ContainerSection>
    );
}

export default DetailFrame;