import React, { useState, useEffect } from 'react';

export default function CountDownTimer(props) {
    const [state, setState] = useState({
        timer_date: undefined,
        hour_first_digit: { front: 0, back: 0, animate: false },
        hour_second_digit: { front: 0, back: 0, animate: false },
        minute_first_digit: { front: 0, back: 0, animate: false },
        minute_second_digit: { front: 0, back: 0, animate: false },
        seconds_first_digit: { front: 0, back: 0, animate: false },
        seconds_second_digit: { front: 0, back: 0, animate: false },
    });

    useEffect(()=> {
        setTimeout(() => {
            let date = new Date();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            setState(solve_time(hours, minutes, seconds));
        }, 500);
    });

    useEffect(() => {
        if(!props.countDownTime){
            let countDownDate = new Date();
            countDownDate.setHours(countDownDate.getHours() + 1);
            setState({...state, timer_date: countDownDate});
        }
    }, [props])

    return (
        <>
            {/* code to return Timer */}
        </>
    );
}