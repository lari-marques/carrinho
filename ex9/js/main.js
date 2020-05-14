document.onkeydown = function(event){
    //console.log(event.keyCode);
    carro = document.getElementById('carro');
    posicao_Y_actual = carro.offsetTop;
    posicao_X_actual = carro.offsetLeft;
    altura_janela = window.innerHeight;
    largura_janela = window.innerWidth;

    velocidade = 10;

    console.log(posicao_Y_actual);
    console.log(posicao_X_actual);
    switch(event.keyCode){
        case 38 : {
            nova_posicao_Y = posicao_Y_actual - velocidade;
            if(nova_posicao_Y <= -100){
                nova_posicao_Y = altura_janela;
            }
            carro.src="images/ferrari_up.png";
            carro.style.top = nova_posicao_Y+"px";
            carro.style.height="100px";
            carro.style.width="auto";
        } break;

        case 40 : {
            nova_posicao_Y = posicao_Y_actual + velocidade;
            
            if(nova_posicao_Y >= altura_janela){
                nova_posicao_Y = -100;
            }
            carro.src="images/ferrari_down.png";
            carro.style.top = nova_posicao_Y+"px";
            carro.style.height="100px";
            carro.style.width="auto";
        } break;

        case 39 : {
            nova_posicao_X = posicao_X_actual + velocidade;

            if(nova_posicao_X >= largura_janela){
                nova_posicao_X = -100;
            }
            carro.src="images/ferrari_right.png";
            carro.style.left = nova_posicao_X+"px";
            carro.style.width="100px";
            carro.style.height="auto";
        } break;

        case 37 : {
            nova_posicao_X = posicao_X_actual - velocidade;

            if(nova_posicao_X <= -100){
                nova_posicao_X = largura_janela;
            }
            carro.src="images/ferrari_left.png";
            carro.style.left = nova_posicao_X+"px";
            carro.style.height="auto";
            carro.style.width="100px";
        } break;

    }

}