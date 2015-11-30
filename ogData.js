var teamOGLeagues = [
{
	name: "#DOTA_Item_ASUS_ROG_DreamLeague_Season_4",
	leagueid: 3865,
	description: "#DOTA_Item_Desc_ASUS_ROG_DreamLeague_Season_4",
	tournament_url: "http://dreamleague.dreamhack.se/",
	itemdef: 16737
},
{
	name: "#DOTA_Item_The_Summit_4",
	leagueid: 3781,
	description: "#DOTA_Item_Desc_The_Summit_4",
	tournament_url: "beyondthesummit.tv",
	itemdef: 16738
},
{
	name: "#DOTA_Item_The_Defense_Season_5",
	leagueid: 3534,
	description: "#DOTA_Item_Desc_The_Defense_Season_5",
	tournament_url: "http://www.the-defense.com/",
	itemdef: 16722
},
{
	name: "#DOTA_Item_Frankfurt_Major_2015",
	leagueid: 3671,
	description: "#DOTA_Item_Desc_Frankfurt_Major_2015",
	tournament_url: "",
	itemdef: 16731
},
{
	name: "#DOTA_Item_D2CL_Season_6",
	leagueid: 3726,
	description: "#DOTA_Item_Desc_D2CL_Season_6",
	tournament_url: "http://d2cl.org",
	itemdef: 16395
},
{
	name: "#DOTA_Item_StarLadder__iLeague",
	leagueid: 3902,
	description: "#DOTA_Item_Desc_StarLadder__iLeague",
	tournament_url: "http://live.starladder.tv",
	itemdef: 16736
},
{
	name: "#DOTA_Item_MLG_World_Finals_2015",
	leagueid: 2392,
	description: "#DOTA_Item_Desc_MLG_World_Finals_2015",
	tournament_url: "http://www.majorleaguegaming.com/finals",
	itemdef: 16394
},
{
	name: "#DOTA_Item_Nanyang_Championships",
	leagueid: 3502,
	description: "#DOTA_Item_Desc_Nanyang_Championships",
	tournament_url: "http://www.nanyangcup.cn/",
	itemdef: 16695
},
{
	name: "#DOTA_Item_World_Cyber_Arena_2015",
	leagueid: 2922,
	description: "#DOTA_Item_Desc_World_Cyber_Arena_2015",
	tournament_url: "http://www.wca.com.cn",
	itemdef: 16470
}
];


var knownPlayerList = [ [94155156, "Fly"],
						[105248644, "Miracle-"],
						[25907144, "Crit-"],
						[19672354, "n0ta1l"],
						[38628747, "Moon"],
						[87278757, "Puppey"],
						[43276219, "EternalEnvy"],
						[86700461, "w33haa"],
						[87382579, "Misery"],
						[6922000, "pieliedie"],
						[86727555, "ppd"],
						[111620041, "Suma1l"],
						[87276347, "Universe"],
						[87177591, "Fear"],
						[86745912, "Arteezy"],
						[134276083, "old eleven"],
						[89423756, "LaNm"],
						[108376607, "Cty"],
						[139876032, "kaka"],
						[135878232, "old chicken"],
						[140153524, "Q"],
						[131237305, "Xz"],
						[142750189, "Garder"],
						[101375717, "ShiKi"],
						[130416036, "Agressif"],
						[94049589, "Fng"],
						[26316691, "Illidan Stormrage"],
						[87586992, "G"],
						[94338967, "DkPhobos"],
						[106809101, "Lil"],
						[86772934, "JessieVash"],
						[89871557, "MuShi-"],
						[102099826, "DJ"],
						[21289303, "Black^"],
						[89249333, "Net"],
						[93616251, "Ohaiyo"],
						[91460772, "CeMaTheSlayeR"],
						[134556694, "Solo"],
						[106573901, "No[o]ne"],
						[86802844, "Mag"],
						[92423451, "9pashaebashu"],
						[100175472, "ztok"],
						[91364275, "Atún"],
						[109455705, "Greedy"],
						[99796146, "accelgd"],
						[95825708, "Kotaro"] ];


//splice down leagues to just have Frankfurt Major
teamOGLeagues = teamOGLeagues.splice(3,1);

var ogMatchIds = [
1924109491,
1924058157,
1923977220,
1923909329,
1923741910,
1923642959,
1923609014,
1923459197,
1921316393,
1921224121,
1921106426,
1920974442,
1919071372,
1918959324,
1918839537,
1918729624,
1918614355,
1918457362,
1916879181,
1916837731,
1916772853,
1916634529,
1916514465,
1914713381,
1914619443,
1914177497,
1914031829,
1912443120,
1912386269,
1912218049,
1912135868,
1910208777,
1910121231,
1909825881,
1909728487,
1896935224,
1896884315,
1894505061,
1894427686,
1894319235,
1894183484,
1892309589,
1892222498,
1892081241,
1886935076,
1886804303,
1884957668,
1884897163,
1884808502,
1876353970,
1876218911,
1876100954,
1871750561,
1871686450,
1871463989,
1871391533,
1864416617,
1864290085,
1861506376,
1861405896,
1860365343,
1860271085,
1860067758,
1859894714,
1859692713,
1859446615,
1857680544,
1857581126,
1850550371,
1850490203,
1849983598,
1849877128,
1843441351,
1843333248,
1843226714,
1835417704,
1835274526,
1835110593,
1834932386,
1830199019,
1830116002,
1830029282,
1827709336,
1827577454,
1825256978,
1825135893,
1819119418,
1818925460,
1814810714,
1814733279,
1812592913,
1812535066,
1810648824,
1810591554,
1805620417,
1805507703,
1805407916,
1805173130,
1796515913,
1796451494,
1794349354,
1794276233
]