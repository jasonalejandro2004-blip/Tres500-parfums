const PRODUCT_CATEGORIES = {
    tecnologia: 'Tecnología',
    autos: 'Accesorios para auto',
    gorras: 'Gorras',
    joyeria: 'Joyería y accesorios',
    camisas: 'Camisas deportivas',
    calzado_dama: 'Calzado de dama',
    calzado_caballero: 'Calzado de caballero',
    novedades: 'Novedades'
};

// Completa name y price para cada foto; cada objeto representa una tarjeta del catálogo.
const productSlots = [
    { name: 'Leds Para Carros ', category: 'tecnologia', price: '1500', image: 'fotos frontales/catalogo/20260920_163614.jpg' },
    { name: 'Magsafe Lisen 20w para carro', category: 'autos', price: '700', image: 'fotos frontales/catalogo/20260920_170442.jpg' },
    { name: 'Ugreen UNO RG 30W', category: 'tecnologia', price: ' 800 ', image: 'fotos frontales/catalogo/20260920_171110.jpg' },
    { name: 'UGREEN FINDER PRO Rastreadores', category: 'tecnologia', price: ' 600 ', image: 'fotos frontales/catalogo/20260920_172015.jpg' },
    { name: 'Billeteras Minimalistas ', category: 'joyeria', price: '600', image: 'fotos frontales/catalogo/20260920_172552(1).jpg' },
    { name: 'LEGO NISSAN SKYLINE', category: 'autos', price: '1300', image: 'fotos frontales/catalogo/20260920_180529.jpg' },
    { name: 'COOLER GAMING PARA TELEFONO ', category: 'tecnologia', price: '600', image: 'fotos frontales/catalogo/20260920_180728(1).jpg' },
    { name: 'LEGO MERCEDES AMG F1', category: 'autos', price: '1300', image: 'fotos frontales/catalogo/20260920_180831.jpg' },
    { name: 'EXPANSOR USB UGREEN 4 PUERTOS', category: 'tecnologia', price: '500', image: 'fotos frontales/catalogo/20260920_182618.jpg' },
    { name: 'SET DE MICROFONO LEVIN', category: 'autos', price: '600', image: 'fotos frontales/catalogo/20260920_183110.jpg' },
    { name: 'AMAZON ECHO AUTO', category: 'autos', price: '900', image: 'fotos frontales/catalogo/20260920_195234.jpg' },
    { name: 'CARGADOR ANKER 20W TIPO C A C ', category: 'tecnologia', price: '500', image: 'fotos frontales/catalogo/20260920_195330.jpg' },
    { name: 'CALCETINES NIKE 6 PARES ORIGINALES', category: 'novedades', price: '700', image: 'fotos frontales/catalogo/20260920_195437.jpg' },
    { name: 'LENTES PRADA ESTILO PLAYA', category: 'joyeria', price: '1500', image: 'fotos frontales/catalogo/20260920_201520(2).jpg' },
    { name: 'LENTESD DE SOL PRADA', category: 'joyeria', price: '1500', image: 'fotos frontales/catalogo/20260920_201656(1).jpg' },
    { name: 'CAMISA BARCELONA MORADA PLAYER', category: 'camisas', price: '1200', image: 'fotos frontales/catalogo/20261018_083149.jpg' },
    { name: 'CAMISA REAL MADRID BLANCA PLAYER', category: 'camisas', price: '1200', image: 'fotos frontales/catalogo/20261018_083249.jpg' },
    { name: 'GORRA SCARY MOVIE', category: 'gorras', price: '1200', image: 'fotos frontales/catalogo/20261026_165506.jpg' },
    { name: 'GORRA YOSHI', category: 'gorras', price: '1200', image: 'fotos frontales/catalogo/20261026_165530.jpg' },
    { name: 'GORRA RICO MUERTO 1', category: 'gorras', price: '1200', image: 'fotos frontales/catalogo/20261026_165552.jpg' },
    { name: 'GORRA RICO MUERTO 2', category: 'gorras', price: '1200', image: 'fotos frontales/catalogo/20261026_165613.jpg' },
    { name: 'GORRA LA TRES CREUS', category: 'gorras', price: '1200', image: 'fotos frontales/catalogo/20261026_165630.jpg' },
    { name: 'SAMSUNG GALAXY WATCH 6 CLASSIC 47MM', category: 'tecnologia', price: '3500', image: 'fotos frontales/catalogo/20261028_005640.jpg' },
    { name: 'ADIDAS ULTRABOOST X5 TALLA 11.5', category: 'calzado_caballero', price: '3000', image: 'fotos frontales/catalogo/20261030_204143.jpg' },
    { name: 'LEGO MERCEDES 2', category: 'autos', price: '1300', image: 'fotos frontales/catalogo/20261030_204344.jpg' },
    { name: 'LEGO NISSAN SKYLINE R34', category: 'autos', price: '1300', image: 'fotos frontales/catalogo/20261030_204446.jpg' },
    { name: ' ZAPATOS ONCLOUD TALLA 11', category: 'calzado_caballero', price: '3200', image: 'fotos frontales/catalogo/20261030_204804.jpg' },
    { name: 'PULSERA VAN CLEEF', category: 'tecnologia', price: '1600', image: 'fotos frontales/catalogo/20261030_205358.jpg' },
    { name: 'VARIEDAD DE PULSERAS VAN CLEEFS', category: 'JOYAS', price: '1600', image: 'fotos frontales/catalogo/20261030_205638.jpg' },
    { name: 'CAMISA VERDE AQUA BARCELONA', category: 'camisas', price: '1200', image: 'fotos frontales/catalogo/20261030_210236.jpg' },
    { name: 'AUDIFONOS SOUNDCORE P30I ', category: 'tecnologia', price: '1300', image: 'fotos frontales/catalogo/IMG-20260317-WA0309.jpg' },
    { name: 'BOMBILLOS INTELIGENTES RGB', category: 'tecnologia', price: '350', image: 'fotos frontales/catalogo/IMG-20260317-WA0351.jpg' },
   
];

const grid = document.getElementById('product-grid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const productCount = document.getElementById('product-count');

function initializeCategoryFilter() {
    Object.entries(PRODUCT_CATEGORIES).forEach(([value, label]) => {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = label;
        categoryFilter.appendChild(option);
    });
}

function createProductCard(product) {
    const card = document.createElement('article');
    card.className = 'product-card';

    const media = document.createElement('div');
    media.className = 'product-image';
    const fallback = document.createElement('div');
    fallback.className = 'image-fallback';
    fallback.innerHTML = '<i class="fa-solid fa-box-open" aria-hidden="true"></i><span>UrbanPlug HN</span>';
    media.appendChild(fallback);

    if (product.image) {
        const image = document.createElement('img');
        image.src = encodeURI(product.image);
        image.alt = product.name.trim() || 'Foto del producto';
        image.loading = 'lazy';
        image.decoding = 'async';
        image.addEventListener('load', () => fallback.remove());
        media.appendChild(image);
    }

    const details = document.createElement('div');
    details.className = 'product-details';

    const category = document.createElement('p');
    category.className = 'product-category';
    category.textContent = PRODUCT_CATEGORIES[product.category] || 'Novedades';

    const name = document.createElement('h2');
    name.className = 'product-name';
    name.textContent = product.name.trim() || 'Nombre del producto';

    details.append(category, name);

    if (product.description) {
        const description = document.createElement('p');
        description.className = 'product-description';
        description.textContent = product.description;
        details.appendChild(description);
    }

    const price = document.createElement('p');
    price.className = 'product-price';
    const hasPrice = product.price !== '' && product.price !== null;
    price.textContent = hasPrice
        ? `L ${Number(product.price).toLocaleString('es-HN')}`
        : 'Precio por agregar';
    if (!hasPrice) price.classList.add('product-price-placeholder');
    details.appendChild(price);

    const message = `Hola, me interesa ${product.name.trim() || 'este producto'}. ¿Me confirmas el precio y disponibilidad?`;
    const orderLink = document.createElement('a');
    orderLink.className = 'order-link';
    orderLink.href = `https://wa.me/50495800770?text=${encodeURIComponent(message)}`;
    orderLink.target = '_blank';
    orderLink.rel = 'noopener';
    orderLink.innerHTML = '<i class="fa-brands fa-whatsapp" aria-hidden="true"></i> Consultar';
    details.appendChild(orderLink);

    card.append(media, details);
    return card;
}

function renderProducts() {
    const products = productSlots.filter(product => product.image);
    const searchTerm = searchInput.value.trim().toLocaleLowerCase('es');
    const selectedCategory = categoryFilter.value;
    const visibleProducts = products.filter(product => {
        const matchesSearch = `${product.name} ${product.description}`
            .toLocaleLowerCase('es')
            .includes(searchTerm);
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    productCount.textContent = `${products.length} productos`;
    grid.replaceChildren();

    if (!visibleProducts.length) {
        const emptyState = document.createElement('div');
        emptyState.className = 'catalog-empty';

        const title = document.createElement('h2');
        title.textContent = products.length ? 'No encontramos productos' : 'Catálogo en preparación';

        const message = document.createElement('p');
        message.textContent = products.length
            ? 'Prueba con otra búsqueda o categoría.'
            : 'Estamos preparando los primeros productos de UrbanPlug HN.';

        emptyState.append(title, message);
        grid.appendChild(emptyState);
        return;
    }

    visibleProducts.forEach(product => grid.appendChild(createProductCard(product)));
}

function setupShareButton() {
    const share = document.getElementById('share-link');
    if (!share) return;

    share.addEventListener('click', (event) => {
        event.preventDefault();
        const url = window.location.href;
        const title = 'UrbanPlug HN';
        const text = `Visita ${title}: ${url}`;

        if (navigator.share) {
            navigator.share({ title, text, url }).catch(() => {});
        } else if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(url).then(() => {
                alert('Enlace copiado al portapapeles:\n' + url);
            }).catch(() => {
                window.open('https://wa.me/?text=' + encodeURIComponent(text), '_blank');
            });
        } else {
            window.open('https://wa.me/?text=' + encodeURIComponent(text), '_blank');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initializeCategoryFilter();
    searchInput.addEventListener('input', renderProducts);
    categoryFilter.addEventListener('change', renderProducts);
    renderProducts();
    setupShareButton();
});
