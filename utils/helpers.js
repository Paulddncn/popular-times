const handlebars = require('handlebars');

handlebars.registerHelper('formatJSON', function(data) {
  return JSON.stringify(data, null, 2);
});



