import 'aframe';
import '@ar-js-org/ar.js';

// Setup for a-frame
AFRAME.registerComponent('samplehandler', {
    init: function () {
        console.log("samplehandler init...")
        let marker = this.el;
        //let marker = this.el.sceneEl;

        marker.addEventListener('markerFound', function () {
            console.log("markerFound...");
        }.bind(this));

        marker.addEventListener('markerLost', function() {
            console.log("markerLost...");
        }.bind(this));
    }
});

AFRAME.registerComponent('modify-materials', {
    init: function () {
        let tex = new THREE.TextureLoader().load('../resources/Map-COL.jpg');

        // Wait for model to load.
        this.el.addEventListener('model-loaded', () => {
            // Grab the mesh / scene.
            const obj = this.el.getObject3D('mesh');
            // Go over the submeshes and modify materials we want.
            obj.traverse(node => {
                console.log("node.name:", node.name);
                if (node.name == "LeePerrySmith") {
                    // node.material.color.set('red');
                    node.material.map = tex;
                }
            });
        });
    }
});

window.onload = function() {
    console.log("window loaded...");
};


const ARTest = () => {
    return (
      <>
       <a-scene
        vr-mode-ui="enabled: false;"
        renderer='antialias: true; alpha: true; precision: mediump;'
        embedded arjs='trackingMethod: best; sourceType: webcam; debugUIEnabled: false;'
    >
        <a-assets>
            <a-asset-item id="model" src="assets/LeePerrySmith.glb"></a-asset-item>
            <img id="tex-image" src="assets/Map-COL.jpg"></img>
        </a-assets>
        <a-nft
            samplehandler 
            type='nft' url="https://followthedarkside.github.io/arjs-image-tracking-sample/resources/nft/ramen-1000px"
            smooth="true" smoothCount="10" smoothTolerance="0.01" smoothThreshold="5"
        >
            <a-entity modify-materials gltf-model="#model" play-all-model-animations="" position="0 500 0" rotation="-90 0 0" scale="50 50 50" visible="true">
            </a-entity>
        </a-nft>
		<a-entity camera></a-entity>
	</a-scene>
      </>
    );
}

export default ARTest;