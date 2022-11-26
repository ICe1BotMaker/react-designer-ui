<image src="https://ifh.cc/g/AwamJW.png">      
<div align="center">
  <h1>React Designer UI</h1>
  <p>React Designer UI Library. (npm)</p> <image src="https://img.shields.io/badge/npm%20package-1.0.5-green?style=flat-square">
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
        <Button disabled={false}>TEST</Button>
    );
}
```

<br>
    
Here's a simple example of creating a modal:
```js
import { Modal } from 'react-designer-ui';
    
function App() {
    return (
        <Modal visible={true}>TEST</Modal>
    );
}
```

<br>
    
Here's a simple example of creating a input:
```js
import { Input } from 'react-designer-ui';
    
function App() {
    return (
        <Input placeholder="TEST PLACEHOLDER" helperText="TEST HELPERTEXT" />
    );
}
```

<br>
    
Here's a simple example of creating a tag:
```js
import { Tag } from 'react-designer-ui';
    
function App() {
    return (
        <Tag>TEST</Tag> // type prop: (red, blue, green, yellow)
    );
}
```

<br>
       
## Components
--------------
+ [Button](https://github.com/ICe1BotMaker/react-designer-ui/tree/main/react-designer/components/button)
+ [Modal](https://github.com/ICe1BotMaker/react-designer-ui/tree/main/react-designer/components/modal)
+ [Input](https://github.com/ICe1BotMaker/react-designer-ui/tree/main/react-designer/components/input)
+ [Tag](https://github.com/ICe1BotMaker/react-designer-ui/tree/main/react-designer/components/tag)

<br>
       
## Version
--------------
- [x] ver 0.0.1 : Update Button, Modal Component
- [x] ver 1.0.0 : Update Input Component
- [x] ver 1.0.1 ~ 1.0.3 : Bug Fixed
- [x] ver 1.0.4 : Update ( return jsx => return React-Element )
- [x] ver 1.0.5 : Update Input ( disabled ), Tag Component
