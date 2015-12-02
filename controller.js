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
		//Loop through players list
		for(var playerIndex = indexStart; playerIndex <= indexEnd; playerIndex++){
			// create new variable to store current player
			var currPlayer = match.players[playerIndex];
			//Loop through list of known players and if found replace the account_id with player name
			for(var i = 0; i < knownPlayerList.length; i++){
				if(currPlayer.account_id == knownPlayerList[i][0]){
					match.players[playerIndex].account_id = knownPlayerList[i][1];
				}
			}
			
		}
		return match;
	}
	// Make API call to get the information for team OG and store it in the teamOG scope variable
	$http.get(getTeamOGInfoUrl()).success(function(teamData){
		if(teamData == ''){
			console.log("Got empty team JSON")
		}else{
			$scope.teamOG = teamData.result.teams[0];
		}
	});


	//loop through list of leagues that OG is playing in and make API calls to get matches they ar ein
	$scope.OGMatches = []
	for(var leagueIndex = 0; leagueIndex < teamOGLeagues.length; leagueIndex++){
		leagueName = teamOGLeagues[leagueIndex].name;
		leagueId = teamOGLeagues[leagueIndex].leagueid;
		$http.get(buildMatchUrl(leagueId)).success(function(leagueName){
			return function(steamData){
				if(steamData == ""){
					console.log("Got empty match JSON")
				}else{
					var matchList = steamData.result.matches;
					// Loop through returned matches and find if OG in the match
					// If so record whether they were dire set the name of the league and push it onto the matches array
					for(var matchIndex = 0; matchIndex < matchList.length; matchIndex++){
						if(matchList[matchIndex].match_id == 1923609014 || matchList[matchIndex].match_id == 1923412583){
							matchIndex++;
						}
						if( matchList[matchIndex].dire_team_id == teamOGId){
							matchList[matchIndex].isOGDire = true;
							matchList[matchIndex].leagueName = leagueName;
							$scope.OGMatches.push(changePlayerNames(matchList[matchIndex]));
						}
						if( matchList[matchIndex].radiant_team_id == teamOGId){
							matchList[matchIndex].isOGDire = false;
							matchList[matchIndex].leagueName = leagueName;
							$scope.OGMatches.push(changePlayerNames(matchList[matchIndex]));
						}
					}
				}
			}
		}(leagueName));
	};


	$scope.radiantPlayers = function(playerArray){
		return playerArray.slice(0,5);
	}

	$scope.direPlayers = function(playerArray){
		return playerArray.slice(5)
	}
	
	$scope.heroes = heroes
	
	
	

});

