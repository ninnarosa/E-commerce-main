arrayProduto = [];

function compra() {
    const produto1 = document.getElementById('id').value;
    const produto2 = document.getElementById('id').value;
    const produto3 = document.getElementById('id').value;
    const produto4 = document.getElementById('id').value;
    const produto5 = document.getElementById('id').value;
    const produto6 = document.getElementById('id').value;

    arrayProduto.push(produto);
    arrayQtdade.push(quantidade);

    localStorage.setItem("produto1", JSON.stringify(arrayProduto));
    localStorage.setItem("produto2", JSON.stringify(arrayQtdade));
}