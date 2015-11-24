var OGApp = angular.module('OGApp', ['ngRoute'])

OGApp.controller('matchController', function($scope, $http){
	
	var teamOGId = 2586976;
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
			var matchList = steamData.result.matches;
			for(var matchIndex = 0; matchIndex < matchList.length; matchIndex++){
				if( matchList[matchIndex].dire_team_id == teamOGId ||
					matchList[matchIndex].radiant_team_id == teamOGId){
					$scope.OGMatches.push(matchList[matchIndex]);
				}
			}
			console.log(steamData);
		});
	};
	console.log(heroes)
	$scope.heroes = heroes
	
	
	

});


OGApp.directive('heroSrc', function () {
   	return{ 
   		restrict: 'A',
   		scope: {
   			heroSrc: '='
   		}
   		link: function (scope, element, attrs) {
       		attrs.$set('src', heroes[heroSrc])
   		};
	}
});
