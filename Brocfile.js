var Merge = require('broccoli-merge-trees');
var Funnel = require('broccoli-funnel');

var jquery = new Funnel('bower_components/jquery/dist', {
  files: ['jquery.js'],
});
var stylePaths = [
    'sass',
    'bower_components/normalize-css',
    'bower_components/font-awesome/scss',
    'bower_components/bourbon/app/assets/stylesheets',
    'bower_components/neat/app/assets/stylesheets',
  ];

var Sass = require('broccoli-sass');

var styles = new Sass(stylePaths, 'keyboard.css' 'accordion.scss', 'app.css');

module.exports = new Merge(['public', styles, jquery], { overwrite: true });
