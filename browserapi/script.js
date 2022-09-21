var inputNIM = document.getElementById("nim");
var inputNama = document.getElementById("nama");
var inputJurusan = document.getElementById("jurusan");
var submitBtn = document.getElementById("submitBtn");

function tampilkanData() {
    const dataSaved = localStorage.getItem("dataSaved");
    var dataSavedObject = JSON.parse(dataSaved);
    if (dataSavedObject === null) {
        dataSavedObject = [];
    }


    const tabel = document.getElementById("tbody1");
    var isiTabel = ``;

    dataSavedObject.forEach(function (dataSavedObjectArray, index) {
        isiTabel += `
                    <tr>
                        <th scope="row">${index + 1}</th>
                        <td>${dataSavedObjectArray.nim}</td>
                        <td>${dataSavedObjectArray.nama}</td>
                        <td>${dataSavedObjectArray.jurusan}</td>
                    </tr>
                    `;
    });

    tabel.innerHTML = isiTabel;
}

tampilkanData();

submitBtn.onclick = function (e) {
    const nim = inputNIM.value;
    const nama = inputNama.value;
    const jurusan = inputJurusan.value;

    const pesan = "data " + nama + nim + jurusan + " telah ditambahkan";

    const data = {
        nim,
        nama,
        jurusan,
    };

    alert(pesan);

    const dataSaved = localStorage.getItem("dataSaved");
    const dataSavedObjectArray = JSON.parse(dataSaved);

    if (dataSaved === null) {
        localStorage.setItem("dataSaved", JSON.stringify([data]));
    }
    else {
        dataSavedObjectArray.push(data);
        localStorage.setItem("dataSaved", JSON.stringify(dataSavedObjectArray));
    }

    console.log("data tersimpan", dataSaved);
    console.log("dataSavedObjectArray", dataSavedObjectArray);
    tampilkanData();
};