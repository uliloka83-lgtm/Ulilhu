document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.getElementById('navbar');

    // Fungsi untuk mengubah tampilan navigasi saat menu-toggle diklik
    menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });

    // Opsional: Sembunyikan menu saat link diklik (untuk mobile)
    const navLinks = document.querySelectorAll('#navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navbar.classList.remove('active');
            }
        });
    });

    // Menambahkan aksi ke tombol "Pesan Sekarang" (simulasi)
    const orderButtons = document.querySelectorAll('.add-to-cart-btn');
    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            const cakeName = this.parentElement.querySelector('h4').textContent;
            alert(`Anda telah memilih ${cakeName}. Silakan hubungi kami untuk pemesanan!`);
            // Di proyek nyata, Anda akan mengarahkan ini ke halaman checkout/form order.
        });
    });
});
