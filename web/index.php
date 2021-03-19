<!DOCTYPE html>
<html>
<head>
	<title>Membuat halaman website ajax tanpa reload dengan ajax jquery | www.malasngoding.com</title>
	<!-- menghubungkan dengan file css -->
	<link rel="stylesheet" type="text/css" href="style.css">
	<!-- menghubungkan dengan file jquery -->
	<script type="text/javascript" src="jquery.js"></script>
</head>
<body>
<!-- 
Author : diki alfarabi hadi 
Site : www.malasngoding.com
-->
<div class="content">
	<header>
		<h1 class="judul">WWW.MALASNGODING.COM</h1>
		<h3 class="deskripsi">Membuat Halaman Website Ajax Tanpa Reload dengan JQuery</h3>
	</header>

	<div class="menu">
		<ul>
			<li><a class="klik_menu" id="home">HOME</a></li>
			<li><a class="klik_menu" id="tentang">TENTANG</a></li>
			<li><a class="klik_menu" id="tutorial">TUTORIAL</a></li>
			<li><a class="klik_menu" id="sosmed">SOSIAL MEDIA</a></li>
		</ul>
	</div>

	<div class="badan">



	</div>
</div>
</body>

<script type="text/javascript">
	$(document).ready(function(){
		$('.klik_menu').click(function(){
			var menu = $(this).attr('id');
			if(menu == "home"){
				$('.badan').load('home.php');						
			}else if(menu == "tentang"){
				$('.badan').load('tentang.php');						
			}else if(menu == "tutorial"){
				$('.badan').load('tutorial.php');						
			}else if(menu == "sosmed"){
				$('.badan').load('sosmed.php');						
			}
		});


		// halaman yang di load default pertama kali
		$('.badan').load('home.php');						

	});
</script>

</html>
