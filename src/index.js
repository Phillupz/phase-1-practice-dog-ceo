fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((response) => response.json())
    .then((imgData) => renderImg(imgData))

function renderImg(obj){
    const dogList = document.querySelector('#dog-image-container')
    obj.message.forEach(dogUrl => {
        //need to create img element
        const dogPic = document.createElement('img')
        //assign dog url to src
        dogPic.src = dogUrl
        //add img to div with id
        document.querySelector('#dog-image-container').appendChild(dogPic)
    })
}

fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((breedData) => renderBreedInfo(breedData))

function renderBreedInfo(obj){
    const dogUl = document.querySelector('#dog-breeds')
    Object.keys(obj.message).forEach(breed => {
        const breedList = document.createElement('li')
        breedList.innerHTML = breed
        dogUl.appendChild(breedList)
        breedList.addEventListener('click', function(){
        breedList.style.color = 'blue'
        breedList.filter()
        })
    })
}
