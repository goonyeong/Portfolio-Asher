import DetailFrame from "Components/DetailFrame";

const Portfolio = () => {
    
    const data = {
        name: "Portfolio",
        pageUrl: "https://portfolio-asher.netlify.app",
        github: "https://github.com/greatasher7/portfolio-asher",
        screenshot: [
            require("Assets/portfolio/screenshot1.png"),
            require("Assets/portfolio/screenshot2.png"),
            require("Assets/portfolio/screenshot3.png")
        ],
        logo: require("Assets/portfolio/portfolioWhite.png"),
        skills: [
            {name: "html", url: require("Assets/html.png")},
            {name: "js", url: require("Assets/js.png")},
            {name: "scss", url: require("Assets/scss.png")},
            {name: "react", url: require("Assets/react.png")}
        ],
        description : [
            "\"React로 만든 개인 포트폴리오 페이지입니다.", 
            "styled-components와 SCSS를 함께 사용하여 스타일링 하였습니다.\""
        ],
        
        challenges : [
            "styled-components & SCSS 함께 활용",
            "SCSS의 변수, @extend 등 활용",
            "Grid & Flex 사용",
            "React 구조 파악",
            "Page-scroller 적용 (react-page-scroller)",
            "Components 역할 분담",
            "Font awesome 사용 (react-fontawesome)"
        ],
        browsers: [
            "Chrome",
            "Firefox",
            "Safari",
            "..."
        ],
        period: "2021.06 - 2021.07", 
    }
    
    const styles = {
        shadowColor: "#77AAAD",
        bgColor: "#5b7e84",
        fontColor1: "#292828",
        fontColor2: "#cdcdce",
    }

    return <DetailFrame data = {data} styles = {styles}/>
}

export default Portfolio;