module.exports=function(grunt){
    grunt.initConfig({
        connect:{
            server:{
                options:{
                    port:5050
//                    keepalive:true
                }
            }
        },

        sass:{
           dist:{
               files:[{
                   expand: true,
                   cwd:'app/assets/stylesheet/',
                   src:['*.scss','*.sass'],
                   dest:'dev/stylesheet/',
                   ext:'.css'
               }
               ],
               options:{
                   lineNumbers: true
               }
           }
        },

        copy:{
            script:{
                expand:true,
                cwd:'app/assets/javascript/',
                src: '**',
                dest: 'dev/javascript/'
            },
            html:{
                expand:true,
                cwd:'app/',
                src: ['**','!assets/**'],
                dest:'dev/'
            },
            images:{
                expand:true,
                cwd:'app/assets/images/',
                src:'**',
                dest:'dev/images/'
            }

        },

        watch:{
            options:{
              livereload:true
            },

            stylesheet:{
                files:'app/assets/stylesheet',
                tasks:['sass']
            },
            script:{
                files:'app/assets/javascript/',
                tasks:['copy:script']
            },
            html:{
                files:['app/**','!assets/**'],
                tasks:['copy:html']
            },
            images:{
                files:['app/assets/images/'],
                tasks:['copy:images']
            }
        }

    });


    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('default',['copy','sass','connect','watch']);
}
