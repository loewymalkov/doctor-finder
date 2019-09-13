# DOCTOR FINDER

page to help find a doctor

### by Loewy Malkovich on 09/13/2019.

## Description

Webpage that uses the BetterDoctor API to return search results for doctors in the area. Search can be narrowed by type, location and names. Built as a project for Epicodus. 

## SPECS

| Behavior | Input | Output | 
|-|-|-|
| take user input for a medical issue and return list of doctors in area | 'sleep' | return list of doctors w/contact info that fit 'sleep' criteria| 
| take user input for a name and return a list of doctors in area | 'leibovitz' | Josh Leibovitz, P.d., etc | 
| search result for doctors returns a full contact info list | 'leibovitz' | name first and last, address, phone number, website, and whether it accepts new patients | 
| input fields will only take appropriate characters | '0' | would not type out character | 
| catch errors and return a notification for error type | '56' for name search | Error: please enter a valid name | 
| return notification when no search results are found | 'askkrjsjr' | 'No returns | 


## SET-UP

 - Clone this repository
 - in terminal run:
    - npm install
    - create a .env file and obtain an API key from the BetterDoctor API: https://developer.betterdoctor.com/ - put API key in .env file using an apiKey variable
    - npm run build
    - npm run start

Open file in browser, use search fields to return response.

## Known Bugs

N/a

## Support and Contact

Loewy Malkovich at loewymalkov@gmail.com


## Technology Used

javascript, CSS, jasmine, karma, webpack, npm, 

## LICENSE

Free use license (MIT) 2019.
