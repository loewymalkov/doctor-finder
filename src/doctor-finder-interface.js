import $ from 'jquery';
import 'bootstrap';
import './styles.css';
import { SearchConditions } from './finder.js';

$(document).ready(function() {

  

  $('#search').click(function() {
    const location = $('#location').val();
    $('#location').val("");
    const symptom = $('#symptom').val();
    $('#symptom').val("");
    const displayBy = $('#display-by').val();
    $('#display-by').val();

    let searchSymptom = new SearchSymptom();
    let promise = searchSymptom.getSymptom(symptom);
  
    promise.then(function(response) {
      const body = JSON.parse(response);
      $('#show-doctor').text(`For ZIP ${location}, and your search '${symptom}' we found these practices: ${practicesForSymptom}`);
    }
  });
});
