const demo = document.querySelector('#demo');
const area = document.querySelector('#area');

//console.log(demo, area);

area.addEventListener('keyup', () => {
    // let star = '';

    // //console.log(area.value);
    // for(let i = 0; i < area.value.length; i++) {
    //     star += '*';
    // }

    // demo.textContent = star;
    demo.textContent = '*'.repeat(area.value.length);
});


