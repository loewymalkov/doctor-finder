export class SearchSymptom {
  getSymptom(symptom, location, displayBy) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=37.773,-122.413,100&user_location=37.773,-122.413,${location}&sort=${displayBy}&skip=0&limit=10&user_key=${process.env.apiKey}`

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
