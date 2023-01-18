import React, {useEffect, useState} from 'react';
import '../../css/BaseComponent/BaseComponent.css'

export default function BaseComponent() {
    const [state, setState] = useState({front: -1, back: 0});

    useEffect(() => {
        setState({front: state.front + 1, back: state.back + 1});
    }, []);
    
    return (
        <div className='flip-clock-box'>
            <div className='flip-back'>{state.back}</div>
            <div className='flipper-top-wrapper'>
                <div className='flipper-top flip-animation-top'>{state.front}</div>
            </div>
            <div className='flipper-bottom-wrapper'>
                <div className='flipper-bottom'>{state.front}</div>
            </div>
            <div className='flipper-center-wrapper'>
                <div className='flipper-center flip-animation-bottom'>{state.back}</div>
            </div>
        </div>
    )
}