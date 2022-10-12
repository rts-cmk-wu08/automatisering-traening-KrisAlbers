import "./advArticle.scss"

let advArticle = function(advantages) {

    let element = document.createElement('article')
    element.classList.add('adv-article')
    
    element.innerHTML = `
        <img class="adv-article__icon" src="${advantages.icon}" alt="" />
        <h1 class="adv-article__header">${advantages.headline}</h1>
        <p class="adv-article__text">${advantages.text}</p>
    `
    
    return element
    }
    
    export default advArticle