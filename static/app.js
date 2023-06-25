const input = document.body.querySelector('.inp')
const boxFirst = document.body.querySelector('.block1')
const btn = document.body.querySelector('.btn')
const boxSecond = document.body.querySelector('.block2')



btn.addEventListener('click', async(event) => {
    event.preventDefault()
    let res = await axios.post('/', {url: input.value})
    let data = await res.data
    for(let i = 0;i < data.length; i++) {
        boxFirst.innerHTML += `<p class="item">${data[i]}</p>`
    }
    const itemUrl = document.body.querySelector('.item')
    itemUrl.addEventListener('click', async(event) => {
        boxSecond.innerHTML = `<p class="wind">${itemUrl.textContent}</p>`
        const opn = document.querySelector('.wind')
        localStorage.setItem(`${Math.floor(Math.random() * 99999)}`, data)
        opn.addEventListener('click', async(event) => {
            window.open(`http://localhost:3030/pages/${itemUrl.textContent}`);
        })
    })
})


