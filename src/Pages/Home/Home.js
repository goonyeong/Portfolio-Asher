import ReactPageScroller from 'react-page-scroller';
import Background from "Components/Background";
import Header from "Components/Header";
import Introduction from "Components/Introduction";
import Projects from "Components/Project";
import Contact from "Components/Contact";

const Home = () => {

    return(
        <>  
            <Background bgImg={require("Assets/headerBg.gif").default}/>
            <ReactPageScroller>
                <Header />
                <Introduction />
                <Projects />
                <Contact />
            </ReactPageScroller>
        </>
    )
}

export default Home;