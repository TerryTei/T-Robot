import * as THREE from 'three'
import Stats from 'three/examples/jsm/libs/stats.module'
import lobby from './lobby'
import Bluetooth from './bluetooth'
import { GUI } from 'dat.gui';
import Card from './card'
import Start from'./start'

let b=new Start()
let bluetooth=new Bluetooth();
const gui = new GUI()

const subGui = gui.addFolder('設定')
const card=new  Card();
var datGuiSetting = {
    藍芽連接:function () { Bluetooth.onConnectClick() },
    藍芽斷線: function () {
         Bluetooth.onDisconnectButtonClick()
  
     },
     背景音樂:function(){
   
        if(Start.audioA==false){
        Start.audio.pause()
        Start.audioA=true
        }
        else if(Start.audioA==true){
            Start.audio.play()
            Start.audioA=false
        }
     }
}



subGui.add(datGuiSetting, '藍芽連接')
subGui.add(datGuiSetting, '藍芽斷線')
subGui.add(datGuiSetting,"背景音樂")

