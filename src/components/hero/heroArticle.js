import "./heroArticle.scss";
import { hero } from "../../data.js";

//console.log(hero);
let heroArticlefunction = function () {
  let element = document.createElement("article");
  element.classList.add("heroArticle");

  element.innerHTML = `
    <h1 class="adv-article__header">${hero.headline}</h1>
    <p class="adv-article__text">${hero.copy}</p>
    <button>Explore</button>
`;
  return element;
};

export default heroArticlefunction;
