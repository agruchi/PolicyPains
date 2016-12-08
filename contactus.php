<?php 
    require("config.php"); 
	//echo $_session['user'];
	//$fname = $_POST['fname'];
	//$lname = $_POST['lname'];
    if(!empty($_POST)) 
    { 
        // Ensure that the user fills out fields 
        if(empty($_POST['fname'])) 
        { die("Please enter First Name."); }
		else{ $fname = $_POST['fname']; }
        if(empty($_POST['lname'])) 
        { die("Please enter Last Name."); } 
		else{ $lname = $_POST['lname']; }
        if(!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) 
        { die("Invalid E-Mail Address"); } 
        else{ $email = $_POST['email']; }
		 if(empty($_POST['country'])) 
        { die("Please enter Country Name."); }
		else{ $country = $_POST['country']; }
        if(empty($_POST['city'])) 
        { die("Please enter City Name."); } 
		else{ $city = $_POST['city']; }
		if(empty($_POST['description'])) 
        { die("Please enter your question."); } 
		else{ $description = $_POST['description']; }
		
		
        // Check if the username is already taken
        $query = " 
            SELECT 
                1 
            FROM contactus 
            WHERE 
                username = 'ruchi' 
        "; 
		
		
        // $query_params = array( ':username' => 'ruchi' ); 
         // try { 
             // $stmt = $db->prepare($query); 
             // $result = $stmt->execute($query_params); 
         // } 
         // catch(PDOException $ex){ die("Failed to run query: " . $ex->getMessage()); } 
        // $row = $stmt->fetch(); 
        // if($row){ die("This username is already in use"); } 
        // $query = " 
            // SELECT 
                // 1 
            // FROM contactus 
            // WHERE 
                // username = 'ruchi' 
        // "; 
        // $query_params = array( 
            // ':username' => 'ruchi'
        // ); 
        // try { 
            // $stmt = $db->prepare($query); 
            // $result = $stmt->execute($query_params); 
        // } 
        // catch(PDOException $ex){ die("Failed to run query: " . $ex->getMessage());} 
        // $row = $stmt->fetch(); 
        // if($row){ die("This user is already exist in database"); } 
         
        // Add row to database 
        $query = " 
            INSERT INTO contactus (               
                fname, 
                lname, 
                email,
				country,
				city,
				description
            ) VALUES (                
                '$fname', 
                '$lname', 
                '$email',
				'$country',
				'$city',
				'$description'
            ) 
        "; 
		
	   $query_params = array( 
            ':username' => 'ruchi'
        ); 
        try {  
			echo $query	;
            $stmt = $db->prepare($query); 
            $result = $stmt->execute($query_params); 
        } 
        catch(PDOException $ex){   die("Failed to run query: " . $ex->getMessage()); } 
        header("Location: index.php"); 
        die("Redirecting to index.php"); 
    } 
?> 
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
    <script src="assets/bootstrap.min.js"></script>
    <link href="assets/bootstrap.min.css" rel="stylesheet" media="screen">
	<link href="assets/custom.css" rel="stylesheet" media="screen">
    <style type="text/css">
        body { background: url(assets/bglight.png); }
        .hero-unit { background-color: #fff; }
        .center { display: block; margin: 0 auto; }
		.carousel-inner > .item > a > img, .carousel-inner > .item > img, .img-responsive, .thumbnail a > img, .thumbnail > img {
			margin:auto;	
		}
		.carousel {
			margin-top: -77px;
			position: relative;
		}
		.mainMenu {
			background: rgba(0, 0, 0, 0) url("../images/mainmenu_left.png") no-repeat scroll left top;
			display: block;
			float: left;
			margin-bottom: 10px;
			width: 100%;
		}
		.logoOuter, .topRight{
			width: 50%; 
			border: 0px solid red;
			float: left;
			background-color: #fff;
			position: relative;
		}
		// .navbar{
			// position: static;
			// //z-index: -1;
	    // }
		// .navbar {
			// border: 1px solid transparent;
			// margin-bottom: 78px;
			// min-height: 50px;			
		// }
		
		
    </style>
	 <script type="text/javascript" >
/* 		 jQuery(document).ready(function() {
			 jQuery( ".dropdown-toggle strong" ).click(function() {
				 jQuery( ".dropdown-menu" ).toggle();
				
			 });
			 console.log("here");
		 }); */
	 </script>
</head>
<body>
<section class="container">
	<section class="logoOuter">
		<h1 class="logo">
		<a href="index.php"><img alt="Emsource Consulting" src="assets/images/logo2.png" width="100" height="70">
		</a>
		</h1>
	</section>

	<section class="topRight">
		<nav class="navbar navbar-fixed" >
			<div class="container-fluid">
			  <ul class="nav navbar-nav navbar-right">
				  <li><a href="register.php"><span class="glyphicon glyphicon-user"></span> Register</a></li>
				  <li class="divider-vertical"></li>
				  <li class="dropdown">
					<a class="dropdown-toggle" href="#" data-toggle="dropdown"><span class="glyphicon glyphicon-log-in"></span>Log In <strong class="caret"></strong></a>
					<div class="dropdown-menu" style="padding: 15px; padding-bottom: 0px;">
						<form action="login.php" method="post"> 
							Username:<br /> 
							<input type="text" name="username" value="<?php echo $submitted_username; ?>" /> 
							<br /><br /> 
							Password:<br /> 
							<input type="password" name="password" value="" /> 
							<br /><br /> 
							<input type="submit" class="btn btn-info" value="Login" /> 
						</form> 
					</div>
				  </li>
				</ul>
			</div>
		</nav>
	</section>
<section class="topNavbar">
	<nav class="navbar navbar-default navbar-inverse" role="navigation">  
		<div class="container-fluid">       
          <ul class="nav navbar-nav navbar-center">
			  <li class="active"><a href="index.php">Home</a></li>
			  <li><a href="aboutus.php">About Us</a></li> 			  
			  <li class="dropdown">
				  <a class="dropdown-toggle" data-toggle="dropdown" href="services.php">Our Services <span class="caret"></span></a>
				  <ul class="dropdown-menu">
					<li><a href="#">Recruitment Consulting</a></li>
					<li><a href="#">Education Consulting</a></li>
					<li><a href="#">Training And Workforce Development</a></li>
				  </ul>
			  </li>
			  <li><a href="#">Employer Form</a></li> 		
			  <li><a href="#">Candidate Resume</a></li> 		
			  <li><a href="#" class="selected">Contact Us</a></li> 		
		  </ul>     
		</div>  
	</nav>
</section>
<div id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
	  <li data-target="#myCarousel" data-slide-to="3"></li>
	  <li data-target="#myCarousel" data-slide-to="4"></li>
	  <li data-target="#myCarousel" data-slide-to="5"></li>
    </ol>

    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
      <div class="item active">
        <img src="assets/images/banner_1.jpg" alt="Image" >
        <div class="carousel-caption">
         <div class="caption">
				<h2>
				<span>Business decisions are efficient</span>
				</h2>
				<h3>
				We help our customers with data modeling
				<span></span>
				</h3>
			</div>
        </div>      
      </div>

      <div class="item">
        <img src="assets/images/banner_3.jpg" alt="Image" >
        <div class="carousel-caption">
			<div class="caption">
				<h2>
				<span>Business decisions are efficient</span>
				</h2>
				<h3>
				We help our customers with data modeling
				<span></span>
				</h3>
			</div>
        </div>      
      </div>
	  
	   <div class="item">
        <img src="assets/images/banner_4.jpg" alt="Image" >
        <div class="carousel-caption">
			<div class="caption">
				<h2>
				<span>Business decisions are efficient</span>
				</h2>
				<h3>
				We help our customers with data modeling
				<span></span>
				</h3>
			</div>
        </div>      
      </div>
	  
	  <div class="item">
        <img src="assets/images/banner_5.jpg" alt="Image" >
        <div class="carousel-caption">
			<div class="caption">
				<h2>
				<span>Business decisions are efficient</span>
				</h2>
				<h3>
				We help our customers with data modeling
				<span></span>
				</h3>
			</div>
        </div>      
      </div>
	  
    </div>

		
    <!-- Left and right controls -->
    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
</div>

	<section class="mainContainer">
		<aside class="leftPanel">
			<div class="button-rfp">
				<section class="readmoreOuterBlue">
					<a href="rpf.php">Submit RFP</a>
				</section>
			</div>
			<div class="leftMenu">
				<ul class="topnav">
					<li class="active">
						<!--a href="oracle-e-business-suite-crm.php">Oracle E-Business Suite : CRM</a-->
					</li>
				</ul>
			</div>
			<div class="leftMenu">
				<ul class="topnav">
				<li class="active">
				<a href="about-emsource.php">About Emsource</a>
				</li>
				<li class="active">
				<a href="vision-and-mission.php">Vision and Mission</a>
				</li>
				<li class="active">
				<a href="presence.php">Presence</a>
				</li>
				<li class="active">
				<a href="partners-alliances.php">Partners / Alliances</a>
				</li>
				</ul>
			</div>
			<section class="ourNews">
				<hgroup class="heading">
				<h3>
				<span>Our News</span>
				</h3>
				</hgroup>
				<p class="plainText"> Emsource Corporation is privileged to have ... Practice consulting.. </p>
				<section class="readmoreOuterBlue">
				<a href="news.php">Read more</a>
				</section>
				<hgroup class="subheading">
				
			</section>
			<section class="wordFromClients">
				<hgroup class="heading">
				<h3>
				<span>Our</span>
				Client Experiences...
				</h3>
				</hgroup>
				<div class="plainText" style="text-align:center;">
				<script type="text/javascript">
						var fadeimages=new Array()
						//SET IMAGE PATHS. Extend or contract array as 
							fadeimages[0]=["http://www.emsource.com/images/header_slider/icon_7L7x.jpg", "our-clients.php", "_self"];
							fadeimages[1]=["http://www.emsource.com/images/header_slider/icon_CF87.jpg", "our-clients.php", "_self"];
							fadeimages[2]=["http://www.emsource.com/images/header_slider/icon_2h1P.png", "our-clients.php", "_self"];
							fadeimages[3]=["http://www.emsource.com/images/header_slider/icon_3L4i.jpg", "our-clients.php", "_self"];
						new fadeshow(fadeimages, 250, 143, 0, 4000, 2, "R")

									
				</script>
				</div>
			</section>
		</aside>
		
		
	<form id="contactus" method="post" action="contactus.php">		
		<section class="mainBodyContent">
			<aside class="breadcrumb">
				<ul>
				<li>
				<a href="index.php">Home</a>
				</li>
				<li>
				<a href="contact-us.php">Contact Us</a>
				</li>
				</ul>
			</aside>
			<section class="welcomeCol">
				<hgroup class="heading">
				<h2>
				<span>Contact Us</span>
				</h2>
				</hgroup>
			</section>
			<section class="formRow">
				<p>
					<strong>Thank you </strong>
					for your interest in emsource Corporation. Please contact us using the information below
				</p>
				<p> </p>
				<section class="whiteBoxContent">
				<section class="plainText borderBottom">
				<hgroup>
				<h3> General Information:</h3>
				</hgroup>
				<p>
				<strong>Email:</strong>
					<a href="mailto:sales@emsource.com">sales@emsource.com</a>
					</p>
				</section>
				<section class="plainText borderBottom">
					<hgroup>
					<h3> Sales, services & Support</h3>
					</hgroup>
					<p>
					<strong>Email:</strong>
					<a href="mailto:sales@emsource.com">sales@emsource.com</a>
					</p>
				</section>
				<section class="plainText borderBottom">
					<hgroup>
					<h3> Career Opportunities:</h3>
					</hgroup>
					<p>
					<strong>Email:</strong>
					<a href="mailto:careers@emsource.com">careers@emsource.com</a>
					</p>
					<p> Looking for career opportunities? Email us at careers@emsource.com</p>
				</section>
				<section class="plainText borderBottom">
				<section class="location-add">
					<p>
					<strong>Emsource Corporation Headquarters(US)</strong>
					<br>
					1030 E.El Camino real,#231
					<br>
					Sunnyvale,ca 94087
					<br>
					<strong>Tel: </strong>
					<span class="skype_c2c_print_container notranslate">(408)-528-4602</span>
					<span id="skype_c2c_container" class="skype_c2c_container notranslate" data-ismobile="false" data-isrtl="false" data-isfreecall="true" data-numbertype="campaign-free" data-numbertocall="+14085284602" onclick="SkypeClick2Call.MenuInjectionHandler.makeCall(this, event)" onmouseout="SkypeClick2Call.MenuInjectionHandler.hideMenu(this, event)" onmouseover="SkypeClick2Call.MenuInjectionHandler.showMenu(this, event)" tabindex="-1" dir="ltr">
					<span class="skype_c2c_highlighting_inactive_common" skypeaction="skype_dropdown" dir="ltr">
						<span id="free_num_ui" class="skype_c2c_textarea_span">	</span>
					</span>
					</p>
				</section>
				<section class="location-map">				
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1751.9832642204815!2d77.32296675829141!3d28.570767801200102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x3764590bbcac0113!2sReligare+Wellness!5e0!3m2!1sen!2sin!4v1452137616209" width="600" height="450" frameborder="0" style="border:0" allowfullscreen>
						<!DOCTYPE html>
						<html>
						<head>
						<style type="text/css">
							  html, body, #mapDiv {
								height: 100%;
								margin: 0;
								padding: 0;
							  }							
						</style>
						<script src="https://maps.googleapis.com/maps/api/js?client=google-maps-embed&libraries=geometry,search&v=3.exp&language=en">
						Reload the page to get source for: https://maps.googleapis.com/maps/api/js?client=google-maps-embed&libraries=geometry,search&v=3.exp&language=en
						</script>
						<script src="https://maps.gstatic.com/maps-api-v3/embed/js/23/4/init_embed.js">
						Reload the page to get source for: https://maps.gstatic.com/maps-api-v3/embed/js/23/4/init_embed.js
						</script>
						<script>
							  initEmbed([null,null,null,null,null,[[[2,"spotlight",null,null,null,null,null,[null,["0x808fcb134e132059:0x1b68c775682c6493","1743 Park Ave #234, San Jose, CA 95126, USA",null,[null,null,37.3342424,-121.924902],0,1],null,null,null,null,null,null,null,"1743 Park Ave #234",11,null,[null,null,null,null,null,null,null,null,null,null,null,null,null,1],1]]],[[52]]],null,["en"],[null,"/maps/api/js/ApplicationService.UpdateStarring","//accounts.google.com/ServiceLogin?continue=https://www.google.com/maps/api/js/ApplicationService.AuthSuccess","/maps/api/js/ApplicationService.GetEntityDetails","/maps/embed/upgrade204",null,"/maps/embed/record204","/maps/api/js/ApplicationService.Search","/maps/api/js/ApplicationService.SendToDevice"],null,null,null,null,null,null,null,null,"KtWNVsOyC4zOjwPUvL_wAQ",null,null,null,[[[25376.59285548949,-121.924553,37.340752],null,null,13.10000038146973],14,0,[["0x808fcb134e132059:0x1b68c775682c6493","1743 Park Ave #234, San Jose, CA 95126, USA",[37.3342424,-121.924902]],"1743 Park Ave #234",["San Jose, CA 95126","USA"],null,null,null,null,null,null,null,null,null,null,"1743 Park Ave #234, San Jose, CA 95126, USA",null,null,null,null,null,null,null,null,null,1,null,null,null,"ChIJWSATThPLj4ARk2QsaHXHaBs"]],null,null,[null,null,null,null,null,null,null,null,null,[0,0],null,[0]],0]);						
						</script>
						</head>
						<body>
						<div id="mapDiv"></div>
						</body>
						</html>
					</iframe>
					<br>
					<small>
					<a style="color:#0000FF;text-align:left" href="https://maps.google.co.in/maps?f=q&source=embed&hl=en&geocode=&q=1743,+Park+Avenue,+Suite+%23234,+San+Jose,+CA-95126+USA&aq=&sll=19.990963,73.803481&sspn=0.182289,0.338173&ie=UTF8&hq=&hnear=1743+Park+Ave+%23234,+San+Jose,+California+95126,+United+States&t=m&ll=37.340752,-121.924553&spn=0.023884,0.036564&z=14&iwloc=A">View Larger Map</a>
					</small>
				</section>
				</section>
				</section>
				<p></p>
			</section>
			<section class="whiteBoxContent">
			<section class="formOuter">
				<hgroup>
					<h3></h3>
				</hgroup>
				<section class="formRow">
					<label for="name">First Name</label>
					<input id="fname" type="text" name="fname" placeholder="First Name">
					<section class="error">
						<span class="fname"></span>
					</section>
				</section>
				<section class="formRow">
					<label>Last Name</label>
					<input id="lname" type="text" name="lname" placeholder="Last Name">
					<section class="error">
						<span class="lname"></span>
					</section>
				</section>
				<section class="formRow">
					<label>Email ID</label>
					<input id="email" type="text" name="email" placeholder="Email">
					<section class="error">
					<span class="email"></span>
					</section>
				</section>
				<section class="formRow">
					<label>Country</label>
					<input id="country" type="text" name="country" placeholder="Country">
					<section class="error">
					<span class="country"></span>
					</section>
				</section>
				<section class="formRow">
					<label>City</label>
					<input id="city" type="text" name="city" placeholder="City">
					<section class="error">
					<span class="city"></span>
					</section>
				</section>
				<section class="formRow">
					<label>Describe Yourself</label>
					<textarea id="description" rows="" cols="" name="description" placeholder="Description"></textarea>
					<section class="error">
					<span class="description"></span>
					</section>
				</section>
				<section class="formRow">
					<label class="hideme"> </label>
					<input type="submit" value="Submit" name="submit">
					<input type="reset" value="Reset" name="Reset">
				</section>
			</section>
			</section>
		</section>
	</form>

<footer class="footer">
	<section class="copyrights"> © 2016 Emsource Corporation</section>
	<section class="tech">
		<a target="_blank" href="#">
			<img width="60%" border="0" alt="Insured by TechInsurance, the Business Insurance Experts for IT Professionals" src="http://www.techinsurance.com/images/TechInsurance_Seal.png">
		</a>
		<br>
		Click here to verify coverage
	</section>
	<section class="fMenu">
		<a href="index.php">Home</a>
		|
		<a href="about-us.php">About Us</a>
		|
		<a href="industries.php">Industries</a>
		|
		<a href="services.php">Services</a>
		|
		<a href="assets.php">Assets</a>
		|
		<a href="contact-us.php">Contact Us</a>
		|
		<a target="_new" href="blog/index.php">Blog</a>
		|
	</section>
	<script type="text/javascript">
		(function () { var done = false; var script = document.createElement('script'); script.async = true; script.type = 'text/javascript'; script.src = 'https://www.purechat.com/VisitorWidget/WidgetScript'; document.getElementsByTagName('HEAD').item(0).appendChild(script); script.onreadystatechange = script.onload = function (e) { if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) { var w = new PCWidget({ c: 'b34335e4-016a-4ae8-96c0-0b85d73d0242', f: true }); done = true; } }; })();
	</script>
	<style type="text/css">
		
		.location-map {
			border: 1px solid #e9e9e9;
			float: left;
			padding: 2px;
			width: 48%;
		}
	
		.formRow {
			float: left;
			padding-bottom: 15px;
			width: 100%;
		}

		.formOuter {
			float: left;
			padding-bottom: 20px;
			width: 100%;
		}

		.formRow label {
			float: left;
			font-family: "robotoregular",Helvetica,Arial,sans-serif;
			font-size: 13px;
			height: 33px;
			line-height: 33px;
			width: 25%;
		}

		.formRow input[type="text"] {
			float: left;
			font-family: "robotoregular",Helvetica,Arial,sans-serif;
			font-size: 13px;
			height: 33px;
			line-height: 33px;
			width: 40%;
		}
		.formRow input[type="text"], .formRow input[type="password"], .formRow textarea, .formRow select, .formRow input[type="button"] {
			background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
			border: 0 solid #ccc;
			border-radius: 5px;
			box-shadow: 0 0 3px #aaa;
			display: block;
			margin-bottom: 0;
			margin-left: 2px;
		}
		.error {
			color: #ff0000;
			float: left;
			line-height: 33px;
			margin-bottom: 0;
			padding-left: 2%;
			width: 36%;
		}
	
		.footer {
			border-top: 1px solid #d9d9d9;
			float: left;
			padding-bottom: 40px;
			padding-top: 10px;
			width: 100%;
		}
		.copyrights {
			float: left;
			font-size: 12px;
			height: 36px;
			line-height: 36px;
			width: 20%;
		}
		.tech {
			float: left;
			height: 36px;
			width: 25%;
		}
		a, a:visited {
			color: #797979;
			outline: 0 none;
			text-decoration: none;
		}
		a img, a img:hover {
			border: 0 none;
		}
	</style>
</footer>
</section>
</body>
</html>
