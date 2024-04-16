const input = document.getElementById('search');
input.addEventListener("keyup", search);

function search() {
    const inputVal = input.value.toLowerCase();
    const liElements = document.querySelectorAll('li');

    liElements.forEach(li => {
        const countryName = li.textContent.toLowerCase();
        
        if (countryName.includes(inputVal)) {
            li.style.display = "block";
        } else {
            li.style.display = "none";
        }
    });
}
