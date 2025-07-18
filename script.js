const bikes = [
  {
    title: "SpeedX Road Bike",
    category: "road",
    price: "$799",
    image: "1.jpg"
  },
  {
    title: "Mountain King",
    category: "mountain",
    price: "$649",
    image: "2.jpg"
  },
  {
    title: "Volt Electric",
    category: "electric",
    price: "$999",
    image: "3.webp"
  },
  {
    title: "Urban Cruiser",
    category: "road",
    price: "$549",
    image: "4.jpg"
  }
];

const bikeList = document.getElementById("bike-list");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const themeToggle = document.getElementById("themeToggle");

function showBikes(data = bikes) {
  bikeList.innerHTML = "";

  data.forEach(bike => {
    const card = document.createElement("div");
    card.className = "bike";
    card.innerHTML = `
      <img src="${bike.image}" alt="${bike.title}" loading="lazy" />
      <h3>${bike.title}</h3>
      <p>${bike.price}</p>
    `;
    bikeList.appendChild(card);
  });
}

function filterBikes() {
  const searchTerm = searchInput.value.toLowerCase();
  const category = categoryFilter.value;
  const filtered = bikes.filter(bike =>
    (category === "all" || bike.category === category) &&
    bike.title.toLowerCase().includes(searchTerm)
  );
  showBikes(filtered);
}

searchInput.addEventListener("input", filterBikes);
categoryFilter.addEventListener("change", filterBikes);
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

window.addEventListener("load", () => showBikes());
