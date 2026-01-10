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
    { id: 10, name: "Lattafa Fakhar Rose EDP (Dama) ", category: "mujer", price: 1400, image: "imagenes-productos/perfume-lattafa-fakhar-edp-w-100-ml-1-prive-perfumes.webp" },
    { id: 11, name: "Emper Discovery Set EDP (Unisex)", category: "unisex", price: 1100, image: "imagenes-productos/perfumes-mini-emper-mini-collection-u-4-pc-sp-4-x-30-ml-1-prive-perfumes.webp" },
    { id: 12, name: "Lattafa Ramz Silver EDP", category: "hombre", price: 1400, image: "imagenes-productos/Lattafa-Ramz-Silver-Edp-100ml-Unisex.webp" },
    { id: 13, name: "Maison Alhambra Kismet Magic EDP (Unisex) / 100ml", category: "hombre", price: 1200, image: "imagenes-productos/FullSizeRender_e75d03c3-a058-4020-bf54-def3e57ad647.webp" },
    { id: 14, name: "Lattafa Yara EDP (Dama) / 100ml", category: "mujer", price: 1400, image: "imagenes-productos/perfume-lattafa-yara-eau-de-parfum-w-100-ml-1-prive-perfumes.webp" },
    { id: 15, name: "Armaf Eter Arabian Sky EDP (Caballero) / 100ml", category: "hombre", price: 2500, image: "imagenes-productos/Disenosintitulo_20.webp" },
    { id: 16, name: "Armaf Odyssey Homme White EDP (Caballero) / 100ml", category: "hombre", price: 1600, image: "C:\\pagiona web version 2\\imagenes-productos\\armaf-odyssey-white-edp-m-1-prive-perfumes_1972d2cf.webp" },
    { id: 17, name: "Armaf Odyssey Aqua EDP (Caballero) / 100ml", category: "hombre", price: 1600, image: "imagenes-productos/perfume-armaf-odyssey-aqua-edp-m-100-ml-1-prive-perfumes.webp" },
    { id: 18, name: "Lattafa Pride Art of Universe EDP (Unisex) / 100ml", category: "unisex", price: 2500, image: "imagenes-productos/610JOMcHJDL._AC_UF1000_1000_QL80.webp" },
    { id: 19, name: "Lattafa Ramz EDP (Unisex) / 100ml", category: "unisex", price: 1000, image: "imagenes-productos/perfume-lattafa-ramz-gold-edp-u-100-ml-1-prive-perfumes.webp" },
    { id: 20, name: "Maison Alhambra Jean Lowe Immortel (Unisex) EDP - 100ml", category: "hombre", price: 1500, image: "imagenes-productos/perfume-maison-alhambra-jean-lowe-fraiche-edp-m-100-ml-1-prive-perfumes.webp" },
    { id: 21, name: "Armaf Odyssey Candee EDP (Dama) / 100ml", category: "mujer", price: 1350, image: "imagenes-productos/61SbbUuIStL._AC_UF1000_1000_QL80.webp" },
    { id: 22, name: "Lattafa Pride Vintage Radio EDP (Unisex) / 100ml", category: "unisex", price: 2300, image: "imagenes-productos/01LATPVINRADIOEPUUN100.webp" },
    { id: 23, name: "Lattafa Qaed Al Fursan EDP (Unisex) / 90ml", category: "hombre", price: 1550, image: "imagenes-productos/perfume-lattafa-qaed-al-fursan-edp-u-90-ml-1-prive-perfumes.webp" },
    { id: 24, name: "Lattafa Hayaati Al Maleky EDP (Caballero) / 100ml", category: "mujer", price: 1850, image: "imagenes-productos/perfume-lattafa-hayaati-al-maleky-edp-u-100-ml-1-prive-perfumes.webp" },
    { id: 25, name: "Lattafa Rave Now EDP (Unisex) / 100ml", category: "unisex", price: 1600, image: "imagenes-productos/IMG-2795.webp" },
    { id: 26, name: "Lattafa Pride Ishq Al Shuyukh Silver EDP (Unisex) / 100ml", category: "unisex", price: 1400, image: "imagenes-productos/1_8c625750-3ac6-4bfd-a63d-c6e5db269256 (1).webp" },
    { id: 27, name: "Lattafa Bade'e Al Oud Honor & Glory EDP (Unisex) / 100ml", category: "unisex", price: 1500, image: "imagenes-productos/7AB4678F-9521-4198-87D1-C33750C0841C.webp" },
    { id: 28, name: "Lattafa Najdia Intense EDP (Unisex) / 100ml", category: "unisex", price: 1400, image: "imagenes-productos/perfume-lattafa-najdia-intense-edp-m-100-ml-1-prive-perfumes.webp" },
    { id: 29, name: "Lattafa Maahir Legacy EDP (Unisex) / 100ml", category: "hombre", price: 1600, image: "imagenes-productos/perfume-lattafa-maahir-legacy-edp-m-100-ml-1-prive-perfumes_07239ba7-a68e-4a79-b66f-6d0d97a59f3a.webp" },
    { id: 30, name: "Lattafa Khamrah Qahwa EDP (Unisex) / 100ml", category: "mujer", price: 2200, image: "imagenes-productos/IMG-2796.webp" },
    { id: 31, name: "Armaf Tag Him Uomo Nero EDP (Caballero) / 100ml", category: "hombre", price: 1800, image: "imagenes-productos/Publicacion_18.webp" },
    { id: 32, name: "Armaf Club de Nuit Precieux IV Extrait (Dama) / 55ml", category: "dama", price: 2350, image: "imagenes-productos/perfume-armaf-club-de-nuit-precieux-iv-mujer-55ml-extrait (1).webp" },
    { id: 33, name: "Afnan 9AM Dive EDP (Unisex) / 100 ml", category: "unisex", price: 1400, image: "imagenes-productos/perfume-afnan-9am-dive-edp-u-100-ml-1-prive-perfumes_239dfff9-f5ee-4eb0-a9ea-0bafdf9e303d.webp" },
    { id: 34, name: "Maison Alhambra Glacier Le Noir EDP (Caballero) / 100ml", category: "unisex", price: 1400, image: "imagenes-productos/477817.webp" },
    { id: 35, name: "Armaf Odyssey Mega EDP (Caballero) / 100ml", category: "hombre", price: 1600, image: "imagenes-productos/placeholder.svg" },
    { id: 36, name: "Lattafa Yara Candy EDP (Dama) / 100ml", category: "mujer", price: 1400, image: "imagenes-productos/perfume-lattafa-yara-candy-edp-w-100-ml-1-prive-perfumes.webp" }
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