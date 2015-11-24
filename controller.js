var OGApp = angular.module('OGApp', ['ngRoute'])

OGApp.controller('matchController', function($scope, $http){
	var localApiBaseUrl = ''
	var steamAPIBaseUrl = '../steamapi/'

	var getLeagueUrl = 'getleaguelisting/'
	var getMatchUrl = 'getmatchlisting/'
	var getItemsUrl = 'itemlist/'
	var getHeroesUrl = 'getheroes/'
	var leagueId = '342'
	var steamApiCall = steamAPIBaseUrl + getLeagueUrl + leagueIdUrl(leagueId);


	$scope.OGMatches = []
	$http.get(buildLeagueUrl(leagueId)).success(function(steamData){
		console.log(steamData);
	});

	var buildLeagueUrl = function(inputLeagueId){
		var leagueIdUrl = function(inputLeagueId){
			return '?league_id=' + inputLeagueId;
		}
		return steamAPIBaseUrl + getLeagueUrl + leagueIdUrl(inputLeagueId);
	}

});