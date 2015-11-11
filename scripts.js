$(document).ready(function(){
	var steamApiBaseUrl = 'https://api.steampowered.com/'
	var getTeamInfo = 'IDOTA2Match_570/GetTeamInfoByTeamID/v001/'
	var apiKeyUrl = '?key=' + apiKey;
	var languageUrl = ''
	var format = '&format=json'
	var startAtThisTeamId = "2586976"
	var startingTeamUrl = "&start_at_team_id=" + startAtThisTeamId;
	var numRequestedTeams = 1;
	var teamsRequestedUrl = '&teams_requested=' + numRequestedTeams;
	var getMatchesUrl = "IDOTA2Match_570/GetMatchHistory/v001/"
	var teamOGId = startAtThisTeamId;
	var steamApiCall = steamApiBaseUrl + getTeamInfo + apiKeyUrl + startingTeamUrl + teamsRequestedUrl;

	var results = getFakeJson(steamApiCall);
	var teamOGIds = []
	var teamOGMatchIds =[];
	teamOGIds.push(results.result.teams[0].team_id);
	teamOGIds.push('2519319');

	var teamOGMatches = []
	for(var teamIdIndex = 0; teamIdIndex < teamOGIds.length; teamIdIndex++){
		teamOGId = teamOGIds[teamIdIndex];
		//get the matches from leagues they play in
		for(var leagueIndex = 0; leagueIndex < teamOGLeagues.length; leagueIndex++){
			var leagueId = teamOGLeagues[leagueIndex].leagueid;
			var leagueIdUrl = '&league_id=' + leagueId;
			steamApiCall = steamApiBaseUrl + getMatchesUrl + apiKeyUrl + leagueIdUrl;


			leagueMatchesJSON = getFakeJson(steamApiCall);
			var leagueMatches = leagueMatchesJSON.result.matches;

			//get match IDs for matches that they actually played in
			for(var matchesIndex = 0; matchesIndex < leagueMatches.length; matchesIndex++){
				if(teamOGId == leagueMatches[matchesIndex].dire_team_id ||
					teamOGId == leagueMatches[matchesIndex].radiant_team_id){
					teamOGMatches.push(leagueMatches[matchesIndex]);
					teamOGMatchIds.push(leagueMatches[matchesIndex].match_id)
				}
			}
		}
	}
	// console.log(teamOGMatches)
	// console.log(teamOGMatchIds)
	for(var matchIdIndex = 0; matchIdIndex < teamOGMatchIds.length; matchIdIndex++){
		var foundIdIndex = ogMatchIds.indexOf(teamOGMatchIds[matchIdIndex]);
		if(foundIdIndex != -1){
			ogMatchIds.splice(foundIdIndex,1);
		} else{
			console.log(teamOGMatchIds[matchIdIndex])
		}
	}
	console.log(ogMatchIds);
	for( matchIdIndex = 0; matchIdIndex < ogMatchIds.length; matchIdIndex++ ){
		console.log("www.dotabuff.com/matches/" + ogMatchIds[matchIdIndex])
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