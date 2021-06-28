import DetailFrame from "Components/DetailFrame";

const Momentum = () => {
    
    const data = {
        name: "Momentum",
        pageUrl: "https://momentum-redux.netlify.app/",
        github: "https://github.com/greatasher7/momentum-redux",
        screenshot: [
            require("Assets/momentum/screenshot1.png"),
            require("Assets/momentum/screenshot2.png"),
            require("Assets/momentum/screenshot3.png"),
        ],
        logo: require("Assets/momentum/logo_full.png"),
        skills: [
            {name: "html", url: require("Assets/html.png")},
            {name: "js", url: require("Assets/js.png")},
            {name: "redux", url: require("Assets/redux.png")},
            {name: "react", url: require("Assets/react.png")}
        ],
        description : [
            "\"Redux와 Local storage를 활용한 Todo list page 입니다.", 
            "Redux-toolkit를 사용하여 state를 관리하는 것을 연습하였고,",
            "redux-persist를 사용하여 local storage에 데이터를 저장했습니다.\"", 
        ],
        challenges : [
            "react-redux",
            "redux-toolkit",
            "redux-persist",
            "local storage",
            "unsplash api",
            "react-moment api",
            "axios",
        ],
        browsers: [
            "Chrome",
            "Firefox",
            "..."
        ],
        period: "2021.06 - 2021.07", 
    }
    
    const styles = {
        shadowColor: "#742ddd",
        bgColor: "#ffffff",
        fontColor1: "#101f52",
        fontColor2: "#111111",
    }

    return <DetailFrame data = {data} styles = {styles}/>
}

export default Momentum;