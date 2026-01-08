// CONFIGURACIÓN: Pon aquí tu número de Honduras
// Formato: 504 + número sin espacios (ej. 50499998888)
const MY_PHONE_NUMBER = "50495800770"; 

// TUS PRODUCTOS (Puedes agregar tantos como quieras)
// Nota: En 'image', pon el nombre de tu archivo jpg. Ej: "armaf.jpg"
const products = [
    {
        id: 1,
        name: "Armaf Odyssey Mandarin Sky",
        category: "hombre",
        price: 1200, // Precio en LPS
        image: "imagenes-productos/Perfume-Armaf-Odyssey-Sky.jpg" // relative path (forward slashes, no spaces)
    },
    {
        id: 2,
        name: "Club de Nuit Intense Man",
        category: "hombre",
        price: 1500,
        image: "https://m.media-amazon.com/images/I/71BSk-c-JWL._AC_SL1500_.jpg"
    },
    {
        id: 3,
        name: "Versace Eros Flame",
        category: "hombre",
        price: 2400,
        image: "https://m.media-amazon.com/images/I/61e8iR+a7RL._AC_SL1000_.jpg"
    },
    {
        id: 4,
        name: "Carolina Herrera Good Girl",
        category: "mujer",
        price: 3100,
        image: "https://m.media-amazon.com/images/I/61S1q+Yk+NL._AC_SL1500_.jpg"
    },
    {
        id: 5,
        name: "Ariana Grande Cloud",
        category: "mujer",
        price: 1850,
        image: "https://m.media-amazon.com/images/I/51rYfF2g+pL._AC_SL1000_.jpg"
    },
    {
        id: 6,
        name: "Calvin Klein CK One",
        category: "unisex",
        price: 1100,
        image: "https://m.media-amazon.com/images/I/61K-3vA+VCL._AC_SL1500_.jpg"
    }
];

const grid = document.getElementById('product-grid');
const searchInput = document.getElementById('searchInput');

// Función principal para renderizar
function renderProducts(items) {
    grid.innerHTML = "";

    if(items.length === 0) {
        grid.innerHTML = "<p style='text-align:center; width:100%; col-span:3;'>No se encontraron productos.</p>";
        return;
    }

    items.forEach(product => {
        const message = `Hola, me interesa la loción *${product.name}* que cuesta LPS ${product.price}. ¿Está disponible?`;
        const whatsappLink = `https://wa.me/${MY_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;

        const card = document.createElement('div');
        card.classList.add('card');

        // Imagen
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');
        const img = document.createElement('img');
        img.alt = product.name;
        // Use encodeURI to handle spaces and special chars; avoid backslashes and drive letters
        img.src = encodeURI(product.image);
        img.onerror = function() { this.src = 'https://via.placeholder.com/300?text=Sin+Imagen'; };
        imgContainer.appendChild(img);

        // Info
        const info = document.createElement('div');
        info.classList.add('card-info');
        const title = document.createElement('h3');
        title.classList.add('card-title');
        title.textContent = product.name;
        const price = document.createElement('div');
        price.classList.add('card-price');
        price.textContent = `LPS ${product.price.toLocaleString()}`;
        const a = document.createElement('a');
        a.href = whatsappLink;
        a.target = '_blank';
        a.classList.add('btn-whatsapp');
        a.innerHTML = `<i class="fa-brands fa-whatsapp"></i> Pedir ahora`;

        info.appendChild(title);
        info.appendChild(price);
        info.appendChild(a);

        card.appendChild(imgContainer);
        card.appendChild(info);

        grid.appendChild(card);
    });
}

// Filtro por Categoría
function filterProducts(category) {
    // Actualizar botones visualmente
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText.toLowerCase().includes(category === 'all' ? 'todo' : category)) {
            btn.classList.add('active');
        }
    });

    if (category === 'all') {
        renderProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        renderProducts(filtered);
    }
}

// Búsqueda en tiempo real
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(term));
    renderProducts(filtered);
});

// Configura botón de compartir (navigator.share con fallback a portapapeles/WhatsApp)
function setupShareButton() {
    const share = document.getElementById('share-link');
    if (!share) return;
    share.addEventListener('click', (e) => {
        e.preventDefault();
        const url = window.location.href;
        const title = 'Tres500 Parfums';
        const text = 'Visita nuestro catálogo: ' + title;
        if (navigator.share) {
            navigator.share({ title, text, url }).catch(() => {});
        } else if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(url).then(() => {
                alert('Enlace copiado al portapapeles:\n' + url);
            }).catch(() => {
                const wa = 'https://wa.me/?text=' + encodeURIComponent(text + ' ' + url);
                window.open(wa, '_blank');
            });
        } else {
            const wa = 'https://wa.me/?text=' + encodeURIComponent(text + ' ' + url);
            window.open(wa, '_blank');
        }
    });
}

// Carga inicial
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    setupShareButton();
});