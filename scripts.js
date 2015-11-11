$(document).ready(function(){
	var steamApiBaseUrl = 'https://api.steampowered.com/';
	var getTeamInfo = 'IDOTA2Match_570/GetTeamInfoByTeamID/v001/';
	var getMatchesUrl = "IDOTA2Match_570/GetMatchHistory/v001/";
	var apiKeyUrl = '?key=' + apiKey;
	var format = '&format=json';

	var teamOGId = "2586976";

	var startAtThisTeamId = teamOGId;
	var startingTeamUrl = "&start_at_team_id=" + startAtThisTeamId;

	var numRequestedTeams = 1;
	var numTeamsRequestedUrl = '&teams_requested=' + numRequestedTeams;

	var steamApiCall = steamApiBaseUrl + getTeamInfo + apiKeyUrl + startingTeamUrl + numTeamsRequestedUrl;

	var teamJsonResults = getFakeJson(steamApiCall);

	var teamOGIds = []
	var teamOGMatchIds = [];

	teamOGIds = getTeamIds(teamJsonResults);



	var teamOGMatches = []


	
	//get the matches from leagues they play in
	for(var leagueIndex = 0; leagueIndex < teamOGLeagues.length; leagueIndex++){
		var leagueId = teamOGLeagues[leagueIndex].leagueid;
		var leagueIdUrl = '&league_id=' + leagueId;
		steamApiCall = steamApiBaseUrl + getMatchesUrl + apiKeyUrl + leagueIdUrl;


		leagueMatchesJSON = getFakeJson(steamApiCall);
		for(var teamIdIndex = 0; teamIdIndex < teamOGIds.length; teamIdIndex++){
			teamOGId = teamOGIds[teamIdIndex];
			var leagueMatches = leagueMatchesJSON.result.matches;
			var teamOGMatchObj = findGamesPlayedByTeamID(teamOGIds[teamIdIndex], leagueMatches);
			teamOGIds = teamOGMatchObj.matchIds;
			teamOGMatches = teamOGMatchObj.matches;
			//get match IDs for matches that they actually played in
			
		}
	}



	for(var matchIdIndex = 0; matchIdIndex < teamOGMatchIds.length; matchIdIndex++){
		var foundIdIndex = ogMatchIds.indexOf(teamOGMatchIds[matchIdIndex]);
		if(foundIdIndex != -1){
			ogMatchIds.splice(foundIdIndex,1);
		} else{
			console.log(teamOGMatchIds[matchIdIndex])
		}
	}
	

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