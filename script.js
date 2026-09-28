const botoes = document.querySelectorall("button");

     botoes.ForEach(function (botao) {
             let curtiu = false;
             botao.addEventlitener("click", botaoClicado ;
             function botaoClicado() {
                 console.log("fui clicado");
                 let texto = botao.querySelector("span");
                     if(curtiu === false) {

                     }
                     texto.textContent++;
             })
             }  
function mudaTema(){
     const corpoPagina = document.body;
          if (corpoPagina.classList.contains("tema-escuro")) {
           corpoPagina.classList.remove("tema-escuro");
          } else {
                    corpoPagina.classList.add("tema-escuro");     
          }
}
