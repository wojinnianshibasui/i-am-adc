module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    htmlmin:{
    	dist:{
    		options:{
    			removeComments:true,
    			collapseWhitespace:true
    		},
    		files:{
    			'dist/index.html':'src/index.html'
    		}
    	}
    },
    cssmin: {
  		options: {
    		shorthandCompacting: false,
    		roundingPrecision: -1
  		},
 		target: {
    		files: {
      		'css/skfcss.css': ['src/index.css']
    		}
  		}
	}

  });

  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['uglify','htmlmin','cssmin']);

};