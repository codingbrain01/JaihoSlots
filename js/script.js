// ================================================================
// PAGE LOAD HANDLER
// ================================================================
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
    initializeScrollButton();
});

// ================================================================
// SWIPER INITIALIZATION - HERO SLIDER
// ================================================================
new Swiper("#swiper-1", {
    autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
    },
    pagination: {
        el: "#swiper-1 .swiper-pagination",
        clickable: true,
    },
    lazy: true,
    loop: true,
    speed: 800,
    effect: 'slide',
    grabCursor: true,
});

// ================================================================
// GAME DATABASE
// ================================================================
const games = [
    // Top Picks Games
    { name: "Gates of Olympus", provider: "Pragmatic Play", img: "images/js-game-01.png" }, // 0
    { name: "Power of Kraken II", provider: "Relax Gaming", img: "images/js-game-02.png" }, // 1
    { name: "Nightfall Hunting", provider: "Tada Gaming", img: "images/js-game-03.png" }, // 2
    { name: "Jungle Delight", provider: "PG Soft", img: "images/js-game-04.png" }, // 3
    { name: "Coin Volcano", provider: "PG Soft", img: "images/js-game-05.png" }, // 4
    { name: "Yakuza Honor", provider: "PG Soft", img: "images/js-game-06.png" }, // 5
    { name: "Dragon Hatch", provider: "PG Soft", img: "images/js-game-07.png" }, // 6
    { name: "Super Ace", provider: "Jili", img: "images/js-game-08.png" }, // 7
    { name: "Aztec Bonanza", provider: "Pragmatic Play", img: "images/js-game-09.png" }, // 8
    { name: "Fortune Tiger", provider: "PG Soft", img: "images/js-game-10.png" }, // 9
    { name: "Starlight Princess", provider: "PG Soft", img: "images/js-game-11.png" }, // 10
    { name: "Gem Saviour", provider: "PG Soft", img: "images/js-game-12.png" }, // 11
    { name: "Fortune Gems 2", provider: "Jili", img: "images/js-game-13.png" }, // 12
    { name: "Jurassic Kingdom", provider: "PG Soft", img: "images/js-game-14.png" }, // 13

    // Slots Games
    { name: "Doomsday Rampage", provider: "PG Soft", img: "images/js-game-slot01.svg" }, // 14
    { name: "Ganesha Gold", provider: "PG Soft", img: "images/js-game-slot02.svg" }, // 15
    { name: "The Crypt", provider: "Nolimit City", img: "images/js-game-slot03.svg" }, // 16
    { name: "Mythic Deep", provider: "Jaihoslots Interactive", img: "images/js-game-slot04.svg" }, // 17
    { name: "Candy Rush 2", provider: "Microgaming", img: "images/js-game-slot05.svg" }, // 18
    { name: "Thor God of Lightning", provider: "Red Tiger Gaming", img: "images/js-game-slot06.svg" }, // 19
    { name: "Kitsune Adventure", provider: "Games Global", img: "images/js-game-slot07.svg" }, // 20
    { name: "Piggies in Space", provider: "Jaihoslots Interactive", img: "images/js-game-slot08.svg" }, // 21
    { name: "Flaming Mustang", provider: "Jaihoslots Interactive", img: "images/js-game-slot09.svg" }, // 22
    { name: "Dabanggg", provider: "Jaihoslots Interactive", img: "images/js-game-slot10.svg" }, // 23
    { name: "Bison Moon", provider: "Jaihoslots Interactive", img: "images/js-game-slot11.svg" }, // 24
    { name: "Xerxes", provider: "Jaihoslots Interactive", img: "images/js-game-slot12.svg" }, // 25
    { name: "Fortune Gems 4", provider: "Jili", img: "images/js-game-slot13.svg" }, // 26
    { name: "Symbiote", provider: "Jaihoslots Interactive", img: "images/js-game-slot14.svg" }, // 27
    { name: "Crazy Hunter", provider: "Jaihoslots Interactive", img: "images/js-game-slot15.svg" }, // 28
    { name: "Dragon's Treasure Quest", provider: "Jaihoslots Interactive", img: "images/js-game-slot16.svg" }, // 29
    { name: "Fortune Jungle", provider: "Jaihoslots Interactive", img: "images/js-game-slot17.svg" }, // 30
    { name: "Fire Toad", provider: "Jaihoslots Interactive", img: "images/js-game-slot18.svg" }, // 31
    { name: "Stormborn", provider: "Jaihoslots Interactive", img: "images/js-game-slot19.svg" }, // 32
    { name: "Dragon Hatch IV", provider: "Jaihoslots Interactive", img: "images/js-game-slot20.svg" }, // 33
    { name: "Chicken Road 2", provider: "Jaihoslots Interactive", img: "images/js-game-slot21.svg" }, // 34
    { name: "Penalty Shootout", provider: "Jaihoslots Interactive", img: "images/js-game-slot22.svg" }, // 35
    { name: "Lucky Jaguar", provider: "Jaihoslots Interactive", img: "images/js-game-slot23.svg" }, // 36
    { name: "Mahjong Wins III", provider: "Jaihoslots Interactive", img: "images/js-game-slot24.svg" }, // 37
    { name: "Wukong", provider: "Jaihoslots Interactive", img: "images/js-game-slot25.svg" }, // 38
    { name: "Golden Express", provider: "Jaihoslots Interactive", img: "images/js-game-slot26.svg" }, // 39
    { name: "Lion Saga Odyssey", provider: "Jaihoslots Interactive", img: "images/js-game-slot27.svg" }, // 40
    { name: "Cursed Crypt", provider: "Jaihoslots Interactive", img: "images/js-game-slot28.svg" }, // 41
    { name: "Darkness", provider: "Jaihoslots Interactive", img: "images/js-game-slot29.svg" }, // 42
    { name: "Fortune Coins", provider: "Jaihoslots Interactive", img: "images/js-game-slot30.svg" }, // 43
    { name: "Super Texas", provider: "Jaihoslots Interactive", img: "images/js-game-slot31.svg" }, // 44
    { name: "Gemstones Gold", provider: "Jaihoslots Interactive", img: "images/js-game-slot32.svg" }, // 45
    { name: "Fortune Gems 500", provider: "Jaihoslots Interactive", img: "images/js-game-slot33.svg" }, // 46

    // Flying Games
    { name: "Uono Aviator", provider: "Jaihoslots Interactive", img: "images/js-game-fly01.svg" }, // 47
    { name: "Aviator", provider: "Jaihoslots Interactive", img: "images/js-game-fly02.svg" }, // 48
    { name: "Aviatrix", provider: "Jaihoslots Interactive", img: "images/js-game-fly03.svg" }, // 49
    { name: "CrashX", provider: "Jaihoslots Interactive", img: "images/js-game-fly04.svg" }, // 50
    { name: "Cappadocia", provider: "Jaihoslots Interactive", img: "images/js-game-fly05.svg" }, // 51
    { name: "CricketX", provider: "Jaihoslots Interactive", img: "images/js-game-fly06.svg" }, // 52
    { name: "Crash", provider: "Jaihoslots Interactive", img: "images/js-game-fly07.svg" }, // 53
    { name: "CrashX", provider: "Jaihoslots Interactive", img: "images/js-game-fly08.svg" }, // 54
    { name: "Zeppelin", provider: "Jaihoslots Interactive", img: "images/js-game-fly09.svg" }, // 55

    // Spinning Wheels Games
    { name: "Limbo", provider: "Jaihoslots Interactive", img: "images/js-game-spin01.svg" }, // 56
    { name: "Mines", provider: "Jaihoslots Interactive", img: "images/js-game-spin02.svg" }, // 57
    { name: "Keno", provider: "Jaihoslots Interactive", img: "images/js-game-spin03.svg" }, // 58
    { name: "Plinko", provider: "Jaihoslots Interactive", img: "images/js-game-spin04.svg" }, // 59
    { name: "Hilo", provider: "Jaihoslots Interactive", img: "images/js-game-spin05.svg" }, // 60
    { name: "Roulette", provider: "Jaihoslots Interactive", img: "images/js-game-spin06.svg" }, // 61
    { name: "Ander Bahar", provider: "Jaihoslots Interactive", img: "images/js-game-spin07.svg" }, // 62
    { name: "Tower", provider: "Jaihoslots Interactive", img: "images/js-game-spin08.svg" }, // 63
    { name: "Coins", provider: "Jaihoslots Interactive", img: "images/js-game-spin09.svg" }, // 64
    { name: "Dice", provider: "Jaihoslots Interactive", img: "images/js-game-spin10.svg" }, // 65
    { name: "Huge Wheel", provider: "Jaihoslots Interactive", img: "images/js-game-spin11.svg" }, // 66
    { name: "Fruits", provider: "Jaihoslots Interactive", img: "images/js-game-spin12.svg" }, // 67
];

// Fetch and display top picks games
const topPicks = games.slice(0, 14);
const topPicksGrid = document.querySelector(".top-picks-grid");

topPicks.forEach(game => {
    // Create image
    const img = document.createElement("img");

    img.className = "grid-img";
    img.src = game.img;
    img.alt = `${game.name} top pick game`;
    img.width = 196;
    img.height = 257;
    img.loading = "lazy";
    img.setAttribute("role", "listitem");

    // Append image directly to grid
    topPicksGrid.appendChild(img);
});

// Fetch and display slots games
const slots = games.slice(14, 30);
const slotGrid = document.querySelector(".slots-grid");

slots.forEach(game => {
    /*
    // Create link - Low-risk of SEO impact as it points to a trusted external source - review if necessary (I presonally don't prefer it just putting it for documentation).
    const link = document.createElement("a");
    
    link.href = "https://drive.google.com/uc?export=download&id=1TY-uEdbmTaVJoh5D5ycejCN-eXbAqSoB";
    link.download = "JaihoSlots.apk";
    link.target = "_blank";
    link.rel = "noopener noreferrer no follow";
    link.setAttribute(
        "aria-label",
        `Download JaihoSlots Android App – ${game.name}`
        );
        */
       
       // Create image
       const img = document.createElement("img");
       
    img.className = "grid-img";
    img.src = game.img;
    img.alt = `${game.name} slot game`;
    img.width = 196;
    img.height = 257;
    img.loading = "lazy";
    img.setAttribute("role", "listitem");
    
    /*
    // Wrap image in link
    link.appendChild(img);
    
    // Append to grid
    grid.appendChild(link);
    */
   
   // Append image directly to grid
   slotGrid.appendChild(img);
});

// Fetch and display flying games
const flying = games.slice(47, 55);
const flyingGrid = document.querySelector(".flying-games-grid");

flying.forEach(game => {
    
    // Create image
    const img = document.createElement("img");
    
    img.className = "grid-img";
    img.src = game.img;
    img.alt = `${game.name} flying game`;
    img.width = 196;
    img.height = 257;
    img.loading = "lazy";
    img.setAttribute("role", "listitem");
    
    // Append image directly to grid
    flyingGrid.appendChild(img);
});

// Fetch and display spinning wheels games
const spinning = games.slice(56, 64);
const spinningGrid = document.querySelector(".spinning-wheels-grid");
spinning.forEach(game => {
    
    // Create image
    const img = document.createElement("img");

    img.className = "grid-img";
    img.src = game.img;
    img.alt = `${game.name} spinning game`;
    img.width = 196;
    img.height = 257;
    img.loading = "lazy";
    img.setAttribute("role", "listitem");

    // Append image directly to grid
    spinningGrid.appendChild(img);
});


// ================================================================
// LIVE GAME SEARCH FUNCTIONALITY
// ================================================================
const searchInput = document.getElementById("game-search");
const resultsList = document.getElementById("search-results");
const modal = document.getElementById("gameModal");
const modalTitle = document.getElementById("modalGameTitle");
const modalProvider = document.getElementById("modalGameProvider");
const modalImage = document.getElementById("modalGameImage");
const closeModalBtn = document.querySelector(".close-modal");
const searchBtn = document.querySelector(".search-btn");

// Focus on search input when search button is clicked
if (searchBtn) {
    searchBtn.addEventListener("click", () => {
        if (searchInput) {
            searchInput.focus();
        }
    });
}

// Live search functionality
if (searchInput && resultsList) {
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        resultsList.innerHTML = "";

        if (!query) {
            resultsList.style.display = "none";
            return;
        }

        const filtered = games.filter(g => g.name.toLowerCase().includes(query));

        if (filtered.length === 0) {
            resultsList.style.display = "none";
            return;
        }

        resultsList.style.display = "block";
        filtered.forEach((game, index) => {
            const li = document.createElement("li");
            li.textContent = game.name;
            li.setAttribute('role', 'option');
            li.setAttribute('tabindex', '0');
            li.addEventListener("click", () => openModal(game));

            // Keyboard navigation support
            li.addEventListener("keydown", (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openModal(game);
                }
            });

            resultsList.appendChild(li);
        });
    });

    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !resultsList.contains(e.target) && !searchBtn.contains(e.target)) {
            resultsList.style.display = 'none';
        }
    });

    // Handle Escape key to close search results
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            resultsList.style.display = 'none';
            searchInput.value = '';
        }
    });
}

// ================================================================
// GAME MODAL FUNCTIONALITY
// ================================================================

// Store focusable elements
let focusableElements = [];
let firstFocusableElement = null;
let lastFocusableElement = null;

function openModal(game) {
    if (!modal) return;

    modalTitle.textContent = game.name;
    modalProvider.textContent = game.provider;
    modalImage.src = game.img;
    modalImage.alt = `${game.name} game preview`;

    modal.setAttribute("aria-hidden", "false");
    modal.style.display = "flex";

    if (resultsList) {
        resultsList.style.display = "none";
    }

    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    // Set up focus trap
    setupFocusTrap(modal);

    // Focus on modal title
    if (modalTitle) {
        modalTitle.focus();
    }
}

function closeGameModal() {
    if (!modal) return;

    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");

    // Restore body scroll
    document.body.style.overflow = '';

    // Return focus to search input
    if (searchInput) {
        searchInput.focus();
    }
}

function setupFocusTrap(modalElement) {
    // Get all focusable elements within the modal
    focusableElements = modalElement.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (focusableElements.length === 0) return;

    firstFocusableElement = focusableElements[0];
    lastFocusableElement = focusableElements[focusableElements.length - 1];

    // Remove existing listener if any
    modalElement.removeEventListener('keydown', handleModalKeydown);
    // Add new listener
    modalElement.addEventListener('keydown', handleModalKeydown);
}

function handleModalKeydown(e) {
    if (e.key === 'Tab') {
        if (e.shiftKey) {
            // Shift + Tab
            if (document.activeElement === firstFocusableElement) {
                e.preventDefault();
                lastFocusableElement.focus();
            }
        } else {
            // Tab
            if (document.activeElement === lastFocusableElement) {
                e.preventDefault();
                firstFocusableElement.focus();
            }
        }
    }

    if (e.key === 'Escape') {
        closeGameModal();
    }
}

// Close modal events
if (closeModalBtn) {
    closeModalBtn.addEventListener("click", closeGameModal);

    // Keyboard support for close button
    closeModalBtn.addEventListener("keydown", (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            closeGameModal();
        }
    });
}

if (modal) {
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeGameModal();
        }
    });
}

// ================================================================
// GAME CAROUSEL SWIPER
// ================================================================
const gameSwiper = new Swiper(".gameSwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    loopedSlides: 15,
    spaceBetween: 0,
    speed: 1000,
    coverflowEffect: {
        rotate: 0,
        stretch: 10,
        depth: 200,
        modifier: 1.5,
        slideShadows: false
    },
    autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// ================================================================
// PROMOTION MODALS
// ================================================================
const promoLinks = document.querySelectorAll('.promo-link');
const closePromoButtons = document.querySelectorAll('.promo-close-modal');

// Open promotion modal
promoLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const modalId = link.dataset.modal;
        const promoModal = document.getElementById(`${modalId}-modal`);

        if (promoModal) {
            promoModal.setAttribute('aria-hidden', 'false');
            promoModal.style.display = 'block';
            document.body.classList.add('modal-open');

            // Set up focus trap for promo modal
            setupFocusTrap(promoModal);

            // Focus on close button
            const closeBtn = promoModal.querySelector('.promo-close-modal');
            if (closeBtn) {
                closeBtn.focus();
            }
        }
    });
});

// Close promotion modal
closePromoButtons.forEach(button => {
    button.addEventListener('click', () => {
        closePromoModal(button);
    });

    // Keyboard support
    button.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            closePromoModal(button);
        }
    });
});

function closePromoModal(button) {
    const promoModal = button.closest('.promo-modal');
    if (promoModal) {
        promoModal.setAttribute('aria-hidden', 'true');
        promoModal.style.display = 'none';
        document.body.classList.remove('modal-open');
    }
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('promo-modal')) {
        e.target.setAttribute('aria-hidden', 'true');
        e.target.style.display = 'none';
        document.body.classList.remove('modal-open');
    }
});

// Handle Escape key for all modals
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close promo modals
        const openPromoModals = document.querySelectorAll('.promo-modal[aria-hidden="false"]');
        openPromoModals.forEach(modal => {
            modal.setAttribute('aria-hidden', 'true');
            modal.style.display = 'none';
            document.body.classList.remove('modal-open');
        });

        // Close game modal
        if (modal && modal.style.display === 'flex') {
            closeGameModal();
        }
    }
});

// ================================================================
// SCROLL TO TOP BUTTON
// ================================================================
function initializeScrollButton() {
    const scrollBtn = document.getElementById("scrollTopBtn");

    if (!scrollBtn) return;

    // Initially hidden
    scrollBtn.style.display = "none";

    // Show/hide on scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollBtn.style.display = "flex";
        } else {
            scrollBtn.style.display = "none";
        }
    });

    // Scroll to top on click
    scrollBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Keyboard support
    scrollBtn.addEventListener("keydown", (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    });
}

// ================================================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ================================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Skip if it's just "#" or a modal trigger
        if (href === '#' || this.classList.contains('promo-link')) {
            return;
        }

        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
            const headerOffset = 80; // Adjust based on your fixed header height
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});

// ================================================================
// PERFORMANCE OPTIMIZATION - LAZY LOAD IMAGES
// ================================================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ================================================================
// ERROR HANDLING - IMAGE LOAD FAILURES
// ================================================================
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function () {
        // Fallback to a placeholder or hide the image
        console.warn(`Failed to load image: ${this.src}`);
        this.style.display = 'none';
    });
});

// ================================================================
// ACCESSIBILITY - ANNOUNCE PAGE CHANGES
// ================================================================
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'visually-hidden';
    announcement.textContent = message;

    document.body.appendChild(announcement);

    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// ================================================================
// CONSOLE WELCOME MESSAGE
// ================================================================
console.log('%cWelcome to JaiHo Slots! 🎰', 'color: #cbee69; font-size: 20px; font-weight: bold;');
console.log('%cIndia\'s #1 Online Gaming Platform', 'color: #058C4D; font-size: 14px;');