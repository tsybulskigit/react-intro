import React from 'react';
import './App.css';
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";

function App() {


    return (
        <div className={'App'}>
            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledAccordion titleValue={"Users"}/>
            <UncontrolledRating/>
            <UncontrolledRating/>
            <OnOff/>
            <OnOff/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}


export default App;
