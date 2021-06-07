import DetailFrame from "Components/DetailFrame";

const Watchup = () => {
    
    const data = {
        name: "Watchup",
        pageUrl: "https://watchup.netlify.app",
        github: "https://github.com/greatasher7/watchup",
        screenshot: [
            require("Assets/watchup/screenshot1.png"),
            require("Assets/watchup/screenshot2.png"),
            require("Assets/watchup/screenshot3.png")
        ],
        logo: require("Assets/watchup/watchupLogo.png"),
        skills: [
            {name: "html", url: require("Assets/html.png")},
            {name: "js", url: require("Assets/js.png")},
            {name: "react", url: require("Assets/react.png")}
        ],
        description : [
            "\"React js로 만든 첫 프로젝트, TMDb Api를 활용한 영화 정보 서비스 입니다.", 
            "Router, SPA, Component 등 React의 기본 개념을 익혔으며, styled-components로 스타일링 하였습니다.\"", 
        ],
        challenges : [
            "Hash / Browser Router 비교",
            "Grid & Flex 연습",
            "Infinite Scroll(React Hooks) 구현",
            "React 프로젝트에 폰트 적용",
            "Loading Component 활용",
            "Proptypes 사용",
            "Youtube Api & iframe 사용",

        ],
        browsers: [
            "Chrome",
            "Firefox",
            "Safari",
            "..."
        ],
        period: "2021.05 - 2021.06", 
    }
    
    const styles = {
        shadowColor: "#e6bd0a",
        bgColor: "#323232",
        fontColor1: "#e6bd0a",
        fontColor2: "#c2c2c2",
    }

    return <DetailFrame data = {data} styles = {styles}/>
}

export default Watchup;