import React, {useState} from 'react';
import s from './OnOff.module.css'

type OnOffPropsType = {
    // on: boolean
}

const OnOff = (props: OnOffPropsType) => {
    let [onOff, setOnOff] = useState(false)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: onOff ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: onOff ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: onOff ? 'green' : 'red'
    }

    return (
        <div>
            <div style={onStyle} onClick={() => {
                setOnOff(true)
            }}>On
            </div>
            <div style={offStyle} onClick={() => {
                setOnOff(false)
            }}>Off
            </div>
            <div style={indicatorStyle}></div>
            {/*<button className={classOn} onClick={on}>On</button>*/}
            {/*<button className={classOff} onClick={off}>Off</button>*/}
            {/*<div className={classCircle}></div>*/}
        </div>
    );
};

export default OnOff;