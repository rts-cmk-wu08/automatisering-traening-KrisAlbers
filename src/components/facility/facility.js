//import advSection from "./advSection.js";
import "./facility.scss";
//import { facility } from "../../data.js";

//console.log(facilities);

let facilityFunction = function () {
  let element = document.createElement("section");
  element.classList.add("facility");

  element.innerHTML = `
        <h1 class="facility__header">fsf</h1>
    `;

  //element.append(advSection());

  return element;
};

export default facilityFunction;
//${facilities.headline}