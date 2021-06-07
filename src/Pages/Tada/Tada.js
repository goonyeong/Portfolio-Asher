import DetailFrame from "Components/DetailFrame";

const Tada = () => {
    
    const data = {
        name: "Tada",
        pageUrl: "https://greatasher7.github.io/tada_responsive/",
        github: "https://github.com/greatasher7/tada_responsive",
        screenshot: [
            require("Assets/tada/screenshot1.png"),
            require("Assets/tada/screenshot2.png"),
            require("Assets/tada/screenshot3.png")
        ],
        logo: require("Assets/tada/tadaLogo.png"),
        skills: [
            {name: "html", url: require("Assets/html.png")},
            {name: "css", url: require("Assets/css.png")},
            {name: "js", url: require("Assets/js.png")},
            {name: "zeplin", url: require("Assets/zeplin.png")}
        ],
        description : [
            "\"타다(TADA) 웹페이지를 Cloning 하여, 반응형 페이지로 구현했습니다.(PC/Tablet/Mobile).", 
            "가독성을 높이고 원활한 유지보수를 위해 CSS 변수를 사용했습니다.", 
            "Swiper.js Api를 프로젝트에 맞게 적용하고, Vanilla JS만을 사용하여 Javascript에 대한 이해도를 높였습니다.\"", 

        ],
        challenges : [
            "반응형 레이아웃 (Media query)",
            "Javascript 개념과 문법 익히기",
            "외부 Api 분석 / 적용 (Swiper.js)",
            "Scroll event에 따른 애니메이션 구현",
            "DOM event 감지 (MutationObserver)"
        ],
        browsers: [
            "Chrome",
            "Firefox",
            "Safari",
            "..."
        ],
        period: "2021.03 - 2021.04", 
    }
    
    const styles = {
        shadowColor: "#8090c4",
        bgColor: "#becad1",
        fontColor1: "#19254d",
        fontColor2: "#333333",
    }

    return <DetailFrame data = {data} styles = {styles}/>
}

export default Tada;