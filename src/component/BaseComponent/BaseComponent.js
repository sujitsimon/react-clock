import React, {useEffect, useState} from 'react';
import '../../css/BaseComponent/BaseComponent.css'

export default function BaseComponent(props) {
    const [state, setState] = useState({front: -1, back: 0, animate: true, animate_always: false});

    useEffect(() => {
        // console.log('State: ', props.state);
        setState(props.state);
    }, [props]);
    
    return (
        <div className='flip-clock-box'>
            <div className='flip-back'>{state.back}</div>
            <div className='flipper-top-wrapper'>
                <div className={state.animate ? 'flipper-top flip-animation-top' : 'flipper-top'}>{state.front}</div>
            </div>
            <div className='flipper-bottom-wrapper'>
                <div className='flipper-bottom'>{state.front}</div>
            </div>
            <div className='flipper-center-wrapper'>
                <div className={state.animate ? 'flipper-center flip-animation-bottom' : 'flipper-center'}>{state.back}</div>
            </div>
        </div>
    )
}