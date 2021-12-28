const board = document.querySelector('.board');

// console.log(document);

for(let i = 0; i < 500; i++) {
    let block = document.createElement('div');
    block.classList.add('box');
    board.appendChild(block);

    block.addEventListener('mouseover', () => {
        let f = Math.floor(Math.random() * (255 - 1)) + 1;
        let s = Math.floor(Math.random() * (255 - 1)) + 1;
        let t = Math.floor(Math.random() * (255 - 1)) + 1;
        block.style.background = `rgb(${f},${s},${t})`
    })

    block.addEventListener('mouseleave', () => {
        block.style.background = '#1d1717';
    })
    
   
}

