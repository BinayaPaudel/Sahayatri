// const optionMenu = document.querySelector(".select-menu"),
//   selectBtn = optionMenu.querySelector(".select-btn"),
//   options = optionMenu.querySelectorAll(".option"),
//   text = optionMenu.querySelector(".text");

// selectBtn.addEventListener("click", () =>
//   optionMenu.classList.toggle("active")
// );

// options.forEach((option) => {
//   option.addEventListener("click", () => {
//     let selectedOption = option.querySelector(".option-text").innerText;
//     text.innerText = selectedOption;
//     optionMenu.classList.remove("active");
//   });
// });

const optionMenus = document.querySelectorAll(".select-menu");
optionMenus.forEach((optionMenu) => {
  const selectBtn = optionMenu.querySelector(".select-btn"),
    options = optionMenu.querySelectorAll(".option"),
    text = optionMenu.querySelector(".text");

  selectBtn.addEventListener("click", () =>
    optionMenu.classList.toggle("active")
  );
  options.forEach((option) => {
    option.addEventListener("click", () => {
      let selectedOption = option.querySelector(".option-text").innerText;
      text.innerText = selectedOption;
      optionMenu.classList.remove("active");
    });
  });
});