const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const packages = {
    colombo: {
        title: "Colombo City Tour",
        img: "images/colombo.jpeg",
        info: " Colombo • 2 Days • LKR 20000",
        desc: "Explore Sri Lanka's commercial capital with guided tours and local experiences.",
        highlights: ["Gangaramaya Temple", "Galle Face Green", "Independence Square"],
        includes: "Hotel • Transport • Breakfast"
    },
    kandy: {
        title: "Kandy Cultural Experience",
        img: "images/kandy.jpeg",
        info: " Kandy • 3 Days • LKR 30000",
        desc: "A beautiful cultural escape including temples, gardens, and traditional shows.",
        highlights: ["Temple of the Tooth", "Botanical Gardens", "Kandy Lake"],
        includes: "Hotel • Transport • Breakfast"
    },
    galle: {
        title: "Galle Fort & Beach",
        img: "images/gall.jpeg",
        info: " Galle • 2 Days • LKR 25000",
        desc: "Walk through historic Galle Fort and relax on Unawatuna beaches.",
        highlights: ["Galle Fort", "Unawatuna Beach", "Jungle Beach"],
        includes: "Hotel • Transport"
    },
    nuwara: {
        title: "Nuwara Eliya Tea Tour",
        img: "images/nuwara eliya.jpeg",
        info: " Nuwara Eliya • 3 Days • LKR 40000",
        desc: "A cool getaway featuring tea plantations, waterfalls, and scenic hills.",
        highlights: ["Tea Factory Visit", "Gregory Lake", "Victoria Park"],
        includes: "Hotel • Transport • Breakfast"
    },
    yala: {
        title: "Yala Safari Adventure",
        img: "images/yala.jpeg",
        info: " Yala • 2 Days • LKR 35000",
        desc: "Experience wildlife and nature with guided safari tours.",
        highlights: ["Yala National Park", "Leopard Spotting", "Camping Option"],
        includes: "Hotel • Safari Vehicle"
    },
    trinco: {
        title: "Trincomalee Beach Escape",
        img: "images/trinco.jpeg",
        info: " Trincomalee • 2 Days • LKR 30000",
        desc: "Beautiful beaches and crystal-clear waters perfect for relaxing.",
        highlights: ["Nilaveli Beach", "Pigeon Island", "Hot Wells"],
        includes: "Hotel • Transport"
    },
    paris: {
        title: "Paris City Escape",
        img: "images/paris.jpeg",
        info: " Paris • 4 Days • $600",
        desc: "A European dream trip with museums, cafes, and iconic landmarks.",
        highlights: ["Eiffel Tower", "Louvre Museum", "Seine River Cruise"],
        includes: "Hotel • Breakfast"
    },
    tokyo: {
        title: "Tokyo Adventure",
        img: "images/tokyo.jpeg",
        info: " Tokyo • 5 Days • $700",
        desc: "Modern wonders mixed with tradition and culture.",
        highlights: ["Shibuya Crossing", "Tokyo Tower", "Senso-ji Temple"],
        includes: "Hotel • Breakfast"
    },
    newyork: {
        title: "New York City Tour",
        img: "images/newyork.jpeg",
        info: " New York • 4 Days • $650",
        desc: "Explore one of the world's most dynamic cities.",
        highlights: ["Statue of Liberty", "Times Square", "Central Park"],
        includes: "Hotel • Breakfast"
    },
    dubai: {
        title: "Dubai City Experience",
        img: "images/dubai.jpeg",
        info: " Dubai • 4 Days • $600",
        desc: "A luxury tour including iconic city attractions and desert adventures.",
        highlights: ["Burj Khalifa", "Desert Safari", "Dubai Mall"],
        includes: "Hotel • Safari • Breakfast"
    },
    sydney: {
        title: "Sydney Highlights",
        img: "images/sydney.jpeg",
        info: " Sydney • 5 Days • $700",
        desc: "Explore the best of Australia with beautiful views and beaches.",
        highlights: ["Opera House", "Harbour Bridge", "Bondi Beach"],
        includes: "Hotel • Breakfast"
    },
    rome: {
        title: "Rome Heritage Tour",
        img: "images/rome.jpeg",
        info: " Rome • 4 Days • $650",
        desc: "Walk through ancient history and stunning architecture.",
        highlights: ["Colosseum", "Vatican City", "Trevi Fountain"],
        includes: "Hotel • Breakfast"
    }
};


if (packages[id]) {
    const p = packages[id];

    document.getElementById("pkgImg").src = p.img;
    document.getElementById("pkgTitle").textContent = p.title;
    document.getElementById("pkgInfo").textContent = p.info;
    document.getElementById("pkgDesc").textContent = p.desc;

    const highlightList = document.getElementById("pkgHighlights");
    highlightList.innerHTML = "";
    p.highlights.forEach(h => {
        const li = document.createElement("li");
        li.textContent = h;
        highlightList.appendChild(li);
    });

    document.getElementById("pkgIncludes").textContent = p.includes;
} else {
    document.body.innerHTML = "<h2 class='text-center mt-5'>Package not found.</h2>";
}
