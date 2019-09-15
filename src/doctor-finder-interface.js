import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './styles.css';
import { Search } from './search.js';

$(document).ready(function() {
  $('#search').submit(function(event) {
    event.preventDefault();
    const location = $('#location').val();
    // $('#location').val("");
    const symptom = $('#symptom').val();
    // $('#symptom').val("");
    const name = $('#name').val();
    // $('#name').val("");
    const displayBy = $('#display-by').val();
    // $('#display-by').val("");

    let searchSymptom = new Search();
    let promise = searchSymptom.getSymptom(symptom);
    
    promise.then(function(response) {
      const body = JSON.parse(response);
      $('#show-doctor').html(`For ZIP ${location}, and your search '${symptom}' we found these practices: <li>${body.data[0].practices}</li>`);   
    }, function(error) {
      $('#error').text(`${error.message}`);
    });
  });
});
