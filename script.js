const myPost = document.querySelector('#card-container')
const inputHeading = document.querySelector('#form-heading')
const inputDate = document.querySelector('#form-date')
const inputText = document.querySelector('#form-text')
const button = document.querySelector('button')


function notEmpty() {
    if(inputHeading.value.length > 0 && inputDate.value.length > 0 && inputText.value.length > 0) {
        return true
    }
}

button.onclick = function (event) {
    event.preventDefault()

    const blogg = {
        heading: inputHeading.value,
        date: inputDate.value,
        text: inputText.value
    }
   
    if(!notEmpty()) {
        alert('Fyll i samtliga fält!')
    } else if(!localStorage.getItem('post')){
        let posted = []
        posted.push(blogg)
        localStorage.setItem('post', JSON.stringify(posted))
    } else {
        let posted = JSON.parse(localStorage.getItem('post'))
        posted.push(blogg)
        localStorage.setItem('post', JSON.stringify(posted))
    }
    
    inputHeading.value = ''
    inputDate.value = ''
    inputText.value = ''
    location.reload()
}

const saved = JSON.parse(localStorage.getItem('post'))

if(saved) {
    saved.forEach(element => {
        myPost.insertAdjacentHTML('beforeend', 
        `<div class="card w-75">
            <div class="card-body">
                <h5 class="card-title">${element.heading}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${element.date}</h6>
                <p class="card-text">${element.text}</p>
            </div>
        </div>`
        )
    });
}