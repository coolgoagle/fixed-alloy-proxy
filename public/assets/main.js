var input = document.querySelector('#url');

input.addEventListener('keyup', (key) => {
    if (key.keyCode == 13) { 
        if (!input.value.trim().length) return;
        window.location.assign(`/prox/?url=${btoa(input.value)}`);
    }
});


document.querySelector("#initiate").addEventListener('click', () => {

    if (!input.value.trim().length) return;
    window.location.assign(`/prox/?url=${btoa(input.value)}`);

});

// random string function
function stringUtil(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;

    // loop to generate random string
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    // return the generated string
    return result;
}

// randomize stuff
document.title = stringUtil(40)
document.getElementById("intro").innerHTML = stringUtil(40)