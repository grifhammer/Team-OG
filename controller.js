var OGApp = angular.module('OGApp', ['ngRoute'])

OGApp.controller('matchController', function($scope, $http){
	
	var teamOGId = 2586976;
	var localApiBaseUrl = ''
	var steamAPIBaseUrl = '../steamapi/'

	var getLeagueUrl = 'getleaguelisting/'
	var getMatchUrl = 'getmatchlisting/'
	var getItemsUrl = 'itemlist/'
	var getTeamUrl = 'GetTeamInfoByTeamID/'
	var getHeroesUrl = 'getheroes/'
	var leagueId = '342'

	function getTeamOGInfoUrl (){
		var teamOGRequestUrl = '?start_at_team_id=' + teamOGId;
		return steamAPIBaseUrl + getTeamUrl + teamOGRequestUrl;
	}

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
	$http.get(getTeamOGInfoUrl()).success(function(teamData){
		$scope.teamOG = teamData.result.teams[0];
		console.log($scope.teamOG)
	});

	$scope.OGMatches = []
	for(var i = 0; i < teamOGLeagues.length; i++){
		leagueId = teamOGLeagues[i].leagueid;
		$http.get(buildMatchUrl(leagueId)).success(function(steamData){
			var matchList = steamData.result.matches;
			for(var matchIndex = 0; matchIndex < matchList.length; matchIndex++){
				if( matchList[matchIndex].dire_team_id == teamOGId){
					matchList[matchIndex].isOGDire = true;
					console.log(matchList[matchIndex]);
					$scope.OGMatches.push(matchList[matchIndex]);
				}
				if( matchList[matchIndex].radiant_team_id == teamOGId){
					matchList[matchIndex].isOGDire = false;
					console.log(matchList[matchIndex]);
					$scope.OGMatches.push(matchList[matchIndex]);
				}
			}
		});
	};

	$scope.radiantPlayers = function(playerArray){
		return playerArray.slice(0,5);
	}

	$scope.direPlayers = function(playerArray){
		return playerArray.slice(5)
	}
	
	$scope.heroes = heroes
	
	
	

});

