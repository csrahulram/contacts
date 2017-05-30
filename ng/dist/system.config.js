(function (global) {
    System.config({
        map: {
            '@angular/core': '/node_modules/@angular/core/bundles/core.umd.min.js',
            '@angular/common': '/node_modules/@angular/common/bundles/common.umd.min.js',
            '@angular/compiler': '/node_modules/@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': '/node_modules/@angular/platform-browser/bundles/platform-browser.umd.min.js',
            '@angular/platform-browser-dynamic': '/node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.min.js',
            '@angular/http': '/node_modules/@angular/http/bundles/http.umd.min.js',
            '@angular/router': '/node_modules/@angular/router/bundles/router.umd.min.js',
            '@angular/forms': '/node_modules/@angular/forms/bundles/forms.umd.min.js',

            'rxjs': '/node_modules/rxjs'
        },
        packages: {
            app: {
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            }
        }
    })
}(this));