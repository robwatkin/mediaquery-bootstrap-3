Package.describe({
  name: 'robsw:mediaquery-bootstrap-3',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Media query template helpers and session variables with bootstrap 3 brakepoints',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/robwatkin/mediaquery-bootstrap-3',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('mediaquery.js', 'client');
});
