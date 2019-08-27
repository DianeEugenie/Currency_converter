import Vue from 'vue'

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      currencies: {},
      rates: {}

    },
    computed: {
      allRates: function () {
        return console.log(this.currencies)
      }
    },
    mounted() {
      this.fetchCurrencies();
    },
    methods: {
      fetchCurrencies: function() {
        fetch("https://api.exchangeratesapi.io/latest")
        .then(res => res.json())
        .then(data => this.currencies = data);
      }
    }
  });
})

//
// computed: {
//       neighbouringCountries: function(){
//         return this.countries.filter((country) => {
//           return this.selectedCountry.borders.includes(country.alpha3Code)
//         });
//       },
//       totalPopCountries: function(){
//         return this.countries.reduce((total, country) => total + country.population, 0)
//       },
//       totalNeighPop: function(){
//         return this.neighbouringCountries.reduce((total, country) => total + country.population, 0)
//       },
//       totalAllShiz: function (){
//         return this.selectedCountry.population + this.totalNeighPop;
//       }
//



// mounted() {
//   this.fetchCountries()
// },
// methods: {
//   fetchCountries: function() {
//     fetch("https://restcountries.eu/rest/v2/all")
//     .then(response => response.json()) //also res
//     .then(data => this.countries = data)
//   },
//   addCountryToList: function() {
//     this.favCountries.push(this.selectedCountry);
//   }
