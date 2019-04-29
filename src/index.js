document.addEventListener('DOMContentLoaded', () => {

    console.log('%c HI', 'color: firebrick')
    const imgUrl = 'https://dog.ceo/api/breeds/list/all'

    // First Challenge
    // let dogContainer = document.querySelector('#dog-image-container');
    // fetch(imgUrl)
    //     .then(response => response.json())
    //     .then(result =>  {
    //         for(message of result.message) {
    //             let image = document.createElement('img');
    //             image.setAttribute('src', message)
    //             dogContainer.appendChild(image);
    //         }
    //     })
    //     .catch(error => console.log(error))


    // Second Challenge => Display all dog breeds in the UL
    let ul = document.querySelector('#dog-breeds')
    fetch(imgUrl)
        .then(response => response.json())
        .then(result => {
            for(let breed in result.message) {
                let li = document.createElement('li');
                li.innerHTML = breed + ` Types:[${result.message[breed]}]`
                // Challenge Three => Add color to the text
                li.addEventListener('click', function() {
                    li.style.color = 'purple';
                    console.log('i fired')
                })
                ul.append(li);

                
            }
        })
        .catch(error => console.log(error))

        let breedList = document.querySelector('#breed-dropdown');
        breedList.addEventListener('click', function() {
            let breedArray = document.querySelectorAll('li');
            for(let breed of breedArray) {
                if(!breed.innerHTML.startsWith(breedList.value)) {
                    breed.style.display = "none";
                }
                if(breed.innerHTML.startsWith(breedList.value)) {
                    breed.style.display = ""
                }
            }
        })
})



