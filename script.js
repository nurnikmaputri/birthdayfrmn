// ===============================
// AMBIL ELEMENT HALAMAN
// ===============================

const opening = document.getElementById("opening");
const birthday = document.getElementById("birthday");
const letter = document.getElementById("letter");
const final = document.getElementById("final");


// ===============================
// PINDAH HALAMAN
// ===============================

function changeScreen(from, to) {
    from.classList.remove("active");

    setTimeout(() => {
        to.classList.add("active");
    }, 500);
}


// ===============================
// TOMBOL "BUKA SURPRISE"
// ===============================

function startSurprise() {

    // Pindah dari halaman awal
    // ke halaman birthday
    changeScreen(opening, birthday);

    // Jalankan confetti
    setTimeout(() => {
        createConfetti();
    }, 700);
}


// ===============================
// KLIK LILIN
// ===============================

function blowCandle() {

    const flame = document.querySelector(".flame");
    const candleText = document.getElementById("candleText");

    // Ubah api menjadi asap
    flame.innerHTML = "💨";

    // Ubah tulisan
    candleText.innerHTML =
        "Wish granted... ✨ Semoga semua harapanmu tercapai!";

    // Confetti
    createConfetti();
}


// ===============================
// BUKA SURAT
// ===============================

function showLetter() {

    changeScreen(birthday, letter);

    // Tunggu sebentar lalu mulai mengetik
    setTimeout(() => {
        typeMessage();
    }, 1000);
}


// ===============================
// EFEK MENGETIK SURAT
// ===============================

function typeMessage() {

    const text = `
Selamat ulang tahun, Firman! 🎂✨

Hari ini bukan cuma tentang bertambahnya umur,
tapi juga tentang semua perjalanan yang sudah kamu lewati
sampai akhirnya berada di titik ini.

Semoga apa pun yang sedang kamu perjuangkan
bisa menemukan jalannya.

Semoga hari-harimu dipenuhi hal-hal baik,
orang-orang baik,
dan alasan-alasan kecil untuk tetap tersenyum.

Jangan lupa bahagia.
Jangan terlalu keras sama diri sendiri.

Dan semoga umur yang baru ini
membawa lebih banyak cerita indah
yang suatu hari nanti akan kamu ingat
dengan senyuman.

Happy Birthday, Firman. 🎉❤️
`;

    const element = document.getElementById("typingText");

    let index = 0;

    // Kosongkan tulisan sebelumnya
    element.innerHTML = "";

    // Fungsi mengetik
    function typing() {

        if (index < text.length) {

            element.innerHTML += text.charAt(index);

            index++;

            // Kecepatan mengetik
            setTimeout(typing, 25);
        }
    }

    typing();
}


// ===============================
// HALAMAN TERAKHIR
// ===============================

function showFinal() {

    changeScreen(letter, final);

    // Confetti setelah masuk halaman terakhir
    setTimeout(() => {
        createConfetti();
        createConfetti();
    }, 700);
}


// ===============================
// MEMBUAT CONFETTI
// ===============================

function createConfetti() {

    const container =
        document.getElementById("confetti");

    // Jumlah confetti
    for (let i = 0; i < 100; i++) {

        const piece =
            document.createElement("div");

        // Tambahkan class CSS
        piece.classList.add("confetti");

        // Posisi horizontal random
        piece.style.left =
            Math.random() * 100 + "vw";

        // Kecepatan jatuh random
        piece.style.animationDuration =
            (Math.random() * 3 + 2) + "s";

        // Rotasi random
        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;


        // Pilihan warna
        const colors = [
            "#ff4ecd",
            "#8b5cf6",
            "#ffd166",
            "#06d6a0",
            "#4cc9f0",
            "#ffffff"
        ];

        // Ambil warna random
        piece.style.background =
            colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ];


        // Masukkan confetti ke halaman
        container.appendChild(piece);


        // Hapus setelah 5 detik
        setTimeout(() => {
            piece.remove();
        }, 5000);
    }
}


// ===============================
// EFEK BINTANG SAAT KLIK
// ===============================

document.addEventListener("click", function(event) {

    const star = document.createElement("div");

    // Isi bintang
    star.innerHTML = "✦";

    // Posisi bintang mengikuti mouse
    star.style.position = "fixed";

    star.style.left =
        event.clientX + "px";

    star.style.top =
        event.clientY + "px";

    // Tampilan
    star.style.color = "#ffffff";

    star.style.fontSize = "20px";

    // Supaya tidak mengganggu klik
    star.style.pointerEvents = "none";

    // Paling depan
    star.style.zIndex = "9999";


    // Masukkan ke halaman
    document.body.appendChild(star);


    // Animasi bintang
    star.animate(
        [
            {
                transform: "scale(0)",
                opacity: 1
            },

            {
                transform:
                    "scale(2) translateY(-30px)",
                opacity: 0
            }
        ],
        {
            duration: 700,
            easing: "ease-out"
        }
    );


    // Hapus bintang
    setTimeout(() => {
        star.remove();
    }, 700);

});