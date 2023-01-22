
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


# react-clock

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


## API Reference

#### Clock API

```http
  <Clock config={{height: '100px', backgroundColor: '#241623', textColor: '#fff'}}/>
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `height` | `string` |  height of clock element. **Default** "100px"|
| `backgroundColor` | `string` |  background hex color code. **Default** ![#241623](https://via.placeholder.com/10/241623?text=+) #241623|
| `textColor` | `string` |  text hex color code. **Default** ![#FFFFFF](https://via.placeholder.com/10/ffffff?text=+) #FFFFFF|


