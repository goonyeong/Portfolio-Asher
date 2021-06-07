import styled from "styled-components";

const Bg = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${props => props.bgImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: fixed;
    z-index: -1;
`;

const Background = (props) => <Bg bgImg={props.bgImg} />

export default Background;