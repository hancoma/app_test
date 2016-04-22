


function right_menu() {
    var uuid=device.uuid;
      $.post("http://pluspay.kr/right_menu.php",
  {
    uuid:uuid
  }, function(data){
  var data=data;
  $("#right_menu").html(data);
  
    

  });
  
  
}

function left_menu() {
 var uuid=device.uuid;
      $.post("http://pluspay.kr/left_menu.php",
  {
    uuid:uuid
  }, function(data){
  var data=data;
  $("#left_menu").html(data);
  
    

  });
  
  
}

	function onNotificationAPN (event) {
    if ( event.alert )
    {
        navigator.notification.alert(event.alert);
    }

    if ( event.sound )
    {
        var snd = new Media(event.sound);
        snd.play();
    }

    if ( event.badge )
    {
        pushNotification.setApplicationIconBadgeNumber(successHandler, errorHandler, event.badge);
    }
}


function msgbox (msg) {
    var msg=msg;
    navigator.notification.activityStart("Message", msg);
}
  function end_btn() {
  	
    navigator.notification.confirm(
    "끝내시겠습니까?", // message
     onEnd,         // callback to invoke with index of button pressed
    '종료확인',           // title
    ['종료','취소']     // buttonLabels
);
 }

function onEnd(results) {
	var results=results;
	if (results=='1') {
	 navigator.app.exitApp();
	}
}


function onNotificationGCM(e) {
    
    switch( e.event )
    {
    case 'registered':
        if ( e.regid.length > 0 )
        {
           
                   json_call(e.regid); //gcm 코드 저장
        }
    break;

    case 'message':
        // if this flag is set, this notification happened while we were in the foreground.
        // you might want to play a sound to get the user's attention, throw up a dialog, etc.
        if ( e.foreground )
        {
        	alert_msg(e.payload.title,e.payload.message,"확인");
            var my_media = new Media("/android_asset/www/"+e.soundname);
            my_media.play();
        }
        else
        {  // otherwise we were launched because the user touched a notification in the notification tray.
            if ( e.coldstart )
            {
alert_msg(e.payload.title,e.payload.message,"확인");
                $("#app-status-ul").append('<li>--COLDSTART NOTIFICATION--' + '</li>');
            }
            else
            {
            	alert_msg(e.payload.title,e.payload.message,"확인");
                $("#app-status-ul").append('<li>--BACKGROUND NOTIFICATION--' + '</li>');
            }
        }

        $("#app-status-ul").append('<li>MESSAGE -> MSG: ' + e.payload.message + '</li>');
        $("#app-status-ul").append('<li>MESSAGE -> MSGCNT: ' + e.payload.msgcnt + '</li>');
    break;

    case 'error':
        $("#app-status-ul").append('<li>ERROR -> MSG:' + e.msg + '</li>');
    break;

    default:
        $("#app-status-ul").append('<li>EVENT -> Unknown, an event was received and we do not know what it is</li>');
    break;
  }
}


function json_call(reg_id) {
      var reg_id=reg_id;
      var deviceid=device.uuid;
      // gcm reg_id 등록  
         $.post("http://pluspay.kr/gcm_reg_app.php",
   {
    reg_id:reg_id,
    deviceid:deviceid
   },
   function(data){
    var data;
    
   //  alert("ok");
   })
       } 
