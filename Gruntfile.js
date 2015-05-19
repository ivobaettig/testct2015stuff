module.exports = function(grunt) {
    grunt.registerTask('default', ['concat', 'uglify']);
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                src: 'js/*.js',
                dest: 'build/js/script.js'
            }
        },
        uglify: {
            dist: {
                options: {
                    banner: '// <%= grunt.template.today("dd.mm.yyyy") %> by <%= pkg.author %>\n',
                    sourceMap: true
                },
                src: '<%= concat.dist.dest %>',
                dest: 'build/js/script.min.js'
            }
        }
    })
}