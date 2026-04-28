const giftForms = document.querySelectorAll("form");
const giftCounter = document.querySelector(".wishlist-counter");
const filter = document.querySelector(".filter");
const target = document.querySelector(".target");

filter.addEventListener("click", function () {
  target.classList.toggle("visually-hidden");
});

giftForms.forEach((giftForm) => {
  giftForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formButton = giftForm.querySelector("button");
    formButton.classList.add("loading");

    let formData = new FormData(giftForm);

    const response = await fetch(giftForm.action, {
      method: giftForm.method,
      body: new URLSearchParams(formData),
    });

    const responseData = await response.text();
    const parser = new DOMParser();
    const responseDOM = parser.parseFromString(responseData, "text/html");

    const buttonNewState = responseDOM.querySelector("form button");
    const counterNewState = responseDOM.querySelector(".wishlist-counter");

    formButton.innerHTML = buttonNewState.innerHTML;
    giftCounter.innerHTML = counterNewState.innerHTML;

    formButton.classList.remove("loading");
  });
});
