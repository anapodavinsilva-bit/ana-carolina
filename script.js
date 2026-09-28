body {
    max-width: 100vw;


}
const botoes = document.querySelectorall("button");

     botoes.ForEach(function (botao) {
             let curtiu = false;
             botao.addEventlitener("click", botaoClicado ;
             function botaoClicado() {
                 console.log("fui clicado");
                 let texto = botao.querySelector("span");
                     if(curtiu === false) {
                     texto.textcontent++;
                     curtiu = true;
                     } else{
                     texto.textcontent--;
                     curtiu = false;
                     }
             }
})
