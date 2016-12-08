<?php
    require("config.php");
	echo (empty($_SESSION['user']));	
    if(empty($_SESSION['user'])) 
    {
        header("Location: login.php");
        die("Redirecting to login.php"); 
    }else{
		header("Location: feedback.php");
        die("Redirecting to feedback.php");
	}
?>




<!-- Author: Michael Milstead / Mode87.com
     for Untame.net
     Bootstrap Tutorial, 2013
-->
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Bootstrap Tutorial</title>
    <meta name="description" content="Bootstrap Tab + Fixed Sidebar Tutorial with HTML5 / CSS3 / JavaScript">
    <meta name="author" content="Untame.net">

    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
    <script src="assets/bootstrap.min.js"></script>
    <link href="assets/bootstrap.min.css" rel="stylesheet" media="screen"></link>
    <style type="text/css">
        body { background: url(assets/bglight.png); }
        .hero-unit { background-color: #fff; }
        .center { display: block; margin: 0 auto; }
		.container{height: 50px;}
		
		div.table{
			border: 1px solid #2a8441;
			margin: 25px auto;
			position: relative;
			text-align: left;
			width: 640px;
		}
		
		div.table {border: 1px solid #2a8441; display: table; }
		div.tr {border: 1px solid #2a8441; display: table-row; }
		div.td {border: 1px solid #2a8441; display: table-cell; }
		div.th {border: 1px solid #2a8441; display: table-cell;}
    </style>
</head>

<body>

<div class="navbar navbar-fixed-top navbar-inverse">
  <div class="navbar-inner">
    <div class="container">
      <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </a>
      <a class="brand">Traffic Signal Data </a>
      <div class="nav-collapse">
        <ul class="nav pull-right">
          <li><a href="register.php">Register</a></li>
          <li class="divider-vertical"></li>
          <li><a href="logout.php">Log Out</a></li>
        </ul>
	  </div>
    </div>
  </div>
</div>

<div class="container hero-unit">
    <div class="nav-collapse">
       <?php
			mysql_connect('localhost','root','') or die(mysql_error());
			mysql_select_db('phpdemo')  or die(mysql_error());
			$query=mysql_query("select * from traffic_signal")  or die(mysql_error());			
			//echo $query;
/* 			echo'<table border="1" ><th >Id</th><th>Direction</th><th>Congestion Level</th><th>Gating Time</th>';
			while($res=mysql_fetch_array($query))
			{
			  echo'<tr><td>'.$res['id'].'</td><td>'.$res['direction'].'</td><td>'.$res['congestion_level'].'</td><td>'.$res['gating_time'].'</td></tr>';
			}
			echo'</table>'; 
			http://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_ref_js_collapse&stacked=h
*/
			

echo'<div class="container">';
  echo'<h2>Collapse</h2>';
  echo'<p><strong>Note:</strong> The <strong>data-parent</strong> attribute makes sure that all collapsible elements under the specified parent will be closed when one of the collapsible item is shown.</p>';
  echo'<div class="panel-group" id="accordion">';
    
	echo'<div class="panel panel-default">';
      echo'<div class="panel-heading">';
        echo'<h4 class="panel-title">';
          echo'<a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Collapsible Group 1</a>';
        echo'</h4>';
      echo'</div>';
      echo'<div id="collapse1" class="panel-collapse collapse in">';
	  
	   while($res=mysql_fetch_array($query))
			 {
			   echo'<div class="tr"><div class="td">'.$res['id'].'</div><div class="td">'.$res['direction'].'</div><div class="td">'.$res['congestion_level'].'</div><div class="td">'.$res['gating_time'].'</div></div>';
			 }
        
      echo'</div>';
    echo'</div>';
   
   
   $query1=mysql_query("select * from traffic_route")  or die(mysql_error());	
   echo'<div class="panel panel-default">';
      echo'<div class="panel-heading">';
        echo'<h4 class="panel-title">';
          echo'<a data-toggle="collapse" data-parent="#accordion" href="#collapse2">Collapsible Group 2</a>';
        echo'</h4>';
      echo'</div>';
      echo'<div id="collapse2" class="panel-collapse collapse">';
         while($res=mysql_fetch_array($query1))
			 {
			   echo'<div class="tr"><div class="td">'.$res['id'].'</div><div class="td">'.$res['route'].'</div><div class="td">'.$res['junction_id'].'</div><div class="td">'.$res['latitude'].'</div></div>';
			 }
      echo'</div>';
    echo'</div>';
    
	echo'<div class="panel panel-default">';
      echo'<div class="panel-heading">';
        echo'<h4 class="panel-title">';
          echo'<a data-toggle="collapse" data-parent="#accordion" href="#collapse3">Collapsible Group 3</a>';
        echo'</h4>';
      echo'</div>';
      echo'<div id="collapse3" class="panel-collapse collapse">';
        echo'<div class="panel-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit,';
        echo'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,';
        echo'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>';
      echo'</div>';
    echo'</div>';
	
  echo'</div> ';
  echo'</div>';			
 echo'   </div>';
echo'</div>';




?>
</body>
</html>