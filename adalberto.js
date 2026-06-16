// Aguarda o carregamento do documento
document.addEventListener("DOMContentLoaded", () => {
    
    // Seleciona todas as imagens clicáveis e o painel de informações
    const imagens = document.querySelectorAll(".img-clicavel");
    const painelInfo = document.getElementById("painel-info");
    const textoInfo = document.getElementById("texto-info");

    // Adiciona o evento de clique para cada imagem da galeria
    imagens.forEach(imagem => {
        imagem.addEventListener("click", () => {
            
            // Pega o texto explicativo guardado no atributo 'data-info' da imagem
            const informacao extraida = imagem.getAttribute("data-info");
            
            // Insere o texto no painel
            textoInfo.textContent = informacao;
            
            // Mostra o painel removendo a classe que o escondia
            painelInfo.classList.remove("escondido");
            
            // Destaca visualmente a imagem clicada (efeito opcional)
            imagens.forEach(img => img.style.border = "none");
            imagem.style.border = "3px solid #2E7D32";
        });
    });
});
