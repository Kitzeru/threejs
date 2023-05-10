import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const light = new THREE.PointLight( 0xffffff ); 
light.position.set( 50, 50, 50 );
scene.add( light );

const geometry = new THREE.SphereGeometry(3,50);
const material = new THREE.MeshBasicMaterial( { color: 0xffc0cb,wireframe: true } );
const plane = new THREE.Mesh( geometry, material );
const controls = new OrbitControls( camera, renderer.domElement );
scene.add( plane );

const geo = new THREE.BoxGeometry(3,3,3);
const mat = new THREE.MeshBasicMaterial({color: 0xffffff,wireframe:true,transparent:false});
const box = new THREE.Mesh(geo,mat);
box.position.set(0,0,0);
scene.add(box);

const geomet = new THREE.SphereGeometry( 100, 100, 100 );

const wireframe = new THREE.WireframeGeometry( geomet );

const line = new THREE.LineSegments( wireframe );
line.material.depthTest = false;
line.material.opacity = 0.25;
line.material.transparent = true;

scene.add( line );

const rial = new THREE.LineBasicMaterial( { color: 0x0000ff } );
const points = [];
points.push( new THREE.Vector3( 0, 3, 0 ) );
points.push( new THREE.Vector3( 3, 0, 0 ) );
points.push( new THREE.Vector3( 0, -3, 0 ) );
points.push( new THREE.Vector3( -3, 0, 0 ) );
points.push( new THREE.Vector3( 0, 3, 0 ) );
points.push( new THREE.Vector3( 0, -3, 0 ) ); 
points.push( new THREE.Vector3( 3, 0, 0 ) );   
points.push( new THREE.Vector3( -3, 0, 0 ) );  

const metry = new THREE.BufferGeometry().setFromPoints( points );
const lin = new THREE.Line( metry, rial );
scene.add(lin);

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );
    lin.rotation.z -= 0.01;
    plane.rotation.z += 0.01;
    plane.rotation.x += 0.01;
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;
    line.rotation.y -= 0.01;
	renderer.render( scene, camera );
}

animate();