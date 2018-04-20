Vue.component('Person', {
  props: ['person', 'translations'],
  template: '\
    <div>\
      <h2>{{person.name}}</h2>\
      <span v-html="person.skills"></span>\
      <h3>{{translations.education}}</h3>\
      <Degree v-for="degree in person.degrees" :degree="degree" :key="degree.name" />\
    </div>\
  '
});

// <education />\
