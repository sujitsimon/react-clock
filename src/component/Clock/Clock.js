import React, { useState, useRef, useEffect } from 'react';
import BaseComponent from '../BaseComponent/BaseComponent';

const DEFAULT_CONFIG = { height: '100px', backgroundColor: '#241623', textColor: '#fff', format: '12h', currentTimeFormat: 'am' };

export default function Clock(props) {
    const [state, setState] = useState({
        hour_first_digit: { front: 0, back: 0, animate: false },
        hour_second_digit: { front: 0, back: 0, animate: false },
        minute_first_digit: { front: 0, back: 0, animate: false },
        minute_second_digit: { front: 0, back: 0, animate: false },
        seconds_first_digit: { front: 0, back: 0, animate: false },
        seconds_second_digit: { front: 0, back: 0, animate: false },
        time_format_first_letter: { front: 'a', back: 'p', animate: false },
        time_format_second_letter: { front: 'm', back: 'm', animate: false }
    });
    const config = useRef(DEFAULT_CONFIG);
    const intermediateHeight = useRef({ height: "75px", timeFormatHeight: "20px" });

    useEffect(() => {
        if (props.config) {
            config.current = { ...config.current, ...props.config };
            intermediateHeight.current = {
                height: (parseInt(props.config.height.slice(0, -2)) * 0.75).toFixed(0) + "px",
                timeFormatHeight: (parseInt(props.config.height.slice(0, -2)) * 0.5).toFixed(0) + "px",
            };
        }
    }, [props.config]);

    const solve_number = (number) => {
        let second_digit = number % 10;
        let first_digit = parseInt(number / 10);
        return { first_digit: first_digit, second_digit: second_digit };
    }

    const solve_with_previous_state = (current_state, previous_state) => {
        if (current_state === previous_state.back) {
            return false;
        } else {
            return true;
        }
    }

    const solve_time = (hours, minutes, seconds) => {
        let timeFormatChangeFlag = false;
        if (config.current.format === '12h') {
            if ((hours >= 12) & (config.current.currentTimeFormat !== 'pm')) {
                timeFormatChangeFlag = true;
                config.current = { ...config.current, currentTimeFormat: 'pm' };
            } else if (config.current.currentTimeFormat !== 'am') {
                timeFormatChangeFlag = true;
                config.current = { ...config.current, currentTimeFormat: 'am' }
            }
            hours = hours % 12;
            if (hours === 0) {
                hours = 12;
            }
        }
        hours = solve_number(hours);
        minutes = solve_number(minutes);
        seconds = solve_number(seconds);
        // console.log({
        //     hour_first_digit : {front: state.hour_first_digit.back, back: hours.first_digit, animate: solve_with_previous_state(hours.first_digit, state.hour_first_digit)},
        //     hour_second_digit : {front: state.hour_second_digit.back, back: hours.second_digit, animate: solve_with_previous_state(hours.second_digit, state.hour_second_digit)},
        //     minute_first_digit : {front: state.minute_first_digit.back, back: minutes.first_digit, animate: solve_with_previous_state(minutes.first_digit, state.minute_first_digit)},
        //     minute_second_digit : {front: state.minute_second_digit.back, back: minutes.second_digit, animate: solve_with_previous_state(minutes.second_digit, state.minute_second_digit)},
        //     seconds_first_digit : {front: state.seconds_first_digit.back, back: seconds.first_digit, animate: solve_with_previous_state(seconds.first_digit, state.seconds_first_digit)},
        //     seconds_second_digit : {front: state.seconds_second_digit.back, back: seconds.second_digit, animate: solve_with_previous_state(seconds.second_digit, state.seconds_second_digit)},
        //    });
        return {
            hour_first_digit: { front: state.hour_first_digit.back, back: hours.first_digit, animate: solve_with_previous_state(hours.first_digit, state.hour_first_digit) },
            hour_second_digit: { front: state.hour_second_digit.back, back: hours.second_digit, animate: solve_with_previous_state(hours.second_digit, state.hour_second_digit) },
            minute_first_digit: { front: state.minute_first_digit.back, back: minutes.first_digit, animate: solve_with_previous_state(minutes.first_digit, state.minute_first_digit) },
            minute_second_digit: { front: state.minute_second_digit.back, back: minutes.second_digit, animate: solve_with_previous_state(minutes.second_digit, state.minute_second_digit) },
            seconds_first_digit: { front: state.seconds_first_digit.back, back: seconds.first_digit, animate: solve_with_previous_state(seconds.first_digit, state.seconds_first_digit) },
            seconds_second_digit: { front: state.seconds_second_digit.back, back: seconds.second_digit, animate: solve_with_previous_state(seconds.second_digit, state.seconds_second_digit) },
            time_format_first_letter: { front: state.time_format_first_letter.back, back: config.current.currentTimeFormat[0], animate: timeFormatChangeFlag },
            time_format_second_letter: { front: state.time_format_second_letter.back, back: config.current.currentTimeFormat[1], animate: timeFormatChangeFlag },
        }
    };

    useEffect(() => {
        setTimeout(() => {
            let date = new Date();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            setState(solve_time(hours, minutes, seconds));
        }, 500);
    });


    return (
        <div style={{ display: 'flex', flexDirection: 'row', width: "100%", justifyContent: 'center', alignContent: 'space-around', alignItems: 'center' }}>
            <BaseComponent state={state.hour_first_digit} config={config.current}></BaseComponent>
            <BaseComponent state={state.hour_second_digit} config={config.current}></BaseComponent>
            <div style={{ fontSize: intermediateHeight.current.height }}>:</div>
            <BaseComponent state={state.minute_first_digit} config={config.current}></BaseComponent>
            <BaseComponent state={state.minute_second_digit} config={config.current}></BaseComponent>
            <div style={{ fontSize: intermediateHeight.current.height }}>:</div>
            <BaseComponent state={state.seconds_first_digit} config={config.current}></BaseComponent>
            <BaseComponent state={state.seconds_second_digit} config={config.current}></BaseComponent>
            {/* {config.current.format === "12h" &&
        <>
            <BaseComponent state={state.time_format_first_letter} config={{...config.current, height: intermediateHeight.current.timeFormatHeight}}></BaseComponent>
            <BaseComponent state={state.time_format_second_letter} config={{...config.current, height: intermediateHeight.current.timeFormatHeight}}></BaseComponent>
        </>
        } */}
        </div>
    );
}