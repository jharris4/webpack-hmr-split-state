var productName = "splitting-tests";
var indexFilename = 'index.html';
var templatePath = 'templates/index-template.html';
var publicPath = `/static/${productName}/`;
var outputPath = `dist/${productName}`;
var bundleName = `[name]`;
var bundleNameJS = bundleName + '.js';

module.exports = {
  indexFilename,
  templatePath,
  publicPath,
  outputPath,
  bundleNameJS
};

