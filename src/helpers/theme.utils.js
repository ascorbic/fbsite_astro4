// not used anymore (moved in baselayout.astro)
//why? the external scripts refers to the src folder but it doesnt work after deploy
const currentTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

// Get the current theme from local storage
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

// If the current local storage item can be found
if (currentTheme) {
  // Set the body data-theme attribute to match the local storage item
  document.documentElement.setAttribute("data-theme", currentTheme);
  window.localStorage.setItem("theme", currentTheme);
  //document.documentElement.classList.add("dark");
  // If the current theme is dark, check the theme toggle
  // if (currentTheme === "dark") {
  //   themeToggle.checked = true;
  // }
}




// export const theme = (() => {
//   if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
//     return localStorage.getItem("theme");
//   }
//   if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
//     return "dark";
//   }
//   return "light";
// })();

// if (theme === "light") {
//   document.documentElement.classList.remove("dark");
// } else {
//   document.documentElement.classList.add("dark");
// }
// Get the theme toggle input
// const themeToggle = document.querySelector(
//   '.theme-switch input[type="checkbox"]'
// );