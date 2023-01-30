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
  
- codebox-example

  This is my only working example of adding MindAR image tracking in a React project. I started from a working [codesandbox example](https://codesandbox.io/s/mind-ar-react-tt9wgq?file=/src/App.js) I found, that used the mindAR package in a React project. And from that starting point, I added some customisation to it. To run it, use npm install and then npm start.

  The default target image:
  
  <img width="727" alt="image" src="https://user-images.githubusercontent.com/91590248/215571159-1bac8ea6-3fb7-4667-b82a-65387ac0d3da.png">

  You can customise it via querystring:
  - image: 0 or 1 (0 is lego.png, 1 question.png image in the assets folder).
  - model: 0 or 1
  - message: any string

- react-mindar-test and react-mindar-test-2

  I tried recreating the Codesandbox example starting from my own new React project, however despite using the exact same versions and the exact same packages, this did not work. 
  
- first-expo-app

  Very first experiment with Expo to learn React Native Basics. I just followed the [basic tutorial](https://docs.expo.dev/tutorial/introduction/) from the Expo documentation. It is a sub-module, but really does not contain any relevant code for the rest of the project.

- html-mindAR-test

  Working example of using mindAR library in a plain html project. 
  
  There is a [live version](https://ava-mc.be/mindar-example/?model=1&image=0&message=hello+and+welcome+to+my+mindAR+example) of the demo online. 
  
  <img width="250" alt="image" src="https://user-images.githubusercontent.com/91590248/215572732-43fc5cec-cb79-4f39-a2d2-b1e05b6d9a67.png">

  Default image target:
  
  <img width="654" alt="image" src="https://user-images.githubusercontent.com/91590248/215572830-691e91db-3033-4ac9-82ea-d390a0cf4f41.png">
  
  You can customise it via querystring:
  - image: 0 or 1 (0 is lego.png, 1 question.png image in the assets folder).
  - model: 0 or 1
  - message: any string


- mindar-web-version-app

  Unsuccessful attempt to add mindAR to my existing demo project for the Mystery Mail app in Next.js (web-version-app).

- native-version-app

  Basic version of the Mystery Mail demo with React Native (Expo), without any AR added. To run the project, do npm install, then npm start. This will provide a QR code that you can scan with the Expo Go app, to preview the application. You can also choose to run it in an emulator. 
  
- nft-react-test

  One of the first attempts to add AR.js nft image tracking to a React project. It was unsuccessful.
  
- react-ar-js-web-version-app

  Successful attempt of adding AR.js image tracking functionalities to my existing Mystery Mail web application, made with Next.js. To run it, do npm install, then npm run dev to test the full app. (You can also do npm start, however, I added a server.js file that redirects my http localhost to a https, so that I could test it easily with my phone. I did this before I realised I could easily forward my ports if my phone was connected to my computer via USB.)
  
  There is also a [live demo](https://passion-project-y4sr.vercel.app/) version of this:
  
  <img width="254" alt="image" src="https://user-images.githubusercontent.com/91590248/215576037-283e07b3-7b14-4409-a6fd-b03d494ea0be.png">
  
  The idea is that you create your post card first, this will create a pdf you can save and/or print out with your secret AR message, contained in a scannable QR code, and with the chosen target image on the front of your card.

  If you just want to scan an already made example, try this one:
  
  <img width="710" alt="image" src="https://user-images.githubusercontent.com/91590248/215576117-41e093b8-1e69-4ff3-aba3-1d1bf2812982.png">

- test-arjs-html

  Unsuccessful attempt to use the nft image tracking demo of AR.js in a plain html file.
  
- tracking-images

  Folder that contains some base images to create custom markers with to use in combination with the AR.js [marker generator](https://jeromeetienne.github.io/AR.js/three.js/examples/marker-training/examples/generator.html).

- unity-experiment

  Files from my Unity AR Foundation demo. I made an AR project for Android (ARCore), following this [youtube tutorial](https://www.youtube.com/watch?v=gpaq5bAjya8). I just combined the Unity project folder with the standard unity .gitignore file. 
  
- viro-expo-test and viro-expo-test-2

  Failed attempst to get ViroReact working withing existing Expo projects. viro-expo-test was an attempt to integrate ViroReact in my full Mystery Mail native demo (native-version-app). viro-expo-test-2 was an attempt to integrate it in a brand new expo project. Both times I tried to follow the [explanation](https://viro-community.readme.io/docs/integrating-with-expo) from the ViroReact documentation to add ViroReact to an Expo project and both attempts failed.
  
- web-version-app
  
  Basic Mystery Mail demo made with Next.js. It contains all the functionalities, except the AR part. This was meant as a basic project to try to add different web AR frameworks to for the AR functionality.
  
  This example is running live on this [link](https://passion-project-dusky.vercel.app/).
  
  



