const { hash } = window.location;
const message = atob(hash.replace("#", ""));
if (message) {
  document.querySelector(".show").classList.remove("hide");
  document.querySelector(".first").classList.add("hide");
  document.querySelector("h1").innerHTML = message;
}

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const first = document.querySelector(".first");
  const second = document.querySelector(".second");

  const input = document.querySelector(".main");
  const encrypt = btoa(input.value);
  const link = document.querySelector(".link");
  link.value = `${window.location}#${encrypt}`;
  first.classList.add("hide");
  second.classList.remove("hide");
  link.select();
});
