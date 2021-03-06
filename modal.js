(function(){
    // Define our constructor
    this.Modal = function() {
        this.closeButton = null;
        this.modal = null;
        this.overlay = null;

        var defaults = {
            className: 'fade-and-drop',
            closeButton: true,
            content: "",
            maxWidth: 600,
            minWidth: 200,
            overlay: true
        };

        // Create options by extending defaults with the passed arguments
        if(arguments[0] && typeof arguments[0] === "object") {
            this.options = extendDefaults(defaults, arguments[0])
        }

        // Public methods

        Modal.prototype.open = function() {

        };

        // Private methods

        function extendDefaults(source, properties) {
            var property;
            for(property in properties) {
                if (properties.hasOwnProperty(property)) {
                    source[property] = properties[property];
                }
            }
            return source;
        }
    };

})();

var myModal = new Modal({content: 'Howdy', maxWidth: 600});


