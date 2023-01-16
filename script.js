
const ulPainting = document.querySelector('#paintingsList')
console.log(ulPainting)
ulPainting.classList.add('listaProdutos')

const ulFigure = document.querySelector('#figuresList')
ulFigure.classList.add('listaProdutos')

const itens = [ 
    {img: src="./assets/img/painting/clock.jpg", name: "Clock", price:2500, type:"paiting" },
    {img: src="./assets/img/painting/gamepad.jpg", name: "GamePad", price:498, type:"painting" },
    {img: src="./assets/img/painting/personagem.jpg", name: "Personagem", price:140, type: "painting"},
    {img: src="./assets/img/actions/animewoman.jpg" , name:"Anime Woman" ,price:619 , type: "figure"},
    {img: src="./assets/img/actions/dragonballpersonagem.jpg", name: "DragonBall" ,price:6512 , type:"figure" },
    {img: src="./assets/img/actions/starwarspersonagem.jpg", name: "StarWars",price:1089 , type:"figure" },
]

function ulAppending (ul, li, img, div, h3, p) {
    ul.appendChild(li)
    li.appendChild(img)
    li.appendChild(div)
    div.append(h3, p)
}

function createElement(el, className) {
    const element = document.createElement(el);
    element.classList.add(className)

    return element
}


function separeteItens (){
    for (let i = 0; i < itens.length; i++){
        
        const li = createElement('li', 'product')
        const img = createElement('img', 'picImg')
        const div = createElement('div', 'productDescription')
        const h3 = createElement('h3', 'itemName')
        const p = createElement('p', 'itemPrice')

        h3.innerText = `${itens[i].name}`
    
        p.innerText = `R$${itens[i].price}`
    
        img.src = `${itens[i].img}`
        
        if (itens[i].type == "figure"){
            ulAppending(ulFigure, li, img, div, h3, p)
        }
        else { 
            ulAppending(ulPainting, li, img, div, h3, p)

        }   
    }
}

separeteItens();