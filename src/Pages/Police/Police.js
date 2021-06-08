import DetailFrame from "Components/DetailFrame";

const Police = () => {
    
    const data = {
        name: "KNPA",
        pageUrl: "https://greatasher7.github.io/police_agency_cloning/",
        github: "https://github.com/greatasher7/police_agency_cloning",
        screenshot: [
            require("Assets/police/screenshot1.png"),
            require("Assets/police/screenshot2.png"),
            require("Assets/police/screenshot3.png")
        ],
        logo: require("Assets/police/policeLogo.png"),
        skills: [
            {name: "html", url: require("Assets/html.png")},
            {name: "css", url: require("Assets/css.png")},
            {name: "js", url: require("Assets/js.png")},
            {name: "jquery", url: require("Assets/jquery.png")}
        ],
        description : [
            "\"웹 표준에 맞게 제작하였으며, 이전 브라우저(IE8)를 고려하여 만들었습니다.", 
            "제이쿼리를 사용한 동적 요소들과 로그인 페이지를 포함한 서브페이지를 구현했습니다.\""
        ],
        challenges : [
            "Web Standard",
            "Web Accessibility (skip menu /...)",
            "CSS layout (Position / Float /...)",
            "브라우저 호환성 (caniuse.com)",
            "CSS 모듈화 -> 중복 제거",
            "iframe 유튜브 영상",
            "Kakao Map Api",
        ],
        browsers: [
            "IE 8-11",
            "Chrome",
            "Firefox",
            "..."
        ],
        period: "2021.02 - 2021.03", 
    }
    
    const styles = {
        shadowColor: "#f7f7f7",
        bgColor: "#04264c",
        fontColor1: "#e8b803",
        fontColor2: "#cccccc",
    }

    return <DetailFrame data = {data} styles = {styles}/>
}

export default Police;