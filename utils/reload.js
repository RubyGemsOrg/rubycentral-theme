const path = require('path');
const livereload = require('livereload');

const server = livereload.createServer({
  extraExts: ['hbs'],
  exclusions: ['node_modules/', 'dist/'],
});

server.watch(path.join(__dirname, '..'));
console.log('Reload server started...');
