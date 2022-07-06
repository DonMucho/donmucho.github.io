document.addEventListener('DOMContentLoaded', function(){
    default_currency();
    document.querySelector('#curr1').onchange = () => {
        currency_1();
    }
    document.querySelector('#c1').onkeyup = () => {
        currency_1();
    }
    document.querySelector('#curr2').onchange = () => {
        currency_1();
    }
    document.querySelector('#c2').onkeyup = () => {
        currency_2()
    }
    document.querySelector('#swap').onclick = () => {
        const c1 = document.querySelector('#curr1').value;
        const c2 = document.querySelector('#curr2').value;
        const temp1 = c1;
        document.querySelector('#curr1').value = c2;
        document.querySelector('#curr2').value = temp1;

        const c10 = document.querySelector('#c1').value;
        const c20 = document.querySelector('#c2').value;
        const temp10 = c10;
        document.querySelector('#c1').value = c20;
        document.querySelector('#c2').value = temp10;
    }
    if(document.querySelector('#c1').value.length > 0){
        document.querySelector('#c2').value = "";
    } else if (document.querySelector('#c2').value.length > 0){
        document.querySelector('#c1').value = "";
    }
});
function default_currency(){
    const currency1 = document.querySelector('#curr1').value;
    const currency2 = document.querySelector('#curr2').value;

    fetch(`https://v6.exchangerate-api.com/v6/9371255e09bc8bdc7094ea5d/latest/${currency1}`)
    .then(response => response.json())
    .then(data => {
        const c1 = data.conversion_rates[currency1];
        const c2 = data.conversion_rates[currency2];
        
        document.querySelector('#c1').value = c1.toFixed(2);
        document.querySelector('#c2').value = c2.toFixed(2);
        dateTime();

        currency_info(c2);
    });
}
function currency_info(c20){
    const x = document.querySelector('#curr1');
    const y = x.selectedIndex;
    const z = x.options[y].text;
    const x1 = document.querySelector('#curr2');
    const y1 = x1.selectedIndex;
    const z1 = x1.options[y1].text;
    document.querySelector('#c1-text').innerHTML = `1 ${z} equals to`;
    document.querySelector('#c2-text').innerHTML = `${c20.toFixed(2)} ${z1}`;
}
function dateTime(){
    const currency1 = document.querySelector('#curr1').value;

    fetch(`https://v6.exchangerate-api.com/v6/9371255e09bc8bdc7094ea5d/latest/${currency1}`)
    .then(response => response.json())
    .then(data => {
        const lastUpdate = data.time_last_update_utc;
        const nextUpdate = data.time_next_update_utc;
        document.querySelector('#lastUp').innerHTML = `Last Update: ${lastUpdate}`;
        document.querySelector('#nextUp').innerHTML = `Next Update: ${nextUpdate}`;
    });
}
function currency_1(){
    const currency1 = document.querySelector('#curr1').value;
    const currency2 = document.querySelector('#curr2').value;

    fetch(`https://v6.exchangerate-api.com/v6/9371255e09bc8bdc7094ea5d/latest/${currency1}`)
    .then(response => response.json())
    .then(data => {
        const c2 = data.conversion_rates[currency2];
        const c1 = document.querySelector('#c1').value;
        
        const res = c1 * c2;
        document.querySelector('#c2').value = res.toFixed(2);
        dateTime();

        currency_info(c2);
    });
}
function currency_2(){
    const currency1 = document.querySelector('#curr1').value;
    const currency2 = document.querySelector('#curr2').value;

    fetch(`https://v6.exchangerate-api.com/v6/9371255e09bc8bdc7094ea5d/latest/${currency2}`)
    .then(response => response.json())
    .then(data => {
        const c1 = data.conversion_rates[currency1];
        const c2 = document.querySelector('#c2').value;
        
        const res = c1 * c2;
        document.querySelector('#c1').value = res.toFixed(2);
        dateTime();

        currency_info(c2);
    });
}
