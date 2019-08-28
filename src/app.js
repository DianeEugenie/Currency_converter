import Vue from 'vue'

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      rates: {},
      selectedOther: null,
      selectedOtherToEuros: null,
      selectedFirstOther: null,
      selectedSecondOther: null,
      inputEuros: 0,
      inputOther: 0,
      firstOther: 0
    },
    computed: {
      convertOther: function () {
        return new Intl.NumberFormat('en-GB', { style: 'currency', currency: this.getCurrencyKey}).format(this.selectedOther * this.inputEuros);
      },
      convertEuros: function () {
        return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'EUR' }).format(this.inputOther / this.selectedOtherToEuros);
      },
      convertOtherToOther: function () {
        return new Intl.NumberFormat('en-GB', { style: 'currency', currency: this.getCurrencyKeyOther }).format(this.firstOther * this.selectedSecondOther / this.selectedFirstOther);
      },
      getCurrencyKey: function () {
        for (let key in this.rates) {
          if (this.selectedOther === this.rates[key]) {
            return key;
          }
        }
      },
      getCurrencyKeyOther: function () {
        for (let key in this.rates) {
          if (this.selectedSecondOther === this.rates[key]) {
            return key;
          }
        }
      }
    },
    mounted() {
      this.fetchCurrencies();
    },
    methods: {
      fetchCurrencies: function() {
        fetch("https://api.exchangeratesapi.io/latest")
        .then(res => res.json())
        // .then(data => this.currencies = data);
        .then(data => this.rates = data.rates)
      }
    }
  });
})
