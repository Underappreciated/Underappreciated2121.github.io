// Contoh data wishlist
var wishlistItems = [
    { name: "Baju 1", price: 100, image: "product1.jpg" },
    { name: "Baju 2", price: 200, image: "product2.jpg" },
    { name: "Baju 3", price: 150, image: "product3.jpg" }
];

// Menampilkan daftar wishlist
function displayWishlistItems() {
    var wishlistItemsElement = document.getElementById('wishlist-items');
    wishlistItemsElement.innerHTML = '';

    for (var i = 0; i < wishlistItems.length; i++) {
        var wishlistItem = wishlistItems[i];

        var wishlistItemElement = document.createElement('div');
        wishlistItemElement.classList.add('wishlist-item');

        var wishlistItemImage = document.createElement('img');
        wishlistItemImage.src = wishlistItem.image;
        wishlistItemElement.appendChild(wishlistItemImage);

        var wishlistItemName = document.createElement('h3');
        wishlistItemName.textContent = wishlistItem.name;
        wishlistItemElement.appendChild(wishlistItemName);

        var wishlistItemPrice = document.createElement('p');
        wishlistItemPrice.textContent = 'Price: $' + wishlistItem.price;
        wishlistItemElement.appendChild(wishlistItemPrice);

        wishlistItemsElement.appendChild(wishlistItemElement);
    }
}

// Memanggil fungsi untuk menampilkan daftar wishlist saat halaman dimuat
displayWishlistItems();
