var toyRobot = {
	productId: "123-12",
	name: "Robot",
	price: "25,000",
	madeIn: "Korea",
	quantity: 10,
	showStock: function() {
		document.querySelector('#display').innerHTML = this.name + "제품은 " + this.quantity + "개 남아있습니다."; 
	},
	showInfo: function() {
		document.querySelector('#display').innerHTML = this.name + "제품의 제품명은 " + this.productId + "이고 가격은 " + this.price + "원입니다. 원산지는 " + this.madeIn + "입니다.";
	},
};

toyRobot.showInfo();
toyRobot.showStock();