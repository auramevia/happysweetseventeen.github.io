const text = "Hallo sayanggkuu selamat bertambahnya usia yang ke 17 tahun \n\n Semoga di hari kelahiranmu ini kamu dapat menjadi pribadi yang lebih baik lagi , lebih rajin sekolahnya , dapat mewujudkan cita-cita yang kamu inginkan dan selalu ingat pada tuhan \n\n Aku harap aku bisa menemani kamu sampai kamu menjadi orang yang sukses dan menjadikan aku sebagai tujuanmu nanti .. i wish that \n\n Aku cuma mau kamu tahu...\n\nKalau hadirnya kamu di hidup aku adalah hadiah terindah yang pernah Tuhan kasih. Kamu bukan cuma tempat pulang, tapi juga alasan aku semangat setiap hari.\n\nTerima kasih sudah selalu ada, selalu sabar, selalu membuat aku merasa cukup.\n\n Aku sayang kamu. Selalu. 💗 \n\n Terima kasih dan Selamat Ulang Tahun Manusia Favoritku 💗";

let index = 0;

function typeText(){
    if(index < text.length){
        document.getElementById("text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 40);
    }
}

typeText();

function back(){
    window.location.href = "page1.html";
}

/* HEARTS */
function createHeart(){
    const heart = document.createElement("span");
    heart.innerHTML = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (2 + Math.random() * 4) + "s";
    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 300);
