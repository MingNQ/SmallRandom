var minItem = document.querySelector('input[name="min"]');
var maxItem = document.querySelector('input[name="max"]');

function generateNumber() {
    var minValue = minItem.value;
    var maxValue = maxItem.value;
    
    var result = Math.round(Math.random() * (maxValue - minValue + 1));

    var html = document.querySelector('#result');

    html.innerHTML = `
        <div class="lds-heart"><div></div></div>
    `;

    setTimeout(function() {
        var date = new Date();
        html.innerHTML = `
        <h3>${result}</h3>
        <h6>
            Min: ${minValue}, 
            Max: ${maxValue}
        </h6>
        <h6>
            ${date}
        </h6>
    `;
    }, 1000)
}