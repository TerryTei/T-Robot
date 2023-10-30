import * as THREE from 'three'
import Stats from 'three/examples/jsm/libs/stats.module'
import end from './end';
import screen2 from './screen2';
export default class lobby{
Lobby(){
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
const scene = new THREE.Scene()
scene.add(new THREE.AxesHelper(5))
var index = 0
var map=new screen2()
const light = new THREE.PointLight(0xffffff, 1)
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

const planeGeometry = new THREE.PlaneGeometry(9.2, 4.6) //3.6, 1.8)

const material = new THREE.MeshPhongMaterial()

const texture1 = new THREE.TextureLoader().load('lobbe/map.jpg')
//const texture = new THREE.TextureLoader().load("img/worldColour.5400x2700.jpg")
material.map = texture1

const plane = new THREE.Mesh(planeGeometry, material)
scene.add(plane)



const planeGeometry3 = new THREE.PlaneGeometry(0.6, 0.6)
const texture3 = new THREE.TextureLoader().load('lobbe/yellow.png')
const material3 = new THREE.MeshBasicMaterial({
    map: texture3,
    transparent: true,
    depthTest: false,

})
let portal1 = new THREE.Mesh(planeGeometry3, material3)
portal1.position.set(-3.45, 0.2, 0)
scene.add(portal1)

let portal2 = new THREE.Mesh(planeGeometry3, material3)
portal2.position.set(-2.35, 0.2, 0)
scene.add(portal2)

let portal3 = new THREE.Mesh(planeGeometry3, material3)
portal3.position.set(-2.35, 1.35, 0)
scene.add(portal3)
let portal4 = new THREE.Mesh(planeGeometry3, material3)
portal4.position.set(3, -2, 0)
scene.add(portal4)




const planeGeometry2 = new THREE.PlaneGeometry()
const texture2 = new THREE.TextureLoader().load('lobbe/robot.png')
const material2 = new THREE.MeshBasicMaterial({
    map: texture2,
    transparent: true,
    depthTest: false,

})
let robot2d = new THREE.Mesh(planeGeometry2, material2)
robot2d.position.set(-3.45, 1.8, 0)
scene.add(robot2d)





window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}

const stats = Stats()

document.body.appendChild(stats.dom)
function animate() {
    if(screen2.end==false){
    requestAnimationFrame(animate)
    render()
    stats.update()
}else{
        document.body.removeChild(document.body.appendChild(renderer.domElement))
        document.body.removeChild(document.body.appendChild(stats.dom))
        while (scene.children.length > 0) {
        scene.remove(scene.children[0]);
        }
        let a=new end()
    }
}

function render() {
    renderer.domElement.addEventListener('mousedown', canvasMouseDownHandler, false);
    raycaster.setFromCamera(mouse, camera);
    renderer.render(scene, camera)
    document.body.appendChild(renderer.domElement);
}
async function canvasMouseDownHandler(evt: any) {
    evt.preventDefault();
    var fovy = 55;
    var cos = Math.cos(fovy / 2 * Math.PI / 180);
    var z = Math.sqrt(Math.sqrt(1 / cos + (1 / cos + 1) * (1 / cos + 1) / 4) - (1 / cos + 1) / 2);
    var vector = new THREE.Vector3((evt.clientX / window.innerWidth) * 2 - 1, -(evt.clientY / window.innerHeight) * 2 + 1, z);
    vector.unproject(camera);
    var dir = vector.sub(camera.position).normalize();
    var raycaster = new THREE.Raycaster(camera.position, dir);
    var intersects = raycaster.intersectObjects([portal1, portal2, portal3,portal4]);
    if (intersects.length > 0) {
        if (intersects[0].object === portal1) {
            if (index == 0) {
                index++
                for (let i = robot2d.position.y; i > portal1.position.y + 0.3; i -= 0.1) {

                    robot2d.position.y -= 0.1
                    await new Promise(f => setTimeout(f, 60))
                }
                    map.screenmap(1)
            }
            
            if (index == 2) {
                index--
                for (let i = robot2d.position.x; i > portal1.position.x; i -= 0.1) {
                    robot2d.position.x -= 0.1
                    await new Promise(f => setTimeout(f, 60))
                }
                
                    map.screenmap(1)
            
        }
        }
        if (intersects[0].object === portal2) {
            if (index == 1) {
                index++
                for (let i = robot2d.position.x; i <= portal2.position.x; i += 0.1) {
                    robot2d.position.x += 0.1
                    await new Promise(f => setTimeout(f, 60))
                }

                    map.screenmap(2)

            }
            
            if (index == 3) {
                index--
                for (let i = robot2d.position.y; i > portal2.position.y + 0.2; i -= 0.1) {
                    robot2d.position.y -= 0.1
                    await new Promise(f => setTimeout(f, 60))
                }

                    map.screenmap(2)

            }
        }
        if (intersects[0].object === portal3) {
            if (index == 2) {
                index++
                for (let i = robot2d.position.y; i <= portal3.position.y + 0.2; i += 0.1) {
                    robot2d.position.y += 0.1
                    await new Promise(f => setTimeout(f, 60))
                }
                    map.screenmap(3)
                    
            }
        }
        if (intersects[0].object === portal4) {
           map.screenmap(4)
        }
    }

}

animate()
}
}