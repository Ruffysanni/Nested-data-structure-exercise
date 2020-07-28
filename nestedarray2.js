// Question 2:

var nestedObject = {
    speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
    data: {
      continents: {
        europe: {
          countries: {
            switzerland: {
              capital: "Bern",
              population: 8000000
            }
          }
        }
      },
      languages: {
        spanish: {
            hello: "Hola"
        },
        french: {
            hello: "Bonjour"
        }
      }
    }
  }

// i:
nestedObject.speakers = [{name:"Elie"},{name:"Tim"},{name:"Matt"}];

var objectSpeaker = nestedObject.speakers;

objectSpeaker = [{name:"Elie"},{name:"Tim"},{name:"Matt"}];

function addSpeaker(speaker, value){
    objectSpeaker[speaker] = objectSpeaker.push({
    name: speaker,
    surname: value
})
}

// Output:
// addSpeaker("james", "asin");
// undefined
// objectSpeaker
// [{name: "Elie"}, {name: "Tim"}, {name: "Matt"}, {name: "james", surname: "asin"}, james: 4]



// ii:

nestedObject.data.languages = {spanish: { hello: "Hola"}, french: {hello: "Bonjour"}};
var languagesAdded = nestedObject.data.languages;

languagesAdded = {spanish: { hello: "Hola"}, french: {hello: "Bonjour"}};

function addLanguage(nameOfLanguage, valueOfKeyOfNewLanguage){
    languagesAdded[nameOfLanguage] = {
        "Hello" : valueOfKeyOfNewLanguage
        
    }
}


// Output:
// addLanguage("Portugese", "Ola");
// undefined
// languagesAdded;
// {spanish: {hello: "Hola"}, french: {hello: "Bonjour"}, Portugese: {Hello: "Ola"}}



// iii:

var objectCountry = nestedObject.data.continents.europe.countries;
function addCountry(nameOfCountry, capitalOfCountry,populationOfCountry){
    objectCountry[nameOfCountry] = {
        "capital" : capitalOfCountry,
        "population": populationOfCountry
    }
}


// Output:

// undefined
// addCountry("Ghana", "Accra","20 million");
// undefined
// objectCountry;
// {switzerland: {capital: "Bern", population: 8000000}, Ghana: {capital: "Accra", population: "20 million"}}
