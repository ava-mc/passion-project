const trackingImages = [
  { name: "lego", id: 0 },
  { name: "question", id: 1 },
];
const models = [
  { rotation: "0 0 0", scale: "0.5 0.5 0.5", id: 0 },
  { rotation: "0 0 0", scale: "0.005 0.005 0.005", id: 1 },
  { rotation: "0 0 0", scale: "1 1 1", id: 2 },
  { rotation: "0 0 0", scale: "10 10 10", id: 3 },
];

const width = 1;
const wrapCount = 20;

const EffectFromParamComponent = {
  schema: {},

  init() {
    // sample URL: https://playground.8thwall.app/url-params-test/?color=COLOR&shape=SHAPE
    const params = new URLSearchParams(document.location.search.substring(1));

    const trackingImage = params.get("image")
      ? trackingImages[parseInt(params.get("image"), 10)]
      : trackingImages[0];

    const chosenModel = params.get("model")
      ? models[parseInt(params.get("model"), 10)]
      : models[3];

    const message = params.get("message")
      ? params.get("message")
      : "Hello, this is my 8th wall example";

    const target = document.createElement("a-entity");
    target.setAttribute(
      "xrextras-named-image-target",
      `name: ${trackingImage.name}`
    );

    // target.setAttribute('name', trackingImage.name)
    const text = document.createElement("a-text");
    text.setAttribute("value", message);
    // text.setAttribute('geometry', 'primitive: plane')
    text.setAttribute("color", "blue");
    text.setAttribute("position", "0 0.2 0.7");

    text.setAttribute("wrap-count", wrapCount);
    text.setAttribute("width", width);
    text.setAttribute("align", "center");

    const model = document.createElement("a-entity");
    model.setAttribute("gltf-model", `#model-${chosenModel.id}`);
    model.setAttribute("rotation", chosenModel.rotation);
    model.setAttribute("scale", chosenModel.scale);
    model.setAttribute("position", "0 -0.5 0");

    target.appendChild(model);
    target.appendChild(text);

    this.el.sceneEl.appendChild(target);
  },
};

export { EffectFromParamComponent };
