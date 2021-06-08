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
            "\"CSS 변수를 사용했으며, 반응형으로 구현했습니다.(PC/Tablet/Mobile).", 
            "Vanilla.JS만을 사용하여 Javascript에 대한 이해도를 높였습니다.\"", 

        ],
        challenges : [
            "Responsive-web (Media query)",
            "Vanilla JS",
            "Swiper.js Api",
            "Animation with Scroll events",
            "DOM event 감지 (MutationObserver)",
            "Zeplin 활용"
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
        fontColor1: "#101f52",
        fontColor2: "#111111",
    }

    return <DetailFrame data = {data} styles = {styles}/>
}

export default Tada;