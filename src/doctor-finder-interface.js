import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './styles.css';
import { Search } from './search.js';

$(document).ready(function() {
  $('#search').submit(function(event) {
    event.preventDefault();
    const location = $('#location').val();
    $('#location').val("");
    const symptom = $('#symptom').val();
    $('#symptom').val("");
    const name = $('#name').val();
    $('#name').val("");
    const displayBy = $('#display-by').val();
    console.log('display by value', displayBy)
    $('#display-by').val("");

    let searchBySymptom = new Search();
    let searchByName = new Search();
    let promiseSymptom = searchBySymptom.getSymptom(symptom, displayBy);
    let promiseName = searchByName.getName(name, displayBy);
    
    promiseSymptom.then(function(response) {
      const { data } = JSON.parse(response);
      for (let i=0; i < data.length; i++) {
        console.log('data[i]', data[i]);
        if (data[i].practices[0].name && data[i].profile.last_name) {
          $('#show-doctor').append(`<li>${data[i].practices[0].name}, ${data[i].profile.last_name}</li>`)
        } else {
          'data incomplete';
        }
      }   
    }, function(error) {
      $('#error').text(`${error.message}`);
    });

    promiseName.then(function(response) {
      const { data } = JSON.parse(response);
      for (let i=0; i < data.length; i++) {
        console.log('data[i]', data[i]);
        if (data[i].practices[0].name && data[i].profile.last_name) {
          $('#show-doctor').append(`<li>${data[i].practices[0].name}, ${data[i].profile.last_name} ${data[i].profile.first_name}</li>`)
        } else {
          'data incomplete';
        }
      }   
    }, function(error) {
      $('#error').text(`${error.message}`);
    });
  });
});
