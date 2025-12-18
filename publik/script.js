// --- SIMULASI PYTHON INPUT/OUTPUT ---

function runPython() {
    const runBtn = document.getElementById('runBtn');
    const outputDiv = document.getElementById('colabOutput');
    const inputField = document.getElementById('pythonInput');
    const finalResult = document.getElementById('finalResult');

    // 1. Efek Loading pada tombol Play
    runBtn.innerHTML = '<div class="spinning"></div>'; // Ubah icon jadi spinner
    
    // 2. Reset tampilan output
    outputDiv.style.display = 'none';
    finalResult.innerHTML = '';
    inputField.value = '';
    inputField.disabled = false;

    // 3. Simulasi delay eksekusi (biar terasa seperti compile)
    setTimeout(() => {
        // Tampilkan area output
        outputDiv.style.display = 'flex';
        
        // Kembalikan tombol ke icon Play
        runBtn.innerHTML = '<i class="ri-play-fill"></i>';
        
        // Fokuskan kursor ke input box
        inputField.focus();
    }, 800);

    // 4. Event Listener saat user menekan ENTER
    inputField.onkeydown = function(event) {
        if (event.key === "Enter") {
            const nama = inputField.value;
            
        

            // Matikan input field agar tidak bisa diedit lagi
            inputField.disabled = true;
            inputField.style.borderColor = "transparent";
            inputField.style.background = "transparent";
            inputField.style.paddingLeft = "0";

            // Tampilkan hasil print f-string
            finalResult.innerHTML = `Halo, ${nama}! Selamat belajar Python.`;
        }
    };
}

/* --- BAGIAN 2: POPUP TEAM (MODAL) --- */
document.addEventListener("DOMContentLoaded", () => {
    // Ambil elemen modal & tombol close
    const modal = document.getElementById("modalTeam");
    const modalImg = document.getElementById("modalImg");
    const modalName = document.getElementById("modalName");
    const modalNim = document.getElementById("modalNim");
    const closeBtn = document.querySelector(".close-btn");

    // Ambil semua kartu tim
    const teamCards = document.querySelectorAll(".card");

    // Tambahkan event 'click' ke setiap kartu
    teamCards.forEach((card) => {
        card.addEventListener("click", function () {
            // Ambil data dari dalam kartu yang diklik
            // Menggunakan querySelector pada 'this' (kartu yang dipencet)
            const imgElement = this.querySelector("img");
            const nameElement = this.querySelector("h4");
            const nimElement = this.querySelector("p");

            // Masukkan data ke dalam Modal
            if (imgElement) modalImg.src = imgElement.src;
            if (nameElement) modalName.innerText = nameElement.innerText;
            if (nimElement) modalNim.innerText = nimElement.innerText;

            // Tampilkan Modal
            modal.style.display = "flex";
        });
    });

    // Fungsi Menutup Modal (Tombol X)
    if (closeBtn) {
        closeBtn.onclick = function () {
            modal.style.display = "none";
        };
    }

    // Fungsi Menutup Modal (Klik di luar area putih)
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});