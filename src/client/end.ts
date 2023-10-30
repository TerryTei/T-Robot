import * as THREE from 'three'
import Stats from 'three/examples/jsm/libs/stats.module'
import lobby from './lobby'
import Bluetooth from './bluetooth'
import { GUI } from 'dat.gui';
import Card from './card'
export default class end{
    static endend=false
    constructor(){
        document.getElementById("fairy")!.style.display="none";
        document.getElementById("speaker")!.style.display="none";
        document.getElementById("speaker1")!.style.display="none";
        document.getElementById("book")!.style.display="none";
        document.getElementById("pic1")!.style.display="none";
        document.getElementById("pic2")!.style.display="none";
const scene = new THREE.Scene()
scene.add(new THREE.AxesHelper(5))
const light = new THREE.PointLight(0xffffff,1)
light.position.set(0, 5, 10)
scene.add(light)

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)
camera.position.z = 3

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)

//controls.screenSpacePanning = true // default is now true since three r118. Used so that panning up and down doesn't zoom in/out
//controls.addEventListener('change', render)
async function gif() {

    const planeGeometry = new THREE.PlaneGeometry(10, 5) //3.6, 1.8)

    const material1 = new THREE.MeshPhongMaterial()
    const material2 = new THREE.MeshPhongMaterial()

    const texture1 = new THREE.TextureLoader().load('gif/end1.jpg')
    const texture2 = new THREE.TextureLoader().load('gif/end2.jpg')

    const texturearray = [texture1, texture2, ]
    //const texture = new THREE.TextureLoader().load("img/worldColour.5400x2700.jpg")
    material1.map = texture1
    material2.map = texture2
  
    const plane1 = new THREE.Mesh(planeGeometry, material1)
    const plane2 = new THREE.Mesh(planeGeometry, material2)
    
    const gifarray = [plane1, plane2]
    while(0==0) {
        for (let i = 0; i < gifarray.length; i++) {
            scene.add(gifarray[i])
            await new Promise(f => setTimeout(f, 500));
           scene.remove(scene.children[3])
        }
        
       if(end.endend==true)
       break
    }
}

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}

const stats = Stats()
document.body.appendChild(stats.dom)
let a=true

function animate() {
    if (end.endend==false){
    requestAnimationFrame(animate)
    render()
    stats.update()
    }
}

function render() {
    renderer.render(scene, camera)
    document.body.appendChild(renderer.domElement);
}

     

onmousedown = (event) => { 
    history.go(0) 
            if(end.endend==false){
            document.body.removeChild(document.body.appendChild(renderer.domElement))
            document.body.removeChild(document.body.appendChild(stats.dom))
            document.getElementById("chatA")!.style.display="block";

            document.getElementById("book")!.style.display="block";
            document.getElementById("speaker")!.style.display="block";
            document.getElementById("setting")!.style.display="block";
          
            end.endend=true
            while(scene.children.length > 0){ 
         scene.remove(scene.children[0]);

    }
}
};
gif()
animate()
    }
}