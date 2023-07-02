window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > 0) {
    navbar.classList.add("transparent");
  } else {
    navbar.classList.remove("transparent");
  }
});

const featuresDiv = document.getElementById("featureDiv");

fetch("https://html-server-omega.vercel.app/api/v1/users/")
  .then((res) => res.json())
  .then((features) => {
    features?.data?.forEach((feature) => {
      const card = document.createElement("div");
      //   card.className = "f_card";
      card.innerHTML = `
      <div class="f_card">
      <img src=${feature?.image} alt="Aim image 1" />
          <div class="featured-tag">
            <img src="./assets/images/cor.svg" alt="Aim image 1" />
            <span>Featured</span>
          </div>
          <div class="details flex justify-center items-center">
            <div class="option flex justify-center items-center">
              <img src="./assets/images/Award 4.svg" alt="Aim image 1" />
              <h3 class="title">${feature?.details?.category}</h3>
            </div>
            <div class="option flex justify-center items-center">
              <img src="./assets/images/Location.svg" alt="Aim image 1" />
              <h3 class="title">${feature?.details?.location}</h3>
            </div>
          </div>
          <h3 class="title">${feature?.name}</h3>

          <div class="categories">
           ${feature?.skills?.map(
             (skill) => `<span class="category mr-1">${skill}</span>`
           )}
         
           
          </div>
          <div class="f_icons flex">
            <img class="icon" src="./assets/images/facebook.svg" alt="Logo" />
            <img class="icon" src="./assets/images/youtube.svg" alt="Logo" />
            <img class="icon" src="./assets/images/instagram.svg" alt="Logo" />
          </div>
          <div class="button-container">
            <button class="gd_button-outline">Get Started</button>
            <button class="gd_button">Learn More</button>
          </div></div>
      `;
      featuresDiv.appendChild(card);
    });
  });

//
