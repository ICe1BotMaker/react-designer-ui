<image src="https://ifh.cc/g/AwamJW.png">
<div align="center">
  <h1>React Designer UI</h1>
  <p>React Designer UI Library. (npm)</p> <image src="https://img.shields.io/badge/npm%20package-0.0.1-green">
  <br><br>
  <h3><b>Skills</b></h3>
  <image src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E">
  <image src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB">
  <image src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white">
  <image src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white">
  <br><br><br>
  <h3><b>Description</b></h3>
  <p>This React Components Library is a self-produced project.</p>
  <p>It will be updated continuously and will be submitted as a portfolio.</p>
  <p>If you tell me about this library strictly, I will revise it quickly based on it.</p>
  <h1></h1>
</div>
<br><br>
    
## Installation
--------------
+ Available as an npm package.
```
$ npm install react-designer-ui
```

## Usage
--------------
Here's a simple example of creating a button:
```js
import { Button } from 'react-designer-ui';
function App() {
    return (
        <Button>TEST</Button>
    );
}
```

Here's a simple example of creating a modal:
```js
import { Modal } from 'react-designer-ui';
function App() {
    return (
        <Modal visible={true}>TEST</Modal>
    );
}
```
    
Here's a slightly difficult example of making a button:
```js
import { Button } from 'react-designer-ui';
function App() {
    const [bool, setBool] = React.useState(0);
    const state = () => bool == 0 ? setBool(1) : setBool(0);
    
    return (
        <>
            <p>Boolean: {bool}</p>
            <Button disabled={false} onClick={state}>TEST</Button>
        </>
    );
}
```
    
Here's a slightly difficult example of making a modal:
```js
import { Button } from 'react-designer-ui';
let i = 0;
function App() {
    const [num, setNum] = React.useState(i);
    const up = () => { i++; setNum(i); }
    const down = () => { i--; setNum(i); }
    
    return (
        <Modal visible={true} button={[{id: 1, key: "UP", onClick: up, disabled: false}, {id: 2, key: "DOWN", onClick: down, disabled: false}]}>{num}</Modal>
    );
}
```
