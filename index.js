function adicionarAluno() {
    const nome = document.getElementById('nome').value;
    const matricula = document.getElementById('matricula').value;
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);

    if (isNaN(nota1) || isNaN(nota2) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        alert("Por favor, insira notas válidas de 0 a 10.");
        return;
    }

    const media = (nota1 + nota2) / 2;
    const status = media >= 5 ? "Aprovado" : "Reprovado";

    const tabelaAlunos = document.getElementById('tabelaAlunos');
    const row = tabelaAlunos.insertRow();
    row.insertCell(0).innerText = nome;
    row.insertCell(1).innerText = matricula;
    row.insertCell(2).innerText = nota1.toFixed(2);
    row.insertCell(3).innerText = nota2.toFixed(2);
    row.insertCell(4).innerText = media.toFixed(2);
    row.insertCell(5).innerText = status;

    document.getElementById('formularioAluno').reset();
}
