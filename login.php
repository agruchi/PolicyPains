<?php 
    require("config.php"); 
    $submitted_username = ''; 
    if(!empty($_POST)){ 
        $query = " 
            SELECT 
                userid, 
                username, 
                password, 
                salt, 
                email 
            FROM user 
            WHERE 
                username = :username 
        "; 
        $query_params = array( 
            ':username' => $_POST['username'] 
        ); 
         
        try{ 
            $stmt = $db->prepare($query); 
            $result = $stmt->execute($query_params); 
        } 
        catch(PDOException $ex){ die("Failed to run query: " . $ex->getMessage()); } 
        $login_ok = false; 
        $row = $stmt->fetch(); 
        if($row){ 
            $check_password = hash('sha256', $_POST['password'] . $row['salt']); 
            for($round = 0; $round < 65536; $round++){
                $check_password = hash('sha256', $check_password . $row['salt']);
            } 
            if($check_password === $row['password']){
                $login_ok = true;
            } 
        } 

        if($login_ok){ 
            unset($row['salt']); 
            unset($row['password']); 
            $_SESSION['user'] = $row;  
			print("Login Success."); 
			//die();
            //header("Location: secret.php"); 
            //die("Redirecting to: secret.php"); 
			header("Location: traffic.php"); 
            die("Redirecting to: traffic.php"); 
        } 
        else{ 
			echo ($check_password);
            print("Login Failed."); //die();
            $submitted_username = htmlentities($_POST['username'], ENT_QUOTES, 'UTF-8'); 
        } 
    } 
?> 

<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Login</title>
      <!-- BOOTSTRAP -->
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      <!--script>
         DD_roundies.addRule('#login-bg', '5px', true);
         </script--> 
      <script type="text/javascript">
         window.history.forward(1);
      </script>
      <script type="text/javascript">
         function setMyCookie(c_name, value, exdays) 
         {
         	var exdate = new Date();
         	exdate.setDate(exdate.getDate() + exdays);
         	var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
         	document.cookie = c_name + "=" + c_value;
         }
         function checkKeyCode(evt)
          	{
          	var charCode;  	
          	var browser=navigator.appName;
          	if (browser=="Microsoft Internet Explorer"){
         	charCode=event.keyCode;	
         	if (charCode ==116)
                  {
               	event.keyCode=0;
               	 return false;
                  }
         }
          	else
          		{
          		 charCode = evt.which;
          		if (charCode ==116)
                  {
         	       	 return false;
                  }
          		}
          	}
          	document.onkeydown=checkKeyCode;
         
      </script>
      <script>
         $(document).ready(function(){
         
         $(".collapsible > li > a").on("click", function(e){
             
         if(!$(this).hasClass("active")) {
         
             // hide any open menus and remove all other classes
         	$(".collapsible li ul").slideUp(500);
         	$(".collapsible li a").removeClass("active");
             
         // open our new menu and add the open class
         	$(this).next("ul").slideDown(500);
         	$(this).addClass("active");
         
         }else if($(this).hasClass("active")) {
         
         	$(this).removeClass("active");
         	$(this).next("ul").slideUp(500);
         }
         });
         });
      </script>
   </head>
   <body onload="document.loginForm.usernameField.focus();">
      <!-- header starts here --> 	
      <!DOCTYPE html>
      <html lang="en">
         <head>
            <meta charset="utf-8">
            <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Login</title>
            <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/ResponsiveSlides.js/1.53/responsiveslides.min.js"></script>
            <!--script src="js/DD_roundies.js" type="text/javascript"></script-->
            <script type="text/javascript">
               $(document).ready(function(){
               	setActiveClass();
               });
               
            </script>
            <script type="text/javascript">
               function setActiveClass()
               {
               	var urlText = window.location.href;
               	
               	if(urlText.indexOf("login.htm")!= -1 || urlText.indexOf("logout.htm")!= -1 ){
               		$('#home').addClass('active');
               	}
               	
               }
            </script>
         <body>
            <header class="container-fluid">
               <nav class="navbar navbar-default navbar-fixed-top" style="background-color:#fff; border-bottom:2px solid #C5C4C0; padding:5px 0px; position:fixed; top:0px; left:0px;">
                  <div class="container">
                  <a href="login.htm" ><img src="images/logo.png" style="width:auto !important;" alt="logo" /></a>
                  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  </button>
                  <div id="navbar" class="navbar-collapse collapse navbar-collapse-index">
                     <ul class="nav navbar-nav navbar-right">
                        <li id="home"><a href="/login.htm">Home</a></li>
                        <li><span class="menu-span hidden-xs">/</span></li>
                        <li><a href="aboutUs.htm" >About Us</a></li>
                        <li><span class="menu-span hidden-xs">/</span></li>
                        <li><a href="aboutTheProgram.htm" >About the Program</a></li>
                        <li><span class="menu-span hidden-xs">/</span></li>
                        <!-- <li><a href="privacyPolicy.htm">Privacy Policy</a></li>
                           <span>/</span> 
                           <li><a href="disclaimer.htm">Disclaimer</a></li>
                            <span>/</span> -->
                        <li><a href="featureOfferings.htm" >Feature Offerings</a></li>
                        <li><span class="menu-span hidden-xs">/</span></li>
                        <li><a href="lob.htm" >Line Of Business</a></li>
                        <li><span class="menu-span hidden-xs">/</span></li>
                        <li ><a href="trainingVideo.htm" target="_blank" style="color:#f00;">How To Get Started</a></li>
                        <!-- <span>/</span>
                           <li><a href="contact.htm" >Contact Us</a></li> -->
                     </ul>
               </nav>
               </div>				
               </nav>
            </header>
         </body>
         </head>
      </html>
      <!--Start of Zendesk Chat Script-->
      <script type="text/javascript">
         window.$zopim||(function(d,s){var z=$zopim=function(c){z._.push(c)},$=z.s=
         d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.
         _.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute("charset","utf-8");
         $.src="https://v2.zopim.com/?4P5ulJkg624ZFcGu16Ug0z3z6tY41Sth";z.t=+new Date;$.
         type="text/javascript";e.parentNode.insertBefore($,e)})(document,"script");
      </script>
      <!--End of Zendesk Chat Script-->
      <!-- header ends here -->
      <div class="container-fluid above margin-tab" style="margin-top:67px;">
         <div class="container">
            <div class="row">
               <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <img src="images/banner-img.png" class="img-responsive banner-img" alt="">
               </div>
               <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div class="login-form" align="center" style="margin:0px 0px 10px;">
                     <div id="login-bg" align="center" >
                        <div class="login-inner">
                           <form id="loginForm" name="loginForm" action="login.php" method="post">
                              <div>
                                 <input id="username" class="user-input" type="text" autocomplete="off" name="username" maxlength="50" value="<?php echo $submitted_username; ?>" placeholder="USERNAME" />
                              </div>
                              <div>
                                 <input id="password" class="password-input" type="password" autocomplete="off" name="password" maxlength="50" placeholder="PASSWORD" />
                              </div>
                              <div align="center">
                                 <input type="submit" class="btn-mid" value="LOGIN" onclick="setMyCookie('activeTab','homePage',365);" />
                              </div>
                              <div class="login-text">
                                 <input name="_spring_security_remember_me" type="checkbox">&nbsp;&nbsp;<span>REMEMBER ME</span>
                              </div>
                              <div class="login-text" >
                                 <span><a href="forgotPassword.htm">FORGOT YOUR PASSWORD</a></span>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- Footer Starts here -->
      <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
      <html>
         <head>
            <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
            <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Login</title>
            <!-- BOOTSTRAP -->
            <link type="text/css" href="homePage-css/bootstrap.min.css" rel="stylesheet">
            <!-- THEME -->
            <link type="text/css" href="style/theme.css" rel="stylesheet">
            <!--ICONS-->
            <!--FONTS-->
            <link href='http://fonts.googleapis.com/css?family=Roboto:400,400italic,700,700italic,500italic,500,300italic,300' rel='stylesheet' type='text/css'>
         </head>
         <body>
            <!--content starts--->
            <div class="container pad-top">
               <div class="pull-left home-content">
                  <div align="center"><img src="images/about-icon.jpg"/></div>
                  <div>
                     <h2>ABOUT US</h2>
                     <div class="contnt-txt">
                        My Referral App is a unique initiative of NetAmbit group. We are in the field of sales and distribution for last 15 years...
                        <br>
                        <a href="aboutUs.htm">more...</a>
                     </div>
                  </div>
               </div>
               <div class="pull-right home-content">
                  <div align="center"><img src="images/feature-icon.jpg"  /></div>
                  <div>
                     <h2>FEATURE OFFERINGS</h2>
                     <div class="contnt-txt">
                        Online Partner acquisition - Ease of Partner appointment...
                        <br>
                        <a href="featureOfferings.htm">more...</a>
                     </div>
                  </div>
               </div>
               <div class="clearfix"></div>
            </div>
            <!--content ends--->
            <div style="height:80px;">&nbsp;</div>
            <footer class="nav-footer sub-footer-nav" style="background-color:#fff;">
               <span><a href="/privacyPolicy.htm">Privacy Policy</a></span>
               <span><a href="/disclaimer.htm">Disclaimer</a></span>
               <span><a href="/contact.htm">Contact Us</a></span>                                
               <br><br>
               <div style="text-align:center;">
                  Copyright &copy; 2016 MyReferralApp. All rights reserved.
               </div>
            </footer>
         </body>
      </html>
      <!-- Footer ends here -->
      <!-- Start of yahoo78 Zendesk Widget script -->
      <!--script>/*<![CDATA[*/window.zEmbed||function(e,t){var n,o,d,i,s,a=[],r=document.createElement("iframe");window.zEmbed=function(){a.push(arguments)},window.zE=window.zE||window.zEmbed,r.src="javascript:false",r.title="",r.role="presentation",(r.frameElement||r).style.cssText="display: none",d=document.getElementsByTagName("script"),d=d[d.length-1],d.parentNode.insertBefore(r,d),i=r.contentWindow,s=i.document;try{o=s}catch(e){n=document.domain,r.src='javascript:var d=document.open();d.domain="'+n+'";void(0);',o=s}o.open()._l=function(){var o=this.createElement("script");n&&(this.domain=n),o.id="js-iframe-async",o.src=e,this.t=+new Date,this.zendeskHost=t,this.zEQueue=a,this.body.appendChild(o)},o.write('<body onload="document._l();">'),o.close()}("https://assets.zendesk.com/embeddable_framework/main.js","yahoo78.zendesk.com");
         /*]]>*/</script-->
      <!-- End of yahoo78 Zendesk Widget script -->
      <!--Start of Tawk.to Script-->
      <!--script type="text/javascript">
         var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
         (function(){
         var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
         s1.async=true;
         s1.src='https://embed.tawk.to/583e871dd6eaec04d65b0555/default';
         s1.charset='UTF-8';
         s1.setAttribute('crossorigin','*');
         s0.parentNode.insertBefore(s1,s0);
         })();
         </script-->
      <!--End of Tawk.to Script-->
   </body>
</html>

