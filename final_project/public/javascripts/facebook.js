
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '615428192265294',
      cookie     : true,
      xfbml      : true,
      version    : 'v1.0'
    });
      
  FB.getLoginStatus(function(response) {
  statusChangeCallback(response);
});
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

   function statusChangeCallback (response) {
     if (response.status === "connected") {
       console.log("logged in with Facebook");
     }
    else {
      console.log("not logged with facebook");
    }
  }

  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }
