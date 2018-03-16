var myVideo = document.querySelector("video");
function play(){
	myVideo.play();
}
function pause(){
	myVideo.pause();
}
function stop(){
	myVideo.currentTime = 0;
	myVideo.pause();
		
}