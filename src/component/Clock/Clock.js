import React, { useState, useEffect } from 'react';
import BaseComponent from '../BaseComponent/BaseComponent';

export default function Clock(props) {
    const [state, setState] = useState({
                                        hour_first_digit : {front: 0, back: 0, animate: false},
                                        hour_second_digit : {front: 0, back: 0, animate: false},
                                        minute_first_digit : {front: 0, back: 0, animate: false},
                                        minute_second_digit : {front: 0, back: 0, animate: false},
                                        seconds_first_digit : {front: 0, back: 0, animate: false},
                                        seconds_second_digit : {front: 0, back: 0, animate: false},
                                      });

    const solve_number = (number) => {
        let second_digit = number % 10;
        let first_digit = parseInt(number / 10);
        return {first_digit: first_digit, second_digit: second_digit};
    }

    const solve_with_previous_state = (current_state, previous_state) => {
        if (current_state === previous_state.back) {
            return false;
        } else {
            return true;
        }
    }

    const solve_time = (hours, minutes, seconds) => {
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
                hour_first_digit : {front: state.hour_first_digit.back, back: hours.first_digit, animate: solve_with_previous_state(hours.first_digit, state.hour_first_digit)},
                hour_second_digit : {front: state.hour_second_digit.back, back: hours.second_digit, animate: solve_with_previous_state(hours.second_digit, state.hour_second_digit)},
                minute_first_digit : {front: state.minute_first_digit.back, back: minutes.first_digit, animate: solve_with_previous_state(minutes.first_digit, state.minute_first_digit)},
                minute_second_digit : {front: state.minute_second_digit.back, back: minutes.second_digit, animate: solve_with_previous_state(minutes.second_digit, state.minute_second_digit)},
                seconds_first_digit : {front: state.seconds_first_digit.back, back: seconds.first_digit, animate: solve_with_previous_state(seconds.first_digit, state.seconds_first_digit)},
                seconds_second_digit : {front: state.seconds_second_digit.back, back: seconds.second_digit, animate: solve_with_previous_state(seconds.second_digit, state.seconds_second_digit)},
               }
    };
    
    useEffect(()=> {
        setTimeout(() => {
            let date = new Date();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            setState(solve_time(hours, minutes, seconds));
        }, 500);
    });


    return (
        <div style={{display: 'flex', flexDirection: 'row', width: "100%", justifyContent: 'center', alignContent: 'space-around'}}>
        <BaseComponent state={state.hour_first_digit}></BaseComponent>
        <BaseComponent state={state.hour_second_digit}></BaseComponent>
        <div style={{fontSize: "80px"}}>:</div>
        <BaseComponent state={state.minute_first_digit}></BaseComponent>
        <BaseComponent state={state.minute_second_digit}></BaseComponent>
        <div style={{fontSize: "80px"}}>:</div>
        <BaseComponent state={state.seconds_first_digit}></BaseComponent>
        <BaseComponent state={state.seconds_second_digit}></BaseComponent>
        </div>
    );
}