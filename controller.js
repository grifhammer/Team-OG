var OGApp = angular.module('OGApp', ['ngRoute'])

OGApp.controller('mainController', function($scope, $http){
	var localApiBaseUrl = 'fakeJSON/'
	var steamAPIBaseUrl = 'https://api.steampowered.com'

	var dotaApiUrl = 'IDOTA2Match_570/'
	var steamProfileBase = 'ISteamUser/'
	var steamProfileOptions = 'GetPlayerSummaries/v002'
	var steamProfileUrl = steamProfileBase + steamProfileOptions


	$scope.OGMatches = []

});

$(document).ready(function(){

	var getLeagueUrl = 'getleaguelisting/';
	var getMatchesUrl = "getmatchlisting/";
	var getTeamInfoUrl = ''
	var apiKeyUrl = '&key=' + apiKey;
	var languageUrl = "language=en_us"
	var format = '&format=json';

	var teamOGId = "2586976";

	var startAtThisTeamId = teamOGId;
	var startingTeamUrl = "&start_at_team_id=" + startAtThisTeamId;

	var numRequestedTeams = 1;
	var numTeamsRequestedUrl = '&teams_requested=' + numRequestedTeams;

	var steamApiCall = steamApiBaseUrl + getTeamInfoUrl + apiKeyUrl + startingTeamUrl + numTeamsRequestedUrl;

	steamApiCall = steamApiBaseUrl + "getheroes/" + apiKeyUrl + languageUrl

	var teamJsonResults = getFakeJson(steamApiCall);

	var teamOGIds = []
	var teamOGMatchIds = [];

	// teamOGIds = getTeamIds(teamJsonResults);



	var teamOGMatches = []


	
	// //get the matches from leagues they play in
	// for(var leagueIndex = 0; leagueIndex < teamOGLeagues.length; leagueIndex++){
	// 	var leagueId = teamOGLeagues[leagueIndex].leagueid;
	// 	var leagueIdUrl = '&league_id=' + leagueId;
	// 	steamApiCall = steamApiBaseUrl + getMatchesUrl + apiKeyUrl + leagueIdUrl;


	// 	leagueMatchesJSON = getFakeJson(steamApiCall);
	// 	for(var teamIdIndex = 0; teamIdIndex < teamOGIds.length; teamIdIndex++){
	// 		teamOGId = teamOGIds[teamIdIndex];
	// 		var leagueMatches = leagueMatchesJSON.result.matches;
	// 		var teamOGMatchObj = findGamesPlayedByTeamID(teamOGIds[teamIdIndex], leagueMatches);
	// 		teamOGIds = teamOGMatchObj.matchIds;
	// 		teamOGMatches = teamOGMatchObj.matches;
	// 		//get match IDs for matches that they actually played in
			
	// 	}
	// }



	// for(var matchIdIndex = 0; matchIdIndex < teamOGMatchIds.length; matchIdIndex++){
	// 	var foundIdIndex = ogMatchIds.indexOf(teamOGMatchIds[matchIdIndex]);
	// 	if(foundIdIndex != -1){
	// 		ogMatchIds.splice(foundIdIndex,1);
	// 	} else{
	// 		console.log(teamOGMatchIds[matchIdIndex])
	// 	}
	// }
	

	function getTeamIds(teamJson){
		var idArray;
		idArray.push(teamJson.result.teams[0].team_id);
		idArray.push("2519319");
		return idArray;
	}

	function findGamesPlayedByTeamID(teamId, matchArray){
		var teamMatches = [];
		var teamMatchIds = [];
		for(var matchesIndex = 0; matchesIndex < matchArray.length; matchesIndex++){
			if(TeamId == matchArray[matchesIndex].dire_team_id ||
				TeamId == matchArray[matchesIndex].radiant_team_id){
				teamMatches.push(matchArray[matchesIndex]);
				teamMatchIds.push(matchArray[matchesIndex].match_id)
			}
		}
		return {
			matches: teamMatches,
			matchIds: teamMatchIds
		}
	}
});

function getFakeJson(JSON){
	var returnVal;
	var jsonArrayIndex = 0;
	for ( jsonArrayIndex = 0; jsonArrayIndex < JSONArray.length; jsonArrayIndex++){
		var thisJsonObj = JSONArray[jsonArrayIndex];
		if(JSON === thisJsonObj.jsonUrl){
			returnVal = thisJsonObj.jsonResult;
			return returnVal;
		}
	}
	return -1;
}