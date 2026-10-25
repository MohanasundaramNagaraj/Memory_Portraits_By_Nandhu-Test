
const clients = {
    "arun-priya": {
        name: "Arun & Priya",
        category: "Wedding Collection",
        photos: [
            "assets/images/weddings/wedding-06.jpg",
            "assets/images/weddings/wedding-23.jpg",
           
            "assets/images/weddings/wedding-02.jpg",
           
           
            "assets/images/weddings/wedding-24.jpg",
            "assets/images/weddings/wedding-12.jpg", 
            "assets/images/weddings/wedding-05.jpg",
        ]
    },

    "karthik-divya": {
        name: "Karthik & Divya",
        category: "Wedding Collection",
        photos: [
            "assets/images/weddings/wedding-23.jpg",
            "assets/images/weddings/wedding-08.jpg",
            "assets/images/weddings/wedding-09.jpg"
        ]
    },

    "suresh-meena": {
        name: "Suresh & Meena",
        category: "Wedding Collection",
        photos: [
            "assets/images/weddings/wedding-24.jpg",
            "assets/images/weddings/wedding-05.jpg",
            "assets/images/weddings/wedding-12.jpg"
        ]
    },

    "Poonguzhali": {
        name: "Poonguzhali & Her Family",
        category: "Puberty",
        photos: [
            "assets/images/weddings/wedding-24.jpg",
            "assets/images/weddings/wedding-05.jpg",
            "assets/images/weddings/wedding-12.jpg"
        ]
    }
};

const params = new URLSearchParams(window.location.search);
const clientId = params.get("client");
const client = clients[clientId];

const gallery = document.getElementById("photoGallery");
const notFound = document.getElementById("notFound");

if (!client) {
    gallery.hidden = true;
    notFound.hidden = false;
    document.getElementById("clientTitle").textContent =
        "Gallery Not Found";
} else {
    document.title =
        `${client.name} | Memory Portraits By Nandhu`;

    document.getElementById("clientTitle").textContent = client.name;
    document.getElementById("clientCategory").textContent =
        client.category;

    document.getElementById("photoCount").textContent =
        `${client.photos.length} photographs`;

    gallery.replaceChildren();

    client.photos.forEach((src, index) => {
        const figure = document.createElement("figure");
        figure.className = "gallery-item";
       
        figure.className = `gallery-item portrait`;

        const link = document.createElement("a");
        link.className = "gallery-item__link";
        link.href = src;
        link.target = "_blank";
        link.rel = "noopener";

        const img = document.createElement("img");
        img.src = src;
        img.alt = `${client.name} — photograph ${index + 1}`;
        img.loading = "lazy";

        link.appendChild(img);
        figure.appendChild(link);
        gallery.appendChild(figure);
    });
}
