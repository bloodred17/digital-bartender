//HTTP GET  requests by callbacks
const getCocktail = (callback) => {

    const url = "https://api.punkapi.com/v2/beers/random";
    
    const request = new XMLHttpRequest();
    request.open('GET', url);
    
    request.send();
    
    request.addEventListener('readystatechange', (event) => {
        if(event.target.readyState === 4 && event.target.status === 200){
            const data = JSON.parse(event.target.responseText);
            let error = undefined;
            // console.log(data);
            callback(error, data);
        }
    });
};