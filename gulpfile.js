// Requiring the necessary modules for gulpfile
var gulp = require('gulp'); // Gulp is the build processor
var gutil = require('gulp-util'); // Gulp-Util is responsible for logging the build process data (debugging)
var reactify = require('reactify'); // Converts all jsx files to js
var source = require('vinyl-source-stream'); // Handles text streams
var browserify = require('browserify'); // Handles the code load order
var watchify = require('watchify'); // Auto re-run for Gulp builds

// The main task (default task)
gulp.task('default', function() {
	// Creating a bundler var to hold watchify
	// Watchify is watching browserify for any changes
	// Browserify is given an {} that is basically a config {}
	var bundler = watchify(browserify({
		entries : ['./src/app.jsx'],
		transform: [reactify],
		extensions: ['.jsx'],
		debug: true,
		cache: {},
		packageCache: {},
		fullPaths: true
	}));

	// Build function for the bundler var {}
	var build = function(file) {
		// If file exists
		if (file) {
			gutil.log('Recompiling ' + file);
		}

		// Returns the bundler {}
		// calls the bundle method
		// listens for errors
		// Then reads in the files into app.js & stores it in the root directory
		return bundler
			.bundle()
			.on('error', gutil.log.bind(gutil, 'Browserify Error'))
			.pipe(source('app.js'))
			.pipe(gulp.dest('./'));
	};

	// Calls the build function
	build();

	// listens for any changes to call the build function again
	bundler.on('update', build);
});
