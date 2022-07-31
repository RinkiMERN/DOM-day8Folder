// let video=document.querySelector("video");
// let btn=document.querySelector("button");
// btn.addEventListener("click",getCamera);    //function hoisting
// function getCamera(){
//     window.navigator.mediaDevices.getUserMedia({
//         audio:true,
//         video:{height:600,width:700},
//     })
//     .then(
//         stream=>{
//             video.srcObject=stream;
//             video.onloadedmetadata=()=>{
//                 video.play();
//             }
//     }).catch(err=>{console.log(err);})
// }

// let screen=document.querySelector("#shareScreen");
// screen.addEventListener("click",shareScreen);
// function shareScreen(){
// window.navigator.mediaDevices.getDisplayMedia().then(
//     display=>{
//         console.log(display);
//     }).catch(err=>console.log(err));
// }
console.log(window.navigator.onLine);
console.log(window.navigator.userAgent);
console.log(navigator.vendor);

if(window.navigator.onLine){
    console.log('rinki is online');
}
else{ 
    console.log('rinki is offline 😃');
}