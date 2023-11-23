const socket = io();

function loadFallbackImg(elem) {
    elem.src = "./profiles/unset.png"
}

socket.on('syncGame', function(data){
    console.log(data);
});