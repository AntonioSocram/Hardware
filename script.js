```javascript
// BOTÃO VOLTAR AO TOPO

window.addEventListener("scroll", function() {

    const botao = document.getElementById("topo");

    if (window.scrollY > 400) {

        botao.style.display = "block";

    } else {

        botao.style.display = "none";

    }

});


function voltarTopo() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}



// EFEITO DE TOQUE/CLIQUE NOS CARDS

const cards = document.querySelectorAll(".card");


cards.forEach(function(card) {

    card.addEventListener("click", function() {

        card.style.transform = "scale(0.97)";


        setTimeout(function() {

            card.style.transform = "";

        }, 150);

    });

});
```
