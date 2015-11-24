var OGApp = angular.module('OGApp', ['ngRoute'])

OGApp.controller('matchController', function($scope, $http){
	var localApiBaseUrl = ''
	var steamAPIBaseUrl = 'https://api.steampowered.com/'

	var dotaApiUrl = 'IDOTA2Match_570/'
	var steamProfileBase = 'ISteamUser/'
	var steamProfileOptions = 'GetPlayerSummaries/v002'
	var getLeagueUrl = 'GetLeagueListing/v001/'
	var apiKeyUrl = '?key=' + apiKey;
	var steamApiCall = steamAPIBaseUrl + dotaApiUrl + getLeagueUrl + apiKeyUrl;


	$scope.OGMatches = []
	$http.get(steamApiCall).success(function(steamData){
		console.log(steamData);
	});

});