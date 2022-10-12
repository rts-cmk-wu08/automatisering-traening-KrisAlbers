import "./hero.scss";
import heroArticlefunction from "./heroArticle.js";
import { hero } from "../../data.js";

//console.log(hero);
let herofunction = function () {
  let element = document.createElement("div");
  element.classList.add("hero");

  element.innerHTML = `
  <img class="heroImg" src="${hero.image}" alt="" />
`;

element.append(heroArticlefunction())

  return element;
};

export default herofunction;
