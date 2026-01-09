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
        price: 1500, // Precio en LPS
        image: "imagenes-productos/armaf-mens-odyssey-mandarin-sky-edp-34-oz-fragrances-6294015149371_295c2585-7ae8-4d75-b740-2ddf0890899a.jpg"
    },
    {
        id: 2,
        name: "Set Armaf Club de Nuit Intense",
        category: "hombre",
        price: 2200,
        image: "imagenes-productos/6294015105247-1.webp"
    },
    {
        id: 3,
        name: "Lattafa Fakhar Black EDP",
        category: "hombre",
        price: 1400,
        image: "imagenes-productos/perfume-lattafa-fakhar-edp-m-100-ml-1-prive-perfumes.webp"
    },
    {
        id: 4,
        name: "Armaf Odyssey Spectra EDP",
        category: "hombre",
        price: 1500,
        image: "imagenes-productos/perfume-armaf-odyssey-spectra-edp-m-100-ml-1-prive-perfumes.webp"
    },
    {
        id: 5,
        name: "Bharara Mast Perfume Rome Pour Homme EDP",
        category: "hombre",
        price: 2100,
        image: "imagenes-productos/perfume-bharara-mast-perfume-rome-edp-m-100-ml-1-prive-perfumes.webp"
    },
    {
        id: 6,
        name: "Lattafa Rave Now White EDP",
        category: "unisex",
        price: 1500,
        image: "imagenes-productos/perfume-lattafa-rave-now-white-edp-u-100-ml-1-prive-perfumes.webp"
    }
    
];

// Añadimos 30 productos adicionales (ids 7..36) con formato igual a los primeros 6
const moreProducts = [
    { id: 7, name: "Al Haramain Amber Oud Gold Edition EDP", category: "unisex", price: 2000, image: "imagenes-productos/IMG_3561.webp" },
    { id: 8, name: "Maison Alhambra Glacier Bold EDP", category: "hombre", price: 1400, image: "imagenes-productos/473513.webp" },
    { id: 9, name: "Nocturne Oud", category: "hombre", price: 2200, image: "imagenes-productos/placeholder.svg" },
    { id: 10, name: "Luna Rosa", category: "mujer", price: 1750, image: "imagenes-productos/placeholder.svg" },
    { id: 11, name: "Ocean Mist", category: "unisex", price: 1100, image: "imagenes-productos/placeholder.svg" },
    { id: 12, name: "Velvet Spice", category: "hombre", price: 1450, image: "imagenes-productos/placeholder.svg" },
    { id: 13, name: "Jardin Secret", category: "mujer", price: 1950, image: "imagenes-productos/placeholder.svg" },
    { id: 14, name: "Cedar & Sage", category: "unisex", price: 1250, image: "imagenes-productos/placeholder.svg" },
    { id: 15, name: "Royal Amber", category: "hombre", price: 2400, image: "imagenes-productos/placeholder.svg" },
    { id: 16, name: "Blossom Dew", category: "mujer", price: 1500, image: "imagenes-productos/placeholder.svg" },
    { id: 17, name: "Midnight Leather", category: "hombre", price: 2100, image: "imagenes-productos/placeholder.svg" },
    { id: 18, name: "Silk Whisper", category: "mujer", price: 1700, image: "imagenes-productos/placeholder.svg" },
    { id: 19, name: "Citrus Breeze", category: "unisex", price: 1000, image: "imagenes-productos/placeholder.svg" },
    { id: 20, name: "Musk Heritage", category: "hombre", price: 2000, image: "imagenes-productos/placeholder.svg" },
    { id: 21, name: "Petal Kiss", category: "mujer", price: 1350, image: "imagenes-productos/placeholder.svg" },
    { id: 22, name: "Saffron Night", category: "unisex", price: 2300, image: "imagenes-productos/placeholder.svg" },
    { id: 23, name: "Green Tabac", category: "hombre", price: 1550, image: "imagenes-productos/placeholder.svg" },
    { id: 24, name: "Rose Elixir", category: "mujer", price: 1850, image: "imagenes-productos/placeholder.svg" },
    { id: 25, name: "Amber Wood", category: "unisex", price: 1600, image: "imagenes-productos/placeholder.svg" },
    { id: 26, name: "Spice Route", category: "hombre", price: 1400, image: "imagenes-productos/placeholder.svg" },
    { id: 27, name: "Peach Mirage", category: "mujer", price: 1250, image: "imagenes-productos/placeholder.svg" },
    { id: 28, name: "Ocean Drift", category: "unisex", price: 1150, image: "imagenes-productos/placeholder.svg" },
    { id: 29, name: "Leather Monarch", category: "hombre", price: 2500, image: "imagenes-productos/placeholder.svg" },
    { id: 30, name: "Vanilla Silk", category: "mujer", price: 1450, image: "imagenes-productos/placeholder.svg" },
    { id: 31, name: "Herbal Echo", category: "unisex", price: 1200, image: "imagenes-productos/placeholder.svg" },
    { id: 32, name: "Tuscan Oud", category: "hombre", price: 2350, image: "imagenes-productos/placeholder.svg" },
    { id: 33, name: "Flower Market", category: "mujer", price: 1300, image: "imagenes-productos/placeholder.svg" },
    { id: 34, name: "Cocoa Noir", category: "unisex", price: 1550, image: "imagenes-productos/placeholder.svg" },
    { id: 35, name: "Mystic Cedar", category: "hombre", price: 1700, image: "imagenes-productos/placeholder.svg" },
    { id: 36, name: "Amber Lace", category: "mujer", price: 1900, image: "imagenes-productos/placeholder.svg" }
];

products.push(...moreProducts);

const grid = document.getElementById('product-grid');
const searchInput = document.getElementById('searchInput');

// Normaliza rutas de imagen para uso en web
function getImageSrc(imagePath) {
    if (!imagePath) return 'https://via.placeholder.com/300?text=Sin+Imagen';
    // Si es URL absoluta, devolver tal cual
    if (/^https?:\/\//i.test(imagePath)) return imagePath;
    // Reemplaza backslashes por slashes
    let p = imagePath.replace(/\\\\/g, '/').replace(/\\/g, '/');
    // Elimina letra de unidad (C:, D:, etc.) si existe
    p = p.replace(/^[a-zA-Z]:/, '');
    // Quita barras al inicio
    p = p.replace(/^\/+/, '');
    // Toma sólo el nombre del archivo (último segmento)
    const filename = p.split('/').pop().trim();
    // Reemplaza espacios por guiones para nombres web-safe
    const safe = filename.replace(/\s+/g, '-');
    const final = 'imagenes-productos/' + safe;
    console.info(`Image normalized: "${imagePath}" -> "${final}"`);
    return final;
}

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
        // Normaliza rutas que vengan con backslashes, espacios o con letra de unidad
        img.src = encodeURI(getImageSrc(product.image));
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