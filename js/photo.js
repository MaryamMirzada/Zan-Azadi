fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const gallery = document.getElementById("gallery");
    data.forEach((item) => {
      const col = document.createElement("div");
      col.className = "col-md-6 col-sm-12 gallery-item";
      col.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="img-fluid rounded">
        <div class="caption">${item.name}</div>
      `;
      gallery.appendChild(col);
    });
  })
  .catch((error) => console.error("Error loading gallery:", error));
