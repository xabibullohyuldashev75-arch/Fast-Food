/* ==================== INITIAL DATA & CONSTANTS ==================== */
const DEFAULT_CATEGORIES = [
    "Barchasi",
    "Lavashlar",
    "Burgerlar",
    "Hot-doglar",
    "Pitsalar",
    "Setlar",
    "Fri kartoshka",
    "Nuggets va tovuq mahsulotlari",
    "Salqin ichimliklar",
    "Gazli ichimliklar",
    "Sharbatlar",
    "Choy va qahva",
    "Souslar va qo‘shimchalar"
];

const DEFAULT_REGIONS = [
    { id: "andijon-sh", name: "Andijon shahri", fee: 10000, time: "25-35 daq" },
    { id: "andijon-tum", name: "Andijon tumani", fee: 14000, time: "35-45 daq" },
    { id: "asaka", name: "Asaka tumani", fee: 18000, time: "45-60 daq" },
    { id: "shahrixon", name: "Shahrixon tumani", fee: 20000, time: "50-65 daq" },
    { id: "xojaobod", name: "Xo‘jaobod tumani", fee: 18000, time: "45-60 daq" },
    { id: "marhamat", name: "Marhamat tumani", fee: 22000, time: "55-70 daq" },
    { id: "oltinkol", name: "Oltinko‘l tumani", fee: 16000, time: "40-50 daq" },
    { id: "baliqchi", name: "Baliqchi tumani", fee: 22000, time: "55-70 daq" },
    { id: "boz", name: "Bo‘z tumani", fee: 24000, time: "60-75 daq" },
    { id: "buloqboshi", name: "Buloqboshi tumani", fee: 18000, time: "45-60 daq" },
    { id: "izboskan", name: "Izboskan tumani", fee: 18000, time: "45-60 daq" },
    { id: "jalaquduq", name: "Jalaquduq tumani", fee: 18000, time: "45-60 daq" },
    { id: "qorgontepa", name: "Qo‘rg‘ontepa tumani", fee: 24000, time: "60-75 daq" },
    { id: "paxtaobod", name: "Paxtaobod tumani", fee: 20000, time: "50-65 daq" },
    { id: "ulugnor", name: "Ulug‘nor tumani", fee: 25000, time: "65-80 daq" }
];

const DEFAULT_PRODUCTS = [
    // 1. Lavashlar
    {
        id: 101,
        name: "Andijon Maxsus Mol Go‘shtli Lavash",
        category: "Lavashlar",
        price: 34000,
        oldPrice: 39000,
        rating: 4.9,
        popular: true,
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=700&q=80",
        description: "Yupqa xamir, shirador mol go‘shti, yangi pomidor, bodring, qarsildoq chips va maxsus sarimsoqli oq sous."
    },
    {
        id: 102,
        name: "Pishloqli Tovuqli Tandir Lavash",
        category: "Lavashlar",
        price: 32000,
        oldPrice: null,
        rating: 4.8,
        popular: false,
        image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=700&q=80",
        description: "Grilda pishirilgan tovuq filesi, eritilgan Golland pishlog‘i, sabzavotlar va firmenniy tomat sousi."
    },
    // 2. Burgerlar
    {
        id: 201,
        name: "Shohona Double Cheeseburger",
        category: "Burgerlar",
        price: 42000,
        oldPrice: 48000,
        rating: 5.0,
        popular: true,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80",
        description: "Ikkita 100% mol go‘shtidan kotlet, ikki qavat Cheddar pishlog‘i, tuzlangan bodring, qizil piyoz va burger sousi."
    },
    {
        id: 202,
        name: "Crispy Chicken Burger",
        category: "Burgerlar",
        price: 31000,
        oldPrice: null,
        rating: 4.7,
        popular: false,
        image: "https://images.unsplash.com/photo-1615297928064-24977384d0da?auto=format&fit=crop&w=700&q=80",
        description: "Qarsildoq panirovkadagi tovuq ko‘kragi, aysberg salati, yangi pomidor va mayin qaymoqli sous."
    },
    // 3. Hot-doglar
    {
        id: 301,
        name: "Qirollik Double Hot-Dog",
        category: "Hot-doglar",
        price: 22000,
        oldPrice: 25000,
        rating: 4.8,
        popular: false,
        image: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=700&q=80",
        description: "Yumshoq bulochka, ikkita dudlangan sosiska, pishloq, qovurilgan piyoz, xantal va ketchup."
    },
    {
        id: 302,
        name: "Klassik Andijon Hot-Dog",
        category: "Hot-doglar",
        price: 16000,
        oldPrice: null,
        rating: 4.6,
        popular: false,
        image: "https://images.unsplash.com/photo-1541214113241-21578d2d9b62?auto=format&fit=crop&w=700&q=80",
        description: "Klassik sosiska, sabzi salati, bodring, pomidor va maxsus souslar uyg‘unligi."
    },
    // 4. Pitsalar
    {
        id: 401,
        name: "Pepperoni Maxsus Pitsa (33 sm)",
        category: "Pitsalar",
        price: 78000,
        oldPrice: 89000,
        rating: 4.9,
        popular: true,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=700&q=80",
        description: "Mozzarella pishlog‘i, dudlangan mol go‘shtli pepperoni kolbasasi, oregano va italyan tomat sousi."
    },
    {
        id: 402,
        name: "Assorti Go‘shtli Pitsa (33 sm)",
        category: "Pitsalar",
        price: 85000,
        oldPrice: null,
        rating: 4.9,
        popular: false,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80",
        description: "Mol go‘shti, tovuq filesi, qo‘ziqorin, zaytun, bulg‘or qalampiri va ko‘p miqdorda pishloq."
    },
    // 5. Setlar
    {
        id: 501,
        name: "Oilaviy Katta Set (4 kishilik)",
        category: "Setlar",
        price: 135000,
        oldPrice: 160000,
        rating: 5.0,
        popular: true,
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=700&q=80",
        description: "2 ta Maxsus Lavash, 2 ta Cheeseburger, 2 ta katta Fri kartoshka, 4 ta sous va 1.5L Coca-Cola."
    },
    {
        id: 502,
        name: "1+1 Do‘stlar Kombo Seti",
        category: "Setlar",
        price: 68000,
        oldPrice: 80000,
        rating: 4.8,
        popular: false,
        image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?auto=format&fit=crop&w=700&q=80",
        description: "2 ta Chicken Burger, 2 ta o‘rta Fri kartoshka va 2 ta salqin ichimlik birgalikda arzon narxda."
    },
    // 6. Fri kartoshka
    {
        id: 601,
        name: "Qarsildoq Kartoshka Fri (Katta)",
        category: "Fri kartoshka",
        price: 18000,
        oldPrice: null,
        rating: 4.8,
        popular: false,
        image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=700&q=80",
        description: "Oltin rangda qovurilgan, ichi yumshoq va usti qarsildoq dengiz tuzi sepilgan fri kartoshkasi."
    },
    {
        id: 602,
        name: "Pishloqli va Jalapenoli Fri",
        category: "Fri kartoshka",
        price: 23000,
        oldPrice: 26000,
        rating: 4.7,
        popular: false,
        image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=700&q=80",
        description: "Issiq eritilgan Cheddar pishloq sousi va achchiq jalapeno halqachalari bilan bezatilgan fri."
    },
    // 7. Nuggets va tovuq mahsulotlari
    {
        id: 701,
        name: "Tovuq Nuggets (9 dona)",
        category: "Nuggets va tovuq mahsulotlari",
        price: 26000,
        oldPrice: 30000,
        rating: 4.8,
        popular: false,
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=700&q=80",
        description: "100% tabiiy tovuq ko‘kragidan tayyorlangan qarsildoq naggetslar to‘plami."
    },
    {
        id: 702,
        name: "Achchiq Qanotchalar (8 dona)",
        category: "Nuggets va tovuq mahsulotlari",
        price: 35000,
        oldPrice: null,
        rating: 4.9,
        popular: false,
        image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=700&q=80",
        description: "Maxsus ziravorlarda marinadlangan va qarsildoq qilib qovurilgan tovuq qanotchalari."
    },
    // 8. Salqin ichimliklar
    {
        id: 801,
        name: "Muzdek Moxito Klassik (0.5L)",
        category: "Salqin ichimliklar",
        price: 16000,
        oldPrice: null,
        rating: 4.9,
        popular: false,
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80",
        description: "Yangi yalpiz barglari, laym bo‘laklari, muz kubiklari va tetiklantiruvchi gazlangan suv."
    },
    {
        id: 802,
        name: "Qulupnayli Limonad (0.5L)",
        category: "Salqin ichimliklar",
        price: 18000,
        oldPrice: 20000,
        rating: 4.8,
        popular: false,
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=700&q=80",
        description: "Tabiiy qulupnay siropi, limon sharbati va muzdek gazlangan ichimlik."
    },
    // 9. Gazli ichimliklar
    {
        id: 901,
        name: "Coca-Cola (1.5 L)",
        category: "Gazli ichimliklar",
        price: 15000,
        oldPrice: null,
        rating: 4.9,
        popular: false,
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=700&q=80",
        description: "Muzdek klassik Coca-Cola oilaviy hajmda."
    },
    {
        id: 902,
        name: "Fanta Apelsin (1 L)",
        category: "Gazli ichimliklar",
        price: 12000,
        oldPrice: null,
        rating: 4.7,
        popular: false,
        image: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&w=700&q=80",
        description: "Yorqin apelsin ta'mli salqin gazli ichimlik."
    },
    // 10. Sharbatlar
    {
        id: 1001,
        name: "Tabiiy Olma va Olcha Sharbati (1 L)",
        category: "Sharbatlar",
        price: 16000,
        oldPrice: null,
        rating: 4.7,
        popular: false,
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=700&q=80",
        description: "Vitaminlarga boy tabiiy mevali sharbat."
    },
    // 11. Choy va qahva
    {
        id: 1101,
        name: "Kapuchino Qahvasi (0.3L)",
        category: "Choy va qahva",
        price: 17000,
        oldPrice: null,
        rating: 4.8,
        popular: false,
        image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=700&q=80",
        description: "Yangi maydalangan arabika donalaridan tayyorlangan mayin sut ko‘pikli kapuchino."
    },
    {
        id: 1102,
        name: "Limonli Ko‘k Choy",
        category: "Choy va qahva",
        price: 8000,
        oldPrice: null,
        rating: 4.7,
        popular: false,
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=700&q=80",
        description: "Yangi barra limon bo‘laklari bilan damlangan issiq ko‘k choy."
    },
    // 12. Souslar va qo‘shimchalar
    {
        id: 1201,
        name: "Maxsus Sarimsoqli Oq Sous",
        category: "Souslar va qo‘shimchalar",
        price: 4000,
        oldPrice: null,
        rating: 4.9,
        popular: false,
        image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=700&q=80",
        description: "Lavash va fri kartoshka uchun ideal bo‘lgan mayin sarimsoqli sous."
    },
    {
        id: 1202,
        name: "Pishloqli Sous (Cheddar)",
        category: "Souslar va qo‘shimchalar",
        price: 5000,
        oldPrice: null,
        rating: 4.8,
        popular: false,
        image: "https://images.unsplash.com/photo-1607532941433-304659e8198a?auto=format&fit=crop&w=700&q=80",
        description: "Boy pishloq ta'miga ega quyuq sous."
    }
];

const DEFAULT_BRANCHES = [
    {
        id: 1,
        name: "Andijon Markaz Filiali (Demo)",
        address: "Andijon shahri, Bobur shoh ko‘chasi, 45-uy (Demo manzil)",
        phone: "+998 (74) 000-01-01 (Demo)",
        hours: "09:00 - 02:00",
        mapQuery: "Andijon+shahri"
    },
    {
        id: 2,
        name: "Asaka Shahar Filiali (Demo)",
        address: "Asaka tumani, Umid ko‘chasi, 12-uy (Demo manzil)",
        phone: "+998 (74) 000-02-02 (Demo)",
        hours: "10:00 - 00:00",
        mapQuery: "Asaka+tumani+Andijon"
    },
    {
        id: 3,
        name: "Shahrixon Filiali (Demo)",
        address: "Shahrixon tumani, Mustaqillik ko‘chasi, 8-uy (Demo manzil)",
        phone: "+998 (74) 000-03-03 (Demo)",
        hours: "10:00 - 00:00",
        mapQuery: "Shahrixon+tumani+Andijon"
    }
];

const DEFAULT_PROMOS = [
    {
        code: "ANDIJON20",
        percent: 20,
        title: "Birinchi buyurtmaga 20% chegirma",
        desc: "Barcha menyu taomlari uchun amal qiladi"
    },
    {
        code: "OILA15",
        percent: 15,
        title: "Oilaviy setlar uchun 15% chegirma",
        desc: "Katta buyurtmalarda yanada ko‘proq tejang"
    },
    {
        code: "KUN10",
        percent: 10,
        title: "Kun mahsuloti aksiyasi 10%",
        desc: "Har kuni barcha mijozlar uchun maxsus kod"
    }
];

/* ==================== APPLICATION STATE ==================== */
const STATE = {
    categories: JSON.parse(localStorage.getItem("af_categories")) || DEFAULT_CATEGORIES,
    regions: JSON.parse(localStorage.getItem("af_regions")) || DEFAULT_REGIONS,
    products: JSON.parse(localStorage.getItem("af_products")) || DEFAULT_PRODUCTS,
    branches: JSON.parse(localStorage.getItem("af_branches")) || DEFAULT_BRANCHES,
    promos: JSON.parse(localStorage.getItem("af_promos")) || DEFAULT_PROMOS,
    cart: JSON.parse(localStorage.getItem("af_cart")) || [],
    favorites: JSON.parse(localStorage.getItem("af_favorites")) || [],
    orders: JSON.parse(localStorage.getItem("af_orders")) || [],
    user: JSON.parse(localStorage.getItem("af_user")) || null,
    selectedRegionId: localStorage.getItem("af_selected_region") || "andijon-sh",
    appliedPromo: JSON.parse(localStorage.getItem("af_applied_promo")) || null,
    activeCategory: "Barchasi",
    searchQuery: "",
    sortBy: "default",
    cardQuantities: {}
};

function saveState() {
    localStorage.setItem("af_categories", JSON.stringify(STATE.categories));
    localStorage.setItem("af_regions", JSON.stringify(STATE.regions));
    localStorage.setItem("af_products", JSON.stringify(STATE.products));
    localStorage.setItem("af_branches", JSON.stringify(STATE.branches));
    localStorage.setItem("af_promos", JSON.stringify(STATE.promos));
    localStorage.setItem("af_cart", JSON.stringify(STATE.cart));
    localStorage.setItem("af_favorites", JSON.stringify(STATE.favorites));
    localStorage.setItem("af_orders", JSON.stringify(STATE.orders));
    localStorage.setItem("af_user", JSON.stringify(STATE.user));
    localStorage.setItem("af_selected_region", STATE.selectedRegionId);
    localStorage.setItem("af_applied_promo", JSON.stringify(STATE.appliedPromo));
}

/* ==================== HELPERS ==================== */
function formatPrice(num) {
    return Number(num).toLocaleString("ru-RU") + " so‘m";
}

function getSelectedRegion() {
    return STATE.regions.find(r => r.id === STATE.selectedRegionId) || STATE.regions[0];
}

function showToast(message, type = "info") {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    const icon = type === "success" ? "fa-check-circle" : type === "error" ? "fa-exclamation-circle" : "fa-bell";
    toast.innerHTML = `<i class="fas ${icon}"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateX(100%)";
        setTimeout(() => toast.remove(), 300);
    }, 3200);
}

/* ==================== INITIALIZATION ==================== */
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const loader = document.getElementById("loader");
        if (loader) loader.classList.add("fade-out");
    }, 600);

    initAllRenders();
    bindGlobalEvents();
});

function initAllRenders() {
    renderRegionSelectors();
    updateRegionDisplays();
    renderHomePromoBanners();
    renderPromoCodesSection();
    renderCategories();
    renderPopularProducts();
    renderMenuProducts();
    renderPromoProducts();
    renderBranches();
    updateCartUI();
    updateFavoritesUI();
    updateAuthUI();
}

/* ==================== REGIONS & DELIVERY CALCULATOR ==================== */
function renderRegionSelectors() {
    const selectors = [
        document.getElementById("region-selector"),
        document.getElementById("cart-region-select"),
        document.getElementById("order-district"),
        document.getElementById("reg-region"),
        document.getElementById("prof-region")
    ];

    selectors.forEach(sel => {
        if (!sel) return;
        sel.innerHTML = STATE.regions.map(r =>
            `<option value="${r.id}" ${r.id === STATE.selectedRegionId ? "selected" : ""}>
                ${r.name} (${formatPrice(r.fee)} • ${r.time})
            </option>`
        ).join("");
    });
}

function updateRegionDisplays() {
    const region = getSelectedRegion();
    document.getElementById("current-region-name").textContent = region.name;
    document.getElementById("current-region-time").textContent = region.time;
    document.getElementById("bar-region-name").textContent = region.name;
    document.getElementById("bar-region-price").textContent = formatPrice(region.fee);
    document.getElementById("bar-region-time").textContent = region.time;

    const selectors = ["region-selector", "cart-region-select", "order-district"];
    selectors.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = region.id;
    });

    updateCartUI();
}

function handleRegionChange(newRegionId) {
    STATE.selectedRegionId = newRegionId;
    saveState();
    updateRegionDisplays();
    const region = getSelectedRegion();
    showToast(`Hudud tanlandi: ${region.name} (${formatPrice(region.fee)})`, "info");
}

/* ==================== PROMOTIONS RENDER ==================== */
function renderHomePromoBanners() {
    const container = document.getElementById("home-promo-banners");
    if (!container) return;
    container.innerHTML = `
        <div class="promo-banner-card red-bg">
            <div>
                <span class="promo-banner-tag">1+1 AKSIYA</span>
                <h3>Do‘stlar Kombo Seti</h3>
                <p>2 ta Chicken Burger + 2 ta Fri atigi 68 000 so‘mga!</p>
            </div>
            <button class="btn btn-yellow btn-sm" onclick="quickAddProduct(502)">Savatchaga qo‘shish</button>
        </div>
        <div class="promo-banner-card dark-bg">
            <div>
                <span class="promo-banner-tag">OILAVIY TAKLIF</span>
                <h3>Oilaviy Katta Set</h3>
                <p>4 kishilik to‘yimli set — 25 000 so‘m tejang!</p>
            </div>
            <button class="btn btn-primary btn-sm" onclick="quickAddProduct(501)">Buyurtma berish</button>
        </div>
        <div class="promo-banner-card yellow-bg">
            <div>
                <span class="promo-banner-tag">BEPUL YETKAZISH</span>
                <h3>150 000 so‘mdan oshsa</h3>
                <p>Andijon shahri va barcha tumanlarga yetkazish 0 so‘m!</p>
            </div>
            <a href="#menyu" class="btn btn-dark btn-sm">Menyuga o‘tish</a>
        </div>
    `;
}

function renderPromoCodesSection() {
    const grid = document.getElementById("promo-codes-grid");
    if (!grid) return;
    grid.innerHTML = STATE.promos.map(p => `
        <div class="promo-code-card">
            <span class="promo-code-badge">-${p.percent}% CHEGIRMA</span>
            <div>
                <h4>${p.title}</h4>
                <p style="font-size:0.88rem; color:#52525b; margin-top:4px;">${p.desc}</p>
            </div>
            <div class="promo-copy-row">
                <code>${p.code}</code>
                <button class="btn btn-primary btn-sm" onclick="applyPromoCodeDirect('${p.code}')">Qo‘llash</button>
            </div>
        </div>
    `).join("");
}

/* ==================== CATEGORIES & PRODUCTS ==================== */
function renderCategories() {
    const list = document.getElementById("categories-list");
    if (!list) return;
    list.innerHTML = STATE.categories.map(cat => `
        <button class="category-pill ${STATE.activeCategory === cat ? "active" : ""}" data-cat="${cat}">
            ${cat}
        </button>
    `).join("");

    list.querySelectorAll(".category-pill").forEach(btn => {
        btn.addEventListener("click", () => {
            STATE.activeCategory = btn.dataset.cat;
            renderCategories();
            renderMenuProducts();
        });
    });
}

function createProductCardHTML(product) {
    const qty = STATE.cardQuantities[product.id] || 1;
    const isFav = STATE.favorites.includes(product.id);
    const discountPercent = product.oldPrice
        ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
        : 0;

    return `
        <div class="product-card">
            <div class="product-img-wrap">
                ${discountPercent > 0 ? `<span class="discount-badge">-${discountPercent}%</span>` : ""}
                <button class="fav-card-btn ${isFav ? "active" : ""}" onclick="toggleFavorite(${product.id})" title="Sevimlilarga qo‘shish">
                    <i class="${isFav ? "fas" : "far"} fa-heart"></i>
                </button>
                <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80'">
                <span class="rating-pill"><i class="fas fa-star"></i> ${product.rating}</span>
            </div>
            <div class="product-body">
                <span class="product-cat-label">${product.category}</span>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-desc">${product.description}</p>
                <div class="product-price-row">
                    <span class="current-price">${formatPrice(product.price)}</span>
                    ${product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : ""}
                </div>
                <div class="product-qty-row">
                    <span style="font-size:0.82rem; color:#71717a; font-weight:600;">Miqdor:</span>
                    <div class="qty-selector">
                        <button type="button" class="qty-btn" onclick="changeCardQty(${product.id}, -1)">-</button>
                        <span class="qty-value" id="card-qty-${product.id}">${qty}</span>
                        <button type="button" class="qty-btn" onclick="changeCardQty(${product.id}, 1)">+</button>
                    </div>
                </div>
                <div class="card-actions-grid">
                    <button type="button" class="btn btn-primary btn-sm" onclick="addToCartFromCard(${product.id})">
                        <i class="fas fa-cart-plus"></i> Savatchaga qo‘shish
                    </button>
                    <button type="button" class="btn btn-outline-dark btn-sm" onclick="openProductModal(${product.id})">
                        Batafsil
                    </button>
                </div>
            </div>
        </div>
    `;
}

function renderPopularProducts() {
    const grid = document.getElementById("popular-products-grid");
    if (!grid) return;
    const popularItems = STATE.products.filter(p => p.popular).slice(0, 4);
    grid.innerHTML = popularItems.map(createProductCardHTML).join("");
}

function renderPromoProducts() {
    const grid = document.getElementById("promo-products-grid");
    if (!grid) return;
    const promoItems = STATE.products.filter(p => p.oldPrice && p.oldPrice > p.price).slice(0, 4);
    grid.innerHTML = promoItems.map(createProductCardHTML).join("");
}

function renderMenuProducts() {
    const grid = document.getElementById("menu-products-grid");
    const emptyBox = document.getElementById("no-products-found");
    const titleEl = document.getElementById("active-category-title");
    const countEl = document.getElementById("products-count-label");
    if (!grid) return;

    let filtered = [...STATE.products];

    if (STATE.activeCategory !== "Barchasi") {
        filtered = filtered.filter(p => p.category === STATE.activeCategory);
    }

    if (STATE.searchQuery.trim() !== "") {
        const q = STATE.searchQuery.toLowerCase();
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q)
        );
    }

    if (STATE.sortBy === "price-asc") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (STATE.sortBy === "price-desc") {
        filtered.sort((a, b) => b.price - a.price);
    } else if (STATE.sortBy === "rating") {
        filtered.sort((a, b) => b.rating - a.rating);
    } else if (STATE.sortBy === "discount") {
        filtered = filtered.filter(p => p.oldPrice && p.oldPrice > p.price);
    }

    titleEl.textContent = STATE.activeCategory === "Barchasi" ? "Barcha mahsulotlar" : STATE.activeCategory;
    countEl.textContent = `${filtered.length} ta mahsulot`;

    if (filtered.length === 0) {
        grid.innerHTML = "";
        emptyBox.classList.remove("hidden");
    } else {
        emptyBox.classList.add("hidden");
        grid.innerHTML = filtered.map(createProductCardHTML).join("");
    }
}

window.changeCardQty = function(productId, delta) {
    const current = STATE.cardQuantities[productId] || 1;
    const next = Math.max(1, Math.min(20, current + delta));
    STATE.cardQuantities[productId] = next;
    document.querySelectorAll(`#card-qty-${productId}`).forEach(el => el.textContent = next);
};

window.addToCartFromCard = function(productId) {
    const qty = STATE.cardQuantities[productId] || 1;
    addToCart(productId, qty);
    STATE.cardQuantities[productId] = 1;
    document.querySelectorAll(`#card-qty-${productId}`).forEach(el => el.textContent = 1);
};

window.quickAddProduct = function(productId) {
    addToCart(productId, 1);
};

/* ==================== PRODUCT DETAILS MODAL ==================== */
window.openProductModal = function(productId) {
    const product = STATE.products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById("product-modal");
    const content = document.getElementById("product-detail-content");
    const isFav = STATE.favorites.includes(product.id);

    content.innerHTML = `
        <div class="product-detail-grid">
            <div>
                <img src="${product.image}" alt="${product.name}" class="product-detail-img">
            </div>
            <div style="display:flex; flex-direction:column; justify-content:space-between;">
                <div>
                    <span class="section-tag">${product.category}</span>
                    <h2 style="font-size:1.65rem; margin:8px 0;">${product.name}</h2>
                    <div style="color:#ffb800; font-weight:700; margin-bottom:12px;">
                        <i class="fas fa-star"></i> ${product.rating} / 5.0 (Mijozlar bahosi)
                    </div>
                    <p style="color:#52525b; margin-bottom:18px; line-height:1.7;">${product.description}</p>
                    <div class="product-price-row">
                        <span class="current-price" style="font-size:1.45rem;">${formatPrice(product.price)}</span>
                        ${product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : ""}
                    </div>
                </div>
                <div style="display:flex; gap:10px; margin-top:20px;">
                    <button class="btn btn-primary" style="flex:1;" onclick="addToCart(${product.id}, 1); closeModal('product-modal')">
                        <i class="fas fa-cart-plus"></i> Savatchaga qo‘shish
                    </button>
                    <button class="btn btn-outline-dark" onclick="toggleFavorite(${product.id}); openProductModal(${product.id})">
                        <i class="${isFav ? "fas text-red" : "far"} fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
    openModal("product-modal");
};

/* ==================== CART SYSTEM ==================== */
function addToCart(productId, quantity = 1) {
    const product = STATE.products.find(p => p.id === productId);
    if (!product) return;

    const existing = STATE.cart.find(item => item.productId === productId);
    if (existing) {
        existing.qty += quantity;
    } else {
        STATE.cart.push({ productId, qty: quantity });
    }

    saveState();
    updateCartUI();

    const cartBtn = document.getElementById("open-cart-btn");
    cartBtn.classList.remove("bump");
    void cartBtn.offsetWidth;
    cartBtn.classList.add("bump");

    showToast(`"${product.name}" (${quantity} dona) savatchaga qo‘shildi!`, "success");
}

window.updateCartItemQty = function(productId, delta) {
    const idx = STATE.cart.findIndex(i => i.productId === productId);
    if (idx === -1) return;

    STATE.cart[idx].qty += delta;
    if (STATE.cart[idx].qty <= 0) {
        STATE.cart.splice(idx, 1);
    }
    saveState();
    updateCartUI();
};

window.removeCartItem = function(productId) {
    STATE.cart = STATE.cart.filter(i => i.productId !== productId);
    saveState();
    updateCartUI();
    showToast("Mahsulot savatchadan o‘chirildi", "info");
};

function calculateCartTotals() {
    let subtotal = 0;
    STATE.cart.forEach(item => {
        const prod = STATE.products.find(p => p.id === item.productId);
        if (prod) subtotal += prod.price * item.qty;
    });

    let discount = 0;
    if (STATE.appliedPromo && subtotal > 0) {
        discount = Math.round((subtotal * STATE.appliedPromo.percent) / 100);
    }

    const afterDiscount = Math.max(0, subtotal - discount);
    const region = getSelectedRegion();
    const deliveryFee = subtotal === 0 ? 0 : (afterDiscount >= 150000 ? 0 : region.fee);
    const total = afterDiscount + deliveryFee;

    return { subtotal, discount, deliveryFee, total, region };
}

function updateCartUI() {
    const totalCount = STATE.cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById("cart-count").textContent = totalCount;

    const container = document.getElementById("cart-items-container");
    const footer = document.getElementById("cart-drawer-footer");
    if (!container) return;

    if (STATE.cart.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-shopping-basket"></i>
                <h3>Savatchangiz bo‘sh</h3>
                <p>Menyudan mazali taomlarni tanlab savatchaga qo‘shing.</p>
            </div>
        `;
        footer.classList.add("hidden");
        return;
    }

    footer.classList.remove("hidden");
    container.innerHTML = STATE.cart.map(item => {
        const prod = STATE.products.find(p => p.id === item.productId);
        if (!prod) return "";
        return `
            <div class="cart-item">
                <img src="${prod.image}" alt="${prod.name}">
                <div class="cart-item-info">
                    <h4>${prod.name}</h4>
                    <div class="cart-item-price">${formatPrice(prod.price * item.qty)}</div>
                    <div class="cart-item-controls">
                        <div class="qty-selector">
                            <button class="qty-btn" onclick="updateCartItemQty(${prod.id}, -1)">-</button>
                            <span class="qty-value">${item.qty}</span>
                            <button class="qty-btn" onclick="updateCartItemQty(${prod.id}, 1)">+</button>
                        </div>
                        <button class="remove-cart-item" onclick="removeCartItem(${prod.id})" title="O‘chirish">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join("");

    const { subtotal, discount, deliveryFee, total, region } = calculateCartTotals();
    document.getElementById("cart-subtotal").textContent = formatPrice(subtotal);
    document.getElementById("cart-delivery-region").textContent = region.name;
    document.getElementById("cart-delivery-fee").textContent = deliveryFee === 0 ? "BEPUL (0 so‘m)" : formatPrice(deliveryFee);
    document.getElementById("cart-total").textContent = formatPrice(total);

    const discRow = document.getElementById("cart-discount-row");
    const promoTag = document.getElementById("applied-promo-tag");
    if (STATE.appliedPromo && discount > 0) {
        discRow.classList.remove("hidden");
        document.getElementById("cart-discount").textContent = `-${formatPrice(discount)}`;
        promoTag.classList.remove("hidden");
        document.getElementById("applied-promo-text").textContent = `Kod: ${STATE.appliedPromo.code} (-${STATE.appliedPromo.percent}%)`;
    } else {
        discRow.classList.add("hidden");
        promoTag.classList.add("hidden");
    }
}

window.applyPromoCodeDirect = function(code) {
    const found = STATE.promos.find(p => p.code.toUpperCase() === code.trim().toUpperCase());
    if (!found) {
        showToast("Bunday chegirma kodi topilmadi!", "error");
        return;
    }
    STATE.appliedPromo = found;
    saveState();
    updateCartUI();
    showToast(`"${found.code}" promo kodi qo‘llanildi (-${found.percent}%)!`, "success");
    openCartDrawer();
};

/* ==================== FAVORITES ==================== */
window.toggleFavorite = function(productId) {
    const idx = STATE.favorites.indexOf(productId);
    if (idx === -1) {
        STATE.favorites.push(productId);
        showToast("Sevimlilarga qo‘shildi", "success");
    } else {
        STATE.favorites.splice(idx, 1);
        showToast("Sevimlilardan olib tashlandi", "info");
    }
    saveState();
    updateFavoritesUI();
    renderPopularProducts();
    renderMenuProducts();
    renderPromoProducts();
};

function updateFavoritesUI() {
    document.getElementById("fav-count").textContent = STATE.favorites.length;
    const favProducts = STATE.products.filter(p => STATE.favorites.includes(p.id));
    const grids = [document.getElementById("favorites-grid"), document.getElementById("cabinet-favs-grid")];
    const emptyEl = document.getElementById("empty-favorites");

    grids.forEach(grid => {
        if (!grid) return;
        grid.innerHTML = favProducts.map(createProductCardHTML).join("");
    });

    if (emptyEl) {
        if (favProducts.length === 0) emptyEl.classList.remove("hidden");
        else emptyEl.classList.add("hidden");
    }
}

/* ==================== CHECKOUT & ORDER SUBMISSION ==================== */
function openCheckoutModal() {
    if (STATE.cart.length === 0) {
        showToast("Avval savatchaga mahsulot qo‘shing!", "error");
        return;
    }
    closeCartDrawer();

    if (STATE.user) {
        document.getElementById("order-fullname").value = STATE.user.name || "";
        document.getElementById("order-phone").value = STATE.user.phone || "+998 ";
        if (STATE.user.address) document.getElementById("order-street").value = STATE.user.address;
    }

    updateCheckoutSummary();
    openModal("checkout-modal");
}

function updateCheckoutSummary() {
    const listEl = document.getElementById("checkout-items-list");
    listEl.innerHTML = STATE.cart.map(item => {
        const prod = STATE.products.find(p => p.id === item.productId);
        if (!prod) return "";
        return `
            <div class="chk-item-row">
                <span>${prod.name} x ${item.qty}</span>
                <strong>${formatPrice(prod.price * item.qty)}</strong>
            </div>
        `;
    }).join("");

    const { subtotal, discount, deliveryFee, total, region } = calculateCartTotals();
    document.getElementById("chk-subtotal").textContent = formatPrice(subtotal);
    document.getElementById("chk-district-name").textContent = region.name;
    document.getElementById("chk-delivery").textContent = deliveryFee === 0 ? "BEPUL" : formatPrice(deliveryFee);
    document.getElementById("chk-time").textContent = region.time;
    document.getElementById("chk-total").textContent = formatPrice(total);

    const discRow = document.getElementById("chk-discount-row");
    if (discount > 0) {
        discRow.classList.remove("hidden");
        document.getElementById("chk-discount").textContent = `-${formatPrice(discount)}`;
    } else {
        discRow.classList.add("hidden");
    }
}

function submitOrder(e) {
    e.preventDefault();
    const fullname = document.getElementById("order-fullname").value.trim();
    const phone = document.getElementById("order-phone").value.trim();
    const districtId = document.getElementById("order-district").value;
    const street = document.getElementById("order-street").value.trim();
    const house = document.getElementById("order-house").value.trim();
    const landmark = document.getElementById("order-landmark").value.trim();
    const comment = document.getElementById("order-comment").value.trim();
    const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
    const sendTelegram = document.getElementById("send-telegram-sim").checked;

    STATE.selectedRegionId = districtId;
    const { subtotal, discount, deliveryFee, total, region } = calculateCartTotals();

    const orderId = "AF-" + (1001 + STATE.orders.length);
    const itemsDetails = STATE.cart.map(item => {
        const p = STATE.products.find(x => x.id === item.productId);
        return { name: p.name, qty: item.qty, price: p.price * item.qty };
    });

    const newOrder = {
        id: orderId,
        date: new Date().toLocaleString("uz-UZ"),
        customerName: fullname,
        phone,
        province: "Andijon viloyati",
        regionName: region.name,
        address: `${street}, ${house} (Mo‘ljal: ${landmark})`,
        comment,
        paymentMethod,
        items: itemsDetails,
        subtotal,
        discount,
        deliveryFee,
        total,
        status: "Qabul qilindi"
    };

    STATE.orders.unshift(newOrder);
    STATE.cart = [];
    STATE.appliedPromo = null;
    saveState();

    updateCartUI();
    updateRegionDisplays();
    closeModal("checkout-modal");

    // Telegram ready payload formatting
    const tgText = `🍔 YANGI BUYURTMA: #${newOrder.id}\n` +
        `👤 Mijoz: ${newOrder.customerName}\n` +
        `📞 Tel: ${newOrder.phone}\n` +
        `📍 Hudud: Andijon viloyati, ${newOrder.regionName}\n` +
        `🏠 Manzil: ${newOrder.address}\n` +
        `💳 To‘lov: ${newOrder.paymentMethod}\n` +
        `🛒 Taomlar:\n` +
        newOrder.items.map(i => `  • ${i.name} x${i.qty} = ${formatPrice(i.price)}`).join("\n") +
        `\n🚚 Yetkazish: ${formatPrice(newOrder.deliveryFee)}\n` +
        `💰 JAMI: ${formatPrice(newOrder.total)}`;

    document.getElementById("success-order-id").textContent = "#" + newOrder.id;
    document.getElementById("success-order-phone").textContent = newOrder.phone;
    document.getElementById("telegram-message-text").textContent = tgText;
    document.getElementById("telegram-payload-preview").style.display = sendTelegram ? "block" : "none";
    document.getElementById("track-created-order-btn").dataset.orderId = newOrder.id;

    openModal("order-success-modal");
    showToast("Buyurtmangiz muvaffaqiyatli rasmiylashtirildi!", "success");
}

/* ==================== ORDER TRACKING (DEMO) ==================== */
function renderOrderTracking(orderIdInput) {
    const box = document.getElementById("track-result-box");
    const cleanId = orderIdInput.replace("#", "").trim().toUpperCase();
    const order = STATE.orders.find(o => o.id.toUpperCase() === cleanId);

    if (!order) {
        box.innerHTML = `<p style="color:#e62e2d; font-weight:600;">"${cleanId}" raqamli buyurtma topilmadi. Avval buyurtma bering yoki raqamni tekshiring.</p>`;
        return;
    }

    const stages = ["Qabul qilindi", "Tayyorlanmoqda", "Kuryer yo‘lga chiqdi", "Yetkazib berildi"];
    const currentIdx = stages.indexOf(order.status);

    box.innerHTML = `
        <div style="background:#f4f4f6; padding:14px; border-radius:10px; margin-bottom:14px;">
            <strong>Buyurtma #${order.id}</strong> • <span>${order.date}</span>
            <p style="font-size:0.9rem; margin-top:4px;">Hudud: <strong>${order.regionName}</strong> | Jami: <strong>${formatPrice(order.total)}</strong></p>
        </div>
        <div class="track-steps">
            ${stages.map((st, idx) => `
                <div class="track-step ${idx <= currentIdx ? "done" : ""}">
                    <i class="fas ${idx <= currentIdx ? "fa-check-circle" : "fa-clock"}"></i>
                    <span>${st}</span>
                </div>
            `).join("")}
        </div>
    `;
}

/* ==================== BRANCHES RENDER ==================== */
function renderBranches() {
    const grid = document.getElementById("branches-grid");
    if (!grid) return;
    grid.innerHTML = STATE.branches.map(b => `
        <div class="branch-card">
            <div>
                <div class="branch-card-header">
                    <h3>${b.name}</h3>
                    <span class="branch-demo-tag">Demo</span>
                </div>
                <div class="branch-info-list" style="margin-top:14px;">
                    <div><i class="fas fa-map-marker-alt"></i> <span>${b.address}</span></div>
                    <div><i class="fas fa-phone-alt"></i> <span>${b.phone}</span></div>
                    <div><i class="fas fa-clock"></i> <span>Ish vaqti: ${b.hours}</span></div>
                </div>
            </div>
            <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.mapQuery || b.address)}" target="_blank" rel="noopener" class="btn btn-outline-dark btn-sm btn-block">
                <i class="fas fa-map-marked-alt"></i> Xarita orqali ko‘rish
            </a>
        </div>
    `).join("");
}

/* ==================== USER AUTH & CABINET (DEMO) ==================== */
function updateAuthUI() {
    const label = document.getElementById("auth-btn-label");
    const formsView = document.getElementById("auth-forms-view");
    const cabView = document.getElementById("user-cabinet-view");

    if (STATE.user) {
        label.textContent = STATE.user.name.split(" ")[0];
        formsView.classList.add("hidden");
        cabView.classList.remove("hidden");

        document.getElementById("prof-name").value = STATE.user.name || "";
        document.getElementById("prof-phone").value = STATE.user.phone || "";
        document.getElementById("prof-region").value = STATE.user.regionId || "andijon-sh";
        document.getElementById("prof-address").value = STATE.user.address || "";
        renderUserOrdersHistory();
    } else {
        label.textContent = "Kirish";
        formsView.classList.remove("hidden");
        cabView.classList.add("hidden");
    }
}

function renderUserOrdersHistory() {
    const list = document.getElementById("user-orders-list");
    if (!list) return;
    if (STATE.orders.length === 0) {
        list.innerHTML = `<p style="color:#71717a;">Sizda hali buyurtmalar tarixi mavjud emas.</p>`;
        return;
    }
    list.innerHTML = STATE.orders.map(o => `
        <div class="order-history-card">
            <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
                <strong>#${o.id} — ${o.regionName}</strong>
                <span style="background:#dcfce7; color:#166534; padding:2px 8px; border-radius:6px; font-size:0.8rem; font-weight:700;">${o.status}</span>
            </div>
            <p style="font-size:0.85rem; color:#52525b;">${o.date} • To‘lov: ${o.paymentMethod}</p>
            <p style="font-size:0.9rem; margin-top:6px;">Jami: <strong>${formatPrice(o.total)}</strong></p>
        </div>
    `).join("");
}

/* ==================== ADMIN PANEL (FRONTEND DEMO) ==================== */
function renderAdminPanelAll() {
    // 1. Products Table
    const prodTbody = document.getElementById("admin-products-tbody");
    prodTbody.innerHTML = STATE.products.map(p => `
        <tr>
            <td><img src="${p.image}" alt="${p.name}"></td>
            <td><strong>${p.name}</strong></td>
            <td>${p.category}</td>
            <td>${formatPrice(p.price)}</td>
            <td>
                <button class="btn btn-outline-dark btn-sm" onclick="editAdminProduct(${p.id})"><i class="fas fa-edit"></i></button>
                <button class="btn btn-primary btn-sm" onclick="deleteAdminProduct(${p.id})"><i class="fas fa-trash"></i></button>
            </td>
        </tr>
    `).join("");

    // Product Category Select in Admin
    const admCatSel = document.getElementById("adm-prod-cat");
    admCatSel.innerHTML = STATE.categories.filter(c => c !== "Barchasi").map(c => `<option value="${c}">${c}</option>`).join("");

    // 2. Categories List
    const catList = document.getElementById("admin-categories-list");
    catList.innerHTML = STATE.categories.filter(c => c !== "Barchasi").map(c => `
        <div class="admin-tag-item">
            <span>${c}</span>
            <button type="button" style="border:none; background:none; color:#e62e2d; cursor:pointer;" onclick="deleteAdminCategory('${c}')"><i class="fas fa-times"></i></button>
        </div>
    `).join("");

    // 3. Orders Table
    const ordTbody = document.getElementById("admin-orders-tbody");
    ordTbody.innerHTML = STATE.orders.length === 0
        ? `<tr><td colspan="6">Hozircha buyurtmalar yo‘q.</td></tr>`
        : STATE.orders.map(o => `
            <tr>
                <td><strong>#${o.id}</strong></td>
                <td>${o.customerName}<br><small>${o.phone}</small></td>
                <td>${o.regionName}<br><small>${o.address}</small></td>
                <td><strong>${formatPrice(o.total)}</strong></td>
                <td>${o.paymentMethod}</td>
                <td>
                    <select onchange="changeOrderStatus('${o.id}', this.value)" style="padding:5px; border-radius:6px;">
                        ${["Qabul qilindi", "Tayyorlanmoqda", "Kuryer yo‘lga chiqdi", "Yetkazib berildi"].map(st =>
                            `<option value="${st}" ${o.status === st ? "selected" : ""}>${st}</option>`
                        ).join("")}
                    </select>
                </td>
            </tr>
        `).join("");

    // 4. Regions Delivery Pricing
    const regTbody = document.getElementById("admin-regions-tbody");
    regTbody.innerHTML = STATE.regions.map(r => `
        <tr>
            <td><strong>${r.name}</strong></td>
            <td><input type="number" id="reg-fee-${r.id}" value="${r.fee}" step="1000" style="width:120px; padding:6px;"></td>
            <td><input type="text" id="reg-time-${r.id}" value="${r.time}" style="width:120px; padding:6px;"></td>
            <td><button class="btn btn-primary btn-sm" onclick="saveRegionPricing('${r.id}')">Saqlash</button></td>
        </tr>
    `).join("");

    // 5. Branches
    const brList = document.getElementById("admin-branches-list");
    brList.innerHTML = STATE.branches.map(b => `
        <div class="admin-mini-card">
            <div>
                <strong>${b.name}</strong>
                <p style="font-size:0.84rem; color:#52525b;">${b.address} • ${b.phone}</p>
            </div>
            <button class="btn btn-primary btn-sm" onclick="deleteAdminBranch(${b.id})"><i class="fas fa-trash"></i></button>
        </div>
    `).join("");

    // 6. Promos
    const prList = document.getElementById("admin-promos-list");
    prList.innerHTML = STATE.promos.map(p => `
        <div class="admin-mini-card">
            <div>
                <strong>${p.code} (-${p.percent}%)</strong>
                <p style="font-size:0.84rem; color:#52525b;">${p.title}</p>
            </div>
            <button class="btn btn-primary btn-sm" onclick="deleteAdminPromo('${p.code}')"><i class="fas fa-trash"></i></button>
        </div>
    `).join("");
}

window.editAdminProduct = function(id) {
    const p = STATE.products.find(x => x.id === id);
    if (!p) return;
    document.getElementById("admin-product-form").classList.remove("hidden");
    document.getElementById("adm-prod-form-title").textContent = "Mahsulotni tahrirlash";
    document.getElementById("adm-prod-id").value = p.id;
    document.getElementById("adm-prod-name").value = p.name;
    document.getElementById("adm-prod-cat").value = p.category;
    document.getElementById("adm-prod-price").value = p.price;
    document.getElementById("adm-prod-old-price").value = p.oldPrice || "";
    document.getElementById("adm-prod-img").value = p.image;
    document.getElementById("adm-prod-desc").value = p.description;
};

window.deleteAdminProduct = function(id) {
    STATE.products = STATE.products.filter(p => p.id !== id);
    saveState();
    initAllRenders();
    renderAdminPanelAll();
    showToast("Mahsulot o‘chirildi", "info");
};

window.deleteAdminCategory = function(catName) {
    STATE.categories = STATE.categories.filter(c => c !== catName);
    saveState();
    renderCategories();
    renderAdminPanelAll();
    showToast("Kategoriya o‘chirildi", "info");
};

window.changeOrderStatus = function(orderId, newStatus) {
    const order = STATE.orders.find(o => o.id === orderId);
    if (order) {
        order.status = newStatus;
        saveState();
        showToast(`Buyurtma #${orderId} holati: ${newStatus}`, "success");
    }
};

window.saveRegionPricing = function(regionId) {
    const region = STATE.regions.find(r => r.id === regionId);
    if (!region) return;
    const newFee = parseInt(document.getElementById(`reg-fee-${regionId}`).value, 10) || 0;
    const newTime = document.getElementById(`reg-time-${regionId}`).value.trim() || "30-45 daq";
    region.fee = newFee;
    region.time = newTime;
    saveState();
    renderRegionSelectors();
    updateRegionDisplays();
    showToast(`${region.name} yetkazish narxi yangilandi!`, "success");
};

window.deleteAdminBranch = function(id) {
    STATE.branches = STATE.branches.filter(b => b.id !== id);
    saveState();
    renderBranches();
    renderAdminPanelAll();
    showToast("Filial o‘chirildi", "info");
};

window.deleteAdminPromo = function(code) {
    STATE.promos = STATE.promos.filter(p => p.code !== code);
    saveState();
    renderPromoCodesSection();
    renderAdminPanelAll();
    showToast("Aksiya o‘chirildi", "info");
};

/* ==================== MODAL & DRAWER CONTROLS ==================== */
function openModal(id) {
    document.getElementById(id).classList.add("open");
}

function closeModal(id) {
    document.getElementById(id).classList.remove("open");
}

function openCartDrawer() {
    document.getElementById("cart-drawer").classList.add("open");
    document.getElementById("cart-backdrop").classList.add("open");
}

function closeCartDrawer() {
    document.getElementById("cart-drawer").classList.remove("open");
    document.getElementById("cart-backdrop").classList.remove("open");
}

/* ==================== GLOBAL EVENT LISTENERS ==================== */
function bindGlobalEvents() {
    // Navbar scroll effect
    window.addEventListener("scroll", () => {
        const nav = document.getElementById("navbar");
        if (window.scrollY > 30) nav.classList.add("scrolled");
        else nav.classList.remove("scrolled");
    });

    // Mobile drawer
    const mobDrawer = document.getElementById("mobile-drawer");
    const mobBackdrop = document.getElementById("drawer-backdrop");
    document.getElementById("mobile-menu-btn").addEventListener("click", () => {
        mobDrawer.classList.add("open");
        mobBackdrop.classList.add("open");
    });
    const closeMob = () => {
        mobDrawer.classList.remove("open");
        mobBackdrop.classList.remove("open");
    };
    document.getElementById("close-drawer-btn").addEventListener("click", closeMob);
    mobBackdrop.addEventListener("click", closeMob);
    document.querySelectorAll(".mobile-link").forEach(l => l.addEventListener("click", closeMob));

    // Region Selectors sync
    ["region-selector", "cart-region-select", "order-district"].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener("change", (e) => {
            handleRegionChange(e.target.value);
            if (id === "order-district") updateCheckoutSummary();
        });
    });

    document.getElementById("open-region-modal-top").addEventListener("click", () => {
        document.getElementById("menyu").scrollIntoView({ behavior: "smooth" });
        document.getElementById("region-selector").focus();
    });

    // Search & Sort
    const searchInput = document.getElementById("search-input");
    const clearSearchBtn = document.getElementById("clear-search-btn");
    searchInput.addEventListener("input", (e) => {
        STATE.searchQuery = e.target.value;
        clearSearchBtn.classList.toggle("hidden", STATE.searchQuery === "");
        renderMenuProducts();
    });
    clearSearchBtn.addEventListener("click", () => {
        STATE.searchQuery = "";
        searchInput.value = "";
        clearSearchBtn.classList.add("hidden");
        renderMenuProducts();
    });
    document.getElementById("sort-select").addEventListener("change", (e) => {
        STATE.sortBy = e.target.value;
        renderMenuProducts();
    });
    document.getElementById("reset-filters-btn").addEventListener("click", () => {
        STATE.activeCategory = "Barchasi";
        STATE.searchQuery = "";
        STATE.sortBy = "default";
        searchInput.value = "";
        document.getElementById("sort-select").value = "default";
        clearSearchBtn.classList.add("hidden");
        renderCategories();
        renderMenuProducts();
    });

    // Footer category links
    document.querySelectorAll(".footer-cat-link").forEach(link => {
        link.addEventListener("click", () => {
            STATE.activeCategory = link.dataset.cat;
            renderCategories();
            renderMenuProducts();
        });
    });

    // Cart Drawer Buttons
    document.getElementById("open-cart-btn").addEventListener("click", openCartDrawer);
    document.getElementById("close-cart-btn").addEventListener("click", closeCartDrawer);
    document.getElementById("cart-backdrop").addEventListener("click", closeCartDrawer);

    // Promo code apply/remove in Cart
    document.getElementById("apply-promo-btn").addEventListener("click", () => {
        const code = document.getElementById("promo-code-input").value;
        applyPromoCodeDirect(code);
    });
    document.getElementById("remove-promo-btn").addEventListener("click", () => {
        STATE.appliedPromo = null;
        saveState();
        updateCartUI();
        showToast("Chegirma kodi bekor qilindi", "info");
    });

    // Checkout Modal
    document.getElementById("proceed-checkout-btn").addEventListener("click", openCheckoutModal);
    document.getElementById("close-checkout-modal").addEventListener("click", () => closeModal("checkout-modal"));
    document.getElementById("checkout-form").addEventListener("submit", submitOrder);

    document.querySelectorAll('input[name="payment-method"]').forEach(radio => {
        radio.addEventListener("change", (e) => {
            const notice = document.getElementById("online-payment-notice");
            if (e.target.value !== "Naqd pul") notice.classList.remove("hidden");
            else notice.classList.add("hidden");
        });
    });

    // Order Success & Track
    document.getElementById("close-success-modal").addEventListener("click", () => closeModal("order-success-modal"));
    document.getElementById("track-created-order-btn").addEventListener("click", (e) => {
        const id = e.currentTarget.dataset.orderId;
        closeModal("order-success-modal");
        document.getElementById("track-order-input").value = id;
        renderOrderTracking(id);
        openModal("track-modal");
    });

    const openTrack = () => {
        closeMob();
        if (STATE.orders.length > 0) {
            document.getElementById("track-order-input").value = STATE.orders[0].id;
            renderOrderTracking(STATE.orders[0].id);
        }
        openModal("track-modal");
    };
    document.getElementById("open-track-btn").addEventListener("click", openTrack);
    document.getElementById("mobile-track-btn").addEventListener("click", openTrack);
    document.getElementById("footer-track-btn").addEventListener("click", openTrack);
    document.getElementById("close-track-modal").addEventListener("click", () => closeModal("track-modal"));
    document.getElementById("search-track-btn").addEventListener("click", () => {
        renderOrderTracking(document.getElementById("track-order-input").value);
    });

    // Favorites Modal
    document.getElementById("open-favorites-btn").addEventListener("click", () => {
        updateFavoritesUI();
        openModal("favorites-modal");
    });
    document.getElementById("close-favorites-modal").addEventListener("click", () => closeModal("favorites-modal"));
    document.getElementById("close-product-modal").addEventListener("click", () => closeModal("product-modal"));

    // User Auth & Cabinet
    document.getElementById("open-auth-btn").addEventListener("click", () => {
        updateAuthUI();
        openModal("auth-modal");
    });
    document.getElementById("close-auth-modal").addEventListener("click", () => closeModal("auth-modal"));

    document.querySelectorAll(".auth-tab").forEach(tab => {
        tab.addEventListener("click", () => {
            document.querySelectorAll(".auth-tab").forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            const mode = tab.dataset.authTab;
            document.getElementById("login-form").classList.toggle("hidden", mode !== "login");
            document.getElementById("register-form").classList.toggle("hidden", mode !== "register");
        });
    });

    document.getElementById("login-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const phone = document.getElementById("login-phone").value;
        STATE.user = {
            name: "Andijon Mijozi (Demo)",
            phone,
            regionId: STATE.selectedRegionId,
            address: "Andijon shahri, Markaz"
        };
        saveState();
        updateAuthUI();
        showToast("Demo kabinetga muvaffaqiyatli kirdingiz!", "success");
    });

    document.getElementById("register-form").addEventListener("submit", (e) => {
        e.preventDefault();
        STATE.user = {
            name: document.getElementById("reg-name").value,
            phone: document.getElementById("reg-phone").value,
            regionId: document.getElementById("reg-region").value,
            address: ""
        };
        saveState();
        updateAuthUI();
        showToast("Ro‘yxatdan o‘tish muvaffaqiyatli yakunlandi!", "success");
    });

    document.getElementById("update-profile-form").addEventListener("submit", (e) => {
        e.preventDefault();
        if (!STATE.user) return;
        STATE.user.name = document.getElementById("prof-name").value;
        STATE.user.phone = document.getElementById("prof-phone").value;
        STATE.user.regionId = document.getElementById("prof-region").value;
        STATE.user.address = document.getElementById("prof-address").value;
        saveState();
        updateAuthUI();
        showToast("Shaxsiy ma'lumotlar saqlandi!", "success");
    });

    document.getElementById("logout-btn").addEventListener("click", () => {
        STATE.user = null;
        saveState();
        updateAuthUI();
        showToast("Tizimdan chiqdingiz", "info");
    });

    document.querySelectorAll(".cab-tab[data-cab]").forEach(tab => {
        tab.addEventListener("click", () => {
            document.querySelectorAll(".cab-tab[data-cab]").forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            const panel = tab.dataset.cab;
            document.getElementById("cab-profile-panel").classList.toggle("hidden", panel !== "profile");
            document.getElementById("cab-orders-panel").classList.toggle("hidden", panel !== "orders");
            document.getElementById("cab-favs-panel").classList.toggle("hidden", panel !== "favs");
        });
    });

    // Contact Form
    document.getElementById("contact-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("contact-name").value;
        showToast(`Rahmat, ${name}! Xabaringiz qabul qilindi.`, "success");
        e.target.reset();
    });

    // Admin Panel Controls
    const openAdmin = () => {
        closeMob();
        renderAdminPanelAll();
        openModal("admin-modal");
    };
    document.getElementById("open-admin-btn").addEventListener("click", openAdmin);
    document.getElementById("mobile-admin-btn").addEventListener("click", openAdmin);
    document.getElementById("close-admin-modal").addEventListener("click", () => closeModal("admin-modal"));

    document.querySelectorAll(".admin-tab").forEach(tab => {
        tab.addEventListener("click", () => {
            document.querySelectorAll(".admin-tab").forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            const target = tab.dataset.adminTab;
            document.querySelectorAll(".admin-panel").forEach(p => p.classList.add("hidden"));
            document.getElementById(`admin-tab-${target}`).classList.remove("hidden");
        });
    });

    document.getElementById("toggle-add-product-form").addEventListener("click", () => {
        const form = document.getElementById("admin-product-form");
        form.reset();
        document.getElementById("adm-prod-id").value = "";
        document.getElementById("adm-prod-form-title").textContent = "Yangi mahsulot qo‘shish";
        form.classList.toggle("hidden");
    });

    document.getElementById("cancel-admin-prod").addEventListener("click", () => {
        document.getElementById("admin-product-form").classList.add("hidden");
    });

    document.getElementById("admin-product-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const idVal = document.getElementById("adm-prod-id").value;
        const name = document.getElementById("adm-prod-name").value.trim();
        const category = document.getElementById("adm-prod-cat").value;
        const price = parseInt(document.getElementById("adm-prod-price").value, 10);
        const oldPriceVal = document.getElementById("adm-prod-old-price").value;
        const oldPrice = oldPriceVal ? parseInt(oldPriceVal, 10) : null;
        const image = document.getElementById("adm-prod-img").value.trim();
        const description = document.getElementById("adm-prod-desc").value.trim();

        if (idVal) {
            const existing = STATE.products.find(p => p.id === parseInt(idVal, 10));
            if (existing) {
                Object.assign(existing, { name, category, price, oldPrice, image, description });
            }
            showToast("Mahsulot tahrirlandi!", "success");
        } else {
            STATE.products.unshift({
                id: Date.now(),
                name,
                category,
                price,
                oldPrice,
                rating: 4.9,
                popular: false,
                image,
                description
            });
            showToast("Yangi mahsulot qo‘shildi!", "success");
        }

        saveState();
        initAllRenders();
        renderAdminPanelAll();
        document.getElementById("admin-product-form").classList.add("hidden");
    });

    document.getElementById("admin-cat-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const newCat = document.getElementById("adm-new-cat").value.trim();
        if (newCat && !STATE.categories.includes(newCat)) {
            STATE.categories.push(newCat);
            saveState();
            renderCategories();
            renderAdminPanelAll();
            showToast("Yangi kategoriya qo‘shildi!", "success");
        }
        e.target.reset();
    });

    document.getElementById("admin-branch-form").addEventListener("submit", (e) => {
        e.preventDefault();
        STATE.branches.push({
            id: Date.now(),
            name: document.getElementById("adm-br-name").value.trim(),
            address: document.getElementById("adm-br-address").value.trim(),
            phone: document.getElementById("adm-br-phone").value.trim(),
            hours: document.getElementById("adm-br-hours").value.trim(),
            mapQuery: document.getElementById("adm-br-address").value.trim()
        });
        saveState();
        renderBranches();
        renderAdminPanelAll();
        e.target.reset();
        showToast("Yangi filial qo‘shildi!", "success");
    });

    document.getElementById("admin-promo-form").addEventListener("submit", (e) => {
        e.preventDefault();
        STATE.promos.push({
            code: document.getElementById("adm-promo-code").value.trim().toUpperCase(),
            percent: parseInt(document.getElementById("adm-promo-percent").value, 10),
            title: document.getElementById("adm-promo-desc").value.trim(),
            desc: "Admin panel orqali yaratilgan aksiya"
        });
        saveState();
        renderPromoCodesSection();
        renderAdminPanelAll();
        e.target.reset();
        showToast("Yangi aksiya kodi qo‘shildi!", "success");
    });
}





















