// Jam Real-time
function updateClock() {
    const now = new Date();
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' };
    const el = document.getElementById('current-time');
    if(el) el.innerText = now.toLocaleString('id-ID', options) + " WIB";
}
setInterval(updateClock, 1000);
updateClock();

// Pencarian Berdasarkan Kategori
function searchBook() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const grids = document.querySelectorAll('.book-grid');
    
    grids.forEach(grid => {
        const cards = grid.querySelectorAll('.book-card');
        let hasMatch = false;

        cards.forEach(card => {
            const title = card.querySelector('h3').innerText.toLowerCase();
            const author = card.querySelector('p').innerText.toLowerCase();
            
            if (title.includes(input) || author.includes(input)) {
                card.style.display = "flex";
                hasMatch = true;
            } else {
                card.style.display = "none";
            }
        });

        // Sembunyikan judul kategori jika tidak ada buku yang cocok
        const title = grid.previousElementSibling;
        title.style.display = hasMatch ? "flex" : "none";
    });
}

// PDF Reader
function openReader(url, title) {
    const modal = document.getElementById('readerModal');
    const iframe = document.getElementById('pdfFrame');
    document.getElementById('modalTitle').innerText = title;
    iframe.src = url;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeReader() {
    const modal = document.getElementById('readerModal');
    const iframe = document.getElementById('pdfFrame');
    modal.style.display = 'none';
    iframe.src = "";
    document.body.style.overflow = 'auto';
}

window.onclick = (e) => { if(e.target == document.getElementById('readerModal')) closeReader(); }