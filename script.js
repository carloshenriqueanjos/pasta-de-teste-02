const tbody = document.querySelector("tbody");

const x = {"fisrtName":["carlos","maria", "joao"]};

function table() {
    let tr = document.createElement('tr');

    tr.innerHTML = `
    <td>${x.fisrtName[0]}</td>
    <td>${x.fisrtName[1]}</td>
    <td>${x.fisrtName[2]}</td>
    `
    tbody.appendChild(tr);
}

table()