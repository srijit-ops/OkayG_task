const cardData = [
  {
    img: "https://mygov.in/sites/default/files/master_image/do-list/510x340_20_0.jpg",
    title:
      "Inviting Ideas to Support the MSMEs and Cottage Industry in Rural India  ...",
    para: "Last Date : 23:45 PM IST (GMT +5.30 Hrs)",
  },
  {
    img: "https://mygov.in/sites/default/files/master_image/do-list/510x340%20(3)_0.jpg",
    title:
      "Inviting Ideas to Support the MSMEs and Cottage Industry in Rural India  ...",
    para: "Last Date : 23:45 PM IST (GMT +5.30 Hrs)",
  },
  {
    img: "https://mygov.in/sites/default/files/master_image/do-list/510X340_19.jpg",
    title:
      "Inviting Ideas to Support the MSMEs and Cottage Industry in Rural India  ...",
    para: "Last Date : 23:45 PM IST (GMT +5.30 Hrs)",
  },
  {
    img: "https://mygov.in/sites/default/files/master_image/do-list/PV510x340.png",
    title:
      "Inviting Ideas to Support the MSMEs and Cottage Industry in Rural India  ...",
    para: "Last Date : 23:45 PM IST (GMT +5.30 Hrs)",
  },
  {
    img: "https://mygov.in/sites/default/files/master_image/do-list/510x340_20_0.jpg",
    title:
      "Inviting Ideas to Support the MSMEs and Cottage Industry in Rural India  ...",
    para: "Last Date : 23:45 PM IST (GMT +5.30 Hrs)",
  },
  {
    img: "https://mygov.in/sites/default/files/master_image/do-list/WhatsAp_anubhav_saroha_0.jpg",
    title:
      "Inviting Ideas to Support the MSMEs and Cottage Industry in Rural India  ...",
    para: "Last Date : 23:45 PM IST (GMT +5.30 Hrs)",
  },
  {
    img: "https://static.mygov.in/rest/s3fs-public/styles/do-list/public/mygov_156319937452221771.png",
    title:
      "Inviting Ideas to Support the MSMEs and Cottage Industry in Rural India  ...",
    para: "Last Date : 23:45 PM IST (GMT +5.30 Hrs)",
  },
  {
    img: "https://mygov.in/sites/default/files/master_image/do-list/510x340_20_0.jpg",
    title:
      "Inviting Ideas to Support the MSMEs and Cottage Industry in Rural India  ...",
    para: "Last Date : 23:45 PM IST (GMT +5.30 Hrs)",
  },
  {
    img: "https://mygov.in/sites/default/files/master_image/do-list/unsung.jpg",
    title:
      "Inviting Ideas to Support the MSMEs and Cottage Industry in Rural India  ...",
    para: "Last Date : 23:45 PM IST (GMT +5.30 Hrs)",
  },
  {
    img: "https://mygov.in/sites/default/files/master_image/do-list/510x340_20_0.jpg",
    title:
      "Inviting Ideas to Support the MSMEs and Cottage Industry in Rural India  ...",
    para: "Last Date : 23:45 PM IST (GMT +5.30 Hrs)",
  },
  {
    img: "https://mygov.in/sites/default/files/master_image/do-list/510x340_3_0.png",
    title:
      "Inviting Ideas to Support the MSMEs and Cottage Industry in Rural India  ...",
    para: "Last Date : 23:45 PM IST (GMT +5.30 Hrs)",
  },
];

const cardContainer = document.querySelector(".cardContainer");

function renderCards() {
  for (let item of cardData) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.border = "none";
    card.style.marginBottom = "25px";
    card.innerHTML = `
    <img
      src=${item.img}
      class="card-img-top"
      alt="image"
    />
    <div class="card-body">
      <div class="d-flex justify-content-between mb-2">
        <div class="status">
          Status :
          <button class="btn btn-success px-1 py-0">open</button>
        </div>
        <div class="buttons">
          <button class="btn" style="height: 25px; width: 25px; padding: 0px">
            <img
              src="https://www.mygov.in/sites/all/themes/mygov/images/fb.svg"
              alt="facebook"
              height="25"
              width="25"
            />
          </button>
          <button class="btn" style="height: 25px; width: 25px; padding: 0px">
            <img
              src="https://www.mygov.in/sites/all/themes/mygov/images/tw.svg"
              alt="twitter"
              height="25"
              width="25"
            />
          </button>
        </div>
      </div>
      <h6 class="card-title">
        <a
          href="https://google.com"
          target="_blank"
          class="text-decoration-none text-black"
          >${item.title}</a
        >
      </h6>
      <small class="card-text fw-lighter"
        >Last Date : 23:45 PM IST (GMT +5.30 Hrs)</small
      >
      <button class="btn btn-info d-block w-100 text-white mt-2 fw-bold card_btn">Discuss</button>
    </div>
 `;
    cardContainer.appendChild(card);
  }
}

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

renderCards();
