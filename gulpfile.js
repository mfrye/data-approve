var gulp = require('gulp');
var plugins = require("gulp-load-plugins")({lazy:false});

gulp.task('scripts', function(){
    //combine all js files of the app
    gulp.src(['./app/**/*.js'])
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('default'))
        .pipe(plugins.concat('app.js'))
        .pipe(gulp.dest('./build'));
});

gulp.task('templates',function(){
    //combine all template files of the app into a js file
    gulp.src(['!./app/index.html',
        './app/**/*.html'])
        .pipe(plugins.angularTemplatecache('templates.js',{standalone:true}))
        .pipe(gulp.dest('./build'));
});

gulp.task('less', function () {
  gulp.src([
    './app/less/app.less'
  ])
    .pipe(plugins.less())
    .pipe(gulp.dest('./build/css'));
});

gulp.task('vendorJS', function(){
    //concatenate vendor JS files
    gulp.src([
      './bower_components/angular/angular.js',
      './bower_components/angular-ui-router/release/angular-ui-router.js',
      './bower_components/angular-bootstrap/ui-bootstrap-tpls.js'])
      .pipe(plugins.concat('lib.js'))
      .pipe(gulp.dest('./build'));
});

gulp.task('vendorLess', function(){
    //concatenate vendor CSS files
    gulp.src([
        './bower_components/bootstrap-less/less/bootstrap.less'
      ])
      .pipe(plugins.less())
      .pipe(plugins.concat('lib.css'))
      .pipe(gulp.dest('./build/css'));
});

gulp.task('copy-index', function() {
    gulp.src('./app/index.html')    
        .pipe(gulp.dest('./build'));
});

gulp.task('watch',function(){
    gulp.watch([
        'build/**/*.html',        
        'build/**/*.js',
        'build/**/*.css'        
    ], function(event) {
        return gulp.src(event.path)
            .pipe(plugins.connect.reload());
    });
    gulp.watch(['./app/**/*.js','!./app/**/*test.js'],['scripts']);
    gulp.watch(['!./app/index.html','./app/**/*.html'],['templates']);
    gulp.watch('./app/**/*.less',['less']);
    gulp.watch('./app/index.html',['copy-index']);

});

gulp.task('connect', plugins.connect.server({
    root: ['build'],
    port: 9000,
    livereload: true
}));

gulp.task('default',['connect','scripts','templates','less','copy-index','vendorJS','vendorLess','watch']);