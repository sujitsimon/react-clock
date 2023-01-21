import React, { useEffect, useRef, useState } from 'react';
import { createStyles } from './BaseComponentStyleCreator';
import '../../css/BaseComponent/BaseComponent.css'

export default function BaseComponent(props) {
    const [state, setState] = useState({ front: -1, back: 0, animate: true });
    const style = useRef({ height: '100px', backgroundColor: '#241623', textColor: '#fff' });

    useEffect(() => {
        // console.log('State: ', props.state);
        setState(props.state);
    }, [props.state]);

    useEffect(() => {
        style.current = createStyles(props.config);
    }, [props.config]);

    return (
        <div style={style.current.flip_clock_box}>
            <div style={style.current.flip_back}>{state.back}</div>
            <div style={style.current.flipper_top_wrapper}>
                <div style={state.animate ? { ...style.current.flipper_top, ...style.current.flip_animation_top } : style.current.flipper_top}>{state.front}</div>
            </div>
            <div style={style.current.flipper_bottom_wrapper}>
                <div style={style.current.flipper_bottom}>{state.front}</div>
            </div>
            <div style={style.current.flipper_center_wrapper}>
                <div style={state.animate ? { ...style.current.flipper_center, ...style.current.flip_animation_bottom } : style.current.flipper_center} className={state.animate ? 'flipper-center flip-animation-bottom' : 'flipper-center'}>{state.back}</div>
            </div>
        </div>
    )
}