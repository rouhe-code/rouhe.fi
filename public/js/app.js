(function() {
  var app = new Vue({
    el: '#app',
    created: function() {
      document.title = this.configurations.pageName;
      document.getElementById('app').style.display = 'block';
    },
    data: {
      translations: translationsEn,
      configurations: configurations
    },
    methods: {
      changeLanguage: function() {
        if(this.translations === translationsFi) {
          this.translations = translationsEn;
        }
        else if(this.translations === translationsEn) {
          this.translations = translationsFi;
        }
      }
    }
  });
})();
