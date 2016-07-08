module.exports = function(config) {
    config.set({
        basePath: '../',
        files: [
            'client_exercicios/bower_components/angular/angular.js',
            'client_exercicios/bower_components/angular-mocks/angular-mocks.js',
            'client_exercicios/app_ts/app.module.js',
            'client_exercicios/app_ts/**/*.js'
        ],
        autoWatch: true,
        browsers: ['Chrome'],
        frameworks: ['jasmine'],
        plugins: [
            'karma-chrome-launcher',
            'karma-jasmine'
        ]
    });
};
