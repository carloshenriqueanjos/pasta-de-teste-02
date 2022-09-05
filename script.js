const nomes = {"fisrtName":["carlos","maria", "joao"]};

function table() {
    let table = document.createElement("table");

    table.innerHTML = `
    <tr>
    <th>${nomes.fisrtName[0]}</th>
    <th>${nomes.fisrtName[1]}</th>
    <th>${nomes.fisrtName[2]}</th>
    <tr>
    `
}

table()
