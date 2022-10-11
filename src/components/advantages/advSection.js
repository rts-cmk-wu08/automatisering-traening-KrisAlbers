import { advantages } from "../../data.js";
import advArticle from "./advArticle.js";
import "./advSection.scss";

console.log(advantages);
let advSection = function () {
  let element = document.createElement("div");
  element.classList.add("advantages");

  advantages.forEach((advantages) => {
    element.append(advArticle(advantages));
  });

  return element;
};

export default advSection;
