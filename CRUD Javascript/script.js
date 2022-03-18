// Menampilkan Data Baru
var data = [];

function tampil(){
    var tabel = document.getElementById("tabel");
    tabel.innerHTML = "<tr><th>No</th><th>Tugas</th><th>Action</th></tr>";
    for ( let i = 0; i < data.length; i++ ) {
        var btnEdit = "<button class='btn-edit btn btn-success' href='#' onclick='edit(" + i + ")'>Edit</button>";
        var btnHapus = "<button class='btn-hapus btn btn-danger' href='#' onclick='hapus(" + i + ")'>Hapus</button>";
        j = i + 1;
        tabel.innerHTML += "<tr><td>" + j + "</td><td>" + data[i] + "</td><td>" + btnEdit + " " + btnHapus + "</tr>";
    }
}

function tambah(){
    var input = document.querySelector("input[name=tugas]");
    data.push(input.value);
    tampil();
}

function edit(id) {
    var baru = prompt("Edit", data[id]);
    data[id] = baru;
    tampil();
}
function hapus(id) {
    data.pop(id);
    tampil();
}
tampil();