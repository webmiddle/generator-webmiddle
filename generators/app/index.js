'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the wondrous ' + chalk.red('generator-webmiddle') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'Your project name',
      default: this.appname // Default to current folder name
    }, {
      type: 'input',
      name: 'description',
      message: 'Your project description',
      default: ''
    }, {
      type: 'input',
      name: 'author',
      message: 'Your project author',
      default: '',
      store: true
    }, {
      type: 'input',
      name: 'license',
      message: 'Your project license',
      default: 'ISC',
      store: true
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('**'),
      this.destinationPath(),
      this.props,
      undefined,
      { globOptions: { dot: true } } // include dot files (.babelrc, etc)
    );
  },

  install: function () {
    this.installDependencies({ bower: false });
  }
});
