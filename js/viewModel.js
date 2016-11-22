var ViewModel = function () {
	var self = this;

	this.user = ko.observable("");
	this.pass = ko.observable("");

	self.numeros = [1, 4, 9];
	self.dobles = self.numeros.map(function (num) {
		return num * 2;
	});
	self.ipExistentes = [];

	self.turnero = [
		{
			"id": 10,
			"sucursal": 2,
			"descripcion": "sample string 3",
			"ip": 10
		},
		{
			"id": 15,
			"sucursal": 2,
			"descripcion": "sample string 3",
			"ip": 10
		}
	];

	self.turneroId = self.turnero.map(function (item) {

		var valor = item.id;
		self.ipExistentes.push(valor);
	});

	self.inArray = function (arreglo, elemento) {
		return arreglo.indexOf(elemento) !== -1;
	}

	//debugger;
	self.validarUserCSS = function () {
		if (self.user().length == 0) {
			return "text-danger";
		}
	}

	self.validarUserContenido = ko.pureComputed(function () {
		if (self.user().length == 0) {
			return "El campo User es obligatorio";
		}

		return self.user();
	}, this);

	this.mostrarUserCampo = ko.pureComputed(function () {
		return self.user().length < 1;
	}, this);


	self.validarPassCSS = function () {
		if (self.pass().length == 0) {
			return "text-danger";
		}
	}

	self.validarPassContenido = ko.pureComputed(function () {
		if (self.pass().length == 0) {
			return "El campo Pass es obligatorio";
		}

		return self.pass();
	}, this);

	this.mostrarPassCampo = ko.pureComputed(function () {
		return self.pass().length < 1;
	}, this);


};

ko.applyBindings(new ViewModel());