function validateDate() {
    var inputDate = document.getElementById("tanggal").value;
    var regex = /^\d{4}-\d{2}-\d{2}$/;

    if (!regex.test(inputDate)) {
        alert("Format tanggal harus yyyy-mm-dd");
    } else {
        alert("Tanggal yang dipilih: " + inputDate);
        // Di sini Anda bisa melanjutkan dengan tindakan lain setelah mendapatkan tanggal yang valid
    }
}

// fungsi satu checkbox
var checkboxes = document.getElementsByName("gender");

// Tambahkan event listener ke setiap checkbox
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("change", function() {
        // Jika checkbox yang sedang dipilih tidak tercentang, maka kembalikan saja
        if (!this.checked) return;

        // Jika checkbox yang sedang dipilih tercentang, maka hilangkan centang dari semua checkbox yang lain
        checkboxes.forEach(function(otherCheckbox) {
            if (otherCheckbox !== checkbox) {
                otherCheckbox.checked = false;
            }
        });
    });
});

// Fungsi untuk menampilkan atau menyembunyikan tombol back-to-top
function toggleBackToTopButton() {
    var button = document.getElementById("back-to-top-btn");
    if (window.scrollY > 100) { // Jika pengguna telah menggulir ke bawah
        button.style.display = "block"; // Tampilkan tombol
    } else {
        button.style.display = "none"; // Sembunyikan tombol
    }
}

// Fungsi untuk scroll ke atas dengan efek halus
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// fungsi slide banner

function showBanner() {
    document.getElementsByClassName('banner-img')[0].style.display = 'url(images/fate1.png)';
}
let indexSlide = 1;

function nextSlide(n) {
    showBanner(indexSlide += n);
}

function showBanner(indexBanner) {
    let listImage = document.getElementsByClassName('banner-img');
    if (indexBanner > listImage.length) indexSlide = 1;

    let index = 0;
    while (index < listImage.length) {
        listImage[index].style.display = 'none';
        index++;
    }

    listImage[indexSlide - 1].style.display = 'block';
    console.log('Index ' + (indexSlide - 1) + ' Adalah Index Image Yang di tampilkan');
}

setInterval(() => nextSlide(1), 3000);
