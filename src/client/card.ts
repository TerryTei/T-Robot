

import { GUI } from 'dat.gui';
import bluetooth from './bluetooth';
import Bluetooth from './bluetooth'
import screen2 from './screen2';
import Test from'./controller'
import Start from'./start'
export default class card {

  big: HTMLElement = document.getElementById("bigid")!;
  rainbow: HTMLElement = document.getElementById("rainbowid")!;
  R_r: HTMLElement = document.getElementById("R_r")!;
  R_o: HTMLElement = document.getElementById("R_o")!;
  R_y: HTMLElement = document.getElementById("R_y")!
  R_g: HTMLElement = document.getElementById("R_g")!;
  R_b: HTMLElement = document.getElementById("R_b")!;
  red: HTMLElement = document.getElementById("redid")!;
  orange: HTMLElement = document.getElementById("orangeid")!;
  yellow: HTMLElement = document.getElementById("yellowid")!;
  green: HTMLElement = document.getElementById("greenid")!;
 // blue: HTMLElement = document.getElementById("blueid")!;
  last: HTMLElement = this.rainbow;
  del: HTMLElement = document.getElementById("del")!;
  ret: HTMLElement = document.getElementById("ret")!;
  back: HTMLElement= document.getElementById("btn_submit")!;

  rednext: HTMLElement = document.getElementById("rednext")!;
  orangenext: HTMLElement = document.getElementById("orangenext")!;
  yellownext: HTMLElement = document.getElementById("yellownext")!
  greennext: HTMLElement = document.getElementById("greennext")!;
  //bluenext: HTMLElement = document.getElementById("bluenext")!;
  redback: HTMLElement = document.getElementById("redback")!;
  orangeback: HTMLElement = document.getElementById("orangeback")!;;
  yellowback: HTMLElement = document.getElementById("yellowback")!;
  greenback: HTMLElement = document.getElementById("greenback")!;
 // blueback: HTMLElement = document.getElementById("blueback")!;
 


  r1: HTMLElement = document.getElementById("drag1")!;
  o1: HTMLElement = document.getElementById("o1")!;
  y1: HTMLElement = document.getElementById("y1")!;
  g1: HTMLElement = document.getElementById("g1")!;
  //b1: HTMLElement = document.getElementById("b1")!;

  r2: HTMLElement = document.getElementById("r2")!;
  o2: HTMLElement = document.getElementById("o2")!;
  y2: HTMLElement = document.getElementById("y2")!;
  g2: HTMLElement = document.getElementById("g2")!;
  //b2: HTMLElement = document.getElementById("b2")!;

  r3: HTMLElement = document.getElementById("r3")!;
  o3: HTMLElement = document.getElementById("o3")!;
  y3: HTMLElement = document.getElementById("y3")!;
  g3: HTMLElement = document.getElementById("g3")!;
 // b3: HTMLElement = document.getElementById("b3")!;

  r4: HTMLElement = document.getElementById("r4")!;
  o4: HTMLElement = document.getElementById("o4")!;
  y4: HTMLElement = document.getElementById("y4")!;
  g4: HTMLElement = document.getElementById("g4")!;
  //b4: HTMLElement = document.getElementById("b4")!;

  r5: HTMLElement = document.getElementById("r5")!;
  o5: HTMLElement = document.getElementById("o5")!;
  y5: HTMLElement = document.getElementById("y5")!;
  g5: HTMLElement = document.getElementById("g5")!;
 // b5: HTMLElement = document.getElementById("b5")!;

  r6: HTMLElement = document.getElementById("r6")!;
  showr1: HTMLElement = document.getElementById("showr1")!;
  showo1: HTMLElement = document.getElementById("showo1")!;
  showy1: HTMLElement = document.getElementById("showy1")!;
  showg1: HTMLElement = document.getElementById("showg1")!;
  showb1: HTMLElement = document.getElementById("showb1")!;

  sup1 = document.getElementsByClassName("sup1")[0]! as HTMLElement;
  sup2 = document.getElementsByClassName("sup2")[0]! as HTMLElement;
  sup3 = document.getElementsByClassName("sup3")[0]! as HTMLElement;
  sup4 = document.getElementsByClassName("sup4")[0]! as HTMLElement;
  sup5 = document.getElementsByClassName("sup5")[0]! as HTMLElement;

  div1 = document.getElementById("div1")!;
  div2 = document.getElementById("div2")!;
  div3 = document.getElementById("div3")!;
  div4 = document.getElementById("div4")!;
  div5 = document.getElementById("div5")!;

  chatL:HTMLElement = document.getElementById("chatL")!;
  chatA:HTMLElement = document.getElementById("chatA")!;
  chatB:HTMLElement = document.getElementById("chatB")!;
  chatC:HTMLElement = document.getElementById("chatC")!;
  pic1:HTMLElement = document.getElementById("pic1")!;
  pic2:HTMLElement = document.getElementById("pic2")!;
  piclev2:HTMLElement = document.getElementById("piclev2")!;
  piclev3:HTMLElement = document.getElementById("piclev3")!;
  book:HTMLElement = document.getElementById("book")!;

  speaker:HTMLElement = document.getElementById("speaker")!;
  speaker1:HTMLElement = document.getElementById("speaker1")!;


  constructor() {
    

    
      //喇叭
      this.speaker.addEventListener("click", function () {
        if(Start.audioA==false){
          Start.audio.pause()
          Start.audioA=true
          document.getElementById("speaker")!.style.display="none";
          document.getElementById("speaker1")!.style.display="flex";
          }
        else if(Start.audioA==true){
              Start.audio.play()
              Start.audioA=false
              document.getElementById("speaker")!.style.display="flex";
              document.getElementById("speaker1")!.style.display="none";
          }
      })
       
      this.speaker1.addEventListener("click", function () {
        if(Start.audioA==false){
          Start.audio.pause()
          Start.audioA=true
          document.getElementById("speaker")!.style.display="none";
          document.getElementById("speaker1")!.style.display="flex";
          }
        else if(Start.audioA==true){
              Start.audio.play()
              Start.audioA=false
              document.getElementById("speaker")!.style.display="flex";
              document.getElementById("speaker1")!.style.display="none";
          }
      })
      //規則
      var open=false
      this.book.addEventListener("click", function () {
        if(open==false){
          document.getElementById("book1")!.style.display="flex"; 
          open =true
        
        }else{
          document.getElementById("book1")!.style.display="none"; 
          
          open=false
        }
      })
      

    let test=new Test()
    let one = false;
    let two = false;
    let three=false;
    let four=false;
    //第一關對話
    this.chatL.addEventListener("click",function(){
      if(one==false){
        document.getElementById("chatL")!.innerHTML="請一步一步向前走 通往最後的目的地"+"<span class='arrow_r_out'</span>";
      one=true;
      }else if(two==false){
        document.getElementById("chatL")!.innerHTML="這跟妹妹描述的場景似乎不太一樣⋯⋯"+"<span class='arrow_b_out'</span>";
        two=true
      }else if(three==false){
        document.getElementById("chatL")!.innerHTML="算了先往後去看看好了"+"<span class='arrow_b_out'</span>";
        three=true
      }else if(four==false){
        document.getElementById("chatL")!.innerHTML="請前往指定地點 我在指定地點等你"+"<span class='arrow_r_out'</span>";
        four=true
      }else{
        document.getElementById("chatL")!.style.display="none";
        document.getElementById("pic1")!.style.display="none";
        document.getElementById("pic2")!.style.display="flex";
        document.getElementById("pic3")!.style.display = "none";
      }
    })
    this.pic2.addEventListener("click", function () {
      document.getElementById("chatL")!.style.display="block";
      document.getElementById("pic1")!.style.display="flex";
      document.getElementById("pic3")!.style.display="flex";
      document.getElementById("pic2")!.style.display = "none";
      
    })
    let ppp = false;
    let ooo = false; 
    //第二關對話
    this.chatB.addEventListener("click",function(){
      document.getElementById("pic2")!.style.display = "none";
      if(ppp==false){
        document.getElementById("chatB")!.innerHTML="可是不能就這樣錯過每一個細節"+"<span class='arrow_b_out'</span>";
        ppp=true;
      }else if(ooo==false){
        document.getElementById("chatB")!.innerHTML="請前往指定地點 我在指定地點等你"+"<span class='arrow_r_out'</span>";
        ooo=true
      }else{
        document.getElementById("chatB")!.style.display="none";
        document.getElementById("pic1")!.style.display="none";
        document.getElementById("piclev2")!.style.display="flex";
        document.getElementById("pic3")!.style.display = "none";
      }
    })
    this.piclev2.addEventListener("click", function () {
      document.getElementById("chatB")!.style.display="block";
      document.getElementById("pic2")!.style.display = "none";
      document.getElementById("pic1")!.style.display="flex";
      document.getElementById("pic3")!.style.display="flex";
      document.getElementById("piclev2")!.style.display = "none";
      
    })

    let lll = false;
    let kkk = false;
    
    //第三關對話
    this.chatC.addEventListener("click",function(){
      if(lll==false){
        document.getElementById("chatC")!.innerHTML="你妹妹就在終點"+"<span class='arrow_r_out'</span>";
        lll=true;
      }else if(kkk==false){
        document.getElementById("chatC")!.innerHTML="趕快去找她吧"+"<span class='arrow_r_out'</span>";
        kkk=true
      }else{
        document.getElementById("chatC")!.style.display="none";
        document.getElementById("pic1")!.style.display="none";
        document.getElementById("piclev3")!.style.display="flex";
        document.getElementById("pic3")!.style.display = "none";
      }
    })
    this.piclev3.addEventListener("click", function () {
      document.getElementById("chatC")!.style.display="block";
     
      document.getElementById("pic1")!.style.display="flex";
      document.getElementById("pic3")!.style.display="flex";
      document.getElementById("piclev3")!.style.display = "none";
      
    })
//大廳
  let aaa = false;
    let bbb = false;
    let ccc=false;
    let ddd=false;
    let eee = false;
    let fff = false
    this.chatA.addEventListener("click",function(){
      if(aaa==false){
      var a=document.getElementById("chatA")
      a!.innerHTML="咚咚咚 耳邊傳來衣櫃的撞擊聲"
      aaa=true;
      }else if(bbb==false){
        document.getElementById("chatA")!.innerHTML="正當維多利亞疑惑時前去查看 發現自己的衣櫃莫名的連結另一個時空，哪裡藍天白雲青草肆意盎然，被眼前美景迷惑的維多利亞在好奇心的驅使下靠近，竟然被一股莫名的引力給拉了進去";
        bbb=true
      }else if(ccc==false){
        document.getElementById("chatA")!.innerHTML="啊啊啊啊啊 維多利亞尖叫了一聲驚動了在隔壁的哥哥";
        ccc=true
      }else if(ddd==false){
        document.getElementById("chatA")!.innerHTML="當哥哥趕到維多利亞房間，只看到展開的衣櫃，但本應該在房間的妹妹卻消失了";
        ddd=true
      }else if(eee==false){
        document.getElementById("chatA")!.innerHTML="叮咚!從衣櫃發出聲音";
        eee=true
      }else if(fff==false){
        document.getElementById("chatA")!.innerHTML="你好我是時空管理者 你的妹妹無意間被時空裂縫捲入其他時空 ，需要你前去拯救他！但前提是不能破壞該時空遊戲法則你願意與我前去拯救的話下面分別有三個黃色按鈕請一個一個尋找看妹妹是掉在哪個時空吧！"+"<span class='arrow_r_out'</span>";
        document.getElementById("fairy")!.style.display="block";
        fff=true
      }else{
        document.getElementById("chatA")!.style.display="none";
        document.getElementById("pic1")!.style.display="none";
        document.getElementById("fairy")!.style.display="none";
        document.getElementById("pic3")!.style.display = "none";
      }
    })
    
   
    
    this.R_r.addEventListener("click", function () {
      document.getElementById("redid")!.style.display = "flex";
      document.getElementById("rainbowid")!.style.display = "none";
    })
    this.R_o.addEventListener("click", function () {
      document.getElementById("orangeid")!.style.display = "flex";
      document.getElementById("rainbowid")!.style.display = "none";
    })
    this.R_y.addEventListener("click", function () {
      document.getElementById("yellowid")!.style.display = "flex";
      document.getElementById("rainbowid")!.style.display = "none";
    })
    this.R_g.addEventListener("click", function () {
      document.getElementById("greenid")!.style.display = "flex";
      document.getElementById("rainbowid")!.style.display = "none";
    })
    /*this.R_b.addEventListener("click", function () {
      document.getElementById("blueid")!.style.display = "flex";
      document.getElementById("rainbowid")!.style.display = "none";
    })*/
    this.del.addEventListener("click", function () {
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
     first = false
     second = false 
     third = false
     forth = false
     fifth = false
     sixth = false
     seventh = false
     eighth = false
     nineth = false
     tenth = false
     test.clear()
     Bluetooth.loopS = []
    
    })
    this.ret.addEventListener("click",function(){
                document.body.removeChild(document.body.appendChild(screen2.renderer.domElement))
                document.body.removeChild(document.body.appendChild(screen2.stats.dom))
                screen2.UI!.style.display = 'none'
                screen2.chatL!.style.display = 'none'
                screen2.chatB!.style.display = 'none'
                screen2.chatC!.style.display = 'none'
                screen2.pic1!.style.display = 'none'
                screen2.pic2!.style.display = 'none'
                screen2.pic3!.style.display = 'none'
                screen2.piclev2!.style.display = 'none'
                screen2.piclev3!.style.display = 'none'
                screen2.animatestop=true
                document.getElementById("redid")!.style.display="none";
                document.getElementById("orangeid")!.style.display="none"; 
                document.getElementById("yellowid")!.style.display="none";
                document.getElementById("greenid")!.style.display="none";
                document.getElementById("rainbowid")!.style.display="flex";
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
               first = false
               second = false 
               third = false
               forth = false
               fifth = false
               sixth = false
               seventh = false
               eighth = false
               nineth = false
               tenth = false
               test.clear()
               Bluetooth.loopS = []
                while(screen2.scene.children.length > 0){ 
                  screen2.scene.remove(screen2.scene.children[0]); 
              }
    })

    this.back.addEventListener("click",function(){
      document.getElementById("redid")!.style.display="none";
      document.getElementById("orangeid")!.style.display="none"; 
      document.getElementById("yellowid")!.style.display="none";
      document.getElementById("greenid")!.style.display="none";
      document.getElementById("rainbowid")!.style.display="flex";
    })

    

    this.rednext.addEventListener("click", function () {
      document.getElementById("redid")!.style.display = "none";
      document.getElementById("orangeid")!.style.display = "flex";
    })
    
    
    this.orangenext.addEventListener("click", function () {
      document.getElementById("yellowid")!.style.display = "flex";
      document.getElementById("orangeid")!.style.display = "none";
    })
    this.orangeback.addEventListener("click", function () {
      document.getElementById("redid")!.style.display = "flex";
      document.getElementById("orangeid")!.style.display = "none";
    })

    this.yellownext.addEventListener("click", function () {
      document.getElementById("greenid")!.style.display = "flex";
      document.getElementById("yellowid")!.style.display = "none";
    })

    this.yellowback.addEventListener("click", function () {
      document.getElementById("orangeid")!.style.display = "flex";
      document.getElementById("yellowid")!.style.display = "none";
    })
    
    this.greennext.addEventListener("click", function () {
      document.getElementById("blueid")!.style.display = "flex";
      document.getElementById("greenid")!.style.display = "none";
    })

    this.greenback.addEventListener("click", function () {
      document.getElementById("yellowid")!.style.display = "flex";
      document.getElementById("greenid")!.style.display = "none";
    })

    /*this.blueback.addEventListener("click", function () {
      document.getElementById("greenid")!.style.display = "flex";
      document.getElementById("blueid")!.style.display = "none";
    })

    this.bluenext.addEventListener("click", function () {
      document.getElementById("rainbowid")!.style.display = "flex";
      document.getElementById("blueid")!.style.display = "none";
    })*/
    let first = false //第一格是否有東西
    let second = false //第二格是否有東西
    let third = false
    let forth = false
    let fifth = false
    let sixth = false
    let seventh = false
    let eighth = false
    let nineth = false
    let tenth = false

    
    
        this.r1.addEventListener("click", () => {//紅色第一張
          if(first===false){
          document.getElementById("div1")!.innerHTML = "";
          document.getElementById("div1")!.innerHTML = "<img src='UIimg/Forward.jpg' width=\'60px\' height=\'100px\' >"
          document.getElementById("div1")!.style.display="flex";

          first=true
          console.log("test")
          Bluetooth.loopS.unshift(1), Test.loopS.unshift(1) 
          }else if(second===false){
          document.getElementById("div2")!.innerHTML = "";
          document.getElementById("div2")!.innerHTML = "<img src='UIimg/Forward.jpg' width=\'60px\' height=\'100px\' >"
          document.getElementById("div2")!.style.display="flex";
          second=true
          Bluetooth.loopS.unshift(1), Test.loopS.unshift(1) 
          }else if(third===false){
          document.getElementById("div3")!.innerHTML = "";
          document.getElementById("div3")!.innerHTML = "<img src='UIimg/Forward.jpg' width=\'60px\' height=\'100px\' >"
          document.getElementById("div3")!.style.display="flex";
          third=true
          Bluetooth.loopS.unshift(1), Test.loopS.unshift(1) 
          }else if(forth===false){
            document.getElementById("div4")!.innerHTML = "";
            document.getElementById("div4")!.innerHTML = "<img src='UIimg/Forward.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div4")!.style.display="flex";
            forth=true
            Bluetooth.loopS.unshift(1), Test.loopS.unshift(1) 
          }else if(fifth===false){
            document.getElementById("div5")!.innerHTML = "";
            document.getElementById("div5")!.innerHTML = "<img src='UIimg/Forward.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div5")!.style.display="flex";
            fifth=true
            Bluetooth.loopS.unshift(1), Test.loopS.unshift(1)
          }else if(sixth===false){
            document.getElementById("div6")!.innerHTML = "";
            document.getElementById("div6")!.innerHTML = "<img src='UIimg/Forward.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div6")!.style.display="flex";
            sixth=true
            Bluetooth.loopS.unshift(1), Test.loopS.unshift(1)
          }else if(seventh===false){
            document.getElementById("div7")!.innerHTML = "";
            document.getElementById("div7")!.innerHTML = "<img src='UIimg/Forward.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div7")!.style.display="flex";
            seventh=true
            Bluetooth.loopS.unshift(1), Test.loopS.unshift(1) 
            }else if(eighth===false){
              document.getElementById("div8")!.innerHTML = "";
              document.getElementById("div8")!.innerHTML = "<img src='UIimg/Forward.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div8")!.style.display="flex";
              eighth=true
              Bluetooth.loopS.unshift(1), Test.loopS.unshift(1) 
            }else if(nineth===false){
              document.getElementById("div9")!.innerHTML = "";
              document.getElementById("div9")!.innerHTML = "<img src='UIimg/Forward.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div9")!.style.display="flex";
              nineth=true
              Bluetooth.loopS.unshift(1), Test.loopS.unshift(1)
            }else if(tenth===false){
              document.getElementById("div10")!.innerHTML = "";
              document.getElementById("div10")!.innerHTML = "<img src='UIimg/Forward.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div10")!.style.display="flex";
              tenth=true
              Bluetooth.loopS.unshift(1), Test.loopS.unshift(1)
            }
        })
        this.r2.addEventListener("click", () => {//紅色第二張

          if(first===false){
            document.getElementById("div1")!.innerHTML = "";
            document.getElementById("div1")!.innerHTML = "<img src='UIimg/TurnLeft.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div1")!.style.display="flex";
            first=true
            Bluetooth.loopS.unshift(2), Test.loopS.unshift(2) 
            }else if(second===false){
            document.getElementById("div2")!.innerHTML = "";
            document.getElementById("div2")!.innerHTML = "<img src='UIimg/TurnLeft.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div2")!.style.display="flex";
            second=true
            Bluetooth.loopS.unshift(2), Test.loopS.unshift(2) 
            }else if(third===false){
            document.getElementById("div3")!.innerHTML = "";
            document.getElementById("div3")!.innerHTML = "<img src='UIimg/TurnLeft.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div3")!.style.display="flex";
            third=true
            Bluetooth.loopS.unshift(2), Test.loopS.unshift(2) 
            }else if(forth===false){
              document.getElementById("div4")!.innerHTML = "";
              document.getElementById("div4")!.innerHTML = "<img src='UIimg/TurnLeft.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div4")!.style.display="flex";
              forth=true
              Bluetooth.loopS.unshift(2), Test.loopS.unshift(2) 
            }else if(fifth===false){
              document.getElementById("div5")!.innerHTML = "";
              document.getElementById("div5")!.innerHTML = "<img src='UIimg/TurnLeft.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div5")!.style.display="flex";
              fifth=true
              Bluetooth.loopS.unshift(2), Test.loopS.unshift(2) 
            }else if(sixth===false){
              document.getElementById("div6")!.innerHTML = "";
              document.getElementById("div6")!.innerHTML = "<img src='UIimg/TurnLeft.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div6")!.style.display="flex";
              sixth=true
              Bluetooth.loopS.unshift(2), Test.loopS.unshift(2) 
              }else if(seventh===false){
              document.getElementById("div7")!.innerHTML = "";
              document.getElementById("div7")!.innerHTML = "<img src='UIimg/TurnLeft.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div7")!.style.display="flex";
              seventh=true
              Bluetooth.loopS.unshift(2), Test.loopS.unshift(2) 
              }else if(eighth===false){
                document.getElementById("div8")!.innerHTML = "";
                document.getElementById("div8")!.innerHTML = "<img src='UIimg/TurnLeft.jpg' width=\'60px\' height=\'100px\' >"
                document.getElementById("div8")!.style.display="flex";
                eighth=true
                Bluetooth.loopS.unshift(2), Test.loopS.unshift(2) 
              }else if(nineth===false){
                document.getElementById("div9")!.innerHTML = "";
                document.getElementById("div9")!.innerHTML = "<img src='UIimg/TurnLeft.jpg' width=\'60px\' height=\'100px\' >"
                document.getElementById("div9")!.style.display="flex";
                nineth=true
                Bluetooth.loopS.unshift(2), Test.loopS.unshift(2) 
              }else if(tenth===false){
                document.getElementById("div10")!.innerHTML = "";
                document.getElementById("div10")!.innerHTML = "<img src='UIimg/TurnLeft.jpg' width=\'60px\' height=\'100px\' >"
                document.getElementById("div10")!.style.display="flex";
                tenth=true
                Bluetooth.loopS.unshift(2), Test.loopS.unshift(2) 
              }
        })
        this.r3.addEventListener("click", () => {//紅色第三張

          if(first===false){
            document.getElementById("div1")!.innerHTML = "";
            document.getElementById("div1")!.innerHTML = "<img src='UIimg/TurnRight.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div1")!.style.display="flex";
            first=true
            Bluetooth.loopS.unshift(3), Test.loopS.unshift(3) 
            }else if(second===false){
            document.getElementById("div2")!.innerHTML = "";
            document.getElementById("div2")!.innerHTML = "<img src='UIimg/TurnRight.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div2")!.style.display="flex";
            second=true
            Bluetooth.loopS.unshift(3), Test.loopS.unshift(3) 
            }else if(third===false){
            document.getElementById("div3")!.innerHTML = "";
            document.getElementById("div3")!.innerHTML = "<img src='UIimg/TurnRight.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div3")!.style.display="flex";
            third=true
            Bluetooth.loopS.unshift(3), Test.loopS.unshift(3) 
            }else if(forth===false){
              document.getElementById("div4")!.innerHTML = "";
              document.getElementById("div4")!.innerHTML = "<img src='UIimg/TurnRight.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div4")!.style.display="flex";
              forth=true
              Bluetooth.loopS.unshift(3), Test.loopS.unshift(3) 
            }else if(fifth===false){
              document.getElementById("div5")!.innerHTML = "";
              document.getElementById("div5")!.innerHTML = "<img src='UIimg/TurnRight.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div5")!.style.display="flex";
              fifth=true
              Bluetooth.loopS.unshift(3), Test.loopS.unshift(3) 
            }else if(sixth===false){
              document.getElementById("div6")!.innerHTML = "";
              document.getElementById("div6")!.innerHTML = "<img src='UIimg/TurnRight.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div6")!.style.display="flex";
              sixth=true
              Bluetooth.loopS.unshift(3), Test.loopS.unshift(3) 
              }else if(seventh===false){
              document.getElementById("div7")!.innerHTML = "";
              document.getElementById("div7")!.innerHTML = "<img src='UIimg/TurnRight.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div7")!.style.display="flex";
              seventh=true
              Bluetooth.loopS.unshift(3), Test.loopS.unshift(3) 
              }else if(eighth===false){
                document.getElementById("div8")!.innerHTML = "";
                document.getElementById("div8")!.innerHTML = "<img src='UIimg/TurnRight.jpg' width=\'60px\' height=\'100px\' >"
                document.getElementById("div8")!.style.display="flex";
                eighth=true
                Bluetooth.loopS.unshift(3), Test.loopS.unshift(3) 
              }else if(nineth===false){
                document.getElementById("div9")!.innerHTML = "";
                document.getElementById("div9")!.innerHTML ="<img src='UIimg/TurnRight.jpg' width=\'60px\' height=\'100px\' >"
                document.getElementById("div9")!.style.display="flex";
                nineth=true
                Bluetooth.loopS.unshift(3), Test.loopS.unshift(3)  
              }else if(tenth===false){
                document.getElementById("div10")!.innerHTML = "";
                document.getElementById("div10")!.innerHTML = "<img src='UIimg/TurnRight.jpg' width=\'60px\' height=\'100px\' >"
                document.getElementById("div10")!.style.display="flex";
                tenth=true
                Bluetooth.loopS.unshift(3), Test.loopS.unshift(3)  
              }
        })
        this.r4.addEventListener("click", () => {//紅色第四張

          if(first===false){
            document.getElementById("div1")!.innerHTML = "";
            document.getElementById("div1")!.innerHTML = "<img src='UIimg/180R.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div1")!.style.display="flex";
            first=true
            Bluetooth.loopS.unshift(6), Test.loopS.unshift(6) 
            }else if(second===false){
            document.getElementById("div2")!.innerHTML = "";
            document.getElementById("div2")!.innerHTML = "<img src='UIimg/180R.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div2")!.style.display="flex";
            second=true
            Bluetooth.loopS.unshift(6), Test.loopS.unshift(6) 
            }else if(third===false){
            document.getElementById("div3")!.innerHTML = "";
            document.getElementById("div3")!.innerHTML = "<img src='UIimg/180R.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div3")!.style.display="flex";
            third=true
            Bluetooth.loopS.unshift(6), Test.loopS.unshift(6)  
            }else if(forth===false){
              document.getElementById("div4")!.innerHTML = "";
              document.getElementById("div4")!.innerHTML = "<img src='UIimg/180R.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div4")!.style.display="flex";
              forth=true
              Bluetooth.loopS.unshift(6), Test.loopS.unshift(6)  
            }else if(fifth===false){
              document.getElementById("div5")!.innerHTML = "";
              document.getElementById("div5")!.innerHTML = "<img src='UIimg/180R.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div5")!.style.display="flex";
              fifth=true
              Bluetooth.loopS.unshift(6), Test.loopS.unshift(6) 
            }else if(sixth===false){
              document.getElementById("div6")!.innerHTML = "";
              document.getElementById("div6")!.innerHTML = "<img src='UIimg/180R.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div6")!.style.display="flex";
              sixth=true
              Bluetooth.loopS.unshift(6), Test.loopS.unshift(6) 
              }else if(seventh===false){
              document.getElementById("div7")!.innerHTML = "";
              document.getElementById("div7")!.innerHTML = "<img src='UIimg/180R.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div7")!.style.display="flex";
              seventh=true
              Bluetooth.loopS.unshift(6), Test.loopS.unshift(6) 
              }else if(eighth===false){
                document.getElementById("div8")!.innerHTML = "";
                document.getElementById("div8")!.innerHTML = "<img src='UIimg/180R.jpg' width=\'60px\' height=\'100px\' >"
                document.getElementById("div8")!.style.display="flex";
                eighth=true
                Bluetooth.loopS.unshift(6), Test.loopS.unshift(6) 
              }else if(nineth===false){
                document.getElementById("div9")!.innerHTML = "";
                document.getElementById("div9")!.innerHTML ="<img src='UIimg/180R.jpg' width=\'60px\' height=\'100px\' >"
                document.getElementById("div9")!.style.display="flex";
                nineth=true
                Bluetooth.loopS.unshift(6), Test.loopS.unshift(6)  
              }else if(tenth===false){
                document.getElementById("div10")!.innerHTML = "";
                document.getElementById("div10")!.innerHTML = "<img src='UIimg/180R.jpg' width=\'60px\' height=\'100px\' >"
                document.getElementById("div10")!.style.display="flex";
                tenth=true
                Bluetooth.loopS.unshift(6), Test.loopS.unshift(6)  
              }
        })
        this.r5.addEventListener("click", () => {//紅色第五張

          if(first===false){
            document.getElementById("div1")!.innerHTML = "";
            document.getElementById("div1")!.innerHTML = "<img src='UIimg/Backward.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div1")!.style.display="flex";
            first=true
            Bluetooth.loopS.unshift(4), Test.loopS.unshift(4) 
            }else if(second===false){
            document.getElementById("div2")!.innerHTML = "";
            document.getElementById("div2")!.innerHTML = "<img src='UIimg/Backward.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div2")!.style.display="flex";
            second=true
            Bluetooth.loopS.unshift(4), Test.loopS.unshift(4) 
            }else if(third===false){
            document.getElementById("div3")!.innerHTML = "";
            document.getElementById("div3")!.innerHTML = "<img src='UIimg/Backward.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div3")!.style.display="flex";
            third=true
            Bluetooth.loopS.unshift(4), Test.loopS.unshift(4) 
            }else if(forth===false){
              document.getElementById("div4")!.innerHTML = "";
              document.getElementById("div4")!.innerHTML = "<img src='UIimg/Backward.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div4")!.style.display="flex";
              forth=true
              Bluetooth.loopS.unshift(4), Test.loopS.unshift(4) 
            }else if(fifth===false){
              document.getElementById("div5")!.innerHTML = "";
              document.getElementById("div5")!.innerHTML = "<img src='UIimg/Backward.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div5")!.style.display="flex";
              fifth=true
              Bluetooth.loopS.unshift(4), Test.loopS.unshift(4) 
            }else if(sixth===false){
              document.getElementById("div6")!.innerHTML = "";
              document.getElementById("div6")!.innerHTML = "<img src='UIimg/Backward.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div6")!.style.display="flex";
              sixth=true
              Bluetooth.loopS.unshift(4), Test.loopS.unshift(4) 
              }else if(seventh===false){
              document.getElementById("div7")!.innerHTML = "";
              document.getElementById("div7")!.innerHTML = "<img src='UIimg/Backward.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div7")!.style.display="flex";
              seventh=true
              Bluetooth.loopS.unshift(4), Test.loopS.unshift(4) 
              }else if(eighth===false){
                document.getElementById("div8")!.innerHTML = "";
                document.getElementById("div8")!.innerHTML = "<img src='UIimg/Backward.jpg' width=\'60px\' height=\'100px\' >"
                document.getElementById("div8")!.style.display="flex";
                eighth=true
                Bluetooth.loopS.unshift(4), Test.loopS.unshift(4) 
              }else if(nineth===false){
                document.getElementById("div9")!.innerHTML = "";
                document.getElementById("div9")!.innerHTML ="<img src='UIimg/Backward.jpg' width=\'60px\' height=\'100px\' >"
                document.getElementById("div9")!.style.display="flex";
                nineth=true
                Bluetooth.loopS.unshift(4), Test.loopS.unshift(4)  
              }else if(tenth===false){
                document.getElementById("div10")!.innerHTML = "";
                document.getElementById("div10")!.innerHTML = "<img src='UIimg/Backward.jpg' width=\'60px\' height=\'100px\' >"
                document.getElementById("div10")!.style.display="flex";
                tenth=true
                Bluetooth.loopS.unshift(4), Test.loopS.unshift(4)  
              }
        })
        
        this.o1.addEventListener("click", () => {//叫聲第一張
          if(first===false){
            document.getElementById("div1")!.innerHTML = "";
            document.getElementById("div1")!.innerHTML ="<img src='card/voice/Airplane.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div1")!.style.display="flex";
            Test.loopS.unshift(8)
            first=true
            }else if(second===false){
            document.getElementById("div2")!.innerHTML = "";
            document.getElementById("div2")!.innerHTML = "<img src='card/voice/Airplane.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div2")!.style.display="flex";
            second=true
            Test.loopS.unshift(8)
            }else if(third===false){
            document.getElementById("div3")!.innerHTML = "";
            document.getElementById("div3")!.innerHTML = "<img src='card/voice/Airplane.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div3")!.style.display="flex";
            third=true
            Test.loopS.unshift(8)
            }else if(forth===false){
              document.getElementById("div4")!.innerHTML = "";
              document.getElementById("div4")!.innerHTML = "<img src='card/voice/Airplane.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div4")!.style.display="flex";
              forth=true
              Test.loopS.unshift(8)
            }else if(fifth===false){
              document.getElementById("div5")!.innerHTML = "";
              document.getElementById("div5")!.innerHTML = "<img src='card/voice/Airplane.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div5")!.style.display="flex";
              fifth=true
              Test.loopS.unshift(8)
            }else if(sixth===false){
              document.getElementById("div6")!.innerHTML = "";
              document.getElementById("div6")!.innerHTML = "<img src='card/voice/Airplane.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div6")!.style.display="flex";
              sixth=true
              Test.loopS.unshift(8)
              }else if(seventh===false){
              document.getElementById("div7")!.innerHTML = "";
              document.getElementById("div7")!.innerHTML = "<img src='card/voice/Airplane.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div7")!.style.display="flex";
              seventh=true
              Test.loopS.unshift(8)
              }else if(eighth===false){
                document.getElementById("div8")!.innerHTML = "";
                document.getElementById("div8")!.innerHTML = "<img src='card/voice/Airplane.jpg' width=\'60px\' height=\'100px\' >"
                document.getElementById("div8")!.style.display="flex";
                eighth=true
                Test.loopS.unshift(8)
              }else if(nineth===false){
                document.getElementById("div9")!.innerHTML = "";
                document.getElementById("div9")!.innerHTML = "<img src='card/voice/Airplane.jpg' width=\'60px\' height=\'100px\' >"
                document.getElementById("div9")!.style.display="flex";
                nineth=true
                Test.loopS.unshift(8)
              }else if(tenth===false){
                document.getElementById("div10")!.innerHTML = "";
                document.getElementById("div10")!.innerHTML = "<img src='card/voice/Airplane.jpg' width=\'60px\' height=\'100px\' >"
                document.getElementById("div10")!.style.display="flex";
                tenth=true
                Test.loopS.unshift(8)
              }
        })
        this.o2.addEventListener("click", () => {//叫聲第二張

          if(first===false){
            document.getElementById("div1")!.innerHTML = "";
            document.getElementById("div1")!.innerHTML = "<img src='card/voice/Bicycle.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div1")!.style.display="flex";
            Test.loopS.unshift(9)
            first=true
            }else if(second===false){
            document.getElementById("div2")!.innerHTML = "";
            document.getElementById("div2")!.innerHTML = "<img src='card/voice/Bicycle.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div2")!.style.display="flex";
            Test.loopS.unshift(9)
            second=true 
            }else if(third===false){
            document.getElementById("div3")!.innerHTML = "";
            document.getElementById("div3")!.innerHTML = "<img src='card/voice/Bicycle.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div3")!.style.display="flex";
            Test.loopS.unshift(9)
            third=true
            }else if(forth===false){
              document.getElementById("div4")!.innerHTML = "";
              document.getElementById("div4")!.innerHTML = "<img src='card/voice/Bicycle.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div4")!.style.display="flex";
              Test.loopS.unshift(9)
              forth=true
            }else if(fifth===false){
              document.getElementById("div5")!.innerHTML = "";
              document.getElementById("div5")!.innerHTML = "<img src='card/voice/Bicycle.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div5")!.style.display="flex";
              Test.loopS.unshift(9)
              fifth=true
            }else if(sixth===false){
              document.getElementById("div6")!.innerHTML = "";
              document.getElementById("div6")!.innerHTML = "<img src='card/voice/Bicycle.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div6")!.style.display="flex";
              Test.loopS.unshift(9)
              sixth=true
              }else if(seventh===false){
              document.getElementById("div7")!.innerHTML = "";
              document.getElementById("div7")!.innerHTML = "<img src='card/voice/Bicycle.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div7")!.style.display="flex";
              Test.loopS.unshift(9)
              }else if(eighth===false){
                document.getElementById("div8")!.innerHTML = "";
                document.getElementById("div8")!.innerHTML = "<img src='card/voice/Bicycle.jpg' width=\'60px\' height=\'100px\' >"
                document.getElementById("div8")!.style.display="flex";
                Test.loopS.unshift(9)
                eighth=true
              }else if(nineth===false){
                document.getElementById("div9")!.innerHTML = "";
                document.getElementById("div9")!.innerHTML = "<img src='card/voice/Bicycle.jpg' width=\'60px\' height=\'100px\' >"
                document.getElementById("div9")!.style.display="flex";
                Test.loopS.unshift(9)
                nineth=true
              }else if(tenth===false){
                document.getElementById("div10")!.innerHTML = "";
                document.getElementById("div10")!.innerHTML = "<img src='card/voice/Bicycle.jpg' width=\'60px\' height=\'100px\' >"
                document.getElementById("div10")!.style.display="flex";
                Test.loopS.unshift(9)
                tenth=true
              }
        })
        this.o3.addEventListener("click", () => {//叫聲第三張

          if(first===false){
            document.getElementById("div1")!.innerHTML = "";
            document.getElementById("div1")!.innerHTML = "<img src='card/voice/Bird.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div1")!.style.display="flex";
            Test.loopS.unshift(10)
            first=true
            }else if(second===false){
            document.getElementById("div2")!.innerHTML = "";
            document.getElementById("div2")!.innerHTML = "<img src='card/voice/Bird.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div2")!.style.display="flex";
            Test.loopS.unshift(10)
            second=true
            }else if(third===false){
            document.getElementById("div3")!.innerHTML = "";
            document.getElementById("div3")!.innerHTML = "<img src='card/voice/Bird.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div3")!.style.display="flex";
            Test.loopS.unshift(10)
            third=true
            }else if(forth===false){
              document.getElementById("div4")!.innerHTML = "";
              document.getElementById("div4")!.innerHTML = "<img src='card/voice/Bird.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div4")!.style.display="flex";
              Test.loopS.unshift(10)
              forth=true
            }else if(fifth===false){
              document.getElementById("div5")!.innerHTML = "";
              document.getElementById("div5")!.innerHTML = "<img src='card/voice/Bird.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div5")!.style.display="flex";
              Test.loopS.unshift(10)
              fifth=true
            }else if(sixth===false){
              document.getElementById("div6")!.innerHTML = "";
              document.getElementById("div6")!.innerHTML = "<img src='card/voice/Bird.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div6")!.style.display="flex";
              Test.loopS.unshift(10)
              sixth=true
              }else if(seventh===false){
              document.getElementById("div7")!.innerHTML = "";
              document.getElementById("div7")!.innerHTML = "<img src='card/voice/Bird.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div7")!.style.display="flex";
              Test.loopS.unshift(10)
              seventh=true
              }else if(eighth===false){
                document.getElementById("div8")!.innerHTML = "";
                document.getElementById("div8")!.innerHTML = "<img src='card/voice/Bird.jpg' width=\'60px\' height=\'100px\' >"
                document.getElementById("div8")!.style.display="flex";
                Test.loopS.unshift(10)
                eighth=true
              }else if(nineth===false){
                document.getElementById("div9")!.innerHTML = "";
                document.getElementById("div9")!.innerHTML = "<img src='card/voice/Bird.jpg' width=\'60px\' height=\'100px\' >"
                document.getElementById("div9")!.style.display="flex";
                Test.loopS.unshift(10)
                nineth=true
              }else if(tenth===false){
                document.getElementById("div10")!.innerHTML = "";
                document.getElementById("div10")!.innerHTML = "<img src='card/voice/Bird.jpg' width=\'60px\' height=\'100px\' >"
                document.getElementById("div10")!.style.display="flex";
                Test.loopS.unshift(10)
                tenth=true
              }
        })
        this.o4.addEventListener("click", () => {//叫聲第四張

          if(first===false){
            document.getElementById("div1")!.innerHTML = "";
            document.getElementById("div1")!.innerHTML = "<img src='card/voice/Car.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div1")!.style.display="flex";
            Test.loopS.unshift(11)
            first=true
            }else if(second===false){
            document.getElementById("div2")!.innerHTML = "";
            document.getElementById("div2")!.innerHTML = "<img src='card/voice/Car.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div2")!.style.display="flex";
            Test.loopS.unshift(11)
            second=true
            }else if(third===false){
            document.getElementById("div3")!.innerHTML = "";
            document.getElementById("div3")!.innerHTML = "<img src='card/voice/Car.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div3")!.style.display="flex";
            Test.loopS.unshift(11)
            third=true
            }else if(forth===false){
              document.getElementById("div4")!.innerHTML = "";
              document.getElementById("div4")!.innerHTML = "<img src='card/voice/Car.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div4")!.style.display="flex";
              Test.loopS.unshift(11)
              forth=true
            }else if(fifth===false){
              document.getElementById("div5")!.innerHTML = "";
              document.getElementById("div5")!.innerHTML = "<img src='card/voice/Car.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div5")!.style.display="flex";
              Test.loopS.unshift(11)
              fifth=true
            }else if(sixth===false){
              document.getElementById("div6")!.innerHTML = "";
              document.getElementById("div6")!.innerHTML = "<img src='card/voice/Car.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div6")!.style.display="flex";
              Test.loopS.unshift(11)
              sixth=true
              }else if(seventh===false){
              document.getElementById("div7")!.innerHTML = "";
              document.getElementById("div7")!.innerHTML = "<img src='card/voice/Car.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div7")!.style.display="flex";
              Test.loopS.unshift(11)
              seventh=true
              }else if(eighth===false){
                document.getElementById("div8")!.innerHTML = "";
                document.getElementById("div8")!.innerHTML ="<img src='card/voice/Car.jpg' width=\'60px\' height=\'100px\' >"
                document.getElementById("div8")!.style.display="flex";
                Test.loopS.unshift(11)
                eighth=true

              }else if(nineth===false){
                document.getElementById("div9")!.innerHTML = "";
                document.getElementById("div9")!.innerHTML = "<img src='card/voice/Car.jpg' width=\'60px\' height=\'100px\' >"
                document.getElementById("div9")!.style.display="flex";
                Test.loopS.unshift(11)
                nineth=true
              }else if(tenth===false){
                document.getElementById("div10")!.innerHTML = "";
                document.getElementById("div10")!.innerHTML = "<img src='card/voice/Car.jpg' width=\'60px\' height=\'100px\' >"
                document.getElementById("div10")!.style.display="flex";
                Test.loopS.unshift(11)
                tenth=true
              }
        })
        this.o5.addEventListener("click", () => {//叫聲第五張

          if(first===false){
            document.getElementById("div1")!.innerHTML = "";
            document.getElementById("div1")!.innerHTML = "<img src='card/voice/Cat.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div1")!.style.display="flex";
            Test.loopS.unshift(12)
            first=true
            }else if(second===false){
            document.getElementById("div2")!.innerHTML = "";
            document.getElementById("div2")!.innerHTML = "<img src='card/voice/Cat.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div2")!.style.display="flex";
            Test.loopS.unshift(12)
            second=true
            }else if(third===false){
            document.getElementById("div3")!.innerHTML = "";
            document.getElementById("div3")!.innerHTML = "<img src='card/voice/Cat.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div3")!.style.display="flex";
            Test.loopS.unshift(12)
            third=true
            }else if(forth===false){
              document.getElementById("div4")!.innerHTML = "";
              document.getElementById("div4")!.innerHTML = "<img src='card/voice/Cat.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div4")!.style.display="flex";
              Test.loopS.unshift(12)
              forth=true
            }else if(fifth===false){
              document.getElementById("div5")!.innerHTML = "";
              document.getElementById("div5")!.innerHTML = "<img src='card/voice/Cat.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div5")!.style.display="flex";
              Test.loopS.unshift(12)
              fifth=true
            }else if(sixth===false){
              document.getElementById("div6")!.innerHTML = "";
              document.getElementById("div6")!.innerHTML = "<img src='card/voice/Cat.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div6")!.style.display="flex";
              Test.loopS.unshift(12)
              sixth=true
              }else if(seventh===false){
              document.getElementById("div7")!.innerHTML = "";
              document.getElementById("div7")!.innerHTML = "<img src='card/voice/Cat.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div7")!.style.display="flex";
              Test.loopS.unshift(12)
              seventh=true
              }else if(eighth===false){
                document.getElementById("div8")!.innerHTML = "";
                document.getElementById("div8")!.innerHTML = "<img src='card/voice/Cat.jpg' width=\'60px\' height=\'100px\' >"
                document.getElementById("div8")!.style.display="flex";
                Test.loopS.unshift(12)
                eighth=true
              }else if(nineth===false){
                document.getElementById("div9")!.innerHTML = "";
                document.getElementById("div9")!.innerHTML = "<img src='card/voice/Cat.jpg' width=\'60px\' height=\'100px\' >"
                document.getElementById("div9")!.style.display="flex";
                Test.loopS.unshift(12)
                nineth=true
              }else if(tenth===false){
                document.getElementById("div10")!.innerHTML = "";
                document.getElementById("div10")!.innerHTML = "<img src='card/voice/Cat.jpg' width=\'60px\' height=\'100px\' >"
                document.getElementById("div10")!.style.display="flex";
                Test.loopS.unshift(12)
                tenth=true
              }
        })
        this.y1.addEventListener("click", () => {//橘色第一張
          if(first===false){
            document.getElementById("div1")!.innerHTML = "";
            document.getElementById("div1")!.innerHTML = "<img src='card/pro/LoopsThree.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div1")!.style.display="flex";
            first=true
            bluetooth.loopstart()
            test.loopstart()
            }else if(second===false){
            document.getElementById("div2")!.innerHTML = "";
            document.getElementById("div2")!.innerHTML = "<img src='card/pro/LoopsThree.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div2")!.style.display="flex";
            second=true
            bluetooth.loopstart()
            test.loopstart()
            }else if(third===false){
            document.getElementById("div3")!.innerHTML = "";
            document.getElementById("div3")!.innerHTML = "<img src='card/pro/LoopsThree.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div3")!.style.display="flex";
            third=true
            bluetooth.loopstart()
            test.loopstart()
            }else if(forth===false){
              document.getElementById("div4")!.innerHTML = "";
              document.getElementById("div4")!.innerHTML = "<img src='card/pro/LoopsThree.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div4")!.style.display="flex";
              forth=true
              bluetooth.loopstart()
              test.loopstart()
            }else if(fifth===false){
              document.getElementById("div5")!.innerHTML = "";
              document.getElementById("div5")!.innerHTML = "<img src='card/pro/LoopsThree.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div5")!.style.display="flex";
              fifth=true
              bluetooth.loopstart()
              test.loopstart()
            }else if(sixth===false){
              document.getElementById("div6")!.innerHTML = "";
              document.getElementById("div6")!.innerHTML = "<img src='card/pro/LoopsThree.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div6")!.style.display="flex";
              sixth=true
              bluetooth.loopstart()
              test.loopstart()
              }else if(seventh===false){
              document.getElementById("div7")!.innerHTML = "";
              document.getElementById("div7")!.innerHTML = "<img src='card/pro/LoopsThree.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div7")!.style.display="flex";
              seventh=true
              bluetooth.loopstart()
              test.loopstart()
              }else if(eighth===false){
                document.getElementById("div8")!.innerHTML = "";
                document.getElementById("div8")!.innerHTML = "<img src='card/pro/LoopsThree.jpg' width=\'60px\' height=\'100px\' >"
                document.getElementById("div8")!.style.display="flex";
                eighth=true
                bluetooth.loopstart()
                test.loopstart()
              }else if(nineth===false){
                document.getElementById("div9")!.innerHTML = "";
                document.getElementById("div9")!.innerHTML = "<img src='card/pro/LoopsThree.jpg' width=\'60px\' height=\'100px\' >"
                document.getElementById("div9")!.style.display="flex";
                nineth=true
                bluetooth.loopstart()
                test.loopstart()
              }else if(tenth===false){
                document.getElementById("div10")!.innerHTML = "";
                document.getElementById("div10")!.innerHTML = "<img src='card/pro/LoopsThree.jpg' width=\'60px\' height=\'100px\' >"
                document.getElementById("div10")!.style.display="flex";
                tenth=true
                bluetooth.loopstart()
                test.loopstart()
              }
        })
        this.y2.addEventListener("click", () => {//橘色第二張

          if(first===false){
            document.getElementById("div1")!.innerHTML = "";
            document.getElementById("div1")!.innerHTML = "<img src='card/pro/LoopsEnd.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div1")!.style.display="flex";
            first=true
            bluetooth.loopend()
            test.loopend()
            }else if(second===false){
            document.getElementById("div2")!.innerHTML = "";
            document.getElementById("div2")!.innerHTML = "<img src='card/pro/LoopsEnd.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div2")!.style.display="flex";
            second=true
            bluetooth.loopend()
            test.loopend()
            }else if(third===false){
            document.getElementById("div3")!.innerHTML = "";
            document.getElementById("div3")!.innerHTML = "<img src='card/pro/LoopsEnd.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div3")!.style.display="flex";
            third=true
            bluetooth.loopend()
            test.loopend()
            }else if(forth===false){
              document.getElementById("div4")!.innerHTML = "";
              document.getElementById("div4")!.innerHTML = "<img src='card/pro/LoopsEnd.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div4")!.style.display="flex";
              forth=true
              bluetooth.loopend()
              test.loopend()
            }else if(fifth===false){
              document.getElementById("div5")!.innerHTML = "";
              document.getElementById("div5")!.innerHTML ="<img src='card/pro/LoopsEnd.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div5")!.style.display="flex";
              fifth=true
              bluetooth.loopend()
              test.loopend()
            }else if(sixth===false){
              document.getElementById("div6")!.innerHTML = "";
              document.getElementById("div6")!.innerHTML = "<img src='card/pro/LoopsEnd.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div6")!.style.display="flex";
              sixth=true
              bluetooth.loopend()
              test.loopend()
              }else if(seventh===false){
              document.getElementById("div7")!.innerHTML = "";
              document.getElementById("div7")!.innerHTML = "<img src='card/pro/LoopsEnd.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div7")!.style.display="flex";
              seventh=true
              bluetooth.loopend()
              test.loopend()
              }else if(eighth===false){
                document.getElementById("div8")!.innerHTML = "";
                document.getElementById("div8")!.innerHTML = "<img src='card/pro/LoopsEnd.jpg' width=\'60px\' height=\'100px\' >"
                document.getElementById("div8")!.style.display="flex";
                eighth=true
                bluetooth.loopend()
                test.loopend()
              }else if(nineth===false){
                document.getElementById("div9")!.innerHTML = "";
                document.getElementById("div9")!.innerHTML = "<img src='card/pro/LoopsEnd.jpg' width=\'60px\' height=\'100px\' >"
                document.getElementById("div9")!.style.display="flex";
                nineth=true
                bluetooth.loopend()
                test.loopend()
              }else if(tenth===false){
                document.getElementById("div10")!.innerHTML = "";
                document.getElementById("div10")!.innerHTML = "<img src='card/pro/LoopsEnd.jpg' width=\'60px\' height=\'100px\' >"
                document.getElementById("div10")!.style.display="flex";
                tenth=true
                bluetooth.loopend()
                test.loopend()
              }
        })
      

        this.g1.addEventListener("click", () => {//Go第一張

          if(first===false){
         
            }else if(second===false){
              document.getElementById("div2")!.innerHTML = "<img src='card/normal/Go.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div2")!.style.display="flex";
              first = false //第一格是否有東西
              second = false //第二格是否有東西
              third = false
              forth = false
              fifth = false
              sixth = false
              seventh = false
              eighth = false
              nineth = false
              tenth = false

              test.goto()
              Bluetooth.goto()
  
            }else if(third===false){
              document.getElementById("div3")!.innerHTML = "<img src='card/normal/Go.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div3")!.style.display="flex";
              first = false //第一格是否有東西
              second = false //第二格是否有東西
              third = false
              forth = false
              fifth = false
              sixth = false
              seventh = false
              eighth = false
              nineth = false
              tenth = false

              test.goto()
              Bluetooth.goto()
              setTimeout(function(){
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
            });

            }else if(forth===false){
              document.getElementById("div4")!.innerHTML = "<img src='card/normal/Go.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div4")!.style.display="flex";
              first = false //第一格是否有東西
              second = false //第二格是否有東西
              third = false
              forth = false
              fifth = false
              sixth = false
              seventh = false
              eighth = false
              nineth = false
              tenth = false

              test.goto()
              Bluetooth.goto()

            }else if(fifth===false){
              document.getElementById("div5")!.innerHTML = "<img src='card/normal/Go.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div5")!.style.display="flex";
              first = false //第一格是否有東西
              second = false //第二格是否有東西
              third = false
              forth = false
              fifth = false
              sixth = false
              seventh = false
              eighth = false
              nineth = false
              tenth = false
              test.goto()
              Bluetooth.goto()
         
            }else if(sixth===false){
              document.getElementById("div6")!.innerHTML = "<img src='card/normal/Go.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div6")!.style.display="flex";
              first = false //第一格是否有東西
              second = false //第二格是否有東西
              third = false
              forth = false
              fifth = false
              sixth = false
              seventh = false
              eighth = false
              nineth = false
              tenth = false
              test.goto()
              Bluetooth.goto()
         
            }else if(seventh===false){
              document.getElementById("div7")!.innerHTML = "<img src='card/normal/Go.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div7")!.style.display="flex";
              first = false //第一格是否有東西
              second = false //第二格是否有東西
              third = false
              forth = false
              fifth = false
              sixth = false
              seventh = false
              eighth = false
              nineth = false
              tenth = false
              test.goto()
              Bluetooth.goto()
            }else if(eighth===false){
              document.getElementById("div8")!.innerHTML = "<img src='card/normal/Go.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div8")!.style.display="flex";
              first = false //第一格是否有東西
              second = false //第二格是否有東西
              third = false
              forth = false
              fifth = false
              sixth = false
              seventh = false
              eighth = false
              nineth = false
              tenth = false
              test.goto()
              Bluetooth.goto()
            }else if(nineth===false){
              document.getElementById("div9")!.innerHTML = "<img src='card/normal/Go.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div9")!.style.display="flex";
              first = false //第一格是否有東西
              second = false //第二格是否有東西
              third = false
              forth = false
              fifth = false
              sixth = false
              seventh = false
              eighth = false
              nineth = false
              tenth = false

              test.goto()
              Bluetooth.goto()
            }else if(tenth===false){
              document.getElementById("div10")!.innerHTML = "<img src='card/normal/Go.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div10")!.style.display="flex";
              first = false //第一格是否有東西
              second = false //第二格是否有東西
              third = false
              forth = false
              fifth = false
              sixth = false
              seventh = false
              eighth = false
              nineth = false
              tenth = false
              test.goto()
              Bluetooth.goto()
        }
      })
       
        /*this.b1.addEventListener("click", () => {//藍色第一張

          if(first===false){
            document.getElementById("div1")!.innerHTML = "<img src='UIimg/Go.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div1")!.style.display="flex";
            first=true
            test.goto()
            Bluetooth.goto()
            }else if(second===false){
            document.getElementById("div2")!.innerHTML = "<img src='UIimg/Go.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div2")!.style.display="flex";
            second=true
            test.goto()
            Bluetooth.goto()
            }else if(third===false){
            document.getElementById("div3")!.innerHTML = "<img src='UIimg/Go.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div3")!.style.display="flex";
            third=true
            test.goto()
            Bluetooth.goto()
            }else if(forth===false){
              document.getElementById("div4")!.innerHTML = "<img src='UIimg/Go.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div4")!.style.display="flex";
              forth=true
              test.goto()
              Bluetooth.goto()
            }else if(fifth===false){
              document.getElementById("div5")!.innerHTML = "<img src='UIimg/Go.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div5")!.style.display="flex";
              fifth=true
              test.goto()
              Bluetooth.goto()
            }
            else if(sixth===false){
              document.getElementById("div6")!.innerHTML = "<img src='UIimg/Go.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div6")!.style.display="flex";
              sixth=true
              test.goto()
              Bluetooth.goto()
              }else if(seventh===false){
              document.getElementById("div7")!.innerHTML = "<img src='UIimg/Go.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div7")!.style.display="flex";
              seventh=true
              test.goto()
              Bluetooth.goto()
              }else if(eighth===false){
                document.getElementById("div8")!.innerHTML = "<img src='UIimg/Go.jpg' width=\'60px\' height=\'100px\' >"
                document.getElementById("div9")!.style.display="flex";
                eighth=true
                test.goto()
                Bluetooth.goto()
              }else if(nineth===false){
                document.getElementById("div9")!.innerHTML = "<img src='UIimg/Go.jpg' width=\'60px\' height=\'100px\' >"
                document.getElementById("div9")!.style.display="flex";
                nineth=true
                test.goto()
                Bluetooth.goto()
              }else if(tenth===false){
                document.getElementById("div10")!.innerHTML = "<img src='UIimg/Go.jpg' width=\'60px\' height=\'100px\' >"
                document.getElementById("div10")!.style.display="flex";
                tenth=true
                test.goto()
                Bluetooth.goto()
              }
        })    
        this.b2.addEventListener("click", () => {//藍色第二張
          if(first===false){
            document.getElementById("div1")!.innerHTML = "";
            document.getElementById("div1")!.innerHTML = "<img src='UIimg/blue.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div1")!.style.display="flex";
            first=true
            }else if(second===false){
            document.getElementById("div2")!.innerHTML = "";
            document.getElementById("div2")!.innerHTML = "<img src='UIimg/blue.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div2")!.style.display="flex";
            second=true
            }else if(third===false){
            document.getElementById("div3")!.innerHTML = "";
            document.getElementById("div3")!.innerHTML = "<img src='UIimg/blue.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div3")!.style.display="flex";
            third=true
            }else if(forth===false){
              document.getElementById("div4")!.innerHTML = "";
              document.getElementById("div4")!.innerHTML = "<img src='UIimg/blue.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div4")!.style.display="flex";
              forth=true
            }else if(fifth===false){
              document.getElementById("div5")!.innerHTML = "";
              document.getElementById("div5")!.innerHTML = "<img src='UIimg/blue.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div5")!.style.display="flex";
              fifth=true
            }
        })
        this.b3.addEventListener("click", () => {//藍色第三張

          if(first===false){
            document.getElementById("div1")!.innerHTML = "";
            document.getElementById("div1")!.innerHTML = "<img src='UIimg/blue.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div1")!.style.display="flex";
            first=true
            }else if(second===false){
            document.getElementById("div2")!.innerHTML = "";
            document.getElementById("div2")!.innerHTML = "<img src='UIimg/blue.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div2")!.style.display="flex";
            second=true
            }else if(third===false){
            document.getElementById("div3")!.innerHTML = "";
            document.getElementById("div3")!.innerHTML = "<img src='UIimg/blue.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div3")!.style.display="flex";
            third=true
            }else if(forth===false){
              document.getElementById("div4")!.innerHTML = "";
              document.getElementById("div4")!.innerHTML = "<img src='UIimg/blue.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div4")!.style.display="flex";
              forth=true
            }else if(fifth===false){
              document.getElementById("div5")!.innerHTML = "";
              document.getElementById("div5")!.innerHTML = "<img src='UIimg/blue.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div5")!.style.display="flex";
              fifth=true
            }
        })
        this.b4.addEventListener("click", () => {//藍色第四張

          if(first===false){
            document.getElementById("div1")!.innerHTML = "";
            document.getElementById("div1")!.innerHTML = "<img src='UIimg/blue.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div1")!.style.display="flex";
            first=true
            }else if(second===false){
            document.getElementById("div2")!.innerHTML = "";
            document.getElementById("div2")!.innerHTML = "<img src='UIimg/blue.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div2")!.style.display="flex";
            second=true
            }else if(third===false){
            document.getElementById("div3")!.innerHTML = "";
            document.getElementById("div3")!.innerHTML = "<img src='UIimg/blue.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div3")!.style.display="flex";
            third=true
            }else if(forth===false){
              document.getElementById("div4")!.innerHTML = "";
              document.getElementById("div4")!.innerHTML = "<img src='UIimg/blue.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div4")!.style.display="flex";
              forth=true
            }else if(fifth===false){
              document.getElementById("div5")!.innerHTML = "";
              document.getElementById("div5")!.innerHTML = "<img src='UIimg/blue.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div5")!.style.display="flex";
              fifth=true
            }
        })
        /*this.b5.addEventListener("click", () => {//藍色第五張

          if(first===false){
            document.getElementById("div1")!.innerHTML = "";
            document.getElementById("div1")!.innerHTML = "<img src='UIimg/blue.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div1")!.style.display="flex";
            first=true
            }else if(second===false){
            document.getElementById("div2")!.innerHTML = "";
            document.getElementById("div2")!.innerHTML = "<img src='UIimg/blue.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div2")!.style.display="flex";
            second=true
            }else if(third===false){
            document.getElementById("div3")!.innerHTML = "";
            document.getElementById("div3")!.innerHTML = "<img src='UIimg/blue.jpg' width=\'60px\' height=\'100px\' >"
            document.getElementById("div3")!.style.display="flex";
            third=true
            }else if(forth===false){
              document.getElementById("div4")!.innerHTML = "";
              document.getElementById("div4")!.innerHTML = "<img src='UIimg/blue.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div4")!.style.display="flex";
              forth=true
            }else if(fifth===false){
              document.getElementById("div5")!.innerHTML = "";
              document.getElementById("div5")!.innerHTML = "<img src='UIimg/blue.jpg' width=\'60px\' height=\'100px\' >"
              document.getElementById("div5")!.style.display="flex";
              fifth=true
            }
        })*/
        
  }
}