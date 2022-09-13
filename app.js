let button = document.getElementById('button');
function calculateHyp() {
    let a = document.getElementById('aInput').value;
    let b = document.getElementById('bInput').value;
    let result = document.getElementById('result');
    let hypo = Math.round(Math.sqrt(a * a + b * b));
    result.innerHTML = hypo;
}
button.addEventListener('click', calculateHyp);
