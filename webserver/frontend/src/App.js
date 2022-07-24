import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import MainPage from "./pages/main-page/main-page";
import {BrowserRouter, Route, Routes, useParams} from "react-router-dom";
import GameItem from "./pages/game-item/GameItem";


function App() {

    return (
        <BrowserRouter>
            <div className="container">
                <Header/>
                <Routes>
                    <Route path='/game/:id' element={
                        <GameItem/>
                    }/>
                    <Route path='/' element={
                        <MainPage/>
                    }/>
                </Routes>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
