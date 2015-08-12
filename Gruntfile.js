module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


			sass: {
				dist: {
					files: {
						'styles/style.css' : 'sass/styles.scss',
						'styles/app.css' : 'sass/app.scss'
					}
				}
			},


			watch: {
				css: {
					files: '**/*.scss',
					tasks: ['sass']
				}
			},

        cssmin: {
            css: {
                src: 'styles/style.css',
                dest: 'styles/style.min.css'
            }
        },

        ftpush: {
			  build: {
			    auth: {
			      host: 'owebdesigns.com',
			      port: 21,
			      authKey: 'key1'
			    },
			    src: '',
			    dest: '/public_html/1000actsofkindness',
			    exclusions: ['**/_notes/**', '**/node_modules/**', 
			    '**/wireframe/**', '**/sass/foundation/**'],
			    // keep: ['/important/images/at/server/*.jpg']
				simple: true,
			  }
			},

        modernizr: {

		    dist: {
		        // [REQUIRED] Path to the build you're using for development.
		        "devFile" : "lib/modernizr-dev.js",

		        // Path to save out the built file.
		        "outputFile" : "build/modernizr-custom.js",

		        // Based on default settings on http://modernizr.com/download/
		        "extra" : {
		            "shiv" : true,
		            "printshiv" : false,
		            "load" : true,
		            "mq" : false,
		            "cssclasses" : true,
		            "fontface" : true,
		            "backgroundsize" : true,
		            "borderimage" : true,
		            "borderradius" : true,
		            "boxshadow" : true,
		            "opcacity" :true,
		            "rgba" : true,
		            "cssanimations" : true,
		            "teststyles" : true,
		            "testprop" : true,
		            "prefixes" : true,
		            "domprefixes" : true,
		            "canvas" : true,
		            "canvastext" : true,
		            "textshadow" : true,
		            "cssgradients" : true,
		            "multiplebgs" : true,
		            "csstransitions" : true
		        },

		        // Based on default settings on http://modernizr.com/download/
		        "extensibility" : {
		            "addtest" : false,
		            "prefixed" : false,
		            "teststyles" : false,
		            "testprops" : false,
		            "testallprops" : false,
		            "hasevents" : false,
		            "prefixes" : false,
		            "domprefixes" : false,
		            "cssclassprefix": ""
		        },

		        // By default, source is uglified before saving
		        "uglify" : true,

		        // Define any tests you want to implicitly include.
		        "tests" : [],

		        // By default, this task will crawl your project for references to Modernizr tests.
		        // Set to false to disable.
		        "parseFiles" : true,

		        // When parseFiles = true, this task will crawl all *.js, *.css, *.scss and *.sass files,
		        // except files that are in node_modules/.
		        // You can override this by defining a "files" array below.
		        // "files" : {
		            // "src": []
		        // },

		        // This handler will be passed an array of all the test names passed to the Modernizr API, and will run after the API call has returned
		        // "handler": function (tests) {},

		        // When parseFiles = true, matchCommunityTests = true will attempt to
		        // match user-contributed tests.
		        "matchCommunityTests" : false,

		        // Have custom Modernizr tests? Add paths to their location here.
		        "customTests" : []
		    }

		}
    });

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks("grunt-modernizr");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks('grunt-ftpush');

    // task setup 
    grunt.registerTask('default', ['sass', 'watch', 'cssmin', 'modernizr', 'ftpush']);
};