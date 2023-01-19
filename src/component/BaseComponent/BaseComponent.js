import React, {useEffect, useRef, useState} from 'react';
import '../../css/BaseComponent/BaseComponent.css'

export default function BaseComponent(props) {
    const [state, setState] = useState({front: -1, back: 0, animate: true});
    const config = useRef({height: '100px', backgroundColor: '#241623', textColor: '#fff'});

    useEffect(() => {
        // console.log('State: ', props.state);
        setState(props.state);
    }, [props.state]);

    useEffect(()=> {
        document.documentElement.style.setProperty('--flip-height', props.config.height);
        document.documentElement.style.setProperty('--background-color', props.config.backgroundColor);
        document.documentElement.style.setProperty('--font-color', props.config.textColor);
        config.current = props.config;
    }, [props.config]);
    
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