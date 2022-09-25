const copy_btns = document.querySelectorAll('.copy-btn');

console.log(copy_btns);

copy_btns.forEach((copy_btn) => {
    copy_btn.addEventListener('click', (event) => {
        console.log(event.target);
    })
})

