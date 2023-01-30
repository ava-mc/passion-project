# Personal Passion Project - Ava Mirzaee Cheshmeh
## Exploration of image tracking in AR frameworks
For this project, I wanted to explore different web-based and native AR frameworks, specifically for their image tracking functionalities. This means that this github repo is full of demo experiments, both successful and unsuccessful ones. 

To give some clarity, here is a short overview:

- 8thwall-code

  I used the 14 day free trial offered by 8th wall, to experiment with the platform. In this trial, you are limited to working on their online Cloud Editor. So, the contents of this folder follow the set-up they use, where I copy pasted the code directly into files with the same name. 

    <img width="212" alt="image" src="https://user-images.githubusercontent.com/91590248/215566023-c7ce34e0-906e-44fd-8d97-ec04f61d737b.png">

    - Live demo: 
       https://avamc.8thwall.app/image-tracking-basics

       You can customise the visual AR effects via the query string.
       (Options 0, 1, 2 or 3 for model, 0 or 1 for image variable, message variable can be any string).

        _Note_: this demo was made with a 14-day free trial, so it could be at the time you are reading this, that the demo is no longer available live.

       <img width="151" alt="image" src="https://user-images.githubusercontent.com/91590248/215566531-273146dc-d197-466a-bae3-d9fb60126ad9.png">

       Used target image:
       <img width="721" alt="image" src="https://user-images.githubusercontent.com/91590248/215566477-a4aa6522-9ded-4378-ac8f-3948ddf32540.png">
     


- ViroSample

  This is a short image tracking demo starting from the starting kit project ofr ViroReact, an AR framework for React Native. To run it, run 'npm install' and then 'npm run'. In the console you will get an ngrok link. you can use this or your IP address to test out your app via the free Viro Media App.
Note: you will need a device that supports either ARCore or ARKit to be able to run it. (List of devices: [list for ARCore](https://developers.google.com/ar/devices) and [ARKit](https://developer.apple.com/documentation/arkit/verifying_device_support_and_user_permission).)
 
- arjs-html-test
  
  Experiments with trying to add AR.js image tracking in a plain html example. The index.html file contains the attempt with marker tracking, which works. I used a lot of different custom markers in my assets, to try out if it works. Some of them are suitable markers, and some are not recognisable. Check my [wiki](https://github.com/ava-mc/passion-project/wiki/Daily-Log#trying-marker-based-with-arjs) for specifics. The current example works with the following marker:
  
  <img width="466" alt="image" src="https://user-images.githubusercontent.com/91590248/215568008-0696afc6-6f02-4c58-95d9-205ff6af4b5b.png">
  
  
  The index-nft.html contains the attempt to get the nft image tracking option from Ar.js to work, but this didn't work for me.
  
- arjs-react-marker-test
  
  Failed experiment of trying to implement marker tracking of AR.js directly in a new create-react-app project via A-frame library.
  
- codebox example

  This is my only working example of adding MindAR image tracking in a React project. I started from a working codesandbox example I found, that used the mindAR package in a React project. And from that starting point, I added some customisation to it. To run it, uses npm install and then npm start.

  The default target image:
  
  <img width="727" alt="image" src="https://user-images.githubusercontent.com/91590248/215571159-1bac8ea6-3fb7-4667-b82a-65387ac0d3da.png">

  You can customise it via querystring:
  - image: 0 or 1 (0 is lego.png, 1 question.png image in the assets folder).
  - model: 0 or 1
  - message: any string

- react-mindar-test and react-mindar-test-2

  I tried recreating the Codesandbox example starting from my own new React project, however despite using the exact same versions and the exact same packages, this did not work. 
  
