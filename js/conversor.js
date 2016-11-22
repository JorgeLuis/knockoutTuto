var Conversor = function () {
    /* Atributos */
    var self = this;
    self.millas = ko.observable(0);
    //self.kilometros = ko.observable("ingrese millas");

    /* Metodos */
    //self.convertir = function () {
    //    self.kilometros(self.millas() * 1.60934);
    //};

    self.convertirDirecto = ko.pureComputed(function() {
        return self.millas() * 1.60934;
    }, this);
};

ko.applyBindings(new Conversor());