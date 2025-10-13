const moodSlider = document.querySelector('#moodSlider');


moodSlider.addEventListener('input',() => {
    const sliderValue = parseInt(moodSlider.value) + 1;

    const moodImage = document.querySelector('#moodImage');

    moodImage.src=`./img/${sliderValue}.png`;
})
