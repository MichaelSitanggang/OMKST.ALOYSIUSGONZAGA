document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Pesan berhasil dikirim!');
});

// function toggleMenu() {
//     const navbarLinks = document.querySelector('.navbar-links');
//     navbarLinks.classList.toggle('active');
// }

function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('show');
}


