let carrinho = [];

// Função para adicionar produtos ao carrinho
function adicionarAoCarrinho(produto, preco) {
    carrinho.push({ produto, preco });
    alert(`${produto} adicionado ao carrinho!`);
}

// Função para finalizar compra e enviar via WhatsApp
function finalizarCompra() {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    let mensagem = "Olá, quero comprar:\n";
    let total = 0;

    carrinho.forEach(item => {
        mensagem += `- ${item.produto}: R$ ${item.preco.toFixed(2)}\n`;
        total += item.preco;
    });

    mensagem += `\nTotal: R$ ${total.toFixed(2)}`;

    let numeroWhatsApp = "5588999999999";
    let url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;
    window.location.href = url;
}
