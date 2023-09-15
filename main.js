
//import three js
import './style.css'
import * as THREE from 'three';
import{OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

//3 Elements: SCENE, CAMERA and RENDERER
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1,1000);//fov, aspect radtio, view front back

//tell which dom element to us ie canvas with id #bg
const renderer = new THREE.WebGL1Renderer({canvas: document.querySelector('#bg')});

// set renderer to full width
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(50);//set camera position back
camera.position.setY(10);//set camera position back

//show show scene and camer on the canvas
renderer.render(scene, camera);

//Geometry, Material, Mesh
const geometry = new THREE.TorusGeometry( 10, 3, 16, 100); 
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00, wireframe: true} ); //basic material

const cube = new THREE.Mesh( geometry, material ); 
scene.add( cube )

//create a new light for use with MeshStandardMaterial
const pointLight = new THREE.PointLight(0xffffff)
const ambientLight = new THREE.AmbientLight(0xffffff)


const controls = new OrbitControls(camera, renderer.domElement);


// ligth and grid helpers
const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200,200);





scene.add(lightHelper, gridHelper);





//function update like in unity
function animate()

{
    requestAnimationFrame(animate);
    renderer.render(scene,camera);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;

    controls.update();
}


function onWindowResize()
{
camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();
renderer.setSize(window.innerWidth, window.innerHeight);

}

window.addEventListener('resize', onWindowResize, false);


animate();




