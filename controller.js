var OGApp = angular.module('OGApp', ['ngRoute'])

OGApp.controller('matchController', function($scope, $http){
	

	var localApiBaseUrl = ''
	var steamAPIBaseUrl = '../steamapi/'

	var getLeagueUrl = 'getleaguelisting/'
	var getMatchUrl = 'getmatchlisting/'
	var getItemsUrl = 'itemlist/'
	var getHeroesUrl = 'getheroes/'
	var leagueId = '342'



	function buildLeagueUrl (inputLeagueId){
		function leagueIdUrl (inputLeagueId){
			return '?league_id=' + inputLeagueId;
		}
		return steamAPIBaseUrl + getLeagueUrl + leagueIdUrl(inputLeagueId);
	}
	function buildMatchUrl (inputLeagueId){
		function leagueIdUrl (inputLeagueId){
			return '?league_id=' + inputLeagueId;
		}
		return steamAPIBaseUrl + getMatchUrl + leagueIdUrl(inputLeagueId);
	}

	$scope.OGMatches = []
	for(var i = 0; i < teamOGLeagues.length; i++){
		leagueId = teamOGLeagues[i].leagueid;
		$http.get(buildMatchUrl(leagueId)).success(function(steamData){
			console.log(steamData);
		});
	};
	
	
	

});