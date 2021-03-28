var uri=window.location.toString();if(uri.indexOf("%3D","%3D")>0){var clean_uri=uri.substring(0,uri.indexOf("%3D"));window.history.replaceState({},document.title,clean_uri);}
var uri=window.location.toString();if(uri.indexOf("%3D%3D","%3D%3D")>0){var clean_uri=uri.substring(0,uri.indexOf("%3D%3D"));window.history.replaceState({},document.title,clean_uri);}
var uri=window.location.toString();if(uri.indexOf("&m=1","&m=1")>0){var clean_uri=uri.substring(0,uri.indexOf("&m=1"));window.history.replaceState({},document.title,clean_uri);}
var uri=window.location.toString();if(uri.indexOf("?m=1","?m=1")>0){var clean_uri=uri.substring(0,uri.indexOf("?m=1"));window.history.replaceState({},document.title,clean_uri);}
var uri=window.location.toString();if(uri.indexOf("/p/harga.html","/p/harga.html")>0){var clean_uri=uri.substring(0,uri.indexOf("/p/harga.html"));window.history.replaceState({},document.title,clean_uri);}
var uri=window.location.toString();if(uri.indexOf("/p/webreport.html","/p/webreport.html")>0){var clean_uri=uri.substring(0,uri.indexOf("/p/webreport.html"));window.history.replaceState({},document.title,clean_uri);}
var uri=window.location.toString();if(uri.indexOf("/p/cetak-struktur.html","/p/cetak-struktur.html")>0){var clean_uri=uri.substring(0,uri.indexOf("/p/cetak-struktur.html"));window.history.replaceState({},document.title,clean_uri);}


// Source Jam
window.setTimeout("waktu()", 1000);
	function waktu() {
		var waktu = new Date();
		setTimeout("waktu()", 1000);
		document.getElementById("jam").innerHTML = waktu.getHours();
		document.getElementById("menit").innerHTML = waktu.getMinutes();
		document.getElementById("detik").innerHTML = waktu.getSeconds();
	}
// tutup jam

// Mengatur waktu akhir perhitungan mundur
var countDownDate = new Date("Dec 30, 2020 15:37:25").getTime();

// Memperbarui hitungan mundur setiap 1 detik
var x = setInterval(function() {

  // Untuk mendapatkan tanggal dan waktu hari ini
  var now = new Date().getTime();
    
  // Temukan jarak antara sekarang dan tanggal hitung mundur
  var distance = countDownDate - now;
    
  // Perhitungan waktu untuk hari, jam, menit dan detik
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Keluarkan hasil dalam elemen dengan id = "DATAmundur"
  document.getElementById("DATAmundur").innerHTML = "Tinggal " + days + "Hari : " + hours + "Jam : "
  + minutes + "Menit : " + seconds + "Detik " + "lagi";
    
  // Jika hitungan mundur selesai, tulis beberapa teks 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("DATAmundur").innerHTML = "EXPIRED";
  }
}, 1000);
// tutup wkt mundur

function WaLink() {
    document.getElementById("Wa38").setAttribute("href", "https://api.whatsapp.com/send?phone=6282235478838&text=S.PIN",); 
    document.getElementById("Wa37").setAttribute("href", "https://api.whatsapp.com/send?phone=6282235478837&text=S.PIN",); 
    document.getElementById("Wa36").setAttribute("href", "https://api.whatsapp.com/send?phone=6282235478836&text=S.PIN",); 
    document.getElementById("Wa96").setAttribute("href", "https://api.whatsapp.com/send?phone=6287754785596&text=S.PIN",); 
    document.getElementById("devytblink").setAttribute("href", "https://bit.ly/ytbpc",); 
    document.getElementById("devgmlink").setAttribute("href", "/",); 
}
