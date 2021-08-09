import "./App.css";
import Header from "./components/layout/Header";
import Meals from "./components/meals/Meals";
import {Fragment} from "react";

function App() {
    return (
        <Fragment>
            <Header/>
            <main>
                <Meals/>
            </main>
        </Fragment>
    );
}

export default App;
