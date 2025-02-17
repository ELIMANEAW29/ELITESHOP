// script.js

// Fonction pour afficher un message de bienvenue
function afficherMessageBienvenue() {
    console.log("Bienvenue sur EliteShop !");
}

// Appel de la fonction pour afficher le message de bienvenue
afficherMessageBienvenue();

// Fonction pour ajouter un produit au panier
function ajouterAuPanier(event) {
    event.preventDefault();
    const productId = this.getAttribute('data-product-id');
    const productCard = this.closest('.card');
    const productTitle = productCard.querySelector('.card-title').innerText;
    const productImage = productCard.querySelector('.card-img-top').src;

    const cartItem = {
        id: productId,
        title: productTitle,
        image: productImage
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Produit ajouté au panier');
}

// Ajout des écouteurs d'événements aux boutons "Acheter maintenant"
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', ajouterAuPanier);
    });
});