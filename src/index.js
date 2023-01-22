import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import BaseComponent from './component/BaseComponent/BaseComponent';
import reportWebVitals from './reportWebVitals';
//import Clock from './component/Clock/Clock';
//import CountDownTimer from './component/Timer/Timer';
import StopWatch from './component/StopWatch/StopWatch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Clock config={{height: '100px', backgroundColor: '#241623', textColor: '#fff'}}/> */}
    {/* <CountDownTimer config={{height: '100px', backgroundColor: '#241623', textColor: '#fff'}}
                    countDownTime={{hours: 0, minutes: 0, seconds: 10}}
                    onCountDownComplete={()=> {console.log('Timer Complete')}}></CountDownTimer> */}
    <StopWatch config={{height: '100px', backgroundColor: '#241623', textColor: '#fff'}} onTimerExit={(s)=> {console.log('Timer Exit', s)}}/>
  </React.StrictMode>
);

reportWebVitals();
