document
  .querySelectorAll("button")
  .forEach((element) => element.addEventListener("click", handleClick));

function handleClick() {
  alert("I got cliked!");
}
