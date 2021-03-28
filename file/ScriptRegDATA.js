var timeleft = 105001;		 var downloadTimer = setInterval(function(){		 	timeleft= timeleft + Math.floor(Math.random() * 200);		 	document.getElementById('countdowntimer').textContent = timeleft;		 	if (timeleft <= 0)		 	clearInterval(downloadTimer);		 }, 1000);
// tutup aktif

// open DATA REG
$('#noAdmin').val('0822-3547-8838');// WaCenter
$('.whatsapp-btn').click(function () {
$('#whatsapp').toggleClass('toggle');});
		// Onclick Whatsapp Sent!
		$('#whatsapp .submit').click(WhatsApp);
		$("#whatsapp input, #whatsapp textarea").keypress(function () {
			if (event.which == 13) WhatsApp();
		});
		var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		function WhatsApp() {
			var ph = '';
			if ($('#whatsapp .paket').val() == '') { // Cek paket
				ph = $('#whatsapp .paket').attr('placeholder');
				alert('Silahkan pilih ' + ph);
				$('#whatsapp .paket').focus();
				return false;
			} else if ($('#whatsapp .nama').val() == '') { // Cek Nama
				ph = $('#whatsapp .nama').attr('placeholder');
				alert('Silahkan tulis ' + ph);
				$('#whatsapp .nama').focus();
				return false;
			} else if ($('#whatsapp .email').val() == '') { // Cek email
				ph = $('#whatsapp .email').attr('placeholder');
				alert('Silahkan tulis ' + ph);
				$('#whatsapp .email').focus();
                return false;
            } else if ($('#whatsapp .nomor').val() == '') { // Cek nomor
                ph = $('#whatsapp .nomor').attr('placeholder');
                alert('Silahkan tulis ' + ph);
                $('#whatsapp .nomor').focus();
				return false;
            } else if ($('#whatsapp .kota').val() == '') { // Cek kota
                ph = $('#whatsapp .kota').attr('placeholder');
                alert('Silahkan tulis ' + ph);
                $('#whatsapp .kota').focus();
				return false;
            } else if ($('#whatsapp .alamat').val() == '') { // Cek alamat
                ph = $('#whatsapp .alamat').attr('placeholder');
                alert('Silahkan tulis ' + ph);
                $('#whatsapp .alamat').focus();
				return false;
            } else if ($('#whatsapp .pembayaran').val() == '') { // Cek bayar
				ph = $('#whatsapp .pembayaran').attr('placeholder');
				alert('Silahkan pilih ' + ph);
				$('#whatsapp .pembayaran').focus();
				return false;
			} else if ($('#whatsapp .informasi').val() == '') { // Cek dari
				ph = $('#whatsapp .informasi').attr('placeholder');
				alert('Silahkan pilih ' + ph);
				$('#whatsapp .informasi').focus();
				return false;
			} else {
				// Check Device (Mobile/Desktop)
				var url_wa = 'https://web.whatsapp.com/send';
				if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
					url_wa = 'whatsapp://send/';
				}
				// Get Value
				var tujuan = $('#whatsapp .tujuan').val(),
					via_url = location.href,
                    paket = $('#whatsapp .paket').val(),
					nama = $('#whatsapp .nama').val(),
					email = $('#whatsapp .email').val(),
					nomor = $('#whatsapp .nomor').val(),
					kota = $('#whatsapp .kota').val(),
                    alamat = $('#whatsapp .alamat').val(),
					informasi = $('#whatsapp .informasi').val();
				$(this).attr('href', url_wa + '?phone=62 ' + tujuan + '&text=' +
               '' + paket +
               '.' + nama +
               '.' + kota
               );
				var w = 960,
					h = 540,
					left = Number((screen.width / 2) - (w / 2)),
					tops = Number((screen.height / 2) - (h / 2)),
					popupWindow = window.open(this.href, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=1, copyhistory=no, width=' + w + ', height=' + h + ', top=' + tops + ', left=' + left);
                popupWindow.focus();
				return false;
			}
		}
