const nomes = {"fisrtName":["carlos","maria", "joao"]};

function table() {
    let tr = document.createElement('tr');

    tr.innerHTML = `
    <td>${nomes.fisrtName[0]}</td>
    <td>${nomes.fisrtName[1]}</td>
    <td>${nomes.fisrtName[2]}</td>
    `
}

table()