import $ from 'jquery';
import 'bootstrap';
import './styles.css';
import { SearchConditions } from './finder.js';

$(document).ready(function() {

  

  $('#search').click(function() {
    const city = $('#location').val();
    $('#location').val("");
    const condition = $('#condition').val();
    $('#condition').val("");
    const displayBy = $('#display-by').val();
    $('#display-by').val();

    let searchConditions = new SearchConditions();
    let promise = searchConditions.getConditions(conditions);
  
    promise.then(function(response) {
      const body = JSON.parse(response);
      $('#show-doctor').text(`${city}, ${response.}`);
    }
  });
});
