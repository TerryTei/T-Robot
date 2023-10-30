import * as THREE from 'three'
import Bluetooth from './bluetooth'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import Stats from 'three/examples/jsm/libs/stats.module'
import './css/global.css';
import { GUI } from 'dat.gui'
import { Matrix4, Scene, TorusBufferGeometry, Vector3 } from 'three'
//import { level } from './callmap';
import bluetooth from './bluetooth'
import { Aboutqueue } from './aboutqueue'
import Card from './card'
import test from './controller'
import { red } from '@mui/material/colors'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import end from './end'


export default class screen2 {
    static scene = new THREE.Scene();
    static test = new test();
    /*scene.add(new THREE.AxesHelper(5))*/
    blue = new Bluetooth();
    static trobot: THREE.Object3D<THREE.Event | THREE.Group> = new THREE.Object3D();
    static light = new THREE.HemisphereLight(0xffffff, 0x444444);
    static camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    static renderer = new THREE.WebGLRenderer({ antialias: true });
    //queue: Instruction = queuetmp;
    static stats = Stats()
    static controls = new OrbitControls(this.camera, this.renderer.domElement);
    static UI = document.getElementById('UI')
    static chatL = document.getElementById('chatL')
    static chatLL = document.getElementById('chatLL')
    static chatA = document.getElementById('chatA')
    static chatB = document.getElementById('chatB')
    static chatBB = document.getElementById('chatBB')
    static chatC = document.getElementById('chatC')
    static chatCC = document.getElementById('chatCC')
    static pic1 = document.getElementById('pic1')
    static pic2 = document.getElementById('pic2')
    static pic3 = document.getElementById('pic3')
    static fairy = document.getElementById('fairy')
    static piclev2 = document.getElementById('piclev2')
    static piclev3 = document.getElementById('piclev3')
    static animatestop = false
    //背景END
    static robotx = 0
    static roboty = 5
    static robotz = 0
    static nowx = screen2.robotx
    static nowz = screen2.robotz
    tempt: THREE.Object3D<THREE.Event | THREE.Group> = new THREE.Object3D();
    robots:THREE.Object3D<THREE.Event | THREE.Group> = new THREE.Object3D();
    static end=false
    mesh = new THREE.Mesh(new THREE.PlaneGeometry(2000, 2000), new THREE.MeshPhongMaterial({ color: 0x999999, depthWrite: false }));
    screenmap(tmp: number) {
        screen2.robotx = 0
        screen2.roboty = 5
        screen2.robotz = 0
        screen2.nowx = screen2.robotx
        screen2.nowz = screen2.robotz
        screen2.animatestop = false
        screen2.light.position.set(300, 500, 50)
        screen2.scene.add(screen2.light)
        screen2.camera.position.set(-0.00778385830013, 1.5089123282272152, -2.400862587029482)
        screen2.camera.lookAt(0, 0, 0)
        window.addEventListener('resize', (): void => { this.onWindowResize() }, false)
        screen2.scene.add(screen2.camera)
        screen2.renderer.setSize(window.innerWidth, window.innerHeight)
        document.body.appendChild(screen2.renderer.domElement)
        screen2.controls.maxDistance = 5
        screen2.controls.minDistance = 2
        screen2.controls.maxPolarAngle = 1
        screen2.controls.minPolarAngle = 1
        screen2.controls.addEventListener('change', (): void => { this.render() })
        document.body.appendChild(screen2.stats.dom)


        this.lobby(tmp)
        this.Skybox(tmp)
        this.robot()
        this.animate(tmp)
        this.endobj(tmp)
    }
    //背景
    async Skybox(tmp: number) {
        const materialArray = []
        switch(tmp){
            case 1:
                break
            case 2:
                materialArray.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('img/bk/blue/ft.jpg'), side: THREE.DoubleSide }))
                materialArray.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('img/bk/blue/bk.jpg'), side: THREE.DoubleSide }))
                materialArray.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('img/bk/blue/up.jpg'), side: THREE.DoubleSide }))
                materialArray.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('img/bk/blue/dn.jpg'), side: THREE.DoubleSide }))
                materialArray.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('img/bk/blue/rt.jpg'), side: THREE.DoubleSide }))
                materialArray.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('img/bk/blue/lf.jpg'), side: THREE.DoubleSide }))
              break
            case 3:
                materialArray.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('img/bk/ft.jpg'), side: THREE.DoubleSide }))
                materialArray.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('img/bk/bk.jpg'), side: THREE.DoubleSide }))
                materialArray.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('img/bk/up.jpg'), side: THREE.DoubleSide }))
                materialArray.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('img/bk/dn.jpg'), side: THREE.DoubleSide }))
                materialArray.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('img/bk/rt.jpg'), side: THREE.DoubleSide }))
                materialArray.push(new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('img/bk/lf.jpg'), side: THREE.DoubleSide }))
               
                break
        }
        const skyboxGeo = new THREE.BoxGeometry(100, 100, 100)
        const skybox = new THREE.Mesh(skyboxGeo, materialArray)
        screen2.scene.add(skybox)
        screen2.UI!.style.display = 'block'
        screen2.chatL!.style.display = 'block'
        screen2.pic1!.style.display = 'block'
        screen2.pic3!.style.display = 'block'
        
    }
    async robot() {
        const objLoader = new OBJLoader()
        objLoader.load(
            'models/robot.obj',
            (object) => {
                // (object.children[0] as THREE.Mesh).material = material
                // object.traverse(function (child) {
                //     if ((child as THREE.Mesh).isMesh) {
                //         (child as THREE.Mesh).material = material
                //     }
                // })

                object.position.set(screen2.robotx, screen2.roboty, screen2.robotz)
                object.castShadow = true
                screen2.trobot = object
                object.scale.set(10, 10, 10)
                screen2.scene.add(screen2.trobot)
                screen2.controls.target = screen2.trobot.position
                screen2.test.down()

            },
            (xhr) => {

            },
            (error) => {
                console.log(error)
            }
        )
    }
    async endobj(tmp: number) {
        const objLoader = new OBJLoader()
        switch(tmp){
            case 1:
            objLoader.load(
                'models/apple.obj',
                (object) => {
                            object.position.set(3.8, 0, 3)
                            object.rotation.y = -0.5 * Math.PI
                            screen2.chatA!.style.display = 'none'
                            screen2.fairy!.style.display = 'none'
                    object.scale.set(0.02, 0.02, 0.02)
                    screen2.scene.add(object)
                    console.log(tmp)
    
                },
                (xhr) => {
    
                },
                (error) => {
                    console.log("abc:" + error)
                }
            )
            break
            case 2:
                objLoader.load(
                    'models/apple.obj',
                    (object) => {
                        object.position.set(2,0,6.5)
                        object.rotation.y =  Math.PI
                        screen2.chatB!.style.display = 'block'
                        screen2.chatL!.style.display = 'none'
                        screen2.pic2!.style.display = 'none'
                        object.scale.set(0.02, 0.02, 0.02)
                        screen2.scene.add(object)
                        console.log(tmp)
        
                    },
                    (xhr) => {
        
                    },
                    (error) => {
                        console.log("abc:" + error)
                    }
                )
                break
            case 3:
                var mtlLoader = new MTLLoader();
                var plant_cube = undefined;
                mtlLoader.load("models/robotsister_000058.mtl", function(materials){
                    materials.preload();
                    objLoader.setMaterials(materials);
                    objLoader.load(
                        'models/robotsister_000058.obj',
                        (object) => {
                            object.position.set(-1.2,0.08, 0)
                            object.rotation.y = -0.5 * Math.PI
                            screen2.chatC!.style.display = 'block'
                            screen2.chatL!.style.display = 'none'
                            screen2.chatB!.style.display = 'none'
                            object.scale.set(8, 8, 8)
                            screen2.scene.add(object)
                            console.log(tmp)
                            
                        },
                        (xhr) => {
                        },
                        (error) => {
                            console.log("abc:" + error)
                        }
                    )
                })
            
                
            }
        
    }
    onWindowResize() {
        screen2.camera.aspect = window.innerWidth / window.innerHeight
        screen2.camera.updateProjectionMatrix()
        screen2.renderer.setSize(window.innerWidth, window.innerHeight)
        this.render()
    }

    async animate(tmp: number) {


        if (screen2.animatestop == false) {
            requestAnimationFrame(() => this.animate(tmp))
            this.render()
            screen2.stats.update()
        }
        switch(tmp){
            case 1:
                let qqq = false;
                if (screen2.trobot.position.x >= 3 && screen2.trobot.position.x <= 4 && screen2.trobot.position.z >= 3) {
                    screen2.chatLL!.style.display = 'block'
                    screen2.pic1!.style.display = 'block'
                    screen2.pic3!.style.display = 'block'
                    screen2.pic2!.style.display = 'none'
                    screen2.chatLL!.addEventListener("click",async function(){
                        document.getElementById("pic2")!.style.display = "none";
                        if(qqq==false){
                          document.getElementById("chatLL")!.innerHTML="看來不是這一個時空 繼續去下一個時空找吧!"+"<span class='arrow_r_out'</span>";
                          screen2.pic1!.style.display = 'blcok'
                          screen2.pic3!.style.display = 'blcok'
                          qqq=true;
                        }else{
                            screen2.test.fly()
                          document.getElementById("chatLL")!.style.display="none";
                          document.getElementById("pic1")!.style.display="none";
                          document.getElementById("pic3")!.style.display = "none";
                          screen2.pic2!.style.display = 'none'
                          screen2.UI!.style.display = 'none'
                
                          document.body.removeChild(document.body.appendChild(screen2.renderer.domElement))
                          document.body.removeChild(document.body.appendChild(screen2.stats.dom))
                        
                        }
                      })
                      await new Promise(f => setTimeout(f, 1000));
                      screen2.animatestop = true
                      while (screen2.scene.children.length > 0) {
                          screen2.scene.remove(screen2.scene.children[0]);
                      }
                    
                  

        }
            case 2:
                let www = false;
                if(screen2.trobot.position.x >= 2 && screen2.trobot.position.x <= 3 && screen2.trobot.position.z >= 6){
                    screen2.chatBB!.style.display = 'block'
                    screen2.pic1!.style.display = 'block'
                    screen2.pic3!.style.display = 'block'
                    screen2.pic2!.style.display = 'none'
                    screen2.chatBB!.addEventListener("click",async function(){
                        document.getElementById("pic2")!.style.display = "none";
                        if(www==false){
                          document.getElementById("chatBB")!.innerHTML="看來你妹妹一定被困在最後一個時空裡面了 <br> 我們走吧"+"<span class='arrow_r_out'</span>";
                          screen2.pic1!.style.display = 'blcok'
                          screen2.pic3!.style.display = 'blcok'
                          www=true;
                        }else{
                          document.getElementById("chatBB")!.style.display="none";
                          document.getElementById("pic1")!.style.display="none";
                          document.getElementById("pic3")!.style.display = "none";
                          screen2.pic2!.style.display = 'none'
                          screen2.UI!.style.display = 'none'
                          document.body.removeChild(document.body.appendChild(screen2.renderer.domElement))
                          document.body.removeChild(document.body.appendChild(screen2.stats.dom))
                         
                        }
                      })
                      screen2.test.fly()
                      await new Promise(f => setTimeout(f, 1000));
                      screen2.animatestop = true
                      while (screen2.scene.children.length > 0) {
                          screen2.scene.remove(screen2.scene.children[0]);
                      }
                }
            case 3:
                let third=false
                if(screen2.trobot.position.x >= -2.2 && screen2.trobot.position.x <= -1 && screen2.trobot.position.z <= 0.01&&screen2.trobot.position.z>=-0.01){
                    screen2.chatCC!.style.display = 'block'
                    screen2.pic1!.style.display = 'block'
                    screen2.pic3!.style.display = 'block'
                    screen2.pic2!.style.display = 'none'
                    screen2.chatCC!.addEventListener("click",async function(){
                        document.getElementById("pic2")!.style.display = "none";
                        if(third==false){
                          document.getElementById("chatCC")!.innerHTML="終於找到你了 <br> 我們走吧"+"<span class='arrow_r_out'</span>";
                          screen2.pic1!.style.display = 'blcok'
                          screen2.pic3!.style.display = 'blcok'
                          third=true;
                        }else{
                          document.getElementById("chatCC")!.style.display="none";
                          document.getElementById("pic1")!.style.display="none";
                          document.getElementById("pic3")!.style.display = "none";
                          screen2.pic2!.style.display = 'none'
                          screen2.UI!.style.display = 'none'
                          screen2.test.fly()
                          document.body.removeChild(document.body.appendChild(screen2.renderer.domElement))
                          document.body.removeChild(document.body.appendChild(screen2.stats.dom))
                          screen2.end=true
                        }
                      })
                      await new Promise(f => setTimeout(f, 1000));
                      screen2.animatestop = true
                      while (screen2.scene.children.length > 0) {
                          screen2.scene.remove(screen2.scene.children[0]);
                      }
                      
                }
        }
        switch(tmp){
            case 1:
                if(tmp==1){
                    if (screen2.trobot.position.x <= -1 || screen2.trobot.position.z >= 4 || screen2.trobot.position.z <= -1 || (screen2.trobot.position.x >= 1 && screen2.trobot.position.z <= 2.9)) {
                        screen2.test.reset()
                    }
                    break;
                }
                
            case 2:
                if(tmp==2){

                    if(screen2.trobot.position.x<=-1||screen2.trobot.position.z<=-1||screen2.trobot.position.x>=3||screen2.trobot.position.z>=7||(screen2.trobot.position.x<=3&&screen2.trobot.position.z>-1&&screen2.trobot.position.x>=1&&screen2.trobot.position.z<=2)||(screen2.trobot.position.x<=1.5&&screen2.trobot.position.z>=3.7)){
                        screen2.test.reset()
                    }
                    break;
                }
            case 3:
                if(tmp==3){
                    if(screen2.trobot.position.x>=1||screen2.trobot.position.z>=4||screen2.trobot.position.x<=-4||screen2.trobot.position.z<=-1||(screen2.trobot.position.x<=-0.9&&screen2.trobot.position.x>=-2.2&&screen2.trobot.position.z>=0.9&&screen2.trobot.position.z<=3)||(screen2.trobot.position.x<=-0.5&&screen2.trobot.position.x>=-1)&&screen2.trobot.position.z>=-0.3&&screen2.trobot.position.z<=1.3){
                        screen2.test.reset()
                    }
                        break;
                }


        }

    }
    render() {
        screen2.renderer.render(screen2.scene, screen2.camera)
    }
    lobby(tmp: number) {
        const planeGeometry2 = new THREE.PlaneGeometry()
        const texture2 = new THREE.TextureLoader().load('img/blocks/yellow.jpg')
        const texture3 = new THREE.TextureLoader().load('img/blocks/purple.jpg')
        const material2 = new THREE.MeshBasicMaterial({ map: texture2 })
        const material3 = new THREE.MeshBasicMaterial({ map: texture3 })
        let cat: THREE.Mesh;
        var getleveldetail = levelnum[tmp - 1][1]
        for (let i = 0; i < getleveldetail[0].length; i++) {
            if (i % 2 == 0)
                cat = new THREE.Mesh(planeGeometry2, material3);
            else
                cat = new THREE.Mesh(planeGeometry2, material2);

            cat.position.set(getleveldetail[0][i], getleveldetail[1][i], getleveldetail[2][i])
            cat.rotation.x = -0.5 * Math.PI
            screen2.scene.add(cat)
        }
    }

}

///藍芽組專用


const levelnum: [number, number[][]][] = [
    [1, [
        [0, 0, 0, 0, 1, 2, 3],      //x
        [0, 0, 0, 0, 0, 0, 0],      //y
        [0, 1, 2, 3, 3, 3, 3],      //z
    ]],
    [2, [
        [0, 0, 0, 0, 1, 2, 2,2,2,],      //x
        [0, 0, 0, 0, 0, 0, 0,0,0,],      //y
        [0, 1, 2, 3, 3, 3, 4,5,6],      //z
    ]],
    [3, [
        [0, 0, 0, 0, -1, -2, -3, -3, -3, -3, -2, ],      //x
        [0, 0, 0, 0,  0,  0,  0,  0,  0,  0,  0,  ],      //y
        [0, 1, 2, 3,  3,  3,  3,  2,  1,  0,  0,  ],      //z
    ]],
    [4, [
        [0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,],//x
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,],
        [0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,],            //y
              //z
    ]],
    
]

const fi: [number, number[][]][] = [
    [1, [
        [3],
        [3],
    ]],
    [2, [
        [4],
        [4],
    ]],
]
