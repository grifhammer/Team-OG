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
			console.log($scope.OGMatches)
		});
	};

	$scope.radiantPlayers = function(playerArray){
		console.log(playerArray.slice(0,4))
		return playerArray.slice(0,4);
	}

	$scope.direPlayers = function(playerArray){
		console.log(playerArray.slice(5,9))
		return playerArray.slice(5,9)
	}
	
	$scope.heroes = heroes
	
	
	

});

