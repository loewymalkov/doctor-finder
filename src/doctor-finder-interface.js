import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './styles.css';
import { Search } from './search.js';
import { brotliDecompressSync } from 'zlib';

$(document).ready(function() {
  $('#search').submit(function(event) {
    event.preventDefault();
    const symptom = $('#symptom').val();
    $('#symptom').val("");
    const name = $('#name').val();
    $('#name').val("");
    const displayBy = $('#display-by').val();

    let search = new Search();
    
    let promise = search.getResults(symptom, name,displayBy);
   
    
    promise.then(function(response) {
      const { data } = JSON.parse(response);
      for (let i=0; i < data.length; i++) {
        console.log('data[i]', data[i]);
        if (data.length <= 0) {
          $('#show-doctor').text("Your search returned no results");
        } else if (data[i].practices[0].name && data[i].profile.last_name) {
          if (data[i].practices[0].website) {
            $('#show-doctor').append(`<li><a href="${data[i].practices[0].website}" > Website</a></li>`);
          }
          $('#show-doctor').append(`<li>Practice: ${data[i].practices[0].name}</li> <li> ${data[i].profile.first_name} ${data[i].profile.last_name}</li> <li> phone: ${data[i].practices[0].phones[0].number}</li> <li> ${data[i].practices[0].visit_address.street}, ${data[i].practices[0].visit_address.city}, ${data[i].practices[0].visit_address.state} ${data[i].practices[0].visit_address.zip}</li><li>Currently accepting new patients: ${data[i].practices[0].accepts_new_patients}</li><br><br>`)
        } else {
          'N/A';
        }
      }   
    }, function(error) {
      $('#error').text(`${error.message}`);
    });
    $('#show-doctor').text("");
  });
});
