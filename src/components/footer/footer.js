
import "./footer.scss";

let footer = function () {
    let element = document.createElement("footer");
    element.classList.add("footer");
  
    element.innerHTML = `
    <div>
      <h3>Easy Camper</h3>
      <h1 class="footer">When Passion Meets Comfort</h1>
    </div>
      `;
    return element;
  };
  
  export default footer;
  