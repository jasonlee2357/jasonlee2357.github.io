/*
  YouTube Player API Reference for iframe Embeds
  https://developers.google.com/youtube/iframe_api_reference 
  program : Jason Lee
  version : 3.0
*/


let nid = 0;
let mlist;
let url = "data/羊毛與千葉花.json";
let listName = "data/羊毛與千葉花.json";
let vid = 0;
let slist1;
let tmstr = "";
let playtime = "";
let tmxx;
let pid = 0;
let pcnt = 0;
let st1 = 0;

function setup() {
  noCanvas();
  noLoop();
  startup();
}

function startup() {

  getList();
  
  document.querySelector("#videoID").onclick = function(){
    this.value = "";
  };
  
  document.querySelector("#vtitle").onclick = function(){
    this.value = "";
  };

  //console.log(document.featurePolicy.allowedFeatures());

}

function getList(){
  slist1 = loadStrings("list.txt", function(){

    pcnt = 0;
    let m1 = document.querySelector("#mlist");
    m1.innerHTML = "";
    for(let i=0; i<slist1.length; i++){
      
      if(slist1[i].length>5){
        let m2 = document.querySelector("#mx").cloneNode(true);
        m2.id = "mx"+i;
        m2.getAttributeNode("mid").value = i;
        m2.onclick = function(){ switch_list(this) };
        m2.innerHTML = slist1[i];
        m1.appendChild(m2);
        pcnt++;
      }

    }

    //console.log(slist1);

    if(st1==0){
      pid = Math.trunc(Math.random()*pcnt);
      url = slist1[pid];
      listName = slist1[pid];

      mlist = loadJSON( url, function () {
        listItem();
        createPlayer();
        st1 = 1;
      });

    } else {

      //console.log(name1);
      for(let i=0; i<slist1.length; i++){
        if(slist1[i]==name1){
          pid = i;
          //console.log("v "+slist1[i]+", "+name1);
        } else {
          //console.log("x "+slist1[i]+", "+name1);
        }
      }
      //console.log("pid: "+pid+", "+slist1[pid]+", nid"+nid);
      vid = 0;
      url = slist1[pid];
      listName = slist1[pid];

      mlist = loadJSON( url, function () {
        listItem();
        playn(vid);
      });
    }

  });

}

function listItem(){
  let v2 = document.querySelector("#music_list");
  nid = 0;
  v2.innerHTML = "";

  let obj2 = [];
  let n = 0;
  for(let i in mlist){
    obj2[n] = mlist[i];
    n++;
  }

  mlist = JSON.parse(JSON.stringify(obj2));
  //console.log(mlist);

  for (i in mlist) {
    var node = document.createElement("div");
    node.setAttribute("val", nid);
    node.innerHTML = (nid+1) + ": " + mlist[i].NAME +"<br>"+ mlist[i].ID+"<span style='float:right' onclick='deleteItem("+nid+")'> X </span>";
    node.style.padding = "5px";
    node.onclick = function (event) {
      //alert(event.target.nodeName);
      if(event.target.nodeName != "SPAN"){
        playx(this);
      } 
    };
    v2.appendChild(node);

    nid++;
  }
}

//---------------------------------------------------------------------
/*
  startTIME":"0" or startTIME":"0.01"
*/

function playx(n) {
  //console.log(event);
  vid = int(n.getAttribute("val"));
  playn(vid);
}

function playn(n) {
  //vid = int(n.getAttribute("val"));
  
  //console.log("vid: "+vid+", nid: "+nid);
  player.stopVideo();
  
  if(mlist[vid].endTIME==0){
    player.loadVideoById(mlist[vid].ID, mlist[vid].startTIME, "large");

  } else {
     player.loadVideoById({'videoId': mlist[vid].ID,
                   'startSeconds': mlist[vid].startTIME,
                   'endSeconds': mlist[vid].endTIME,
                   'suggestedQuality': 'large'}); 
    
  }
  
  document.querySelector("#vcode").innerHTML = mlist[vid].ID;

}

//-------- youtube iframe api --------------------------------------------
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubeIframeAPIReady() {
  //createPlayer();
  
}

function createPlayer(){
  player = new YT.Player("player", {
    height: "240",
    width: "320",
    videoId: mlist[vid].ID,
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  }); 
  
  document.querySelector("#vcode").innerHTML = mlist[vid].ID;
}

//--------------------------------------------------
function onPlayerReady(event) {
  //event.target.playVideo();
  //player.playVideo();
  playn(vid);
  //console.log("ready: " + event.data);
}

//--------------------------------------------------
/*
-1： 未開始
0： 已結束
1： 正在播放
2： 暫停
3： 正在緩衝
5： 已插入影片
*/

let spst = 0;
function onPlayerStateChange(event) {
  //console.log("state: " + event.data);
  if (event.data == 0) { 
    if(spst==0){
      spst = 1;
      clearInterval(tmxx);
      stopVideo();
    }
  } else if (event.data == 1) { 
    spst = 0;
    tmxx = setInterval(showTime, 1000);
  }

}

function showTime(){
    if(mlist[vid] != undefined){
      let t1 = player.getDuration();
      tmstr = nf(int(int(t1/60)/60),2)+" : "+nf(int(int(t1/60)%60),2)+" : "+ nf(int(t1%60),2);
      let t2 = player.getCurrentTime();
      playtime = nf(int(int(t2/60)/60),2)+" : "+nf(int(int(t2/60)%60),2)+" : "+ nf(int(t2%60),2);
      document.querySelector("#vcode").innerHTML = (vid+1) + ": "+ mlist[vid].NAME +"<br>"+mlist[vid].ID+" ("+ playtime +") / ("+ tmstr +") ";
    }
}

//---------------------------------------------------------------------
function stopVideo() {
  //player.stopVideo();

  vid = (vid+1)%nid;
  //console.log("vid: "+vid+", nid: "+nid);

  if(vid!=0){

    if(mlist[vid].endTIME==0){
      
      console.log("vid: "+vid+", nid: "+nid+", 0");
      player.loadVideoById(mlist[vid].ID, mlist[vid].startTIME, "large");
      
    } else {
      
       console.log("vid: "+vid+", nid: "+nid+", 1");
      
       player.loadVideoById({'videoId': mlist[vid].ID,
                     'startSeconds': mlist[vid].startTIME,
                     'endSeconds': mlist[vid].endTIME,
                     'suggestedQuality': 'large'}); 

    }
    
    document.querySelector("#vcode").innerHTML = mlist[vid].ID;
    //console.log("vid: "+vid);
  } else {
    vid = 0;
    pid = (pid+1)%pcnt;
    switch_list_pid(pid);

  }
  
}

//---------------------------------------------------------------------
function chg(){
  
  let chok = 0;
  let vtitle = document.querySelector("#vtitle").value;
  let v0 = document.querySelector("#videoID");
  let videoID = v0.value;
  
  let n1 = split(videoID, "?v=");
  let n3 = split(videoID, "youtu.be/");
  
  if(n1.length==2){
    let n2 = split(n1[1], "&");

    if(n2.length>=2){
      videoID = n2[0];
      chok = 1;
    } else {
      videoID = n1[1];
      chok = 1;
    } 
  } else if(n3.length==2){
    videoID = n3[1];
    chok = 1;
         
  } else if(videoID.length==11){
    chok = 1;
    
  } else {
    chok = 0;
    
  }
  
  if(chok==1){
    v0.value = videoID;
    
    //console.log(videoID);

    player.stopVideo();
    player.loadVideoById(videoID, 0, "large");
    player.seekTo(0);

    addNodex(videoID, vtitle);

    document.querySelector("#vcode").innerHTML = videoID;
  } else {
    
    alert("videoID error!");
  }
  
}

//---------------------------------------------------------------------
function play1(){
  player.playVideo();
  
}

function pause1(){
  player.pauseVideo();
  
}

//---------------------------------------------------------------------
function addNodex(vd, vtitle){
    
    mlist[nid] = { "ID":vd, 
      "NAME":vtitle,
      "startTIME":"0",
      "endTIME":"0"
    };

    vid = nid;
    nid++;
    listItem();
}

//-------------------------------
function download1(){
  //console.log(JSON.stringify(mlist));
  //saveJSON(mlist, 'music_list.json');

  let obj2 = [];
  let n = 0;
  for(let i in mlist){
    obj2[n] = mlist[i];
    n++;
  }

  let a = document.createElement('a');
  a.href = "data:application/octet-stream,"+encodeURIComponent(JSON.stringify(obj2));
  //a.download = 'music_list.json';
  a.download = listName;
  a.click(); // we not add 'a' to DOM so no need to remove
}

function sendFile() {
  let d = new Date();
  let fname = d.getFullYear() + "_" + nf((d.getMonth() + 1), 2) + "_" + nf(d.getDate(), 2) + "_" + nf(d.getHours(), 2) + "_" + nf(d.getMinutes(), 2) + "_" + nf(d.getSeconds(), 2);
  let f1 = document.forms["fr1"]["album"].value;
  document.forms["fr1"]["mid"].value = fname;
  if(f1.length==0){
    document.forms["fr1"]["album"].value = fname;
  }
}

function getJSON(m){
  //alert(m + " ... 上傳完成");
  name1 = m;
  getList();

  /*
  vid = 0;
  url = m;
  mlist = loadJSON( url, function () {
    listItem();
    playn(vid);
  });
  */
}

//--------------------
/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "30%";
  document.getElementById("myNav").style.overflowY = "auto";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.getElementById("myNav").style.overflow = "hidden";
}

//-----------------
//let slist = ["data/a1.json", "data/a2.json", "data/a3.json", "data/a4.json"];
function switch_list(n){
  let mid1 = n.getAttributeNode("mid").value;
  //console.log("mid: "+slist1[mid1]);
  url = slist1[mid1];
  listName = slist1[mid1];
  closeNav();

  mlist = loadJSON( url, function () {
    listItem();
    playn(vid);
  });


}

function switch_list_pid(n){
  let mid1 = n;
  //console.log("pid: "+slist1[mid1]);
  url = slist1[mid1];
  listName = slist1[mid1];

  mlist = loadJSON( url, function () {
    listItem();
    playn(vid);
  });

}

//-----------------
function deleteItem(n){
  //alert(event.target.nodeName+": "+mlist[n]);
  delete mlist[n];
  listItem();
}

//------------------
function clearList(){
  mlist = [];
  listItem();
}










