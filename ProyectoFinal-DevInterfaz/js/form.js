let btn = document.getElementById('btn');
btn.addEventListener('click', save);

function save() {
    if (validateForm()) {
        alert('Message Send. Thanks!');
    }
}