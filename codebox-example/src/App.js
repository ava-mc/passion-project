import React, { useEffect } from "react";
import "mind-ar/dist/mindar-image.prod.js";
import "aframe";
import "mind-ar/dist/mindar-image-aframe.prod.js";
import "./App.css";
import MindARViewer from "./components/MindarViewer";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

const targets= [0,1];
const models = [0,1];

function App() {
  // const [started, setStarted] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [message, setMessage] = useState(undefined);
  const [model, setModel] = useState(undefined);
  const [target, setTarget] = useState(undefined);
  console.log(searchParams);

  useEffect(()=> {
    if (searchParams.has("message")) {
      setMessage(searchParams.get("message"));
    }
    if (searchParams.has("model")) {
      if (models.includes(parseInt(searchParams.get("model")))){
        setModel(parseInt(searchParams.get("model")));
      }   
    }
    if (searchParams.has("target")) {
      if (targets.includes(parseInt(searchParams.get("target")))) {
        setTarget(parseInt(searchParams.get("target")));
      }  
    }
  }, [])

  return (
    <div className="App">
      <h1>Testing the existing example</h1>
      <div className="container">
        <MindARViewer model={model} target={target} text={message} />
        <video></video>
      </div>
    </div>
  );
}

export default App;
