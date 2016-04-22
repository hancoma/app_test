var uuid;
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
   uuid=device.uuid;
   checkuuid(uuid);
}
function checkuuid(uuid) {
    // 로그인 확인 부분 
    
    var uuid=uuid;
   

//        msgbox(uuid);
            display_login_form(uuid);
}