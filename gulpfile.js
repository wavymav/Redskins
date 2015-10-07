var gulp = require('gulp'); // Requiring the Gulp module
var react = require('gulp-react'); // Requiring the Gulp React module
var concat = require('gulp-concat'); // Requiring the Gulp Concat module

// The main task (default task)
gulp.task('default', function() {
	// Grabbing all the files in src folder
	return gulp.src('src/**')
		// Connvert the JSX in /src into JS
		.pipe(react())
		// When finished then concat the js into app.js
		.pipe(concat('app.js'))
		// Then save the app.js file in the root directory
		.pipe(gulp.dest('./'));
});
