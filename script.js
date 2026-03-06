let clickCount = 0;

function handleClick() {

    // increase counter
    clickCount++;

    // update counter on page
    document.getElementById("count").textContent = clickCount;

    // change message text
    document.getElementById("message").textContent = 
        "You clicked the button! Keep clicking!";

    // change background color randomly
    const colors = ["#f4f6f9", "#d1f7c4", "#f9d1d1", "#d1e0ff", "#fff4cc"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = randomColor;
}
