
$(function() {
    $('span.open').click(function() {
        $('#kotak-pesan').animate({top:"15px"}, 1000);
        return false;
    });
    $('a.close').click(function() {
        $(this).parent().animate({top:"-600px"}, 1000);
        return false;
    });
});

  function myFunction() {
    var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
   li[i].style.display = "";
} else {
li[i].style.display = "none";
  }
  }
  }

	$(document).ready(function() {
		var delay = 46800;
		var jackpot = 0;
		pull_jackpot();
		var timer;
		function pull_jackpot() {
		var nominal = 1992383;
		if (jackpot == 0) jackpot = parseInt(nominal - 1990000);
		var amount = 1000000 / delay * 1;
		timer = setInterval(function() { jackpot = set_jackpot(jackpot, nominal, amount); }, 1);
		}

		function set_jackpot(jackpot, nominal, amount) {
			var jackpot = jackpot + amount;
			if (jackpot >= nominal) {
				clearInterval(timer);
				pull_jackpot();
			} else {
				var result = addCommas(parseInt(jackpot));
				$('#jp').html(result);
			}
			return jackpot;
		}
		function addCommas(nStr) {
			nStr += '';
			x = nStr.split('.');
			x1 = x[0];
			x2 = x.length > 1 ? '.' + x[1] : '';
			var rgx = /(\d+)(\d{3})/;
			while (rgx.test(x1)) {
				x1 = x1.replace(rgx, '$1' + ',' + '$2');
			}
			return x1 + x2;
		}
	})
var win = null;
function NewWindow(mypage,myname,w,h,scroll){
LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
settings =
'height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable'
win = window.open(mypage,myname,settings)
}
