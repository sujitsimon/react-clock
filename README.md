
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


# react-flip-clock

A simple react-flip-clock widget with customizaion



## Download Project

Clone react-clock

```bash
  git clone https://github.com/sujitsimon/react-clock.git
```
## Installation

Install react-clock with npm

```bash
  cd react-clock
  npm install
```
    
## Usage/Examples

```javascript
import Clock from './component/Clock/Clock';

function App() {
  return <Clock config={{height: '100px', backgroundColor: '#241623', textColor: '#fff'}}/>
}
```
## Demo

![](https://github.com/sujitsimon/react-clock/blob/main/screenshots/react-clock.gif)

## API Reference

#### Clock API

```javascript
  <Clock config={{height: '100px', backgroundColor: '#241623', textColor: '#fff'}}/>
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `height` | `string` |  height of clock element. **Default:** `100px`|
| `backgroundColor` | `string` |  background hex color code. **Default:** `#241623`|
| `textColor` | `string` |  text hex color code. **Default:** `#FFFFFF`|
| `format` | `string` |  `12h` or `24h` **Default:** `12h`|

#### Countdown Timer API

```javascript
  <CountDownTimer config={{height: '100px', backgroundColor: '#241623', textColor: '#fff'}}
                  countDownTime={{hours: 0, minutes: 0, seconds: 10}}
                  onCountDownComplete={()=> {console.log('Timer Complete')}}/>
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `height` | `string` |  height of clock element. **Default:** `100px`|
| `backgroundColor` | `string` |  background hex color code. **Default:** `#241623`|
| `textColor` | `string` |  text hex color code. **Default:** `#FFFFFF`|
| `countDownTime` | `object` |  **Mandatory**:`{hours: number, minutes: number, seconds: number}`|
| `onCountDownComplete` | `callback` |  *Callback function* on Countdown timer Complete|


#### StopWatch API

```javascript
  <StopWatch config={{height: '100px', backgroundColor: '#241623', textColor: '#fff'}} onTimerExit={(s)=> {console.log('Timer Exit', s)}}/>
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `height` | `string` |  height of clock element. **Default:** `100px`|
| `backgroundColor` | `string` |  background hex color code. **Default:** `#241623`|
| `textColor` | `string` |  text hex color code. **Default:** `#FFFFFF`|
| `stopTimer` | `boolean` |  stop timer|
| `onTimerExit` | `callback` |  *Callback function* on *stopTimer* is called. Returns *elapsed_time* in *ms*|
