var fs = require('fs')
var rollup = require('rollup')
var uglify = require('uglify-js')
var babel = require('rollup-plugin-babel')
var json = require('rollup-plugin-json')
var package = require('../package.json')
var node = require('rollup-plugin-node-resolve')
var cjs = require('rollup-plugin-commonjs')
var globals = require('rollup-plugin-node-globals')
var builtins = require('rollup-plugin-node-builtins')
var banner =
	"/*!\n" +
	" * oneyun-client-js v" + package.version + "\n" +
	" * https://github.com/liushuixingyun/oneyun-server-api-nodejs\n" +
	" * Released under the MIT License.\n" +
	" */\n";

rollup.rollup({
		entry: 'src/index.js',
		plugins: [
			globals(),
			builtins(),
      json(),
			babel({
				presets: ['es2015-loose-rollup'], // so could be work in ie9
        babelrc: false,
        exclude: [
          'node_modules/**',
          '*.json'
        ],
			}),
      node({
        jsnext: true,
        module: true,
				preferBuiltins: false,  // Default: true
        browser: false
      }),
      cjs(),
		]
	})
	.then(function (bundle) {
		return write('dist/oneyun-client-js.js', bundle.generate({
			format: 'umd',
			banner: banner,
			moduleName: 'OneyunJSClient'
		}).code, bundle);
	})
	.then(function (bundle) {
		return write('dist/oneyun-client-js.min.js',
			banner + '\n' + uglify.minify('dist/oneyun-client-js.js').code,
			bundle);
	})
	.catch(logError);

function write(dest, code, bundle) {
	return new Promise(function (resolve, reject) {
		fs.writeFile(dest, code, function (err) {
			if (err) return reject(err);
			console.log(blue(dest) + ' ' + getSize(code));
			resolve(bundle);
		});
	});
}

function getSize(code) {
	return (code.length / 1024).toFixed(2) + 'kb';
}

function logError(e) {
	console.log(e);
}

function blue(str) {
	return '\x1b[1m\x1b[34m' + str + '\x1b[39m\x1b[22m';
}
