if(typeof localStorage.getItem("pulsa") !== "undefined"){
            $.ajax({
                type: "GET",
                cache: true,
                dataType: 'json',
                url: 'https://webpulsa-id.github.io/file/web/kdpr.js',
                success: function (data) {
                    localStorage.setItem("pulsa", JSON.stringify(data.pulsa));
                    localStorage.setItem("ppob", JSON.stringify(data.ppob));
                    localStorage.setItem("game", JSON.stringify(data.game));

                    for (var i = 0; i < data.pulsa.length; i++) {
                        var namaoperator = data.pulsa[i].namaoperator;
                        var rows         = data.pulsa[i].data;
                        var html         = '<div class="table-header" id="big" style="line-height:25px"><a href="#pulsa">'+namaoperator+'</a></div>';
                        html += '<div class="table-responsive">';
                        html += '<table id="tableprodukvgame1" class="table table-striped table-bordered table-hover">';
                        html += '<thead><tr><th style="padding:3px;width:20%">Kode</th><th style="padding:3px;width:55%">Produk</th><th style="padding:3px;width:10%;text-align: center;">Trx</th></tr></thead>';
                        for (var j = 0; j < rows.length; j++) {

                        html += '<tbody>';
                        html += '<tr>';
                        html += '<td>'+rows[j].kodeproduk+'</td>';
                        html += '<td style="padding:3px">'+rows[j].namaproduk+'</td>';

                        html += '<td style="padding:3px;text-align: center;"><span class="label label-success"><a href="https://api.whatsapp.com/send?phone=6282174694672&text='+rows[j].kodeproduk+'" target="_blank"><i class="fa fa-whatsapp"</i></a></span>';
                        html += '</tr>';
                        html += '</tbody>';
                        }
                        html += '</table></div>';
                        $(".pulsa-harga").append(html);
                    }

                    for (var i = 0; i < data.ppob.length; i++) {
                        var namaoperator = data.ppob[i].namaoperator;
                        var rows         = data.ppob[i].data;
                        var html         = '<div class="table-header" id="big" style="line-height:25px"><a href="#pulsa">'+namaoperator+'</a></div>';
                        html += '<div class="table-responsive">';
                        html += '<table id="tableprodukvgame1" class="table table-striped table-bordered table-hover">';
                        html += '<thead><tr><th style="padding:3px;width:20%">Kode</th><th style="padding:3px;width:55%">Produk</th><th style="padding:3px;width:10%;text-align: center;">Trx</th></tr></thead>';
                        for (var j = 0; j < rows.length; j++) {

                        html += '<tbody>';
                        html += '<tr>';
                        html += '<td>'+rows[j].kodeproduk+'</td>';
                        html += '<td style="padding:3px">'+rows[j].namaproduk+'</td>';
						
                        html += '<td style="padding:3px;text-align: center;"><span class="label label-success"><a href="https://api.whatsapp.com/send?phone=6282174694672&text='+rows[j].kodeproduk+'" target="_blank"><i class="fa fa-whatsapp"</i></a></span>';
                        html += '</tr>';
                        html += '</tbody>';
                        }
                        html += '</table></div>';
                        $(".ppob-harga").append(html);
                    }

                    for (var i = 0; i < data.game.length; i++) {
                        var namaoperator = data.game[i].namaoperator;
                        var rows         = data.game[i].data;
                        var html         = '<div class="table-header" id="big" style="line-height:25px"><a href="#pulsa">'+namaoperator+'</a></div>';
                        html += '<div class="table-responsive">';
                        html += '<table id="tableprodukvgame1" class="table table-striped table-bordered table-hover">';
                        html += '<thead><tr><th style="padding:3px;width:20%">Kode</th><th style="padding:3px;width:55%">Produk</th><th style="padding:3px;width:10%;text-align: center;">Trx</th></tr></thead>';
                        for (var j = 0; j < rows.length; j++) {

                        html += '<tbody>';
                        html += '<tr>';
                        html += '<td>'+rows[j].kodeproduk+'</td>';
                        html += '<td style="padding:3px">'+rows[j].namaproduk+'</td>';
						
                            html += '<td style="padding:3px;text-align: center;"><span class="label label-success"><a href="https://api.whatsapp.com/send?phone=6282174694672&text='+rows[j].kodeproduk+'" target="_blank"><i class="fa fa-whatsapp"</i></a></span>';

                        html += '</tr>';
                        html += '</tbody>';
                        }
                        html += '</table></div>';
                        $(".game-harga").append(html);
                    }

                }
            });
        }else{
            var pulsa =  JSON.parse(localStorage.getItem('pulsa'));
            for (var i = 0; i < pulsa.length; i++) {
                var namaoperator = pulsa[i].namaoperator;
                var rows         =pulsa[i].data;
                var html         = '<div class="table-header" id="big" style="line-height:25px"><a href="#pulsa">'+namaoperator+'</a></div>';
                html += '<div class="table-responsive">';
                html += '<table id="tableprodukvgame1" class="table table-striped table-bordered table-hover">';
                html += '<thead><tr><th style="padding:3px;width:20%">Kode</th><th style="padding:3px;width:55%">Produk</th><th style="padding:3px;width:10%;text-align: center;">Trx</th></tr></thead>';
                for (var j = 0; j < rows.length; j++) {

                html += '<tbody>';
                html += '<tr>';
                html += '<td>'+rows[j].kodeproduk+'</td>';
                html += '<td style="padding:3px">'+rows[j].namaproduk+'</td>';
                if(rows[j].gangguan=="Ya"){
                    html += '<td style="padding:3px;text-align: center;"><span class="label label-danger">'+rows[j].gangguan+'</span>';
                }else{
                    html += '<td style="padding:3px;text-align: center;"><span class="label label-success">'+rows[j].gangguan+'</span>';
                }
                if(rows[j].kosong=="Ya"){
                    html += '<td style="padding:3px;text-align: center;"><span class="label label-success">'+rows[j].kosong+'</span>';
                }else{
                    html += '<td style="padding:3px;text-align: center;"><span class="label label-danger">'+rows[j].kosong+'</span>';
                }
                html += '</tr>';
                html += '</tbody>';
                }
                html += '</table></div>';
                $(".pulsa-harga").append(html);
            }

            var ppob =  JSON.parse(localStorage.getItem('ppob'));
            for (var i = 0; i < ppob.length; i++) {
                var namaoperator = ppob[i].namaoperator;
                var rows         = ppob[i].data;
                var html         = '<div class="table-header" id="big" style="line-height:25px"><a href="#pulsa">'+namaoperator+'</a></div>';
                html += '<div class="table-responsive">';
                html += '<table id="tableprodukvgame1" class="table table-striped table-bordered table-hover">';
                html += '<thead><tr><th style="padding:3px;width:20%">Kode</th><th style="padding:3px;width:55%">Produk</th><th style="padding:3px;width:10%;text-align: center;">Trx</th></tr></thead>';
                for (var j = 0; j < rows.length; j++) {

                html += '<tbody>';
                html += '<tr>';
                html += '<td>'+rows[j].kodeproduk+'</td>';
                html += '<td style="padding:3px">'+rows[j].namaproduk+'</td>';
                html += '<td style="padding:3px;text-align:right">'+Intl.NumberFormat().format(rows[j].harga)+'</td>';
                if(rows[j].gangguan=="Ya"){
                    html += '<td style="padding:3px;text-align: center;"><span class="label label-danger">'+rows[j].gangguan+'</span>';
                }else{
                    html += '<td style="padding:3px;text-align: center;"><span class="label label-success">'+rows[j].gangguan+'</span>';
                }
                if(rows[j].kosong=="Ya"){
                    html += '<td style="padding:3px;text-align: center;"><span class="label label-success">'+rows[j].kosong+'</span>';
                }else{
                    html += '<td style="padding:3px;text-align: center;"><span class="label label-danger">'+rows[j].kosong+'</span>';
                }
                html += '</tr>';
                html += '</tbody>';
                }
                html += '</table></div>';
                $(".ppob-harga").append(html);
            }

            var game =  JSON.parse(localStorage.getItem('game'));
            for (var i = 0; i < game.length; i++) {
                var namaoperator = game[i].namaoperator;
                var rows         = game[i].data;
                var html         = '<div class="table-header" id="big" style="line-height:25px"><a href="#pulsa">'+namaoperator+'</a></div>';
                html += '<div class="table-responsive">';
                html += '<table id="tableprodukvgame1" class="table table-striped table-bordered table-hover">';
                html += '<thead><tr><th style="padding:3px;width:20%">Kode</th><th style="padding:3px;width:55%">Produk</th><th style="padding:3px;width:10%;text-align: center;">Trx</th></tr></thead>';
                for (var j = 0; j < rows.length; j++) {

                html += '<tbody>';
                html += '<tr>';
                html += '<td>'+rows[j].kodeproduk+'</td>';
                html += '<td style="padding:3px">'+rows[j].namaproduk+'</td>';
                html += '<td style="padding:3px;text-align:right">'+Intl.NumberFormat().format(rows[j].harga)+'</td>';
                if(rows[j].gangguan=="Ya"){
                    html += '<td style="padding:3px;text-align: center;"><span class="label label-danger">'+rows[j].gangguan+'</span>';
                }else{
                    html += '<td style="padding:3px;text-align: center;"><span class="label label-success">'+rows[j].gangguan+'</span>';
                }
                if(rows[j].kosong=="Ya"){
                    html += '<td style="padding:3px;text-align: center;"><span class="label label-success">'+rows[j].kosong+'</span>';
                }else{
                    html += '<td style="padding:3px;text-align: center;"><span class="label label-danger">'+rows[j].kosong+'</span>';
                }
                html += '</tr>';
                html += '</tbody>';
                }
                html += '</table></div>';
                $(".game-harga").append(html);
            }
        }
