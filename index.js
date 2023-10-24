export function changeLinkVisibility(e) {
  let nextSibling = e.target.nextElementSibling;
  while (nextSibling) {
    nextSibling.style.visibility =
      nextSibling.style.visibility === "visible" ?  "hidden" : "visible";
    nextSibling = nextSibling.nextElementSibling;
  }
};
