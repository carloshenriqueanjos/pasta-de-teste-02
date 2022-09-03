const tbody = document.createElement('tbody');

const nomes = {"fisrtName":["carlos","maria", "joao"]};

function table() {
    let tr = document.createElement('tr');

    tr.innerHTML = `
    <td>${nomes.fisrtName[0]}</td>
    <td>${nomes.fisrtName[1]}</td>
    <td>${nomes.fisrtName[2]}</td>
    `
    tbody.appendChild(tr);
}

table()