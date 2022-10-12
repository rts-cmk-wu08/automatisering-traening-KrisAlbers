
import hero from "./components/hero/hero.js"
import facility from "./components/facility/facility.js"
import section from "./components/advantages/section.js"
import footer from "./components/footer/footer.js"

let element = document.querySelector('.wrapper')

element.append(hero())
element.append(facility())
element.append(section())
element.append(footer())