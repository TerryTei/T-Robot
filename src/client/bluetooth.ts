/// <reference types="web-bluetooth" />
import loop_queue from "./stack"
import SelectInput from "@mui/material/Select/SelectInput";

export default class bluetooth {
  res = require("./screen2.ts");

  static readonly serviceUUID = "6e400001-b5a3-f393-e0a9-e50e24dcca9e"
  static readonly characteristicsUUID = "6e400002-b5a3-f393-e0a9-e50e24dcca9e"
  static device: BluetoothDevice
  static characteristics: BluetoothRemoteGATTCharacteristic
  static queue: any[] = [];
  static loopS: any[]=[]
  static loopE:any[]=[]


  constructor() {

    bluetooth.device = {} as any;
    bluetooth.characteristics = {} as any;
    bluetooth.queue = []
  }
  static loopstart(){
    bluetooth.loopS.unshift(1232)
  } 
  static loopend(){
    bluetooth.loopS.unshift(3212)
  }
  static async onConnectClick() {

    try {
      console.log('Requesting Bluetooth Device...');

      bluetooth.device = await navigator.bluetooth.requestDevice({
        filters: [{ services: [bluetooth.serviceUUID] }]
      });

      console.log('> Name:             ' + bluetooth.device.name);
      console.log('> Id:               ' + bluetooth.device.id);
      const server = await bluetooth.device.gatt?.connect();
      console.log(server)
      const service = await server?.getPrimaryService(bluetooth.serviceUUID);
      console.log(service)
      const characteristics = await service?.getCharacteristic(bluetooth.characteristicsUUID);
      (characteristics != undefined) ? bluetooth.characteristics = characteristics : null
      console.log(bluetooth.characteristics)
      let myDescriptor = await bluetooth.characteristics.getDescriptors()
      console.log(myDescriptor)
    } catch (error) {
      console.log('Argh! ' + error);
    }
  }
  static async callstop(t: number) {
    var startTime = new Date().getTime();
    var interval = setInterval((() => {
      console.log("Time: " + String(new Date().getTime() - startTime))
      if (new Date().getTime() - startTime >= t) {
        clearInterval(interval);
        bluetooth.onstopClick()
      }
    }
    ), 100)
  }

  //  to control robot speed, remember add the code to the queue if you use it
  static async speedup() {
    var runcommand = new ArrayBuffer(20)
    var int8 = new Uint8Array(runcommand)
    int8[0] = 59
    int8[1] = 0                         //  1 for low speed ; 0 is default, for high speed
    for (let i = 2; i <= 19; i++)
      int8[i] = 0
    try {
      bluetooth.characteristics.writeValueWithoutResponse(runcommand)
    } catch (error) {
      console.log('Argh! ' + error);
    }
    await new Promise(f => setTimeout(f, 500))
  }
  static onRunClick() {
    var runcommand = new ArrayBuffer(20)
    var int8 = new Uint8Array(runcommand)
    int8[0] = 54
    for (let i = 1; i < 19; i++)
      int8[i] = 0
    try {
      bluetooth.characteristics.writeValueWithoutResponse(runcommand)
    } catch (error) {
      console.log('Argh! ' + error);
    }
    bluetooth.callstop(2100)
  }
  static onbackClick() {
    var runcommand = new ArrayBuffer(20)
    var int8 = new Uint8Array(runcommand)
    int8[0] = (3 << 4) + 7
    for (let i = 1; i < 19; i++)
      int8[i] = 0
    try {
      bluetooth.characteristics.writeValueWithoutResponse(runcommand)
    } catch (error) {
      console.log('Argh! ' + error);
    }
    bluetooth.callstop(2100)
  }
  static onleftClick() {
    var runcommand = new ArrayBuffer(20)
    var int8 = new Uint8Array(runcommand)
    int8[0] = (3 << 4) + 8
    for (let i = 1; i < 19; i++)
      int8[i] = 0
    try {
      bluetooth.characteristics.writeValueWithoutResponse(runcommand)
    } catch (error) {
      console.log('Argh! ' + error);
    }
    bluetooth.callstop(900)
  }
  static onrightClick() {
    var runcommand = new ArrayBuffer(20)
    var int8 = new Uint8Array(runcommand)
    int8[0] = (3 << 4) + 9
    for (let i = 1; i < 19; i++)
      int8[i] = 0
    try {
      bluetooth.characteristics.writeValueWithoutResponse(runcommand)
    } catch (error) {
      console.log('Argh! ' + error);
    }
    bluetooth.callstop(900)
  }
  static onstopClick() {
    var runcommand = new ArrayBuffer(20)
    var int8 = new Uint8Array(runcommand)
    int8[0] = (3 << 4) + 10
    for (let i = 1; i < 19; i++)
      int8[i] = 0
    try {
      bluetooth.characteristics.writeValueWithoutResponse(runcommand)
    } catch (error) {
      console.log('Argh! ' + error);
    }
  }
  static onleft180Click() {
    var runcommand = new ArrayBuffer(20)
    var int8 = new Uint8Array(runcommand)
    int8[0] = (3 << 4) + 8
    for (let i = 1; i < 19; i++)
      int8[i] = 0
    try {
      bluetooth.characteristics.writeValueWithoutResponse(runcommand)
    } catch (error) {
      console.log('Argh! ' + error);
    }
    bluetooth.callstop(1800)
  }
  static onright180Click() {
    var runcommand = new ArrayBuffer(20)
    var int8 = new Uint8Array(runcommand)
    int8[0] = (3 << 4) + 9
    for (let i = 1; i < 19; i++)
      int8[i] = 0
    try {
      bluetooth.characteristics.writeValueWithoutResponse(runcommand)
    } catch (error) {
      console.log('Argh! ' + error);
    }
    bluetooth.callstop(1800)
  }
  static onDisconnectButtonClick() {
    if (!bluetooth.device) {
      return;
    }
    console.log('Disconnecting from Bluetooth Device...');
    if (bluetooth.device.gatt?.connected) {
      bluetooth.device.gatt?.disconnect();
    } else {
      console.log('> Bluetooth Device is already disconnected');
    }
  }
  static async goto() {
    console.log("E:"+bluetooth.loopE)
    console.log("S:"+bluetooth.loopE)
    console.log("q:"+bluetooth.loopE)
    var new_queue = new loop_queue()
    bluetooth.loopE= new_queue.split(bluetooth.loopS)
    bluetooth.queue=bluetooth.loopE
    //bluetooth.queue = new_queue.split(bluetooth.queue)
    console.log("E:"+bluetooth.loopE)
    console.log("S:"+bluetooth.loopE)
    console.log("q:"+bluetooth.loopE)
    let a = bluetooth.queue.length
    for (let i = 0; i < a; i++) {
      switch (bluetooth.queue.pop()) {
        case 1:
          bluetooth.onRunClick()
          break
        case 2:
          bluetooth.onleftClick()
          break
        case 3:
          bluetooth.onrightClick()
          break
        case 4:
          bluetooth.onbackClick()
          break
        case 6:
          bluetooth.onleft180Click()
          break
        case 7:
          bluetooth.onright180Click()
          break
        default:
          bluetooth.speedup()
          break;
      }
      await new Promise(f => setTimeout(f, 2500))
    }
  }
}



