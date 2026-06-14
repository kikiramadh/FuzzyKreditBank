function prosesFuzzy(){

    let penghasilan =
    parseFloat(document.getElementById("penghasilan").value);

    let lamaKerja =
    parseFloat(document.getElementById("lamaKerja").value);

    let riwayat =
    parseFloat(document.getElementById("riwayat").value);

    let hutang =
    parseFloat(document.getElementById("hutang").value);

    // Fuzzifikasi penghasilan
    let penghasilanRendah = 0;
    let penghasilanSedang = 0;
    let penghasilanTinggi = 0;


    // RENDAH
    if (penghasilan <= 5){

        penghasilanRendah = 1;
    }

    else if (penghasilan > 5 && penghasilan <= 7){

        penghasilanRendah =
        (7 - penghasilan) / (7 - 5);
    }


    // SEDANG
    if (penghasilan > 5 && penghasilan <= 8){

        penghasilanSedang =
        (penghasilan - 5) / (8 - 5);
    }

    else if (penghasilan > 8 && penghasilan <= 11){

        penghasilanSedang =
        (11 - penghasilan) / (11 - 8);
    }


    // TINGGI
    if (penghasilan > 9 && penghasilan <= 11){

        penghasilanTinggi =
        (penghasilan - 9) / (11 - 9);
    }

    else if (penghasilan >= 11){

        penghasilanTinggi = 1;
    }

    // Fuzzifikasi lama kerja
    let kerjaBaru = 0;
    let kerjaCukup = 0;
    let kerjaLama = 0;


    // BARU
    if (lamaKerja <= 3){

        kerjaBaru = 1;
    }

    else if (lamaKerja > 3 && lamaKerja <= 5){

        kerjaBaru =
        (5 - lamaKerja) / (5 - 3);
    }


    // CUKUP
    if (lamaKerja > 3 && lamaKerja <= 6){

        kerjaCukup =
        (lamaKerja - 3) / (6 - 3);
    }

    else if (lamaKerja > 6 && lamaKerja <= 9){

        kerjaCukup =
        (9 - lamaKerja) / (9 - 6);
    }


    // LAMA
    if (lamaKerja > 7 && lamaKerja <= 9){

        kerjaLama =
        (lamaKerja - 7) / (9 - 7);
    }

    else if (lamaKerja >= 9){

        kerjaLama = 1;
    }

    // Fuzzfikasi riwayat
    let kreditBuruk = 0;
    let kreditSedang = 0;
    let kreditBaik = 0;


    // BURUK
    if (riwayat <= 50){

        kreditBuruk = 1;
    }

    else if (riwayat > 50 && riwayat <= 60){

        kreditBuruk =
        (60 - riwayat) / (60 - 50);
    }


    // SEDANG
    if (riwayat > 50 && riwayat <= 65){

        kreditSedang =
        (riwayat - 50) / (65 - 50);
    }

    else if (riwayat > 65 && riwayat <= 80){

        kreditSedang =
        (80 - riwayat) / (80 - 65);
    }


    // BAIK
    if (riwayat > 70 && riwayat <= 80){

        kreditBaik =
        (riwayat - 70) / (80 - 70);
    }

    else if (riwayat >= 80){

        kreditBaik = 1;
    }

    // Fuzzfikasi hutang
    let hutangRendah = 0;
    let hutangSedang = 0;
    let hutangTinggi = 0;


    // RENDAH
    if (hutang <= 30){

        hutangRendah = 1;
    }

    else if (hutang > 30 && hutang <= 40){

        hutangRendah =
        (40 - hutang) / (40 - 30);
    }


    // SEDANG
    if (hutang > 30 && hutang <= 50){

        hutangSedang =
        (hutang - 30) / (50 - 30);
    }

    else if (hutang > 50 && hutang <= 70){

        hutangSedang =
        (70 - hutang) / (70 - 50);
    }


    // TINGGI
    if (hutang > 60 && hutang <= 70){

        hutangTinggi =
        (hutang - 60) / (70 - 60);
    }

    else if (hutang >= 70){

        hutangTinggi = 1;
    }

    // Inferensi mamdani
    let r1 = Math.min(
        penghasilanTinggi,
        kreditBaik
    );

    let r2 = Math.min(
        penghasilanTinggi,
        hutangRendah
    );

    let r3 = Math.min(
        penghasilanSedang,
        kreditBaik
    );

    let r4 = Math.min(
        penghasilanRendah,
        hutangTinggi
    );

    let r5 = Math.min(
        kreditBuruk,
        hutangTinggi
    );

    let r6 = Math.min(
        kerjaLama,
        penghasilanTinggi
    );

    let r7 = Math.min(
        kerjaBaru,
        kreditBuruk
    );

    let r8 = Math.min(
        penghasilanSedang,
        hutangSedang
    );

    let r9 = Math.min(
        penghasilanTinggi,
        hutangTinggi
    );

    // KOMPOSISI MAX
    let ditolak = Math.max(
        r4,
        r5,
        r7
    );

    let dipertimbangkan = Math.max(
        r3,
        r8,
        r9
    );

    let disetujui = Math.max(
        r1,
        r2,
        r6
    );

    // DEFUZZIFIKASI
    let pembilang = 0;
    let penyebut = 0;



    for(let z = 0; z <= 100; z++){

        let muDitolak = 0;
        let muDipertimbangkan = 0;
        let muDisetujui = 0;

        // Ditolak
        if(z <= 40){

            muDitolak = 1;
        }

        else if(z > 40 && z <= 50){

            muDitolak =
            (50 - z) / (50 - 40);
        }

        // Dipertimbangkan
        if(z > 40 && z <= 60){

            muDipertimbangkan =
            (z - 40) / (60 - 40);
        }

        else if(z > 60 && z <= 80){

            muDipertimbangkan =
            (80 - z) / (80 - 60);
        }

        // Disetujui
        if(z > 70 && z <= 80){

            muDisetujui =
            (z - 70) / (80 - 70);
        }

        else if(z >= 80){

            muDisetujui = 1;
        }

        // Clipping
        let clipDitolak =
        Math.min(ditolak, muDitolak);

        let clipDipertimbangkan =
        Math.min(
            dipertimbangkan,
            muDipertimbangkan
        );

        let clipDisetujui =
        Math.min(
            disetujui,
            muDisetujui
        );

        // Agregrasu global max
        let alpha = Math.max(

            clipDitolak,

            clipDipertimbangkan,

            clipDisetujui
        );

        pembilang += z * alpha;

        penyebut += alpha;
    }



    let hasilCrisp =
    pembilang / penyebut;

    // hasil keputusan
    let keputusan = "";

    let warnaKeputusan = "";



    if (hasilCrisp >= 70){

        keputusan = "KREDIT DISETUJUI";

        warnaKeputusan = "disetujui";
    }

    else if (hasilCrisp >= 50){

        keputusan = "KREDIT DIPERTIMBANGKAN";

        warnaKeputusan = "dipertimbangkan";
    }

    else{

        keputusan = "KREDIT DITOLAK";

        warnaKeputusan = "ditolak";
    }

    // Output
    document.getElementById("hasil").innerHTML =

    `

    <div class="card hasil-akhir">

        <div class="status-keputusan ${warnaKeputusan}">
        ${keputusan}
        </div>

        <h3>Hasil Akhir</h3>

        <p>Nilai Crisp :
        ${hasilCrisp.toFixed(2)}</p>

    </div>



    <div class="card">

        <h3>Hasil Fuzzifikasi Penghasilan</h3>

        <p>Penghasilan Rendah :
        ${penghasilanRendah.toFixed(2)}</p>

        <p>Penghasilan Sedang :
        ${penghasilanSedang.toFixed(2)}</p>

        <p>Penghasilan Tinggi :
        ${penghasilanTinggi.toFixed(2)}</p>

    </div>



    <div class="card">

        <h3>Hasil Fuzzifikasi Lama Kerja</h3>

        <p>Lama Kerja Baru :
        ${kerjaBaru.toFixed(2)}</p>

        <p>Lama Kerja Cukup :
        ${kerjaCukup.toFixed(2)}</p>

        <p>Lama Kerja Lama :
        ${kerjaLama.toFixed(2)}</p>

    </div>



    <div class="card">

        <h3>Hasil Fuzzifikasi Riwayat Kredit</h3>

        <p>Riwayat Kredit Buruk :
        ${kreditBuruk.toFixed(2)}</p>

        <p>Riwayat Kredit Sedang :
        ${kreditSedang.toFixed(2)}</p>

        <p>Riwayat Kredit Baik :
        ${kreditBaik.toFixed(2)}</p>

    </div>



    <div class="card">

        <h3>Hasil Fuzzifikasi Rasio Hutang</h3>

        <p>Rasio Hutang Rendah :
        ${hutangRendah.toFixed(2)}</p>

        <p>Rasio Hutang Sedang :
        ${hutangSedang.toFixed(2)}</p>

        <p>Rasio Hutang Tinggi :
        ${hutangTinggi.toFixed(2)}</p>

    </div>



    <div class="card">

        <h3>Hasil Inferensi Mamdani</h3>

        <p>R1 : ${r1.toFixed(2)}</p>
        <p>R2 : ${r2.toFixed(2)}</p>
        <p>R3 : ${r3.toFixed(2)}</p>
        <p>R4 : ${r4.toFixed(2)}</p>
        <p>R5 : ${r5.toFixed(2)}</p>
        <p>R6 : ${r6.toFixed(2)}</p>
        <p>R7 : ${r7.toFixed(2)}</p>
        <p>R8 : ${r8.toFixed(2)}</p>
        <p>R9 : ${r9.toFixed(2)}</p>

    </div>



    <div class="card">

        <h3>Komposisi MAX</h3>

        <p>Ditolak :
        ${ditolak.toFixed(2)}</p>

        <p>Dipertimbangkan :
        ${dipertimbangkan.toFixed(2)}</p>

        <p>Disetujui :
        ${disetujui.toFixed(2)}</p>

    </div>



    <div class="card">

        <h3>Defuzzifikasi</h3>

        <p>Pembilang :
        ${pembilang.toFixed(2)}</p>

        <p>Penyebut :
        ${penyebut.toFixed(2)}</p>

        <p>Nilai Crisp :
        ${hasilCrisp.toFixed(2)}</p>

    </div>

    `;
}
