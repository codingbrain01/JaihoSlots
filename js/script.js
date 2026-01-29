new Swiper("#swiper-1", {
    autoplay: {
        delay: 5000, // 5000 milliseconds = 5 seconds
        pauseOnMouseEnter: true, // Optional: pauses autoplay on mouse hover
        disableOnInteraction: false, // Optional: keeps autoplay running after user interaction
    },
    pagination: {
        el: "#swiper-1 .swiper-pagination",
        clickable: true,
    },
    lazyLoading: true,
    loop: true
});

// ✅ Game Database (expandable later)
const games = [
    // Top Picks Games
    { name: "Gates of Olympus", provider: "Pragmatic Play", img: "images/js-game-01.png" },
    { name: "Power of Kraken II", provider: "Relax Gaming", img: "images/js-game-02.png" },
    { name: "Nightfall Hunting", provider: "Tada Gaming", img: "images/js-game-03.png" },
    { name: "Jungle Delight", provider: "PG Soft", img: "images/js-game-04.png" },
    { name: "Coin Volcano", provider: "PG Soft", img: "images/js-game-05.png" },
    { name: "Yakuza Honor", provider: "PG Soft", img: "images/js-game-06.png" },
    { name: "Dragon Hatch", provider: "PG Soft", img: "images/js-game-07.png" },
    { name: "Super Ace", provider: "Jili", img: "images/js-game-08.png" },
    { name: "Aztec Bonanza", provider: "Pragmatic Play", img: "images/js-game-09.png" },
    { name: "Fortune Tiger", provider: "PG Soft", img: "images/js-game-10.png" },
    { name: "Starlight Princess", provider: "PG Soft", img: "images/js-game-11.png" },
    { name: "Gem Saviour", provider: "PG Soft", img: "images/js-game-12.png" },
    { name: "Fortune Gems 2", provider: "Jili", img: "images/js-game-13.png" },
    { name: "Jurassic Kingdom", provider: "PG Soft", img: "images/js-game-14.png" },

    // Slots Games
    { name: "Doomsday Rampage", provider: "PG Soft", img: "images/js-game-slot01.svg" },
    { name: "Ganesha Gold", provider: "PG Soft", img: "images/js-game-slot02.svg" },
    { name: "The Crypt", provider: "Nolimit City", img: "images/js-game-slot03.svg" },
    { name: "Mythic Deep", provider: "Jaihoslots Interactive", img: "images/js-game-slot04.svg" },
    { name: "Candy Rush 2", provider: "Microgaming", img: "images/js-game-slot05.svg" },
    { name: "Thor God of Lightning", provider: "Red Tiger Gaming", img: "images/js-game-slot06.svg" },
    { name: "Kitsune Adventure", provider: "Games Global", img: "images/js-game-slot07.svg" },
    { name: "Piggies in Space", provider: "Jaihoslots Interactive", img: "images/js-game-slot08.svg" },

    { name: "Flaming Mustang", provider: "Jaihoslots Interactive", img: "images/js-game-slot09.svg" },
    { name: "Dabanggg", provider: "Jaihoslots Interactive", img: "images/js-game-slot10.svg" },
    { name: "Bison Moon", provider: "Jaihoslots Interactive", img: "images/js-game-slot11.svg" },
    { name: "Xerxes", provider: "Jaihoslots Interactive", img: "images/js-game-slot12.svg" },
    { name: "Fortune Gems 4", provider: "Jili", img: "images/js-game-slot13.svg" },
    { name: "Symbiote", provider: "Jaihoslots Interactive", img: "images/js-game-slot14.svg" },
    { name: "Crazy Hunter", provider: "Jaihoslots Interactive", img: "images/js-game-slot15.svg" },
    { name: "Dragon's Treasure Quest", provider: "Jaihoslots Interactive", img: "images/js-game-slot16.svg" },

    { name: "Fortune Jungle", provider: "Jaihoslots Interactive", img: "images/js-game-slot17.svg" },
    { name: "Fire Toad", provider: "Jaihoslots Interactive", img: "images/js-game-slot18.svg" },
    { name: "Stormborn", provider: "Jaihoslots Interactive", img: "images/js-game-slot19.svg" },
    { name: "Dragon Hatch IV", provider: "Jaihoslots Interactive", img: "images/js-game-slot20.svg" },
    { name: "Chicken Road 2", provider: "Jaihoslots Interactive", img: "images/js-game-slot21.svg" },
    { name: "Penalty Shootout", provider: "Jaihoslots Interactive", img: "images/js-game-slot22.svg" },
    { name: "Lucky Jaguar", provider: "Jaihoslots Interactive", img: "images/js-game-slot23.svg" },
    { name: "Mahjong Wins III", provider: "Jaihoslots Interactive", img: "images/js-game-slot24.svg" },

    { name: "Wukong", provider: "Jaihoslots Interactive", img: "images/js-game-slot25.svg" },
    { name: "Golden Express", provider: "Jaihoslots Interactive", img: "images/js-game-slot26.svg" },
    { name: "Lion Saga Odyssey", provider: "Jaihoslots Interactive", img: "images/js-game-slot27.svg" },
    { name: "Cursed Crypt", provider: "Jaihoslots Interactive", img: "images/js-game-slot28.svg" },
    { name: "Darkness", provider: "Jaihoslots Interactive", img: "images/js-game-slot29.svg" },
    { name: "Fortune Coins", provider: "Jaihoslots Interactive", img: "images/js-game-slot30.svg" },
    { name: "Super Texas", provider: "Jaihoslots Interactive", img: "images/js-game-slot31.svg" },
    { name: "Gemstones Gold", provider: "Jaihoslots Interactive", img: "images/js-game-slot32.svg" },

    { name: "Fortune Gems 500", provider: "Jaihoslots Interactive", img: "images/js-game-slot33.svg" },

    // Flying Games
    { name: "Uono Aviator", provider: "Jaihoslots Interactive", img: "images/js-game-fly01.svg" },
    { name: "Aviator", provider: "Jaihoslots Interactive", img: "images/js-game-fly02.svg" },
    { name: "Aviatrix", provider: "Jaihoslots Interactive", img: "images/js-game-fly03.svg" },
    { name: "CrashX", provider: "Jaihoslots Interactive", img: "images/js-game-fly04.svg" },
    { name: "Cappadocia", provider: "Jaihoslots Interactive", img: "images/js-game-fly05.svg" },
    { name: "CricketX", provider: "Jaihoslots Interactive", img: "images/js-game-fly06.svg" },
    { name: "Crash", provider: "Jaihoslots Interactive", img: "images/js-game-fly07.svg" },
    { name: "CrashX", provider: "Jaihoslots Interactive", img: "images/js-game-fly08.svg" },
    { name: "Zeppelin", provider: "Jaihoslots Interactive", img: "images/js-game-fly09.svg" },

    // Spinning Wheels Games
    { name: "Limbo", provider: "Jaihoslots Interactive", img: "images/js-game-spin01.svg" },
    { name: "Mines", provider: "Jaihoslots Interactive", img: "images/js-game-spin02.svg" },
    { name: "Keno", provider: "Jaihoslots Interactive", img: "images/js-game-spin03.svg" },
    { name: "Plinko", provider: "Jaihoslots Interactive", img: "images/js-game-spin04.svg" },
    { name: "Hilo", provider: "Jaihoslots Interactive", img: "images/js-game-spin05.svg" },
    { name: "Roulette", provider: "Jaihoslots Interactive", img: "images/js-game-spin06.svg" },
    { name: "Ander Bahar", provider: "Jaihoslots Interactive", img: "images/js-game-spin07.svg" },
    { name: "Tower", provider: "Jaihoslots Interactive", img: "images/js-game-spin08.svg" },
    { name: "Coins", provider: "Jaihoslots Interactive", img: "images/js-game-spin09.svg" },
    { name: "Dice", provider: "Jaihoslots Interactive", img: "images/js-game-spin10.svg" },
    { name: "Huge Wheel", provider: "Jaihoslots Interactive", img: "images/js-game-spin11.svg" },
    { name: "Fruits", provider: "Jaihoslots Interactive", img: "images/js-game-spin12.svg" },
];

const searchInput = document.getElementById("game-search");
const resultsList = document.getElementById("search-results");
const modal = document.getElementById("gameModal");
const modalTitle = document.getElementById("modalGameTitle");
const modalProvider = document.getElementById("modalGameProvider");
const modalImage = document.getElementById("modalGameImage");
const closeModal = document.querySelector(".close-modal");

document.querySelector(".search-btn").addEventListener("click", () => {
    document.getElementById("game-search").focus();
});

// ✅ Live Search
searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
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
    filtered.forEach(game => {
        const li = document.createElement("li");
        li.textContent = game.name;
        li.addEventListener("click", () => openModal(game));
        resultsList.appendChild(li);
    });
});

// ✅ Open Modal
function openModal(game) {
    modalTitle.textContent = game.name;
    modalProvider.textContent = game.provider;
    modalImage.src = game.img;
    modal.setAttribute("aria-hidden", "false");
    modal.style.display = "flex";
    resultsList.style.display = "none";
}

// ✅ Close Modal Events
closeModal.addEventListener("click", () => closeGameModal());
modal.addEventListener("click", (e) => {
    if (e.target === modal) closeGameModal();
});

function closeGameModal() {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
}



const swiper = new Swiper(".gameSwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    loopedSlides: 15, // match total number of slides for symmetry
    spaceBetween: 0,
    speed: 800, // smooth out transition
    coverflowEffect: {
        rotate: 0, // keep flat
        stretch: 10, // perfect centering, no uneven offset
        depth: 200, // balanced depth perception
        modifier: 1.5, // reduced exaggeration for symmetry
        slideShadows: false
    },
    autoplay: {
        delay: 2500, // autoplay interval
        pauseOnMouseEnter: true, // Optional: pauses autoplay on mouse hover
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});

document.querySelector(".search-btn").addEventListener("touchstart", function () {
    this.classList.add("pressed");

    // Remove state immediately after tap so it snaps back to normal
    setTimeout(() => {
        this.classList.remove("pressed");
        this.blur();
    }, 80);  // 80ms keeps natural tap feel
});

// Get all promo links
const promoLinks = document.querySelectorAll('.promo-link');

// Add event listener to each promo link
promoLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const modalId = link.dataset.modal;
        const modal = document.getElementById(`${modalId}-modal`);
        modal.setAttribute('aria-hidden', 'false');
        modal.style.display = 'block';
        document.body.classList.add('modal-open'); // Add modal-open class to body
    });
});

// Get all close modal buttons
const closeModalButtons = document.querySelectorAll('.promo-close-modal');

// Add event listener to each close modal button
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.promo-modal');
        modal.setAttribute('aria-hidden', 'true');
        modal.style.display = 'none';
        document.body.classList.remove('modal-open'); // Remove modal-open class from body
    });
});

// Close modal when clicked outside
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('promo-modal')) {
        const modal = e.target;
        modal.setAttribute('aria-hidden', 'true');
        modal.style.display = 'none';
        document.body.classList.remove('modal-open'); // Remove modal-open class from body
    }
});

console.log("Scroll script active."); // Debug

const scrollBtn = document.getElementById("scrollTopBtn");

// Start hidden once JS is ready
scrollBtn.style.display = "none";

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollBtn.style.display = "flex";
    } else {
        scrollBtn.style.display = "none";
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
