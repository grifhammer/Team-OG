var OGApp = angular.module('OGApp', ['ngRoute'])

OGApp.controller('matchController', function($scope, $http){
	var localApiBaseUrl = ''
	var steamAPIBaseUrl = 'https://dotadescent.com/steamapi/'

	var dotaApiUrl = 'IDOTA2Match_570/'
	var steamProfileBase = 'ISteamUser/'
	var steamProfileOptions = 'GetPlayerSummaries/v002'
	var getLeagueUrl = 'GetLeagueListing/v001/'
	var apiKeyUrl = '?apiKey=' + apiKey;
	var steamApiCall = steamAPIBaseUrl + dotaApiUrl + getLeagueUrl + apiKeyUrl;


	$scope.OGMatches = []
	$http.get(steamApiCall, function(steamData){
		console.log(steamData);
	})

});