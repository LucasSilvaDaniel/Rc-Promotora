function mostraEscondeResposta(id) {
    const resposta = document.getElementById(`resposta${id}`);
    const icon = document.getElementById(`icon${id}`);
    const pergunta = document.getElementById(`pergunta${id}`);
    const numeroCard = document.getElementById(`numero${id}`);
    const itens = document.querySelectorAll(`.respostaCard`);
    const mais = document.querySelectorAll(`.resp`);
    const perguntas = document.querySelectorAll(`.texto_cards`);
    const cards = document.querySelectorAll(`.cardDuvidas`);

    if (resposta.style.display === "none" || resposta.style.display === "") {
        itens.forEach((item, index) => {
            item.style.display = "none";
            item.style.backgroundColor = "";
            perguntas[index].style.backgroundColor = "";
            perguntas[index].style.color = "";
            document.getElementById(`numero${index + 1}`).style.color = "";
            cards[index].classList.remove("active");
            document.getElementById(`icon${index + 1}`).textContent = "+";
        });

        resposta.style.display = "block";
        resposta.style.backgroundColor = "#1766EF";
        resposta.style.color = "#fff";

        icon.textContent = "-";
        pergunta.style.backgroundColor = "#1766EF";
        pergunta.style.color = "#fff";
        numeroCard.style.color = "#fff";
        cards[id - 1].classList.add("active");
    } else {
        resposta.style.display = "none";
        icon.textContent = "+";

        pergunta.style.backgroundColor = "";
        pergunta.style.color = "";
        numeroCard.style.color = "";
        cards[id - 1].classList.remove("active");
    }
}


document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const cpf = document.getElementById('cpf').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const convenio = document.getElementById('convenio').value;

    if (!name || !cpf || !telefone || !convenio) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const whatsappURL = `https://wa.me/48999585803?text=${encodeURIComponent(
        `Olá Raphael, eu sou o(a) ${name} do telefone ${telefone}, meu CPF é ${cpf} e venho te contatar a respeito de ${convenio}`
    )}`;
    window.location.href = whatsappURL;
});

document.getElementById('cpf').addEventListener('input', function (event) {
    let input = event.target.value.replace(/\D/g, "");
    if (input.length > 11) input = input.substring(0, 11);
    event.target.value = input;
});

document.getElementById('telefone').addEventListener('input', function (event) {
    let input = event.target.value.replace(/\D/g, ""); 
    if (input.length > 11) input = input.substring(0, 11); 

    let formattedValue = '';

    if (input.length > 2) {
        formattedValue += `(${input.substring(0, 2)}) `; 
        input = input.substring(2);
    }
    if (input.length > 5) {
        formattedValue += `${input.substring(0, 5)}-`;
        input = input.substring(5);
    }
    formattedValue += input; 

    event.target.value = formattedValue;
});
