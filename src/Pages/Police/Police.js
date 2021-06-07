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
            "\"마크업 처음 배움과 동시에 진행한 프로젝트, 웹 표준에 맞게 제작하는 것에 집중했습니다.", 
            "각 서브페이지를 구현하였고, 이전 브라우저(IE8)에서도 레이아웃이 무너지지 않도록 했습니다.", 
            "슬라이더와 탭은 제이쿼리를 사용하여 구현했습니다.\""
        ],
        challenges : [
            "웹 표준 파악",
            "웹 접근성을 위한 장치 (skip menu 등)",
            "Position, Float 등 CSS 레이아웃 개념 확립",
            "caniuse.com을 통해서 브라우저 별 호환성 파악",
            "Sub Page 공통 섹션의 CSS 모듈화",
            "iframe 유튜브 영상 삽입",
            "Kakao Map Api 삽입 (Api 적용 연습)",
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
        fontColor1: "#d6d6d6",
        fontColor2: "#9c9c9c",
    }

    return <DetailFrame data = {data} styles = {styles}/>
}

export default Police;