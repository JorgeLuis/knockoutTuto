var ViewModel = function() {
	var self = this;
  	
  	this.user = ko.observable("PP");
    this.pass = ko.observable("12345");
 
	self.validarUserCSS = function() {
	    if (self.user().length == 0) {
	      return "text-danger";
	    }
	}

	self.validarUserContenido = ko.pureComputed(function() {
	   if (self.user().length == 0) {	    
	   	return "El campo User es obligatorio";
		}

	    return self.user();
	}, this);

	this.mostrarUserCampo = ko.pureComputed(function() {
	   return self.user().length < 1;
	}, this);


	self.validarPassCSS = function() {
	    if (self.pass().length == 0) {
	      return "text-danger";
	    }
	}

	self.validarPassContenido = ko.pureComputed(function() {
	   if (self.pass().length == 0) {	    
	   	return "El campo Pass es obligatorio";
		}

	    return self.pass();
	}, this);

	this.mostrarPassCampo = ko.pureComputed(function() {
	   return self.pass().length < 1;
	}, this);


};
 
ko.applyBindings(new ViewModel());