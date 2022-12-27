document.querySelector("#option a").forEach((a) => {
    // jika di klik akan menjalankan fungsi coputerchoise()
    a.addEventListener("click", (element) => {
        computerchoise(element);
    })
})
function computerchoise(element) {
    // tangkap pilihan user
    let pilihanUser = element.target.innerText;

    // menangkap element result dengan queryselector untuk menampung 
    // nilai hasil dari game
    let pilihanComputer = document.querySelector("#result");

    // membuat array pilihan umtuk komputer
    let choise = ["Rock", "Paper", "Scissors"];

    // pilihan random untuk komputer
    pilihanComputer.innerHTML = choise[Math.round(Math.random() * choise.length)] 
    pilihanComputer = pilihanComputer.innerHTML;

    // jika pilihan komputer sama dengan pilihan user(Draw)
    if (pilihanUser == pilihanComputer) {
        alert("DRAW");
    }

    // Jika pilihan user yang menang
    if (pilihanUser == "Rock" && pilihanComputer == "Scissors") {
        alert("YOU WIN");
    }else if(pilihanUser == "Paper" && pilihanComputer == "Rock") {
        alert("YOU WIN");
    }else if(pilihanUser == "Scissors" && pilihanComputer == "Paper") {
        alert("YOU WIN");
    }else{
        alert("Tidak ada pilihan");
    }

    // jika pilihan komputer yang menang
    if (pilihanUser == "Scissors" && pilihanComputer == "Rock") {
        alert("COMPUTER WIN");
    }else if (pilihanUser == "Paper" && pilihanComputer == "Scissors") {
        alert("COMPUTER WIN");
    }else if (pilihanUser == "Scissors" && pilihanComputer == "Rock") {
        alert("COMPUTER WIN");
    }else{
        alert("Tidak ada pilihan");
    }
}