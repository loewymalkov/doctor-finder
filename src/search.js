export class Search {
  getSymptom(name, displayBy) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();

      const url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${name}&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.apiKey}`;
      
      // sort=${displayBy}

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
