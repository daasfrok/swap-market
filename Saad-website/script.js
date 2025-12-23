document.addEventListener("DOMContentLoaded", () => {
  initGallery();
  initFAQ();
});

function initGallery() {
  const mainImg = document.getElementById("gallery-main");
  const caption = document.getElementById("gallery-caption");
  const thumbsWrap = document.getElementById("gallery-thumbs");
  if (!mainImg || !caption || !thumbsWrap) return;

   const galleryItems = [
  { src: "./images/gallery1.jpg", alt: "Swap meetup", caption: "Swap meetups in public places" },
  { src: "./images/gallery2.jpg", alt: "Item exchange", caption: "Inspect items before swapping" },
  { src: "./images/gallery3.jpg", alt: "Marketplace app screens", caption: "Browse listings and swap offers" },
  { src: "./images/gallery4.jpg", alt: "Item detail and chat screens", caption: "View details and message safely" }
];


  thumbsWrap.innerHTML = "";

  galleryItems.forEach((item, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.setAttribute("role", "listitem");
    btn.setAttribute("aria-label", `Show image: ${item.caption}`);
    btn.setAttribute("aria-current", index === 0 ? "true" : "false");

    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt;

    btn.appendChild(img);
    btn.addEventListener("click", () => setMain(index));
    thumbsWrap.appendChild(btn);
  });

  setMain(0);

  function setMain(index) {
    const item = galleryItems[index];
    mainImg.src = item.src;
    mainImg.alt = item.alt;
    caption.textContent = item.caption;

    thumbsWrap.querySelectorAll("button").forEach((b, i) => {
      b.setAttribute("aria-current", i === index ? "true" : "false");
    });
  }
}

function initFAQ() {
  const questions = document.querySelectorAll(".faq-q");
  if (!questions.length) return;

  questions.forEach((btn) => {
    btn.addEventListener("click", () => {
      const answer = btn.nextElementSibling;
      const expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!expanded));
      if (answer) answer.hidden = expanded;
    });
  });
}
