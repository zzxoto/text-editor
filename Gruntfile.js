const {spawn, exec} = require('child_process');
var path = require('path');

module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-express-server');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		express:{
			dev:{
				options:{
					script: 'server.js'	
				}
			}
		},

		watch:{
			scripts:{
				files: [
					'src/**/*.js',
					'src/*.js',
				],
				tasks: ['bundle'],
				options: {
          livereload: true,
          nospawn: true //Without this option specified express won't be reloaded
        }
			}
		}
		
	});
	grunt.registerTask('bundle', 'bundles webpack', function(){
		var done = this.async();
		let cp = exec('npm run dev');
		
		//webpack throws its error in stdout rather than stderr
		cp.stdout.on("data", data=>{
			console.log(data.toString());
		});

		cp.on("error", err=>{
			console.log(err);
		});
		
		cp.on("exit", err=>{
			console.log("bundling completed")
			done();
		});
	});

	grunt.registerTask('_test', 'performs test', function(){
		var done = this.async();
		let cp = exec('node test.js',{
			cwd: path.resolve(__dirname, 'dist')
		});

		cp.stdout.on("data", data=>{
			console.log(data.toString());
		});

		cp.stderr.on("data", data=>{
			console.log(data.toString());
		});

		cp.on("error", err=>{
			console.log(err)
		});
		
		cp.on("exit", ()=>{
			console.log("test completed");
			done();
		})

	});

	grunt.registerTask('test', ['bundle', '_test']);
	grunt.registerTask('serve', ['bundle', 'express:dev', 'watch']);
}
  
