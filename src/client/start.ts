import * as THREE from 'three'
import Stats from 'three/examples/jsm/libs/stats.module'
import lobby from './lobby'
import Bluetooth from './bluetooth'
import { GUI } from 'dat.gui';
import Card from './card'
export default class start{
    static end=false
    static audio=new Audio('audio/pokemonbgm.mp3')
    static  audioA=false
    constructor(){
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
    const material3 = new THREE.MeshPhongMaterial()
    const material4 = new THREE.MeshPhongMaterial()
    const material5 = new THREE.MeshPhongMaterial()
    const texture1 = new THREE.TextureLoader().load('gif/1.jpg')
    const texture2 = new THREE.TextureLoader().load('gif/2.jpg')
    const texture3 = new THREE.TextureLoader().load('gif/3.jpg')
    const texture4 = new THREE.TextureLoader().load('gif/4.jpg')
    const texture5 = new THREE.TextureLoader().load('gif/5.jpg')
    const texturearray = [texture1, texture2, texture3, texture4, texture5]
    //const texture = new THREE.TextureLoader().load("img/worldColour.5400x2700.jpg")
    material1.map = texture1
    material2.map = texture2
    material3.map = texture3
    material4.map = texture4
    material5.map = texture5
    const plane1 = new THREE.Mesh(planeGeometry, material1)
    const plane2 = new THREE.Mesh(planeGeometry, material2)
    const plane3 = new THREE.Mesh(planeGeometry, material3)
    const plane4 = new THREE.Mesh(planeGeometry, material4)
    const plane5 = new THREE.Mesh(planeGeometry, material5)
    const gifarray = [plane1, plane2, plane3, plane4, plane5, plane4, plane3, plane2]
    while(0==0) {
        for (let i = 0; i < gifarray.length; i++) {
            scene.add(gifarray[i])
            await new Promise(f => setTimeout(f, 200));
           scene.remove(scene.children[3])
        }
        
       if(start.end==true)
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
    if (start.end==false){
    requestAnimationFrame(animate)
    render()
    stats.update()
    }
}

function render() {
    renderer.render(scene, camera)
    document.body.appendChild(renderer.domElement);
}

        start.audio.loop=true
        start.audio.volume=0.4
        start.audio.play()

onmousedown = (event) => { 
            if(start.end==false){let a=new lobby()
            document.body.removeChild(document.body.appendChild(renderer.domElement))
            document.body.removeChild(document.body.appendChild(stats.dom))
            document.getElementById("chatA")!.style.display="block";

            document.getElementById("book")!.style.display="block";
            document.getElementById("speaker")!.style.display="block";
            document.getElementById("setting")!.style.display="block";
          
            start.end=true
            while(scene.children.length > 0){ 
         scene.remove(scene.children[0]); 
    }
    start.audio.play()
     a.Lobby()
}
};
gif()
animate()
    }
}