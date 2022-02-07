function imgSlider(intro, back, logos, link, contato){
    document.querySelector('.jogo').src = intro;
    document.getElementById('sobre_games').style.backgroundImage=back;
    document.querySelector('.logos_games').src = logos;
    document.querySelector('.video_yt').src = link;
    document.getElementById('contato').style.backgroundImage=contato;
}

function changeColor(color){
    const circle = document.querySelector('.circle_main');
    const text = document.querySelector('.enfase');
    const btn = document.querySelector('.btn_sobre');
    const btn2 = document.querySelector('.btn_inscricao');
    const sci = document.querySelector('.sci');
    circle.style.background = color;
    text.style.color = color;
    btn.style.background = color;
    btn2.style.background = color;
    sci.style.background = color;
}


function textChange(game){
    const texto = document.getElementById('texto_descricao');
    
    
    if (game == 'apex'){
        texto.innerHTML =
            "Um battle royale frenético cheio de Lendas com habilidades poderosas que podem mudar o destino do jogo."
            + "\nMonte seu esquadrão e escolha entre mais de 20 Lendas, cada um com sua especialidade e personalidade. Caia em uma das 4 diferentes Arenas, que vai desde uma linda e perigosa ilha tropical até uma futurista cidade no céu, e lute pela sua sobrevivência contra outros 60 jogadores.";
        
            
    }else if(game == 'valorant'){
        texto.innerHTML =
                "O jogo de tiro tático 5v5 da Riot Games surpreendeu a todos com sua mecânica baseada em heróis com diferentes habilidades." +
                "\nEscolha entre diversos Agentes, com especialidade em atacar, defender ou até mesmo rastrear, a escolha é usa. Defenda a sua Spike e vença o jogo.";
            
              

    }else if(game == 'lol'){
        texto.innerHTML = 
            "Junte um time de magos, assassinos, lutadores e atiradores neste clássico MMO da Riot Games." +
            "\nLute contra o time adversário no lendário Summoner's Rift, abrindo caminhos entre as torres e a Selva até a base inimiga para destruir o poderoso Nexus.";
        
    
    }else if(game == 'ow'){
        texto.innerHTML = 
        "O famoso jogo de tiro multiplayer oferece um vasto elenco de heróis que abre possiblidades para partidas insanas, divertidas e competitivas." +
        "\nO seu time consegue vencer os inimigos?";
    
       
    }else if(game =='mk'){
        texto.innerHTML = 
        "O título mais recente da mais famosa franquia de jogos de luta chegou para ser a história definitiva do Mortal Kombat." +
        "\nVocê tem coragem de enfrentar seus inimigos no clássico 1x1? Mortal Kombat 11 lhe oferece diversos lutadores icônicos com golpes devastadores para bater de frente com este desafio.";
    
        
    }else if(game == 'wz'){
        texto.innerHTML = 
        "A franquia de jogos de tiro mais famosa de todos os tempos recebeu seu modo battle royale." +
        "\nLute contra 150 jogadores em dois mapas imensos, Verdansk e Caldera. Enfrente este desafio sozinho ou com um esquadrão de até quatro pessoas, com a ajuda de diversas melhorias de campo e armas que abrangem três gerações de Call of Duty.";
    
    }
    
}
