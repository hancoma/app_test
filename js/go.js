
function display_page(uuid,url){
     var uuid=uuid;
     var url=url;
 
         $.post(url,
    {
      uuid:uuid
    }, function(data){
    var data=data;
  
    $("#company_list").html(data);
        

    });
}

//보내기 
function display_mypage(uuid) {
    var uuid=uuid;
    var type=1;
         $.post("http://pluspay.kr/mypage_app.php",
    {
      uuid:uuid,
      type:type
    }, function(data){
    var data=data;
 
    $("#company_list").html(data);
        

    });
}


//보내기 
function display_send_form(uuid) {
    var uuid=uuid;

         $.post("http://pluspay.kr/send_form_app.php",
    {
      uuid:uuid
    }, function(data){
    var data=data;
 
    $("#company_list").html(data);
        

    });
}



//로그인 창 
function display_login_form(uuid) {
    var uuid=uuid;

         $.post("http://pluspay.kr/login_app.php",
    {
      uuid:uuid
    }, function(data){
    var data=data;
 
    $("#company_list").html(data);
        

    });
}

// 감여점 메인
//로그인 창 
function display_shopmain(uuid) {
    var uuid=uuid;

         $.post("http://pluspay.kr/shopmain.php",
    {
      uuid:uuid
    }, function(data){
    var data=data;
 
    $("#company_list").html(data);
        

    });
}

//회원가입
function display_join_form() {
         $.post("http://pluspay.kr/join_agree.php",
    {
      
    }, function(data){
    var data=data;
 
    $("#company_list").html(data);
        

    });
}
//회원가입
function display_join_form2() {
         $.post("http://pluspay.kr/login_form.php",
    {
      
    }, function(data){
    var data=data;
 
    $("#company_list").html(data);
        

    });
}

function display_find_pw() {
         $.post("http://pluspay.kr/forgotpw.php",
    {
      
    }, function(data){
    var data=data;
 
    $("#company_list").html(data);
        

    });
}

function display_card () {
        gourl("http://pluspay.kr/wallet/walletList.html");
}

function display_start () {

    $.post("http://pluspay.kr/wallet/walletmain.html",
    {
      
    }, function(data){
    var data=data;
 
    $("#company_list").html(data);
        

    });


}


function display_main () {
			$.post("http://pluspay.kr/company_list.html",
 	{
 	  
 	}, function(data){
 	var data=data;
 
 	$("#company_list").html(data);
 		

 	});
}

function logout(uuid) {
    var uuid=uuid;
    
         $.post("http://pluspay.kr/logout_app.php",
    {
      uuid:uuid
    }, function(){
  
  UIkit.modal.alert("로그아웃 되었습니다.");
    $("#right_menu").html('');
        
 $("#left_menu").html('');
gopage('index.html');
    });
}

function gourl(url) {
    var url=url;
    var ref = window.open(url, '_blank', 'location=no');

}
// 기기고유번호 같이 내기
function gourl_web(url) {
    var url=url;
    var uuid=device.uuid;
    var url_go=url+"?uuid="+uuid;
    var ref = window.open(url_go, '_blank', 'location=no');

}