import './css/global.css';
import * as THREE from 'three'
import { Matrix4, Vector3 } from 'three'
import loop_queue from "./stack"

import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import screen2 from './screen2';
import card from './card';
import { flushSync } from 'react-dom';
import { MultiSelectUnstyled } from '@mui/base';

export default class test {
    map = new screen2()
    nowz = screen2.robotx
    nowx = screen2.robotz
    static queue: any[] = []
    static loopS:any[]=[]
    static loopE:any[]=[]
    constructor() {
    }
    async loopstart(){
        test.loopS.unshift(1232)
    }
    async loopend(){
        test.loopS.unshift(3212)
    }
    
    
    async run() {//前 超過z=1就停  
        console.log(test.queue)
        console.log(screen2.trobot.position.z)
       console.log("robotx="+screen2.robotx+"robotz="+screen2.robotz+"nowx="+screen2.nowx+"nowz="+screen2.nowz)
        while (screen2.nowz <= (screen2.robotz + 1) &&screen2.nowz >= (screen2.robotz - 1) && screen2.nowx <= (screen2.robotx + 1) && screen2.nowx >= (screen2.robotx - 1)) {
            const oldObjectPosition = new Vector3();
            screen2.trobot.getWorldPosition(oldObjectPosition);
            screen2.trobot.translateZ(0.00216);
           screen2.nowz = screen2.trobot.position.z
            screen2.nowx = screen2.trobot.position.x
            screen2.camera.lookAt(screen2.trobot.position)
            await new Promise(f => setTimeout(f, 0.5));
            const newObjectPosition = new Vector3();
            screen2.trobot.getWorldPosition(newObjectPosition);
            const delta = newObjectPosition.clone().sub(oldObjectPosition);
            screen2.camera.position.add(delta);
            if(screen2.trobot.position.y>=1){
                break
            }
        }
        
        screen2.robotz = screen2.trobot.position.z
        screen2.robotx =screen2.trobot.position.x
        
    }
    async back() {//後
        var nowx = screen2.robotx
        var nowz = screen2.robotz

        while (nowz <= (screen2.robotz + 1) && nowz >= (screen2.robotz - 1) && nowx <= (screen2.robotx + 1) && nowx >= (screen2.robotx - 1)) {
            const oldObjectPosition = new Vector3();
            screen2.trobot.getWorldPosition(oldObjectPosition);

            screen2.trobot.translateZ(-0.00216);
            nowz = screen2.trobot.position.z
            nowx = screen2.trobot.position.x
            screen2.camera.lookAt(screen2.trobot.position)
            await new Promise(f => setTimeout(f, 0.5));


            const newObjectPosition = new Vector3();
            screen2.trobot.getWorldPosition(newObjectPosition);

            const delta = newObjectPosition.clone().sub(oldObjectPosition);

            screen2.camera.position.add(delta);
        }
        
        screen2.robotz = screen2.trobot.position.z
        screen2.robotx = screen2.trobot.position.x
        return
    }
    async left() {//左 
        for (let i = 0; i < 10; i++) {
            screen2.trobot.rotateY(0.05 * Math.PI)
            await new Promise(f => setTimeout(f, 90))
        }
        return
    }
    async right() {//右
        for (let i = 0; i < 10; i++) {
            screen2.trobot.rotateY(-0.05 * Math.PI)
            await new Promise(f => setTimeout(f, 90))
        }
        return
    }
    async left180() {//左180 
        for (let i = 0; i < 10; i++) {
            screen2.trobot.rotateY(0.1 * Math.PI)
            await new Promise(f => setTimeout(f, 100))
        }
        return
    }
    async right180() {//左180
        for (let i = 0; i < 20; i++) {
            screen2.trobot.rotateY(0.1 * Math.PI)
            await new Promise(f => setTimeout(f, 100))
        }
        return
    }
    async reset() {
        this.clear()
        screen2.trobot.position.set(0, 5, 0)
        screen2.trobot.lookAt(0, 5, 1)
        screen2.robotx = 0
        screen2.robotz = 0
        screen2.nowz = 0
        screen2.nowx = 0
        this.down()
    }
    async  down() {
        while (screen2.trobot.position.y>0.05) {
            screen2.camera.position.set(-0.00778385830013, 1.5089123282272152, -2.400862587029482)
            screen2.trobot.position.y -= 0.05
            screen2.trobot.rotateY(0.1 * Math.PI)
            await new Promise(f => setTimeout(f, 10))
        }
        screen2.trobot.lookAt(0, 0, 1)
    }
    async catsound(){
        const audio=new Audio('audio/cat.mp3')
        audio.play()
    }
    async claphands(){
        const audio=new Audio('audio/claphands.mp3')
        audio.play()
    }
    async pig(){
        const audio=new Audio('audio/pigs.mp3')
        audio.play()
    }
    async sheep(){
        const audio=new Audio('audio/sheep.mp3')
        audio.play()
    }
    async goto() {
        var new_queue = new loop_queue()
        test.loopE= new_queue.split(test.loopS)
        test.queue=test.loopE

        let a = test.queue.length
        for (let i = 0; i <= a; i++) {
            switch (test.queue.pop()) {
                case 1:
                    this.run()
                    break
                case 2:
                    this.left()
                    break
                case 3:
                    this.right()
                    break
                case 4:
                    this.back()
                    break
                case 5:
                    break
                case 6:
                    this.left180()
                    break
                case 7:
                    this.right180()
                    break
                case 8:
                    this.catsound()
                    break
                case 9:
                    this.claphands()
                    break
                case 10:
                    this.sheep()
                    break
                case 11:
                    this.pig()
                    break
                case 12:
                    this.catsound()
                    break
            }
            if(test.queue.length==0){
                await new Promise(f => setTimeout(f, 200));
                document.getElementById("div1")!.innerHTML = "";
                document.getElementById("div2")!.innerHTML = "";
                document.getElementById("div3")!.innerHTML = "";
                document.getElementById("div4")!.innerHTML = "";
                document.getElementById("div5")!.innerHTML = "";
                document.getElementById("div6")!.innerHTML = "";
                document.getElementById("div7")!.innerHTML = "";
                document.getElementById("div8")!.innerHTML = "";
                document.getElementById("div9")!.innerHTML = "";
                document.getElementById("div10")!.innerHTML = "";
            }
            test.loopS=[]
            document.getElementById("redid")!.style.display="none";
            document.getElementById("orangeid")!.style.display="none"; 
            document.getElementById("yellowid")!.style.display="none";
            document.getElementById("greenid")!.style.display="none";
            document.getElementById("rainbowid")!.style.display="flex";
            await new Promise(f => setTimeout(f, 2500));
        }
    
    }

    async  fly() {
        while (screen2.trobot.position.y<5) {
            screen2.trobot.position.y += 0.05
            screen2.trobot.rotateY(0.1 * Math.PI)

            await new Promise(f => setTimeout(f, 20))
        }


    }
    async clear(){
        test.loopS=[]
       
    }
    
}