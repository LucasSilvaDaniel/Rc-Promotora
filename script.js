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

    const name = document.getElementById('name').value;
    const cpf = document.getElementById('cpf').value;
    const convenio = document.getElementById('convenio').value;

    const whatsappURL = `https://wa.me/48999585803?text=${encodeURIComponent(`Olá Raphael, eu sou o(a) ${name}, meu CPF é ${cpf} e venho te contatar a respeito de ${convenio}`)}`;
    window.location.href = whatsappURL;
});
