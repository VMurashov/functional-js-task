let headerMinInput = document.querySelector('.header__mininput');
let headerMaxInput = document.querySelector('.header__maxinput');
let headerCreate = document.querySelector('.header__create');
let headerSortButton = document.querySelector('.header__sort');
let headerFilterButton = document.querySelector('.header__filter');
let headerReverseButton = document.querySelector('.header__reverse');
let headerTransformButton = document.querySelector('.header__transform');
let headerDeleteButton = document.querySelector('.header__delete');
let mainBlock = document.querySelector('.main__block');
let initialArray = document.querySelector('.initial__array');
let sortedArrayElement = document.querySelector('.sorted__array');
let reverseArrayElement = document.querySelector('.reverse__array');
let filterArrayElement = document.querySelector('.filter__array');
let transformArrayElement = document.querySelector('.transform__array');
let deleteArrayElement = document.querySelector('.delete__array')

let arrayOfNumber = []
//
//------
let mainCardElements = Array.from(document.querySelectorAll('.main__card'))
console.log('mainCardElements: ', mainCardElements);




let randomInteger = (min, max) => {
    //случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);

}

headerCreate.onclick = () => {
    arrayOfNumber = []
    for (let index = 0; index < 7; index++) {
        let value = randomInteger(headerMinInput.value, headerMaxInput.value)
        arrayOfNumber.push(value)

    }
    initialArray.textContent = arrayOfNumber;

}

headerSortButton.onclick = () => {
    let sortedArray = arrayOfNumber.sort((a, b) => a - b)
    sortedArrayElement.textContent = sortedArray
    //----

    let mainCardElements = Array.from(document.querySelectorAll('.main__card'))

    let sortedCards = mainCardElements.sort((cardSecond, cardFirst) => {
        let firstCardPrice = cardFirst.querySelector(".main__price").textContent
        firstCardPrice = +firstCardPrice.slice(1, firstCardPrice.length)
        let secondCardPrice = cardSecond.querySelector(".main__price").textContent
        secondCardPrice = +secondCardPrice.slice(1, secondCardPrice.length)
        if (secondCardPrice > firstCardPrice) return 1;
        if (secondCardPrice == firstCardPrice) return 0;
        if (secondCardPrice < firstCardPrice) return -1;

    })
    mainBlock.innerHTML = ""
    mainBlock.append(...sortedCards)

}


headerFilterButton.onclick = () => {
    let filterArray = arrayOfNumber.filter((itemElement) => {
        if (itemElement < 230) {
            return itemElement
        }
    });
    filterArrayElement.textContent = filterArray
    //-----
    let filterCards = mainCardElements.filter((card) => {


        let category = card.querySelector(".main__category").textContent
        if ((category == "roller") || (category == "bicycle")) {
            return card
        }
    });
    mainBlock.innerHTML = ""
    mainBlock.append(...filterCards)
}


headerReverseButton.onclick = () => {
    let reverseButton = arrayOfNumber.reverse()
    reverseArrayElement.textContent = arrayOfNumber

    //-------
    let reverseCards = mainCardElements.reverse()
    mainBlock.append(...reverseCards)

}

headerTransformButton.onclick = () => {
    let transformArray = arrayOfNumber.map((itemElement) => {
        return itemElement * 10
    });
    transformArrayElement.textContent = transformArray
    //-----

    let transformCards = mainCardElements.map((card) => {
        
        let cardPrice = card.querySelector(".main__price").textContent

        let transformedPrice = +cardPrice.slice(1, cardPrice.length)

        card.querySelector(".main__price").textContent = "$" + transformedPrice * 10
        console.log('card: ', card);
        return card

        
       
    })
    console.log('transformCards: ', transformCards);
    mainBlock.append(...transformCards)
}




headerDeleteButton.onclick = () => {
    arrayOfNumber.lengths = 0;
    initialArray.textContent = ""
    sortedArrayElement.textContent = ""
    filterArrayElement.textContent = ""
    reverseArrayElement.textContent = ""
    transformArrayElement.textContent = ""


}