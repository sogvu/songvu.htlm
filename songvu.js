// Show product details in popup
function showProductDetails(title, price, imgSrc) {
    document.getElementById('popupTitle').innerText = title;
    document.getElementById('popupPrice').innerText = price;
    document.getElementById('popupImage').src = imgSrc;

    // Show the popup
    document.getElementById('productPopup').style.display = 'flex';
}

// Close popup
document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('productPopup').style.display = 'none';
});

// Close the popup if clicked outside the content
window.addEventListener('click', function(e) {
    if (e.target === document.getElementById('productPopup')) {
        document.getElementById('productPopup').style.display = 'none';
    }
});
