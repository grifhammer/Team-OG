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

	function changePlayerNames(match){
		var indexStart = 0;
		var indexEnd = 9;
		for(var playerIndex = indexStart; playerIndex <= indexEnd; playerIndex++){
			var currPlayer = match.players[playerIndex];
			console.log(currPlayer);
			for(var i = 0; i < knownPlayerList.length; i++){
				if(currPlayer.account_id == knownPlayerList[i][0]){
					match.players[playerIndex].account_id = knownPlayerList[i][1];
				}
			}
			
		}
		return match;
	}
	$http.get(getTeamOGInfoUrl()).success(function(teamData){
		if(teamData == ''){
			console.log("Got empty team JSON")
		}else{
			$scope.teamOG = teamData.result.teams[0];
			console.log($scope.teamOG)
		}
	});

	$scope.OGMatches = []
	for(var i = 0; i < teamOGLeagues.length; i++){
		leagueId = teamOGLeagues[i].leagueid;
		$http.get(buildMatchUrl(leagueId)).success(function(steamData){
			if(steamData == ""){
				console.log("Got empty match JSON")
			}else{
				var matchList = steamData.result.matches;
				for(var matchIndex = 0; matchIndex < matchList.length; matchIndex++){
					if( matchList[matchIndex].dire_team_id == teamOGId){
						matchList[matchIndex].isOGDire = true;
						matchList[matchIndex].leagueName = teamOGLeagues[i].name;
						$scope.OGMatches.push(changePlayerNames(matchList[matchIndex]));
					}
					if( matchList[matchIndex].radiant_team_id == teamOGId){
						matchList[matchIndex].isOGDire = false;
						matchList[matchIndex].leagueName = teamOGLeagues[i].name;
						$scope.OGMatches.push(changePlayerNames(matchList[matchIndex]));
					}
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

