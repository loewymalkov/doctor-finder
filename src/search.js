export class Search {
  getSymptom(symptom, displayBy) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const urlSymptom = `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&sort=${displayBy}&skip=0&limit=10&user_key=${process.env.apiKey}`;

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);

        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", urlSymptom, true);
      request.send();
    });
  }
  getName(name, displayBy) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const urlName = `https://api.betterdoctor.com/2016-03-01/doctors?query=${name}&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&sort=${displayBy}&skip=0&limit=10&user_key=${process.env.apiKey}`;

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);

        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", urlName, true);
      request.send();
    });
  }
}
