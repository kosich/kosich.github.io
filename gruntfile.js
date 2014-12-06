module.exports = function(grunt){

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //JADE
        //https://www.npmjs.org/package/grunt-contrib-jade
        jade: {
            compile: {
                files: {
                    'index.html': 'templates/main.jade'
                }
            }
        },
        less: {
            production: {
                compress : true,
                cleancss : true,
                files: {
                    "styles/style.css": "styles/style.less"
                }             
            }
        },
        cssmin: {
            minify: {
                expand: true,
                cwd: 'styles/',
                src: ['*.css', '!*.min.css'],
                dest: 'styles/',
                ext: '.min.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jade');

    // Default task(s).
    grunt.registerTask('default', ['less:production', 'cssmin', 'jade']);

};
