import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$(document).ready(function() {
  $('#search').click(function() {
    const city = $('#location').val();
    $('#location').val("");

    let promise = new Promise(resolve, reject)
    let request = new XMLHttpRequest();
    // const url = `https://api.betterdoctor.com/`

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

   const getElements = function(response) {
      $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
      $('.showTemp').text(`The weather is ${response.weather[0].main} forever.`);
    }
  });
});
