import Vue from 'vue'

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      currencies: {}

    },
  mounted() {
    this.fetchCurrencies();
    },
  methods: {
    fetchCurrencies: function() {
      fetch("https://api.exchangeratesapi.io/latest")
      .then(res => res.json())
      .then(data => this.currencies = data)
    }
  }
  });
})



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
