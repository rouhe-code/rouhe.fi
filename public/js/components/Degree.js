Vue.component('Degree', {
  props: ['degree'],
  template: '\
    <p>\
      <span class="bold">\
        {{degree.name}},\
        {{degree.school}},\
        {{degree.duration}}\
      </span>\
      <br />\
      {{degree.description}}\
    </p>\
  '
});
