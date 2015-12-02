var teamApp = angular.module("teamApp", []);

teamApp.controller('teamController', function($scope){
	$scope.playerList = [];
	function Player(name, tag, image, role, isCaptain){
		this.name = name;
		this.tag = tag;
		this.image = image;
		this.role = role;
	}

	$scope.playerList.push(new Player("Johan Sundstein", "n0tail", "n0tail.jpeg", "Carry", false));
	$scope.playerList.push(new Player("Amer Barqawi", "Miracle-", "", "Mid", false));
	$scope.playerList.push(new Player("David Tan", "Moon", "moon.jpeg", "Offlane", false));
	$scope.playerList.push(new Player("Andreas Nielsen", "Cr1t-", "crit-.jpeg", "Support(4)", false));
	$scope.playerList.push(new Player("Tal Aizik", "Fly", "fly.jpeg", "Support(5)", true));
});