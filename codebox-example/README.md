This is my only working example of adding MindAR image tracking in a React project. I started from a working [codesandbox example](https://codesandbox.io/s/mind-ar-react-tt9wgq?file=/src/App.js) I found, that used the mindAR package in a React project. And from that starting point, I added some customisation to it. To run it, use npm install and then npm start.

  The default target image:
  
  <img width="727" alt="image" src="https://user-images.githubusercontent.com/91590248/215571159-1bac8ea6-3fb7-4667-b82a-65387ac0d3da.png">

  You can customise it via querystring:
  - image: 0 or 1 (0 is lego.png, 1 question.png image in the assets folder).
  - model: 0 or 1
  - message: any string


----
The original README file from CodeSandBox project:



# React example with MindAR 

This is an example project of using [MindAR](https://github.com/hiukim/mind-ar-js) in React 

The react component is inside `src/MindARViewer`. Everything else are created from `create-react-app`, and they are irrelevant. 

# Screenshot
|![alt text](https://github.com/hiukim/mind-ar-js-react/blob/master/screenshot.png?raw=true)|
|-

# It demonstrates:

1. how to import MindAR as a npm package
2. how to create a React component for MindAR

# To run
```
> npm install
> npm run start
```
