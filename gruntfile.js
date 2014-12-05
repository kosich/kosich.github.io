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
            production:{
                files: {
                    "styles/style.css": "styles/style.less"
                }    }
        }
    });

    //jade
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-less');

    // Default task(s).
    grunt.registerTask('default', ['less' , 'jade']);

};
