window.SearchView = Backbone.View.extend({

    // el primero indica el evento "click", el segundo el elemento "button" que actua ese evento, 
    // y por ultimo que funcion se ejecuta "search".
    // al presionar una tecla "keypress" dentro del elemento "input" ejecuta la funcion keyHandler.
    events:{
        "click button":"search", 
        "keypress input":"keyHandler" 
    },

    // Es el elemento del DOM que le estoy pasando a la funcion initialize
    initialize:function(config){
        this.$el = config.$el; 
    },

    // si el evento es igual a la tecla enter, ejecutar la funcion search
    keyHandler:function(event){            
        if(event.which === 13){ 
            this.search();
        }
    },

    // guardo en value el valor del input contenido en este $el
    search:function(event){ 
        var value = this.$el.find('input').val();
        console.log("El valor del input es:", value);
    },
    
    render:function(){}
});

$(document).on("ready", function(){
    
    // utilizo la vista search en un nuevo elemento
    // indico cual es el elemento donde se debe renderizar
    window.searchBox = new window.SearchView({
        $el : $("#search-box")  
    });
    
    window.templates = {}
    templates.videoTemplate = _.template($("#videoTemplate").html());
});