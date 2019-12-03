class Bmw {
	constructor(model, engine, color) {
		this.model = model;
		this.engine = engine;
		this.color = color;
	}
}

class BmwFactory {
	create(type) {
		if (type === 'X5') {
			return new Bmw(type, 4.0, 'black');
		}
		if (type === 'X6') {
			return new Bmw(type, 4.5, 'white');
		}
	}
}


const factory = new BmwFactory();

const x5 = factory.create('X5');
const x6 = factory.create('X6');