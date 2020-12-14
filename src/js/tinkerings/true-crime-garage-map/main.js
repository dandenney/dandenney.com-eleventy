mapboxgl.accessToken =
  "pk.eyJ1IjoiZGFuZGVubmV5IiwiYSI6Indwc05iZW8ifQ.X8KMtaHslofn7K0TY8A8Ug";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/dark-v10",
  center: [-97.5062627, 3.2088854],
  zoom: 1.5
});

const generatedFeatures = [
  {
    type: "Feature",
    properties: {
      Title: "Serial Confessor /// 413 /// 414",
      Release: "7/21/2020",
      URL: "https://truecrimegarage.com/home/blog/serial-confessor-413-414",
      Earliest_Date: "6/16/1979",
      Earliest_Year: "1979",
      Notes:
        "Poplar Montana, near Poplar River (general area not an exact location)\n"
    },
    geometry: {
      coordinates: [-105.213843, 48.114847],
      type: "Point"
    },
    id: "b421ee46056e662795b802c87f2452a2"
  },
  {
    type: "Feature",
    properties: {
      Title: "Heather Teague /// 411 /// 412",
      Release: "7/14/2020",
      URL: "https://truecrimegarage.com/home/blog/heather-teague-411-412",
      Earliest_Date: "8/26/1995",
      Earliest_Year: "1995",
      Notes: "Newburgh Beach, Henderson, KY"
    },
    geometry: {
      coordinates: [-87.592789, 37.832768],
      type: "Point"
    },
    id: "ed49efa010f62f845adfb6472f071fb8"
  },
  {
    type: "Feature",
    properties: {
      Title: "Las Cruces Bowling Alley Massacre /// 409 /// 410",
      Release: "6/30/2020",
      URL:
        "https://truecrimegarage.com/home/blog/las-cruces-bowling-alley-massacre-409-410",
      Earliest_Date: "2/10/1990",
      Earliest_Year: "1990",
      Notes: "1201 East Amador Avenue, Las Cruces, NM"
    },
    geometry: {
      coordinates: [-106.76633, 32.30993],
      type: "Point"
    },
    id: "513a9cf8b32854bb83570173e99463ec"
  },
  {
    type: "Feature",
    properties: {
      Title: "Jessica Gutierrez ////// 408",
      Release: "6/23/2020",
      URL: "https://truecrimegarage.com/home/blog/jessica-gutierrez-408",
      Earliest_Date: "6/5/1986",
      Earliest_Year: "1986",
      Notes: "Lexington, South Carolina\n"
    },
    geometry: {
      coordinates: [-81.238358, 33.9813],
      type: "Point"
    },
    id: "4b3890f2fbfdc6459555552683460be1"
  },
  {
    type: "Feature",
    properties: {
      Title: "Taylor Robinson /// 406 /// 407",
      Release: "6/16/2020",
      URL:
        "https://truecrimegarage.com/blogs/true-crime-garage/posts/taylor-robinson-406-407",
      Earliest_Date: "5/3/2013",
      Earliest_Year: "2013",
      Notes: "700 block of Kipling Street in Akron, Ohio"
    },
    geometry: {
      coordinates: [-81.50363, 41.05729],
      type: "Point"
    },
    id: "1aa4f7efde6c1e900bdeacbfd230dfb0"
  },
  {
    type: "Feature",
    properties: {
      Title: "Slayer’s Book of Death /// 404 /// 405",
      Release: "6/9/2020",
      URL:
        "https://truecrimegarage.com/home/blog/slayer-s-book-of-death-404-405",
      Earliest_Date: "7/26/1993",
      Earliest_Year: "1993",
      Notes: "Cut-Off Rd, Ennis, Texas 75119"
    },
    geometry: {
      coordinates: [-96.468518, 32.38919],
      type: "Point"
    },
    id: "b91542fad639fa1d721542759fb1bc47"
  },
  {
    type: "Feature",
    properties: {
      Title: "The Hi-Fi Murders /// 402 /// 403",
      Release: "6/2/2020",
      URL: "https://truecrimegarage.com/home/blog/the-hi-fi-murders-402-403",
      Earliest_Date: "4/22/1974",
      Earliest_Year: "1974",
      Notes: "2323 Washington Boulevard, Ogden"
    },
    geometry: {
      coordinates: [-111.97052, 41.22434],
      type: "Point"
    },
    id: "d7e5d428606875d99cb14b1642659942"
  },
  {
    type: "Feature",
    properties: {
      Title: "Ahmaud Arbery /// 400 /// 401",
      Release: "5/26/2020",
      URL: "https://truecrimegarage.com/home/blog/ahmaud-arbery-400-401",
      Earliest_Date: "2/23/2020",
      Earliest_Year: "2020",
      Notes: "419 Holmes Rd\nBrunswick, Georgia"
    },
    geometry: {
      coordinates: [-81.55572, 31.12425],
      type: "Point"
    },
    id: "5433160d7ac4effb559fe312ae9abe2a"
  },
  {
    type: "Feature",
    properties: {
      Title: "The Casanova Killer /// 398 /// 399",
      Release: "5/19/2020",
      URL: "https://truecrimegarage.com/home/blog/the-casanova-killer-398-399",
      Earliest_Date: "7/26/1974",
      Earliest_Year: "1974",
      Notes:
        "John E. Goode Pre-trial Detention Facility 500 E Adams St, Jacksonville, FL 32202 (couldn't find an address for Alice Curtis)"
    },
    geometry: {
      coordinates: [-81.6513, 30.32596],
      type: "Point"
    },
    id: "c37db324144195ab513f2c05af53528c"
  },
  {
    type: "Feature",
    properties: {
      Title: "Taylor Behl /// 396 /// 397",
      Release: "5/12/2020",
      URL: "https://truecrimegarage.com/home/blog/taylor-behl-396-397",
      Earliest_Date: "9/5/2005",
      Earliest_Year: "2005",
      Notes: "Gladding Residence Center, VCU 711 W Main St, Richmond, VA 23220"
    },
    geometry: {
      coordinates: [-77.45098, 37.54547],
      type: "Point"
    },
    id: "8269d616f91014641350cf9b3a987b57"
  },
  {
    type: "Feature",
    properties: {
      Title: "Delphi Murders Discussion ////// 395",
      Release: "5/5/2020",
      URL:
        "https://truecrimegarage.com/home/blog/delphi-murders-discussion-395",
      Earliest_Date: "2/13/2017",
      Earliest_Year: "2017",
      Notes:
        "Coordinates according to https://tools.wmflabs.org/geohack/geohack.php?pagename=Murders_of_Abigail_Williams_and_Liberty_German&params=40_35_20.7_N_86_38_34.2_W_type:landmark"
    },
    geometry: {
      coordinates: [-86.642833, 40.589083],
      type: "Point"
    },
    id: "d9f03c69471d0e67def7bf245fb20897"
  },
  {
    type: "Feature",
    properties: {
      Title: "The Evansdale Murders /// 393 /// 394",
      Release: "4/28/2020",
      URL:
        "https://truecrimegarage.com/home/blog/the-evansdale-murders-393-394",
      Earliest_Date: "7/13/2012",
      Earliest_Year: "2012",
      Notes: "Brovan Boulevard in Evansdale\n"
    },
    geometry: {
      coordinates: [-92.293763, 42.475896],
      type: "Point"
    },
    id: "75862dca6819e13d2e550a8ab843759c"
  },
  {
    type: "Feature",
    properties: {
      Title: "Jason Corbett /// 391 /// 392",
      Release: "4/21/2020",
      URL: "https://truecrimegarage.com/home/blog/jason-corbett-391-392",
      Earliest_Date: "8/2/2015",
      Earliest_Year: "2015",
      Notes: "160 Panther Creek Court in the Meadowlands"
    },
    geometry: {
      coordinates: [-80.16219, 35.9972],
      type: "Point"
    },
    id: "af3080ae5c9f016f771744ce219e2bf2"
  },
  {
    type: "Feature",
    properties: {
      Title: "McMartin Pre-School ////// 390",
      Release: "4/14/2020",
      URL: "https://truecrimegarage.com/home/blog/mcmartin-pre-school-390",
      Earliest_Date: "9/8/1983",
      Earliest_Year: "1983",
      Notes: "900 block of Manhattan Beach Boulevard"
    },
    geometry: {
      coordinates: [-118.402573, 33.88739],
      type: "Point"
    },
    id: "b807ec450d8cc47e0651938cf7d27273"
  },
  {
    type: "Feature",
    properties: {
      Title: "Liko Kenney /// 388 /// 389",
      Release: "4/7/2020",
      URL: "https://www.truecrimegarage.com/home/blog/liko-kenney-388-389",
      Earliest_Date: "1/26/2003",
      Earliest_Year: "2003",
      Notes: "General ares of Fox Hill Park"
    },
    geometry: {
      coordinates: [-71.749355, 44.222889],
      type: "Point"
    },
    id: "3f5085fc994a507f7d809f48bb9734f8"
  },
  {
    type: "Feature",
    properties: {
      Title: "The Forgotten WM3 /// 386 /// 387",
      Release: "3/31/2020",
      URL: "https://truecrimegarage.com/home/blog/the-forgotten-wm3-386-387",
      Earliest_Date: "5/5/1993",
      Earliest_Year: "1993",
      Notes: "Estimated area based on static maps"
    },
    geometry: {
      coordinates: [-90.171837, 35.161179],
      type: "Point"
    },
    id: "2cdf305d7850d0a38ae4815651e71226"
  },
  {
    type: "Feature",
    properties: {
      Title: "Delphi Murders /// 110 & 111",
      Release: "5/31/2017",
      URL: "https://truecrimegarage.com/home/blog/delphi-murders-110-111",
      Earliest_Date: "2/13/2017",
      Earliest_Year: "2017",
      Notes:
        "Coordinates according to https://tools.wmflabs.org/geohack/geohack.php?pagename=Murders_of_Abigail_Williams_and_Liberty_German&params=40_35_20.7_N_86_38_34.2_W_type:landmark"
    },
    geometry: {
      coordinates: [-86.642833, 40.589083],
      type: "Point"
    },
    id: "0088a432883b86318c49824e7ec2f7a4"
  },
  {
    type: "Feature",
    properties: {
      Title: "Tara Grinstead /// 215 /// 216",
      Release: "6/12/2018",
      URL: "https://truecrimegarage.com/home/blog/tara-grinstead-215-216",
      Earliest_Date: "10/22/2005",
      Earliest_Year: "2005",
      Notes: "300 W Park StOcilla, GA 31774\n"
    },
    geometry: {
      coordinates: [-83.253669, 31.587556],
      type: "Point"
    },
    id: "03139c733bbce841b4b72349b7917364"
  },
  {
    type: "Feature",
    properties: {
      Title: "Kurt Cobain ////// 33 ",
      Release: "6/14/2016",
      URL: "https://truecrimegarage.com/home/blog/kurt-cobain-33",
      Earliest_Date: "5/5/1994",
      Earliest_Year: "1994",
      Notes: "171 Lake Washington Blvd E, Seattle, WA."
    },
    geometry: {
      coordinates: [-122.282063, 47.6196],
      type: "Point"
    },
    id: "0350809c99be68517313e01dad7e0c2f"
  },
  {
    type: "Feature",
    properties: {
      Title: "SLENDER MAN ////// 24",
      Release: "4/6/2016",
      URL: "https://truecrimegarage.com/home/blog/slender-man-24",
      Earliest_Date: "5/31/2014",
      Earliest_Year: "2014",
      Notes:
        "Coordinates from https://tools.wmflabs.org/geohack/geohack.php?pagename=Slender_Man_stabbing&params=42.9814_N_88.2239_W_"
    },
    geometry: {
      coordinates: [-88.2239, 42.9814],
      type: "Point"
    },
    id: "04fbf00d4f5dc8cb8cadf23afe00557b"
  },
  {
    type: "Feature",
    properties: {
      Title: "Patrick Dennehy ////// 319",
      Release: "7/17/2019",
      URL: "https://truecrimegarage.com/home/blog/patrick-dennehy-319",
      Earliest_Date: "6/12/2003",
      Earliest_Year: "2003",
      Notes:
        "General area near the river, 4 miles south of the campus, unable to find street names or locations"
    },
    geometry: {
      coordinates: [-97.08598, 31.538007],
      type: "Point"
    },
    id: "057e91bd7779652613e8943855096228"
  },
  {
    type: "Feature",
    properties: {
      Title: "DR. SAM SHEPPARD ////// 10",
      Release: "1/13/2016",
      URL: "https://truecrimegarage.com/home/blog/dr-sam-sheppard-10",
      Earliest_Date: "7/4/1954",
      Earliest_Year: "1954",
      Notes: "28944 Lake Road in Bay Village, Ohio"
    },
    geometry: {
      coordinates: [-81.939221, 41.491223],
      type: "Point"
    },
    id: "078cf605dc709e64012ba6dd19bed735"
  },
  {
    type: "Feature",
    properties: {
      Title: "OJ SIMPSON /// PART 1 ////// 25",
      Release: "4/13/2016",
      URL: "https://truecrimegarage.com/home/blog/oj-simpson-part-1-25",
      Earliest_Date: "6/13/1994",
      Earliest_Year: "1994",
      Notes: "922 S Bundy Dr Los Angeles, CA 90049\n"
    },
    geometry: {
      coordinates: [-118.47026, 34.048049],
      type: "Point"
    },
    id: "0a0c42fd4538a2fde1e7ca29d4226016"
  },
  {
    type: "Feature",
    properties: {
      Title: "Morgan Nick ////// 361",
      Release: "12/31/2019",
      URL: "https://truecrimegarage.com/home/blog/morgan-nick-361",
      Earliest_Date: "6/9/1995",
      Earliest_Year: "1995",
      Notes:
        "Park location from https://chadard.com/2019/07/09/fsc-the-disappearance-of-morgan-nick-alma-arkansas-june-9-1995/"
    },
    geometry: {
      coordinates: [-94.223461, 35.476322],
      type: "Point"
    },
    id: "0a657bc6a6fc5581bdcf914f26a9ed60"
  },
  {
    type: "Feature",
    properties: {
      Title: "Vanishing Women ////// 39 ",
      Release: "7/13/2016",
      URL: "https://truecrimegarage.com/home/blog/vanishing-women-39",
      Earliest_Date: "5/3/2014",
      Earliest_Year: "2014",
      Notes: "General Chillicothe, Ohio area "
    },
    geometry: {
      coordinates: [-82.993451, 39.336632],
      type: "Point"
    },
    id: "0d31f9ef5adad6f5bde362bbc6440c45"
  },
  {
    type: "Feature",
    properties: {
      Title: "Sean McDuffy Jr /// 222 /// 223",
      Release: "7/11/2018",
      URL: "https://truecrimegarage.com/home/blog/sean-mcduffy-jr-222-223",
      Earliest_Date: "12/26/2016",
      Earliest_Year: "2016",
      Notes:
        "General Clay County area, unable to find location where the truck was found "
    },
    geometry: {
      coordinates: [-83.775785, 35.038576],
      type: "Point"
    },
    id: "0d7bb55977285485cc83c704e1ed3de1"
  },
  {
    type: "Feature",
    properties: {
      Title: "Room 309 /// 350 /// 351",
      Release: "11/12/2019",
      URL: "https://truecrimegarage.com/home/blog/room-309-350-351",
      Earliest_Date: "7/1/2003",
      Earliest_Year: "2003",
      Notes: "Hotel address 48 Albert St, Winnipeg, MB R3B 1E7, Canada"
    },
    geometry: {
      coordinates: [-97.142906, 49.896254],
      type: "Point"
    },
    id: "0defcc09b5a97c73e4dae8ee36a837e4"
  },
  {
    type: "Feature",
    properties: {
      Title: "Jacob Wetterling /// 70 & 71 ",
      Release: "1/4/2017",
      URL: "https://truecrimegarage.com/home/blog/jacob-wetterling-70-71",
      Earliest_Date: "10/22/1989",
      Earliest_Year: "1989",
      Notes: "General area of the abduction "
    },
    geometry: {
      coordinates: [-94.296155, 45.555483],
      type: "Point"
    },
    id: "0ec6ad50c2823ed1a348f3372eb5dac7"
  },
  {
    type: "Feature",
    properties: {
      Title: "Michael Francke /// 245 /// 246",
      Release: "10/9/2018",
      URL: "https://truecrimegarage.com/home/blog/michael-francke-245-246",
      Earliest_Date: "1/17/1989",
      Earliest_Year: "1989",
      Notes:
        "Oregon Department of Corrections 2575 Center St NE, Salem, OR 97301"
    },
    geometry: {
      coordinates: [-123.006692, 44.940632],
      type: "Point"
    },
    id: "0fe00db4ba8615258d4e9a91021dd33b"
  },
  {
    type: "Feature",
    properties: {
      Title: "Forces of Evil ////// 354",
      Release: "11/26/2019",
      URL: "https://truecrimegarage.com/home/blog/forces-of-evil-354",
      Earliest_Date: "9/1/1977",
      Earliest_Year: "1977",
      Notes: "General area of the GA downtown near Fort Benning"
    },
    geometry: {
      coordinates: [-84.956231, 32.387817],
      type: "Point"
    },
    id: "112b0c89038909ca1f95b76738087036"
  },
  {
    type: "Feature",
    properties: {
      Title: "Who Crucified the Pastor ////// 298",
      Release: "4/23/2019",
      URL: "https://truecrimegarage.com/home/blog/who-crucified-the-pastor-298",
      Earliest_Date: "8/23/2009",
      Earliest_Year: "2009",
      Notes:
        "Coordinates of the police station, which was a block from the church 201 N 1st St, Anadarko, OK 73005\n"
    },
    geometry: {
      coordinates: [-98.24375, 35.07722],
      type: "Point"
    },
    id: "12aeb7cba619e02108c84aa4c506f4db"
  },
  {
    type: "Feature",
    properties: {
      Title: "Jesse Ross /// 128 /// 129",
      Release: "8/7/2017",
      URL: "https://truecrimegarage.com/home/blog/jesse-ross-128-129",
      Earliest_Date: "11/21/2006",
      Earliest_Year: "2006",
      Notes: "Sheraton Grand Chicago\n301 E North Water St, Chicago, IL 60611"
    },
    geometry: {
      coordinates: [-87.621675, 41.889088],
      type: "Point"
    },
    id: "13e1824309d5d8797acf778c71cbc15a"
  },
  {
    type: "Feature",
    properties: {
      Title: "Aurora Theater Shooter ////// 60  ",
      Release: "11/9/2016",
      URL: "https://truecrimegarage.com/home/blog/aurora-theater-shooter-60",
      Earliest_Date: "7/20/2012",
      Earliest_Year: "2012",
      Notes:
        "Coordinates from https://tools.wmflabs.org/geohack/geohack.php?pagename=2012_Aurora,_Colorado_shooting&params=39.7059_N_104.8206_W_scale:50000_region:US_type:event"
    },
    geometry: {
      coordinates: [-104.8206, 39.7059],
      type: "Point"
    },
    id: "1433daecfcbcd55560773cffe9b37e84"
  },
  {
    type: "Feature",
    properties: {
      Title: "Brandon Billings /// 158 /// 159",
      Release: "11/14/2017",
      URL: "https://truecrimegarage.com/home/blog/brandon-billings-158-159",
      Earliest_Date: "10/6/2002",
      Earliest_Year: "2002",
      Notes: "Rock House Road"
    },
    geometry: {
      coordinates: [-80.71137, 37.050733],
      type: "Point"
    },
    id: "1478936e06e7cf73c16470550f39d59e"
  },
  {
    type: "Feature",
    properties: {
      Title: "Mitrice Richardson ////// 75",
      Release: "1/25/2017",
      URL: "https://truecrimegarage.com/home/blog/mitrice-richardson-75",
      Earliest_Date: "9/17/2009",
      Earliest_Year: "2009",
      Notes:
        "Lost Hills Sheriff Station, just in case the Bill Smith sighting wasn't her"
    },
    geometry: {
      coordinates: [-118.716424, 34.137323],
      type: "Point"
    },
    id: "14b608ab2f5cf20aa8eb777faeef39b0"
  },
  {
    type: "Feature",
    properties: {
      Title: "Luka Magnotta /// 122 /// 123",
      Release: "7/11/2017",
      URL: "https://truecrimegarage.com/home/blog/luka-magnotta-122-123",
      Earliest_Date: "5/24/2012",
      Earliest_Year: "2012",
      Notes: "5720 Decarie BlvdMontreal, QC H3X 2J4, Canada\n"
    },
    geometry: {
      coordinates: [-73.641, 45.4876],
      type: "Point"
    },
    id: "159293df1aed157849075f3ab2704e0f"
  },
  {
    type: "Feature",
    properties: {
      Title: "Burger Chef Murder//////02",
      Release: "11/25/2015",
      URL: "https://truecrimegarage.com/home/blog/burger-chef-murder-02",
      Earliest_Date: "11/17/1978",
      Earliest_Year: "1978",
      Notes: "5725 crawfordsville road speedway in"
    },
    geometry: {
      coordinates: [-86.265478, 39.798718],
      type: "Point"
    },
    id: "1659d582f5a6cb65e3758e4aab46b1b0"
  },
  {
    type: "Feature",
    properties: {
      Title: "West Memphis 3 /// Part 2 ////// 41",
      Release: "7/28/2016",
      URL: "https://truecrimegarage.com/home/blog/west-memphis-3-part-2-41",
      Earliest_Date: "5/5/1993",
      Earliest_Year: "1993",
      Notes: "Estimated area based on static maps"
    },
    geometry: {
      coordinates: [-90.171837, 35.161179],
      type: "Point"
    },
    id: "19b09bd6fa5c69cfe61102ceadd4f65a"
  },
  {
    type: "Feature",
    properties: {
      Title: "Aurora Hammer Slayer /// 175 & 176",
      Release: "1/17/2018",
      URL: "https://truecrimegarage.com/home/blog/aurora-hammer-slayer-175-176",
      Earliest_Date: "1/10/1984",
      Earliest_Year: "1984",
      Notes: "12610 W Bayaud Ave Lakewood, CO 80228"
    },
    geometry: {
      coordinates: [-105.143797, 39.713863],
      type: "Point"
    },
    id: "1a9d4e1fd8397ca339be8a2db1867c74"
  },
  {
    type: "Feature",
    properties: {
      Title: "Christopher Watts /// 269 /// 270",
      Release: "1/8/2019",
      URL: "https://truecrimegarage.com/home/blog/christopher-watts-269-270",
      Earliest_Date: "8/13/2018",
      Earliest_Year: "2018",
      Notes: " 2825 Saratoga Trail Frederick, CO"
    },
    geometry: {
      coordinates: [-105.002732, 40.090482],
      type: "Point"
    },
    id: "1c61e9c8e8f91af2ce44ce564c5946e4"
  },
  {
    type: "Feature",
    properties: {
      Title: "Tyler Davis /// 296 /// 297",
      Release: "4/17/2019",
      URL: "https://truecrimegarage.com/home/blog/tyler-davis-296-297",
      Earliest_Date: "2/23/2019",
      Earliest_Year: "2019",
      Notes: "Hilton hotel 3900 Chagrin Dr, Columbus, OH 43219"
    },
    geometry: {
      coordinates: [-82.91237, 40.04952],
      type: "Point"
    },
    id: "1cdee188ee656f4f865ba0b9ef8b7788"
  },
  {
    type: "Feature",
    properties: {
      Title: "Dorothy Jane Scott ////// 35 ",
      Release: "6/22/2016",
      URL: "https://truecrimegarage.com/home/blog/dorothy-jane-scott-35",
      Earliest_Date: "5/28/1980",
      Earliest_Year: "1980",
      Notes:
        "General area according to https://www.google.com/imgres?imgurl=http%3A%2F%2Fi.imgur.com%2F1EyI8q1.jpg&imgrefurl=https%3A%2F%2Fwww.reddit.com%2Fr%2FUnresolvedMysteries%2Fcomments%2F406vhz%2Fdorothy_jane_scott_the_creepiest_case_you_have%2F&tbnid=Z0Q3ACVGZzgTOM&vet=12ahUKEwiYs96l_57oAhVDGt8KHTERBzoQMygBegUIARDfAQ..i&docid=-Jl98LpiiXm3cM&w=833&h=647&q=Dorothy%20Jane%20Scott%20map&ved=2ahUKEwiYs96l_57oAhVDGt8KHTERBzoQMygBegUIARDfAQ"
    },
    geometry: {
      coordinates: [-117.915687, 33.816945],
      type: "Point"
    },
    id: "1ef9a8b817466453264b81138b37b537"
  },
  {
    type: "Feature",
    properties: {
      Title: "We're All Lunatics ////// Episodes 171 & 172",
      Release: "1/3/2018",
      URL:
        "https://truecrimegarage.com/home/blog/we-re-all-lunatics-episodes-171-172",
      Earliest_Date: "4/16/2016",
      Earliest_Year: "2016",
      Notes: "2076 State Hwy J Bourbon, MO 65441"
    },
    geometry: {
      coordinates: [-91.267042, 38.178605],
      type: "Point"
    },
    id: "1fa59057893fa12f6c5cccdec1a7067e"
  },
  {
    type: "Feature",
    properties: {
      Title: "Jodi Huisentruit /// 208 /// 209",
      Release: "5/15/2018",
      URL: "https://truecrimegarage.com/home/blog/jodi-huisentruit-208-209",
      Earliest_Date: "6/27/1995",
      Earliest_Year: "1995",
      Notes: "Key apartments\n"
    },
    geometry: {
      coordinates: [-93.184129, 43.15646],
      type: "Point"
    },
    id: "202b268606991c066893e3b1e5467790"
  },
  {
    type: "Feature",
    properties: {
      Title: "Lynne Harper /// 142 /// 143",
      Release: "9/20/2017",
      URL: "https://truecrimegarage.com/home/blog/lynne-harper-142-143",
      Earliest_Date: "6/9/1959",
      Earliest_Year: "1959",
      Notes:
        "RCAF Station Clinton, an air force base that was located south of Clinton, Ontario\nCoordinates from https://tools.wmflabs.org/geohack/geohack.php?pagename=CFB_Clinton&params=43.583_N_81.523_W_scale:30000_region:CA"
    },
    geometry: {
      coordinates: [-81.523, 43.583],
      type: "Point"
    },
    id: "209b4dde8f5745b058ace7e50070dbd3"
  },
  {
    type: "Feature",
    properties: {
      Title: "Candace Hiltz /// 140 /// 141",
      Release: "9/12/2017",
      URL: "https://truecrimegarage.com/home/blog/candace-hiltz-140-141",
      Earliest_Date: "8/15/2006",
      Earliest_Year: "2006",
      Notes: "Copper Gulch area, unable to found house address"
    },
    geometry: {
      coordinates: [-105.488521, 38.309554],
      type: "Point"
    },
    id: "26b28173aab2c2ba5af77bd1a19e543c"
  },
  {
    type: "Feature",
    properties: {
      Title: "Photo 509 /// 256 /// 257",
      Release: "11/13/2018",
      URL: "https://truecrimegarage.com/home/blog/photo-508-256-257",
      Earliest_Date: "4/2/2014",
      Earliest_Year: "2014",
      Notes: "Sendero El Pianista, Los Naranjos, Panama, hiking trail "
    },
    geometry: {
      coordinates: [-82.430619, 8.809893],
      type: "Point"
    },
    id: "2815a804501abe6a96292aa8b8a60ae0"
  },
  {
    type: "Feature",
    properties: {
      Title: "Melanie Goodwin ////// 48 ",
      Release: "8/31/2016",
      URL: "https://truecrimegarage.com/home/blog/melanie-goodwin-48",
      Earliest_Date: "9/25/2007",
      Earliest_Year: "2007",
      Notes: "3200 Keller Springs Rd\nCarrollton, TX 75006"
    },
    geometry: {
      coordinates: [-96.850013, 32.96873],
      type: "Point"
    },
    id: "28b804cee37e7197ccd0e9193d318eab"
  },
  {
    type: "Feature",
    properties: {
      Title: "Lindsay Buziak /// 324 /// 325",
      Release: "8/6/2019",
      URL: "https://truecrimegarage.com/home/blog/lindsay-buziak-324-325",
      Earliest_Date: "2/2/2008",
      Earliest_Year: "2008",
      Notes: "1702 De Sousa Pl\nVictoria, BC V8N 3L3\nCanada"
    },
    geometry: {
      coordinates: [-123.326369, 48.482975],
      type: "Point"
    },
    id: "28bcc958bc0f82eecc6c7532953211b9"
  },
  {
    type: "Feature",
    properties: {
      Title: "The Mad Bomber /// 213 /// 214 ",
      Release: "6/5/2018",
      URL: "https://truecrimegarage.com/home/blog/the-mad-bomber-213-214",
      Earliest_Date: "11/16/1940",
      Earliest_Year: "1940",
      Notes: "4 Irving Pl\nNew York, NY 10003"
    },
    geometry: {
      coordinates: [-73.988437, 40.734103],
      type: "Point"
    },
    id: "2915a2cad2983f80efdffaf64f2f5b16"
  },
  {
    type: "Feature",
    properties: {
      Title: "Jessica Johnson /// 282 /// 283",
      Release: "2/27/2019",
      URL: "https://truecrimegarage.com/home/blog/jessica-johnson-282-283",
      Earliest_Date: "6/2/2017",
      Earliest_Year: "2017",
      Notes: "7520 Angel DrHorn Lake, MS 38637\n"
    },
    geometry: {
      coordinates: [-90.067979, 34.97013],
      type: "Point"
    },
    id: "29e40f53f3ba57b9c4591fbdbccf2bd7"
  },
  {
    type: "Feature",
    properties: {
      Title: "Serial Killer /// Scott Lee Kimball /// 382 /// 383",
      Release: "3/17/2020",
      URL:
        "https://truecrimegarage.com/home/blog/serial-killer-scott-lee-kimball-382-383",
      Earliest_Date: "9/14/1983",
      Earliest_Year: "1983",
      Notes: "6 W 83rd Pl, Thornton, CO 80221"
    },
    geometry: {
      coordinates: [-104.98686, 39.84743],
      type: "Point"
    },
    id: "2bb19b472cc12090871960e30a52a196"
  },
  {
    type: "Feature",
    properties: {
      Title: "Danny Hohenstein /// 286 /// 287",
      Release: "3/13/2019",
      URL: "https://truecrimegarage.com/home/blog/danny-hohenstein-286-287",
      Earliest_Date: "12/1/1992",
      Earliest_Year: "1992",
      Notes: "General Paradise Pines area, address seems unavailable "
    },
    geometry: {
      coordinates: [-121.613594, 39.830159],
      type: "Point"
    },
    id: "2bee205b587fe66f215f08841b371f2a"
  },
  {
    type: "Feature",
    properties: {
      Title: "Brandon Lawson 911 Tape /// Episodes 85 /// 86 ",
      Release: "2/28/2017",
      URL:
        "https://truecrimegarage.com/home/blog/brandon-lawson-911-tape-episodes-85-86",
      Earliest_Date: "8/5/2013",
      Earliest_Year: "2013",
      Notes: "Truck location "
    },
    geometry: {
      coordinates: [-100.292183, 31.830607],
      type: "Point"
    },
    id: "2f560e29babf8fa63a807f35619c2dbd"
  },
  {
    type: "Feature",
    properties: {
      Title: "The Backpacker Murders /// 330 /// 331",
      Release: "8/27/2019",
      URL:
        "https://truecrimegarage.com/home/blog/the-backpacker-murders-330-331",
      Earliest_Date: "11/1/1989",
      Earliest_Year: "1989",
      Notes:
        'The date Clarke and Walters went missing is listed as "late 1989", so the Nov 1 is not 100% accurate\nBelango State Forest and general area of David Auchterlonie '
    },
    geometry: {
      coordinates: [150.254251, -34.524033],
      type: "Point"
    },
    id: "328f6fd3615ed50c994c2cedffb4f6aa"
  },
  {
    type: "Feature",
    properties: {
      Title: "500Lb. Serial Killer /// Episodes 173 & 174",
      Release: "1/9/2018",
      URL:
        "https://truecrimegarage.com/home/blog/500lb-serial-killer-episodes-173-174",
      Earliest_Date: "7/1/1994",
      Earliest_Year: "1994",
      Notes:
        "Date is a range, reports only say July 1994\n\n3200 James St, Baltimore, MD 21230"
    },
    geometry: {
      coordinates: [-76.665709, 39.259364],
      type: "Point"
    },
    id: "3345e8c031a28f4b195c6a2daef89b86"
  },
  {
    type: "Feature",
    properties: {
      Title: "Mackenzie Lueck ////// 318",
      Release: "7/16/2019",
      URL: "https://truecrimegarage.com/home/blog/mackenzie-lueck-318",
      Earliest_Date: "6/17/2019",
      Earliest_Year: "2019",
      Notes: "Hatch Park 50 W Center St, North Salt Lake, UT 84054"
    },
    geometry: {
      coordinates: [-111.912529, 40.84236],
      type: "Point"
    },
    id: "33687ff86b3e09bb556ea81ac905861a"
  },
  {
    type: "Feature",
    properties: {
      Title: "Cameron Todd Willingham /// 352 /// 353",
      Release: "11/19/2019",
      URL:
        "https://truecrimegarage.com/home/blog/cameron-todd-willingham-352-353",
      Earliest_Date: "12/23/1991",
      Earliest_Year: "1991",
      Notes: "Home address 1213 West 11th Street, corsicana, tx"
    },
    geometry: {
      coordinates: [-96.472838, 32.083126],
      type: "Point"
    },
    id: "3397da2f14d45b65fe18c1d7dbe4c93c"
  },
  {
    type: "Feature",
    properties: {
      Title: "The Invisible Man ////// 301",
      Release: "5/7/2019",
      URL: "https://truecrimegarage.com/home/blog/the-invisible-man-301",
      Earliest_Date: "11/26/1992",
      Earliest_Year: "1992",
      Notes: "Sheridan, Indiana. Their address seems elusive as he is \n"
    },
    geometry: {
      coordinates: [-86.237814, 40.133388],
      type: "Point"
    },
    id: "33eff7f0558c1b6ae17fa20bea3caaae"
  },
  {
    type: "Feature",
    properties: {
      Title: "ADAM WALSH ////// 11 ",
      Release: "1/20/2016",
      URL: "https://truecrimegarage.com/home/blog/adam-walsh-11",
      Earliest_Date: "7/27/1981",
      Earliest_Year: "1981",
      Notes: "Hollywood Way Hollywood, FL 33021\n"
    },
    geometry: {
      coordinates: [-80.175625, 26.01167],
      type: "Point"
    },
    id: "36b93a729dde1feb5ac45f94f3748e14"
  },
  {
    type: "Feature",
    properties: {
      Title: "Delphi Murders Revisited /// 320 /// 321",
      Release: "7/23/2019",
      URL:
        "https://truecrimegarage.com/home/blog/delphi-murders-revisited-320-321",
      Earliest_Date: "2/13/2017",
      Earliest_Year: "2017",
      Notes:
        "Coordinates according to https://tools.wmflabs.org/geohack/geohack.php?pagename=Murders_of_Abigail_Williams_and_Liberty_German&params=40_35_20.7_N_86_38_34.2_W_type:landmark"
    },
    geometry: {
      coordinates: [-86.642833, 40.589083],
      type: "Point"
    },
    id: "3781b39a9b2f12db772ea2ffbc6d958d"
  },
  {
    type: "Feature",
    properties: {
      Title: "Kevin Cooper /// 219 /// 220",
      Release: "6/26/2018",
      URL: "https://truecrimegarage.com/home/blog/kevin-cooper-219-220",
      Earliest_Date: "6/5/1983",
      Earliest_Year: "1983",
      Notes: "Old English Rd, unable to find house number "
    },
    geometry: {
      coordinates: [-117.737147, 33.996059],
      type: "Point"
    },
    id: "382873c7809372ce5c1c35537cd2211a"
  },
  {
    type: "Feature",
    properties: {
      Title: "Maura Murray ////// 29 ",
      Release: "5/15/2016",
      URL: "https://truecrimegarage.com/home/blog/maura-murray-29",
      Earliest_Date: "2/9/2004",
      Earliest_Year: "2004",
      Notes:
        "Coordinates from https://tools.wmflabs.org/geohack/geohack.php?pagename=Disappearance_of_Maura_Murray&params=44.119272_N_71.936278_W_"
    },
    geometry: {
      coordinates: [-71.936278, 44.119272],
      type: "Point"
    },
    id: "3cce64dcadd4bb4e7d8559aaccc1ca7e"
  },
  {
    type: "Feature",
    properties: {
      Title: "Jodi Arias ////// 23 ",
      Release: "3/30/2016",
      URL: "https://truecrimegarage.com/home/blog/jodi-arias-23",
      Earliest_Date: "6/9/2008",
      Earliest_Year: "2008",
      Notes: "11428 E Queensborough Ave\nMesa, AZ 85212"
    },
    geometry: {
      coordinates: [-111.587183, 33.347118],
      type: "Point"
    },
    id: "3e86d2daf19b5560a6896e6fd0920715"
  },
  {
    type: "Feature",
    properties: {
      Title: "Mia Zapata /// Episodes 135 /// 136 ",
      Release: "8/22/2017",
      URL: "https://truecrimegarage.com/home/blog/mia-zapata-episodes-135-136",
      Earliest_Date: "7/7/1993",
      Earliest_Year: "1993",
      Notes: "100 block 24th Ave SSeattle, WA 98144\n"
    },
    geometry: {
      coordinates: [-122.303087, 47.601516],
      type: "Point"
    },
    id: "3eb7122b21c5db03b26802b0b8645255"
  },
  {
    type: "Feature",
    properties: {
      Title: "Texas Seven ////// 13",
      Release: "2/3/2016",
      URL: "https://truecrimegarage.com/home/blog/texas-seven-13",
      Earliest_Date: "12/13/2000",
      Earliest_Year: "2000",
      Notes:
        "John B. Connally Unit, coordinates from https://tools.wmflabs.org/geohack/geohack.php?pagename=John_B._Connally_Unit&params=28_46_30_N_97_50_04_W_scale:10000"
    },
    geometry: {
      coordinates: [-97.834444, 28.775],
      type: "Point"
    },
    id: "3ecb00e443e846715dc8184badb98dba"
  },
  {
    type: "Feature",
    properties: {
      Title: "Lisa Stebic /// 271 /// 272",
      Release: "1/15/2019",
      URL: "https://truecrimegarage.com/home/blog/lisa-stebic-271-272",
      Earliest_Date: "4/30/2007",
      Earliest_Year: "2007",
      Notes: "13244 Red Star DrPlainfield, IL 60585\n"
    },
    geometry: {
      coordinates: [-88.243933, 41.640586],
      type: "Point"
    },
    id: "412bc939b731ceff0e6af771b70c5d42"
  },
  {
    type: "Feature",
    properties: {
      Title: "Edmund Kemper /// 261 /// 262 ",
      Release: "12/4/2018",
      URL: "https://truecrimegarage.com/home/blog/edmund-kemper-261-262",
      Earliest_Date: "8/27/1964",
      Earliest_Year: "1964",
      Notes:
        "General North Folk, CA area in absence of an address for the grandparents\n"
    },
    geometry: {
      coordinates: [-119.514565, 37.224464],
      type: "Point"
    },
    id: "416f97af7330f833e6fc531ab4ee13c9"
  },
  {
    type: "Feature",
    properties: {
      Title: "Amy Mihaljevic - Suspects /// 345 /// 346",
      Release: "10/22/2019",
      URL:
        "https://truecrimegarage.com/home/blog/amy-mihaljevic-suspects-345-346",
      Earliest_Date: "10/27/1989",
      Earliest_Year: "1989",
      Notes: "Bay Square Shopping Center 27239 Wolf Rd, Bay Village, OH 44140"
    },
    geometry: {
      coordinates: [-81.921864, 41.484332],
      type: "Point"
    },
    id: "41ad872d3371b41c800fe531bbd757a6"
  },
  {
    type: "Feature",
    properties: {
      Title: "Arthur Shawcross /// The Genesee River Killer ",
      Release: "4/10/2018",
      URL:
        "https://truecrimegarage.com/home/blog/arthur-shawcross-the-genesee-river-killer",
      Earliest_Date: "5/7/1972",
      Earliest_Year: "1972",
      Notes:
        "General watertown and black river area, details are hard to track down "
    },
    geometry: {
      coordinates: [-75.926625, 43.965401],
      type: "Point"
    },
    id: "4243453424d548192ba55de8e6504ea2"
  },
  {
    type: "Feature",
    properties: {
      Title: "Missy Bevers /// 138 /// 139",
      Release: "9/5/2017",
      URL: "https://truecrimegarage.com/home/blog/missy-bevers-138-139",
      Earliest_Date: "4/18/2016",
      Earliest_Year: "2016",
      Notes: "Creekside Church of Christ in Midlothian"
    },
    geometry: {
      coordinates: [-96.924053, 32.446663],
      type: "Point"
    },
    id: "438609bf3a080ed2eac8334e9d62d892"
  },
  {
    type: "Feature",
    properties: {
      Title: "The McCormick Code //////",
      Release: "2/27/2018",
      URL: "https://truecrimegarage.com/home/blog/the-mccormick-code",
      Earliest_Date: "6/30/1999",
      Earliest_Year: "1999",
      Notes: "Stone Rd in West Alton, possible corn field "
    },
    geometry: {
      coordinates: [-90.211398, 38.870315],
      type: "Point"
    },
    id: "4612f1746c5e78941359d6693150eeeb"
  },
  {
    type: "Feature",
    properties: {
      Title: "Bruce McArthur /// Toronto's Missing Men ",
      Release: "3/13/2018",
      URL:
        "https://truecrimegarage.com/home/blog/bruce-mcarthur-toronto-s-missing-men",
      Earliest_Date: "10/31/2011",
      Earliest_Year: "2001",
      Notes: "95 Thorncliffe Park DrEast York, ON M4H 1L7, Canada"
    },
    geometry: {
      coordinates: [-79.34049, 43.70779],
      type: "Point"
    },
    id: "4766cc60740904f5c732fb6a6b1ea48d"
  },
  {
    type: "Feature",
    properties: {
      Title: "THE ALPHABET MURDERS ////// 12",
      Release: "1/27/2016",
      URL: "https://truecrimegarage.com/home/blog/the-alphabet-murders-12",
      Earliest_Date: "11/16/1971",
      Earliest_Year: "1971",
      Notes: "W Main St Rochester, NY"
    },
    geometry: {
      coordinates: [-77.627626, 43.152734],
      type: "Point"
    },
    id: "47b08a01d3593f0f1ea7604045fe8bfa"
  },
  {
    type: "Feature",
    properties: {
      Title: "The Disappearance of Beverly Potts ////// 67",
      Release: "12/14/2016",
      URL:
        "https://truecrimegarage.com/home/blog/the-disappearance-of-beverly-potts-67",
      Earliest_Date: "8/24/1951",
      Earliest_Year: "1951",
      Notes: "W 117th St & Linnet Ave\nCleveland, OH 44111"
    },
    geometry: {
      coordinates: [-81.771154, 41.456374],
      type: "Point"
    },
    id: "49f231cff68fddcd614455674caf6358"
  },
  {
    type: "Feature",
    properties: {
      Title: "Christie Mullins ////// 34 ",
      Release: "6/15/2016",
      URL: "https://truecrimegarage.com/home/blog/christie-mullins-34",
      Earliest_Date: "8/23/1975",
      Earliest_Year: "1975",
      Notes: "Graceland Shopping Center\n182 Graceland Blvd, Columbus, OH 43214"
    },
    geometry: {
      coordinates: [-83.02433, 40.06637],
      type: "Point"
    },
    id: "4b7880ca7f5a2448bef82418b000baea"
  },
  {
    type: "Feature",
    properties: {
      Title: "SON OF SAM ////// 21",
      Release: "3/16/2016",
      URL: "https://truecrimegarage.com/home/blog/son-of-sam-21",
      Earliest_Date: "7/29/1976",
      Earliest_Year: "1976",
      Notes: "2860 buhre ave bronx ny 10461"
    },
    geometry: {
      coordinates: [-73.83383, 40.847068],
      type: "Point"
    },
    id: "4b9de7855eb7527226d51e4d4f6844ce"
  },
  {
    type: "Feature",
    properties: {
      Title: "Tony Muncy ////// 36 /// Now Available in Itunes Store ",
      Release: "6/28/2016",
      URL:
        "https://truecrimegarage.com/home/blog/tony-muncy-36-now-available-in-itunes-store",
      Earliest_Date: "10/15/1983",
      Earliest_Year: "1983",
      Notes: "5524 E. Livingston Avenue, Columbus, OH 43232\n"
    },
    geometry: {
      coordinates: [-82.850142, 39.943708],
      type: "Point"
    },
    id: "4c3d97f9193592499f1fd73da4864c3f"
  },
  {
    type: "Feature",
    properties: {
      Title: "Joshua Guimond ////// 47",
      Release: "8/24/2016",
      URL: "https://truecrimegarage.com/home/blog/joshua-guimond-47",
      Earliest_Date: "11/9/2002",
      Earliest_Year: "2002",
      Notes: "Metten Court\n2580 Fruit Farm Rd\nSt Joseph, MN 56374"
    },
    geometry: {
      coordinates: [-94.399733, 45.585647],
      type: "Point"
    },
    id: "4d6921ca7fd9b381d8f86e6be53c351b"
  },
  {
    type: "Feature",
    properties: {
      Title: "Mollie Tibbetts /// 234 /// 235",
      Release: "8/21/2018",
      URL: "https://truecrimegarage.com/home/blog/mollie-tibbetts-233-234",
      Earliest_Date: "7/18/2018",
      Earliest_Year: "2018",
      Notes: "1900 block of 385th Avenue"
    },
    geometry: {
      coordinates: [-92.41587, 41.738308],
      type: "Point"
    },
    id: "4e1f5afa53983da3f21f1cc0a58adc9a"
  },
  {
    type: "Feature",
    properties: {
      Title: "Kenneka Jenkins /// 144 /// 145",
      Release: "9/26/2017",
      URL: "https://truecrimegarage.com/home/blog/kenneka-jenkins-144-145",
      Earliest_Date: "9/10/2017",
      Earliest_Year: "2017",
      Notes:
        "Crowne Plaza Chicago Ohare Hotel & Conf Ctr\n5440 N River Rd, Rosemont, IL 60018"
    },
    geometry: {
      coordinates: [-87.864199, 41.977643],
      type: "Point"
    },
    id: "4e5b2cc0171e2c356f44db7c7e4addc9"
  },
  {
    type: "Feature",
    properties: {
      Title: "Brian Shaffer: Revisited /// 290 /// 291",
      Release: "3/26/2019",
      URL:
        "https://truecrimegarage.com/home/blog/brian-shaffer-revisited-part-1-290",
      Earliest_Date: "4/1/2006",
      Earliest_Year: "2006",
      Notes:
        "1546 N High St, Columbus, OH 43201, Ugly Tuna Saloon near Ohio State University"
    },
    geometry: {
      coordinates: [-83.00658, 39.9938],
      type: "Point"
    },
    id: "513e4d40ac0c2c2fedb48498926c9cfc"
  },
  {
    type: "Feature",
    properties: {
      Title: "Diane Schuler ////// 69 ",
      Release: "1/1/2017",
      URL: "https://truecrimegarage.com/home/blog/diane-schuler-69",
      Earliest_Date: "7/26/2009",
      Earliest_Year: "2009",
      Notes:
        "Coordinates from https://tools.wmflabs.org/geohack/geohack.php?pagename=2009_Taconic_State_Parkway_crash&params=41.119729_N_73.807051_W_type:event"
    },
    geometry: {
      coordinates: [-73.807051, 41.119729],
      type: "Point"
    },
    id: "51d62a8325674aa3680ae9bcd1c8f5e6"
  },
  {
    type: "Feature",
    properties: {
      Title: "Jessica Chambers ////// 68 ",
      Release: "12/24/2016",
      URL: "https://truecrimegarage.com/home/blog/jessica-chambers-68",
      Earliest_Date: "12/6/2014",
      Earliest_Year: "2014",
      Notes: "Herron Road, seems that the tree farm is renamed or changed"
    },
    geometry: {
      coordinates: [-89.954402, 34.236548],
      type: "Point"
    },
    id: "52842fa9937ec3d410fae220f521acbb"
  },
  {
    type: "Feature",
    properties: {
      Title: "Elliott Smith ////// 307",
      Release: "5/28/2019",
      URL: "https://truecrimegarage.com/home/blog/elliott-smith-307",
      Earliest_Date: "10/21/2003",
      Earliest_Year: "2003",
      Notes: "1857 Lamoyne St.  Echo Park, California"
    },
    geometry: {
      coordinates: [-118.256771, 34.08631],
      type: "Point"
    },
    id: "54a752d04ae5efe4b44a048a40718d54"
  },
  {
    type: "Feature",
    properties: {
      Title: "Kendrick Johnson /// 195 /// 196 ",
      Release: "3/27/2018",
      URL: "https://truecrimegarage.com/home/blog/kendrick-johnson-195-196",
      Earliest_Date: "1/11/2013",
      Earliest_Year: "2013",
      Notes: "1606 Norman Dr, Valdosta, GA 31601"
    },
    geometry: {
      coordinates: [-83.326054, 30.83847],
      type: "Point"
    },
    id: "570f7355e36dda088a55c4230e9555f9"
  },
  {
    type: "Feature",
    properties: {
      Title: "Toni Lee Sharpless /// 326 /// 327",
      Release: "8/13/2019",
      URL: "https://truecrimegarage.com/home/blog/toni-lee-sharpless-326-327",
      Earliest_Date: "8/23/2009",
      Earliest_Year: "2009",
      Notes: "Hollow Rd, Gladwyne PA\n"
    },
    geometry: {
      coordinates: [-75.258242, 40.035474],
      type: "Point"
    },
    id: "571710fd796932cb0099b67af0603609"
  },
  {
    type: "Feature",
    properties: {
      Title: "Disappearance of William Tyrrell /// 202 /// 203",
      Release: "4/24/2018",
      URL:
        "https://truecrimegarage.com/home/blog/disappearance-of-william-tyrrell-202-203",
      Earliest_Date: "9/12/2014",
      Earliest_Year: "2014",
      Notes: "48 Benaroon DrKendall NSW 2439, Australia\n"
    },
    geometry: {
      coordinates: [152.694442, -31.640626],
      type: "Point"
    },
    id: "58ace27ad9c4f8cddc179e6543586a92"
  },
  {
    type: "Feature",
    properties: {
      Title: "Billy Smolinski /// 230 /// 231",
      Release: "8/8/2018",
      URL: "https://truecrimegarage.com/home/blog/billy-smolinski-230-231",
      Earliest_Date: "8/24/2004",
      Earliest_Year: "2004",
      Notes: "130 Holly Street in Waterbury, Connecticut"
    },
    geometry: {
      coordinates: [-73.030355, 41.518312],
      type: "Point"
    },
    id: "59b9b83e26944a76eb3f149e83e959af"
  },
  {
    type: "Feature",
    properties: {
      Title: "Missing Welch Girls /// 105 &106 ",
      Release: "5/16/2017",
      URL: "https://truecrimegarage.com/home/blog/missing-welch-girls-105-106",
      Earliest_Date: "12/29/1999",
      Earliest_Year: "1999",
      Notes:
        "412 S College St Picher, OK 74360\nWhere the girls were held, not the fire "
    },
    geometry: {
      coordinates: [-94.842139, 36.982175],
      type: "Point"
    },
    id: "5b44627b2636a5906f9405b3417e1faa"
  },
  {
    type: "Feature",
    properties: {
      Title: "Black Dahlia Part 1 & 2 ////// Episodes 44 & 45",
      Release: "8/16/2016",
      URL:
        "https://truecrimegarage.com/home/blog/black-dahlia-part-1-2-episodes-44-45",
      Earliest_Date: "1/14/1947",
      Earliest_Year: "1947",
      Notes:
        "Date could be 1/14/1947 or 1/15/1947\nCoordinates from https://tools.wmflabs.org/geohack/geohack.php?pagename=Black_Dahlia&params=37_50_07_N_122_14_13_W_"
    },
    geometry: {
      coordinates: [-122.236944, 37.835278],
      type: "Point"
    },
    id: "5c19d103bbe3c8e26a79ade72e54a35d"
  },
  {
    type: "Feature",
    properties: {
      Title: "Annie McCarrick /// 380 /// 381",
      Release: "3/10/2020",
      URL: "https://truecrimegarage.com/home/blog/annie-mccarrick-380-381",
      Earliest_Date: "3/26/1993",
      Earliest_Year: "1993",
      Notes: "County of her last known sighting"
    },
    geometry: {
      coordinates: [-6.219167, 53.221667],
      type: "Point"
    },
    id: "5cdef75c123b54329bc87a37cfbaca44"
  },
  {
    type: "Feature",
    properties: {
      Title: "The Oakland County Child Killer /// 232 /// 233 ",
      Release: "8/14/2018",
      URL:
        "https://truecrimegarage.com/home/blog/the-oakland-county-child-killer-232-233",
      Earliest_Date: "2/15/1976",
      Earliest_Year: "1976",
      Notes: "9 mile and Livernois, the general area of the American Legion"
    },
    geometry: {
      coordinates: [-83.143519, 42.460413],
      type: "Point"
    },
    id: "5cefe71902a3a5b618e5894527997924"
  },
  {
    type: "Feature",
    properties: {
      Title: "National Forest Serial Killer /// Part 1&2 /// Episodes 77 // 78",
      Release: "2/1/2017",
      URL:
        "https://truecrimegarage.com/home/blog/national-forest-serial-killer-part-1-2-episodes-77-78",
      Earliest_Date: "12/7/2005",
      Earliest_Year: "2005",
      Notes:
        "General area of River street, as it's known that Rossana Miliani rented a unit at Ye Olde Mini Storage on River Street"
    },
    geometry: {
      coordinates: [-83.447666, 35.427313],
      type: "Point"
    },
    id: "5d127b285ccb03c82e08dda06e6000eb"
  },
  {
    type: "Feature",
    properties: {
      Title: "The Murder Gene /// 278 /// 279",
      Release: "2/12/2019",
      URL: "https://truecrimegarage.com/home/blog/the-murder-gene-part-1-278",
      Earliest_Date: "1/9/2002",
      Earliest_Year: "2002",
      Notes:
        "Newell Creek Village apartments 14155 Beavercreek Rd\nOregon City, OR 97045"
    },
    geometry: {
      coordinates: [-122.579633, 45.334655],
      type: "Point"
    },
    id: "5e3bcade8ccbdbd0ac87ea380809458e"
  },
  {
    type: "Feature",
    properties: {
      Title: "Lauren Spierer /// Episodes 91 /// 92",
      Release: "3/23/2017",
      URL:
        "https://truecrimegarage.com/home/blog/lauren-spierer-episodes-91-92",
      Earliest_Date: "6/3/2011",
      Earliest_Year: "2011",
      Notes: "455 N College Ave Bloomington, IN 47404\nNow The Avenue on Collge"
    },
    geometry: {
      coordinates: [-86.537412, 39.17001],
      type: "Point"
    },
    id: "5f69cd58faff8e2f563bc1a8f69663e5"
  },
  {
    type: "Feature",
    properties: {
      Title: "Boys On The Tracks /// Part 1 of 4 /// 93 ",
      Release: "3/28/2017",
      URL:
        "https://truecrimegarage.com/home/blog/boys-on-the-tracks-part-1-of-4-93",
      Earliest_Date: "8/23/1987",
      Earliest_Year: "1987",
      Notes: "General area of tracks near Bryant, arkansas "
    },
    geometry: {
      coordinates: [-92.508446, 34.589531],
      type: "Point"
    },
    id: "607f4c7b1010d47a6a2ce4d25e1a2727"
  },
  {
    type: "Feature",
    properties: {
      Title: "Insanesville ////// 268 ",
      Release: "1/1/2019",
      URL: "https://truecrimegarage.com/home/blog/insanesville-268",
      Earliest_Date: "10/18/2011",
      Earliest_Year: "2011",
      Notes:
        "Coordinates according to https://tools.wmflabs.org/geohack/geohack.php?pagename=2011_Zanesville,_Ohio_animal_escape&params=39.9466772_N_82.0625522_W_type:landmark_scale:5000"
    },
    geometry: {
      coordinates: [-82.062552, 39.946677],
      type: "Point"
    },
    id: "632e30ff64b8a855316f1c0772ead784"
  },
  {
    type: "Feature",
    properties: {
      Title: "The Cheshire Murders /// 154 /// 155",
      Release: "11/1/2017",
      URL: "https://truecrimegarage.com/home/blog/the-cheshire-murders-154-155",
      Earliest_Date: "7/23/2007",
      Earliest_Year: "2007",
      Notes: "300 Sorghum Mill Drive in Cheshire, CT"
    },
    geometry: {
      coordinates: [-72.931622, 41.494138],
      type: "Point"
    },
    id: "6372b84517737ada5ab1a653fbff0a75"
  },
  {
    type: "Feature",
    properties: {
      Title: "Jennifer Dulos /// 378 /// 379 ",
      Release: "3/3/2020",
      URL: "https://truecrimegarage.com/home/blog/jennifer-dulos-378-379",
      Earliest_Date: "5/24/2019",
      Earliest_Year: "2019",
      Notes: "Home address: \n71 Welles Ln, New Canaan, CT 06840"
    },
    geometry: {
      coordinates: [-73.987813, 40.72162],
      type: "Point"
    },
    id: "67ee118e18c9a440a72913f039baaae6"
  },
  {
    type: "Feature",
    properties: {
      Title: "Kim Wall /// 239 /// 240 ",
      Release: "9/11/2018",
      URL: "https://truecrimegarage.com/home/blog/kim-wall-239-240",
      Earliest_Date: "8/10/2017",
      Earliest_Year: "2017",
      Notes:
        "Koge Bay https://tools.wmflabs.org/geohack/geohack.php?pagename=K%C3%B8ge_Bugt&params=55_30_N_12_20_E_region:DK_type:waterbody_source:GNS-enwiki"
    },
    geometry: {
      coordinates: [12.333333, 55.5],
      type: "Point"
    },
    id: "6902a25030ea3ed5d60ff6294b76c6d9"
  },
  {
    type: "Feature",
    properties: {
      Title: "This American Doctor /// 288 /// 289",
      Release: "3/19/2019",
      URL: "https://truecrimegarage.com/home/blog/this-american-doctor",
      Earliest_Date: "6/28/2004",
      Earliest_Year: "2004",
      Notes:
        "Broughton Hospital where Dr. Gilmer picked up his father 1000 S Sterling St, Morganton, NC 28655\n"
    },
    geometry: {
      coordinates: [-81.678535, 35.732824],
      type: "Point"
    },
    id: "6a241649f09920a20f078b8f530db0cd"
  },
  {
    type: "Feature",
    properties: {
      Title: "The Chi Omega Killings ////// 65",
      Release: "12/5/2016",
      URL: "https://truecrimegarage.com/home/blog/the-chi-omega-killings-65",
      Earliest_Date: "1/15/1978",
      Earliest_Year: "1978",
      Notes: "Chi Omega house"
    },
    geometry: {
      coordinates: [-84.295526, 30.439351],
      type: "Point"
    },
    id: "6b18f207d36dff97dc57ef4f36dfae5a"
  },
  {
    type: "Feature",
    properties: {
      Title: "D'Wan Sims ////// 160",
      Release: "11/21/2017",
      URL: "https://truecrimegarage.com/home/blog/d-wan-sims-160",
      Earliest_Date: "12/11/1994",
      Earliest_Year: "1994",
      Notes: "11320 Middlebelt Rd, Livonia, MI 48150"
    },
    geometry: {
      coordinates: [-83.338025, 42.36737],
      type: "Point"
    },
    id: "6b980bc5a8e7e403a53b484d4f32d8eb"
  },
  {
    type: "Feature",
    properties: {
      Title: "James Dean Worley ////// 51 ",
      Release: "9/20/2016",
      URL: "https://truecrimegarage.com/home/blog/james-dean-worley-51",
      Earliest_Date: "7/19/2016",
      Earliest_Year: "2016",
      Notes: "10627 Co Rd 6 Delta, OH 43515\n"
    },
    geometry: {
      coordinates: [-83.976408, 41.627106],
      type: "Point"
    },
    id: "6c332b9ac82347022a31b0f721e55eb3"
  },
  {
    type: "Feature",
    properties: {
      Title: "Lords of Bakersfield /// 328 /// 329",
      Release: "8/20/2019",
      URL: "https://truecrimegarage.com/home/blog/lords-of-bakersfield-328-329",
      Earliest_Date: "1/4/1978",
      Earliest_Year: "1978",
      Notes: "Possible home of Tommy Tarver 2600 Beech St Bakersfield, CA 93301"
    },
    geometry: {
      coordinates: [-119.031103, 35.386776],
      type: "Point"
    },
    id: "6cdcc2dbcf23b546e11e2798c4af1bbd"
  },
  {
    type: "Feature",
    properties: {
      Title: "LONG ISLAND SERIAL KILLER//////04",
      Release: "12/7/2015",
      URL: "https://truecrimegarage.com/home/blog/long-island-serial-killer-04",
      Earliest_Date: "5/1/2010",
      Earliest_Year: "2010",
      Notes:
        "Shannan Gilbert's last known location\n\nThe dates and times for this one were hard to pick. Went with Shannan as she led to the other discoveries."
    },
    geometry: {
      coordinates: [-73.276783, 40.63847],
      type: "Point"
    },
    id: "6d0f49dd9ffcd130a33da1a8cab7e4c3"
  },
  {
    type: "Feature",
    properties: {
      Title: "A Body in Kentucky /// 156 /// 157 ",
      Release: "11/11/2017",
      URL: "https://truecrimegarage.com/home/blog/a-body-in-kentucky-156-157",
      Earliest_Date: "12/6/1967",
      Earliest_Year: "1967",
      Notes: " U.S. Route 25 near Georgetown, Kentucky"
    },
    geometry: {
      coordinates: [-84.555126, 38.169237],
      type: "Point"
    },
    id: "6e7cd5aade599a5a40105afda3ca1786"
  },
  {
    type: "Feature",
    properties: {
      Title: "Body Barrel /// Episodes 87 /// 88",
      Release: "3/7/2017",
      URL: "https://truecrimegarage.com/home/blog/body-barrel-episodes-87-88",
      Earliest_Date: "11/10/1985",
      Earliest_Year: "1985",
      Notes: "General are of the park where the first barrels were found "
    },
    geometry: {
      coordinates: [-71.369486, 43.153333],
      type: "Point"
    },
    id: "6ee4783e079c202ccf704cb25f248fd2"
  },
  {
    type: "Feature",
    properties: {
      Title: "Tim Watkins /// 284 /// 285",
      Release: "3/5/2019",
      URL: "https://truecrimegarage.com/home/blog/tim-watkins-284-285",
      Earliest_Date: "9/14/2017",
      Earliest_Year: "2017",
      Notes: "General area of Limbaugh Canyon, where Tim's body was found"
    },
    geometry: {
      coordinates: [-104.924989, 39.106371],
      type: "Point"
    },
    id: "6f062fa159269a745e19dd35525745a5"
  },
  {
    type: "Feature",
    properties: {
      Title: "TEEKAH LEWIS ////// 18",
      Release: "2/24/2016",
      URL: "https://truecrimegarage.com/home/blog/teekah-lewis-18",
      Earliest_Date: "1/23/1999",
      Earliest_Year: "1999",
      Notes: "4602 Center St Tacoma, WA 98409\n"
    },
    geometry: {
      coordinates: [-122.498685, 47.233126],
      type: "Point"
    },
    id: "776f37cc1341c09a363819cc46ba8e01"
  },
  {
    type: "Feature",
    properties: {
      Title: "Elisa Lam Elevator Footage /// True Crime Garage Tv",
      Release: "3/14/2017",
      URL:
        "https://truecrimegarage.com/home/blog/elisa-lam-elevator-footage-true-crime-garage-tv",
      Earliest_Date: "1/31/2013",
      Earliest_Year: "2013",
      Notes: "640 S Main St\nLos Angeles, CA 90014\n"
    },
    geometry: {
      coordinates: [-118.252968, 34.044277],
      type: "Point"
    },
    id: "79a2e366d67c28c125840b0aeb7e1ce9"
  },
  {
    type: "Feature",
    properties: {
      Title: "The I-5 Killer /// 313 /// 314",
      Release: "6/25/2019",
      URL: "https://truecrimegarage.com/home/blog/the-i-5-killer-313-314",
      Earliest_Date: "10/9/1980",
      Earliest_Year: "1980",
      Notes: "9000 block of SW Ninth Place in downtown Portland"
    },
    geometry: {
      coordinates: [-122.681174, 45.519299],
      type: "Point"
    },
    id: "7a28e8e521c5b5c77ba646f3a094c3de"
  },
  {
    type: "Feature",
    properties: {
      Title: "Scott Peterson /// 243 /// 244",
      Release: "10/2/2018",
      URL: "https://truecrimegarage.com/home/blog/scott-peterson-243-244",
      Earliest_Date: "12/24/2002",
      Earliest_Year: "2002",
      Notes: "523 covena ave. modesto ca"
    },
    geometry: {
      coordinates: [-120.974606, 37.646076],
      type: "Point"
    },
    id: "7a2e37274fd808e4d452ce23a2572a9f"
  },
  {
    type: "Feature",
    properties: {
      Title: "West Mesa Body Pit ////// 50 ",
      Release: "9/13/2016",
      URL: "https://truecrimegarage.com/home/blog/west-mesa-body-pit-50",
      Earliest_Date: "5/15/2003",
      Earliest_Year: "2003",
      Notes:
        "Date is based on the earliest disappearance I could confirm: http://charleyproject.org/case/monica-diana-candelaria\n\nAmole Mesa Ave SW & 118th St SW\nAlbuquerque, NM 87121"
    },
    geometry: {
      coordinates: [-106.757291, 35.036881],
      type: "Point"
    },
    id: "7c9548aa2d808213c803d7580a0cb97e"
  },
  {
    type: "Feature",
    properties: {
      Title: "A Dark Past /// 114 /// 115",
      Release: "6/13/2017",
      URL: "https://truecrimegarage.com/home/blog/a-dark-past-114-115",
      Earliest_Date: "11/28/1962",
      Earliest_Year: "1962",
      Notes: "Calcasieu River "
    },
    geometry: {
      coordinates: [-93.208434, 30.259986],
      type: "Point"
    },
    id: "7d9e88e7619007f11eab44b8bf48b7b0"
  },
  {
    type: "Feature",
    properties: {
      Title: "Monster of Florence /// 124 /// 125 ",
      Release: "7/23/2017",
      URL: "https://truecrimegarage.com/home/blog/monster-of-florence-124-125",
      Earliest_Date: "8/21/1968",
      Earliest_Year: "1968",
      Notes: "Signa\n50058 Metropolitan City of Florence\nItaly"
    },
    geometry: {
      coordinates: [11.077787, 43.79294],
      type: "Point"
    },
    id: "7e941e7c228fbdd2394cee6040802f2a"
  },
  {
    type: "Feature",
    properties: {
      Title: "Amy Hooper /// 294 /// 295 ",
      Release: "4/9/2019",
      URL: "https://truecrimegarage.com/home/blog/amy-hooper-294-295",
      Earliest_Date: "3/9/1992",
      Earliest_Year: "1992",
      Notes: "Lincoln Village Apartments 134 Old Village Rd, Columbus, OH 43228"
    },
    geometry: {
      coordinates: [-83.1235, 39.95534],
      type: "Point"
    },
    id: "7eea1437b8581e8e26b197c482f58e5a"
  },
  {
    type: "Feature",
    properties: {
      Title: "Bill Comeans ////// 137",
      Release: "8/29/2017",
      URL: "https://truecrimegarage.com/home/blog/bill-comeans-137",
      Earliest_Date: "1/7/1980",
      Earliest_Year: "1980",
      Notes: "Buena Vista Ave Columbus, OH 43228"
    },
    geometry: {
      coordinates: [-83.141353, 39.957099],
      type: "Point"
    },
    id: "7febb7cb1c72a9f069703f19379f7122"
  },
  {
    type: "Feature",
    properties: {
      Title: "Shaker Heights /// 6 Part Series  ",
      Release: "2/11/2020",
      URL: "https://truecrimegarage.com/home/blog/shaker-heights-6-part-series",
      Earliest_Date: "9/14/1990",
      Earliest_Year: "1990",
      Notes: "Maybe home address: 25208 Hazelmere Rd, Shaker Heights OH"
    },
    geometry: {
      coordinates: [-81.500449, 41.474544],
      type: "Point"
    },
    id: "817f7919b555d9632d086e67bfe2eeba"
  },
  {
    type: "Feature",
    properties: {
      Title: "Lane Bryant Shooting /// 200 /// 201",
      Release: "4/17/2018",
      URL: "https://truecrimegarage.com/home/blog/lane-bryant-shooting-200-201",
      Earliest_Date: "2/2/2008",
      Earliest_Year: "2008",
      Notes: "7298 W 191st St, Tinley Park, IL 60487"
    },
    geometry: {
      coordinates: [-87.794211, 41.54396],
      type: "Point"
    },
    id: "820c833d0c26ed0bf41b261c89b1287d"
  },
  {
    type: "Feature",
    properties: {
      Title: "Oklahoma Girl Scout Murders /// 3 Part Series ",
      Release: "12/18/2018",
      URL:
        "https://truecrimegarage.com/home/blog/oklahoma-girl-scout-murders-3-part-series",
      Earliest_Date: "6/13/1977",
      Earliest_Year: "1977",
      Notes: "Camp Scott "
    },
    geometry: {
      coordinates: [-95.162476, 36.160381],
      type: "Point"
    },
    id: "848da0f4b40d0780d521e67fcea04914"
  },
  {
    type: "Feature",
    properties: {
      Title: "Haleigh Cummings /// 311 /// 312",
      Release: "6/18/2019",
      URL: "https://truecrimegarage.com/home/blog/haleigh-cummings-311-312",
      Earliest_Date: "2/9/2009",
      Earliest_Year: "2009",
      Notes: "202 Green LnSatsuma, FL 32189\n"
    },
    geometry: {
      coordinates: [-81.675072, 29.572922],
      type: "Point"
    },
    id: "84b324678a8514e276b16629daaa7b33"
  },
  {
    type: "Feature",
    properties: {
      Title: "JonBenet Ramsey /// 355 /// 356 /// 357 /// 358 /// 359 /// 360",
      Release: "12/3/2019",
      URL:
        "https://truecrimegarage.com/home/blog/jonbenet-ramsey-little-miss-christmas",
      Earliest_Date: "12/25/1996",
      Earliest_Year: "1996",
      Notes: "Home address: 755 15th St. Boulder, Co"
    },
    geometry: {
      coordinates: [-105.273934, 40.001032],
      type: "Point"
    },
    id: "84d38c2f89000079a18d0a7732296771"
  },
  {
    type: "Feature",
    properties: {
      Title: "The Phantom Killer//////01",
      Release: "11/13/2015",
      URL: "https://truecrimegarage.com/home/blog/the-phantom-killer-01",
      Earliest_Date: "2/22/1946",
      Earliest_Year: "1946",
      Notes: "S Robison Rd\nTexarkana, TX 75501"
    },
    geometry: {
      coordinates: [-94.087978, 33.406838],
      type: "Point"
    },
    id: "8574c28a74009eef49611954ddbfbc39"
  },
  {
    type: "Feature",
    properties: {
      Title: "Lauren Giddings /// 341 /// 342",
      Release: "10/8/2019",
      URL: "https://truecrimegarage.com/home/blog/lauren-giddings-341-342",
      Earliest_Date: "6/26/2011",
      Earliest_Year: "2011",
      Notes:
        "The apartment from https://virtualglobetrotting.com/map/stephen-mcdaniel-lauren-giddings-apartment-complex/view/google/\n\n1052 Georgia Ave\nMacon, Georgia"
    },
    geometry: {
      coordinates: [-83.635796, 32.840769],
      type: "Point"
    },
    id: "86c7c5eee2f9e51dfda0f8b34033412c"
  },
  {
    type: "Feature",
    properties: {
      Title: "Rae Carruth ////// 273",
      Release: "1/22/2019",
      URL: "https://truecrimegarage.com/home/blog/rae-carruth-273",
      Earliest_Date: "11/16/1999",
      Earliest_Year: "1999",
      Notes: "Intersection of Rea Road and MacAndrew Drive"
    },
    geometry: {
      coordinates: [-80.808902, 35.100307],
      type: "Point"
    },
    id: "8812cdb7f33c0c270ebb83435ee37391"
  },
  {
    type: "Feature",
    properties: {
      Title: "Dayton Leroy Rogers ////// 38",
      Release: "7/6/2016",
      URL: "https://truecrimegarage.com/home/blog/dayton-leroy-rogers-38",
      Earliest_Date: "8/7/1987",
      Earliest_Year: "1987",
      Notes:
        "The date is the known attack. The other victims are listed from 1983 -1987 but I'm unable to find anyone that wasn't listed in the news as alive in 1987.\n\nLocation according to https://www.documentingreality.com/forum/attachments/f10/145501d1269967294-molalla-forest-killer-rogers-fundorte.gif"
    },
    geometry: {
      coordinates: [-122.542432, 45.135666],
      type: "Point"
    },
    id: "8908249b25e3a5dc3e90c07e632e694e"
  },
  {
    type: "Feature",
    properties: {
      Title: "Kelly Cochrane /// Episode 228 ",
      Release: "8/1/2018",
      URL: "https://truecrimegarage.com/home/blog/kelly-cochrane-episode-228",
      Earliest_Date: "10/14/2014",
      Earliest_Year: "2014",
      Notes: "General Iron River area "
    },
    geometry: {
      coordinates: [-88.642678, 46.096759],
      type: "Point"
    },
    id: "8beecef765aef618b570ebf921622f7d"
  },
  {
    type: "Feature",
    properties: {
      Title: "The Ted Murders ////// 64 ",
      Release: "12/4/2016",
      URL: "https://truecrimegarage.com/home/blog/the-ted-murders-64",
      Earliest_Date: "1/4/1974",
      Earliest_Year: "1974",
      Notes: "General area around the University of Washington"
    },
    geometry: {
      coordinates: [-122.300991, 47.661802],
      type: "Point"
    },
    id: "8c5b5a83900321f1c4cd636b2c1a6fba"
  },
  {
    type: "Feature",
    properties: {
      Title: "True East Murders /// 165 /// 166",
      Release: "12/12/2017",
      URL: "https://truecrimegarage.com/home/blog/true-east-murders-165-166",
      Earliest_Date: "7/13/1994",
      Earliest_Year: "1994",
      Notes: "4610 144th Place SE"
    },
    geometry: {
      coordinates: [-122.152035, 47.562388],
      type: "Point"
    },
    id: "8dd7df5c9e4d20b00c2abb51b895da8c"
  },
  {
    type: "Feature",
    properties: {
      Title: "The Fifth Nail /// 118 /// 119",
      Release: "6/27/2017",
      URL: "https://truecrimegarage.com/home/blog/the-fifth-nail-118-119",
      Earliest_Date: "5/16/2005",
      Earliest_Year: "2005",
      Notes: "2323 E French Gulch Rd\nCoeur d'Alene, ID 83814"
    },
    geometry: {
      coordinates: [-116.755208, 47.681429],
      type: "Point"
    },
    id: "8ee354a54974761d3d2d671018df4447"
  },
  {
    type: "Feature",
    properties: {
      Title: "Lululemon Murders /// 193 /// 194 ",
      Release: "3/20/2018",
      URL: "https://truecrimegarage.com/home/blog/lululemon-murders-193-194",
      Earliest_Date: "3/11/2011",
      Earliest_Year: "2011",
      Notes: "4838 Bethesda Ave #16, Bethesda, MD 20814"
    },
    geometry: {
      coordinates: [-77.096489, 38.98093],
      type: "Point"
    },
    id: "8ee53a7c69df2eb45eb4089be53df1a3"
  },
  {
    type: "Feature",
    properties: {
      Title: "The Devil Did it /// 126 /// 127 ",
      Release: "7/26/2017",
      URL: "https://truecrimegarage.com/home/blog/the-devil-did-it-126-127",
      Earliest_Date: "3/4/1998",
      Earliest_Year: "1998",
      Notes: "St. Michael's Catholic Church\n109 S Military Rd, Dane, WI 53529"
    },
    geometry: {
      coordinates: [-89.501528, 43.249219],
      type: "Point"
    },
    id: "8fb85b33439ad5448a7c51405383679d"
  },
  {
    type: "Feature",
    properties: {
      Title: "The Murder of Aliza Sherman //////",
      Release: "12/18/2017",
      URL: "https://truecrimegarage.com/home/blog/the-murder-of-aliza-sherman",
      Earliest_Date: "3/24/2013",
      Earliest_Year: "2013",
      Notes: "75 Erieview Plaza\nCleveland, OH 44114"
    },
    geometry: {
      coordinates: [-81.691164, 41.505889],
      type: "Point"
    },
    id: "9018b3eabbf409f17ef155faf1c41878"
  },
  {
    type: "Feature",
    properties: {
      Title: "Amy Mihaljevic /// 308 /// 309",
      Release: "6/4/2019",
      URL: "https://truecrimegarage.com/home/blog/amy-mihaljevic-part-1-308",
      Earliest_Date: "10/27/1989",
      Earliest_Year: "1989",
      Notes: "Bay Square Shopping Center 27239 Wolf Rd, Bay Village, OH 44140"
    },
    geometry: {
      coordinates: [-81.921864, 41.484332],
      type: "Point"
    },
    id: "9234a4c51629da0b5fca63ae93e7d769"
  },
  {
    type: "Feature",
    properties: {
      Title: "Joseph Colombo ////// 72 &73",
      Release: "1/15/2017",
      URL: "https://truecrimegarage.com/home/blog/joseph-colombo",
      Earliest_Date: "6/28/1971",
      Earliest_Year: "1971",
      Notes: "Columbus Circle"
    },
    geometry: {
      coordinates: [-73.98371, 40.767848],
      type: "Point"
    },
    id: "927d17f00139984c4842508e112c4f23"
  },
  {
    type: "Feature",
    properties: {
      Title: "Alton Coleman & Debra Brown ////// 14 ",
      Release: "2/10/2016",
      URL: "https://truecrimegarage.com/home/blog/alton-coleman-debra-brown-14",
      Earliest_Date: "5/29/1984",
      Earliest_Year: "1984",
      Notes: "6206 11th Ave, Kenosha, WI\n"
    },
    geometry: {
      coordinates: [-87.82403, 42.578442],
      type: "Point"
    },
    id: "928dc578ccdd9cb85971a0244c9b3a24"
  },
  {
    type: "Feature",
    properties: {
      Title: "Debra Sundstrom ////// 315",
      Release: "7/2/2019",
      URL: "https://truecrimegarage.com/home/blog/debra-sundstrom-315",
      Earliest_Date: "2/1/2010",
      Earliest_Year: "2010",
      Notes:
        "Randy Sundstrom's last known day is uncertain, though listed as February 2010.\n1884 South River Road in Walton"
    },
    geometry: {
      coordinates: [-75.168709, 42.144939],
      type: "Point"
    },
    id: "932563fc2850cc2b7087a5a7e7701174"
  },
  {
    type: "Feature",
    properties: {
      Title: "Elyse Pahler ////// 347 ",
      Release: "10/29/2019",
      URL: "https://truecrimegarage.com/home/blog/elyse-pahler-347",
      Earliest_Date: "7/22/1995",
      Earliest_Year: "1995",
      Notes: "General Nipomo Mesa area\n"
    },
    geometry: {
      coordinates: [-120.503697, 35.031903],
      type: "Point"
    },
    id: "9444f714245e1bb0c3a018cbb890381f"
  },
  {
    type: "Feature",
    properties: {
      Title: "Photograph ////// 37 ",
      Release: "6/28/2016",
      URL: "https://truecrimegarage.com/home/blog/photograph-37",
      Earliest_Date: "6/15/1989",
      Earliest_Year: "1989",
      Notes:
        "General Port St. Joe, unable to track down the name of the convenience store"
    },
    geometry: {
      coordinates: [-85.297349, 29.813477],
      type: "Point"
    },
    id: "94d2f314d8bfd92e5d4e616cd87770e8"
  },
  {
    type: "Feature",
    properties: {
      Title: "The Small Town Murders /// 249 /// 250",
      Release: "10/16/2018",
      URL:
        "https://truecrimegarage.com/home/blog/the-small-town-murders-249-250",
      Earliest_Date: "10/4/1982",
      Earliest_Year: "1982",
      Notes: "General West Logan, Ohio area"
    },
    geometry: {
      coordinates: [-82.43601, 39.538716],
      type: "Point"
    },
    id: "95108d84cfc12cb99740016901d8c2a9"
  },
  {
    type: "Feature",
    properties: {
      Title: "COLUMBINE ////// 09",
      Release: "1/7/2016",
      URL: "https://truecrimegarage.com/home/blog/columbine-09",
      Earliest_Date: "4/20/1999",
      Earliest_Year: "1999",
      Notes:
        "Coordinates from https://tools.wmflabs.org/geohack/geohack.php?pagename=Columbine_High_School_massacre&params=39_36_12_N_105_04_29_W_region:US-CO_type:event"
    },
    geometry: {
      coordinates: [-105.074722, 39.603333],
      type: "Point"
    },
    id: "9883a98ae4390e9112804e4acc85bb62"
  },
  {
    type: "Feature",
    properties: {
      Title: "Barbara Blatnik /// 316 /// 317",
      Release: "7/9/2019",
      URL: "https://truecrimegarage.com/home/blog/barbara-blatnik-316-317",
      Earliest_Date: "12/20/1987",
      Earliest_Year: "1987",
      Notes:
        "Blossom Music Center, Cuyahoga Falls 1145 W Steels Corners Rd, Cuyahoga Falls, OH 44223"
    },
    geometry: {
      coordinates: [-81.563458, 41.187376],
      type: "Point"
    },
    id: "991e518935a325653ee49943bbbda89a"
  },
  {
    type: "Feature",
    properties: {
      Title: "Brittanee Drexel /// 217 /// 218 ",
      Release: "6/20/2018",
      URL: "https://truecrimegarage.com/home/blog/brittanee-drexel-217-218",
      Earliest_Date: "4/25/2009",
      Earliest_Year: "2009",
      Notes:
        "Coordinates from https://tools.wmflabs.org/geohack/geohack.php?pagename=Disappearance_of_Brittanee_Drexel&params=33.6692_N_78.9057_W_"
    },
    geometry: {
      coordinates: [-78.9057, 33.6692],
      type: "Point"
    },
    id: "9a633e4c0a27175949e557f4982229ad"
  },
  {
    type: "Feature",
    properties: {
      Title: "The Disappearance of Maura Murray /// 152 /// 153",
      Release: "10/25/2017",
      URL:
        "https://truecrimegarage.com/home/blog/the-disappearance-of-maura-murray-152-153",
      Earliest_Date: "2/9/2004",
      Earliest_Year: "2004",
      Notes:
        "Coordinates from https://tools.wmflabs.org/geohack/geohack.php?pagename=Disappearance_of_Maura_Murray&params=44.119272_N_71.936278_W_"
    },
    geometry: {
      coordinates: [-71.936278, 44.119272],
      type: "Point"
    },
    id: "9be5bf0fceb98d308023189552ced16d"
  },
  {
    type: "Feature",
    properties: {
      Title: "D.C. Mansion Murders /// 299 /// 300",
      Release: "4/30/2019",
      URL:
        "https://truecrimegarage.com/home/blog/d-c-mansion-murders-part-1-299",
      Earliest_Date: "5/14/2015",
      Earliest_Year: "2015",
      Notes: "3201 Woodland Dr NWWashington, DC 20008\n"
    },
    geometry: {
      coordinates: [-77.06375, 38.92693],
      type: "Point"
    },
    id: "9ebae7cacda6c893b29cca020c028511"
  },
  {
    type: "Feature",
    properties: {
      Title: "Holly Branagan /// 236 /// 237",
      Release: "8/28/2018",
      URL: "https://truecrimegarage.com/home/blog/holly-branagan-236-237",
      Earliest_Date: "3/28/1979",
      Earliest_Year: "1979",
      Notes: "469 Pine Top TrailBethlehem, PA 18017\n"
    },
    geometry: {
      coordinates: [-75.47172, 40.657279],
      type: "Point"
    },
    id: "9faf4cc1db4255b4a7efcf2d7d6c02c6"
  },
  {
    type: "Feature",
    properties: {
      Title: "The Moody Massacre ////// 377 ",
      Release: "2/25/2020",
      URL: "https://truecrimegarage.com/home/blog/the-moody-massacre-377",
      Earliest_Date: "5/29/2005",
      Earliest_Year: "2005",
      Notes: "Home address\n2337 OH-47\nBellefontaine, Ohio"
    },
    geometry: {
      coordinates: [-83.724981, 40.387566],
      type: "Point"
    },
    id: "a100e295e0c0d7901c3f6850b4c6c594"
  },
  {
    type: "Feature",
    properties: {
      Title: "Long Island Serial Killer UPDATE ////// 20",
      Release: "3/9/2016",
      URL:
        "https://truecrimegarage.com/home/blog/long-island-serial-killer-update-20",
      Earliest_Date: "5/1/2010",
      Earliest_Year: "2010",
      Notes:
        "Shannan Gilbert's last known location\n\nThe dates and times for this one were hard to pick. Went with Shannan as she led to the other discoveries."
    },
    geometry: {
      coordinates: [-73.276783, 40.63847],
      type: "Point"
    },
    id: "a2b09e31a5fc3318ab37913105e1e65d"
  },
  {
    type: "Feature",
    properties: {
      Title: "Ryan Ferguson /// 116 /// 117",
      Release: "6/21/2017",
      URL: "https://truecrimegarage.com/home/blog/ryan-ferguson-116-117",
      Earliest_Date: "11/1/2001",
      Earliest_Year: "2001",
      Notes: "Columbia Daily Tribune\n313 E Ash St, Columbia, MO 65201"
    },
    geometry: {
      coordinates: [-92.335329, 38.953967],
      type: "Point"
    },
    id: "a2c6d93e8f4a5aaf8075a84fff246b95"
  },
  {
    type: "Feature",
    properties: {
      Title: "Kelsie Schelling ////// 83 & 84",
      Release: "2/21/2017",
      URL: "https://truecrimegarage.com/home/blog/kelsie-schelling-83",
      Earliest_Date: "2/4/2013",
      Earliest_Year: "2013",
      Notes:
        "St. Mary Corwin Hospital in Pueblo\n1008 Minnequa Ave, Pueblo, CO 81004"
    },
    geometry: {
      coordinates: [-104.623987, 38.233881],
      type: "Point"
    },
    id: "a437458dbfe97805cc397eac7bcde673"
  },
  {
    type: "Feature",
    properties: {
      Title: "The Staircase /// 241 /// 242",
      Release: "9/26/2018",
      URL: "https://truecrimegarage.com/home/blog/the-staircase-241-242",
      Earliest_Date: "12/9/2001",
      Earliest_Year: "2001",
      Notes: "1810 Cedar St\nDurham, NC 27707"
    },
    geometry: {
      coordinates: [-78.922106, 35.979069],
      type: "Point"
    },
    id: "a89aaad36b461808909bb76fd741eed0"
  },
  {
    type: "Feature",
    properties: {
      Title: "Austin Yogurt Shop Murders /// 81 & 82 ",
      Release: "2/15/2017",
      URL:
        "https://truecrimegarage.com/home/blog/austin-yogurt-shop-murders-81-82",
      Earliest_Date: "12/6/1991",
      Earliest_Year: "1991",
      Notes: "Hillside strip mall in the 2900 block of West Anderson Lane"
    },
    geometry: {
      coordinates: [-97.73834, 30.359573],
      type: "Point"
    },
    id: "aa47003444923930d5d94f36ddb2ba91"
  },
  {
    type: "Feature",
    properties: {
      Title: "Johnny Gosch ////// 57 ",
      Release: "10/25/2016",
      URL: "https://truecrimegarage.com/home/blog/johnny-gosch-57",
      Earliest_Date: "9/5/1982",
      Earliest_Year: "1982",
      Notes: "Marcourt Ln & 42nd St\nWest Des Moines, IA 50266"
    },
    geometry: {
      coordinates: [-93.763554, 41.586045],
      type: "Point"
    },
    id: "aa5756f3f676f8c99542f93151602cdf"
  },
  {
    type: "Feature",
    properties: {
      Title: "BTK /// 4 Part Series ",
      Release: "5/3/2018",
      URL: "https://truecrimegarage.com/home/blog/btk-4-part-series",
      Earliest_Date: "1/15/1974",
      Earliest_Year: "1974",
      Notes: "803 N Edgemoor StWichita, KS 67208\n"
    },
    geometry: {
      coordinates: [-97.271687, 37.697602],
      type: "Point"
    },
    id: "ab8844b2b31c630bcf53a822e5748a4a"
  },
  {
    type: "Feature",
    properties: {
      Title: "James Byrd Jr /// 163 /// 164 ",
      Release: "12/5/2017",
      URL: "https://truecrimegarage.com/home/blog/james-byrd-jr-163-164",
      Earliest_Date: "6/7/1998",
      Earliest_Year: "1998",
      Notes: "Huff Creek Rd\nTexas 75951"
    },
    geometry: {
      coordinates: [-93.895292, 30.933704],
      type: "Point"
    },
    id: "ad90e8bdf77566bf353a3346df49fafc"
  },
  {
    type: "Feature",
    properties: {
      Title: "COLD CASE///ANITA LIAS//////06",
      Release: "12/16/2015",
      URL: "https://truecrimegarage.com/home/blog/cold-case-anita-lias-06",
      Earliest_Date: "9/1/1975",
      Earliest_Year: "1975",
      Notes: "862 S. Champion\nColumbus, Ohio -"
    },
    geometry: {
      coordinates: [-82.969898, 39.947651],
      type: "Point"
    },
    id: "b2aa20990ca3959d594e284be2c46abe"
  },
  {
    type: "Feature",
    properties: {
      Title: "Christy Mirack /// 224 /// 225",
      Release: "7/17/2018",
      URL: "https://truecrimegarage.com/home/blog/christy-mirack-224-225",
      Earliest_Date: "12/21/1992",
      Earliest_Year: "1992",
      Notes: "2071 William Penn WayLancaster, PA 17601\n"
    },
    geometry: {
      coordinates: [-76.253504, 40.05735],
      type: "Point"
    },
    id: "b46eb6ebb9be3a0a5508aee47d3c7158"
  },
  {
    type: "Feature",
    properties: {
      Title: "Springfield Three ////// 97 & 98 ",
      Release: "4/11/2017",
      URL: "https://truecrimegarage.com/home/blog/springfield-three-97-98",
      Earliest_Date: "6/7/1992",
      Earliest_Year: "1992",
      Notes: "1717 E. Delmar Street\nSpringfield, Missouri, U.S."
    },
    geometry: {
      coordinates: [-93.263056, 37.194722],
      type: "Point"
    },
    id: "b7d54f80ef8340762fb84712002ccd2c"
  },
  {
    type: "Feature",
    properties: {
      Title: "The Devil's Teeth ///// 4 Part Series ",
      Release: "1/30/2018",
      URL:
        "https://truecrimegarage.com/home/blog/the-devil-s-teeth-4-part-series",
      Earliest_Date: "8/7/1972",
      Earliest_Year: "1972",
      Notes: "Houdaille Quarry\n"
    },
    geometry: {
      coordinates: [-74.341029, 40.704984],
      type: "Point"
    },
    id: "b93918ffa7e62a037472a0add3418aa7"
  },
  {
    type: "Feature",
    properties: {
      Title: "Amy Mihaljevic ////// 22 ",
      Release: "3/23/2016",
      URL: "https://truecrimegarage.com/home/blog/amy-mihaljevic-22",
      Earliest_Date: "10/27/1989",
      Earliest_Year: "1989",
      Notes: "Bay Square Shopping Center 27239 Wolf Rd, Bay Village, OH 44140"
    },
    geometry: {
      coordinates: [-81.921864, 41.484332],
      type: "Point"
    },
    id: "bb00192585d024a23372aef67e55b950"
  },
  {
    type: "Feature",
    properties: {
      Title: "Sherri Papini /// 335 /// 336",
      Release: "9/17/2019",
      URL: "https://truecrimegarage.com/home/blog/sherri-papini-part-1-335",
      Earliest_Date: "11/2/2016",
      Earliest_Year: "2016",
      Notes:
        "Intersection where she says she was abducted: Sunrise Drive and Old Oregon Highway, redding, ca"
    },
    geometry: {
      coordinates: [-122.320656, 40.695068],
      type: "Point"
    },
    id: "bcb9ed77678bf37db52b5b806171f6ef"
  },
  {
    type: "Feature",
    properties: {
      Title: "Malibu Creek Murder /// 337 /// 338",
      Release: "9/24/2019",
      URL: "https://truecrimegarage.com/home/blog/malibu-creek-murder-337-338",
      Earliest_Date: "6/22/2018",
      Earliest_Year: "2018",
      Notes: "Malibu Creek State Park Campground"
    },
    geometry: {
      coordinates: [-118.716016, 34.09463],
      type: "Point"
    },
    id: "bd34adf5281b785b4cdbbf0ccbf147a8"
  },
  {
    type: "Feature",
    properties: {
      Title: "Oakland County Child Killer ////// 28 ",
      Release: "5/15/2016",
      URL:
        "https://truecrimegarage.com/home/blog/oakland-county-child-killer-28",
      Earliest_Date: "2/15/1976",
      Earliest_Year: "1976",
      Notes:
        "W Nine Mile Rd & Livernois St\nFerndale, MI 48220, area of the american legion at the time "
    },
    geometry: {
      coordinates: [-83.145578, 42.460392],
      type: "Point"
    },
    id: "bdbe83492ccd5875661cdf155fe398de"
  },
  {
    type: "Feature",
    properties: {
      Title: "DeOrr Kunz /// 305 /// 306",
      Release: "5/21/2019",
      URL: "https://truecrimegarage.com/home/blog/deorr-kunz-part-1-304",
      Earliest_Date: "7/10/2015",
      Earliest_Year: "2015",
      Notes: "Timber Creek Campground Leadore, ID 83464"
    },
    geometry: {
      coordinates: [-113.466532, 44.580776],
      type: "Point"
    },
    id: "bdc619a5c7fcae778124676bd2a8d6ab"
  },
  {
    type: "Feature",
    properties: {
      Title: "Mary Pinchot Meyer ////// 62",
      Release: "11/22/2016",
      URL: "https://truecrimegarage.com/home/blog/mary-pinchot-meyer-62",
      Earliest_Date: "10/12/1964",
      Earliest_Year: "1964",
      Notes: "General area of Canal Rd in Georgetown"
    },
    geometry: {
      coordinates: [-77.074531, 38.905455],
      type: "Point"
    },
    id: "be940255b08b0a362679f965c0a7eca3"
  },
  {
    type: "Feature",
    properties: {
      Title: "Holly Bobo /// 146 /// 147",
      Release: "10/4/2017",
      URL: "https://truecrimegarage.com/home/blog/holly-bobo-146-147",
      Earliest_Date: "4/13/2011",
      Earliest_Year: "2011",
      Notes: "681 Swan Johnson Rd\nDarden, TN 38328-4830"
    },
    geometry: {
      coordinates: [-88.177993, 35.679417],
      type: "Point"
    },
    id: "c16fc540146323fb63ac6fc31e6f5fdb"
  },
  {
    type: "Feature",
    properties: {
      Title: "The Rawlins Rodeo Murders /// 274 /// 275",
      Release: "1/29/2019",
      URL:
        "https://truecrimegarage.com/home/blog/the-rawlins-rodeo-murders-274-275",
      Earliest_Date: "7/4/1974",
      Earliest_Year: "1974",
      Notes: "General Rawlins, WY area. Ok, fine, Rodeo St"
    },
    geometry: {
      coordinates: [-107.232336, 41.796061],
      type: "Point"
    },
    id: "c2ebb1ded1db7dfe1cf6d0e7257abac2"
  },
  {
    type: "Feature",
    properties: {
      Title: "Charles Whitman /// 229",
      Release: "8/1/2018",
      URL: "https://truecrimegarage.com/home/blog/charles-whitman-229",
      Earliest_Date: "8/1/1966",
      Earliest_Year: "1966",
      Notes: "University Tower, University of Texas"
    },
    geometry: {
      coordinates: [-97.741576, 30.286222],
      type: "Point"
    },
    id: "c349015e14c14fc9fd192c99f9d1e424"
  },
  {
    type: "Feature",
    properties: {
      Title: "John Wayne Gacy ////// 105 & 106",
      Release: "5/9/2017",
      URL: "https://truecrimegarage.com/home/blog/john-wayne-gacy-105-106",
      Earliest_Date: "1/2/1972",
      Earliest_Year: "1972",
      Notes: "8213 W Summerdale Ave\nChicago, IL 60656"
    },
    geometry: {
      coordinates: [-87.834503, 41.976381],
      type: "Point"
    },
    id: "c39305982fb989fffe2c26ca44c907c7"
  },
  {
    type: "Feature",
    properties: {
      Title: "Miles to Murder /// 183 /// 184 ",
      Release: "2/13/2018",
      URL: "https://truecrimegarage.com/home/blog/miles-to-murder-183-184",
      Earliest_Date: "6/29/2015",
      Earliest_Year: "2015",
      Notes: "27034 Jarvis Road"
    },
    geometry: {
      coordinates: [-81.76818, 26.34501],
      type: "Point"
    },
    id: "c3ec43e4d4c20ef0319f8266141e92e6"
  },
  {
    type: "Feature",
    properties: {
      Title: "BRIAN SHAFFER ////// 16",
      Release: "2/16/2016",
      URL: "https://truecrimegarage.com/home/blog/brian-shaffer-16",
      Earliest_Date: "4/1/2006",
      Earliest_Year: "2006",
      Notes:
        "1546 N High St, Columbus, OH 43201, Ugly Tuna Saloon near Ohio State University"
    },
    geometry: {
      coordinates: [-83.00658, 39.9938],
      type: "Point"
    },
    id: "c44fc63b5d91d425418d742134ea2129"
  },
  {
    type: "Feature",
    properties: {
      Title: "Henry McCabe /// 264 Last Will & Testament /// 263 ",
      Release: "12/12/2018",
      URL:
        "https://truecrimegarage.com/home/blog/henry-mccabe-264-last-will-testament-263",
      Earliest_Date: "9/7/2015",
      Earliest_Year: "2015",
      Notes:
        'Gas station on 73rd ave, one of the possible locations that he was "dropped off"'
    },
    geometry: {
      coordinates: [-93.239187, 45.097916],
      type: "Point"
    },
    id: "c6aa21ef8ec5af85e78ee8c20a662d89"
  },
  {
    type: "Feature",
    properties: {
      Title: "Joey LaBute ////// 27",
      Release: "4/27/2016",
      URL: "https://truecrimegarage.com/home/blog/joey-labute-27",
      Earliest_Date: "3/4/2016",
      Earliest_Year: "2016",
      Notes: "782 N High St, Columbus, Ohio 43215"
    },
    geometry: {
      coordinates: [-83.003339, 39.978402],
      type: "Point"
    },
    id: "c6ddb270b088ee55fb66d1c4859076e0"
  },
  {
    type: "Feature",
    properties: {
      Title: "Grant Amato ////// 370  ",
      Release: "2/4/2020",
      URL: "https://truecrimegarage.com/home/blog/grant-amato-370",
      Earliest_Date: "1/25/2019",
      Earliest_Year: "2019",
      Notes: "Home address 2112 Sultan Circle, in Chuluota, Fla\n"
    },
    geometry: {
      coordinates: [-81.112303, 28.623318],
      type: "Point"
    },
    id: "c6e45f6b70b5a1c127a8e8c282212198"
  },
  {
    type: "Feature",
    properties: {
      Title: "The Bricca Family Murders /// Bonus Episode ",
      Release: "6/12/2017",
      URL:
        "https://truecrimegarage.com/home/blog/the-bricca-family-murders-bonus-episode",
      Earliest_Date: "9/25/1966",
      Earliest_Year: "1966",
      Notes: "3381 Greenway Avenue\nCincinnati, Ohio - Hamilton County"
    },
    geometry: {
      coordinates: [-84.632801, 39.148621],
      type: "Point"
    },
    id: "cc6591faf37b8961dd23d477f1d06177"
  },
  {
    type: "Feature",
    properties: {
      Title: "Detective Sean Suiter /// 276 /// 277",
      Release: "2/5/2019",
      URL:
        "https://truecrimegarage.com/home/blog/detective-sean-suiter-276-277",
      Earliest_Date: "11/16/2017",
      Earliest_Year: "2017",
      Notes: "General Harlem Park area "
    },
    geometry: {
      coordinates: [-76.640008, 39.296338],
      type: "Point"
    },
    id: "cd31817327ce989d5ed42650c167b0c5"
  },
  {
    type: "Feature",
    properties: {
      Title: "The Candyman /// 251 /// 252",
      Release: "10/23/2018",
      URL: "https://truecrimegarage.com/home/blog/the-candyman-251-252",
      Earliest_Date: "9/25/1970",
      Earliest_Year: "1970",
      Notes: "22nd St across from Helms Elementary School"
    },
    geometry: {
      coordinates: [-95.408663, 29.805886],
      type: "Point"
    },
    id: "cfee4a0c1eee20ab3604a365b00deead"
  },
  {
    type: "Feature",
    properties: {
      Title: "Brianna Maitland ///254 /// 255",
      Release: "11/6/2018",
      URL: "https://truecrimegarage.com/home/blog/brianna-maitland-254-255",
      Earliest_Date: "3/19/2004",
      Earliest_Year: "2004",
      Notes:
        "Car location according to https://tools.wmflabs.org/geohack/geohack.php?pagename=Disappearance_of_Brianna_Maitland&params=44.911262_N_72.659480_W_"
    },
    geometry: {
      coordinates: [-72.65948, 44.911262],
      type: "Point"
    },
    id: "d0fbe0d6c38ba2b5dcce44f4b2bf96c3"
  },
  {
    type: "Feature",
    properties: {
      Title: "Melissa Witt /// 161 /// 162",
      Release: "11/28/2017",
      URL: "https://truecrimegarage.com/home/blog/melissa-witt-161-162",
      Earliest_Date: "12/1/1994",
      Earliest_Year: "1994",
      Notes: "Bowling World,  6100 S 36th St, Fort Smith, AR 72908"
    },
    geometry: {
      coordinates: [-94.397777, 35.324722],
      type: "Point"
    },
    id: "d3422c856103e509529ef2b250fb64ca"
  },
  {
    type: "Feature",
    properties: {
      Title: "Brandon Lawson Update ////// Episode 310",
      Release: "6/11/2019",
      URL:
        "https://truecrimegarage.com/home/blog/brandon-lawson-update-episode-310",
      Earliest_Date: "8/5/2013",
      Earliest_Year: "2013",
      Notes: "Truck location "
    },
    geometry: {
      coordinates: [-100.292183, 31.830607],
      type: "Point"
    },
    id: "d65ec7f52722a7db710647e3532f789e"
  },
  {
    type: "Feature",
    properties: {
      Title: "The Serial Killer's Apprentice ////// 54 ",
      Release: "10/4/2016",
      URL:
        "https://truecrimegarage.com/home/blog/the-serial-killer-s-apprentice-54",
      Earliest_Date: "10/29/1981",
      Earliest_Year: "1981",
      Notes: "Oilwell in Navarre\n"
    },
    geometry: {
      coordinates: [-81.499967, 40.741584],
      type: "Point"
    },
    id: "d7f57790a4620a6b621cf3f86a7349d0"
  },
  {
    type: "Feature",
    properties: {
      Title: "Casey Anthony /// 101-104",
      Release: "5/1/2017",
      URL: "https://truecrimegarage.com/home/blog/casey-anthony-101-102",
      Earliest_Date: "6/16/2008",
      Earliest_Year: "2008",
      Notes:
        "Caylee Marie Anthony's memorial site\n8900 Suburban Dr, Orlando, FL 32829"
    },
    geometry: {
      coordinates: [-81.263531, 28.48609],
      type: "Point"
    },
    id: "d97a0e05c3eec4a2cdf1c0dffa19caf6"
  },
  {
    type: "Feature",
    properties: {
      Title: "Jabez Spann /// 366 /// 367",
      Release: "1/22/2020",
      URL: "https://truecrimegarage.com/home/blog/jabez-spann-part-1-366",
      Earliest_Date: "9/5/2017",
      Earliest_Year: "2017",
      Notes: "BBQ location\n"
    },
    geometry: {
      coordinates: [-82.540143, 27.357007],
      type: "Point"
    },
    id: "db8f8dbec62826a40967e7c27d0e614f"
  },
  {
    type: "Feature",
    properties: {
      Title: "The Atlanta Child Murders ////// 56 ",
      Release: "10/18/2016",
      URL: "https://truecrimegarage.com/home/blog/the-atlanta-child-murders-56",
      Earliest_Date: "7/21/1979",
      Earliest_Year: "1979",
      Notes: "3850 Stone Rd SW Atlanta, GA 30331"
    },
    geometry: {
      coordinates: [-84.513183, 33.684338],
      type: "Point"
    },
    id: "db95b00f60b3bf4b669ef2010746b752"
  },
  {
    type: "Feature",
    properties: {
      Title: "Ebby Steppach /// 343 /// 344",
      Release: "10/15/2019",
      URL: "https://truecrimegarage.com/home/blog/ebby-steppach-343-344",
      Earliest_Date: "10/24/2015",
      Earliest_Year: "2015",
      Notes:
        "Coordinates of where she was found from https://tools.wmflabs.org/geohack/geohack.php?pagename=Murder_of_Ebby_Steppach&params=34.8099_N_92.5043_W_"
    },
    geometry: {
      coordinates: [-92.5043, 34.8099],
      type: "Point"
    },
    id: "dcce79582e879fafbca27afa0ce4e890"
  },
  {
    type: "Feature",
    properties: {
      Title: "Brandon Swanson /// 332 /// 333 /// 334",
      Release: "9/3/2019",
      URL: "https://truecrimegarage.com/home/blog/brandon-swanson-332-333-334",
      Earliest_Date: "5/14/2008",
      Earliest_Year: "2008",
      Notes:
        "Car location according to https://thetruecrimefiles.com/brandon-swanson-disappearance/"
    },
    geometry: {
      coordinates: [-96.093029, 44.624363],
      type: "Point"
    },
    id: "de2df3d73aecf80c5fa655f799f88adb"
  },
  {
    type: "Feature",
    properties: {
      Title: "Todd Kohlhepp /// Real Estate Serial Killer ",
      Release: "3/7/2018",
      URL:
        "https://truecrimegarage.com/home/blog/todd-kohlhepp-real-estate-serial-killer",
      Earliest_Date: "11/6/2003",
      Earliest_Year: "2003",
      Notes:
        "This could have been plotted in Tempe, Arizona, with his first kidnapping and rape. However, the bulk of his crimes were in South Carolina\n\n6851 Parris Bridge Rd, Chesnee, SC 29323\n"
    },
    geometry: {
      coordinates: [-81.91563, 35.12489],
      type: "Point"
    },
    id: "de5be8e204af9663b44290d4bf147edb"
  },
  {
    type: "Feature",
    properties: {
      Title: "Jennifer Kesse /// 362 /// 363 /// 364 /// 365",
      Release: "1/7/2020",
      URL: "https://truecrimegarage.com/home/blog/jennifer-kesse-part-1-362",
      Earliest_Date: "1/23/2006",
      Earliest_Year: "2006",
      Notes: "Apartment office location 3711 Conroy Rd, Orlando, FL 32839\n"
    },
    geometry: {
      coordinates: [-81.428408, 28.488569],
      type: "Point"
    },
    id: "e078fd4dc49b91be2ccf7ec8b494e22c"
  },
  {
    type: "Feature",
    properties: {
      Title: "Dennis Martin ////// 238 ",
      Release: "9/4/2018",
      URL: "https://truecrimegarage.com/home/blog/dennis-martin-238",
      Earliest_Date: "6/14/1969",
      Earliest_Year: "1969",
      Notes: "Spence field, Great Smoky Mountains"
    },
    geometry: {
      coordinates: [-83.733635, 35.562031],
      type: "Point"
    },
    id: "e0b44ac18deb9c51125884de1cf1b935"
  },
  {
    type: "Feature",
    properties: {
      Title: "Kayelyn Louder /// 292 /// 293",
      Release: "4/2/2019",
      URL: "https://truecrimegarage.com/home/blog/kayelyn-louder-part-1-292",
      Earliest_Date: "9/27/2014",
      Earliest_Year: "2014",
      Notes:
        "General Murray, UT area. So frustrating that there are photos, video, and missing posters but not a single street name reference "
    },
    geometry: {
      coordinates: [-111.917387, 40.655294],
      type: "Point"
    },
    id: "e3667c6bd2c2678126c0ec5b0a3b9f84"
  },
  {
    type: "Feature",
    properties: {
      Title: "Killing Fields Trilogy //////",
      Release: "8/14/2017",
      URL: "https://truecrimegarage.com/home/blog/killing-fields-trilogy",
      Earliest_Date: "7/2/1971",
      Earliest_Year: "1971",
      Notes: "I-45 near League City"
    },
    geometry: {
      coordinates: [-95.075083, 29.446385],
      type: "Point"
    },
    id: "e7572f8c3c165de23d2cddf6207fb285"
  },
  {
    type: "Feature",
    properties: {
      Title: "Wayne Greavette /// 259 /// 260",
      Release: "11/27/2018",
      URL: "https://truecrimegarage.com/home/blog/wayne-greavette-259-260",
      Earliest_Date: "12/12/1996",
      Earliest_Year: "1996",
      Notes: "General Puslinch Township area "
    },
    geometry: {
      coordinates: [-80.198799, 43.47489],
      type: "Point"
    },
    id: "e7a519a562c77266c19c1b1a4e6e440f"
  },
  {
    type: "Feature",
    properties: {
      Title: "L.I.S.K. Update ////// 74",
      Release: "1/17/2017",
      URL: "https://truecrimegarage.com/home/blog/l-i-s-k-update-74",
      Earliest_Date: "5/1/2010",
      Earliest_Year: "2010",
      Notes:
        "Tough decision on the date for this one, as it's hard to know what cases are involved "
    },
    geometry: {
      coordinates: [-73.86232, 40.829701],
      type: "Point"
    },
    id: "e8d692d4fbfa859aebce274a3b712fd1"
  },
  {
    type: "Feature",
    properties: {
      Title: "Sherese Walker Bingham /// 348 /// 349",
      Release: "11/5/2019",
      URL:
        "https://truecrimegarage.com/home/blog/sherese-walker-bingham-348-349",
      Earliest_Date: "12/12/2012",
      Earliest_Year: "2012",
      Notes: "White River State Park\n"
    },
    geometry: {
      coordinates: [-86.171815, 39.767127],
      type: "Point"
    },
    id: "ea1595499c06df28018f7f1149e15257"
  },
  {
    type: "Feature",
    properties: {
      Title: "Kyron Horman /////// 4 Part Series ",
      Release: "10/10/2017",
      URL: "https://truecrimegarage.com/home/blog/kyron-horman",
      Earliest_Date: "6/4/2010",
      Earliest_Year: "2010",
      Notes: "11536 NW Skyline Blvd, Portland, OR 97231"
    },
    geometry: {
      coordinates: [-122.858646, 45.607536],
      type: "Point"
    },
    id: "ea38432a2b4c2010dbeb8173066b8e82"
  },
  {
    type: "Feature",
    properties: {
      Title: "The Vanishing Man /// 177 /// 178",
      Release: "1/24/2018",
      URL: "https://truecrimegarage.com/home/blog/the-vanishing-man-177-178",
      Earliest_Date: "4/15/2005",
      Earliest_Year: "2005",
      Notes: "105 AJK BlvdLewisburg, PA 17837 Lewisburg Antique Mall"
    },
    geometry: {
      coordinates: [-76.879, 40.98904],
      type: "Point"
    },
    id: "ea6b053c716ac676eea6d310b91a53ec"
  },
  {
    type: "Feature",
    properties: {
      Title: "Jayme Closs ////// 253",
      Release: "10/30/2018",
      URL: "https://truecrimegarage.com/home/blog/jayme-closs-253",
      Earliest_Date: "10/15/2018",
      Earliest_Year: "2018",
      Notes: "1268 U.S. 8, Barron, Wisconsin,"
    },
    geometry: {
      coordinates: [-91.897667, 45.402046],
      type: "Point"
    },
    id: "ec39f23efa1a88d0e60943f2cecfd89e"
  },
  {
    type: "Feature",
    properties: {
      Title: "Emma Fillipoff ////// 52",
      Release: "9/28/2016",
      URL: "https://truecrimegarage.com/home/blog/emma-fillipoff-52",
      Earliest_Date: "11/28/2012",
      Earliest_Year: "2012",
      Notes: "Last seen "
    },
    geometry: {
      coordinates: [-123.368735, 48.421758],
      type: "Point"
    },
    id: "ed7c9f003d7d1a3f07bd5d5b69c06b53"
  },
  {
    type: "Feature",
    properties: {
      Title: "Murdered Joggers /// Karina Ventrano & Venessa Marcotte",
      Release: "2/21/2018",
      URL:
        "https://truecrimegarage.com/home/blog/murdered-joggers-karina-ventrano-venessa-marcotte",
      Earliest_Date: "8/2/2016",
      Earliest_Year: "2016",
      Notes: "161st Avenue and 78th Street in Queens"
    },
    geometry: {
      coordinates: [-73.853469, 40.653997],
      type: "Point"
    },
    id: "ef8701d3862a9a7cd1f9bf4ce7439579"
  },
  {
    type: "Feature",
    properties: {
      Title: "The Skelton Brothers /// 280 /// 281",
      Release: "2/19/2019",
      URL: "https://truecrimegarage.com/home/blog/the-skelton-brothers-280-281",
      Earliest_Date: "11/25/2010",
      Earliest_Year: "2010",
      Notes:
        "General area of Morenci, Michigan where the father lived and they were last seen"
    },
    geometry: {
      coordinates: [-84.217227, 41.723004],
      type: "Point"
    },
    id: "efae68084e76ce63f6186286833e1c5d"
  },
  {
    type: "Feature",
    properties: {
      Title: "Ted Bundy and the Green River Killer ////// 66 ",
      Release: "12/7/2016",
      URL:
        "https://truecrimegarage.com/home/blog/ted-bundy-and-the-green-river-killer-66",
      Earliest_Date: "7/8/1982",
      Earliest_Year: "1982",
      Notes: "Frager Rd\nWashington 98032"
    },
    geometry: {
      coordinates: [-122.275046, 47.395055],
      type: "Point"
    },
    id: "f010168d7998b8934d89ad6a69b99398"
  },
  {
    type: "Feature",
    properties: {
      Title: "NATALIE WOOD ////// 19",
      Release: "3/2/2016",
      URL: "https://truecrimegarage.com/home/blog/natalie-wood-19",
      Earliest_Date: "11/29/1981",
      Earliest_Year: "1981",
      Notes: "Santa Catalina Island\nCalifornia 90704"
    },
    geometry: {
      coordinates: [-118.595028, 33.388906],
      type: "Point"
    },
    id: "f1b4f9270891fe51ba41ed9590f2b312"
  },
  {
    type: "Feature",
    properties: {
      Title: "London Nude Murders ////// 55 ",
      Release: "10/11/2016",
      URL: "https://truecrimegarage.com/home/blog/london-nude-murders-55",
      Earliest_Date: "6/17/1959",
      Earliest_Year: "1959",
      Notes: "Dan Mason Dr, Chiswick, London W4 3UL, United Kingdom"
    },
    geometry: {
      coordinates: [-0.26405, 51.471608],
      type: "Point"
    },
    id: "f2559a35f676c87453f4a47d98a49319"
  },
  {
    type: "Feature",
    properties: {
      Title: "Esther Reed ////// 212",
      Release: "5/30/2018",
      URL: "https://truecrimegarage.com/home/blog/esther-reed-212",
      Earliest_Date: "10/1/1999",
      Earliest_Year: "1999",
      Notes:
        "Date is an estimate, reports all say October 1999, general King County area. Details are surprisingly lacking for a fraud case."
    },
    geometry: {
      coordinates: [-122.288491, 47.458137],
      type: "Point"
    },
    id: "f36fbdb6e9fab616bfd953deb5c2853e"
  },
  {
    type: "Feature",
    properties: {
      Title: "The Mall Murders ////// 43  ",
      Release: "8/3/2016",
      URL: "https://truecrimegarage.com/home/blog/the-mall-murders-43",
      Earliest_Date: "12/12/2007",
      Earliest_Year: "2007",
      Notes: "5900 Glades Rd, Boca Raton, FL 33431"
    },
    geometry: {
      coordinates: [-80.135018, 26.368237],
      type: "Point"
    },
    id: "f37e9ff22a098c92338a4bef4e4e3689"
  },
  {
    type: "Feature",
    properties: {
      Title: "Heather Dawn Church /// 339 /// 340",
      Release: "10/1/2019",
      URL: "https://truecrimegarage.com/home/blog/heather-dawn-church-339-340",
      Earliest_Date: "9/17/1991",
      Earliest_Year: "1991",
      Notes: "Eastonville Rd in Black Forest, CO"
    },
    geometry: {
      coordinates: [-104.573586, 39.023755],
      type: "Point"
    },
    id: "f47804257a8145c96f501bda65343be2"
  },
  {
    type: "Feature",
    properties: {
      Title: "Aaron Hernandez ////// 32 ",
      Release: "6/14/2016",
      URL: "https://truecrimegarage.com/home/blog/aaron-hernandez-32",
      Earliest_Date: "9/30/2007",
      Earliest_Year: "2007",
      Notes:
        "1250 west university avenue gainesville fl 32601, area of the car shooting"
    },
    geometry: {
      coordinates: [-82.338508, 29.652732],
      type: "Point"
    },
    id: "f5f04fb1632b2e6354b50d813909da08"
  },
  {
    type: "Feature",
    properties: {
      Title: "Sandy Hook /// Episode 79 & 80",
      Release: "2/7/2017",
      URL: "https://truecrimegarage.com/home/blog/sandy-hook-episode-79-80",
      Earliest_Date: "12/14/2012",
      Earliest_Year: "2012",
      Notes: "12 Dickenson Dr, Sandy Hook, CT 06482"
    },
    geometry: {
      coordinates: [-73.277399, 41.419961],
      type: "Point"
    },
    id: "f9e74627ed2a818b080613b41c12c36f"
  },
  {
    type: "Feature",
    properties: {
      Title: "Ed Gein ////// 49 ",
      Release: "9/6/2016",
      URL: "https://truecrimegarage.com/home/blog/ed-gein-49",
      Earliest_Date: "11/16/1957",
      Earliest_Year: "1957",
      Notes: "Plainfield hardware store "
    },
    geometry: {
      coordinates: [-89.496747, 44.215159],
      type: "Point"
    },
    id: "fa3b7485dc9e83834ea7561aa84f630b"
  },
  {
    type: "Feature",
    properties: {
      Title: "JEFFREY DAHMER//////03",
      Release: "12/3/2015",
      URL: "https://truecrimegarage.com/home/blog/jeffrey-dahmer-03",
      Earliest_Date: "6/18/1978",
      Earliest_Year: "1978",
      Notes: "4480 West Bath Road, Akron, Ohio\n"
    },
    geometry: {
      coordinates: [-81.659738, 41.168508],
      type: "Point"
    },
    id: "fb50710a8cf5e5f45042b91965d1d5aa"
  },
  {
    type: "Feature",
    properties: {
      Title: "The Fort Worth Missing Trio /// 241 /// 242",
      Release: "9/18/2018",
      URL:
        "https://truecrimegarage.com/home/blog/the-fort-worth-missing-trio-241-242",
      Earliest_Date: "12/23/1974",
      Earliest_Year: "1974",
      Notes: "4200 South Freeway in Fort Worth, Texas"
    },
    geometry: {
      coordinates: [-97.324269, 32.684958],
      type: "Point"
    },
    id: "fbf950cbbc7c6b96fe522b0892e2c49e"
  },
  {
    type: "Feature",
    properties: {
      Title: "Barry and Honey Sherman /// 210 /// 211",
      Release: "5/23/2018",
      URL:
        "https://truecrimegarage.com/home/blog/barry-and-honey-sherman-210-211",
      Earliest_Date: "12/14/2017",
      Earliest_Year: "2017",
      Notes: "50 Old Colony Rd North York, ON M2L 2K1, Canada"
    },
    geometry: {
      coordinates: [-79.451244, 43.940123],
      type: "Point"
    },
    id: "fcaeca99065f1084803f686b6f34ce33"
  },
  {
    type: "Feature",
    properties: {
      Title: "The Colonial Parkway Murders /// 226 /// 227 ",
      Release: "7/25/2018",
      URL:
        "https://truecrimegarage.com/home/blog/the-colonial-parkway-murders-226-227",
      Earliest_Date: "10/12/1986",
      Earliest_Year: "1986",
      Notes: "Cheatham Annex Overlook along Colonial Parkway"
    },
    geometry: {
      coordinates: [-76.672939, 37.28257],
      type: "Point"
    },
    id: "fcbab034ac87fb8ef2c73dd9b6c8b8a4"
  },
  {
    type: "Feature",
    properties: {
      Title: "Russell and Shirley Dermond /// 303 /// 304",
      Release: "5/14/2019",
      URL:
        "https://truecrimegarage.com/home/blog/russell-and-shirley-dermond-part-1-303",
      Earliest_Date: "5/6/2014",
      Earliest_Year: "2014",
      Notes:
        "Coordinates of 112 Plantation Dr, Eatonton, GA 31024, the gated community\n"
    },
    geometry: {
      coordinates: [-83.235993, 33.394051],
      type: "Point"
    },
    id: "feeeda3a70a73bbd9021414879a323cd"
  },
  {
    type: "Feature",
    properties: {
      Title: "APRIL TINSLEY ////// 07",
      Release: "12/26/2015",
      URL: "https://truecrimegarage.com/home/blog/april-tinsley-07",
      Earliest_Date: "4/1/1988",
      Earliest_Year: "1988",
      Notes:
        "Coordinates from https://tools.wmflabs.org/geohack/geohack.php?pagename=Murder_of_April_Tinsley&params=41.06008802_N_85.2279480_W_region:US-IN_type:landmark"
    },
    geometry: {
      coordinates: [-85.227948, 41.060088],
      type: "Point"
    },
    id: "ff816b595e1fe6ff19590266aee56f18"
  },
  {
    type: "Feature",
    properties: {
      Title: "Channon Christian and Christoper Newsom ////// 258",
      Release: "11/20/2018",
      URL:
        "https://truecrimegarage.com/home/blog/channon-christian-and-chris-newsom-258",
      Earliest_Date: "1/6/2007",
      Earliest_Year: "2007",
      Notes:
        "Washington Ridge apartment complex 3101 Washington Ridge Way, Knoxville, TN 37917"
    },
    geometry: {
      coordinates: [-83.888146, 36.021835],
      type: "Point"
    },
    id: "ffc81eca68f53319e3e7ae87c1c5764e"
  }
];

let sortedFeatures = generatedFeatures.sort(function(a, b) {
  // Turn your strings into dates, and then subtract them
  // to get a value that is either negative, positive, or zero.
  return new Date(b.properties.Release) - new Date(a.properties.Release);
});

let episodes = {
  type: "FeatureCollection",
  features: sortedFeatures
};

function buildLocationList(data) {
  console.log("asd;lkjasd;f");
  data.features.forEach(function(episode, i) {
    /**
     * Create a shortcut for `store.properties`,
     * which will be used several times below.
     **/
    var prop = episode.properties;

    /* Add a new listing section to the sidebar. */
    var listings = document.getElementById("list");
    var listing = listings.appendChild(document.createElement("li"));
    /* Assign a unique `id` to the listing. */
    listing.id = "listing-" + prop.id;
    /* Assign the `item` class to each listing for styling. */
    listing.className = "item";

    /* Add the link to the individual listing created above. */
    var link = listing.appendChild(document.createElement("article"));
    link.className = "title";
    link.dataPosition = i;
    link.innerHTML = `
      <h3>${prop.Title}</h3>
      <p>Release date: ${prop.Release}</p>
      <p>Earliest date: ${prop.Earliest_Date}</p>
      <div class="actions">
        <a href="${prop.URL}">Listen</a>
        <button class="js-fly fly">Zoom</button>
      </div>
    `;

    link.addEventListener("mouseenter", function(e) {
      var clickedListing = data.features[this.dataPosition];
      createPopUp(clickedListing);
      var activeItem = document.getElementsByClassName("active");
      if (activeItem[0]) {
        activeItem[0].classList.remove("active");
      }
      this.parentNode.classList.add("active");

      this.querySelector(".js-fly").addEventListener("click", function() {
        flyToEpisode(clickedListing);
      });
    });
  });
}

episodes.features.forEach(function(episode, i) {
  episode.properties.id = i;
});

function flyToEpisode(currentFeature) {
  map.flyTo({
    center: currentFeature.geometry.coordinates,
    zoom: 10
  });
}

function createPopUp(currentFeature) {
  var popUps = document.getElementsByClassName("mapboxgl-popup");
  /** Check if there is already a popup on the map and if so, remove it */
  if (popUps[0]) popUps[0].remove();

  var popup = new mapboxgl.Popup({ closeOnClick: false })
    .setLngLat(currentFeature.geometry.coordinates)
    .setHTML(
      `<h3>${currentFeature.properties.Title}</h3>
      <p>Release date: ${currentFeature.properties.Release}</p>
      <p>Earliest date: ${currentFeature.properties.Earliest_Date}</p>
      <a href="${currentFeature.properties.URL}">Listen</a>
    `
    )
    .addTo(map);
}

map.on("load", function(e) {
  /* Add the data to your map as a layer */
  map.addLayer({
    id: "locations",
    type: "circle",
    /* Add a GeoJSON source containing place coordinates and information. */
    source: {
      type: "geojson",
      data: episodes
    },
    paint: {
      "circle-radius": 4,
      "circle-color": "#ff040e",
      "circle-stroke-color": "#ffffff",
      "circle-stroke-width": 1
    }
  });

  buildLocationList(episodes);

  const sortRelease = document.querySelector("#release");
  const sortEvent = document.querySelector("#event");
  const sortNewest = document.querySelector("#newest");
  const sortOldest = document.querySelector("#oldest");

  sortRelease.addEventListener("click", function() {
    if (sortNewest.checked) {
      let newestReleases = generatedFeatures.sort(function(a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.properties.Release) - new Date(a.properties.Release);
      });
      var listings = document.getElementById("list");
      listings.innerHTML = "";
      episodes = {
        type: "FeatureCollection",
        features: newestReleases
      };
      buildLocationList(episodes);
    }
    if (sortOldest.checked) {
      let oldestReleases = generatedFeatures.sort(function(a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(a.properties.Release) - new Date(b.properties.Release);
      });
      var listings = document.getElementById("list");
      listings.innerHTML = "";
      episodes = {
        type: "FeatureCollection",
        features: oldestReleases
      };
      buildLocationList(episodes);
    }
  });

  sortEvent.addEventListener("click", function() {
    if (sortNewest.checked) {
      let newestEvents = generatedFeatures.sort(function(a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return (
          new Date(b.properties.Earliest_Date) -
          new Date(a.properties.Earliest_Date)
        );
      });
      var listings = document.getElementById("list");
      listings.innerHTML = "";
      episodes = {
        type: "FeatureCollection",
        features: newestEvents
      };
      buildLocationList(episodes);
    }
    if (sortOldest.checked) {
      let oldestEvents = generatedFeatures.sort(function(a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return (
          new Date(a.properties.Earliest_Date) -
          new Date(b.properties.Earliest_Date)
        );
      });
      var listings = document.getElementById("list");
      listings.innerHTML = "";
      episodes = {
        type: "FeatureCollection",
        features: oldestEvents
      };
      buildLocationList(episodes);
    }
  });

  sortNewest.addEventListener("click", function() {
    if (sortRelease.checked) {
      let newestReleases = generatedFeatures.sort(function(a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.properties.Release) - new Date(a.properties.Release);
      });
      var listings = document.getElementById("list");
      listings.innerHTML = "";
      episodes = {
        type: "FeatureCollection",
        features: newestReleases
      };
      buildLocationList(episodes);
    }
    if (sortEvent.checked) {
      let newestEvents = generatedFeatures.sort(function(a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return (
          new Date(b.properties.Earliest_Date) -
          new Date(a.properties.Earliest_Date)
        );
      });
      var listings = document.getElementById("list");
      listings.innerHTML = "";
      episodes = {
        type: "FeatureCollection",
        features: newestEvents
      };
      buildLocationList(episodes);
    }
  });

  sortOldest.addEventListener("click", function() {
    if (sortRelease.checked) {
      let oldestReleases = generatedFeatures.sort(function(a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(a.properties.Release) - new Date(b.properties.Release);
      });
      var listings = document.getElementById("list");
      listings.innerHTML = "";
      episodes = {
        type: "FeatureCollection",
        features: oldestReleases
      };
      buildLocationList(episodes);
    }
    if (sortEvent.checked) {
      let oldestEvents = generatedFeatures.sort(function(a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return (
          new Date(a.properties.Earliest_Date) -
          new Date(b.properties.Earliest_Date)
        );
      });
      var listings = document.getElementById("list");
      listings.innerHTML = "";
      episodes = {
        type: "FeatureCollection",
        features: oldestEvents
      };
      buildLocationList(episodes);
    }
  });
});

map.on("click", function(e) {
  /* Query the map to determine if a feature in the "locations" layer exists at that point. */
  var features = map.queryRenderedFeatures(e.point, {
    layers: ["locations"]
  });

  /* If yes, then: */
  if (features.length) {
    var clickedPoint = features[0];

    /* Fly to the point */
    flyToEpisode(clickedPoint);

    /* Close all other popups and display popup for clicked store */
    createPopUp(clickedPoint);

    /* Highlight listing in sidebar (and remove highlight for all other listings) */
    var activeItem = document.getElementsByClassName("active");
    if (activeItem[0]) {
      activeItem[0].classList.remove("active");
    }
    var listing = document.getElementById(
      "listing-" + clickedPoint.properties.id
    );
    listing.classList.add("active");
    listing.scrollIntoView();
  }
});
