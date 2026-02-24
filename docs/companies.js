const allCompanies = [
  {
    "name": "Amazing Treasure Troves LLC",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(786) 719-7332",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Island Antiques LLC",
    "cityName": "Key West",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 38,
    "phoneNumber": "(305) 294-0029",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Sara's Estate Sales",
    "cityName": "Marathon",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(305) 240-0074",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/154094/638107906273337575.jpg"
  },
  {
    "name": "Aah Certified Appraiser & Estate Sales LLC",
    "cityName": "Key Largo",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(305) 304-8650",
    "websiteUrl": "http://www.appraiserestatesales.com",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/9428/635499344190963817.jpg"
  },
  {
    "name": "Auction In The Keys LLC",
    "cityName": "Summerland Key",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 8,
    "phoneNumber": "(305) 735-2515",
    "websiteUrl": "http://www.auctioninthekeys.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/149054/637819180950849282.jpg"
  },
  {
    "name": "Susie's Key West Estate Sales",
    "cityName": "Key West",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 18,
    "phoneNumber": "(305) 587-4616",
    "websiteUrl": "http://www.susieskeywestestatesales.net",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/19622/636137133113318704.jpg"
  },
  {
    "name": "Redland Realty And Auction, LLC",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 15,
    "phoneNumber": "(305) 387-7777",
    "websiteUrl": "https://redlandrealtyandauction.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/160400/638845813601508816.jpg"
  },
  {
    "name": "Caring Transitions Of Naples",
    "cityName": "Naples",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(239) 371-4174",
    "websiteUrl": "http://www.caringtransitionsnaples.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/150701/638490803561986623.jpg"
  },
  {
    "name": "Premier Liquidation Services Inc",
    "cityName": "Naples",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(239) 261-2091",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Gills Auction Co & Estate Sales",
    "cityName": "Naples",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(239) 777-5720",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Gallery 41 Consignment",
    "cityName": "Naples",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 4,
    "phoneNumber": "(239) 234-5688",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Paradise Coast Art",
    "cityName": "Naples",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 425,
    "phoneNumber": "(239) 777-5177",
    "websiteUrl": "http://www.paradisecoastart.com",
    "logoUrl": ""
  },
  {
    "name": "Pier&co.",
    "cityName": "Naples",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(239) 272-8787",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Longs Antiques",
    "cityName": "Naples",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 920-1176",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Premiere Gulf Coast Estate Sales",
    "cityName": "Naples",
    "stateCode": "FL",
    "rating": 4.0,
    "reviewCount": 4,
    "phoneNumber": "(772) 480-8187",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "King's Estate Sales & Auctions Naples Florida",
    "cityName": "Naples",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(800) 524-1032",
    "websiteUrl": "https://kingsestatesalesauctionsnaplesfl.com/p",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/154994/638168433847328832.jpg"
  },
  {
    "name": "Dovetails LLC / Auctions Neapolitan",
    "cityName": "Naples",
    "stateCode": "FL",
    "rating": 4.2,
    "reviewCount": 25,
    "phoneNumber": "(239) 262-7333",
    "websiteUrl": "http://www.dovetailsLLC.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/16823/636644165679970049.jpg"
  },
  {
    "name": "Naples Vintage LLC",
    "cityName": "Naples",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(239) 200-4553",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "King's Road Auctions",
    "cityName": "Naples",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(239) 331-7153",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Bluestar Move Management & Estate Sales",
    "cityName": "Bonita Springs",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 11,
    "phoneNumber": "(239) 387-1147",
    "websiteUrl": "https://www.bluestarmoving.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/169904/638957182341776202.jpg"
  },
  {
    "name": "Allegro Estate Sales & Services",
    "cityName": "North Port",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 119,
    "phoneNumber": "(239) 326-3362",
    "websiteUrl": "https://linktr.ee/allegroestatesalesfl",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/134114/638528577734564799.jpg"
  },
  {
    "name": "All About You! Estate Sales",
    "cityName": "Bonita Springs",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 119,
    "phoneNumber": "(847) 489-4471",
    "websiteUrl": "http://www.AllAboutYouEstateSales.com",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/24773/635674629919081083.jpg"
  },
  {
    "name": "CIS Liquidators Naples, FL",
    "cityName": "Naples",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(239) 600-1384",
    "websiteUrl": "http://www.cisliquidators.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/127346/636343547764288597.jpg"
  },
  {
    "name": "River Valley Estate Sales/Naples",
    "cityName": "Naples",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(952) 688-3011",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Estate Sales By Chesterdales",
    "cityName": "Naples",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(239) 262-2224",
    "websiteUrl": "http://www.chesterdales.com",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/36488/635514128459622000.jpg"
  },
  {
    "name": "Estate/design 239",
    "cityName": "Naples",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(678) 793-1170",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Pier&co.",
    "cityName": "Naples",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(239) 777-5177",
    "websiteUrl": "http://www.pierandco.com",
    "logoUrl": ""
  },
  {
    "name": "Gulf Coast Estate Sales",
    "cityName": "Naples",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 119,
    "phoneNumber": "(352) 233-5737",
    "websiteUrl": "http://www.wix.com/EDENHospitality/EDEN%20Hospitality",
    "logoUrl": ""
  },
  {
    "name": "Clearly Quick Estate Services",
    "cityName": "Bonita Springs",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(239) 409-1112",
    "websiteUrl": "https://clearlyquick.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/137987/637048065347402855.jpg"
  },
  {
    "name": "Peacock Avenue Design",
    "cityName": "Bonita Springs",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(215) 284-1416",
    "websiteUrl": "https://maps.app.goo.gl/UoFvFvG6rYJkin8j7?g_st=ic",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/145520/638875215011747371.jpg"
  },
  {
    "name": "D’Anjou Antiques & Estate Sales",
    "cityName": "Naples",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(239) 293-2710",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "The Finer Things",
    "cityName": "Naples",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(516) 676-6979",
    "websiteUrl": "http://finerthingstagsales.com/index.html",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/170915/639014049415753258.jpg"
  },
  {
    "name": "Martin Estate Sales",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(978) 390-8803",
    "websiteUrl": "https://www.martinestatesales.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/28235/638916320912632949.jpg"
  },
  {
    "name": "Remember That!",
    "cityName": "New Lenox",
    "stateCode": "IL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(630) 254-1953",
    "websiteUrl": "http://www.Rememberthatestatesales.com",
    "logoUrl": ""
  },
  {
    "name": "Estate Love of Southwest Florida",
    "cityName": "Naples",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(239) 326-1061",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/145706/637534238861165299.jpg"
  },
  {
    "name": "Burchard Galleries",
    "cityName": "Saint Petersburg",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 821-1167",
    "websiteUrl": "http://www.BurchardGalleries.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/12137/636634613674891810.jpg"
  },
  {
    "name": "Caring Transitions Of Sarasota",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 4.3,
    "reviewCount": 12,
    "phoneNumber": "(941) 702-6070",
    "websiteUrl": "https://www.caringtransitionssarasota.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/146684/638476772749552989.jpg"
  },
  {
    "name": "G.A. Designs & Estate Sales Inc.",
    "cityName": "Fort Lauderdale",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(508) 723-4176",
    "websiteUrl": "https://gadesignsandestatesales.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/144635/637426062822105337.jpg"
  },
  {
    "name": "D.B.A of Kaplan Auctions",
    "cityName": "Hollywood",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(954) 394-8445",
    "websiteUrl": "http://www.kaplanauctions.net",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/20642/638195897682382263.jpg"
  },
  {
    "name": "Quick Estate Liquidators, Inc",
    "cityName": "Hialeah",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(786) 953-4540",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "D Auction LLC",
    "cityName": "Pompano Beach",
    "stateCode": "FL",
    "rating": 4.3,
    "reviewCount": 6,
    "phoneNumber": "(954) 562-0648",
    "websiteUrl": "http://www.dauctioncompany.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/133334/636427619287668126.jpg"
  },
  {
    "name": "A1 Auto Movers",
    "cityName": "Homestead",
    "stateCode": "FL",
    "rating": 4.1,
    "reviewCount": 22,
    "phoneNumber": "(786) 765-7163",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "White Rabbit",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(305) 753-3895",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/128897/636038686593535949.jpg"
  },
  {
    "name": "Abel Estate Sales",
    "cityName": "Palm Beach Gardens",
    "stateCode": "FL",
    "rating": 4.1,
    "reviewCount": 203,
    "phoneNumber": "(561) 293-6611",
    "websiteUrl": "",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/28571/635622839225614474.jpg"
  },
  {
    "name": "Prime Auction Solutions",
    "cityName": "West Palm Beach",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 5,
    "phoneNumber": "(703) 889-8949",
    "websiteUrl": "https://www.primeauctionsolutions.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/142457/637222966049486575.jpg"
  },
  {
    "name": "Magic City Antiques LLC",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(305) 484-5074",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Miami Estate Sales By Norma",
    "cityName": "Hialeah",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 1,
    "phoneNumber": "(305) 733-4177",
    "websiteUrl": "http://www.miamiestatesalesbynorma.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/134399/636556166757571762.jpg"
  },
  {
    "name": "Curiously Beautiful",
    "cityName": "Delray Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(561) 376-7339",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Upscale Furniture and Accessories Estate Sale",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 4.9,
    "reviewCount": 55,
    "phoneNumber": "(305) 491-5651",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Everything But The Katz",
    "cityName": "Fort Lauderdale",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(954) 868-7704",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Little Birds",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(305) 528-4971",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Beautiful Sales",
    "cityName": "Miami Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(305) 555-1212",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "East Coast Fine Arts LLC",
    "cityName": "West Palm Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(561) 345-3627",
    "websiteUrl": "http://www.eastcoastfinearts.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/128696/636014449022640394.jpg"
  },
  {
    "name": "Fields Auction Service",
    "cityName": "West Palm Beach",
    "stateCode": "FL",
    "rating": 3.5,
    "reviewCount": 53,
    "phoneNumber": "(561) 844-0440",
    "websiteUrl": "http://www.FieldsAuction.net",
    "logoUrl": ""
  },
  {
    "name": "Lily & Sons Estate Liquidations",
    "cityName": "Fort Lauderdale",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(954) 999-9788",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/163166/638542500843174561.jpg"
  },
  {
    "name": "Art Estate Sales",
    "cityName": "West Palm Beach",
    "stateCode": "FL",
    "rating": 4.7,
    "reviewCount": 12,
    "phoneNumber": "(561) 727-8796",
    "websiteUrl": "https://chicagofineart.artweb.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/130268/636176268686988364.jpg"
  },
  {
    "name": "Allure Antique Auction Company",
    "cityName": "Boca Raton",
    "stateCode": "FL",
    "rating": 1.0,
    "reviewCount": 1,
    "phoneNumber": "(305) 479-3719",
    "websiteUrl": "http://www.allureantiqueco.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/141125/637071745650199532.jpg"
  },
  {
    "name": "Courtyard Gardens Senior Living",
    "cityName": "Boynton Beach",
    "stateCode": "FL",
    "rating": 4.7,
    "reviewCount": 51,
    "phoneNumber": "(561) 317-8902",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Robbie's Estate Sales Inc",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(786) 218-1692",
    "websiteUrl": "http://www.robbiesestatesales.com",
    "logoUrl": ""
  },
  {
    "name": "Estate Sales By Lily",
    "cityName": "Hollywood",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(954) 450-5050",
    "websiteUrl": "http://www.estatesalesbylily.com",
    "logoUrl": ""
  },
  {
    "name": "Pandora Antiques, LLC",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(786) 473-1128",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Above And Beyond Estate Sales, Inc.",
    "cityName": "Fort Lauderdale",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(954) 540-4612",
    "websiteUrl": "http://www.AboveandBeyondSales.net",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/143762/637352604436277426.jpg"
  },
  {
    "name": "Monday Estate Services",
    "cityName": "Boca Raton",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(754) 315-5355",
    "websiteUrl": "http://www.MondayEstate.com",
    "logoUrl": ""
  },
  {
    "name": "Robbybuys",
    "cityName": "Fort Lauderdale",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(804) 239-3421",
    "websiteUrl": "https://robbybuys.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/145571/637524791955091244.jpg"
  },
  {
    "name": "Distinct Discoveries Estate Sales & Services",
    "cityName": "Pompano Beach",
    "stateCode": "FL",
    "rating": 4.1,
    "reviewCount": 203,
    "phoneNumber": "(754) 333-1320",
    "websiteUrl": "http://www.SouthFloridaEstateSales.net",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/162491/638525206770932057.jpg"
  },
  {
    "name": "Sunset Auction Co",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 42,
    "phoneNumber": "(305) 926-8864",
    "websiteUrl": "http://www.SunsetAuctionCo.com",
    "logoUrl": ""
  },
  {
    "name": "Antique And Vintage Corp",
    "cityName": "Dania",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(863) 610-0201",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/77048/635985037254711192.jpg"
  },
  {
    "name": "Maggiordomo Estate Services LLC",
    "cityName": "Fort Lauderdale",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(305) 610-3376",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "The Real Real",
    "cityName": "Miami Beach",
    "stateCode": "FL",
    "rating": 4.4,
    "reviewCount": 164,
    "phoneNumber": "(917) 865-3462",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/153788/638090521971908933.jpg"
  },
  {
    "name": "Blue Moon Estate Sales Of Miami And Palm Beach, Florida",
    "cityName": "Palm Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(305) 769-8088",
    "websiteUrl": "https://www.bluemoonestatesales.com/Miami-Beach/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/151040/637993273506289641.jpg"
  },
  {
    "name": "Omni Auction Corp",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 1,
    "phoneNumber": "(954) 274-2451",
    "websiteUrl": "https://coin-buyer-near-me.com/en",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/142862/637280948076017777.jpg"
  },
  {
    "name": "I95 Auctions",
    "cityName": "Delray Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(561) 265-3837",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Perfection in Estate Sales",
    "cityName": "Jupiter",
    "stateCode": "FL",
    "rating": 3.8,
    "reviewCount": 61,
    "phoneNumber": "(561) 290-3952",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Estate Of Peace",
    "cityName": "Lake Worth",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(561) 523-8233",
    "websiteUrl": "http://www.estateofpeace.com",
    "logoUrl": ""
  },
  {
    "name": "Akiba Antiques Auction Gallery",
    "cityName": "Dania",
    "stateCode": "FL",
    "rating": 4.0,
    "reviewCount": 39,
    "phoneNumber": "(305) 332-9274",
    "websiteUrl": "http://www.akibagalleries.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/143795/638113334512123584.jpg"
  },
  {
    "name": "Zan Estate Buyers Unlimeted",
    "cityName": "Boca Raton",
    "stateCode": "FL",
    "rating": 4.9,
    "reviewCount": 266,
    "phoneNumber": "(561) 542-4445",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Caring Transitions Of Fort Lauderdale East",
    "cityName": "Fort Lauderdale",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(954) 627-1942",
    "websiteUrl": "https://www.caringtransitionsfortlauderdaleeast.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/155234/638248900873423885.jpg"
  },
  {
    "name": "Foh, Inc",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(305) 757-7940",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Heavenly Estate Sales",
    "cityName": "West Palm Beach",
    "stateCode": "FL",
    "rating": 4.2,
    "reviewCount": 5,
    "phoneNumber": "(561) 512-0541",
    "websiteUrl": "http://www.heavenlyestatesales.com",
    "logoUrl": ""
  },
  {
    "name": "Inherited Antiques & Estate Liquidations",
    "cityName": "Fort Lauderdale",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(954) 658-0168",
    "websiteUrl": "http://www.Inheritedantiquesales.com",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/123200/635793309427679681.jpg"
  },
  {
    "name": "The Polished Mango",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(305) 915-3464",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Style Haus Estate Sales",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(305) 205-2594",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Farmstead Estate Sales And Antiques",
    "cityName": "Jupiter",
    "stateCode": "FL",
    "rating": 4.1,
    "reviewCount": 203,
    "phoneNumber": "(561) 801-0111",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Worthy Spaces",
    "cityName": "Boca Raton",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(561) 289-4140",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Webuyanyestates.com",
    "cityName": "Pompano Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(561) 817-0800",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Church Of Mod",
    "cityName": "Fort Lauderdale",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 280,
    "phoneNumber": "(305) 776-4425",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/147086/637637736168475085.jpg"
  },
  {
    "name": "Antiques & Art International",
    "cityName": "Boynton Beach",
    "stateCode": "FL",
    "rating": 4.3,
    "reviewCount": 6,
    "phoneNumber": "(561) 818-8383",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/159635/638453494055215716.jpg"
  },
  {
    "name": "Eloquent Sales LLC.",
    "cityName": "Delray Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(954) 736-8357",
    "websiteUrl": "http://www.eloquentsales.com",
    "logoUrl": ""
  },
  {
    "name": "Moecker Auctions, Inc.",
    "cityName": "Fort Lauderdale",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 25,
    "phoneNumber": "(954) 252-2887",
    "websiteUrl": "http://www.moeckerauctions.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/33776/636118211637352638.jpg"
  },
  {
    "name": "South Florida Estate Sales",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 4.9,
    "reviewCount": 55,
    "phoneNumber": "(954) 701-6911",
    "websiteUrl": "http://www.southfloridaestatesales.com",
    "logoUrl": ""
  },
  {
    "name": "Taylor Made Estate Sales",
    "cityName": "North Palm Beach",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 6,
    "phoneNumber": "(954) 816-9904",
    "websiteUrl": "",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/26162/635747471870975991.jpg"
  },
  {
    "name": "Auction Gallery Of Boca Raton",
    "cityName": "Lake Worth",
    "stateCode": "FL",
    "rating": 3.9,
    "reviewCount": 24,
    "phoneNumber": "(561) 755-9800",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Longobardi Antiques",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(305) 979-1317",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Auction Life",
    "cityName": "Boca Raton",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(561) 757-1551",
    "websiteUrl": "http://www.auctionlifeflorida.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/129050/636766377844473633.jpg"
  },
  {
    "name": "A Better Option Estates & Antiques",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(305) 204-7876",
    "websiteUrl": "",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/78791/635684160860887954.jpg"
  },
  {
    "name": "White Hound Ventures LLC",
    "cityName": "Pompano Beach",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 1,
    "phoneNumber": "(954) 895-2786",
    "websiteUrl": "http://www.whitehoundventures.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/146156/637565442180982372.jpg"
  },
  {
    "name": "Tags To Riches",
    "cityName": "Boca Raton",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 350,
    "phoneNumber": "(207) 441-4135",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Treasure Box Estate Sales",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(786) 216-8851",
    "websiteUrl": "http://treasureboxestatesales.com",
    "logoUrl": ""
  },
  {
    "name": "Paul Reyes Auction Co.",
    "cityName": "Hollywood",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(954) 922-2830",
    "websiteUrl": "http://www.landmarkartgallery.com",
    "logoUrl": ""
  },
  {
    "name": "Sobeart Absolute Estate Sales",
    "cityName": "Fort Lauderdale",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(305) 318-2527",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Auctionbid Inc",
    "cityName": "Delray Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(561) 501-7135",
    "websiteUrl": "http://www.auctionbid.hibid.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/147464/637667510298354693.jpg"
  },
  {
    "name": "The Collected Estate",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(310) 874-2253",
    "websiteUrl": "http://www.thecollectedestate.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/139970/636977676496439929.jpg"
  },
  {
    "name": "Family Thrift Auctions LLC",
    "cityName": "Fort Lauderdale",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(954) 300-1313",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Palm Beach Estate Sale Liquidators/Interior Designers of Palm Beach",
    "cityName": "West Palm Beach",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 6,
    "phoneNumber": "(720) 985-6327",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Blue Orchid Estate Sales, LLC",
    "cityName": "Jupiter",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 24,
    "phoneNumber": "(561) 339-0381",
    "websiteUrl": "http://blueorchidestatesales.com",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/33596/635495926489355718.jpg"
  },
  {
    "name": "Cash For Clutter",
    "cityName": "Boca Raton",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(954) 328-4747",
    "websiteUrl": "http://www.cashforclutter.net",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/130034/636139728409944761.jpg"
  },
  {
    "name": "Estate Sales By Rajean",
    "cityName": "West Palm Beach",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 6,
    "phoneNumber": "(561) 248-1222",
    "websiteUrl": "http://www.EstateSalesByRajean.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/148682/637790069777422256.jpg"
  },
  {
    "name": "Gold Coast Liquidation",
    "cityName": "Fort Lauderdale",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(907) 953-9698",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Coral Gables Auction",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 3.7,
    "reviewCount": 40,
    "phoneNumber": "(786) 542-1658",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/157919/638346322767143298.jpg"
  },
  {
    "name": "House Of Craven Auction House",
    "cityName": "West Palm Beach",
    "stateCode": "FL",
    "rating": 3.0,
    "reviewCount": 8,
    "phoneNumber": "(305) 769-8088",
    "websiteUrl": "http://www.houseofcraven.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/162650/638512897544468447.jpg"
  },
  {
    "name": "The Dynamic Duo",
    "cityName": "Delray Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(561) 504-1462",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Down to Business Estate Sales",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 4.9,
    "reviewCount": 55,
    "phoneNumber": "(786) 649-7530",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/165674/638697159887286701.jpg"
  },
  {
    "name": "Merchandise Management Associates, Inc",
    "cityName": "West Palm Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(561) 232-8445",
    "websiteUrl": "http://www.eclecticpatina.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/26945/638624617277151094.jpg"
  },
  {
    "name": "Jennifer van Weert Vintage",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(786) 833-5744",
    "websiteUrl": "http://www.jennifervanweertvintage.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/134498/636652954099045649.jpg"
  },
  {
    "name": "Estate Sales Of South Florida",
    "cityName": "West Palm Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(561) 667-0552",
    "websiteUrl": "http://www.estatesalesofsouthflorida.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/16697/635930658607553531.jpg"
  },
  {
    "name": "Big Bush",
    "cityName": "Lake Worth",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(561) 445-4577",
    "websiteUrl": "http://www.fengsway.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/166463/638810544832291030.jpg"
  },
  {
    "name": "Blue Moon Estate Sales Of Ft. Lauderdale, Hollywood, & Miami",
    "cityName": "Hollywood",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(954) 707-9772",
    "websiteUrl": "https://www.bluemoonestatesales.com/ftlauderdale-miami/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/150329/637910946867486700.jpg"
  },
  {
    "name": "Hill Auction Gallery",
    "cityName": "Fort Lauderdale",
    "stateCode": "FL",
    "rating": 4.9,
    "reviewCount": 187,
    "phoneNumber": "(305) 216-1561",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/123797/637425328681619230.jpg"
  },
  {
    "name": "Oldngold",
    "cityName": "Lake Worth",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(772) 284-1902",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Legacy Estate & Home Furnishings Consignment",
    "cityName": "Boca Raton",
    "stateCode": "FL",
    "rating": 4.1,
    "reviewCount": 47,
    "phoneNumber": "(561) 409-2126",
    "websiteUrl": "https://www.legacyfurnitureconsignment.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/27647/637533430088415373.jpg"
  },
  {
    "name": "Prestige Auctions Inc",
    "cityName": "Coral Springs",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 156,
    "phoneNumber": "(954) 696-8017",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Bid2win Auction Company",
    "cityName": "Boynton Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(561) 818-3900",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/163190/638873200949237331.jpg"
  },
  {
    "name": "Platinum Auction Group & Estate Sales",
    "cityName": "Boca Raton",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(561) 360-5475",
    "websiteUrl": "http://platinumauctiongroup.com/index.htm",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/136619/636698514090544890.jpg"
  },
  {
    "name": "Auction Company of America",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 2.8,
    "reviewCount": 12,
    "phoneNumber": "(305) 573-1616",
    "websiteUrl": "http://www.AuctionCompanyofAmerica.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/13079/636189834891665861.jpg"
  },
  {
    "name": "DMI AUCTIONS",
    "cityName": "Pompano Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(954) 977-5200",
    "websiteUrl": "http://WWW.DMILiveAuctions.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/168554/638885754085613262.jpg"
  },
  {
    "name": "Feminine Touch Auctioneers",
    "cityName": "Pompano Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(954) 610-8255",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Charles Auction & Estate Services, Inc.",
    "cityName": "Boca Raton",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(561) 350-8368",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Cutler Bay Auctions",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(305) 232-3370",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/157937/638346335910647224.jpg"
  },
  {
    "name": "Broward Auction Gallery",
    "cityName": "Dania",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(786) 320-0344",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/159653/638453545687520417.jpg"
  },
  {
    "name": "Minerva Gallery",
    "cityName": "Fort Lauderdale",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 3,
    "phoneNumber": "(719) 646-3782",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Wensly Auctions",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 1,
    "phoneNumber": "(786) 216-3090",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Commongroundfinds (cloud 10 Arts And Collectibles)",
    "cityName": "Deerfield Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(561) 659-4432",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Ace Art Auction",
    "cityName": "Fort Lauderdale",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(561) 506-5529",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Deluxe Fine Art",
    "cityName": "Boca Raton",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(561) 302-6927",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Archangels Estate Sales",
    "cityName": "Hollywood",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(954) 589-2010",
    "websiteUrl": "http://www.archangelsestatesales.com",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/123131/635808900565229572.jpg"
  },
  {
    "name": "Jupiter Auction",
    "cityName": "Jupiter",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(561) 823-3995",
    "websiteUrl": "https://jupiterauction.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/158576/638405271157728836.jpg"
  },
  {
    "name": "Usa Antiques",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(786) 239-2493",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Wilton Art",
    "cityName": "Fort Lauderdale",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 4,
    "phoneNumber": "(954) 295-5033",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Alex Slato Auctions",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 5,
    "phoneNumber": "(562) 225-6013",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Gonzalez Art House",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(561) 562-9397",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "A Second Act",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(305) 495-6291",
    "websiteUrl": "http://www.asecondact.net",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/157085/638501851862481494.jpg"
  },
  {
    "name": "Organizedflownorth@gmail.com",
    "cityName": "Lake Worth",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(561) 693-7447",
    "websiteUrl": "http://www.onendoneorganizing.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/152123/638169509585480640.jpg"
  },
  {
    "name": "Bremmer & Bremmer Appraisers & Estate Liquidators",
    "cityName": "West Palm Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(561) 352-0447",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/144641/637484102095811490.jpg"
  },
  {
    "name": "All Florida Liquidators",
    "cityName": "Sanford",
    "stateCode": "FL",
    "rating": 4.3,
    "reviewCount": 11,
    "phoneNumber": "(407) 321-2211",
    "websiteUrl": "http://www.liquidatefl.com",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/6557/635699091634259328.jpg"
  },
  {
    "name": "Estate Sales With Rebecca",
    "cityName": "Lake Worth",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 10,
    "phoneNumber": "(561) 901-9026",
    "websiteUrl": "http://www.estatesaleswithrebecca.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/162611/638537318665763324.jpg"
  },
  {
    "name": "A World Of Memories",
    "cityName": "Fort Lauderdale",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(954) 294-8488",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/26597/636289304378188794.jpg"
  },
  {
    "name": "Lori-Gold Ent",
    "cityName": "Miami Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(786) 285-2708",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Blue Moon Estate Sales - Boca Raton",
    "cityName": "Boca Raton",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(561) 264-7455",
    "websiteUrl": "https://www.bluemoonestatesales.com/Boca-Raton/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/151112/637968828231624511.jpg"
  },
  {
    "name": "Antiqueboca",
    "cityName": "Pompano Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(561) 705-7057",
    "websiteUrl": "http://www.lipsonauction.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/129260/636173616731655388.jpg"
  },
  {
    "name": "Clear Estate Sales",
    "cityName": "Miami Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(786) 949-2901",
    "websiteUrl": "https://clearestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/170009/639011014866498718.jpg"
  },
  {
    "name": "One Mans Junk LLC",
    "cityName": "West Palm Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(561) 797-4293",
    "websiteUrl": "https://onemansjunkonline.godaddysites.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/146750/638118288669075926.jpg"
  },
  {
    "name": "Cash From Treasures",
    "cityName": "Dania",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 101,
    "phoneNumber": "(954) 559-7911",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "B&F Estate Sales",
    "cityName": "Fort Lauderdale",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(954) 401-2222",
    "websiteUrl": "http://www.estatesalesfl.net",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/12611/635526306306832357.jpg"
  },
  {
    "name": "Cws Marketing Group",
    "cityName": "Dayton",
    "stateCode": "NJ",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(855) 463-3183",
    "websiteUrl": "http://www.cwsmarketing.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/33527/636338618562725475.jpg"
  },
  {
    "name": "Family Matters Estate Sales",
    "cityName": "Hialeah",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(954) 445-2097",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Auction Wallstreet LLC",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 21,
    "phoneNumber": "(305) 676-2137",
    "websiteUrl": "http://www.auctionwallstreet.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/160010/638983392474390236.jpg"
  },
  {
    "name": "Ondina",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(305) 281-9113",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Palm Beach Estate Sale",
    "cityName": "Fort Lauderdale",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 37,
    "phoneNumber": "(561) 485-3313",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/171443/639063498255942886.jpg"
  },
  {
    "name": "Barreto Estate Sales",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(786) 945-1338",
    "websiteUrl": "http://www.barretoestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/159890/638461445169378092.jpg"
  },
  {
    "name": "11th Way",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(305) 395-0064",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/171581/639066392072487197.jpg"
  },
  {
    "name": "Back In Time Ventures, Inc",
    "cityName": "Pompano Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(954) 830-8130",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/166673/638782773260541367.jpg"
  },
  {
    "name": "Estate Sales By Rita",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(305) 323-9322",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Baron Estate Sales",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(305) 205-5028",
    "websiteUrl": "http://www.baronestatesales.com",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/4550/635506081336518224.jpg"
  },
  {
    "name": "Lakeshore Auction",
    "cityName": "West Palm Beach",
    "stateCode": "FL",
    "rating": 4.9,
    "reviewCount": 30,
    "phoneNumber": "(561) 267-3765",
    "websiteUrl": "http://www.thelakeshoreauction.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/131507/638539365185826270.jpg"
  },
  {
    "name": "Miami Vintage 305 LLC",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 31,
    "phoneNumber": "(786) 494-7496",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Redland Auction Co.",
    "cityName": "Homestead",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 15,
    "phoneNumber": "(305) 401-0747",
    "websiteUrl": "http://redlandauctionco.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/135719/636638428608917164.jpg"
  },
  {
    "name": "Two Ladies 2 The Rescue!",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(305) 968-7497",
    "websiteUrl": "http://www.twoladies2therescue.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/22154/636070498510440459.jpg"
  },
  {
    "name": "Acclaim Estate Sales, Inc.",
    "cityName": "Fort Lauderdale",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(954) 901-7710",
    "websiteUrl": "http://www.acclaim-usa.com",
    "logoUrl": ""
  },
  {
    "name": "Top 100 Sales",
    "cityName": "Boca Raton",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(516) 946-3888",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Vintage To Modern Estate Sale Inc.",
    "cityName": "Homestead",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 2,
    "phoneNumber": "(786) 283-1997",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/142586/637249911118804990.jpg"
  },
  {
    "name": "J&B Global Enterprise LLC",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 9,
    "phoneNumber": "(305) 450-9591",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Randall's Relics",
    "cityName": "Fort Lauderdale",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(914) 776-4890",
    "websiteUrl": "http://WWW.RandallsRelics.com",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/105320/635732175062411490.jpg"
  },
  {
    "name": "South Florida Estate Sales",
    "cityName": "Boca Raton",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(800) 974-2609",
    "websiteUrl": "http://www.southfloridaestatesales.com",
    "logoUrl": ""
  },
  {
    "name": "All Estate Liquidators Llc",
    "cityName": "Fort Lauderdale",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(954) 568-2420",
    "websiteUrl": "http://www.allestateliquidators.com",
    "logoUrl": ""
  },
  {
    "name": "Estate Services Appraisals",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(305) 442-8743",
    "websiteUrl": "http://allestateservicesappraisals.com",
    "logoUrl": ""
  },
  {
    "name": "Galeria 111",
    "cityName": "Lake Worth",
    "stateCode": "FL",
    "rating": 4.7,
    "reviewCount": 121,
    "phoneNumber": "(847) 471-7333",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Interealty Exchange",
    "cityName": "Miami Beach",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 19,
    "phoneNumber": "(305) 397-8196",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Florat Jewel Y Corp",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 22,
    "phoneNumber": "(305) 232-3370",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/143909/637365692015683275.jpg"
  },
  {
    "name": "Plums",
    "cityName": "Palm Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(561) 301-8052",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Everything But The Cat",
    "cityName": "Fort Lauderdale",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 2,
    "phoneNumber": "(954) 530-6798",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/140099/636989044925964520.jpg"
  },
  {
    "name": "Boca Raton Estate Sales",
    "cityName": "Boca Raton",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(305) 434-2166",
    "websiteUrl": "http://www.bocaratonestatesales.comp",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/119870/635770048572030154.jpg"
  },
  {
    "name": "Paradise Alley",
    "cityName": "Palm Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(561) 650-0044",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Harvest Auctions And Estate Sales",
    "cityName": "Delray Beach",
    "stateCode": "FL",
    "rating": 4.1,
    "reviewCount": 203,
    "phoneNumber": "(561) 654-0869",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Red Wagon Estate Sales Inc",
    "cityName": "Fort Lauderdale",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(561) 927-5034",
    "websiteUrl": "https://www.facebook.com/redwagonestatesales123",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/26996/637550904887485023.jpg"
  },
  {
    "name": "China Bay Trading Company",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 1,
    "phoneNumber": "(786) 487-2388",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Invest Wiz",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(305) 424-9950",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Estate Auction Florida",
    "cityName": "Wellington",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(786) 402-7734",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "J & B Treasures",
    "cityName": "Hollywood",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(954) 699-7767",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Unique & Precious, Inc",
    "cityName": "West Palm Beach",
    "stateCode": "FL",
    "rating": 3.0,
    "reviewCount": 2,
    "phoneNumber": "(551) 317-1230",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Nelidovo 8 LLC",
    "cityName": "Pompano Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(954) 547-4210",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Fineartsold",
    "cityName": "Hollywood",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(305) 205-5232",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Abercrombie Auctions International",
    "cityName": "Hollywood",
    "stateCode": "FL",
    "rating": 3.5,
    "reviewCount": 87,
    "phoneNumber": "(954) 913-9490",
    "websiteUrl": "http://www.aaibids.com",
    "logoUrl": ""
  },
  {
    "name": "Mister Miscellanea LLC",
    "cityName": "Fort Lauderdale",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(954) 595-8833",
    "websiteUrl": "http://www.mistermisc.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/134195/636536101172967730.jpg"
  },
  {
    "name": "Palm Beach Estate Sales By Nancy",
    "cityName": "West Palm Beach",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 6,
    "phoneNumber": "(561) 818-3171",
    "websiteUrl": "http://www.palmbeachestatesalesbynancy.com",
    "logoUrl": ""
  },
  {
    "name": "Absolute Estate Sales & Appraisals, LLC.",
    "cityName": "Pembroke Pines",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(954) 881-6216",
    "websiteUrl": "https://myabsoluteestatesales.net",
    "logoUrl": ""
  },
  {
    "name": "West Palm Beach Estate Sales",
    "cityName": "Loxahatchee",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 6,
    "phoneNumber": "(561) 301-3943",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Majesty Estate Liquidators",
    "cityName": "Fort Lauderdale",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(954) 283-0007",
    "websiteUrl": "https://www.majestyestateliquidators.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/149867/637876393989577865.jpg"
  },
  {
    "name": "Todd Hase",
    "cityName": "West Palm Beach",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 4,
    "phoneNumber": "(561) 249-0200",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/36614/636120553373655276.jpg"
  },
  {
    "name": "Xotic Liquidators",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(305) 776-5657",
    "websiteUrl": "http://www.xoticliquidators.webs.com",
    "logoUrl": ""
  },
  {
    "name": "A Sight To The Past",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(787) 403-8458",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "A Definitely Fantastic Estate Sale",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 4.9,
    "reviewCount": 55,
    "phoneNumber": "(305) 588-2904",
    "websiteUrl": "http://www.definitelyfantastic.com",
    "logoUrl": ""
  },
  {
    "name": "Estate Sales Made Easy",
    "cityName": "Palm Beach Gardens",
    "stateCode": "FL",
    "rating": 4.1,
    "reviewCount": 203,
    "phoneNumber": "(561) 601-6273",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Elite Auctioneers",
    "cityName": "Boca Raton",
    "stateCode": "FL",
    "rating": 4.0,
    "reviewCount": 54,
    "phoneNumber": "(561) 931-2820",
    "websiteUrl": "http://www.eliteauction.com",
    "logoUrl": ""
  },
  {
    "name": "Rodney's Auction LLC",
    "cityName": "Fort Lauderdale",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(954) 327-3557",
    "websiteUrl": "http://www.rodneysauctionllc.com",
    "logoUrl": ""
  },
  {
    "name": "Lake Worth Gold Mine",
    "cityName": "Lake Worth",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 593,
    "phoneNumber": "(561) 246-1581",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Armando Perera Auctions",
    "cityName": "Hialeah",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 4,
    "phoneNumber": "(305) 822-5000",
    "websiteUrl": "http://apamiami.com",
    "logoUrl": ""
  },
  {
    "name": "Napoleon's Fine Art",
    "cityName": "West Palm Beach",
    "stateCode": "FL",
    "rating": 4.4,
    "reviewCount": 29,
    "phoneNumber": "(561) 268-9282",
    "websiteUrl": "http://www.napoleonsfineart.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/141452/637097959217313504.jpg"
  },
  {
    "name": "Landmark Art Gallery Of Dania Beach",
    "cityName": "Dania",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 1,
    "phoneNumber": "(954) 922-2830",
    "websiteUrl": "http://landmarkartgallery.com",
    "logoUrl": ""
  },
  {
    "name": "Three Ladies Estate Sale LLC",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 6,
    "phoneNumber": "(786) 317-6040",
    "websiteUrl": "https://threeladiesestatesale.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/156620/638290083166016838.jpeg"
  },
  {
    "name": "Usa Collectibles",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(682) 333-6683",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Carousel",
    "cityName": "Lake Worth",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(561) 249-6658",
    "websiteUrl": "http://www.carouselantiques.com/main.php?contain=home&mid=1",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/28568/636857544452123905.jpg"
  },
  {
    "name": "Bakers Estate / Furry Friends",
    "cityName": "Jupiter",
    "stateCode": "FL",
    "rating": 4.7,
    "reviewCount": 918,
    "phoneNumber": "(561) 746-8735",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Boca Raton Estate Sales",
    "cityName": "Boca Raton",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(305) 900-7045",
    "websiteUrl": "http://www.bocaratonestatesales.com",
    "logoUrl": ""
  },
  {
    "name": "Sandy's Sales",
    "cityName": "Miami Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(305) 692-0630",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/13472/637669286131024555.jpg"
  },
  {
    "name": "Van Geary Auction Galleries",
    "cityName": "Jupiter",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(561) 412-7321",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Creative Solutions Estate Sales",
    "cityName": "Jupiter",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(561) 240-9316",
    "websiteUrl": "",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/97376/635873617194922556.jpg"
  },
  {
    "name": "Tericorp LLC",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(305) 772-1350",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Estate Sales By Mimi",
    "cityName": "Delray Beach",
    "stateCode": "FL",
    "rating": 3.8,
    "reviewCount": 61,
    "phoneNumber": "(561) 271-3937",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Martin Claire & Co",
    "cityName": "Hallandale",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(954) 558-4582",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/136796/636709040061359808.jpg"
  },
  {
    "name": "Omega Auction Corp",
    "cityName": "Hialeah",
    "stateCode": "FL",
    "rating": 4.7,
    "reviewCount": 110,
    "phoneNumber": "(786) 444-4997",
    "websiteUrl": "http://www.omegaauctioncorp.com",
    "logoUrl": ""
  },
  {
    "name": "Florida Salvage, Inc.",
    "cityName": "Fort Lauderdale",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 4,
    "phoneNumber": "(954) 347-6280",
    "websiteUrl": "http://www.floridasalvage.com",
    "logoUrl": ""
  },
  {
    "name": "BMO ESTATE SALES",
    "cityName": "Lake Worth",
    "stateCode": "FL",
    "rating": 4.1,
    "reviewCount": 203,
    "phoneNumber": "(561) 902-1925",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Beaux Auctions",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(877) 572-1708",
    "websiteUrl": "http://www.liveauctioneers.com/beaux-auctions",
    "logoUrl": ""
  },
  {
    "name": "Downtown Auction LLC",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(306) 456-1617",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/133991/636505259080675021.jpg"
  },
  {
    "name": "Aether Estate Services Miami",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(786) 769-4925",
    "websiteUrl": "https://www.aetherestateservices.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/145100/637680988318243845.jpg"
  },
  {
    "name": "Clear The Clutter",
    "cityName": "West Palm Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(303) 882-3851",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "I.brewster And Company",
    "cityName": "Boca Raton",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(610) 322-3500",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Palm Beach Vintage Home",
    "cityName": "West Palm Beach",
    "stateCode": "FL",
    "rating": 3.6,
    "reviewCount": 21,
    "phoneNumber": "(561) 718-7291",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Custom Consolidation",
    "cityName": "Palm Beach Gardens",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(561) 627-7535",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Global Executive Sales And Auctions",
    "cityName": "Fort Lauderdale",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(754) 246-6765",
    "websiteUrl": "http://www.gesaa.net",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/131747/637356923380143698.jpg"
  },
  {
    "name": "Imperial Real Estate Group",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 3.5,
    "reviewCount": 31,
    "phoneNumber": "(305) 331-9192",
    "websiteUrl": "http://www.irgmiamiluxuryrealestate.com",
    "logoUrl": ""
  },
  {
    "name": "East Coast Luxuries",
    "cityName": "Boca Raton",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(561) 768-1408",
    "websiteUrl": "http://www.eastcoastluxuries.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/127499/635922613160163515.jpg"
  },
  {
    "name": "Curiosities Auction House",
    "cityName": "Fort Lauderdale",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(310) 291-1626",
    "websiteUrl": "http://www.curiositiesauction.com",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/30044/635495926424642778.jpg"
  },
  {
    "name": "AAA Able Estates & Liquidators, Inc.",
    "cityName": "Fort Lauderdale",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(954) 655-7653",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Jupiter Estates & Consignments",
    "cityName": "Jupiter",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(561) 223-0303",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Caring Transitions Of North Broward Florida",
    "cityName": "Hollywood",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(954) 914-5563",
    "websiteUrl": "http://www.caringtransitionsofnorthbroward.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/129239/636065341444503820.jpg"
  },
  {
    "name": "Soclear Soclean Pool Cleaning & Service LLC",
    "cityName": "West Palm Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(404) 218-7408",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Estate Sales Center",
    "cityName": "West Palm Beach",
    "stateCode": "FL",
    "rating": 4.7,
    "reviewCount": 12,
    "phoneNumber": "(561) 719-4190",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/129428/636093818825019784.jpg"
  },
  {
    "name": "Basel Auction House",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 3.8,
    "reviewCount": 8,
    "phoneNumber": "(786) 478-6166",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/157949/638346361187069955.jpg"
  },
  {
    "name": "A Timeless Treasure LLC",
    "cityName": "Lake Worth",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 1,
    "phoneNumber": "(561) 876-3219",
    "websiteUrl": "http://www.atimelesstreasure.com",
    "logoUrl": ""
  },
  {
    "name": "Caza - Estate Sales And Business Liquidation Services",
    "cityName": "Fort Lauderdale",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(954) 465-5555",
    "websiteUrl": "http://www.cazaco.net",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/157397/638322459803932543.jpg"
  },
  {
    "name": "Original Estate Sales",
    "cityName": "Boynton Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(561) 888-4808",
    "websiteUrl": "http://www.OriginalEstateSales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/149720/637865978594692875.jpg"
  },
  {
    "name": "Florida Estate Sales and Auction Company",
    "cityName": "Palm Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(561) 891-0245",
    "websiteUrl": "http://www.floridaestatesales.net",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/138245/636903329353841437.jpg"
  },
  {
    "name": "Auction America Inc",
    "cityName": "Loxahatchee",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(561) 682-3191",
    "websiteUrl": "http://www.2bid4stuff.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/130985/636586207215621745.jpg"
  },
  {
    "name": "Declutter Miami",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(786) 449-8804",
    "websiteUrl": "http://www.dddeclutter.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/144830/637454688193240668.jpg"
  },
  {
    "name": "K & M Auction, Liquidation & Sales",
    "cityName": "Wellington",
    "stateCode": "FL",
    "rating": 2.3,
    "reviewCount": 3,
    "phoneNumber": "(561) 248-5535",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "MiddleManBrokers",
    "cityName": "Fort Lauderdale",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(954) 866-5262",
    "websiteUrl": "http://www.mmbauction.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/12395/638884612510714837.jpg"
  },
  {
    "name": "Art Lovers Anonymous",
    "cityName": "West Palm Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(954) 649-5645",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "The William Wright Collection",
    "cityName": "West Palm Beach",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 2,
    "phoneNumber": "(561) 312-2827",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/144725/637433852848352145.jpg"
  },
  {
    "name": "Omni Auction Corp",
    "cityName": "Hallandale",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 1,
    "phoneNumber": "(305) 494-6793",
    "websiteUrl": "https://www.invaluable.com/auction-house/omni-auction-corp-52yphfit3o",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/139253/637516044259484155.jpg"
  },
  {
    "name": "Elite Auctioneers, LLC",
    "cityName": "Boca Raton",
    "stateCode": "FL",
    "rating": 4.0,
    "reviewCount": 54,
    "phoneNumber": "(561) 931-2820",
    "websiteUrl": "http://www.eliteauction.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/140870/637055533689446403.jpg"
  },
  {
    "name": "Hedge Auctions",
    "cityName": "Fort Lauderdale",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(305) 414-2007",
    "websiteUrl": "https://www.hedge-auctions.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/155267/638183071178914601.jpg"
  },
  {
    "name": "Auctions With Heart, Llc.",
    "cityName": "Delray Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(702) 823-6460",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/146966/637628267269052753.jpg"
  },
  {
    "name": "Southfloridabuyers Estate Buyer",
    "cityName": "Palm Beach",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 17,
    "phoneNumber": "(754) 263-6185",
    "websiteUrl": "http://www.southfloridabuyers.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/123800/638851976288836354.jpg"
  },
  {
    "name": "Cristi Medina",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(786) 443-2127",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/156440/638264973148325215.jpg"
  },
  {
    "name": "Lauro Auctioneers",
    "cityName": "Fort Lauderdale",
    "stateCode": "FL",
    "rating": 4.0,
    "reviewCount": 21,
    "phoneNumber": "(954) 760-9333",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/158762/638418039743836458.jpg"
  },
  {
    "name": "Miami Auctions And Appraisals LLC",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(786) 310-6818",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Cubed Consign & Clean Out",
    "cityName": "Lake Worth",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(561) 427-5008",
    "websiteUrl": "http://www.cubedconsign.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/144659/637429583380983963.jpg"
  },
  {
    "name": "Toby Neverett Auctioneers, Inc.",
    "cityName": "Pompano Beach",
    "stateCode": "FL",
    "rating": 4.1,
    "reviewCount": 17,
    "phoneNumber": "(954) 781-9611",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/159158/638435300546840418.jpg"
  },
  {
    "name": "Cohco Auctions",
    "cityName": "Boynton Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(561) 292-2452",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Art Antique Auction Gallery",
    "cityName": "Hialeah",
    "stateCode": "FL",
    "rating": 4.9,
    "reviewCount": 187,
    "phoneNumber": "(786) 725-1400",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Dynasty Fine Arts",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 4.0,
    "reviewCount": 9,
    "phoneNumber": "(786) 443-2534",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Elegant Estate Sales",
    "cityName": "Fort Lauderdale",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 37,
    "phoneNumber": "(954) 274-7820",
    "websiteUrl": "http://www.elegantestatesalesfl.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/154265/638120414847283818.jpg"
  },
  {
    "name": "Fine Art Acquisitions",
    "cityName": "Fort Lauderdale",
    "stateCode": "FL",
    "rating": 4.4,
    "reviewCount": 8,
    "phoneNumber": "(954) 217-0993",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Blue Moon Estate Sales-palm Beach & The Treasure Coast",
    "cityName": "Delray Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(561) 749-4400",
    "websiteUrl": "https://bluemoonestatesales.com/palm-beach-treasure-coast/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/169061/638913165767321633.jpg"
  },
  {
    "name": "Caring Transitions Of Jupiter",
    "cityName": "Jupiter",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(561) 654-9122",
    "websiteUrl": "http://www.Caringtransitionsofjupiter.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/164618/638640803708188820.jpg"
  },
  {
    "name": "Anzardo's Fine Arts",
    "cityName": "Fort Lauderdale",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(954) 579-2148",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Gilded Curio LLC",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(832) 928-1809",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Show Pony",
    "cityName": "West Palm Beach",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 2,
    "phoneNumber": "(917) 455-9307",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "U.r.d.e. Trade Marketplace",
    "cityName": "Hollywood",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(972) 507-6099 x66",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Luxe Auctioneers, Inc",
    "cityName": "West Palm Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(561) 425-7000",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Live Edge Table Shop",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 2,
    "phoneNumber": "(305) 332-1525",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Ark Auctions Inc",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 2.3,
    "reviewCount": 3,
    "phoneNumber": "(561) 608-0639",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Daniels Antiques",
    "cityName": "Fort Lauderdale",
    "stateCode": "FL",
    "rating": 4.1,
    "reviewCount": 20,
    "phoneNumber": "(786) 910-4414",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Settled In Services, Inc.",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(305) 521-8726",
    "websiteUrl": "http://www.settledinservices.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/146849/637619052392101618.jpg"
  },
  {
    "name": "Grasons Of West Palm Beach, FL",
    "cityName": "North Palm Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(561) 768-4776",
    "websiteUrl": "https://www.grasons.com/west-palm-beach/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/158720/638415658957695628.jpg"
  },
  {
    "name": "Menocal Estate Sales LLC",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(305) 496-2537",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/141446/638014752518787571.jpg"
  },
  {
    "name": "Digital Estate Sales",
    "cityName": "Dania",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(754) 444-7883",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/163121/638536588947929822.jpg"
  },
  {
    "name": "Art And Auction House",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(305) 302-9750",
    "websiteUrl": "http://www.theartandauctionhouse.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/35597/636523366854408780.jpg"
  },
  {
    "name": "James & Jeffrey Estate Sales",
    "cityName": "West Palm Beach",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 1,
    "phoneNumber": "(561) 832-1760",
    "websiteUrl": "https://jamesandjeffrey.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/37514/636162098098363178.jpg"
  },
  {
    "name": "Lori Palmer Estate Sales",
    "cityName": "Bridgewater",
    "stateCode": "NJ",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(732) 809-3382",
    "websiteUrl": "http://www.loripalmerestatesales.com",
    "logoUrl": ""
  },
  {
    "name": "Eagle Auction Gallery Corporation",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 2.1,
    "reviewCount": 7,
    "phoneNumber": "(786) 338-0561",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "One White Orchid",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 4.9,
    "reviewCount": 61,
    "phoneNumber": "(305) 851-5626",
    "websiteUrl": "https://www.OneWhiteOrchid.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/123188/636377295897180768.jpg"
  },
  {
    "name": "Dejavu Estate Liquidators",
    "cityName": "Palm Beach Gardens",
    "stateCode": "FL",
    "rating": 4.1,
    "reviewCount": 203,
    "phoneNumber": "(561) 225-1950",
    "websiteUrl": "http://www.DejaVuEstateLiquidators.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/22391/636294375522134029.jpg"
  },
  {
    "name": "Kofski Estate Sales",
    "cityName": "West Palm Beach",
    "stateCode": "FL",
    "rating": 4.7,
    "reviewCount": 12,
    "phoneNumber": "(561) 585-1976",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Anubis Appraisal & Estate Services, Inc.",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(786) 486-8042",
    "websiteUrl": "http://www.anubisappraisal.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/9158/639053968046708763.jpg"
  },
  {
    "name": "Helping Hands Online Auctions",
    "cityName": "Boynton Beach",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 467,
    "phoneNumber": "(561) 596-1807",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Alilynn's Estates",
    "cityName": "Hollywood",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(202) 706-1282",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Estate Sales By Ellyn",
    "cityName": "Boynton Beach",
    "stateCode": "FL",
    "rating": 3.8,
    "reviewCount": 61,
    "phoneNumber": "(561) 570-7666",
    "websiteUrl": "http://www.ellynestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/153881/638876093873764343.jpg"
  },
  {
    "name": "Freeman's Auction",
    "cityName": "West Palm Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(561) 833-8053",
    "websiteUrl": "https://freemansauction.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/171524/639064293826513801.jpg"
  },
  {
    "name": "State Liquidators",
    "cityName": "Livingston",
    "stateCode": "NJ",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(201) 615-9989",
    "websiteUrl": "http://www.estateliq.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/15920/636433427704806914.jpg"
  },
  {
    "name": "Bond Street Auctions",
    "cityName": "Fort Lauderdale",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 227,
    "phoneNumber": "(404) 732-4183",
    "websiteUrl": "http://www.bondstreetauctions.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/159218/638985157605947239.jpg"
  },
  {
    "name": "Soflo Estate Sale Liquidation Company",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 4.9,
    "reviewCount": 55,
    "phoneNumber": "(786) 472-2848",
    "websiteUrl": "https://www.sofloestatesalesllc.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/155843/638222051869359043.jpg"
  },
  {
    "name": "Antique Mall Y'All",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 4.2,
    "reviewCount": 87,
    "phoneNumber": "(305) 389-3425",
    "websiteUrl": "https://antiquemallyall.co/estate-and-moving-sales",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/132032/636874888615261126.jpg"
  },
  {
    "name": "Don Dinero",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 3.9,
    "reviewCount": 12,
    "phoneNumber": "(786) 484-7296",
    "websiteUrl": "https://DonDineroPawn.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/23369/637953338575168312.jpg"
  },
  {
    "name": "Estate Sales By Matty",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(305) 799-7825",
    "websiteUrl": "http://www.estatesalesbymatty.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/123356/638879471928090776.jpg"
  },
  {
    "name": "Elite Estate Liquidators LLC",
    "cityName": "Delray Beach",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 44,
    "phoneNumber": "(561) 866-8866",
    "websiteUrl": "https://eliteliquidators.vip/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/164456/638629262939338338.jpg"
  },
  {
    "name": "Auctions 4 America",
    "cityName": "Fort Lauderdale",
    "stateCode": "FL",
    "rating": 3.0,
    "reviewCount": 17,
    "phoneNumber": "(754) 204-8617",
    "websiteUrl": "http://auctions4america.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/29150/637578923078704476.jpg"
  },
  {
    "name": "Artistic Antiques Estate Sales and Liquidations",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 2,
    "phoneNumber": "(305) 710-5697",
    "websiteUrl": "http://www.artisticantiques.net/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/36137/635957466520294217.jpg"
  },
  {
    "name": "Pandora Auctions LLC",
    "cityName": "Miami",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 4,
    "phoneNumber": "(305) 429-6038",
    "websiteUrl": "http://www.pandoraauctions.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/151604/637999269552553808.jpg"
  },
  {
    "name": "Shield & Gavel - Auctions And Appraisals",
    "cityName": "Fort Lauderdale",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(954) 801-2198",
    "websiteUrl": "https://www.shieldandgavel.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/153905/638094914353801743.jpg"
  },
  {
    "name": "Élan Estate Sales And Élan Auction Services",
    "cityName": "Fort Myers",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(239) 246-6627",
    "websiteUrl": "http://www.elanestatesales.com",
    "logoUrl": ""
  },
  {
    "name": "Estate Guy",
    "cityName": "Fort Myers",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(630) 635-5474",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/141512/637106594729624971.jpg"
  },
  {
    "name": "Crystal Gross Estate Liquidations",
    "cityName": "Fort Myers",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(239) 464-1346",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Daniel J. Endrizal, III, P.A.",
    "cityName": "Fort Myers",
    "stateCode": "FL",
    "rating": 3.0,
    "reviewCount": 6,
    "phoneNumber": "(239) 728-8555",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Lady Liquidators",
    "cityName": "Fort Myers",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(239) 872-2067",
    "websiteUrl": "http://www.ladyliquidatorsswfl.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/138569/636868327082530843.jpg"
  },
  {
    "name": "A Prestige Estate Services Company",
    "cityName": "Fort Myers",
    "stateCode": "FL",
    "rating": 3.9,
    "reviewCount": 12,
    "phoneNumber": "(239) 449-0409",
    "websiteUrl": "http://www.prestigeestateservices.com",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/24791/635524541482092000.jpg"
  },
  {
    "name": "Allcoast Auction & Realty",
    "cityName": "North Fort Myers",
    "stateCode": "FL",
    "rating": 4.2,
    "reviewCount": 5,
    "phoneNumber": "(239) 242-7661",
    "websiteUrl": "http://www.allcoastauction.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/130817/636229470423337620.jpg"
  },
  {
    "name": "B And S Estate Sales",
    "cityName": "Fort Myers",
    "stateCode": "FL",
    "rating": 4.9,
    "reviewCount": 39,
    "phoneNumber": "(281) 352-2380",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Sell Your Estate",
    "cityName": "Cape Coral",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(239) 677-1320",
    "websiteUrl": "http://www.YourEstateSpecialist.com",
    "logoUrl": ""
  },
  {
    "name": "Action Auctions and Estates",
    "cityName": "Fort Myers",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(239) 560-6037",
    "websiteUrl": "http://www.actionauctionsfl.com",
    "logoUrl": ""
  },
  {
    "name": "Blue Moon Estate Sales Naples & Ft. Myers",
    "cityName": "Lehigh Acres",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(239) 464-0833",
    "websiteUrl": "https://www.bluemoonestatesales.com/naples-ft-myers/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/156011/638234228605765471.jpg"
  },
  {
    "name": "Mullins Appraisal Service",
    "cityName": "Lehigh Acres",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 2,
    "phoneNumber": "(540) 661-2004",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Apollos Treasures",
    "cityName": "Cape Coral",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(224) 558-8914",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Louis Giannettino",
    "cityName": "Cape Coral",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(845) 721-2682",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Family Nest Estates Of Sw Florida",
    "cityName": "Fort Myers",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 1,
    "phoneNumber": "(239) 443-4653",
    "websiteUrl": "http://www.familynestestates.com/FtMyers",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/166355/638760931234342392.jpg"
  },
  {
    "name": "WOW Auction & Estate Sales",
    "cityName": "Fort Myers",
    "stateCode": "FL",
    "rating": 3.8,
    "reviewCount": 33,
    "phoneNumber": "(239) 939-0555",
    "websiteUrl": "http://wowauctionsite.hibid.com/auctions/current?cpage=2&display=50",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/123494/635816379661426919.jpg"
  },
  {
    "name": "Gulfcoast Coin & Jewelry",
    "cityName": "Fort Myers",
    "stateCode": "FL",
    "rating": 4.1,
    "reviewCount": 123,
    "phoneNumber": "(239) 939-5636",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/160826/638585761669892221.jpg"
  },
  {
    "name": "Deming Estate Sales, LLC",
    "cityName": "Bradenton",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 306-2140",
    "websiteUrl": "http://demingestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/11855/636057826156477982.jpg"
  },
  {
    "name": "Encore Estate Sales And Liquidations",
    "cityName": "North Fort Myers",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(239) 339-3994",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Island Time Estate Sales",
    "cityName": "Burlington",
    "stateCode": "WI",
    "rating": 5.0,
    "reviewCount": 3,
    "phoneNumber": "(262) 206-5603",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/168734/638893103948677782.jpg"
  },
  {
    "name": "Bishop Estate Sales And Auctions",
    "cityName": "Cape Coral",
    "stateCode": "FL",
    "rating": 1.0,
    "reviewCount": 1,
    "phoneNumber": "(239) 770-6525",
    "websiteUrl": "http://bishopas.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/171215/639043582949263327.jpg"
  },
  {
    "name": "A Moment In Time Estate Sales Inc.",
    "cityName": "Cape Coral",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 856,
    "phoneNumber": "(239) 980-2389",
    "websiteUrl": "https://billg19776.wixsite.com/amites",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/148220/637728887660230191.jpg"
  },
  {
    "name": "McDaniel Service Center LLC",
    "cityName": "Fort Myers",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(239) 229-0658",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/140948/637318203770384034.jpg"
  },
  {
    "name": "Trunk Of Treasures",
    "cityName": "Cape Coral",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(239) 471-8498",
    "websiteUrl": "http://www.trunkoftreasures.com/",
    "logoUrl": ""
  },
  {
    "name": "Cape Coral Estate Sales & Services",
    "cityName": "Cape Coral",
    "stateCode": "FL",
    "rating": 4.9,
    "reviewCount": 39,
    "phoneNumber": "(239) 574-5417",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "DLS Enterprises",
    "cityName": "Fort Myers",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(239) 482-8661",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Eclectic Anthology",
    "cityName": "Cape Coral",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(239) 628-7379",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "American Pawn Company",
    "cityName": "North Fort Myers",
    "stateCode": "FL",
    "rating": 4.4,
    "reviewCount": 39,
    "phoneNumber": "(239) 656-3409",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Glenn Estate Sales",
    "cityName": "North Fort Myers",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 119,
    "phoneNumber": "(239) 603-3017",
    "websiteUrl": "http://www.glennestatesales.webs.com/",
    "logoUrl": ""
  },
  {
    "name": "Teresa's Antiques & Estate Sales",
    "cityName": "Fort Myers",
    "stateCode": "FL",
    "rating": 4.9,
    "reviewCount": 39,
    "phoneNumber": "(239) 728-2626",
    "websiteUrl": "http://teresasantiques.com",
    "logoUrl": ""
  },
  {
    "name": "Cait's Estate Sales & Emporium of Tampa and Chicagoland",
    "cityName": "Tampa",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(813) 940-2248",
    "websiteUrl": "http://www.caitsestates.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/152207/638040432992192832.jpg"
  },
  {
    "name": "Fort Myers Estate Sales",
    "cityName": "Fort Myers",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 1,
    "phoneNumber": "(239) 223-3423",
    "websiteUrl": "http://fortmyersestatesales.com",
    "logoUrl": ""
  },
  {
    "name": "Premier Estate Liquidators",
    "cityName": "Fort Myers",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(239) 994-1767",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "A & M Estate Sales",
    "cityName": "Fort Myers",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 119,
    "phoneNumber": "(713) 855-0975",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Lee Family Antiques",
    "cityName": "Cape Coral",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(239) 244-1622",
    "websiteUrl": "http://www.LeeFamilyAntiques.com",
    "logoUrl": ""
  },
  {
    "name": "Eyeing The Past",
    "cityName": "Fort Myers",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 64,
    "phoneNumber": "(239) 275-8885",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Gulfcoast Auction Group",
    "cityName": "Fort Myers",
    "stateCode": "FL",
    "rating": 3.7,
    "reviewCount": 269,
    "phoneNumber": "(239) 234-1240",
    "websiteUrl": "http://www.gulfcoastcoin.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/14210/636113618224433703.jpg"
  },
  {
    "name": "Safe Estate Solutions, Llc.",
    "cityName": "Labelle",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 626-2960",
    "websiteUrl": "http://www.safeestatesolutions.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/149816/637872782994763710.jpg"
  },
  {
    "name": "A Prestige Estate Services Company",
    "cityName": "Fort Myers",
    "stateCode": "FL",
    "rating": 3.9,
    "reviewCount": 12,
    "phoneNumber": "(720) 984-9150",
    "websiteUrl": "http://estatesalesfortmyers.com",
    "logoUrl": ""
  },
  {
    "name": "Encore Estate Sales & Liquidations",
    "cityName": "Fort Myers",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(239) 747-8797",
    "websiteUrl": "http://encorefla.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/131114/636396344130833414.jpg"
  },
  {
    "name": "Á Prestige Estate Sales Fort Myers",
    "cityName": "Fort Myers",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 677-8671",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Sunshine Estate Sales",
    "cityName": "Cape Coral",
    "stateCode": "FL",
    "rating": 4.9,
    "reviewCount": 39,
    "phoneNumber": "(239) 233-6022",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/135809/636642616853817035.jpg"
  },
  {
    "name": "Two Brothers Collectors",
    "cityName": "Fort Myers",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 63,
    "phoneNumber": "(239) 549-2099",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Murano Estate Liquidation Services",
    "cityName": "Cape Coral",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(908) 587-6448",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Estate Sales to Garage Sales",
    "cityName": "Fort Myers",
    "stateCode": "FL",
    "rating": 4.9,
    "reviewCount": 39,
    "phoneNumber": "(239) 292-1300",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Bishop Auction Services LLC",
    "cityName": "Fort Myers",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(239) 839-5355",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/159782/638457713718175515.jpg"
  },
  {
    "name": "Asset Liquidators",
    "cityName": "Labelle",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(239) 218-0050",
    "websiteUrl": "http://www.liquidatorsonline.com",
    "logoUrl": ""
  },
  {
    "name": "Aether Estate Sales Co. Southwest Florida",
    "cityName": "Fort Myers",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(239) 451-3137",
    "websiteUrl": "http://www.aetherestateservices.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/130124/638482741983912443.jpg"
  },
  {
    "name": "Techmer Estate Sales",
    "cityName": "Fort Myers",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(239) 287-7269",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Nexus Global Enterprises LLC (dba: Nexus Auctions)",
    "cityName": "Fort Myers",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 640-2517",
    "websiteUrl": "http://www.nexusglobalauctions.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/164024/638595911036815940.jpg"
  },
  {
    "name": "Lala Estate Sales",
    "cityName": "North Fort Myers",
    "stateCode": "FL",
    "rating": 4.9,
    "reviewCount": 39,
    "phoneNumber": "(603) 801-5380",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Sharon L. Hardison & Associates Estate Liquidation Services",
    "cityName": "Punta Gorda",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 505-0372",
    "websiteUrl": "http://www.sharonhardison.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/9107/636059218149211896.jpg"
  },
  {
    "name": "Palma Sola Appraisals and Sales",
    "cityName": "Bradenton",
    "stateCode": "FL",
    "rating": 4.4,
    "reviewCount": 37,
    "phoneNumber": "(941) 792-8401",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/14396/636317764561157258.jpg"
  },
  {
    "name": "Can't Take It With You",
    "cityName": "Venice",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(631) 484-5289",
    "websiteUrl": "http://canttakeitwithyou.net",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/140240/636997833946207438.jpg"
  },
  {
    "name": "Caring Transitions Of Cape Coral Fl",
    "cityName": "Cape Coral",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(239) 789-3737",
    "websiteUrl": "https://ctbids.com/estate-sales/Cape-Coral-FL",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/164561/638648717706828200.jpg"
  },
  {
    "name": "House Of Consignment",
    "cityName": "Cape Coral",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 57,
    "phoneNumber": "(239) 573-8681",
    "websiteUrl": "http://www.houseofconsignment.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/134789/636590572029043314.jpg"
  },
  {
    "name": "McNabb Liquidations & Home Services",
    "cityName": "Fort Myers",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(239) 872-2067",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/153929/638235102343158878.jpg"
  },
  {
    "name": "Appraisals & Sales by Julie McClure, Inc",
    "cityName": "Bradenton",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 746-2100",
    "websiteUrl": "http://www.Appraisals4U.biz",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/3428/638157091021760674.jpg"
  },
  {
    "name": "Ancient Traces International - America",
    "cityName": "Moore Haven",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(002) 398-4917 x96",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "A Spellbound Craft LLC Estate Liquidators",
    "cityName": "Punta Gorda",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(239) 677-8697",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Swfl Auctions & Liquidations",
    "cityName": "North Port",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 204-7482",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Auctions50",
    "cityName": "Punta Gorda",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 979-2529",
    "websiteUrl": "http://www.auctions50.com",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/36548/635495926862660364.jpg"
  },
  {
    "name": "West Coast Auction Company",
    "cityName": "North Port",
    "stateCode": "FL",
    "rating": 4.4,
    "reviewCount": 68,
    "phoneNumber": "(941) 468-7815",
    "websiteUrl": "https://www.WestCoastAuctionCo.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/160382/638483589454177974.jpg"
  },
  {
    "name": "Crimson Estate Services",
    "cityName": "Port Charlotte",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 52,
    "phoneNumber": "(941) 380-7688",
    "websiteUrl": "http://www.crimsonestateservices.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/127778/637881860186920328.jpg"
  },
  {
    "name": "Estate Sales of Southwest Florida Inc.",
    "cityName": "Punta Gorda",
    "stateCode": "FL",
    "rating": 4.9,
    "reviewCount": 39,
    "phoneNumber": "(941) 979-2529",
    "websiteUrl": "http://www.estatesalesofswfl.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/12461/636686575641019660.jpg"
  },
  {
    "name": "Estate Sales Swfl",
    "cityName": "Punta Gorda",
    "stateCode": "FL",
    "rating": 4.9,
    "reviewCount": 39,
    "phoneNumber": "(941) 273-2492",
    "websiteUrl": "http://www.EstatesalesSWFL.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/168119/638859305136292847.jpg"
  },
  {
    "name": "Karin's Causes",
    "cityName": "North Port",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 795-4009",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Florida Estate Sales & Antiquities LLC",
    "cityName": "Venice",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 2,
    "phoneNumber": "(423) 227-9976",
    "websiteUrl": "https://flestatesalesllc.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/170183/638971802052098657.jpg"
  },
  {
    "name": "Sheila's Estate Sales",
    "cityName": "Port Charlotte",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(419) 233-1325",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/155261/638189052037827419.jpg"
  },
  {
    "name": "Estate Sales Specialists",
    "cityName": "Englewood",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 2,
    "phoneNumber": "(941) 475-6273",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Ee Mac Company",
    "cityName": "Punta Gorda",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 916-2692",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "C & M Auction Company",
    "cityName": "Rotonda West",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 830-0282",
    "websiteUrl": "http://www.cmauctioncompany.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/21626/636015445270017460.jpg"
  },
  {
    "name": "Gulf Coast Estate Sales",
    "cityName": "Venice",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 408-8065",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Dunn Wright Estate Services Fl",
    "cityName": "Port Charlotte",
    "stateCode": "FL",
    "rating": 1.0,
    "reviewCount": 1,
    "phoneNumber": "(941) 209-3528",
    "websiteUrl": "http://www.dunnwrightfl.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/144440/637406589322280825.jpg"
  },
  {
    "name": "Our Estate Sales",
    "cityName": "North Port",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 426-7154",
    "websiteUrl": "http://www.ourestatesales.net",
    "logoUrl": ""
  },
  {
    "name": "Auction Diva LLC",
    "cityName": "North Port",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 257-3130",
    "websiteUrl": "http://www.auction-diva.com",
    "logoUrl": ""
  },
  {
    "name": "You, Me & TLC Estate Sale Services",
    "cityName": "Punta Gorda",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 119,
    "phoneNumber": "(231) 420-0100",
    "websiteUrl": "http://www.youmeandtlc.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/142796/637275057769783464.jpg"
  },
  {
    "name": "Englewood Estate Sales & Consignments",
    "cityName": "Venice",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(618) 434-0830",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/168710/638890004122417734.jpg"
  },
  {
    "name": "Fred & Lynne Hall",
    "cityName": "Port Charlotte",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 979-7721",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Sun Coast Estate Sales",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 504-3684",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/129932/636690056437166360.jpg"
  },
  {
    "name": "Gibson Estate Sales",
    "cityName": "Punta Gorda",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(808) 386-4364",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/170378/638979721960687274.jpg"
  },
  {
    "name": "Caring Transitions Of Venice",
    "cityName": "Venice",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(843) 925-7777",
    "websiteUrl": "http://www.caringtransitionsvenice.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/145538/638652828533210967.jpg"
  },
  {
    "name": "Estate Sales by the Ladies of Lake Suzy in Charlotte County",
    "cityName": "Arcadia",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(513) 519-6434",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/140849/638600441357596248.jpg"
  },
  {
    "name": "Premier Estate Sales Of Florida",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 4.0,
    "reviewCount": 4,
    "phoneNumber": "(941) 376-6568",
    "websiteUrl": "http://www.premierestatesalesofflorida.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/127892/635955172699756549.jpg"
  },
  {
    "name": "Premier Estate Sales",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 4.0,
    "reviewCount": 4,
    "phoneNumber": "(941) 376-6568",
    "websiteUrl": "http://premierestatesalesofflorida.com",
    "logoUrl": ""
  },
  {
    "name": "Libby’s Oak Street Treasures",
    "cityName": "Arcadia",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(704) 466-1012",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Florida State Auctions",
    "cityName": "Arcadia",
    "stateCode": "FL",
    "rating": 3.7,
    "reviewCount": 3,
    "phoneNumber": "(727) 773-7829",
    "websiteUrl": "http://www.stateoffloridaauctions.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/155681/638212490017236990.jpg"
  },
  {
    "name": "Trs Estate Sales",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 8,
    "phoneNumber": "(770) 891-9481",
    "websiteUrl": "http://www.trs-estate-sales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/147980/637708660188388190.jpg"
  },
  {
    "name": "Estate Sales of Central Florida",
    "cityName": "Winter Haven",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 16,
    "phoneNumber": "(863) 409-7318",
    "websiteUrl": "http://www.estatesalesofcentralfl.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/12182/636954187906737642.jpg"
  },
  {
    "name": "Miller Estate Liquidators",
    "cityName": "Port Saint Lucie",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(772) 247-1007",
    "websiteUrl": "http://www.MillerEstateLiquidators.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/138824/636889604769518391.jpg"
  },
  {
    "name": "The Great Estate Of Florida",
    "cityName": "Port Saint Lucie",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 25,
    "phoneNumber": "(772) 323-8497",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Estate Sales by Nancy Diane",
    "cityName": "Jensen Beach",
    "stateCode": "FL",
    "rating": 3.8,
    "reviewCount": 61,
    "phoneNumber": "(586) 219-7359",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "The Great Estate Of Fl",
    "cityName": "Port Saint Lucie",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 25,
    "phoneNumber": "(772) 245-0286",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "The Auction Gods, Inc.",
    "cityName": "Jensen Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(772) 242-8534",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/155864/638223455209550190.jpg"
  },
  {
    "name": "Florida Property And Estate Sales",
    "cityName": "Port Saint Lucie",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(772) 444-6695",
    "websiteUrl": "http://www.FLORIDAPROPERTYANDESTATESALES.com",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/58973/635648195185041221.jpg"
  },
  {
    "name": "Bernard's Treasures",
    "cityName": "Palm City",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(772) 210-6161",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "St Lucie Auctions",
    "cityName": "Port Saint Lucie",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(954) 931-3284",
    "websiteUrl": "http://stlucieauctions.com",
    "logoUrl": ""
  },
  {
    "name": "Premier Estate Consignments",
    "cityName": "Port Saint Lucie",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(772) 812-5396",
    "websiteUrl": "http://www.aynestateconsignments.com/",
    "logoUrl": ""
  },
  {
    "name": "Estate Auction Liquidators",
    "cityName": "Stuart",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(772) 600-7655",
    "websiteUrl": "https://estateauctionliquidators.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/146777/638148802610056492.jpg"
  },
  {
    "name": "Goldys Attic & Estate Liquidations",
    "cityName": "Stuart",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 6,
    "phoneNumber": "(561) 202-5768",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/153650/638066700227128481.jpg"
  },
  {
    "name": "Then & Now Gallery",
    "cityName": "Jensen Beach",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 139,
    "phoneNumber": "(772) 256-4920",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/157829/638345484244095646.jpg"
  },
  {
    "name": "Choice Auction",
    "cityName": "Palm City",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(772) 834-9496",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Family Estate Buyers",
    "cityName": "Stuart",
    "stateCode": "FL",
    "rating": 4.9,
    "reviewCount": 11,
    "phoneNumber": "(772) 263-6142",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/45113/636754091546917156.jpg"
  },
  {
    "name": "Southern Homes Estate Sales by Laura Parker",
    "cityName": "Windermere",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 924-9444",
    "websiteUrl": "https://www.SouthernHomesEstateSales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/7253/636289455173204286.jpg"
  },
  {
    "name": "Keep Your Crown On LLC",
    "cityName": "Melbourne",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 413-1100",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/155420/638193320733815839.jpg"
  },
  {
    "name": "Treasure Coast Treasures LLC",
    "cityName": "Port Saint Lucie",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(772) 519-8773",
    "websiteUrl": "http://www.treasurecoasttreasures.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/141608/637114649499329805.jpg"
  },
  {
    "name": "Colleen's Estate Sales",
    "cityName": "Port Saint Lucie",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(772) 216-1991",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/137480/638190722673504162.jpg"
  },
  {
    "name": "Florida Estate Pickers",
    "cityName": "Palm City",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 2,
    "phoneNumber": "(772) 283-9806",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Atlantic Estate Sales",
    "cityName": "Port Saint Lucie",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(772) 618-5650",
    "websiteUrl": "http://www.atlanticestatesales.biz",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/34583/635495926587585360.jpg"
  },
  {
    "name": "Sunshine Trading Estate Sales",
    "cityName": "Port Saint Lucie",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(207) 671-0677",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/123425/636938964103611709.jpg"
  },
  {
    "name": "Discover Your Style",
    "cityName": "Stuart",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(772) 286-8676",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "East Coast Auction, Inc.",
    "cityName": "Stuart",
    "stateCode": "FL",
    "rating": 1.0,
    "reviewCount": 1,
    "phoneNumber": "(772) 300-7716",
    "websiteUrl": "https://eastcoastauction.net",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/154232/638231224598440428.jpg"
  },
  {
    "name": "Associate Auctions",
    "cityName": "Stuart",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 1,
    "phoneNumber": "(772) 263-1565",
    "websiteUrl": "http://www.stuartdowntownauction.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/142505/637537510803966763.jpg"
  },
  {
    "name": "All You Need Estate Sales",
    "cityName": "Port Saint Lucie",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(772) 418-7522",
    "websiteUrl": "http://www.allyouneedestatesales.com",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/35927/635495926774802796.jpg"
  },
  {
    "name": "Abbey Rose Antiques & Estate Sales",
    "cityName": "Port Saint Lucie",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(772) 342-4794",
    "websiteUrl": "https://abbeyroseantiquesfl.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/131834/636310128980696154.jpg"
  },
  {
    "name": "Vintage & Collectible Estate Sale",
    "cityName": "Stuart",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(561) 299-6143",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Esquire Estate Sales, LLC",
    "cityName": "Palm City",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(832) 304-9909",
    "websiteUrl": "http://esquireestatesales.net",
    "logoUrl": ""
  },
  {
    "name": "Turner Appraisals and Antiques",
    "cityName": "Port Saint Lucie",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(719) 210-2678",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Treasures Unearthed Estate Sales",
    "cityName": "Port Saint Lucie",
    "stateCode": "FL",
    "rating": 2.9,
    "reviewCount": 15,
    "phoneNumber": "(772) 240-2345",
    "websiteUrl": "http://treasuresunearthed.weebly.com",
    "logoUrl": ""
  },
  {
    "name": "East Coast Auctions LLC",
    "cityName": "Jensen Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(772) 252-0982",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Blue Water Auction Services",
    "cityName": "Stuart",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 20,
    "phoneNumber": "(772) 418-7369",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/120041/638663349935867591.jpg"
  },
  {
    "name": "Maxwell-smith, Inc.",
    "cityName": "Jensen Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(772) 209-9126",
    "websiteUrl": "https://maxwellsmith.us/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/150800/637942313490457388.jpg"
  },
  {
    "name": "Port St Lucie Auctions",
    "cityName": "Port Saint Lucie",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(772) 579-7405",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Confiscated Assets Auctioneers",
    "cityName": "Port Saint Lucie",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(772) 337-4700",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Confiscated Assets Auctioneers",
    "cityName": "Port Saint Lucie",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(772) 337-5515",
    "websiteUrl": "https://www.2bidonit.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/163724/638575400265532790.jpg"
  },
  {
    "name": "Turquoise Mountain Auctioneers LLC",
    "cityName": "Jensen Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(772) 418-9609",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Sarasota Galleries",
    "cityName": "Bradenton",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 807-3797",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Venice Gallery, LLC",
    "cityName": "Venice",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 345-1366",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Purveyors Of Fine Junk",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 549-5052",
    "websiteUrl": "http://www.PFJLLC.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/142895/637879760843854751.jpg"
  },
  {
    "name": "Your Treasure House",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 2,
    "phoneNumber": "(941) 812-0588",
    "websiteUrl": "http://www.manateeauctions.com",
    "logoUrl": ""
  },
  {
    "name": "Lovelihood Inc.",
    "cityName": "Bradenton",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(303) 709-2538",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/149927/637882222169073130.jpg"
  },
  {
    "name": "Simon’s Quality Used Furniture",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 4.3,
    "reviewCount": 41,
    "phoneNumber": "(941) 925-7070",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/149993/637890017343850094.jpg"
  },
  {
    "name": "Decor Direct, Inc.",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 4.4,
    "reviewCount": 504,
    "phoneNumber": "(941) 751-4180",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "The Whitfield Exchange",
    "cityName": "Bradenton",
    "stateCode": "FL",
    "rating": 4.4,
    "reviewCount": 175,
    "phoneNumber": "(941) 751-4045",
    "websiteUrl": "http://www.thewhitfieldexchange.com",
    "logoUrl": ""
  },
  {
    "name": "Family Attic Estate Liquidators",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 405-8331",
    "websiteUrl": "http://www.estatesalessarasota.com",
    "logoUrl": ""
  },
  {
    "name": "Elliot Bernstein Auctions",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 351-3002",
    "websiteUrl": "http://www.ebauctions.com",
    "logoUrl": ""
  },
  {
    "name": "Ke Gustafson Consultant",
    "cityName": "Bradenton",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 795-4009",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Finders Keepers",
    "cityName": "Ruskin",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(706) 366-2284",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Eclectibles",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 372-9131",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Estate Sales By American Pie",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 4.0,
    "reviewCount": 4,
    "phoneNumber": "(941) 362-0682",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Sarasota Trading",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 4.2,
    "reviewCount": 42,
    "phoneNumber": "(941) 953-7776",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Southern Pride Auction",
    "cityName": "Bradenton",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 756-0709",
    "websiteUrl": "http://www.Southernprideauction.com",
    "logoUrl": ""
  },
  {
    "name": "Yarnall Moving And Storage",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 4.3,
    "reviewCount": 56,
    "phoneNumber": "(941) 365-3060",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "2044 Wholesale Warehouse",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 4.4,
    "reviewCount": 504,
    "phoneNumber": "(941) 928-3447",
    "websiteUrl": "http://www.david902.com",
    "logoUrl": ""
  },
  {
    "name": "Butler & Butler",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 730-8986",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Tlc Senior Move Experts",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 554-4746",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Samsara Jewels",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 961-9939",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/143030/637299918658917718.jpg"
  },
  {
    "name": "Dalessandro",
    "cityName": "Bradenton",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(914) 548-6207",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Bevsmith Treasures",
    "cityName": "Bradenton",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(813) 240-5359",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Estate Sale Liquidators",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 4.9,
    "reviewCount": 116,
    "phoneNumber": "(407) 951-4636",
    "websiteUrl": "http://ESLCFL.COM",
    "logoUrl": ""
  },
  {
    "name": "Sundance Move Solutions",
    "cityName": "Bradenton",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(985) 804-0508",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Elegant Antiques",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 321-1790",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "NT Auction and Gallery, LLC",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 345-1366",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Ups Auction",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 218-0802",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Bradley Liquidation Services, LLC",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(724) 331-8914",
    "websiteUrl": "http://blsestatesales.com/",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/37457/635558233381258177.jpg"
  },
  {
    "name": "Personalized Estate Liquidation Benefiting Youth",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 993-8757",
    "websiteUrl": "https://www.personalizedestateliquidation.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/129572/636249316077698422.jpg"
  },
  {
    "name": "Savvy Estate Sales, LLC",
    "cityName": "Sun City Center",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(813) 417-8906",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Estate Kings",
    "cityName": "Palm Harbor",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(813) 900-8469",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/158159/638882792988795704.jpg"
  },
  {
    "name": "Alvis Estate Finds",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 405-8109",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "She Sells Estate Sales, LLC",
    "cityName": "Winter Garden",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 460-2000",
    "websiteUrl": "https://www.shesellsestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/146993/637628268216974580.jpg"
  },
  {
    "name": "Sunshine Senior Movers,llc",
    "cityName": "Wimauma",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(813) 924-1601",
    "websiteUrl": "http://www.sunshineestateliquidators.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/136580/638903448257310917.jpg"
  },
  {
    "name": "Golden Estate Sales LLC",
    "cityName": "Clearwater",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 29,
    "phoneNumber": "(614) 284-8212",
    "websiteUrl": "https://goldenestatesales.org/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/171599/639068672444285071.jpg"
  },
  {
    "name": "SRQ Estate Sales",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 932-3414",
    "websiteUrl": "https://srqestatesales.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/134045/637523764785805192.jpg"
  },
  {
    "name": "Heirloom Liquidators",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 26,
    "phoneNumber": "(941) 726-7829",
    "websiteUrl": "https://heirloomliquidators.com/online-estate-sale",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/144692/638164812083994962.jpg"
  },
  {
    "name": "Freedom Auctions",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 4.0,
    "reviewCount": 42,
    "phoneNumber": "(941) 725-2166",
    "websiteUrl": "http://www.freedomauctions.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/20321/636502914107317758.jpg"
  },
  {
    "name": "Peter Brandi Estate Sales",
    "cityName": "Roswell",
    "stateCode": "GA",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(770) 356-1126",
    "websiteUrl": "http://www.peterbrandiestatesales.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/10490/636260844731510896.jpg"
  },
  {
    "name": "Manasota Coin And Jewelry LLC",
    "cityName": "Bradenton",
    "stateCode": "FL",
    "rating": 4.9,
    "reviewCount": 495,
    "phoneNumber": "(518) 879-4971",
    "websiteUrl": "https://awreoservicesllc.wixsite.com/website",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/137336/636751690942046922.jpg"
  },
  {
    "name": "Elder's Fine Art & Antiques",
    "cityName": "Nokomis",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 488-1005",
    "websiteUrl": "https://www.eldersantiques.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/25652/637141873229300473.jpg"
  },
  {
    "name": "Richard Hazen, P.A.",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 918-0080",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Family Attic",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 405-8331",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Fl Estate Liquidations",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 266-9397",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Summer Home & Garden",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 2,
    "phoneNumber": "(941) 306-7193",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Mika & Sons LLC Art And Antiques",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 3,
    "phoneNumber": "(941) 303-7857",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/144092/637378601836847842.jpg"
  },
  {
    "name": "Estate Sales Store",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(717) 420-0032",
    "websiteUrl": "http://www.estatesalesstore.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/128171/635977007903739249.jpg"
  },
  {
    "name": "Sarasota Antique Buyers",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 4.2,
    "reviewCount": 13,
    "phoneNumber": "(941) 726-0401",
    "websiteUrl": "http://www.sarasotaantiquebuyers.com",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/41519/635599659191765384.jpg"
  },
  {
    "name": "Fouchard Capoulco Pie",
    "cityName": "Bradenton",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 755-2932",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Ruby Nell's Treasures",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 302-3445",
    "websiteUrl": "http://www.rubynells.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/154145/638113875071213098.jpg"
  },
  {
    "name": "Manatee Galleries",
    "cityName": "Palmetto",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 722-4800",
    "websiteUrl": "http://manateegalleries.com",
    "logoUrl": ""
  },
  {
    "name": "Starr Estate Sales",
    "cityName": "Venice",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 416-7987",
    "websiteUrl": "http://StarrEstateSales.com",
    "logoUrl": ""
  },
  {
    "name": "Sarasota Trust & Estate Property Specialists, Inc.",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 365-7837",
    "websiteUrl": "http://www.stepshome.com",
    "logoUrl": ""
  },
  {
    "name": "Gulf Coast Estate Auctions",
    "cityName": "Bradenton",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 274-6537",
    "websiteUrl": "https://gulfcoastestateauctions.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/151856/638018727286302304.jpg"
  },
  {
    "name": "Estate Sales of Bradenton",
    "cityName": "Terra Ceia",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 65,
    "phoneNumber": "(208) 704-4169",
    "websiteUrl": "http://www.estatesalesofsarasota.com/",
    "logoUrl": ""
  },
  {
    "name": "Frankie Z & Company",
    "cityName": "Parrish",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 726-1482",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Uestatesales",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(305) 213-4517",
    "websiteUrl": "http://uestatesales.com",
    "logoUrl": ""
  },
  {
    "name": "Blue Moon Estate Sales Sarasota",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 248-5293",
    "websiteUrl": "http://www.bluemoonestatesales.com/central-treasure-coast",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/148628/637786501245173286.jpg"
  },
  {
    "name": "Kyle's Corner You'll Never Know",
    "cityName": "Ellenton",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 565-2741",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Jim's Estate Sales",
    "cityName": "Bradenton",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 65,
    "phoneNumber": "(941) 779-4131",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Cynthia Barta Household Liquidations",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 586-5761",
    "websiteUrl": "https://cynthiabartahouseholdliquidations.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/132149/637927216059441813.jpg"
  },
  {
    "name": "Gulf Waters Estate Sales, LLC",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 3,
    "phoneNumber": "(941) 993-8786",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Estate Sales By Ana Maria",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 65,
    "phoneNumber": "(941) 350-3509",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/134903/636610462510421124.jpg"
  },
  {
    "name": "Woman's Exchange Inc. Of Sarasota",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 4.4,
    "reviewCount": 689,
    "phoneNumber": "(941) 955-7859",
    "websiteUrl": "",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/103250/635724827196418148.jpg"
  },
  {
    "name": "Sarasota Flea Market Thrift",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 4.0,
    "reviewCount": 304,
    "phoneNumber": "(941) 405-4334",
    "websiteUrl": "http://SarasotaFleaMarketThrift.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/129158/636057787633010618.jpg"
  },
  {
    "name": "Jac's Gallery LLC",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 227-3004",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Cr Estate Sales",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 928-5403",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Top Shelf Services",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 7,
    "phoneNumber": "(941) 363-1129",
    "websiteUrl": "https://www.topshelf.services/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/140246/636999086877806053.jpg"
  },
  {
    "name": "Distinct Auctions",
    "cityName": "Osprey",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 650-3810",
    "websiteUrl": "http://www.distinctauctions.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/52841/636115274744974251.jpg"
  },
  {
    "name": "Downsizeology LLC",
    "cityName": "Bradenton",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 981-0160",
    "websiteUrl": "http://www.downsizeology.com",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/50828/635627641198569836.jpg"
  },
  {
    "name": "Stonebridge Estate Management",
    "cityName": "Venice",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 662-0069",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Ageless Auctions",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 313-2025",
    "websiteUrl": "http://www.agelessauctions.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/148037/637716810834337179.jpg"
  },
  {
    "name": "What A Find LLC",
    "cityName": "Bradenton",
    "stateCode": "FL",
    "rating": 4.2,
    "reviewCount": 26,
    "phoneNumber": "(941) 896-8820",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Designing Women Boutique Estate and Downsizing Division",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 4.1,
    "reviewCount": 24,
    "phoneNumber": "(941) 366-5293",
    "websiteUrl": "http://www.DesigningWomenBoutique.org",
    "logoUrl": ""
  },
  {
    "name": "Selby Estate Sales",
    "cityName": "Bradenton",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 65,
    "phoneNumber": "(941) 232-1177",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/91352/637614540156739091.jpg"
  },
  {
    "name": "Transitions Of Sarasota",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 4.3,
    "reviewCount": 12,
    "phoneNumber": "(941) 371-7165",
    "websiteUrl": "http://transitionsofsarasota.com",
    "logoUrl": ""
  },
  {
    "name": "Auction Exchange USA",
    "cityName": "Nokomis",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 22,
    "phoneNumber": "(941) 544-8640",
    "websiteUrl": "http://www.auctionexchangeusa.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/136880/637094424362077594.jpg"
  },
  {
    "name": "Avenue Auctions",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(440) 227-4592",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Estate Sales of Sarasota",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 400-9426",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/11885/636606261291085469.jpg"
  },
  {
    "name": "Grandma's Estate Sale",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 356-0800",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Long Lake Art",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 13,
    "phoneNumber": "(315) 382-3072",
    "websiteUrl": "https://longlake.art/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/158411/638776770735102423.jpg"
  },
  {
    "name": "Antiques & Chatchkes",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 73,
    "phoneNumber": "(941) 356-3318",
    "websiteUrl": "http://www.antiquesandchatchkes.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/14777/636044564997489263.jpg"
  },
  {
    "name": "Wix Estate Sales",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(269) 757-4056",
    "websiteUrl": "http://www.wixestatesales.com",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/11342/635565956381492000.jpg"
  },
  {
    "name": "Extra Step Estate Sales LLC",
    "cityName": "Oxford",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 516-8553",
    "websiteUrl": "http://www.EstepEsales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/130028/636537010256432307.jpg"
  },
  {
    "name": "Venice Estate Buyers And Sales",
    "cityName": "Venice",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 50,
    "phoneNumber": "(941) 313-3772",
    "websiteUrl": "https://www.veniceestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/157502/638757541283221609.jpg"
  },
  {
    "name": "Sarasota Estate Auction",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 4.2,
    "reviewCount": 108,
    "phoneNumber": "(941) 359-8700",
    "websiteUrl": "http://www.sarasotaestateauction.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/34664/636289069660461118.jpg"
  },
  {
    "name": "Mm Turnes Group",
    "cityName": "Sarasota",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 381-9821",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/170687/639000444627483666.jpg"
  },
  {
    "name": "Estate Sales Of Pinellas",
    "cityName": "Parrish",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 459-0495",
    "websiteUrl": "http://www.estatesalesofpinellas.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/145448/638703094791581778.jpg"
  },
  {
    "name": "My 2nd Time Around LLC",
    "cityName": "Bradenton",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(561) 234-6428",
    "websiteUrl": "http://www.my2ndtimearoundllc.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/144146/637872913768732156.jpg"
  },
  {
    "name": "Rum Runners Auctions",
    "cityName": "Nokomis",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(941) 483-6232",
    "websiteUrl": "https://rumrunnersauction.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/160037/638473157084498040.jpg"
  },
  {
    "name": "Premier Auction House Inc",
    "cityName": "Venice",
    "stateCode": "FL",
    "rating": 3.4,
    "reviewCount": 17,
    "phoneNumber": "(941) 460-6459",
    "websiteUrl": "http://www.premierauctionhouse.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/73115/636275538305212069.jpg"
  },
  {
    "name": "Castaway Estate Sales",
    "cityName": "Saint Petersburg",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 65,
    "phoneNumber": "(727) 295-7757",
    "websiteUrl": "http://www.castawayestates.net",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/133142/637449256460823787.jpg"
  },
  {
    "name": "Estate Sales by Martha",
    "cityName": "Sebring",
    "stateCode": "FL",
    "rating": 3.2,
    "reviewCount": 10,
    "phoneNumber": "(863) 368-1419",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Donna Collins Estate Sales",
    "cityName": "Sebring",
    "stateCode": "FL",
    "rating": 4.0,
    "reviewCount": 4,
    "phoneNumber": "(863) 214-5217",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "The Furniture Doctors Of Central Florida, Inc.",
    "cityName": "Sebring",
    "stateCode": "FL",
    "rating": 4.2,
    "reviewCount": 27,
    "phoneNumber": "(863) 414-7388",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Transitions Now LLC",
    "cityName": "Sebring",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(863) 835-0205",
    "websiteUrl": "http://www.transitionsnow.info",
    "logoUrl": ""
  },
  {
    "name": "Southern Auction Company",
    "cityName": "Lake Placid",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 19,
    "phoneNumber": "(863) 227-7598",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "C&s Auction",
    "cityName": "Sebring",
    "stateCode": "FL",
    "rating": 4.1,
    "reviewCount": 10,
    "phoneNumber": "(863) 633-8393",
    "websiteUrl": "http://csauctionandestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/123305/637544543170854295.jpg"
  },
  {
    "name": "Two Friends Estate Sales",
    "cityName": "Lake Placid",
    "stateCode": "FL",
    "rating": 3.8,
    "reviewCount": 4,
    "phoneNumber": "(863) 464-0912",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "V Patton Estate Sale Options",
    "cityName": "Zephyrhills",
    "stateCode": "FL",
    "rating": 4.7,
    "reviewCount": 27,
    "phoneNumber": "(813) 780-9759",
    "websiteUrl": "http://www.vpattonestatesaleoptions.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/129521/637162006588265189.jpg"
  },
  {
    "name": "Wells Auctioneers",
    "cityName": "Fort Meade",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 7,
    "phoneNumber": "(863) 224-5411",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "American Salvage",
    "cityName": "Vero Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(561) 722-8029",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/22169/636068150716699981.jpg"
  },
  {
    "name": "Manor Auctions",
    "cityName": "Vero Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 523-3787",
    "websiteUrl": "http://www.ManorAuctions.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/20171/636110927492904846.jpg"
  },
  {
    "name": "Midtown Estate Sales, LLC",
    "cityName": "Vero Beach",
    "stateCode": "FL",
    "rating": 4.7,
    "reviewCount": 51,
    "phoneNumber": "(321) 693-4802",
    "websiteUrl": "http://www.gomid.net",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/131048/638668887902006687.jpg"
  },
  {
    "name": "Estate Sales by Olaf Vinje",
    "cityName": "Palm Bay",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 25,
    "phoneNumber": "(631) 384-4287",
    "websiteUrl": "http://www.eastendantiques.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/132569/636363323782574349.jpg"
  },
  {
    "name": "Got 2 Have It! Antiques & Collectibles",
    "cityName": "Vero Beach",
    "stateCode": "FL",
    "rating": 4.9,
    "reviewCount": 61,
    "phoneNumber": "(305) 588-3443",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Townsend Estate Liquidation Services, Inc.",
    "cityName": "Vero Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(772) 473-2191",
    "websiteUrl": "https://townsendestateliquidation.hibid.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/166139/638807688376608131.jpg"
  },
  {
    "name": "Leonheart Estate Sales",
    "cityName": "Vero Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(772) 362-6353",
    "websiteUrl": "http://www.LeonheartFL.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/147134/638476181199276543.jpg"
  },
  {
    "name": "Estate Sale Stars",
    "cityName": "Rockledge",
    "stateCode": "FL",
    "rating": 3.3,
    "reviewCount": 32,
    "phoneNumber": "(407) 256-1337",
    "websiteUrl": "https://estatesalestars.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/25931/638846524774800834.jpg"
  },
  {
    "name": "Ruftop Estate Sales",
    "cityName": "Cocoa",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 1,
    "phoneNumber": "(321) 536-4126",
    "websiteUrl": "http://www.ruftopestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/5564/638116354098669098.jpg"
  },
  {
    "name": "Midcoast Estate Sales",
    "cityName": "Palm Bay",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 1,
    "phoneNumber": "(321) 243-7070",
    "websiteUrl": "http://midcoast-estatesales.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/155537/638282368680495715.jpeg"
  },
  {
    "name": "The G4 Group",
    "cityName": "Sebastian",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(772) 228-9000",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Space Coast Estate Sales",
    "cityName": "Vero Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 759-0886",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Cozy Coastal Consignment, LLC",
    "cityName": "Vero Beach",
    "stateCode": "FL",
    "rating": 4.4,
    "reviewCount": 12,
    "phoneNumber": "(772) 245-2150",
    "websiteUrl": "http://www.cozycoastalconsignment.com",
    "logoUrl": ""
  },
  {
    "name": "A Touch Of Bloom Estate Liquidators",
    "cityName": "Vero Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(772) 584-1080",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Postal Connections",
    "cityName": "Vero Beach",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 60,
    "phoneNumber": "(321) 367-4427",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/160298/638734023236753987.jpg"
  },
  {
    "name": "Florida Art Auction",
    "cityName": "Vero Beach",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 9,
    "phoneNumber": "(772) 349-2632",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Crimson Key Estate Sales",
    "cityName": "Sebastian",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(772) 913-0533",
    "websiteUrl": "http://www.CrimsonKeyEstateSales.com",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/26792/635731694952097166.jpg"
  },
  {
    "name": "Impressions Estate Sales",
    "cityName": "Palm Bay",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 25,
    "phoneNumber": "(321) 684-8118",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "At Peace Estate & Liquidation Sales Llc.",
    "cityName": "Merritt Island",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 741-6513",
    "websiteUrl": "https://estatesalesbrevard.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/166142/638742298424235307.jpg"
  },
  {
    "name": "Medley Brothers Estate Sales And Liquidation",
    "cityName": "Palm Bay",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 25,
    "phoneNumber": "(229) 220-4572",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/165578/639010018059988612.jpg"
  },
  {
    "name": "Best Buy Estate Sales LLC",
    "cityName": "Palm Bay",
    "stateCode": "FL",
    "rating": 2.9,
    "reviewCount": 15,
    "phoneNumber": "(570) 881-5202",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Full Circle Estate Sales",
    "cityName": "Clearwater",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 16,
    "phoneNumber": "(727) 400-4115",
    "websiteUrl": "http://www.FullCircle-EstateSales.com",
    "logoUrl": ""
  },
  {
    "name": "All Bay Estate Sales And Services, Llc.",
    "cityName": "Saint Petersburg",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 557-4855",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/143942/637501410835003454.jpg"
  },
  {
    "name": "Get Ready 2 Sell Estate Sale & Staging Co",
    "cityName": "Spring Hill",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 118,
    "phoneNumber": "(352) 593-0833",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Things Once Knew",
    "cityName": "Largo",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(312) 880-9592",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "J Person And Company",
    "cityName": "Saint Petersburg",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 504-1139",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "1 Day Liquidations",
    "cityName": "Saint Petersburg",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 445-6531",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/141821/637147118205080137.jpg"
  },
  {
    "name": "Soapweed Estate Sales And Teansitions",
    "cityName": "Dade City",
    "stateCode": "FL",
    "rating": 4.7,
    "reviewCount": 27,
    "phoneNumber": "(352) 874-2659",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Fifth Avenue Estate Liquidation LLC",
    "cityName": "New Port Richey",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 8,
    "phoneNumber": "(727) 645-3029",
    "websiteUrl": "http://www.fifthavenueestate.com",
    "logoUrl": ""
  },
  {
    "name": "Hattie's Antique Parlor",
    "cityName": "Clearwater",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 831-4490",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "E.M. Wallace Auctions & Appraisals",
    "cityName": "Tarpon Springs",
    "stateCode": "FL",
    "rating": 1.0,
    "reviewCount": 1,
    "phoneNumber": "(727) 240-1172",
    "websiteUrl": "https://www.sellandbidwell.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/27956/636385069027122019.jpg"
  },
  {
    "name": "Estate Sales Of West Florida, LLC",
    "cityName": "Riverview",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 2,
    "phoneNumber": "(813) 340-8836",
    "websiteUrl": "http://www.EstateSalesWFL.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/140648/637040666383664046.jpg"
  },
  {
    "name": "Estate Sales By Found LLC",
    "cityName": "Saint Petersburg",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 65,
    "phoneNumber": "(727) 741-5128",
    "websiteUrl": "http://www.foundantiquesllc.com",
    "logoUrl": ""
  },
  {
    "name": "JMA Auctioneer, Inc",
    "cityName": "Riverview",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(813) 477-3772",
    "websiteUrl": "http://www.seeyouattheauction.com",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/29330/635651484633973776.jpg"
  },
  {
    "name": "Blue Moon Estate Sales",
    "cityName": "Tampa",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(813) 648-0054",
    "websiteUrl": "https://www.bluemoonestatesales.com/tampa-north/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/146012/637560170975396568.jpg"
  },
  {
    "name": "1st Choice Estate Sales",
    "cityName": "Largo",
    "stateCode": "FL",
    "rating": 3.8,
    "reviewCount": 10,
    "phoneNumber": "(951) 642-6672",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Tampa Bay Estate Sales",
    "cityName": "Largo",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 12,
    "phoneNumber": "(206) 682-7288",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Apollo Estate Services, LLC",
    "cityName": "Tarpon Springs",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(513) 313-6651",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Estate Sales By Susan",
    "cityName": "Clearwater",
    "stateCode": "FL",
    "rating": 4.0,
    "reviewCount": 24,
    "phoneNumber": "(727) 538-2072",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Sun-kissed Estate Solutions, LLC",
    "cityName": "Saint Petersburg",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 300-9257",
    "websiteUrl": "https://sunkissedestate.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/158474/638393788616470235.jpg"
  },
  {
    "name": "Class Act Auctioneers, Inc.",
    "cityName": "Palm Harbor",
    "stateCode": "FL",
    "rating": 3.7,
    "reviewCount": 3,
    "phoneNumber": "(727) 784-9009",
    "websiteUrl": "http://www.classactauctions.com",
    "logoUrl": ""
  },
  {
    "name": "Bradpeele Estate Sales",
    "cityName": "Saint Petersburg",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 14,
    "phoneNumber": "(727) 252-6271",
    "websiteUrl": "http://www.estatesales-appraisals.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/35804/636879310092139110.jpg"
  },
  {
    "name": "Park Street Antique Center & Auction",
    "cityName": "Saint Petersburg",
    "stateCode": "FL",
    "rating": 4.4,
    "reviewCount": 305,
    "phoneNumber": "(727) 398-3886",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "It Feels Good To Be Green Inc",
    "cityName": "Tarpon Springs",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 209,
    "phoneNumber": "(727) 686-2240",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Judecar Estates",
    "cityName": "Saint Petersburg",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 902-4011",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Stuart Galleries",
    "cityName": "Saint Petersburg",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 480-1719",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/139079/636932975646552855.jpg"
  },
  {
    "name": "Angle Estate Sales",
    "cityName": "Palm Harbor",
    "stateCode": "FL",
    "rating": 3.6,
    "reviewCount": 8,
    "phoneNumber": "(810) 348-1131",
    "websiteUrl": "http://www.angleestatesale.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/133583/636451844786689611.jpg"
  },
  {
    "name": "Two For One Estate Sales",
    "cityName": "Saint Petersburg",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 65,
    "phoneNumber": "(727) 816-6010",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Hope Street Auction",
    "cityName": "Tarpon Springs",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 937-9400",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Sunshine Estate Sales",
    "cityName": "Zephyrhills",
    "stateCode": "FL",
    "rating": 4.7,
    "reviewCount": 27,
    "phoneNumber": "(813) 323-1604",
    "websiteUrl": "http://www.ssestatesale.com",
    "logoUrl": ""
  },
  {
    "name": "Jodan Estates Sales",
    "cityName": "Saint Petersburg",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(818) 606-5627",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Estate Sales By Karen",
    "cityName": "Lutz",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(813) 802-9110",
    "websiteUrl": "",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/123503/635835783566403652.jpg"
  },
  {
    "name": "Reminisce` Estate Sales, LLC",
    "cityName": "Spring Hill",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 76,
    "phoneNumber": "(727) 457-7619",
    "websiteUrl": "http://www.reminisceestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/133364/636429354804819684.jpg"
  },
  {
    "name": "Andrea And Friends Antiques Mall",
    "cityName": "Saint Petersburg",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 124,
    "phoneNumber": "(727) 560-8568",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Clutter to Cash Liquidation Svcs.",
    "cityName": "Tampa",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(813) 428-5793",
    "websiteUrl": "http://cluttertocashsvc.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/14873/636372112154770074.jpg"
  },
  {
    "name": "Estate Emporium",
    "cityName": "Tampa",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(813) 495-0095",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Quirk & Main Estate Sales",
    "cityName": "Tampa",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 12,
    "phoneNumber": "(813) 252-4611",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "American Heritage Auctioneers",
    "cityName": "Clearwater",
    "stateCode": "FL",
    "rating": 4.3,
    "reviewCount": 9,
    "phoneNumber": "(813) 849-8918",
    "websiteUrl": "http://www.AmericanHeritageAuctioneers.com",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/34418/635495926578483540.jpg"
  },
  {
    "name": "Free From Clutter Estate Sales",
    "cityName": "Saint Petersburg",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(813) 453-1944",
    "websiteUrl": "http://www.freefromclutter.com",
    "logoUrl": ""
  },
  {
    "name": "Tri State Auctions",
    "cityName": "New Port Richey",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 203-3625",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Ab & D Southern Antiques / Far Out Groovy & Kool",
    "cityName": "Saint Petersburg",
    "stateCode": "FL",
    "rating": 2.8,
    "reviewCount": 6,
    "phoneNumber": "(727) 458-7600",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Totalestatesolutons",
    "cityName": "Saint Petersburg",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 385-9721",
    "websiteUrl": "http://www.totalestatesolucitos.vpweb.com/",
    "logoUrl": ""
  },
  {
    "name": "Complete Auctions And Estate Sales",
    "cityName": "Palm Harbor",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 776-3697",
    "websiteUrl": "http://www.thecompleteauction.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/33362/636379991628388680.jpg"
  },
  {
    "name": "Class Act LLC",
    "cityName": "Tarpon Springs",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 262-8591",
    "websiteUrl": "http://www.classactestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/132503/636357653000097669.jpg"
  },
  {
    "name": "Beantown Estate Sales",
    "cityName": "Tampa",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 12,
    "phoneNumber": "(813) 557-2964",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "D & K Estate Sales LLC",
    "cityName": "Hudson",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 457-3172",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/134939/636607225721009379.jpg"
  },
  {
    "name": "Encore Events & Estate Services",
    "cityName": "Largo",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 709-3071",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/146642/637727891267800069.jpg"
  },
  {
    "name": "Assisted Carefree Moves & Estate Services",
    "cityName": "Palm Harbor",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 784-2626",
    "websiteUrl": "http://www.assistedcarefreemoves.com",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/19100/635509265364203298.jpg"
  },
  {
    "name": "David Silverman Auctioneer",
    "cityName": "Oldsmar",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(813) 312-4021",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Bng Treasure, Inc.",
    "cityName": "Clearwater",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 484-0146",
    "websiteUrl": "https://www.bngtreasures.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/140969/638591915153660502.jpg"
  },
  {
    "name": "Anty V's Gallery",
    "cityName": "Spring Hill",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 340-5996",
    "websiteUrl": "http://antyvauction.com",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/33836/635606934664117218.jpg"
  },
  {
    "name": "EstateClosers.com",
    "cityName": "Largo",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 403-6498",
    "websiteUrl": "http://www.EstateClosers.com",
    "logoUrl": ""
  },
  {
    "name": "Memory Lane",
    "cityName": "Saint Petersburg",
    "stateCode": "FL",
    "rating": 3.7,
    "reviewCount": 19,
    "phoneNumber": "(727) 827-3111",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Tampa Bay Estate Solutions",
    "cityName": "Tarpon Springs",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 505-2323",
    "websiteUrl": "http://www.TampaBayEstateSolutions.com",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/14177/635599130955556602.jpg"
  },
  {
    "name": "Home To Home Estate Sales",
    "cityName": "Tarpon Springs",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 10,
    "phoneNumber": "(727) 424-4873",
    "websiteUrl": "http://www.home2homeestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/136415/636685665053800619.jpg"
  },
  {
    "name": "Tony's Trunk",
    "cityName": "Seminole",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 213-6413",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Express Estate Sales of Tampa Bay",
    "cityName": "New Port Richey",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 288-4295",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/134168/636532164446858745.jpg"
  },
  {
    "name": "Gerald White Estate Sales",
    "cityName": "Zephyrhills",
    "stateCode": "FL",
    "rating": 4.7,
    "reviewCount": 27,
    "phoneNumber": "(813) 701-8664",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/138233/636840344813002904.jpg"
  },
  {
    "name": "ESTATE SALES by QUEENIE",
    "cityName": "Seminole",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 584-0777",
    "websiteUrl": "http://www.abestatesales.com",
    "logoUrl": ""
  },
  {
    "name": "Estate Sales With Class",
    "cityName": "Spring Hill",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 644-0655",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "A1 Estate Sales",
    "cityName": "Hudson",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 645-8790",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Perfect Pet Upcycle",
    "cityName": "Lutz",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(813) 775-5317",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/150158/637897763189829491.jpg"
  },
  {
    "name": "Class Act Estate Sales And Services LLC",
    "cityName": "Largo",
    "stateCode": "FL",
    "rating": 3.7,
    "reviewCount": 3,
    "phoneNumber": "(727) 543-1755",
    "websiteUrl": "http://www.classactestate.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/25685/636374690299850907.jpg"
  },
  {
    "name": "Caring Transitions Of West Pasco",
    "cityName": "New Port Richey",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 733-4620",
    "websiteUrl": "http://www.caringtransitionswestpasco.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/137744/638476812982818521.jpg"
  },
  {
    "name": "Florida Estate Sale Solutions LLC",
    "cityName": "Saint Petersburg",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 359-4236",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/165635/638692915473876065.jpg"
  },
  {
    "name": "Palm Tree Estate Sales",
    "cityName": "Tampa",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 12,
    "phoneNumber": "(813) 416-2941",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Florida Asset Liquidation Specialists",
    "cityName": "New Port Richey",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 204-5431",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/150791/637940394565386781.jpg"
  },
  {
    "name": "Caring Transitions Of Tampa",
    "cityName": "Tampa",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(813) 235-0685",
    "websiteUrl": "http://www.caringtransitionstampa.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/134510/638476774220225541.jpg"
  },
  {
    "name": "The Garage Treasures LLC",
    "cityName": "Hudson",
    "stateCode": "FL",
    "rating": 3.7,
    "reviewCount": 6,
    "phoneNumber": "(727) 810-4738",
    "websiteUrl": "https://thegaragetreasures.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/166808/638790371139793470.jpg"
  },
  {
    "name": "Splash Estate Productions",
    "cityName": "Largo",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 265-1914",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/148985/638169310209448159.jpg"
  },
  {
    "name": "Boothsbargains",
    "cityName": "Lutz",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(813) 263-6975",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Myers Auction Gallery",
    "cityName": "Saint Petersburg",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 11,
    "phoneNumber": "(727) 823-3249",
    "websiteUrl": "http://www.myersfineart.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/14027/636508736852083326.jpg"
  },
  {
    "name": "Picker Place Estate Sales",
    "cityName": "Plant City",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 98,
    "phoneNumber": "(813) 952-4672",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Auction Kings Gallery",
    "cityName": "Tampa",
    "stateCode": "FL",
    "rating": 1.4,
    "reviewCount": 9,
    "phoneNumber": "(813) 749-7940",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Vandenbrook Galleries",
    "cityName": "Tampa",
    "stateCode": "FL",
    "rating": 4.7,
    "reviewCount": 35,
    "phoneNumber": "(813) 690-4306",
    "websiteUrl": "https://vandenbrookgalleries.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/23777/636384033672540401.jpg"
  },
  {
    "name": "Blue Moon Estate Sales Of Metro Tampa Central",
    "cityName": "Brooksville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(813) 468-4038",
    "websiteUrl": "https://www.bluemoonestatesales.com/metro-tampa-central/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/165986/638731611173502175.jpg"
  },
  {
    "name": "Icz Auctions",
    "cityName": "Holiday",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 403-0411",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Southwest Florida Auctions",
    "cityName": "Saint Petersburg",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 455-3392",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Estate Sales Beyond LLC",
    "cityName": "San Antonio",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(813) 777-5145",
    "websiteUrl": "https://estatesalesbeyond.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/163988/638805246132902287.jpg"
  },
  {
    "name": "The Robins Nest Estate Liquidation",
    "cityName": "Spring Hill",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 5,
    "phoneNumber": "(727) 967-7908",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Atlas Estate Sales",
    "cityName": "Saint Petersburg",
    "stateCode": "FL",
    "rating": 4.7,
    "reviewCount": 32,
    "phoneNumber": "(727) 685-7272",
    "websiteUrl": "https://atlasestatellc.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/145067/637485698475678286.jpg"
  },
  {
    "name": "Angell Estate Sales & Appraisal Services Inc.",
    "cityName": "Valrico",
    "stateCode": "FL",
    "rating": 3.6,
    "reviewCount": 8,
    "phoneNumber": "(813) 685-3477",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Treasure Hunter Estate Sales",
    "cityName": "Port Richey",
    "stateCode": "FL",
    "rating": 2.9,
    "reviewCount": 15,
    "phoneNumber": "(386) 341-3393",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/128507/636010690457272260.jpg"
  },
  {
    "name": "Bayshore Treasures",
    "cityName": "Saint Petersburg",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(813) 569-9222",
    "websiteUrl": "http://www.bayshoretreasures.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/157025/638297187987739238.jpg"
  },
  {
    "name": "America's Trusted Estate Sales",
    "cityName": "Hudson",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 10,
    "phoneNumber": "(541) 844-9252",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/169805/638954680418974312.jpg"
  },
  {
    "name": "Kennedy Brothers Estate Services",
    "cityName": "Saint Petersburg",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 63,
    "phoneNumber": "(727) 821-5400",
    "websiteUrl": "http://www.KennedyBrothersAuctions.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/13241/637980761562537783.jpg"
  },
  {
    "name": "Blue Canoe Estate Sales & Liquidations",
    "cityName": "Brooksville",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 14,
    "phoneNumber": "(352) 942-3660",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/140021/636982904942644673.jpg"
  },
  {
    "name": "Tangerinedreamers LLC",
    "cityName": "Saint Petersburg",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 744-6166",
    "websiteUrl": "HTTP://tangerinetreasures.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/170792/639008109455977747.jpg"
  },
  {
    "name": "Accurate Gun Auctions",
    "cityName": "Clearwater",
    "stateCode": "FL",
    "rating": 4.9,
    "reviewCount": 365,
    "phoneNumber": "(727) 210-3504",
    "websiteUrl": "https://accurategunauctions.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/158162/638361799494293475.jpg"
  },
  {
    "name": "The Estate Venue",
    "cityName": "Saint Petersburg",
    "stateCode": "FL",
    "rating": 3.6,
    "reviewCount": 100,
    "phoneNumber": "(813) 205-8034",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/36251/636530213680944216.jpg"
  },
  {
    "name": "Parcreek Antiques And Estate Services",
    "cityName": "Tarpon Springs",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 24,
    "phoneNumber": "(727) 460-8945",
    "websiteUrl": "https://parcreekantiques.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/155567/638204731717932660.jpg"
  },
  {
    "name": "Dollar Daze Of Sarasota Inc",
    "cityName": "Apollo Beach",
    "stateCode": "FL",
    "rating": 4.4,
    "reviewCount": 22,
    "phoneNumber": "(941) 320-2269",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "A To Z Estate Sales & Cleanouts",
    "cityName": "Oldsmar",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 244-0414",
    "websiteUrl": "https://www.facebook.com/AtoZestatesalescleanouts",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/151751/638010912359606054.jpg"
  },
  {
    "name": "S&J Estate Liquidators",
    "cityName": "Clearwater",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 614-9004",
    "websiteUrl": "http://www.sjestateliquidators.com",
    "logoUrl": ""
  },
  {
    "name": "Estate Sales By Greg,",
    "cityName": "Dunedin",
    "stateCode": "FL",
    "rating": 4.1,
    "reviewCount": 14,
    "phoneNumber": "(631) 455-4015",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Be Our Guest Estate Sales",
    "cityName": "Clermont",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 2,
    "phoneNumber": "(801) 400-8924",
    "websiteUrl": "https://bogestatesales.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/168569/638883144228932803.jpg"
  },
  {
    "name": "Tender Care Move Management",
    "cityName": "Tampa",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 8,
    "phoneNumber": "(813) 784-0235",
    "websiteUrl": "http://www.tendercaretampa.com",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/28907/635495926374052662.jpg"
  },
  {
    "name": "S D Bowman Estate Sales",
    "cityName": "Lutz",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(813) 300-4845",
    "websiteUrl": "http://www.sdbowman.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/141518/638924290263243514.jpg"
  },
  {
    "name": "Family Nest Estate Solutions Of Tampa Bay",
    "cityName": "New Port Richey",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 505-3398",
    "websiteUrl": "https://familynestestates.com/Tampa/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/162431/638502003312032737.jpg"
  },
  {
    "name": "Florida Estate Sales",
    "cityName": "Hudson",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 259,
    "phoneNumber": "(727) 364-4008",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "West Coast Florida Estate Sales",
    "cityName": "Brooksville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 277-1661",
    "websiteUrl": "https://westcoastfloridaestatesales.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/169130/638914805896323090.jpg"
  },
  {
    "name": "Heavenly Hands Estate Sales",
    "cityName": "Holiday",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 831-2570",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/145607/637961075879244238.jpg"
  },
  {
    "name": "Caring Transitions Of Lutz & Land O' Lakes",
    "cityName": "Lutz",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(813) 536-7111",
    "websiteUrl": "http://www.caringtransitionsoflutz.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/162845/638555252637107503.jpg"
  },
  {
    "name": "Prime Asset Estate Sales",
    "cityName": "Tarpon Springs",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 741-4125",
    "websiteUrl": "https://www.primeassetestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/149024/637816804035455208.jpg"
  },
  {
    "name": "Helping Hands Estate Sales",
    "cityName": "Dunnellon",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(813) 525-4031",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/145775/637547087853395773.jpg"
  },
  {
    "name": "Fresh Start Estate Liquidators",
    "cityName": "Riverview",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(813) 785-7750",
    "websiteUrl": "http://www.freshstartoftampabay.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/29573/636074724377026649.jpg"
  },
  {
    "name": "Legacy Estate Solutions, Inc.",
    "cityName": "Dade City",
    "stateCode": "FL",
    "rating": 3.7,
    "reviewCount": 18,
    "phoneNumber": "(352) 206-0406",
    "websiteUrl": "http://legacyestatesolutions.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/35825/636702966221668413.jpg"
  },
  {
    "name": "Diane's Estate Sales",
    "cityName": "New Port Richey",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 505-2856",
    "websiteUrl": "https://www.dianesestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/160397/639075024300009934.jpg"
  },
  {
    "name": "Tampa Auction House",
    "cityName": "Tampa",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(813) 423-8000",
    "websiteUrl": "http://www.TampaAuctionHouse.com",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/36824/635500434277862000.jpg"
  },
  {
    "name": "Richard Stedman Estate Services LLC",
    "cityName": "Tampa",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 4,
    "phoneNumber": "(727) 515-5985",
    "websiteUrl": "http://www.museumappraisers.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/27206/636296368732539467.jpg"
  },
  {
    "name": "Welcome Home",
    "cityName": "Clearwater",
    "stateCode": "FL",
    "rating": 4.4,
    "reviewCount": 36,
    "phoneNumber": "(727) 585-7271",
    "websiteUrl": "http://www.redefinedliving.com",
    "logoUrl": ""
  },
  {
    "name": "Estate Sales by Calvin Coolidge",
    "cityName": "Largo",
    "stateCode": "FL",
    "rating": 3.7,
    "reviewCount": 3,
    "phoneNumber": "(863) 397-8197",
    "websiteUrl": "http://www.coolidgeestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/6989/635997717624985935.jpg"
  },
  {
    "name": "Bng Auto Brokers",
    "cityName": "Clearwater",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 585-6130",
    "websiteUrl": "http://bngautobrokers.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/142529/637239029342280292.jpg"
  },
  {
    "name": "Elizabeth Love Designs & Estate Sales",
    "cityName": "Tampa",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 12,
    "phoneNumber": "(813) 760-0664",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Meridian Estate Sales",
    "cityName": "Holiday",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 255-3876",
    "websiteUrl": "http://meridianestatesales.weebly.com",
    "logoUrl": ""
  },
  {
    "name": "Sunglo Antiques & Coins",
    "cityName": "Spring Hill",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 342-1756",
    "websiteUrl": "https://www.auctionninja.com/sunglo-antique-and-coins/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/145277/637932659037208341.jpg"
  },
  {
    "name": "In Good Hands - Certified Estate Sales LLC",
    "cityName": "Largo",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 263-5653",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/131354/636271464302155309.jpg"
  },
  {
    "name": "Antiques And Fine Art",
    "cityName": "Clearwater",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 466-6565",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "ezDownsizing Tampa, LLC",
    "cityName": "Tampa",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 26,
    "phoneNumber": "(813) 459-8036",
    "websiteUrl": "https://tampa.ezdownsizing.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/146276/637753762685128896.jpg"
  },
  {
    "name": "Seasidesales",
    "cityName": "Saint Petersburg",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 612-7014",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "RAD Estate Sales",
    "cityName": "Dade City",
    "stateCode": "FL",
    "rating": 4.7,
    "reviewCount": 27,
    "phoneNumber": "(352) 206-4076",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Maximo Estate Auction",
    "cityName": "Saint Petersburg",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(202) 258-8119",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Jake's Estate Sales",
    "cityName": "Saint Petersburg",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 317-6730",
    "websiteUrl": "http://www.jakesestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/143432/637326091287378810.jpg"
  },
  {
    "name": "Sunny Estate Sales",
    "cityName": "Clearwater",
    "stateCode": "FL",
    "rating": 4.7,
    "reviewCount": 3,
    "phoneNumber": "(727) 266-5320",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Ultimate Estate Sales, Inc",
    "cityName": "Clearwater",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 218-7705",
    "websiteUrl": "http://www.ultimateestatesales.com",
    "logoUrl": ""
  },
  {
    "name": "Gulfstate Estate Liquidations",
    "cityName": "San Antonio",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(757) 679-5666",
    "websiteUrl": "http://gulfstateliquidations.com",
    "logoUrl": ""
  },
  {
    "name": "Premier Estate Auctions",
    "cityName": "Tampa",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(256) 565-3393",
    "websiteUrl": "https://www.premierestateauctions.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/145739/637536021927821463.jpg"
  },
  {
    "name": "Estate Sales Service/Lynn O'Keefe Auction Co.",
    "cityName": "Riverview",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 514-1460",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/2843/636506777910860064.jpg"
  },
  {
    "name": "Granny's Auction House",
    "cityName": "Clearwater",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 96,
    "phoneNumber": "(727) 572-1567",
    "websiteUrl": "http://grannysauction.net",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/35870/636845541075025083.jpg"
  },
  {
    "name": "Estate Sales By Ana Maria",
    "cityName": "Oldsmar",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 148,
    "phoneNumber": "(727) 504-6633",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Sassyfras Estate Sales",
    "cityName": "Hudson",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 992-1460",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Perfect Pieces Consignment",
    "cityName": "Brandon",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 2,
    "phoneNumber": "(813) 808-9808",
    "websiteUrl": "http://perfectpieces.biz",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/36302/635495926827383310.jpg"
  },
  {
    "name": "Katrina Estates",
    "cityName": "Pinellas Park",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 303-5129",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Patricia Starr Estate Sales",
    "cityName": "Largo",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 1,
    "phoneNumber": "(727) 421-4254",
    "websiteUrl": "http://EstateSalesStPete.com",
    "logoUrl": ""
  },
  {
    "name": "Plh Organize",
    "cityName": "Dunedin",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(414) 687-0635",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Tampa Estate Sales",
    "cityName": "Tampa",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 12,
    "phoneNumber": "(813) 416-1360",
    "websiteUrl": "http://www.TampaEstateSales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/6473/635961721670910502.jpg"
  },
  {
    "name": "New Hope Antiques",
    "cityName": "Brandon",
    "stateCode": "FL",
    "rating": 4.7,
    "reviewCount": 41,
    "phoneNumber": "(813) 857-6220",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Elite Auction Services",
    "cityName": "Spring Hill",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 4,
    "phoneNumber": "(352) 942-0633",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Checkered Past Antiques And Estate Sales",
    "cityName": "Spring Hill",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 942-6859",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "B & B Baubles & Fun Stuff",
    "cityName": "Wesley Chapel",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 542-4615",
    "websiteUrl": "http://www.baublesandfunstuff.com/",
    "logoUrl": ""
  },
  {
    "name": "Auction Events",
    "cityName": "Saint Petersburg",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(818) 497-5503",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "“the Guys” Professional Estate Liquidators",
    "cityName": "Pinellas Park",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(423) 967-9494",
    "websiteUrl": "http://www.TheEstateGuys.Net",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/149447/637905676753483143.jpg"
  },
  {
    "name": "Indian Bay Estate Sales",
    "cityName": "Spring Hill",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 688-8883",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Vintage Roost",
    "cityName": "Tampa",
    "stateCode": "FL",
    "rating": 4.4,
    "reviewCount": 214,
    "phoneNumber": "(813) 304-2134",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/141995/637163348850229302.jpg"
  },
  {
    "name": "Florida Estate Sale Solutions",
    "cityName": "Saint Petersburg",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 65,
    "phoneNumber": "(727) 359-4236",
    "websiteUrl": "http://www.flestatesalesolutions.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/155090/638173733848541362.jpg"
  },
  {
    "name": "Estate Sale Of Tampa Bay",
    "cityName": "Tampa",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 12,
    "phoneNumber": "(813) 300-0804",
    "websiteUrl": "http://estatesalesoftampabayfl.com/",
    "logoUrl": ""
  },
  {
    "name": "Antiques & Estate Sellers",
    "cityName": "Spring Hill",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 16,
    "phoneNumber": "(352) 835-1784",
    "websiteUrl": "http://www.antiquesestatesellers.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/43589/636117053619473873.jpg"
  },
  {
    "name": "Creative Connections Estate Sales & Downsizing",
    "cityName": "Safety Harbor",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 148,
    "phoneNumber": "(727) 831-3371",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Odd Lots Estate Sales",
    "cityName": "Dunedin",
    "stateCode": "FL",
    "rating": 3.8,
    "reviewCount": 25,
    "phoneNumber": "(727) 692-5973",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/147596/637678773478347946.jpg"
  },
  {
    "name": "Linesiders Outfitters",
    "cityName": "Land O Lakes",
    "stateCode": "FL",
    "rating": 1.0,
    "reviewCount": 1,
    "phoneNumber": "(813) 929-7272",
    "websiteUrl": "http://linesidersoutfitters.com/linesiders-fishing-hunting-camping-consignment-6/estate-liquidation/",
    "logoUrl": ""
  },
  {
    "name": "Auctions Prime, Llc.",
    "cityName": "Oldsmar",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 744-7573",
    "websiteUrl": "http://www.AuctionsPrime.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/150848/637947191435843540.jpg"
  },
  {
    "name": "Hope Street Auction",
    "cityName": "Tarpon Springs",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 937-9400",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Burns White Galleries",
    "cityName": "Tampa",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(813) 288-0022",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Affordable Estate Sales",
    "cityName": "Port Richey",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 14,
    "phoneNumber": "(727) 810-4912",
    "websiteUrl": "http://www.affordableestatesale.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/9251/636342840738348481.jpg"
  },
  {
    "name": "J&j Liquidations",
    "cityName": "Pinellas Park",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 204-9071",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Slades Trades",
    "cityName": "Clearwater",
    "stateCode": "FL",
    "rating": 4.2,
    "reviewCount": 47,
    "phoneNumber": "(727) 223-4901",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "V Galleries Llc/vintage Designs By Lillie Victoria",
    "cityName": "Saint Petersburg",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 709-1335",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Estate Liquidation Galleries",
    "cityName": "Clearwater",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 484-0146",
    "websiteUrl": "http://www.estateliquidationgalleries.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/111956/636353002789366328.jpg"
  },
  {
    "name": "Timeless Heritage Jewelry & Estate Sales",
    "cityName": "Clearwater",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 614-1522",
    "websiteUrl": "http://www.timelessheritageestatesales.com",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/24050/635640371871368047.jpg"
  },
  {
    "name": "Right Directions, LLC",
    "cityName": "Largo",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 510-3441",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/17558/636258958573613352.jpg"
  },
  {
    "name": "Step Above Estate Sales",
    "cityName": "New Port Richey",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 255-9669",
    "websiteUrl": "http://www.astepaboveestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/134561/636569258411254780.jpg"
  },
  {
    "name": "Rose Estate Sales, LLC",
    "cityName": "Palm Harbor",
    "stateCode": "FL",
    "rating": 2.9,
    "reviewCount": 15,
    "phoneNumber": "(727) 460-1537",
    "websiteUrl": "http://www.RoseEstateSales.com",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/67196/635689419731284455.jpg"
  },
  {
    "name": "Irina's Art Gallery Llc.",
    "cityName": "Holiday",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 2,
    "phoneNumber": "(215) 816-8132",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Transition Squad USA, Inc.",
    "cityName": "Saint Petersburg",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(813) 497-4187 x303",
    "websiteUrl": "http://transitionsquad.com?aid=28&tid=1",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/134180/636533658353116852.jpg"
  },
  {
    "name": "J And J Estate Sales",
    "cityName": "New Port Richey",
    "stateCode": "FL",
    "rating": 4.1,
    "reviewCount": 7,
    "phoneNumber": "(813) 810-5910",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Caring Transitions Of Seminole",
    "cityName": "Seminole",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 539-6110",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/155684/638476790214284778.jpg"
  },
  {
    "name": "Nancy S. Hilbert, Inc",
    "cityName": "Brandon",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Clean Out",
    "cityName": "Tampa",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(813) 530-8544",
    "websiteUrl": "http://www.cleanoutapp.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/166280/638755197289575934.jpg"
  },
  {
    "name": "Vicki's Treasures Estate Sales, LLC",
    "cityName": "Odessa",
    "stateCode": "FL",
    "rating": 2.9,
    "reviewCount": 15,
    "phoneNumber": "(517) 403-1389",
    "websiteUrl": "https://vickistreasuresestatesales.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/154343/638125903757918637.jpg"
  },
  {
    "name": "@ Your Service Estate Sales",
    "cityName": "Clearwater",
    "stateCode": "FL",
    "rating": 4.1,
    "reviewCount": 14,
    "phoneNumber": "(937) 602-5291",
    "websiteUrl": "http://at-your-service.vpweb.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/22649/638427428066508630.jpg"
  },
  {
    "name": "Artifacts Estate Sale Services",
    "cityName": "Holiday",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 296-6221",
    "websiteUrl": "https://www.artifactsestatesale.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/167519/638831686926525971.jpg"
  },
  {
    "name": "Smooth Sale-ing Estate Sales",
    "cityName": "Brooksville",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 16,
    "phoneNumber": "(352) 279-1816",
    "websiteUrl": "http://smoothsale-ingestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/6389/636551938019610049.jpg"
  },
  {
    "name": "Accurate Gun Auctions",
    "cityName": "Port Richey",
    "stateCode": "FL",
    "rating": 4.9,
    "reviewCount": 365,
    "phoneNumber": "(727) 505-8916",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Royal Heritage Group, LLC",
    "cityName": "Mount Dora",
    "stateCode": "FL",
    "rating": 1.0,
    "reviewCount": 1,
    "phoneNumber": "(321) 616-5471",
    "websiteUrl": "http://rhgalleries.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/165566/638899306816931688.jpg"
  },
  {
    "name": "Carol's Closet",
    "cityName": "New Port Richey",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(586) 838-5518",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/155000/638609153822189446.jpg"
  },
  {
    "name": "Caring Transitions Of Palm Harbor",
    "cityName": "Dunedin",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 361-0620",
    "websiteUrl": "http://www.caringtransitionsofpalmharbor.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/141740/638490808813783962.jpg"
  },
  {
    "name": "A Pleasant Cove",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 631-1278",
    "websiteUrl": "http://www.pleasantcove.net",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/2375/637019918602127442.jpg"
  },
  {
    "name": "Caring Transitions Of Sun City",
    "cityName": "Valrico",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(813) 515-2160",
    "websiteUrl": "https://ctbids.com/estate-sales/SunCity-FL",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/163448/638557072249078067.jpg"
  },
  {
    "name": "The Clean Out King",
    "cityName": "Saint Petersburg",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 74,
    "phoneNumber": "(727) 251-4540",
    "websiteUrl": "http://www.thecleanoutking.com",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/9797/635647337804469491.jpg"
  },
  {
    "name": "Mace's Stuff Estate Sales",
    "cityName": "Wesley Chapel",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 4,
    "phoneNumber": "(813) 406-1014",
    "websiteUrl": "http://macesstuffestatesales.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/37391/638936335890132855.jpg"
  },
  {
    "name": "Organizing Life Services Estate Sales",
    "cityName": "Palm Harbor",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 148,
    "phoneNumber": "(727) 542-6028",
    "websiteUrl": "https://organizinglifeservices.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/17210/638097305014108638.jpg"
  },
  {
    "name": "Blue Moon Estate Sales Of Pinellas County",
    "cityName": "Palm Harbor",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 633-4520",
    "websiteUrl": "https://www.bluemoonestatesales.com/pinellas-county/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/154628/638149350001611449.jpg"
  },
  {
    "name": "Cowgirls Market Days & Estate Sales",
    "cityName": "Saint Petersburg",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 65,
    "phoneNumber": "(727) 417-4104",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Auction Springs",
    "cityName": "Hudson",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 619-9855",
    "websiteUrl": "http://www.auctionsprings.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/145091/637487106911544705.jpg"
  },
  {
    "name": "Tampa Estate Solutions",
    "cityName": "Safety Harbor",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 430-5626",
    "websiteUrl": "http://www.tampaestatesolutions.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/21440/638869738407880823.jpg"
  },
  {
    "name": "T&T Estate Sales LLC",
    "cityName": "Brandon",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(813) 668-6520",
    "websiteUrl": "https://www.ttestatesalesllc.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/158054/638455113660299041.jpg"
  },
  {
    "name": "Treasures Past Estate Sales, LLC",
    "cityName": "Palm Harbor",
    "stateCode": "FL",
    "rating": 2.9,
    "reviewCount": 15,
    "phoneNumber": "(727) 364-9205",
    "websiteUrl": "http://www.treasurespastestate.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/123077/636293475425792384.jpg"
  },
  {
    "name": "Tk Estate Liquidations",
    "cityName": "Spring Hill",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 8,
    "phoneNumber": "(352) 667-1727",
    "websiteUrl": "http://www.tkestateliquidations.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/133661/636478158885125031.jpg"
  },
  {
    "name": "Nordstrom Estate Sales And Services",
    "cityName": "Safety Harbor",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Blue Moon Estate Sales Of Metro Tampa East & North",
    "cityName": "Riverview",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(813) 893-0661",
    "websiteUrl": "https://www.bluemoonestatesales.com/metro-tampa-east/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/152339/638055110380352413.jpg"
  },
  {
    "name": "Gentle Touch Estate Sales",
    "cityName": "Apollo Beach",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 2,
    "phoneNumber": "(813) 812-0780",
    "websiteUrl": "https://gentletouchestatesales.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/166187/638745519548529856.jpg"
  },
  {
    "name": "Estate Sales By Leslie",
    "cityName": "Tarpon Springs",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 148,
    "phoneNumber": "(727) 410-8270",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "United Estate Liquidations Inc",
    "cityName": "Spring Hill",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 345-0493",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/150338/637909999731455764.jpg"
  },
  {
    "name": "Complete Estate Liquidation",
    "cityName": "Palm Harbor",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 5,
    "phoneNumber": "(727) 510-5085",
    "websiteUrl": "http://celsales.com",
    "logoUrl": ""
  },
  {
    "name": "Those Two Girls Estate Sales",
    "cityName": "Clearwater",
    "stateCode": "FL",
    "rating": 4.1,
    "reviewCount": 14,
    "phoneNumber": "(727) 215-8555",
    "websiteUrl": "http://www.thosetwogirlsestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/130646/637238996569780674.jpg"
  },
  {
    "name": "The Gl0bal Emp0rium",
    "cityName": "Summerfield",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(317) 201-9932",
    "websiteUrl": "http://theglobalempo.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/156512/638267020518743052.jpg"
  },
  {
    "name": "Blackwell Auctions LLC",
    "cityName": "Clearwater",
    "stateCode": "FL",
    "rating": 4.7,
    "reviewCount": 85,
    "phoneNumber": "(727) 546-0200",
    "websiteUrl": "http://www.blackwellauctions.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/15110/635956886845017239.jpg"
  },
  {
    "name": "The Good Years",
    "cityName": "Tampa",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(512) 564-3212",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/142634/637594151115996150.jpg"
  },
  {
    "name": "Milone Vintage Estate Sales",
    "cityName": "Clearwater",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 118,
    "phoneNumber": "(727) 534-5345",
    "websiteUrl": "http://www.milonevintage.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/160637/638496009458975361.jpg"
  },
  {
    "name": "Family Nest Pinellas North",
    "cityName": "Palm Harbor",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 607-1446",
    "websiteUrl": "https://familynestestates.com/family-nest-pinellas-north/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/171302/639050631877055640.jpg"
  },
  {
    "name": "Lee Ann's Estate Sales",
    "cityName": "Clearwater",
    "stateCode": "FL",
    "rating": 4.1,
    "reviewCount": 14,
    "phoneNumber": "(727) 584-1159",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Southshore Relocation Specialist",
    "cityName": "Apollo Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(813) 395-3336",
    "websiteUrl": "http://www.southshorerelo.com",
    "logoUrl": ""
  },
  {
    "name": "Starling Estate Sales",
    "cityName": "Largo",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 1,
    "phoneNumber": "(727) 433-1552",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Abbott Estate Sales",
    "cityName": "New Port Richey",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 14,
    "phoneNumber": "(727) 809-0424",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Done Deal Estate Sales, LLC",
    "cityName": "Tampa",
    "stateCode": "FL",
    "rating": 3.7,
    "reviewCount": 26,
    "phoneNumber": "(813) 417-5423",
    "websiteUrl": "http://www.donedealestatesales.net",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/27884/637651573677874692.jpg"
  },
  {
    "name": "Mary's Estate Sales",
    "cityName": "Palm Harbor",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 1,
    "phoneNumber": "(727) 686-1376",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/159488/638448208721343247.jpg"
  },
  {
    "name": "Heritage",
    "cityName": "Seminole",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 510-3659",
    "websiteUrl": "http://www.heritageestatesalesfl.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/157781/638343603819161270.jpg"
  },
  {
    "name": "Baby Boomers Estate Sales",
    "cityName": "Clearwater",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 33,
    "phoneNumber": "(727) 235-2843",
    "websiteUrl": "http://www.babyboomersestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/141632/637116211910920650.jpg"
  },
  {
    "name": "Absolute Advantage Estate Sales LLC",
    "cityName": "Holiday",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 14,
    "phoneNumber": "(727) 509-5981",
    "websiteUrl": "http://www.absoluteadvantage.net",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/134147/636529128626769368.jpg"
  },
  {
    "name": "More Splendid Things",
    "cityName": "Ocala",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 875-8611",
    "websiteUrl": "http://www.moresplendidthings.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/133010/639072682740795298.jpg"
  },
  {
    "name": "A Vintage Estate, LLC",
    "cityName": "Belleair Beach",
    "stateCode": "FL",
    "rating": 3.6,
    "reviewCount": 36,
    "phoneNumber": "(609) 369-6497",
    "websiteUrl": "https://www.avintageestatellc.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/65351/636460385228656520.jpg"
  },
  {
    "name": "Serenity Gallerie",
    "cityName": "Saint Petersburg",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 351-2622",
    "websiteUrl": "https://serenitygallerie.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/171113/639052985553058919.jpg"
  },
  {
    "name": "Renee's Estate Sales, LLC",
    "cityName": "Oldsmar",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(813) 363-4612",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Interbay Estate Sales",
    "cityName": "Saint Petersburg",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 481-8915",
    "websiteUrl": "http://www.InterbayEstateSales.Com",
    "logoUrl": ""
  },
  {
    "name": "Ageless Accents",
    "cityName": "Lake Wales",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(863) 676-0680",
    "websiteUrl": "http://www.AgelessAccents.com",
    "logoUrl": ""
  },
  {
    "name": "Organized Haven - Maxsold",
    "cityName": "Lakeland",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 68,
    "phoneNumber": "(863) 268-4041",
    "websiteUrl": "http://www.organizedhaven.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/157319/638317572869249934.jpg"
  },
  {
    "name": "Gallivan Estate Sale & Personal Property Liquidators",
    "cityName": "Davenport",
    "stateCode": "FL",
    "rating": 3.3,
    "reviewCount": 32,
    "phoneNumber": "(716) 573-3110",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Relics Reclaimed",
    "cityName": "Lake Wales",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(863) 241-7319",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Mid Florida Estate Sales LLC",
    "cityName": "Lakeland",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 73,
    "phoneNumber": "(863) 874-0158",
    "websiteUrl": "http://www.midfloridaestatesales.net",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/123326/636016896337086287.jpg"
  },
  {
    "name": "Treasure Hunters",
    "cityName": "Winter Haven",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(863) 875-7678",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Curated Estate Sales",
    "cityName": "Lakeland",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 73,
    "phoneNumber": "(863) 899-0483",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/143771/638092267497625719.jpg"
  },
  {
    "name": "Lloyds Of Lakeland",
    "cityName": "Lakeland",
    "stateCode": "FL",
    "rating": 4.3,
    "reviewCount": 261,
    "phoneNumber": "(863) 640-3347",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Phil Riner Auctions, LLC",
    "cityName": "Winter Haven",
    "stateCode": "FL",
    "rating": 2.6,
    "reviewCount": 5,
    "phoneNumber": "(863) 299-6031",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Peace River Estate Liquidation",
    "cityName": "Bartow",
    "stateCode": "FL",
    "rating": 3.2,
    "reviewCount": 123,
    "phoneNumber": "(863) 512-3933",
    "websiteUrl": "https://www.facebook.com/profile.php?id=61576885056148",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/169004/638907841854638877.jpg"
  },
  {
    "name": "863 Auctions",
    "cityName": "Lakeland",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 764-2121",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Hi, It’s Terri!!!",
    "cityName": "Clermont",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 391-4365",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/140909/637133936693637951.jpg"
  },
  {
    "name": "Florida Home Estate Sales, LLC",
    "cityName": "Winter Haven",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 16,
    "phoneNumber": "(407) 470-2350",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/153869/638090429164059929.jpg"
  },
  {
    "name": "Thunder Promotions LLC",
    "cityName": "Lakeland",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 2,
    "phoneNumber": "",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/171359/639054606946103889.jpg"
  },
  {
    "name": "Heritage Sales & Appraisals",
    "cityName": "Maitland",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 412-4121",
    "websiteUrl": "http://www.heritagesalesandappraisals.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/2399/637584009831442786.jpg"
  },
  {
    "name": "Dominic Estate Sales And Logistics",
    "cityName": "Ocala",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 76,
    "phoneNumber": "(352) 421-0853",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/171089/639036857830210345.jpg"
  },
  {
    "name": "Fee Slasher Thrift LLC Estates",
    "cityName": "Inverness",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(315) 767-2504",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/167396/638917613439213290.jpg"
  },
  {
    "name": "Heritage Treasures Estate Sales LLC",
    "cityName": "Lakeland",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(863) 660-0921",
    "websiteUrl": "https://www.facebook.com/HeritageTreasuresLLC",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/158702/638414678153597209.jpg"
  },
  {
    "name": "Treasures Unlimited",
    "cityName": "Winter Haven",
    "stateCode": "FL",
    "rating": 3.7,
    "reviewCount": 16,
    "phoneNumber": "(863) 307-1968",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Satellite Prolink, Inc",
    "cityName": "Eaton Park",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(863) 606-0200",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Bev Hovious Auction Company LLC",
    "cityName": "Winter Haven",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(863) 299-9227",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Florida Estate Sale Pros",
    "cityName": "Lakeland",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 73,
    "phoneNumber": "(724) 993-3026",
    "websiteUrl": "https://easycheapestatesales.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/157769/638343213167531646.jpg"
  },
  {
    "name": "All In The Family Estate Sales",
    "cityName": "Winter Haven",
    "stateCode": "FL",
    "rating": 4.4,
    "reviewCount": 13,
    "phoneNumber": "(202) 497-4912",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/147548/637677447881168536.jpg"
  },
  {
    "name": "Aaa Estate Sales Of Florida",
    "cityName": "Lakeland",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 16,
    "phoneNumber": "(863) 226-2823",
    "websiteUrl": "http://www.estatesalesofcentralfl.com",
    "logoUrl": ""
  },
  {
    "name": "Jerry's All American Auctions",
    "cityName": "Davenport",
    "stateCode": "FL",
    "rating": 4.0,
    "reviewCount": 20,
    "phoneNumber": "(407) 791-2776",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Vern's Antique Mall & Art Gallery",
    "cityName": "Lakeland",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 1,
    "phoneNumber": "(863) 859-7161",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Everest Estate Sales LLC",
    "cityName": "Davenport",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(863) 216-6080",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/163271/638544171916825972.jpg"
  },
  {
    "name": "Collector's Connection",
    "cityName": "Lakeland",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 124,
    "phoneNumber": "(813) 992-2191",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Peterson Personal Property Appraisals, LLC",
    "cityName": "Lakeland",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(863) 640-0440",
    "websiteUrl": "http://www.ppp-appraisals.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/169181/638918173928180269.jpg"
  },
  {
    "name": "Bittersweet Memories Estate Sales",
    "cityName": "Lake Wales",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(863) 528-3188",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/12902/636158574074343475.jpg"
  },
  {
    "name": "Cheek House Estate Sales",
    "cityName": "Lakeland",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 73,
    "phoneNumber": "(863) 640-5032",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Treasure Hunters",
    "cityName": "Winter Haven",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(863) 585-6789",
    "websiteUrl": "https://TreasureHunters.Pro",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/11555/638511249857715828.jpg"
  },
  {
    "name": "Southern Gentlemen Antiques And More",
    "cityName": "Lakeland",
    "stateCode": "FL",
    "rating": 4.7,
    "reviewCount": 44,
    "phoneNumber": "(863) 510-5845",
    "websiteUrl": "http://www.southerngentlemenantiques.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/154118/638110204216915048.jpg"
  },
  {
    "name": "Luka Blue LLC",
    "cityName": "Lakeland",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(863) 370-0516",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/148655/637785701151337110.jpg"
  },
  {
    "name": "At Your Service Estate Sales Florida, LLC",
    "cityName": "Lakeland",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(206) 858-2844",
    "websiteUrl": "https://www.estatesalesfla.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/18365/636440223191599016.jpg"
  },
  {
    "name": "Bcp Estate Sales",
    "cityName": "Lakeland",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 73,
    "phoneNumber": "(863) 808-9193",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/165989/638728323918152558.jpg"
  },
  {
    "name": "Found By Hand",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(866) 255-4206",
    "websiteUrl": "https://foundbyhand.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/136160/636667359652217494.jpg"
  },
  {
    "name": "A BJ Brock Estate Sale, LLC",
    "cityName": "Lakeland",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(863) 397-1841",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Emanon Auctions Fl",
    "cityName": "Davenport",
    "stateCode": "FL",
    "rating": 2.2,
    "reviewCount": 46,
    "phoneNumber": "(732) 637-3295",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Blue Ribbon Liquidations LLC",
    "cityName": "Lakeland",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(863) 812-9443",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Spotted Cow Estate Sales",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 118,
    "phoneNumber": "(407) 434-9138",
    "websiteUrl": "https://spottedcowsales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/139442/637085075600884729.jpg"
  },
  {
    "name": "Kincaid Auction Realty LLC",
    "cityName": "Lakeland",
    "stateCode": "FL",
    "rating": 3.2,
    "reviewCount": 6,
    "phoneNumber": "(863) 666-1977",
    "websiteUrl": "http://www.kincaid.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/139517/636945731557042649.jpg"
  },
  {
    "name": "Baron of Antiques",
    "cityName": "Palm Bay",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 795-3625",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Estate Liquidators",
    "cityName": "Cocoa",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 632-8777",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "K & M Sales",
    "cityName": "Melbourne",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 255-1308",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "the first Look",
    "cityName": "Satellite Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 288-0912",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Heritage Estate Sales",
    "cityName": "Melbourne",
    "stateCode": "FL",
    "rating": 3.2,
    "reviewCount": 78,
    "phoneNumber": "(321) 626-5202",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Liquidate Estates",
    "cityName": "Merritt Island",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(732) 503-2615",
    "websiteUrl": "http://www.liquidpros.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/132089/636327778744464026.jpg"
  },
  {
    "name": "Estate Sales By Flick & Company",
    "cityName": "Melbourne",
    "stateCode": "FL",
    "rating": 3.2,
    "reviewCount": 78,
    "phoneNumber": "(321) 848-1071",
    "websiteUrl": "http://www.estateflick.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/137459/636758115737858212.jpg"
  },
  {
    "name": "Trinity Estate Services",
    "cityName": "Rockledge",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 368-4234",
    "websiteUrl": "http://www.trinityestateservices.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/17825/636553667920972513.jpg"
  },
  {
    "name": "Estate Sales by Winkie",
    "cityName": "Melbourne",
    "stateCode": "FL",
    "rating": 3.3,
    "reviewCount": 32,
    "phoneNumber": "(321) 254-6379",
    "websiteUrl": "http://www.arflin.com",
    "logoUrl": ""
  },
  {
    "name": "Roberts And Co. Estate Sales",
    "cityName": "Cocoa",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 960-3632",
    "websiteUrl": "http://www.BrevardCountyEstateSales.com",
    "logoUrl": ""
  },
  {
    "name": "Rocket City Retro",
    "cityName": "Cocoa",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 80,
    "phoneNumber": "(321) 446-0129",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Happy Hour Antiques & Auctions",
    "cityName": "Cape Canaveral",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 355-9235",
    "websiteUrl": "http://www.321antiques.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/146756/637610316293225484.jpg"
  },
  {
    "name": "EZ  Estate Liquidators",
    "cityName": "Melbourne Beach",
    "stateCode": "FL",
    "rating": 4.4,
    "reviewCount": 26,
    "phoneNumber": "(321) 723-3281",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Brevard Estate Liquidations",
    "cityName": "Palm Bay",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 745-0580",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Village Vintage",
    "cityName": "Cocoa",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(305) 972-4296",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Rollin Acres Estate Sales And Collectibles",
    "cityName": "Palm Bay",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 25,
    "phoneNumber": "(321) 890-9498",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Shawk Liquidation Inc.",
    "cityName": "Rockledge",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 506-0901",
    "websiteUrl": "http://www.shawkliquidation.com",
    "logoUrl": ""
  },
  {
    "name": "Antique Connection",
    "cityName": "Melbourne",
    "stateCode": "FL",
    "rating": 4.2,
    "reviewCount": 33,
    "phoneNumber": "(321) 604-0464",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Turtle Bay Estate Sales",
    "cityName": "Melbourne",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(925) 660-5990",
    "websiteUrl": "http://www.turtlebayestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/148490/637769042367288533.jpg"
  },
  {
    "name": "Island Girls",
    "cityName": "Indialantic",
    "stateCode": "FL",
    "rating": 4.9,
    "reviewCount": 12,
    "phoneNumber": "(315) 794-1153",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Flip Flop Beach Estate Sales, LLC",
    "cityName": "Satellite Beach",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 25,
    "phoneNumber": "(727) 457-7619",
    "websiteUrl": "https://flipflopestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/140243/636998280266573888.jpg"
  },
  {
    "name": "Mane Event Liquidations",
    "cityName": "Palm Bay",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 506-1060",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/17570/637504037566652095.jpg"
  },
  {
    "name": "Estates By Trinity",
    "cityName": "Melbourne",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 215-1379",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Estate Liquidator",
    "cityName": "Cocoa",
    "stateCode": "FL",
    "rating": 4.4,
    "reviewCount": 26,
    "phoneNumber": "(631) 664-8312",
    "websiteUrl": "http://www.facebook.com/EstateLiquidator",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/28097/636377435815799976.jpg"
  },
  {
    "name": "Stagecoach Auctions By Wallace",
    "cityName": "Palm Bay",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(757) 871-4360",
    "websiteUrl": "http://auctionsbywallace.com",
    "logoUrl": ""
  },
  {
    "name": "Atlantic to Gulf Estate Services by Terry Bartnik",
    "cityName": "Merritt Island",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 987-8723",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/12965/636242448612016910.jpg"
  },
  {
    "name": "Helping Hands Estate Sales, LLC",
    "cityName": "Palm Bay",
    "stateCode": "FL",
    "rating": 4.4,
    "reviewCount": 11,
    "phoneNumber": "(321) 704-4758",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Southern Magnolia Estate Sales, LLC",
    "cityName": "Melbourne",
    "stateCode": "FL",
    "rating": 3.2,
    "reviewCount": 78,
    "phoneNumber": "(757) 434-1043",
    "websiteUrl": "https://linktr.ee/southernmagnolia",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/166049/638734694513085204.jpg"
  },
  {
    "name": "Advanced Liquidation And Estate Sales",
    "cityName": "Palm Bay",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(770) 710-6212",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Stone Street Apothecary & Antique Marketplace",
    "cityName": "Cocoa",
    "stateCode": "FL",
    "rating": 4.7,
    "reviewCount": 46,
    "phoneNumber": "(321) 749-5535",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Mathesons' A A Auctions",
    "cityName": "Melbourne",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 768-6668",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/9179/637979775922637546.jpg"
  },
  {
    "name": "Rewarding Releases",
    "cityName": "Cocoa",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 544-0547",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/124001/638923570864421763.jpg"
  },
  {
    "name": "Burke & Company Estate Sales",
    "cityName": "Melbourne",
    "stateCode": "FL",
    "rating": 4.1,
    "reviewCount": 16,
    "phoneNumber": "(321) 917-2815",
    "websiteUrl": "http://www.estatesalesbycarole.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/9299/636306360373050112.jpg"
  },
  {
    "name": "GCB Estate Sales, LLC",
    "cityName": "Satellite Beach",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 26,
    "phoneNumber": "(970) 331-1693",
    "websiteUrl": "http://www.gcbestatesales.com",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/37022/635772416633261032.jpg"
  },
  {
    "name": "Capo Estate Sales And Clean Outs",
    "cityName": "Melbourne",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 16,
    "phoneNumber": "(321) 326-3200",
    "websiteUrl": "http://www.capoestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/159695/638454265216524939.jpg"
  },
  {
    "name": "Salt Sales",
    "cityName": "Merritt Island",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 5,
    "phoneNumber": "(321) 704-3599",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/152021/638139720057817743.jpg"
  },
  {
    "name": "The Baron's Den",
    "cityName": "Cocoa",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 505-2277",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/156569/638271072425368788.jpg"
  },
  {
    "name": "Our Favorite Things, LLC",
    "cityName": "Cocoa",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 505-3394",
    "websiteUrl": "http://www.ourfavoritethingsllc.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/12629/635969514851388785.jpg"
  },
  {
    "name": "Antique Treasures",
    "cityName": "Melbourne",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 960-9873",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Designed Events & Interiors",
    "cityName": "Indialantic",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 3,
    "phoneNumber": "(321) 431-4145",
    "websiteUrl": "http://www.eventsinteriors.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/10574/637247459525144897.jpg"
  },
  {
    "name": "Fes",
    "cityName": "Cocoa",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 588-0299",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Onward Estate Sales",
    "cityName": "Palm Bay",
    "stateCode": "FL",
    "rating": 4.9,
    "reviewCount": 12,
    "phoneNumber": "(321) 635-0262",
    "websiteUrl": "https://www.onwardestatesales.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/166544/638774064283470075.jpg"
  },
  {
    "name": "Estate Liquidators by Nancy Leckron",
    "cityName": "Titusville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 917-7576",
    "websiteUrl": "http://www.estateliquidators.me/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/6752/638707368935451875.jpg"
  },
  {
    "name": "Complete Estate Solutions",
    "cityName": "Melbourne Beach",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 3,
    "phoneNumber": "(321) 750-5233",
    "websiteUrl": "http://www.completeestatesolutions.net",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/170657/638997699943921795.jpg"
  },
  {
    "name": "Knick Knack Patty Whack",
    "cityName": "Satellite Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 223-3689",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/21365/636596383757887483.jpg"
  },
  {
    "name": "Estate Sales by Southern Trading Company",
    "cityName": "Melbourne",
    "stateCode": "FL",
    "rating": 3.2,
    "reviewCount": 78,
    "phoneNumber": "(321) 427-6531",
    "websiteUrl": "http://estatesalesbysoutherntradingcompany.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/6953/636060102777789791.jpg"
  },
  {
    "name": "Highlands Estate Sales",
    "cityName": "Rockledge",
    "stateCode": "FL",
    "rating": 3.5,
    "reviewCount": 6,
    "phoneNumber": "(321) 505-3959",
    "websiteUrl": "http://www.highlandsestateservices.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/20855/636402350680871010.jpg"
  },
  {
    "name": "Compassionate Downsizing 4 Seniors",
    "cityName": "Melbourne",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 576-2147",
    "websiteUrl": "http://www.compassionatedownsizing4seniors.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/37562/636061244421406697.jpg"
  },
  {
    "name": "Island Estate Sales",
    "cityName": "Merritt Island",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(201) 741-1417",
    "websiteUrl": "",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/119759/635765522791952959.jpg"
  },
  {
    "name": "THEGREATESTATESALE",
    "cityName": "Melbourne",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 848-2773",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/123650/637380014924507374.jpg"
  },
  {
    "name": "Gallery 25",
    "cityName": "Melbourne",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 1,
    "phoneNumber": "(321) 421-6374",
    "websiteUrl": "http://thegallery25.co/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/157388/638321957992763518.jpg"
  },
  {
    "name": "Generations Estate Sales",
    "cityName": "Melbourne",
    "stateCode": "FL",
    "rating": 3.2,
    "reviewCount": 78,
    "phoneNumber": "(321) 622-4198",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Ronda Harber & Company",
    "cityName": "Cape Canaveral",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 544-8405",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Estate Liquidations By Champagne Taste",
    "cityName": "Cocoa",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 604-9611",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "ALLSTATE ESTATE SALE",
    "cityName": "Merritt Island",
    "stateCode": "FL",
    "rating": 2.0,
    "reviewCount": 4,
    "phoneNumber": "(321) 652-8648",
    "websiteUrl": "http://www.allstateestatesale.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/123761/637570523899104284.jpg"
  },
  {
    "name": "Braswell Appraisal Services",
    "cityName": "Satellite Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 432-2499",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Estate Sales by Florida Auctions",
    "cityName": "Melbourne",
    "stateCode": "FL",
    "rating": 3.2,
    "reviewCount": 78,
    "phoneNumber": "(321) 917-1884",
    "websiteUrl": "http://floridaauctions.wix.com/mysite",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/8585/635963281362196195.jpg"
  },
  {
    "name": "Cotton's Estate Treasures",
    "cityName": "Titusville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(772) 201-0972",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/143063/637299424325951516.jpg"
  },
  {
    "name": "Heart 2 Heart Estate Sales",
    "cityName": "Melbourne",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 986-7981",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/139448/636940014997172317.jpg"
  },
  {
    "name": "Jen's Why Not Shoppe LLC",
    "cityName": "Melbourne",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 15,
    "phoneNumber": "(321) 368-0483",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "A-1 Estate Sales",
    "cityName": "Titusville",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 49,
    "phoneNumber": "(815) 263-5395",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/12773/636325405802195629.jpg"
  },
  {
    "name": "A Plus Auctions",
    "cityName": "Cocoa",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 504-7300",
    "websiteUrl": "http://WWW.APLUSAUCTION.COM",
    "logoUrl": ""
  },
  {
    "name": "Antique Connection",
    "cityName": "Melbourne",
    "stateCode": "FL",
    "rating": 4.2,
    "reviewCount": 33,
    "phoneNumber": "(321) 544-7338",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Indian River Estate Sales",
    "cityName": "Melbourne",
    "stateCode": "FL",
    "rating": 3.2,
    "reviewCount": 78,
    "phoneNumber": "(321) 505-5629",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Andria Ruse",
    "cityName": "Titusville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 544-6063",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Auntie Mames Attic",
    "cityName": "Rockledge",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 961-1689",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Absolute Estate Liquidators,llc.",
    "cityName": "Melbourne",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 960-8023",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "The United Estates Sales, LLC",
    "cityName": "Melbourne",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 877-8932",
    "websiteUrl": "https://www.facebook.com/profile.php?id=100093509928271",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/156308/638252822858228017.jpg"
  },
  {
    "name": "Black Table Estate Sales By Brad",
    "cityName": "Merritt Island",
    "stateCode": "FL",
    "rating": 2.0,
    "reviewCount": 4,
    "phoneNumber": "(321) 626-7573",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Space Coast Online Estate Sales",
    "cityName": "Cape Canaveral",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 19,
    "phoneNumber": "(321) 574-6040",
    "websiteUrl": "https://www.spacecoastonlineestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/143015/637296767999115290.jpg"
  },
  {
    "name": "Assured Estate Sales Of Central Florida LLC",
    "cityName": "Cape Canaveral",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 272-0938",
    "websiteUrl": "https://floridaaes.net",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/137231/636745718435207301.jpg"
  },
  {
    "name": "Geiger Gould Properties",
    "cityName": "Melbourne",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 549-8707",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Reale Finds Co. LLC",
    "cityName": "Melbourne",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 794-7273",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "K & R Estate Liquidators LLC",
    "cityName": "Cocoa",
    "stateCode": "FL",
    "rating": 4.7,
    "reviewCount": 12,
    "phoneNumber": "(218) 779-0275",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Integrity Estate Sales and Liquidation Services",
    "cityName": "Satellite Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 271-1670",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/138038/636990000175405208.jpg"
  },
  {
    "name": "Bendito Treasures",
    "cityName": "Palm Bay",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 349-7856",
    "websiteUrl": "http://www.benditoauctions.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/165353/638672173570953849.jpg"
  },
  {
    "name": "A to Z Liquidators",
    "cityName": "Cocoa",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 720-1379",
    "websiteUrl": "http://www.atozestatesales.net",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/11090/636342511364543818.jpg"
  },
  {
    "name": "Unique Treasure Estate Sales",
    "cityName": "Melbourne",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 210-6198",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/163202/638567330521698056.jpg"
  },
  {
    "name": "Your Home To Theirs Estate Sales",
    "cityName": "Cocoa",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 537-5129",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/128996/636138856301867536.jpg"
  },
  {
    "name": "Estate Ninjas",
    "cityName": "Satellite Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 345-7272",
    "websiteUrl": "http://www.facebook.com/estateninjas",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/165839/638789815793326664.jpg"
  },
  {
    "name": "Orange Blossom Estate Sales LLC",
    "cityName": "Merritt Island",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 3,
    "phoneNumber": "(321) 291-3161",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/169601/638939282567358582.jpg"
  },
  {
    "name": "Williams And Williams Estate Sales",
    "cityName": "Titusville",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 49,
    "phoneNumber": "(321) 603-8084",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/144920/637487360567855458.jpg"
  },
  {
    "name": "Diana Minotti Fine Art, Antiques & Collectibles",
    "cityName": "Palm Coast",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 48,
    "phoneNumber": "(386) 237-3233",
    "websiteUrl": "http://www.dianafineart.com",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/7217/635495925941446158.jpg"
  },
  {
    "name": "Funks Antiquary",
    "cityName": "Melbourne",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 427-6795",
    "websiteUrl": "http://www.funksantiques.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/35039/637266388633301916.jpg"
  },
  {
    "name": "Elite Estate Sales",
    "cityName": "Rockledge",
    "stateCode": "FL",
    "rating": 3.3,
    "reviewCount": 32,
    "phoneNumber": "(321) 634-2009",
    "websiteUrl": "https://www.eliteestatesales.net/",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/16544/635495926906039038.jpg"
  },
  {
    "name": "Lunar Legacies",
    "cityName": "Cape Canaveral",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 848-3598",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Treasure Coast Estate Liquidators",
    "cityName": "Indialantic",
    "stateCode": "FL",
    "rating": 4.4,
    "reviewCount": 26,
    "phoneNumber": "(321) 724-1950",
    "websiteUrl": "http://treasurecoastestateliquidators.com",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/29033/635618932144061179.jpg"
  },
  {
    "name": "His wings LLC",
    "cityName": "Melbourne",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 446-6013",
    "websiteUrl": "https://www.sites.google.com/view/hiswings/home",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/147821/638302522106336731.jpg"
  },
  {
    "name": "Estate Sale Sisters Of Brevard",
    "cityName": "Palm Bay",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 300-5668",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/160580/638902686885658905.jpg"
  },
  {
    "name": "Class Act Estate and Moving Sales",
    "cityName": "Melbourne",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 415-9348",
    "websiteUrl": "https://www.thebestactintown.com/current-sales",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/4148/636296916803997477.jpg"
  },
  {
    "name": "The Glass Slipper",
    "cityName": "Merritt Island",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 109,
    "phoneNumber": "(321) 795-4377",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Florida's Finest Estate Sale Company",
    "cityName": "Melbourne",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 49,
    "phoneNumber": "(321) 419-2346",
    "websiteUrl": "http://www.floridasfinestestatesaleco.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/154469/638186450825874231.jpg"
  },
  {
    "name": "Magnolia Corner Appraisals and Liquidations, Inc.",
    "cityName": "Melbourne",
    "stateCode": "FL",
    "rating": 3.2,
    "reviewCount": 9,
    "phoneNumber": "",
    "websiteUrl": "http://www.terryestateappraisals.com",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/9290/635882230180455362.jpg"
  },
  {
    "name": "Auction All Inc.",
    "cityName": "Titusville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 747-7260",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/170123/639064405453753408.jpg"
  },
  {
    "name": "Orlando Vintage Collectibles LLC",
    "cityName": "Clermont",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(202) 288-5563",
    "websiteUrl": "http://ocollectibles.etsy.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/148193/637727823654268718.jpg"
  },
  {
    "name": "Catherines Sales Of Central Florida",
    "cityName": "Kissimmee",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(347) 651-7910",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Outside The Box",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 237-0774",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "The Garage Sale People, LLC",
    "cityName": "Casselberry",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 473-8718",
    "websiteUrl": "",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/35630/635888201504781533.jpg"
  },
  {
    "name": "Truly Treasures LLC",
    "cityName": "Kissimmee",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 201-2284",
    "websiteUrl": "http://trulytreasures.wix.com/trulytreasuresllc",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/129098/636050807003576465.jpg"
  },
  {
    "name": "Estate Sales of Orlando",
    "cityName": "Apopka",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 23,
    "phoneNumber": "(407) 492-0857",
    "websiteUrl": "http://www.estatesalesoforlando.com",
    "logoUrl": ""
  },
  {
    "name": "Orlando Florida Estate Sales & Auction Company",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 23,
    "phoneNumber": "(800) 524-1032",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Suthncomfort Estate Sales",
    "cityName": "Lady Lake",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 34,
    "phoneNumber": "(352) 753-3208",
    "websiteUrl": "https://www.suthncomfortestatesales.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/133586/636452454625865827.jpg"
  },
  {
    "name": "Modern Estate Sales, LLC.",
    "cityName": "Mount Dora",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 448-8448",
    "websiteUrl": "http://www.modernestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/143642/637342654576841796.jpg"
  },
  {
    "name": "Freds Auction",
    "cityName": "Saint Cloud",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 892-2838",
    "websiteUrl": "http://www.fredsauction.com",
    "logoUrl": ""
  },
  {
    "name": "Estatemasters Of Central Florida",
    "cityName": "Altamonte Springs",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 432-7405",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Slide Seller",
    "cityName": "Longwood",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 304-7013",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Sourcing Treasures Estate Sale",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 4.9,
    "reviewCount": 116,
    "phoneNumber": "(213) 373-5107",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Busby Antiques & Collectibles",
    "cityName": "Winter Park",
    "stateCode": "FL",
    "rating": 4.7,
    "reviewCount": 20,
    "phoneNumber": "",
    "websiteUrl": "http://www.busbyantiques.com",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/35495/635495926710659970.jpg"
  },
  {
    "name": "M & M",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 876-1453",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Complete Estate Liquidations",
    "cityName": "Oviedo",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 5,
    "phoneNumber": "(407) 529-6952",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Just Us Estate Sales",
    "cityName": "Apopka",
    "stateCode": "FL",
    "rating": 4.0,
    "reviewCount": 3,
    "phoneNumber": "(407) 497-3517",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "American Bank Auto Liquidators",
    "cityName": "Windermere",
    "stateCode": "FL",
    "rating": 3.7,
    "reviewCount": 3,
    "phoneNumber": "(561) 932-8399",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/138320/636871378239016534.jpg"
  },
  {
    "name": "Auntie Q's Antiques",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 843-8546",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Orange Rhapsody LLC",
    "cityName": "Kissimmee",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 503-9319",
    "websiteUrl": "https://orangerhapsodyllc.wixsite.com/orangerhapsodyllc",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/140567/637025445769790898.jpg"
  },
  {
    "name": "Oldies but Goodies Antiques",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 4.7,
    "reviewCount": 19,
    "phoneNumber": "(407) 415-0978",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Estate Mate Liquidations",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 403-4490",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Incity Marketing",
    "cityName": "Clermont",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 815-3200",
    "websiteUrl": "http://www.incitystore.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/163709/638574715263297491.jpg"
  },
  {
    "name": "Vintage Variety",
    "cityName": "Mount Dora",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 455-2751",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "E & B Liquidators",
    "cityName": "Casselberry",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 767-9058",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Nicksknacks",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(724) 255-1168",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Purge Partners LLC",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 758-2318",
    "websiteUrl": "http://www.purgepartners.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/137867/636792819199545484.jpg"
  },
  {
    "name": "Rapid Estate Liquidators",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 4.0,
    "reviewCount": 60,
    "phoneNumber": "(407) 295-6334",
    "websiteUrl": "http://rapidestateliquidators.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/132188/637093481046534829.jpg"
  },
  {
    "name": "Lake Yale Sales LLC",
    "cityName": "Grand Island",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 167,
    "phoneNumber": "(352) 434-0572",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/155972/638229101030252378.jpg"
  },
  {
    "name": "MBA Estate Sales",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 815-2200",
    "websiteUrl": "http://www.mbaestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/146423/637585983196334416.jpg"
  },
  {
    "name": "Dr Phillips Auction House & Gallery",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 574-3273",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Estate Sales By Mary G",
    "cityName": "Lady Lake",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 205-9229",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "A-Alliance Estate Services, LLC",
    "cityName": "Maitland",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 758-4681",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Florida Home Estate Sales, LLC",
    "cityName": "Clermont",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 4,
    "phoneNumber": "(352) 552-7495",
    "websiteUrl": "http://floridahomeestatesales.com",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/24749/635857290372510580.jpg"
  },
  {
    "name": "WG Auctions",
    "cityName": "Winter Garden",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 697-2710",
    "websiteUrl": "http://www.wgafl.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/133439/636438598265108613.jpg"
  },
  {
    "name": "DHB Estate Services LLC",
    "cityName": "Apopka",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 421-2710",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Blue Hill Estate Sales LLC",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 14,
    "phoneNumber": "(407) 923-9050",
    "websiteUrl": "http://www.bluehillestatesales.com",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/4553/635771296886574083.jpg"
  },
  {
    "name": "Jose",
    "cityName": "Fruitland Park",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 235-5945",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Jim Ferrell's Fun Live Auctions",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 765-4682",
    "websiteUrl": "http://www.JimFerrell.com",
    "logoUrl": ""
  },
  {
    "name": "Trinkets N Treasures Estate Sales",
    "cityName": "Altamonte Springs",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 219-0683",
    "websiteUrl": "http://www.tntestates.com",
    "logoUrl": ""
  },
  {
    "name": "Cauthen Estate Services",
    "cityName": "Leesburg",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 396-6929",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Love It Again Home Decor & More, LLC",
    "cityName": "Lake Mary",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 19,
    "phoneNumber": "(407) 805-0808",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Finds & Fixins Estate Buy Outs",
    "cityName": "Leesburg",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 805-8022",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/139349/636986472605921870.jpg"
  },
  {
    "name": "Vintage Home Warehouse Sales",
    "cityName": "Winter Springs",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 719-2038",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Wilkinson Auction, Inc.",
    "cityName": "Mount Dora",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 383-2282",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Scrub Oak Estate Sales",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 4.9,
    "reviewCount": 116,
    "phoneNumber": "(503) 341-2351",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/153899/638094024406855081.jpg"
  },
  {
    "name": "G&G Estate Sales (Stepp LLC)",
    "cityName": "Winter Garden",
    "stateCode": "FL",
    "rating": 4.3,
    "reviewCount": 18,
    "phoneNumber": "(407) 697-2710",
    "websiteUrl": "http://www.salesbygg.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/24545/636325232564167429.jpg"
  },
  {
    "name": "Iron Horse Trading",
    "cityName": "Clermont",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 27,
    "phoneNumber": "(352) 557-8039",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Southern Trading Company, LLC",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 694-2335",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/34100/637568506570825889.jpg"
  },
  {
    "name": "Interiors For Seniors Estate Sales",
    "cityName": "Apopka",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 19,
    "phoneNumber": "(321) 279-3301",
    "websiteUrl": "http://interiorsforseniors.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/22793/637121391200681360.jpg"
  },
  {
    "name": "Sandberg Estate Sales & Appraisals",
    "cityName": "Maitland",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 299-4179",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Estate Sales By Suzanne",
    "cityName": "Leesburg",
    "stateCode": "FL",
    "rating": 4.0,
    "reviewCount": 24,
    "phoneNumber": "(419) 350-4325",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Red Door Estate Sale",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 23,
    "phoneNumber": "(407) 672-3402",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/29732/637489238224933219.jpg"
  },
  {
    "name": "A+ Estate Sales & Real Estate Services",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 6,
    "phoneNumber": "(407) 927-0050",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/155240/638181647915932404.jpg"
  },
  {
    "name": "Good Find Estate Sales",
    "cityName": "Longwood",
    "stateCode": "FL",
    "rating": 4.9,
    "reviewCount": 116,
    "phoneNumber": "",
    "websiteUrl": "https://www.facebook.com/GoodFindEstateSales",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/143990/637508120648027324.jpg"
  },
  {
    "name": "RBfinearts Cfl Inc",
    "cityName": "Tavares",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 508-5738",
    "websiteUrl": "http://www.compendiumauctions.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/166034/638865605902809850.jpg"
  },
  {
    "name": "Auction Pros",
    "cityName": "Tavares",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(863) 838-5241",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Ashby Household Services, Inc.",
    "cityName": "Eustis",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 218-3375",
    "websiteUrl": "http://www.ashbyhouseholdservices.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/146063/637562343763472365.jpg"
  },
  {
    "name": "John C. Locks Antiques Estate Sale Liquidators, LLC",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 4.9,
    "reviewCount": 116,
    "phoneNumber": "(407) 590-8471",
    "websiteUrl": "http://www.johnclocks.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/21596/636872366535745672.jpg"
  },
  {
    "name": "Rapid Estate Auction Gallery",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 4.0,
    "reviewCount": 60,
    "phoneNumber": "(407) 530-0750",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Estate Sales By Holly Heiden",
    "cityName": "Fruitland Park",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 391-2867",
    "websiteUrl": "http://www.hollyestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/16847/636187194101976940.jpg"
  },
  {
    "name": "A-1 Auction",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 4.4,
    "reviewCount": 7,
    "phoneNumber": "(407) 839-0004",
    "websiteUrl": "http://www.a-1auction.net",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/10958/637038834775316876.jpg"
  },
  {
    "name": "CJ’s Estate Liquidators",
    "cityName": "Kissimmee",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(574) 703-5875",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Amy’s Luxury Estate Sales",
    "cityName": "Winter Park",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 6,
    "phoneNumber": "(407) 907-7316",
    "websiteUrl": "https://amysluxuryestatesales.org/?fbclid=IwRlRTSAM6ozhleHRuA2FlbQIxMAABHu4TagZIrvDOk3XdnncKv6_Od0K2VyXWz-jQsuf-w9FaeAgnXErEXD-Be_9b_aem_hdpvIz98fsaLoWC-AkElWw",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/169595/638939124353882283.jpg"
  },
  {
    "name": "Afterly  Estate Services LLC",
    "cityName": "Altamonte Springs",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(239) 826-4265",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Couchex Marketplace",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 245-5469",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/168998/638913976233575296.jpg"
  },
  {
    "name": "Snells Antiques",
    "cityName": "Oviedo",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 312-4662",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Sunbelt Estate Sales LLC",
    "cityName": "Eustis",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 459-6815",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/137930/636800521228019886.jpg"
  },
  {
    "name": "Poshlando",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 906-5877",
    "websiteUrl": "http://www.poshlandoestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/168269/638867152071111120.jpg"
  },
  {
    "name": "Deborah Stewart Estate Sales",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 496-5051",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Caring Transitions Of Winter Park",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 4.9,
    "reviewCount": 120,
    "phoneNumber": "(321) 234-7554",
    "websiteUrl": "http://www.caringtransitionswinterpark.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/146804/638476736294156260.jpg"
  },
  {
    "name": "Hidden Treasures Estate Sales & Services",
    "cityName": "Debary",
    "stateCode": "FL",
    "rating": 4.4,
    "reviewCount": 12,
    "phoneNumber": "(386) 668-5418",
    "websiteUrl": "http://www.htestatesales.com",
    "logoUrl": ""
  },
  {
    "name": "Hangar 65",
    "cityName": "Winter Garden",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 758-7820",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Alan Frenkel Auction & Realty LLC",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 710-3494",
    "websiteUrl": "http://www.AlanFrenkel.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/142454/637569634068095135.jpg"
  },
  {
    "name": "Revolve Estate Liquidation And Consignment, LLC",
    "cityName": "Altamonte Springs",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(336) 414-9323",
    "websiteUrl": "http://www.revolveestateliquidation.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/151409/637987080558492224.jpg"
  },
  {
    "name": "B. Langston's",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 642-1003",
    "websiteUrl": "http://www.blangston.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/7457/636368115971810452.jpg"
  },
  {
    "name": "The Posh Peacock",
    "cityName": "Winter Park",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 3,
    "phoneNumber": "(407) 818-0082",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/147149/638922007929833796.jpg"
  },
  {
    "name": "Luman E. Beasley Auctioneers",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 721-7001",
    "websiteUrl": "http://www.beasleyauctioneers.com",
    "logoUrl": ""
  },
  {
    "name": "Orlando Estate Sale Ladies, LLC",
    "cityName": "Winter Park",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 663-6981",
    "websiteUrl": "http://orlandoestatesaleladies.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/123266/637212504402567651.jpg"
  },
  {
    "name": "Blue Moon Estate Sales - Orlando East",
    "cityName": "Oviedo",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 448-3093",
    "websiteUrl": "https://bluemoonestatesales.com/orlando-east/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/167348/638827488809045015.jpg"
  },
  {
    "name": "Estatesalesbyandyandkathy LLC",
    "cityName": "Lady Lake",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(260) 450-0291",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "A Fabulous Find Estate Sale Company LLC",
    "cityName": "Deltona",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 375-9354",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/152216/638079296061555372.jpg"
  },
  {
    "name": "Blue Moon Estate Sales Orlando West",
    "cityName": "Ocoee",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 283-7413",
    "websiteUrl": "https://bluemoonestatesales.com/orlando-west/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/170831/639009037879741667.jpg"
  },
  {
    "name": "Tip of the Hat Estate Sales",
    "cityName": "Winter Garden",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 118,
    "phoneNumber": "(615) 957-9785",
    "websiteUrl": "http://www.tipofthehatestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/4808/638173617456686458.jpg"
  },
  {
    "name": "Your Estate Sells, LLC",
    "cityName": "Clermont",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(301) 247-6553",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/156332/638253984674537990.jpg"
  },
  {
    "name": "Bronstein Auction",
    "cityName": "Longwood",
    "stateCode": "FL",
    "rating": 4.1,
    "reviewCount": 106,
    "phoneNumber": "(407) 917-7355",
    "websiteUrl": "http://www.orlando-auctions.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/132101/636328154236756504.jpg"
  },
  {
    "name": "Somewhere In Time",
    "cityName": "Winter Park",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(954) 818-1719",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Inspired Home",
    "cityName": "Winter Park",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 5,
    "phoneNumber": "(407) 339-4747",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Oviedo Antique Malls",
    "cityName": "Oviedo",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 366-3668",
    "websiteUrl": "http://www.oviedoantiquemall.com",
    "logoUrl": ""
  },
  {
    "name": "Estate Mate",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 24,
    "phoneNumber": "(407) 761-8026",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Irving Appraisals Inc",
    "cityName": "Saint Cloud",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 437-4551",
    "websiteUrl": "http://www.irvingappraisals.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/135281/636619178373184076.jpg"
  },
  {
    "name": "Planet Auction, LLC",
    "cityName": "Winter Springs",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(800) 880-4205",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/141413/637094880159788505.jpg"
  },
  {
    "name": "Henns Estate Sales",
    "cityName": "Mount Dora",
    "stateCode": "FL",
    "rating": 4.1,
    "reviewCount": 35,
    "phoneNumber": "(352) 383-7373",
    "websiteUrl": "http://www.hennsestatesales.com",
    "logoUrl": ""
  },
  {
    "name": "All Boxed Up",
    "cityName": "Sanford",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 21,
    "phoneNumber": "(407) 321-9323",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/132110/636328717674137505.jpg"
  },
  {
    "name": "All About Benjamins Estate Sales",
    "cityName": "Maitland",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 221-8496",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Southern Sisters Estate Sales",
    "cityName": "Windermere",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 501-9251",
    "websiteUrl": "",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/102641/635718086807607430.jpg"
  },
  {
    "name": "Nix Antiques, LLC",
    "cityName": "Oakland",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 765-3131",
    "websiteUrl": "http://www.nixantiques.com",
    "logoUrl": ""
  },
  {
    "name": "Graham's Appraisals & Estate Sales, Inc.",
    "cityName": "Winter Park",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 399-4279",
    "websiteUrl": "http://www.grahamsappraisals.com",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/3560/635495925888225516.jpg"
  },
  {
    "name": "Aardvark Estate Sales, Inc.",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 443-6286",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "John Ashley LLC",
    "cityName": "Windermere",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 403-4490",
    "websiteUrl": "http://www.johnashleyinteriors.com",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/123764/635840472365151323.jpg"
  },
  {
    "name": "Guardian & Assoc.",
    "cityName": "Deltona",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(386) 451-0305",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "It's Accomplished",
    "cityName": "Okahumpka",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(323) 683-8558",
    "websiteUrl": "http://www.ItsAccomplished.com",
    "logoUrl": ""
  },
  {
    "name": "Appraisal & Estate Services LLC",
    "cityName": "Oviedo",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 920-0802",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/127577/636937393213835704.jpg"
  },
  {
    "name": "J&a Professional Services",
    "cityName": "Eustis",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 2,
    "phoneNumber": "(317) 459-2741",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Hamacher Estate Sales",
    "cityName": "Lake Mary",
    "stateCode": "FL",
    "rating": 4.1,
    "reviewCount": 35,
    "phoneNumber": "(407) 952-1549",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Antiquesbyus",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 201-9361",
    "websiteUrl": "http://www.oldstuffusa.com",
    "logoUrl": ""
  },
  {
    "name": "Estates & Things Auction Service",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 810-2145",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "A Wing & A Prayer Estate & Liquidation Services",
    "cityName": "Apopka",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(213) 203-4377",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Creating Divine Order",
    "cityName": "Casselberry",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 699-5600",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Estate Synergy",
    "cityName": "Windermere",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(800) 772-6902",
    "websiteUrl": "https://EstateSynergy.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/155435/638194060947199470.jpg"
  },
  {
    "name": "Stepp Above Estate Sales",
    "cityName": "Winter Garden",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 2,
    "phoneNumber": "(407) 697-3401",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/138014/637267391197905981.jpg"
  },
  {
    "name": "A Touch Of Class Estate And Moving Sales",
    "cityName": "Leesburg",
    "stateCode": "FL",
    "rating": 3.6,
    "reviewCount": 48,
    "phoneNumber": "(352) 459-9865",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/138704/636937513639410836.jpg"
  },
  {
    "name": "SNW Industries, LLC",
    "cityName": "Deltona",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(386) 320-6398",
    "websiteUrl": "http://www.snwindustries.com",
    "logoUrl": ""
  },
  {
    "name": "The Estate Sale Company LLC",
    "cityName": "Longwood",
    "stateCode": "FL",
    "rating": 4.9,
    "reviewCount": 116,
    "phoneNumber": "(407) 790-9215",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "All Florida Estate Sales",
    "cityName": "Apopka",
    "stateCode": "FL",
    "rating": 4.9,
    "reviewCount": 116,
    "phoneNumber": "(772) 971-4816",
    "websiteUrl": "http://www.allfloridaestatesales.com",
    "logoUrl": ""
  },
  {
    "name": "Articlesvintage",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 408-2553",
    "websiteUrl": "https://www.articles-vintage.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/158624/638411028698105170.jpg"
  },
  {
    "name": "D&D Estate Sales Plus",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 16,
    "phoneNumber": "(616) 243-6404",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Vintage Regency",
    "cityName": "Maitland",
    "stateCode": "FL",
    "rating": 3.5,
    "reviewCount": 8,
    "phoneNumber": "(561) 317-6075",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/155252/638182173016873933.jpg"
  },
  {
    "name": "Odonnell Estate Sales",
    "cityName": "Fruitland Park",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 551-6213",
    "websiteUrl": "http://odonnellestatesales.com",
    "logoUrl": ""
  },
  {
    "name": "Liquidation N More",
    "cityName": "Winter Park",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 230-1087",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Estate Buyers Group",
    "cityName": "Kissimmee",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 665-9372",
    "websiteUrl": "http://YOURESTATEBUYERS.COM",
    "logoUrl": ""
  },
  {
    "name": "Royal Palm Estate Sales",
    "cityName": "Winter Park",
    "stateCode": "FL",
    "rating": 4.7,
    "reviewCount": 32,
    "phoneNumber": "(407) 446-3113",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/148796/637801123088029303.jpg"
  },
  {
    "name": "Estate Sales In Orlando",
    "cityName": "Debary",
    "stateCode": "FL",
    "rating": 4.9,
    "reviewCount": 116,
    "phoneNumber": "(407) 416-1029",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Above And Beyond Auctions™",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 446-9804",
    "websiteUrl": "http://aboveandbeyondauctions.com/upcoming-auction/",
    "logoUrl": ""
  },
  {
    "name": "The Old Packing House Inc",
    "cityName": "Tavares",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 80,
    "phoneNumber": "(352) 516-6221",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Vintage Flair",
    "cityName": "Leesburg",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 2,
    "phoneNumber": "(352) 214-5125",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Steele Magnolia Estate Sales",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 1,
    "phoneNumber": "(407) 408-7908",
    "websiteUrl": "http://www.steelemagnoliaestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/132299/636342819881712977.jpg"
  },
  {
    "name": "Callie's Closet Estate Sales",
    "cityName": "Leesburg",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 805-9096",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "1 More Time Auctions",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 1.0,
    "reviewCount": 1,
    "phoneNumber": "(407) 466-2270",
    "websiteUrl": "http://www.One-More-Time.us",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/21857/636322724668579262.jpg"
  },
  {
    "name": "J And A Estate Sales",
    "cityName": "Eustis",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 409-6824",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Casablanca Estate Sales",
    "cityName": "Apopka",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 900-1892",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/141548/637537466881681098.jpg"
  },
  {
    "name": "Finders Keepers Treasures",
    "cityName": "Oviedo",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 432-5856",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "House Of Estate Sales & Liquidation Inc.",
    "cityName": "Sanford",
    "stateCode": "FL",
    "rating": 4.9,
    "reviewCount": 116,
    "phoneNumber": "(407) 590-7001",
    "websiteUrl": "http://americanestatesalesinc.com",
    "logoUrl": ""
  },
  {
    "name": "The Estate Sale Underground (HES Trade)",
    "cityName": "Altamonte Springs",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 692-4626",
    "websiteUrl": "http://www.estatesaleunderground.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/136490/636688593289590456.jpg"
  },
  {
    "name": "Black Label Estate Sales LLC",
    "cityName": "Clermont",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 590-1233",
    "websiteUrl": "http://www.blacklabelestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/143339/637319816406386932.jpg"
  },
  {
    "name": "American Estate Sales LLC",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 8,
    "phoneNumber": "(407) 810-2399",
    "websiteUrl": "http://www.estatesales-orlando.com",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/61388/635653563608773752.jpg"
  },
  {
    "name": "Two Palms Estate Sales",
    "cityName": "Altamonte Springs",
    "stateCode": "FL",
    "rating": 4.1,
    "reviewCount": 35,
    "phoneNumber": "(865) 773-9694",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Orlando Estate Liquidators",
    "cityName": "Sanford",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 23,
    "phoneNumber": "(321) 355-1765",
    "websiteUrl": "http://www.orlandoestateliquidators.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/155204/638182092823508749.jpg"
  },
  {
    "name": "Bobs Senior Services LLC",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 716-0750",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Ag Sun Realty Llc.",
    "cityName": "Oviedo",
    "stateCode": "FL",
    "rating": 4.0,
    "reviewCount": 43,
    "phoneNumber": "(631) 487-2566",
    "websiteUrl": "https://www.agsunrealty.com/estate-sales-services-in-florida/",
    "logoUrl": ""
  },
  {
    "name": "Swan’s Sales And Services",
    "cityName": "Groveland",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(863) 968-3065",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/167612/638835591495197771.jpg"
  },
  {
    "name": "Alligator Liquidators And Estate Sale LLC",
    "cityName": "Clermont",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 223-4488",
    "websiteUrl": "https://www.alligatorliquidators.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/163274/638787123186127210.jpg"
  },
  {
    "name": "JD Estate Sales, Inc.",
    "cityName": "Winter Park",
    "stateCode": "FL",
    "rating": 3.6,
    "reviewCount": 5,
    "phoneNumber": "(407) 808-6262",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Eouse Auctioneering",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 453-1128",
    "websiteUrl": "http://www.EouseAuctioneering.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/159299/638444698762874127.jpg"
  },
  {
    "name": "Samantha’s Estate Sale",
    "cityName": "Winter Park",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 6,
    "phoneNumber": "(407) 461-3394",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Sunshine Estate Group",
    "cityName": "Longwood",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 375-6706",
    "websiteUrl": "http://www.ibuycouture.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/168299/638934140112469058.jpg"
  },
  {
    "name": "Alexander Julius Estate Sales And Appraisals",
    "cityName": "Maitland",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 923-9777",
    "websiteUrl": "http://www.estatesbyaj.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/77012/638267292269469041.jpg"
  },
  {
    "name": "TCM",
    "cityName": "The Villages",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 509-6005",
    "websiteUrl": "http://www.tcmestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/132584/638973967310112680.jpg"
  },
  {
    "name": "Best Wishes Estate Sales,LLC",
    "cityName": "Lake Mary",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 49,
    "phoneNumber": "(689) 316-7493",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/117983/638826954237252947.jpg"
  },
  {
    "name": "Heritage Home Transitions",
    "cityName": "Ormond Beach",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 2,
    "phoneNumber": "(386) 871-4454",
    "websiteUrl": "http://www.heritagehometransitions.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/158090/638379204334211056.jpg"
  },
  {
    "name": "Florida Prestigious Homes",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(786) 383-1905",
    "websiteUrl": "https://floridaprestigioushomes.com/inherited-estate-sales-1",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/127250/638652093520149307.jpg"
  },
  {
    "name": "JSM Estate Sales, LLC",
    "cityName": "Clermont",
    "stateCode": "FL",
    "rating": 4.3,
    "reviewCount": 11,
    "phoneNumber": "(321) 228-5121",
    "websiteUrl": "http://www.jsmestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/133703/637855498633570902.jpg"
  },
  {
    "name": "All About Auctions - Estate Sales and Appraisals",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 325-6257",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Edison Attachments",
    "cityName": "Casselberry",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 202-9891",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "The Glory Days Estate Sales",
    "cityName": "Winter Park",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 118,
    "phoneNumber": "(407) 279-1220",
    "websiteUrl": "https://www.intheglorydays.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/168392/638874581388026590.jpg"
  },
  {
    "name": "Legacy Auctions & Estate Sales, Inc.",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 26,
    "phoneNumber": "(833) 586-3777",
    "websiteUrl": "https://legacyauctions.co/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/149192/638279793525641137.webp"
  },
  {
    "name": "Acme Estate Sales",
    "cityName": "Casselberry",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 252-8845",
    "websiteUrl": "http://www.ACMEEstateSales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/127829/636300210292047353.jpg"
  },
  {
    "name": "All About U Estate Sales",
    "cityName": "Lady Lake",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 216-4182",
    "websiteUrl": "http://www.allaboutuestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/132272/637962782045219286.jpg"
  },
  {
    "name": "Functional Living Concepts, LLC",
    "cityName": "Mount Dora",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(316) 640-0451",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Grasons Of Northeast Orlando, FL",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 267-3015",
    "websiteUrl": "https://www.grasons.com/northeast-orlando/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/167567/638833706202561915.jpg"
  },
  {
    "name": "Pearl's Antiques, Auctions, And Estate Sales",
    "cityName": "Clermont",
    "stateCode": "FL",
    "rating": 4.3,
    "reviewCount": 11,
    "phoneNumber": "(352) 298-5714",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/29366/637327571159084548.jpg"
  },
  {
    "name": "My Nanna's Estate Líquidation",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(689) 346-4097",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/166343/638831793793106295.jpg"
  },
  {
    "name": "Julian Graham Antiques",
    "cityName": "Leesburg",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 874-6220",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/13094/636444855986771754.jpg"
  },
  {
    "name": "Oliver's Twist Estate Sales",
    "cityName": "Mount Dora",
    "stateCode": "FL",
    "rating": 4.7,
    "reviewCount": 3,
    "phoneNumber": "(352) 874-8757",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/9722/636121452364491462.jpg"
  },
  {
    "name": "Outpost Estates",
    "cityName": "Geneva",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 832-6542",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/167489/638828585002164043.jpg"
  },
  {
    "name": "Orlando Estate Sale Company",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 23,
    "phoneNumber": "(407) 725-5320",
    "websiteUrl": "https://www.orlandoestatesalecompany.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/165965/638971950172422983.jpg"
  },
  {
    "name": "Let It Go Lifestyle",
    "cityName": "Ocoee",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 118,
    "phoneNumber": "(407) 797-3534",
    "websiteUrl": "http://www.LetitGoLifestyle.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/129113/637632016389981482.jpg"
  },
  {
    "name": "Supreme Estate Sales",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(847) 302-9944",
    "websiteUrl": "http://www.supremeestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/154721/638150141290129777.jpg"
  },
  {
    "name": "Blue Sky Estate Sales, LLC",
    "cityName": "Winter Park",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 14,
    "phoneNumber": "(407) 230-7501",
    "websiteUrl": "https://www.blueskyestatesales.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/166406/638771559765468375.jpg"
  },
  {
    "name": "L & D Enterprises",
    "cityName": "Mount Dora",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 777-9168",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/151382/637985207387335701.jpg"
  },
  {
    "name": "Coastal Heirloom Estates",
    "cityName": "Winter Garden",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 450-0623",
    "websiteUrl": "https://coastalheirloomestates.com/welcome",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/170195/638972029178969499.jpg"
  },
  {
    "name": "It's Showtime Estate Sales LLC",
    "cityName": "Mount Dora",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(843) 822-8743",
    "websiteUrl": "http://www.itsshowtimeestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/138599/637156799218677393.jpg"
  },
  {
    "name": "Family Nest Winter Park",
    "cityName": "Clermont",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 603-0025",
    "websiteUrl": "https://familynestwinterpark.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/171542/639065197046496498.jpg"
  },
  {
    "name": "Transitions Estate Sales of Lake County",
    "cityName": "Leesburg",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 19,
    "phoneNumber": "(904) 707-1107",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Hathaway Estate Sales LLC",
    "cityName": "Altamonte Springs",
    "stateCode": "FL",
    "rating": 4.1,
    "reviewCount": 35,
    "phoneNumber": "(321) 439-6220",
    "websiteUrl": "http://www.hathawayestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/46289/636272601959925872.jpg"
  },
  {
    "name": "Garner Estate Sales",
    "cityName": "Leesburg",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 267-6747",
    "websiteUrl": "http://www.garnerestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/17849/637326108326859783.jpg"
  },
  {
    "name": "Orlando Estate Auction",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 4.4,
    "reviewCount": 110,
    "phoneNumber": "(407) 290-1000",
    "websiteUrl": "http://orlandoestateauction.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/17888/636810030556801114.jpg"
  },
  {
    "name": "Blue Dove Estate Sales, LLC.",
    "cityName": "Orlando",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(732) 589-9119",
    "websiteUrl": "http://www.BlueDoveEstateSales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/168281/638868340032116788.jpg"
  },
  {
    "name": "Fritz Real Estate & Auction",
    "cityName": "Clermont",
    "stateCode": "FL",
    "rating": 1.0,
    "reviewCount": 2,
    "phoneNumber": "(321) 229-0722",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/158063/638352530728577309.jpg"
  },
  {
    "name": "Orlando Auctions",
    "cityName": "Christmas",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 603-1020",
    "websiteUrl": "https://orlandoauctions.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/154700/638911915122035094.jpg"
  },
  {
    "name": "5 Points Furniture & Auction",
    "cityName": "Saint Cloud",
    "stateCode": "FL",
    "rating": 4.4,
    "reviewCount": 135,
    "phoneNumber": "(407) 891-9882",
    "websiteUrl": "https://www.5pointsauction.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/37085/638484376953925763.jpg"
  },
  {
    "name": "Aqil Pvt Limited.",
    "cityName": "Dunnellon",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(030) 886-8102",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Steel Magnolia Antiques & Gifts & Estate Liquidations",
    "cityName": "Bushnell",
    "stateCode": "FL",
    "rating": 3.4,
    "reviewCount": 10,
    "phoneNumber": "(352) 410-5606",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/159854/638459855440541958.jpg"
  },
  {
    "name": "Consider It Sold",
    "cityName": "Inverness",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 2,
    "phoneNumber": "(352) 697-1778",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/138143/637149789140306944.jpg"
  },
  {
    "name": "Empire Estate Sales LLC",
    "cityName": "Bushnell",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 108,
    "phoneNumber": "(352) 457-6571",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/148472/637766775426730782.jpg"
  },
  {
    "name": "D.d.a. Home Services",
    "cityName": "Homosassa",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 238-6789",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Early Bird Estate Liquidations",
    "cityName": "Morriston",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 577-5336",
    "websiteUrl": "http://www.earlybirdestates.biz",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/35897/636503439021768749.jpg"
  },
  {
    "name": "Sunshine Treasure Cove",
    "cityName": "Homosassa",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 496-0897",
    "websiteUrl": "http://www.sunshinetreasurecove.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/140414/637012536613180390.jpg"
  },
  {
    "name": "Wildwood Auctions & Estate Services",
    "cityName": "Lake Panasoffkee",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 3,
    "phoneNumber": "(352) 461-0535",
    "websiteUrl": "http://www.wildwoodauctions.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/130865/636233933404421630.jpg"
  },
  {
    "name": "Madam Gulleechy's",
    "cityName": "Homosassa",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 547-0511",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Estate Sales By Tinabell",
    "cityName": "The Villages",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 601-6772",
    "websiteUrl": "http://www.estatesalesbytinabell.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/157355/638348846382511473.jpg"
  },
  {
    "name": "Grumbles House Antiques And Garden Shop",
    "cityName": "Dunnellon",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 158,
    "phoneNumber": "(352) 465-1460",
    "websiteUrl": "http://www.grumbleshouseantiques.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/141482/637117582481262233.jpg"
  },
  {
    "name": "Family Nest North Central Fl",
    "cityName": "Newberry",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 443-4844",
    "websiteUrl": "https://familynestnorthcentralfl.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/165866/638884820733813992.jpg"
  },
  {
    "name": "Estate Liquidations And Auctions",
    "cityName": "Crystal River",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 228-4920",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Dudley's Auction & Maine-ly Real Estate",
    "cityName": "Inverness",
    "stateCode": "FL",
    "rating": 4.1,
    "reviewCount": 61,
    "phoneNumber": "(352) 400-0053",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Lost&found Antique Boutique",
    "cityName": "Homosassa",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 586-0170",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Next American Picker, Inc.",
    "cityName": "Inverness",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 400-8397",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Valuable Liquidators, Inc.",
    "cityName": "Beverly Hills",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 770-2484",
    "websiteUrl": "http://www.valuableliquidators.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/154817/638157386250283841.jpg"
  },
  {
    "name": "Contentandcloud",
    "cityName": "Hernando",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(078) 455-4545",
    "websiteUrl": "http://8ajyo3ntvquy85veb6jj01mvimodc30s.oastify.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/157598/638333103897939999.jpg"
  },
  {
    "name": "Wild Thyme Antiques",
    "cityName": "Hernando",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 476-6897",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Always Reliable Estate Sales And Liqudation Services LLC",
    "cityName": "Homosassa",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 1,
    "phoneNumber": "(954) 589-4906",
    "websiteUrl": "http://www.alwaysreliableestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/140816/637055711670647593.jpg"
  },
  {
    "name": "Consider It Sold By GWE",
    "cityName": "Inverness",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 2,
    "phoneNumber": "(352) 533-1577",
    "websiteUrl": "https://floridasonlineauctions.com/marketplace/consider-it-sold-by-gwe",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/165416/638675958899812759.jpg"
  },
  {
    "name": "Professional Appraisers And Liquidators",
    "cityName": "Crystal River",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 385-6109",
    "websiteUrl": "http://www.charliefudge.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/135335/636620340448223562.jpg"
  },
  {
    "name": "Miss Bricks Picks LLC",
    "cityName": "Homosassa",
    "stateCode": "FL",
    "rating": 1.3,
    "reviewCount": 4,
    "phoneNumber": "(352) 476-6311",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/127601/636222048572006298.jpg"
  },
  {
    "name": "New To You Estate Sale Emporium LLC",
    "cityName": "Inverness",
    "stateCode": "FL",
    "rating": 4.3,
    "reviewCount": 20,
    "phoneNumber": "(352) 693-9109",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/169877/638955656790516234.jpg"
  },
  {
    "name": "Justice’s League Estate Sales",
    "cityName": "Ocala",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 76,
    "phoneNumber": "(352) 414-8249",
    "websiteUrl": "https://justicesleagueestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/142574/637779777517943411.jpg"
  },
  {
    "name": "Restless Mommas Estate Sales",
    "cityName": "Gainesville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 281-8934",
    "websiteUrl": "https://www.restlessmommas.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/163601/638621797216937129.jpg"
  },
  {
    "name": "Citrus Estate Sales",
    "cityName": "Inverness",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 1,
    "phoneNumber": "(727) 484-4715",
    "websiteUrl": "https://www.citrusestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/79427/636954156372953022.jpg"
  },
  {
    "name": "Soapweed Auctions",
    "cityName": "Oxford",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 874-2659",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Estate Sales By Linda & Cathy",
    "cityName": "The Villages",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 76,
    "phoneNumber": "(352) 250-8682",
    "websiteUrl": "http://www.estatesalesinthevillages.com",
    "logoUrl": ""
  },
  {
    "name": "Just Right Estate Sales LLC",
    "cityName": "Belleview",
    "stateCode": "FL",
    "rating": 4.0,
    "reviewCount": 3,
    "phoneNumber": "(352) 817-2098",
    "websiteUrl": "https://justrightestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/142484/637229541769216394.jpg"
  },
  {
    "name": "Endless Treasures Estate Sales & Service",
    "cityName": "Summerfield",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 34,
    "phoneNumber": "(352) 653-3267",
    "websiteUrl": "http://www.endlesstreasures.org/",
    "logoUrl": ""
  },
  {
    "name": "Estate Sales Solutions",
    "cityName": "Belleview",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 76,
    "phoneNumber": "(352) 234-0415",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Tracies Hoarder And Estate Sales",
    "cityName": "Summerfield",
    "stateCode": "FL",
    "rating": 4.3,
    "reviewCount": 18,
    "phoneNumber": "(352) 843-5226",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Orange Flag Estate Sales",
    "cityName": "The Villages",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 76,
    "phoneNumber": "(352) 661-8165",
    "websiteUrl": "https://orangeflagsales.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/170945/639016465207517033.jpg"
  },
  {
    "name": "Next Step Estate Sales",
    "cityName": "Summerfield",
    "stateCode": "FL",
    "rating": 4.3,
    "reviewCount": 18,
    "phoneNumber": "(352) 247-1227",
    "websiteUrl": "http://www.nextstepestatesales.net",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/132347/636347757176401001.jpg"
  },
  {
    "name": "Liberty Estate Sales LLC",
    "cityName": "Summerfield",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(256) 486-5198",
    "websiteUrl": "http://www.LibertyEstateSalesLLC.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/146270/639038564995245347.jpg"
  },
  {
    "name": "Livegood Estate Sales Florida",
    "cityName": "Oxford",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(317) 331-7705",
    "websiteUrl": "https://www.livengoodestatesalesflorida.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/171584/639066919352983253.jpg"
  },
  {
    "name": "Destiny Estates & Bargains",
    "cityName": "Summerfield",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 34,
    "phoneNumber": "(352) 693-5613",
    "websiteUrl": "http://www.destinyestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/156236/638621812308668607.jpg"
  },
  {
    "name": "Belleview Estate Sales",
    "cityName": "Belleview",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 573-6708",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Movin' On Estate Sales",
    "cityName": "Belleview",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 267-8026",
    "websiteUrl": "https://movinonestateauctions.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/24956/636326512868976010.jpg"
  },
  {
    "name": "Moonflower Estate Sale Services",
    "cityName": "Wildwood",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 1,
    "phoneNumber": "(352) 857-5807",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/148757/637797919597617691.jpg"
  },
  {
    "name": "Twice Treasured Estate Sales",
    "cityName": "The Villages",
    "stateCode": "FL",
    "rating": 3.0,
    "reviewCount": 2,
    "phoneNumber": "(603) 438-4679",
    "websiteUrl": "http://www.twicetreasuredestatesales.com",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/6509/635498323823669000.jpg"
  },
  {
    "name": "Eagle Estate Sales LLC",
    "cityName": "Summerfield",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(256) 293-7722",
    "websiteUrl": "http://www.eagleestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/147380/638615990841175798.jpg"
  },
  {
    "name": "Trésor Interiors & Estate Sales",
    "cityName": "The Villages",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(256) 689-1532",
    "websiteUrl": "https://www.tresorinteriorsandestatesales.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/166763/638952932227777519.jpg"
  },
  {
    "name": "Maximo Estate Sales",
    "cityName": "Summerfield",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 804-0192",
    "websiteUrl": "https://www.maximoestatesales.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/169634/638940899979468177.jpg"
  },
  {
    "name": "Magnolia Lane Estate Sales",
    "cityName": "The Villages",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 705-0460",
    "websiteUrl": "https://www.magnolialaneestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/168857/638901064549773892.jpg"
  },
  {
    "name": "Cape To Coast Auctions And Estate Services",
    "cityName": "Wildwood",
    "stateCode": "FL",
    "rating": 4.0,
    "reviewCount": 4,
    "phoneNumber": "(813) 340-7197",
    "websiteUrl": "http://www.capetocoastauctions.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/168134/638859588544672254.jpg"
  },
  {
    "name": "The Packing House Auction Company",
    "cityName": "Mc Intosh",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 20,
    "phoneNumber": "(352) 591-0202",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Liberation Resources",
    "cityName": "Ocala",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 239-3913",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/145979/637552982746850174.jpg"
  },
  {
    "name": "Infiniti Estate Sales",
    "cityName": "Ocala",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 76,
    "phoneNumber": "(352) 266-4807",
    "websiteUrl": "http://www.infinitisales.co",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/128567/636425719435259219.jpg"
  },
  {
    "name": "A Family Affair",
    "cityName": "Dunnellon",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 895-6162",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Greene Gallery Estate Sales",
    "cityName": "Silver Springs",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 484-4261",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Hill Top Antiques",
    "cityName": "Reddick",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 591-0400",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Hidden Treasure Estate Sales Of Ocala",
    "cityName": "Ocala",
    "stateCode": "FL",
    "rating": 4.4,
    "reviewCount": 12,
    "phoneNumber": "(352) 209-5159",
    "websiteUrl": "http://hiddentreasureeso.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/143102/637303238370318028.jpg"
  },
  {
    "name": "Tumbleweed Trading Co.",
    "cityName": "Ocala",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 425-9097",
    "websiteUrl": "http://www.tumbleweedofocala.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/140801/637045696482074564.jpg"
  },
  {
    "name": "Good Deal Estate Sales And Auctions",
    "cityName": "Ocala",
    "stateCode": "FL",
    "rating": 4.2,
    "reviewCount": 5,
    "phoneNumber": "(352) 427-1763",
    "websiteUrl": "https://www.gooddeal99.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/127301/635913475914128277.jpg"
  },
  {
    "name": "Stampler Auctions",
    "cityName": "Ocala",
    "stateCode": "FL",
    "rating": 4.1,
    "reviewCount": 122,
    "phoneNumber": "(954) 921-8888",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/22226/638696240961686471.jpg"
  },
  {
    "name": "Busy Bee Estate Sales",
    "cityName": "Ocala",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "",
    "websiteUrl": "https://busy-bee-estate-salesbusybeezestategmailcom352-816-6536.square.site/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/168164/638862252915643402.jpg"
  },
  {
    "name": "It's Your Dime Coins, Inc.",
    "cityName": "Ocala",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 615-2393",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Mama Roses Treasure LLC",
    "cityName": "Williston",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 16,
    "phoneNumber": "(352) 246-5668",
    "websiteUrl": "http://www.mamarosestreasure.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/162791/638519185324597331.jpg"
  },
  {
    "name": "Brass Pineapple Antiques And Estates",
    "cityName": "Ocala",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 347,
    "phoneNumber": "(352) 817-5875",
    "websiteUrl": "https://hibid.com/company/149319/brass-pineapple-antiques-and-estateshttps://www.auctionninja.com/brass-pineapple-antiques-and-estates/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/154448/638130347632283486.jpg"
  },
  {
    "name": "Ocala Auction",
    "cityName": "Ocala",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 24,
    "phoneNumber": "(352) 351-3279",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Top Dollar Consignment",
    "cityName": "Ocala",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 812-6291",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/151475/638120775787359961.jpg"
  },
  {
    "name": "Nifty Groovy",
    "cityName": "Ocala",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 509-6323",
    "websiteUrl": "http://www.niftygroovyauctions.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/135722/636638510956414454.jpg"
  },
  {
    "name": "Gray's Auction",
    "cityName": "Anthony",
    "stateCode": "FL",
    "rating": 3.5,
    "reviewCount": 13,
    "phoneNumber": "(352) 427-7416",
    "websiteUrl": "http://www.bidgray.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/128819/636240711566311812.jpg"
  },
  {
    "name": "Sharon's Estate Sales/appraisals",
    "cityName": "Ocala",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 895-1080",
    "websiteUrl": "http://www.SharonsAppraisals.com",
    "logoUrl": ""
  },
  {
    "name": "Diggers Antique Mall",
    "cityName": "Ocala",
    "stateCode": "FL",
    "rating": 4.2,
    "reviewCount": 208,
    "phoneNumber": "(352) 629-0525",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "The Lost Dutchman LLC",
    "cityName": "Ocala",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 361-5603",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/141458/637098504231927132.jpg"
  },
  {
    "name": "Cluster & Black Estate Liquidators LLC",
    "cityName": "Ocala",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 274-4959",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Storm Estate Liquidations",
    "cityName": "Ocala",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 454-0068",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Caring Transitions Of The Villages",
    "cityName": "Ocala",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 432-8079",
    "websiteUrl": "http://www.caringtransitionsthevillages.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/144629/638476791771056985.jpg"
  },
  {
    "name": "Florida Twins Estate Sales",
    "cityName": "Ocala",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 454-0068",
    "websiteUrl": "http://www.Twinsestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/139874/638769102405056810.jpg"
  },
  {
    "name": "We Care Estate Sales",
    "cityName": "Ocala",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 207-1519",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/17102/637226020345951042.jpg"
  },
  {
    "name": "Boys Gone Pickin’ Auctions & Estate Sales",
    "cityName": "Ocala",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(207) 468-9751",
    "websiteUrl": "https://floridasonlineauctions.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/148679/637789996806566179.jpg"
  },
  {
    "name": "Grasons Of St Johns & Flagler Counties",
    "cityName": "Saint Augustine",
    "stateCode": "FL",
    "rating": 4.7,
    "reviewCount": 9,
    "phoneNumber": "(904) 417-3409",
    "websiteUrl": "https://www.grasons.com/estate-sale-companies/stjohns-flagler-counties-fl/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/156263/638248718002030544.jpg"
  },
  {
    "name": "China Cat Estate Sales",
    "cityName": "Ponte Vedra Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 241-0344",
    "websiteUrl": "http://chinacatsales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/4817/637414204987510600.jpg"
  },
  {
    "name": "Aristocrat Estate Sales",
    "cityName": "Daytona Beach",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 118,
    "phoneNumber": "(386) 871-2302",
    "websiteUrl": "http://www.aristocratestaresales.com",
    "logoUrl": ""
  },
  {
    "name": "Coronado Antiques",
    "cityName": "New Smyrna Beach",
    "stateCode": "FL",
    "rating": 4.3,
    "reviewCount": 23,
    "phoneNumber": "(386) 428-3331",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Chris Fisher Estate Brokers",
    "cityName": "Edgewater",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(386) 690-1295",
    "websiteUrl": "http://www.fishers-auction.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/4730/636871630609475015.jpg"
  },
  {
    "name": "K2 Liquidators",
    "cityName": "Port Orange",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 1,
    "phoneNumber": "(386) 295-2962",
    "websiteUrl": "https://www.k2liquidators.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/159746/638455207115516875.jpg"
  },
  {
    "name": "Queen Bee Estate Sales",
    "cityName": "Edgewater",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(386) 314-9224",
    "websiteUrl": "http://www.QueenBeeEstateSales.com",
    "logoUrl": ""
  },
  {
    "name": "Chris Fisher Estate Broker - Auctioneer",
    "cityName": "Edgewater",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(386) 690-1295",
    "websiteUrl": "http://www.fishersauction.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/11609/637607555180563789.jpg"
  },
  {
    "name": "Father & Son Antiques and Estate Liquidators, LLC",
    "cityName": "Daytona Beach",
    "stateCode": "FL",
    "rating": 4.3,
    "reviewCount": 316,
    "phoneNumber": "(386) 451-1616",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Riverfront Treasures",
    "cityName": "Daytona Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(386) 453-0516",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "My Own Estate Sale",
    "cityName": "Daytona Beach",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 16,
    "phoneNumber": "(863) 777-3809",
    "websiteUrl": "http://www.myownestatesale.com",
    "logoUrl": ""
  },
  {
    "name": "Florida Wholesale Liquidators LLC",
    "cityName": "Daytona Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(386) 872-5328",
    "websiteUrl": "http://www.theknottycrab.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/142430/637212671843784754.jpg"
  },
  {
    "name": "A + Estate & Moving",
    "cityName": "Port Orange",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(386) 383-3438",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Everything But The Kitchen Sink",
    "cityName": "Deland",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(386) 774-9755",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Sage Estate Sales",
    "cityName": "New Smyrna Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(404) 867-2994",
    "websiteUrl": "https://www.sageestatesales.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/61442/636618230313351971.jpg"
  },
  {
    "name": "Easton Estate Sales",
    "cityName": "Ormond Beach",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 16,
    "phoneNumber": "(828) 674-5795",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Lordez Estate Sales and Online Auctions LLC",
    "cityName": "Ormond Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(386) 562-2811",
    "websiteUrl": "http://lordezestatesales.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/129863/636282501777972452.jpg"
  },
  {
    "name": "Kingdom Liquidators",
    "cityName": "Palm Coast",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(912) 286-9189",
    "websiteUrl": "http://www.kingdomliquidators.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/6713/636281357499461339.jpg"
  },
  {
    "name": "Caring Senior's Solution's LLC",
    "cityName": "Daytona Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 355-3774",
    "websiteUrl": "http://www.CaringSeniorsSolutions.com",
    "logoUrl": ""
  },
  {
    "name": "Father N Son Estate Sales",
    "cityName": "Daytona Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(386) 566-4250",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/155570/638204082712057448.jpg"
  },
  {
    "name": "Estate Sales By Mr. G",
    "cityName": "Daytona Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(386) 265-7045",
    "websiteUrl": "http://www.estatesalesbymrg.com",
    "logoUrl": ""
  },
  {
    "name": "The Accents On Us",
    "cityName": "Bunnell",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(949) 686-8854",
    "websiteUrl": "http://www.accentsonus.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/24191/636278926024023921.jpg"
  },
  {
    "name": "Seminole Estate Auction & Liq. LLC",
    "cityName": "Orange City",
    "stateCode": "FL",
    "rating": 4.7,
    "reviewCount": 63,
    "phoneNumber": "(386) 960-7599",
    "websiteUrl": "http://www.seminoleestateauction.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/41402/636621690714752744.jpg"
  },
  {
    "name": "Christopher Clark Fine Art & Antiquities",
    "cityName": "Daytona Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(386) 405-1867",
    "websiteUrl": "http://www.christopherclarkfineart.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/136190/638360243429102728.jpg"
  },
  {
    "name": "Sweet Memories Estate Sales",
    "cityName": "New Smyrna Beach",
    "stateCode": "FL",
    "rating": 4.4,
    "reviewCount": 160,
    "phoneNumber": "(386) 409-1902",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/128999/636287623911571270.jpg"
  },
  {
    "name": "Seaside Trading Company",
    "cityName": "New Smyrna Beach",
    "stateCode": "FL",
    "rating": 4.4,
    "reviewCount": 20,
    "phoneNumber": "(386) 314-9997",
    "websiteUrl": "http://seasidetradingcompany.com",
    "logoUrl": ""
  },
  {
    "name": "Flagler Estate Sales",
    "cityName": "Palm Coast",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(386) 243-5626",
    "websiteUrl": "http://www.flaglercountyestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/160286/639046970744823337.jpg"
  },
  {
    "name": "Cozy May Estate Sales",
    "cityName": "Deland",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 6,
    "phoneNumber": "(386) 301-9199",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/151052/638472157989664920.jpg"
  },
  {
    "name": "Berner's Auction, Inc",
    "cityName": "Deland",
    "stateCode": "FL",
    "rating": 4.4,
    "reviewCount": 125,
    "phoneNumber": "(386) 738-8848",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/158276/638370560439158271.jpg"
  },
  {
    "name": "A1 Estate Sales Of Fflorida",
    "cityName": "Palm Coast",
    "stateCode": "FL",
    "rating": 4.0,
    "reviewCount": 114,
    "phoneNumber": "(407) 301-8061",
    "websiteUrl": "https://www.a1estatesalesofflorida.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/171260/639046484177581454.jpg"
  },
  {
    "name": "Palm Coast Estate Liquidations & Estate Sales",
    "cityName": "Palm Coast",
    "stateCode": "FL",
    "rating": 4.1,
    "reviewCount": 7,
    "phoneNumber": "(631) 875-2596",
    "websiteUrl": "https://palmcoastestatesales.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/158858/638423880939771185.jpg"
  },
  {
    "name": "Washington Street Crossing",
    "cityName": "New Smyrna Beach",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 92,
    "phoneNumber": "(386) 957-3780",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Harlow Online Estate Sale Auctions",
    "cityName": "Daytona Beach",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 5,
    "phoneNumber": "(386) 265-0021",
    "websiteUrl": "http://www.harlowonlineauctions.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/150455/637915063473551168.jpg"
  },
  {
    "name": "Jeff Click Antiques",
    "cityName": "New Smyrna Beach",
    "stateCode": "FL",
    "rating": 3.9,
    "reviewCount": 8,
    "phoneNumber": "(386) 423-2554",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Rare Opportunity",
    "cityName": "Ormond Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Senior Moving Specialists",
    "cityName": "Daytona Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 385-0635",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Smart Homes Group",
    "cityName": "Ormond Beach",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 52,
    "phoneNumber": "(386) 316-5845",
    "websiteUrl": "http://thesmarthomesgroup.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/132476/636355724421027683.jpg"
  },
  {
    "name": "Chrisann and Co. Estate Sales",
    "cityName": "Ormond Beach",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 16,
    "phoneNumber": "(386) 290-1463",
    "websiteUrl": "http://www.chrisannandco.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/142031/637589283379314845.jpg"
  },
  {
    "name": "Guy Auctions L.l.c.",
    "cityName": "Edgewater",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(321) 362-2532",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Sales By Michelle",
    "cityName": "Port Orange",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(386) 451-1333",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Claudina Trump Appraisals & Estate Services",
    "cityName": "Edgewater",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(386) 478-6099",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Estate Sales By Margie",
    "cityName": "Ormond Beach",
    "stateCode": "FL",
    "rating": 4.1,
    "reviewCount": 7,
    "phoneNumber": "(386) 299-4421",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Cheryl & Co.",
    "cityName": "Ormond Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(734) 652-7295",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Lora The Liquidator",
    "cityName": "Ormond Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(386) 585-0864",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Enterprise Auctions Inc",
    "cityName": "Daytona Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(386) 255-9191",
    "websiteUrl": "http://www.auctioncity.us",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/133277/636506065166754520.jpg"
  },
  {
    "name": "Angevine Promotions",
    "cityName": "Deland",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(386) 822-0557",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/136733/636705888885842886.jpg"
  },
  {
    "name": "Aunt Bees Estate Sale Pros",
    "cityName": "Ormond Beach",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 80,
    "phoneNumber": "(330) 634-3359",
    "websiteUrl": "http://tadurham89.wix.com/auntbestatesalepros",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/34169/635554061362714000.jpg"
  },
  {
    "name": "Florida Coastal Furniture",
    "cityName": "Daytona Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(386) 299-0770",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/133967/636505936407004582.jpg"
  },
  {
    "name": "C & C Auction & Liquidation LLC",
    "cityName": "Bunnell",
    "stateCode": "FL",
    "rating": 4.7,
    "reviewCount": 31,
    "phoneNumber": "(954) 665-3468",
    "websiteUrl": "https://ccauction.hibid.com/auctions",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/160001/638467892650433538.jpg"
  },
  {
    "name": "Bidalot Coin Auction",
    "cityName": "Port Orange",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(386) 675-6768",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Summersky Estate Sales",
    "cityName": "Edgewater",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(954) 994-7494",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/168989/638907089609460332.jpg"
  },
  {
    "name": "Dunn's Attic",
    "cityName": "Ormond Beach",
    "stateCode": "FL",
    "rating": 4.3,
    "reviewCount": 110,
    "phoneNumber": "(386) 673-0044",
    "websiteUrl": "http://www.dunnsattic.com",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/35114/635752718740161515.jpg"
  },
  {
    "name": "Linda Trinckes Auctions",
    "cityName": "Deland",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 300-8983",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "A Step Above Estate Sale Solutions",
    "cityName": "Daytona Beach",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 2,
    "phoneNumber": "(386) 631-8714",
    "websiteUrl": "https://astepaboveestatesalesolutions.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/169934/638958748956357444.jpg"
  },
  {
    "name": "Treasure Chasers Estate Sales And Liquidations LLC",
    "cityName": "Deltona",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(407) 450-8538",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Magnet And Steel Estate Sales And Liquidators",
    "cityName": "Port Orange",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(386) 898-6895",
    "websiteUrl": "http://www.volusiaestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/167336/638819237161707882.jpg"
  },
  {
    "name": "Estate Sale Solutions Of Florida",
    "cityName": "Palm Coast",
    "stateCode": "FL",
    "rating": 4.1,
    "reviewCount": 7,
    "phoneNumber": "(407) 790-0479",
    "websiteUrl": "https://essofl.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/136919/638091541229025370.jpg"
  },
  {
    "name": "Decker Estate Sales",
    "cityName": "Daytona Beach",
    "stateCode": "FL",
    "rating": 3.7,
    "reviewCount": 15,
    "phoneNumber": "(386) 562-8551",
    "websiteUrl": "https://deckerestatesales.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/145691/637535156730587179.jpg"
  },
  {
    "name": "New Life Estate Sales",
    "cityName": "Daytona Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(386) 451-8755",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/171623/639069791431563644.jpg"
  },
  {
    "name": "At Your Service",
    "cityName": "Palm Coast",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(386) 237-0268",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Seaside Estate Sales",
    "cityName": "Ormond Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(386) 299-1588",
    "websiteUrl": "http://www.seasideestatesales.net",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/27095/637910795336324341.jpg"
  },
  {
    "name": "Blue Moon Estate Sales",
    "cityName": "Ormond Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(386) 225-1270",
    "websiteUrl": "https://www.bluemoonestatesales.com/firstcoast-south/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/146522/637601591071055084.jpg"
  },
  {
    "name": "Tides Florida, LLC",
    "cityName": "Daytona Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(386) 340-1998",
    "websiteUrl": "https://tidesflorida.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/169670/638942421352712393.jpg"
  },
  {
    "name": "D&D Estate Sale Pros",
    "cityName": "Ormond Beach",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 16,
    "phoneNumber": "(386) 212-8853",
    "websiteUrl": "http://www.DandDEstateSalePros.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/7919/637549689782674780.jpg"
  },
  {
    "name": "Palmetto Rose Vintage",
    "cityName": "New Smyrna Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 514-2698",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/144359/639074782166655235.jpg"
  },
  {
    "name": "Finders Keepers",
    "cityName": "Saint Augustine",
    "stateCode": "FL",
    "rating": 4.9,
    "reviewCount": 62,
    "phoneNumber": "(904) 342-0505",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "JGS Auctions/Estate Sales",
    "cityName": "Saint Augustine",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 4,
    "phoneNumber": "(904) 982-1382",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Southern Charm Auctions AB1985",
    "cityName": "Saint Augustine",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(386) 916-1095",
    "websiteUrl": "http://www.palatkaantiques.com",
    "logoUrl": ""
  },
  {
    "name": "Designated Adults",
    "cityName": "Saint Augustine",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 673-2346",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Otterman Auctioneers",
    "cityName": "Saint Augustine",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 547-2743",
    "websiteUrl": "http://www.auctionocity.com",
    "logoUrl": ""
  },
  {
    "name": "Swamp Angels, Inc.",
    "cityName": "Saint Augustine",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 436-5705",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Auction & Estate Experts LLC",
    "cityName": "Saint Augustine",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 999-8230",
    "websiteUrl": "https://www.auctionexpertsllc.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/150023/638482617261455215.jpg"
  },
  {
    "name": "The Professionals Estate Liquidators",
    "cityName": "Saint Augustine",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(703) 405-8091",
    "websiteUrl": "http://www.floridaestateprofessionals.com",
    "logoUrl": ""
  },
  {
    "name": "Great Expectations Auction, Estate Services, & Realty",
    "cityName": "Saint Augustine",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 806-4274",
    "websiteUrl": "http://www.GEauction.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/13388/637532367807561973.jpg"
  },
  {
    "name": "Dc Estate Sales",
    "cityName": "Saint Augustine",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 4,
    "phoneNumber": "(904) 679-2567",
    "websiteUrl": "http://www.dcestatesales.net",
    "logoUrl": ""
  },
  {
    "name": "Aether Auctions And Estate Sales",
    "cityName": "Saint Augustine",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(772) 773-2228",
    "websiteUrl": "http://www.aether.estate",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/144662/637429572769580945.jpg"
  },
  {
    "name": "Palm Estate Sales",
    "cityName": "Saint Augustine",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 10,
    "phoneNumber": "(207) 485-2246",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/29213/636679546223261115.jpg"
  },
  {
    "name": "Timeless Treasures LLC",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 3.9,
    "reviewCount": 30,
    "phoneNumber": "(904) 772-4456",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/146237/637570657210821594.jpg"
  },
  {
    "name": "St. Augustine Auction and Estate Sale Services",
    "cityName": "Saint Augustine",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 4,
    "phoneNumber": "(904) 344-3237",
    "websiteUrl": "http://www.staugustinestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/20240/638974897807000542.jpg"
  },
  {
    "name": "T And A Auction Company",
    "cityName": "Palatka",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(386) 916-3053",
    "websiteUrl": "http://www.tandaauctioncompany.com",
    "logoUrl": ""
  },
  {
    "name": "Roys Auctions & Estate Sales",
    "cityName": "Palatka",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 10,
    "phoneNumber": "(386) 538-3205",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Elrod Auctions",
    "cityName": "Green Cove Springs",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 3,
    "phoneNumber": "(904) 699-6764",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/132059/636325363973315126.jpg"
  },
  {
    "name": "A Place In Time,inc",
    "cityName": "Green Cove Springs",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 657-9868",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Side By Side Auctions",
    "cityName": "Green Cove Springs",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 284-0021",
    "websiteUrl": "http://dontworrybidhappy.com",
    "logoUrl": ""
  },
  {
    "name": "East Coast Antiques & Estate Sales",
    "cityName": "Melrose",
    "stateCode": "FL",
    "rating": 4.0,
    "reviewCount": 2,
    "phoneNumber": "(352) 475-5492",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Ritter Estate Sales LLC",
    "cityName": "Melrose",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 283-5529",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Flatlander's Estate Sales",
    "cityName": "Crescent City",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(386) 559-7588",
    "websiteUrl": "http://northflhomebuilders.com/Estate/UpComingSales.htm",
    "logoUrl": ""
  },
  {
    "name": "Ancient City Estate Sales",
    "cityName": "Saint Augustine",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 878-7355",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/137300/637256100538277535.jpg"
  },
  {
    "name": "Elsie Bells Antique Mall",
    "cityName": "Satsuma",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(954) 520-1704",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "On The Block Auctions LLC",
    "cityName": "Keystone Heights",
    "stateCode": "FL",
    "rating": 4.9,
    "reviewCount": 9,
    "phoneNumber": "(386) 336-3084",
    "websiteUrl": "http://ontheblockauctions.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/154502/638133160355646268.jpg"
  },
  {
    "name": "Hodges Estate Sales",
    "cityName": "Saint Augustine",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 10,
    "phoneNumber": "(904) 293-7905",
    "websiteUrl": "http://www.hodgesestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/137843/636789397626101735.jpg"
  },
  {
    "name": "Mayfield Estate Sales & Liquidation Services LLC",
    "cityName": "East Palatka",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(386) 559-4084",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "The Auction House Sta",
    "cityName": "Elkton",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 1,
    "phoneNumber": "(727) 481-4052",
    "websiteUrl": "https://www.auctionsta.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/163958/638639308372294295.jpg"
  },
  {
    "name": "Premier Estate Services of Florida",
    "cityName": "Palatka",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 51,
    "phoneNumber": "(772) 559-8666",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/135962/636652180046374229.jpg"
  },
  {
    "name": "Elsie Bell's Estate Sale Services",
    "cityName": "Palatka",
    "stateCode": "FL",
    "rating": 4.7,
    "reviewCount": 147,
    "phoneNumber": "(561) 722-6444",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Elrod Auctions",
    "cityName": "Penney Farms",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 3,
    "phoneNumber": "(904) 669-8501",
    "websiteUrl": "http://www.elrodauctions.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/151361/638909596806698137.jpg"
  },
  {
    "name": "Another Memory Appraisals & Estate Sales",
    "cityName": "Saint Augustine",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 599-1976",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/26846/637489471041385891.jpg"
  },
  {
    "name": "Estate Sales Service Professionals",
    "cityName": "Gainesville",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 10,
    "phoneNumber": "(352) 871-4291",
    "websiteUrl": "http://gainesvilleestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/26762/638287896558324440.jpeg"
  },
  {
    "name": "Orange Blossom Estate Liquidations & Sales, LLC",
    "cityName": "Gainesville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(727) 243-7690",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Campen Auctions",
    "cityName": "Gainesville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 505-0560",
    "websiteUrl": "http://www.campenauctions.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/29672/636277096042205320.jpg"
  },
  {
    "name": "Micanopy Outpost",
    "cityName": "Williston",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 466-0010",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Webs And Shadows",
    "cityName": "Gainesville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 338-9317",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Estate House",
    "cityName": "Trenton",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 580-0925",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Clear Canopy, LLC Estate Sales",
    "cityName": "Alachua",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 301-8300",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/171125/639039142302118624.jpg"
  },
  {
    "name": "Everything Goes Estate Liquidators",
    "cityName": "Gainesville",
    "stateCode": "FL",
    "rating": 4.9,
    "reviewCount": 31,
    "phoneNumber": "(352) 234-3299",
    "websiteUrl": "http://www.estatesalesgainesville.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/14735/637628363349902244.jpg"
  },
  {
    "name": "C W Auction Company",
    "cityName": "High Springs",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 43,
    "phoneNumber": "(352) 514-8707",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Estate Solutions",
    "cityName": "High Springs",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 815-0397",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/33404/638671420947436148.jpg"
  },
  {
    "name": "Paradise Estate Sales",
    "cityName": "Bronson",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 949-7817",
    "websiteUrl": "https://floridasonlineauctions.com/marketplace/paradise-estate-sales",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/28139/637378017435745265.jpg"
  },
  {
    "name": "London Bridge Estate Sales",
    "cityName": "Gainesville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(646) 505-9872",
    "websiteUrl": "http://www.londonbridgeestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/144530/637660423956645279.jpg"
  },
  {
    "name": "Estate Sales Of North Florida",
    "cityName": "Alachua",
    "stateCode": "FL",
    "rating": 4.9,
    "reviewCount": 31,
    "phoneNumber": "(352) 554-0900",
    "websiteUrl": "https://www.estatesalesofnorthflorida.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/155195/638179412313835519.jpg"
  },
  {
    "name": "Sales By David & Lily",
    "cityName": "Hawthorne",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 317-4313",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Trimm Auction Services, LLC",
    "cityName": "Old Town",
    "stateCode": "FL",
    "rating": 4.7,
    "reviewCount": 35,
    "phoneNumber": "(352) 871-4291",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/129362/636083026039141542.jpg"
  },
  {
    "name": "North Florida Auctions",
    "cityName": "Gainesville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 682-2934",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "The Good The Old The Ugly",
    "cityName": "Gainesville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 359-5597",
    "websiteUrl": "http://www.goodoldugly.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/76067/636276208609797897.jpg"
  },
  {
    "name": "Estate Sales By Adkins",
    "cityName": "Micanopy",
    "stateCode": "FL",
    "rating": 3.0,
    "reviewCount": 4,
    "phoneNumber": "(352) 389-4688",
    "websiteUrl": "http://www.estatesalesbyadkins.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/136202/636676302028735271.jpg"
  },
  {
    "name": "Second Life Estate Services",
    "cityName": "Newberry",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 2,
    "phoneNumber": "(352) 731-3566",
    "websiteUrl": "https://secondlifeestate.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/162686/638514050955278215.jpg"
  },
  {
    "name": "Modern Estate Liquidators",
    "cityName": "La Crosse",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(574) 217-8255",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Nothing Left Behind Estate Sales",
    "cityName": "Gainesville",
    "stateCode": "FL",
    "rating": 4.9,
    "reviewCount": 31,
    "phoneNumber": "(954) 471-9054",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/147461/638241989452545412.jpg"
  },
  {
    "name": "Thrifty",
    "cityName": "Archer",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 575-4069",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/156860/638295569383390795.jpeg"
  },
  {
    "name": "Great American Estate Sales and Services of North Florida",
    "cityName": "Gainesville",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 10,
    "phoneNumber": "(352) 281-1822",
    "websiteUrl": "http://www.estatesalesnf.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/36311/636211706125118608.jpg"
  },
  {
    "name": "Camellia Antiques Estate Sales",
    "cityName": "Waldo",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(352) 339-8349",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/26291/638802735053530867.jpg"
  },
  {
    "name": "Panthera Pines",
    "cityName": "Gainesville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(239) 321-0896",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/160697/638499593321298706.jpg"
  },
  {
    "name": "Pk's Antiques",
    "cityName": "Santa Rosa Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 217-3954",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/21785/636344645527446504.jpg"
  },
  {
    "name": "Estate Treasures",
    "cityName": "Panama City",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 890-3830",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Big Bend Estate Sales",
    "cityName": "Apalachicola",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 1,
    "phoneNumber": "(352) 681-7956",
    "websiteUrl": "http://www.bigbendestates.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/148055/637715476106197043.jpg"
  },
  {
    "name": "Bay Heritage Estate Sales LLC",
    "cityName": "Panama City Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 774-1100",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/156533/638268676155031389.jpg"
  },
  {
    "name": "Talk Of The Town Estate Sales",
    "cityName": "Port Saint Joe",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 307-3346",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Nicr Marketing",
    "cityName": "Santa Rosa Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(877) 962-4348",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Beaches Auctions",
    "cityName": "Panama City Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 614-8008",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "St. Pierre's Collection",
    "cityName": "Panama City Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(404) 401-0592",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/159242/638441455820846003.jpg"
  },
  {
    "name": "Dothan Mercantile",
    "cityName": "Dothan",
    "stateCode": "AL",
    "rating": 5.0,
    "reviewCount": 10,
    "phoneNumber": "(334) 446-0749",
    "websiteUrl": "http://www.dothanmercantile.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/154322/638124451411608775.jpg"
  },
  {
    "name": "Preloved Treasures Estate Sale",
    "cityName": "Lynn Haven",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 8,
    "phoneNumber": "(850) 428-0178",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Southern Auction Service",
    "cityName": "Panama City",
    "stateCode": "FL",
    "rating": 4.9,
    "reviewCount": 81,
    "phoneNumber": "(888) 786-0950",
    "websiteUrl": "http://southernauction.vpweb.com",
    "logoUrl": ""
  },
  {
    "name": "By The Bay Estate Liquidators LLC",
    "cityName": "Lynn Haven",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 866-6747",
    "websiteUrl": "http://www.bythebayestateliquidators.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/132566/636425734214258992.jpg"
  },
  {
    "name": "Ugly Owl Liquidation Company LLC",
    "cityName": "Panama City",
    "stateCode": "FL",
    "rating": 1.0,
    "reviewCount": 1,
    "phoneNumber": "(850) 960-7928",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "A+ Estate Sales",
    "cityName": "Panama City",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 866-7402",
    "websiteUrl": "http://aplusestatesales.com",
    "logoUrl": ""
  },
  {
    "name": "77 South Auction & Estate Sales",
    "cityName": "Chipley",
    "stateCode": "FL",
    "rating": 4.9,
    "reviewCount": 12,
    "phoneNumber": "(850) 303-1091",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Peach Creek Bazaar And Fresh Market",
    "cityName": "Santa Rosa Beach",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 693,
    "phoneNumber": "(540) 538-1728",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Estate Treasures - Liquidations and Consignments",
    "cityName": "Panama City Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 215-3782",
    "websiteUrl": "http://www.estatetreasurespc.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/7067/636208546161725838.jpg"
  },
  {
    "name": "Foundstuff Estate Sales & Appraisals",
    "cityName": "Warren",
    "stateCode": "OR",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(503) 369-2454",
    "websiteUrl": "http://www.foundstuff.net",
    "logoUrl": ""
  },
  {
    "name": "My Antique Collection, Inc.",
    "cityName": "Panama City Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 346-2135",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Destin Estate Sales",
    "cityName": "Destin",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 739-2180",
    "websiteUrl": "https://destinestatesales.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/145457/637516774124680054.jpg"
  },
  {
    "name": "Family Nest Emerald Coast",
    "cityName": "Crestview",
    "stateCode": "FL",
    "rating": 3.4,
    "reviewCount": 240,
    "phoneNumber": "(850) 752-0433",
    "websiteUrl": "https://familynestestates.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/170201/638972650558614716.jpg"
  },
  {
    "name": "Betton Place Antiques",
    "cityName": "Tallahassee",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 508-3755",
    "websiteUrl": "http://www.estatesalestallahassee.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/18551/636894009089308395.jpg"
  },
  {
    "name": "Weaver Estate Sales",
    "cityName": "Defuniak Springs",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 865-8145",
    "websiteUrl": "https://weaverestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/158243/638368803052980113.jpg"
  },
  {
    "name": "Nix Auction And Estate Sales LLC",
    "cityName": "Chipley",
    "stateCode": "FL",
    "rating": 4.9,
    "reviewCount": 12,
    "phoneNumber": "(850) 849-5410",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/146123/637566407600817202.jpg"
  },
  {
    "name": "Kc's Antiques And Estate Sales",
    "cityName": "Dothan",
    "stateCode": "AL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(334) 596-7131",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/167027/638799305708774776.jpg"
  },
  {
    "name": "Panhandle Estate Liquidations",
    "cityName": "Panama City",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 625-9536",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/140153/636991345489787333.jpg"
  },
  {
    "name": "Lakecity4sale",
    "cityName": "Lake City",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(386) 269-0062",
    "websiteUrl": "http://lakecity4sale.com",
    "logoUrl": ""
  },
  {
    "name": "Rubye Antiques & Uniques",
    "cityName": "Live Oak",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(386) 842-2098",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Riata / Beachville Auctions",
    "cityName": "Lake City",
    "stateCode": "FL",
    "rating": 4.4,
    "reviewCount": 21,
    "phoneNumber": "(386) 365-0279",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Furniture And Furnishings",
    "cityName": "Lake City",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(386) 984-7226",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "J.w. Hill And Associates Inc.",
    "cityName": "Live Oak",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(386) 362-3300",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/27167/638507745161380213.jpg"
  },
  {
    "name": "Island Treasures",
    "cityName": "Fernandina Beach",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 193,
    "phoneNumber": "(904) 710-9991",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Traveling Treasures",
    "cityName": "Fernandina Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(847) 558-9001",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Law And Hardy",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 307-4750",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/26081/636739453828837309.jpg"
  },
  {
    "name": "Byrdies Nest",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 434-1698",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Ann Madden Estate Sales",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 4.1,
    "reviewCount": 9,
    "phoneNumber": "(904) 302-9063",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Judy Barrington",
    "cityName": "Fleming Island",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 278-1126",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Luna See Estate Sales",
    "cityName": "Neptune Beach",
    "stateCode": "FL",
    "rating": 3.9,
    "reviewCount": 30,
    "phoneNumber": "(904) 667-1752",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "AMBER LANE Estate Sale Specialists",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 4.1,
    "reviewCount": 9,
    "phoneNumber": "(904) 514-2773",
    "websiteUrl": "http://www.amberlanejax.com",
    "logoUrl": ""
  },
  {
    "name": "The Declutter Company",
    "cityName": "Saint Augustine",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 238-9040",
    "websiteUrl": "http://www.DeclutteringwiththeCostanzos.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/33308/636361822438275109.jpg"
  },
  {
    "name": "Simplicity Estate Liquidations",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "My World Now Corp",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 314-2061",
    "websiteUrl": "http://www.myworldnowcorp.com",
    "logoUrl": ""
  },
  {
    "name": "Myers Jackson",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 142,
    "phoneNumber": "(904) 200-1547",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/127310/637952558420051799.jpg"
  },
  {
    "name": "Little House of Treasures",
    "cityName": "Orange Park",
    "stateCode": "FL",
    "rating": 2.5,
    "reviewCount": 2,
    "phoneNumber": "(904) 579-3806",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Get Rid Of My Stuff Online LLC",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 863-5927",
    "websiteUrl": "http://www.getridofmystuffonline.com",
    "logoUrl": ""
  },
  {
    "name": "Sunshine Auctions",
    "cityName": "Orange Park",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 868-6774",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Blue Skies Estate Co.",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 578-9656",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Rick Eberhart Auctions LLC",
    "cityName": "Orange Park",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 1,
    "phoneNumber": "(904) 505-6936",
    "websiteUrl": "http://www.rickeberhart.com",
    "logoUrl": ""
  },
  {
    "name": "Oak Tree Auctions",
    "cityName": "Orange Park",
    "stateCode": "FL",
    "rating": 4.0,
    "reviewCount": 4,
    "phoneNumber": "(904) 385-0717",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Ricki Marshall Estate Sales",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 3.9,
    "reviewCount": 30,
    "phoneNumber": "(904) 234-0122",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Southern Transitions",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 9,
    "phoneNumber": "(904) 803-9495",
    "websiteUrl": "http://www.southerntransitionsjax.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/138377/636852380577569290.jpg"
  },
  {
    "name": "Ashley's Auctions And Appraisals",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 910-3872",
    "websiteUrl": "http://www.ashleysauctionsandappraisals.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/131315/636268702455701974.jpg"
  },
  {
    "name": "Auctions Unlimited",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 154,
    "phoneNumber": "(904) 612-5591",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Fleming & Company, LLC",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 886-9200",
    "websiteUrl": "http://www.flemingauction.com",
    "logoUrl": ""
  },
  {
    "name": "Local Liquidation LLC",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 254-3024",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/148154/637848745560504937.jpg"
  },
  {
    "name": "Rubys Revival",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 305-1987",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/143159/637659452395100743.jpg"
  },
  {
    "name": "Lopers Loft",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 343-9741",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Blue Moon Estate Sales Of Jacksonville",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 477-4871",
    "websiteUrl": "https://bluemoonestatesales.com/jacksonville",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/148217/637731853815969298.jpg"
  },
  {
    "name": "All Spiffied Up",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(229) 938-1886",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Estate Total Liquidations",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 993-2578",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "by Harper",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 9,
    "phoneNumber": "(904) 465-0404",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "5 Points Antiques",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 4.7,
    "reviewCount": 257,
    "phoneNumber": "(904) 638-7054",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/17243/636290259562854492.jpg"
  },
  {
    "name": "Dugdaleestate Liquidations LLC",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 299-6869",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/165629/638764396139624911.jpg"
  },
  {
    "name": "Amelia Island Estate Sales",
    "cityName": "Fernandina Beach",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 19,
    "phoneNumber": "(904) 441-9878",
    "websiteUrl": "http://www.ameliaislandestatesales.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/142298/637195626632857740.jpg"
  },
  {
    "name": "Jax Budget Movers",
    "cityName": "Fleming Island",
    "stateCode": "FL",
    "rating": 4.9,
    "reviewCount": 94,
    "phoneNumber": "(904) 509-3654",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/166184/638745359241865389.jpg"
  },
  {
    "name": "The Estate Concierge",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 52,
    "phoneNumber": "(904) 899-2058",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Commander Consignment",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 4.4,
    "reviewCount": 13,
    "phoneNumber": "(904) 234-8770",
    "websiteUrl": "http://www.commanderconsignment.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/167087/638839911105422828.jpg"
  },
  {
    "name": "Southland Estate Liquidation",
    "cityName": "Saint Johns",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 855-7013",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/147131/637640637928837985.jpg"
  },
  {
    "name": "E.W. Auctions LLC",
    "cityName": "Ponte Vedra Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(229) 740-9515",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/166643/638811907150717781.jpg"
  },
  {
    "name": "La Vie En Rose Antiques And Estate Sales Services",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 2,
    "phoneNumber": "(904) 563-6380",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/163214/638543044511204302.jpg"
  },
  {
    "name": "Jean’s Estate Sales",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 3.6,
    "reviewCount": 104,
    "phoneNumber": "(904) 910-6912",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Caring Transition Of North Jacksonville And Fernandina Beach",
    "cityName": "Fernandina Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(480) 580-5426",
    "websiteUrl": "http://www.CaringTransitionsNJFB.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/165419/638677136260789605.jpg"
  },
  {
    "name": "Sage Advice Sales",
    "cityName": "Callahan",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 507-9520",
    "websiteUrl": "https://sageadvicesales.net",
    "logoUrl": ""
  },
  {
    "name": "Caring Transitions Of West Jacksonville",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 299-9198",
    "websiteUrl": "https://caringtransitionsofwestjacksonville.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/170537/638988353013360261.jpg"
  },
  {
    "name": "Tom Watson Estate Sales",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 3.6,
    "reviewCount": 104,
    "phoneNumber": "(904) 387-4822",
    "websiteUrl": "http://www.TomWatsonEstateSales.com",
    "logoUrl": ""
  },
  {
    "name": "Tacosnroses Estate Liquidation",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(912) 777-9719",
    "websiteUrl": "https://tacosnroses.shop",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/170420/638981655457425169.jpg"
  },
  {
    "name": "Finders Keepers",
    "cityName": "Macclenny",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 19,
    "phoneNumber": "(904) 657-1713",
    "websiteUrl": "https://finderskeepers4sale.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/140954/637060519708780395.jpg"
  },
  {
    "name": "Architectural Accents & Antiques",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 355-0280",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Hunter Estate Sales",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 923-6777",
    "websiteUrl": "http://www.hunterestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/5474/636827290820723480.jpg"
  },
  {
    "name": "The Estate Exchange Co.",
    "cityName": "Fernandina Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 300-4344",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/164015/638595018263657498.jpg"
  },
  {
    "name": "Estate Sales By Faye and Associates, Inc.",
    "cityName": "Ponte Vedra Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 608-1104",
    "websiteUrl": "https://estatesalesbyfaye.com",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/34922/635860648683514836.jpg"
  },
  {
    "name": "Hidden Treasures LLC",
    "cityName": "Fleming Island",
    "stateCode": "FL",
    "rating": 4.2,
    "reviewCount": 59,
    "phoneNumber": "(904) 252-7387",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/28445/636279085465030504.jpg"
  },
  {
    "name": "Trendyhiddengems",
    "cityName": "Middleburg",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 264-4210",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/167969/638935162265733845.jpg"
  },
  {
    "name": "Coastal Estate Sales & Liquidation Co",
    "cityName": "Fernandina Beach",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 19,
    "phoneNumber": "(904) 206-0884",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Ancient City Estate Liquidators",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 403-6676",
    "websiteUrl": "http://www.ancientcityestateliquidators.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/144029/637797532523030327.jpg"
  },
  {
    "name": "Doug Robertson Auction And Estate Sales",
    "cityName": "Saint Simons Island",
    "stateCode": "GA",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(912) 571-9506",
    "websiteUrl": "https://www.stsimonsislandantiques.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/25502/636801696439630849.jpg"
  },
  {
    "name": "Ortega Trading Company",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 3.9,
    "reviewCount": 7,
    "phoneNumber": "(904) 610-3349",
    "websiteUrl": "http://www.ortegatradingcompany.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/22481/638801133372194707.jpg"
  },
  {
    "name": "One Person's Treasure, LLC",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 894-9624",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Anita's Antiques & Estate Sales",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 8,
    "phoneNumber": "(904) 477-6955",
    "websiteUrl": "http://anitasantiques.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/131312/636913755349114076.jpg"
  },
  {
    "name": "Replay Sports",
    "cityName": "Middleburg",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(954) 260-2360",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "New Leaf Estate Sales",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 4,
    "phoneNumber": "(904) 333-3272",
    "websiteUrl": "http://www.newleafsales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/130280/636332351947006283.jpg"
  },
  {
    "name": "Rainey Auctions LLC",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 324-8174",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Vintage N Vogue",
    "cityName": "Jacksonville Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 535-5500",
    "websiteUrl": "http://www.vnvsc.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/130910/636292556609668494.jpg"
  },
  {
    "name": "Baker Moving",
    "cityName": "Middleburg",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 616-2556",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Enchanted Antiques & Estate Sales",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 11,
    "phoneNumber": "(904) 742-0332",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Luxury For Less In Ponte Vedra",
    "cityName": "Ponte Vedra Beach",
    "stateCode": "FL",
    "rating": 3.2,
    "reviewCount": 18,
    "phoneNumber": "(904) 285-1986",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Deh",
    "cityName": "Orange Park",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 541-0061",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Hendricks & Co. LLC",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 345-0606",
    "websiteUrl": "http://www.HendricksAndCo.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/130571/636207206857446252.jpg"
  },
  {
    "name": "Good As Gold",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 534-3482",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Alan Ransdell, ISA AM",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 731-5575",
    "websiteUrl": "http://www.ISAappraiser.com",
    "logoUrl": ""
  },
  {
    "name": "The Cleaning Bug",
    "cityName": "Neptune Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 955-4207",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Wowever Upscale Resale Boutique",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(910) 939-0299",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Southern Antiquated",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 614-8031",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/138506/636863179359287822.jpg"
  },
  {
    "name": "Trena's Trinkets & Treasures",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 13,
    "phoneNumber": "(770) 548-6797",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Yours Truly",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 1.3,
    "reviewCount": 3,
    "phoneNumber": "(904) 388-3611",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Three Graces Estate Sales",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 3.9,
    "reviewCount": 30,
    "phoneNumber": "(904) 612-3191",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Franklycharlotte",
    "cityName": "Jacksonville Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 246-0874",
    "websiteUrl": "http://",
    "logoUrl": ""
  },
  {
    "name": "Tpp",
    "cityName": "Orange Park",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 521-1583",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/152252/638043064375815874.jpg"
  },
  {
    "name": "Sunshine Estate Sales.",
    "cityName": "Fleming Island",
    "stateCode": "FL",
    "rating": 3.3,
    "reviewCount": 20,
    "phoneNumber": "(904) 704-0428",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Ms. Mulligan's Estate Sales",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 76,
    "phoneNumber": "(904) 262-7231",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Triple R Estate Sales",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 3.9,
    "reviewCount": 30,
    "phoneNumber": "(904) 783-3321",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Antiques By Michele",
    "cityName": "Orange Park",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(231) 742-2323",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/131714/636299796595017065.jpg"
  },
  {
    "name": "Auction Listing Service",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 4.0,
    "reviewCount": 4,
    "phoneNumber": "(904) 743-8017",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "2 Heart's Auction",
    "cityName": "Orange Park",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 579-4378",
    "websiteUrl": "https://www.facebook.com/pages/2-Hearts-Auction/164439836938273?ref=hl",
    "logoUrl": ""
  },
  {
    "name": "Merleburl Market",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 30,
    "phoneNumber": "(904) 444-9836",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Maisies & Toasties",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 636-8646",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Lane Auctions, LLC",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 654-3682",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/128378/635993812480330263.jpg"
  },
  {
    "name": "C&k Designs",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 672-7555",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Cardinal Auctions & Estate Sales, LLC",
    "cityName": "Orange Park",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 874-4016",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Z Auctions",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(912) 409-9998",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Caring Transitions Of First Coast",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 416-0685",
    "websiteUrl": "https://ctbids.com/estate-sales/jacksonville-fl",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/127451/635940824757122375.jpg"
  },
  {
    "name": "Banner House Estate Sales",
    "cityName": "Hilliard",
    "stateCode": "FL",
    "rating": 4.1,
    "reviewCount": 203,
    "phoneNumber": "(904) 603-6021",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/165803/638711147922270744.jpg"
  },
  {
    "name": "Jax Estate Sales",
    "cityName": "Jacksonville Beach",
    "stateCode": "FL",
    "rating": 3.6,
    "reviewCount": 104,
    "phoneNumber": "(904) 386-4686",
    "websiteUrl": "https://www.facebook.com/SherrysEstateSales/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/128573/636004798640072889.jpg"
  },
  {
    "name": "Last Call Auctions",
    "cityName": "Macclenny",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 657-6775",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "T&t Estate Sales And More",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 3.9,
    "reviewCount": 30,
    "phoneNumber": "(904) 838-9671",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Great American Antique Mall",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 4.3,
    "reviewCount": 346,
    "phoneNumber": "(904) 406-8575",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "King Antique Shows Inc",
    "cityName": "Orange Park",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 616-1704",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Citrus Online Estate Sales",
    "cityName": "Ponte Vedra Beach",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 1,
    "phoneNumber": "(904) 686-4077",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/166412/638766113690523633.jpg"
  },
  {
    "name": "Lab33 LLC",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 729-1896",
    "websiteUrl": "http://www.quarkstreasure.hibid.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/150587/637926457121201622.jpg"
  },
  {
    "name": "Old Cool Toys, Inc.",
    "cityName": "Atlantic Beach",
    "stateCode": "FL",
    "rating": 1.0,
    "reviewCount": 1,
    "phoneNumber": "(904) 616-2846",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "The Regal Estate Sale LLC",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 3.9,
    "reviewCount": 30,
    "phoneNumber": "(904) 327-0916",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Estate Jewelry & Sales By Rachel, LLC",
    "cityName": "Fleming Island",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 338-2283",
    "websiteUrl": "https://www.estatejewelrybyrachel.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/130958/638762096890064474.jpg"
  },
  {
    "name": "Prestige Estate Services, LLC",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 19,
    "phoneNumber": "(904) 400-4230",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Swan Estates LLC",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 755-4409",
    "websiteUrl": "https://www.jacksonvilleestatesale.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/167900/638850732912429619.jpg"
  },
  {
    "name": "The Auction Spot",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 4.3,
    "reviewCount": 6,
    "phoneNumber": "(904) 666-0709",
    "websiteUrl": "http://www.theauctionspotjax.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/155549/638202135582972004.jpg"
  },
  {
    "name": "Selling The South Estate Sales",
    "cityName": "Jacksonville Beach",
    "stateCode": "FL",
    "rating": 3.6,
    "reviewCount": 104,
    "phoneNumber": "(904) 397-4748",
    "websiteUrl": "https://betsywaltrip.nhassurancerealty.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/119810/638734219288049697.jpg"
  },
  {
    "name": "Serendipity Estate Sales",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(706) 308-5084",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Emerald Auction & Estate Sales, Inc.",
    "cityName": "Saint Johns",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 838-9834",
    "websiteUrl": "http://www.emeraldauction.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/23177/636148223533632013.jpg"
  },
  {
    "name": "Restored Blessings Estate Services",
    "cityName": "Middleburg",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 673-2839",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/160202/638820728315911092.jpg"
  },
  {
    "name": "Pretty Old Things",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 654-5402",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/141992/637822899128704364.jpg"
  },
  {
    "name": "Estate Sales By Ewp",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 3.9,
    "reviewCount": 30,
    "phoneNumber": "(904) 699-0863",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Ahlers & Ogletree Auction Gallery",
    "cityName": "Atlanta",
    "stateCode": "GA",
    "rating": 4.7,
    "reviewCount": 142,
    "phoneNumber": "(404) 869-2478",
    "websiteUrl": "https://www.AandOauctions.com",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/24260/635601207234019490.jpg"
  },
  {
    "name": "Estate Sales By Jill",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 608-6197",
    "websiteUrl": "https://estatesalesbyjill.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/169043/638909724675172658.jpg"
  },
  {
    "name": "The Resale Project Estate Sales & Antique Store",
    "cityName": "Fernandina Beach",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 25,
    "phoneNumber": "(904) 206-6874",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/156392/638258242120704457.jpg"
  },
  {
    "name": "Yesterdays Child",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 707-6532",
    "websiteUrl": "http://www.yesterdayschildinc.com",
    "logoUrl": ""
  },
  {
    "name": "Repete's",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 465-3821",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "The Great Estate",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 200-0610",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/5204/636050417561150819.jpg"
  },
  {
    "name": "Deck The Halls Estate Treasures LLC",
    "cityName": "Ponte Vedra Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 315-5040",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/145622/637529700397948126.jpg"
  },
  {
    "name": "Magnolia Move Managers LLC",
    "cityName": "Ponte Vedra",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 18,
    "phoneNumber": "(904) 522-5653",
    "websiteUrl": "https://www.magnoliamovemanagers.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/159833/638458952614701807.jpg"
  },
  {
    "name": "Rolphs Auction Depot",
    "cityName": "Jacksonville",
    "stateCode": "FL",
    "rating": 3.9,
    "reviewCount": 8,
    "phoneNumber": "(904) 993-8679",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/7877/636543502872642868.jpg"
  },
  {
    "name": "Emporium Estate Sales And Liquidations",
    "cityName": "Destin",
    "stateCode": "FL",
    "rating": 4.3,
    "reviewCount": 20,
    "phoneNumber": "(850) 243-0308",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Porter Auctions, Inc.",
    "cityName": "Crestview",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 1,
    "phoneNumber": "(850) 892-1360",
    "websiteUrl": "http://www.porterauctionsinc.com",
    "logoUrl": ""
  },
  {
    "name": "The Jwj Group",
    "cityName": "Navarre",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 781-2462",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Vip Estate Sales",
    "cityName": "Fort Walton Beach",
    "stateCode": "FL",
    "rating": 4.3,
    "reviewCount": 24,
    "phoneNumber": "(850) 745-4331",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "All In 1 Estate Sales",
    "cityName": "Destin",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 865-7456",
    "websiteUrl": "http://www.allin1estatesales.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/132071/636349806716719270.jpg"
  },
  {
    "name": "Jackson Auction Services",
    "cityName": "Fort Walton Beach",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 862-4988",
    "websiteUrl": "http://CJACKSONAUCTION.COM",
    "logoUrl": ""
  },
  {
    "name": "East Of Eden Estate Liquidators",
    "cityName": "Niceville",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 98,
    "phoneNumber": "(812) 560-7636",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Hedley Heirlooms & Estates",
    "cityName": "Niceville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 533-7171",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Gulf Coast Estate Liquidators",
    "cityName": "Mary Esther",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 582-7347",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/9596/636067318520281645.jpg"
  },
  {
    "name": "Brothers Estate Sales",
    "cityName": "Cantonment",
    "stateCode": "FL",
    "rating": 4.7,
    "reviewCount": 32,
    "phoneNumber": "(850) 679-4103",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/144617/637696463372710624.jpg"
  },
  {
    "name": "Lily Pads Of Bluewater Bay, LLC",
    "cityName": "Niceville",
    "stateCode": "FL",
    "rating": 4.3,
    "reviewCount": 93,
    "phoneNumber": "(850) 830-5903",
    "websiteUrl": "https://www.lilypadsbwb.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/36371/636656614784516744.jpg"
  },
  {
    "name": "850 Estate Sales",
    "cityName": "Valparaiso",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 816-0623",
    "websiteUrl": "http://www.850EstateSales.net",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/154967/638166767337676579.jpg"
  },
  {
    "name": "Sweet Tea Antiques & Estate Sales",
    "cityName": "Atmore",
    "stateCode": "AL",
    "rating": 3.7,
    "reviewCount": 3,
    "phoneNumber": "(251) 359-5502",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/167213/638848692724235422.jpg"
  },
  {
    "name": "Whitecaps Estate Sales",
    "cityName": "Gulf Breeze",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 781-6887",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/166277/639033113741015146.jpg"
  },
  {
    "name": "Southern Agenda",
    "cityName": "Niceville",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 218-4798",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Rising Sun Auction, LLC",
    "cityName": "Shalimar",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 855-7687",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Estate Sale Professionals",
    "cityName": "Shalimar",
    "stateCode": "FL",
    "rating": 4.3,
    "reviewCount": 24,
    "phoneNumber": "(850) 651-8489",
    "websiteUrl": "http://www.estatesaleprofessionals.net/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/8021/636371083450358224.jpg"
  },
  {
    "name": "Love Estate Sales",
    "cityName": "Fort Walton Beach",
    "stateCode": "FL",
    "rating": 4.3,
    "reviewCount": 24,
    "phoneNumber": "(817) 715-3597",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Coastal Auction Group",
    "cityName": "Destin",
    "stateCode": "FL",
    "rating": 3.7,
    "reviewCount": 3,
    "phoneNumber": "(850) 460-8877",
    "websiteUrl": "http://www.CoastalAuctionGrp.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/146228/637570396110900140.jpg"
  },
  {
    "name": "East Of Eden Estate Liquidators",
    "cityName": "Niceville",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 98,
    "phoneNumber": "(850) 687-4838",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Easy Auction & Appraisal",
    "cityName": "Freeport",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(205) 862-8650",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Miss Donnas Southern Belle Auctions",
    "cityName": "Navarre",
    "stateCode": "FL",
    "rating": 4.0,
    "reviewCount": 58,
    "phoneNumber": "(850) 259-7251",
    "websiteUrl": "http://missdonnas.hibid.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/28289/637977635830288949.jpg"
  },
  {
    "name": "D And D Estate Sales",
    "cityName": "Pensacola",
    "stateCode": "FL",
    "rating": 4.0,
    "reviewCount": 8,
    "phoneNumber": "(850) 485-1826",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Early Bird Estate Sales Of The Emerald Coast",
    "cityName": "Shalimar",
    "stateCode": "FL",
    "rating": 4.3,
    "reviewCount": 24,
    "phoneNumber": "(850) 582-1156",
    "websiteUrl": "http://www.earlybirdestatesalesemeraldcoast.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/33467/636656137489683360.jpg"
  },
  {
    "name": "The Occasional Wife Perdido Key",
    "cityName": "Pensacola",
    "stateCode": "FL",
    "rating": 4.4,
    "reviewCount": 18,
    "phoneNumber": "(850) 208-1245",
    "websiteUrl": "http://www.theoccasionalwife.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/168224/638929291484858714.jpg"
  },
  {
    "name": "Brown Galloway & Associates",
    "cityName": "Pensacola",
    "stateCode": "FL",
    "rating": 3.3,
    "reviewCount": 7,
    "phoneNumber": "(850) 380-0644",
    "websiteUrl": "http://www.browngalloway.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/11267/636189784841847292.jpg"
  },
  {
    "name": "Cardon Estate Sales & Appraisals",
    "cityName": "Pensacola",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 206-2601",
    "websiteUrl": "http://www.cardonestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/11594/636082612040450395.jpg"
  },
  {
    "name": "All Over Estate Sales And Clear Out",
    "cityName": "Fort Walton Beach",
    "stateCode": "FL",
    "rating": 4.3,
    "reviewCount": 24,
    "phoneNumber": "(850) 301-0479",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Red, White, And Sold Estate Sales",
    "cityName": "Crestview",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 546-2867",
    "websiteUrl": "https://redwhiteandsoldestatesales.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/170318/638976131545688303.jpg"
  },
  {
    "name": "Garrett And Garrett Auction Company",
    "cityName": "Fort Walton Beach",
    "stateCode": "FL",
    "rating": 4.9,
    "reviewCount": 24,
    "phoneNumber": "(850) 244-7453",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/141758/637273095573242580.jpg"
  },
  {
    "name": "Emerald Coast Estate Sales Inc.",
    "cityName": "Navarre",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 889-5355",
    "websiteUrl": "http://www.emeraldcoastestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/109115/638574654492907250.jpg"
  },
  {
    "name": "Vintage On 12th Pensacola",
    "cityName": "Pensacola",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 450-7346",
    "websiteUrl": "http://www.vintageon12th.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/130397/636190591749919677.jpg"
  },
  {
    "name": "Treasured Estate Sales",
    "cityName": "Milton",
    "stateCode": "FL",
    "rating": 3.9,
    "reviewCount": 30,
    "phoneNumber": "(850) 910-5092",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "L A Store N' More",
    "cityName": "Lillian",
    "stateCode": "AL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(251) 961-1150",
    "websiteUrl": "http://www.lastorenmore.net",
    "logoUrl": ""
  },
  {
    "name": "Estate Sales of Pensacola",
    "cityName": "Pensacola",
    "stateCode": "FL",
    "rating": 4.7,
    "reviewCount": 32,
    "phoneNumber": "(850) 221-9581",
    "websiteUrl": "http://www.esp.8m.com",
    "logoUrl": ""
  },
  {
    "name": "The Gallery At Flomaton",
    "cityName": "Flomaton",
    "stateCode": "AL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(251) 296-2992",
    "websiteUrl": "http://http://www.thegalleryatflomaton.com/",
    "logoUrl": ""
  },
  {
    "name": "Pearly Gates Estate Sales",
    "cityName": "Elberta",
    "stateCode": "AL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(251) 269-9278",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/146471/638513167945073958.jpg"
  },
  {
    "name": "Gene Fry Auctions & Marketing",
    "cityName": "Pensacola",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 384-5393",
    "websiteUrl": "http://www.fryauction.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/8132/636240097259817022.jpg"
  },
  {
    "name": "Restore Reuse Relove",
    "cityName": "Cantonment",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 292-8063",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "A Walk Through Tyme",
    "cityName": "Milton",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 554-3651",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "The Status Symbol",
    "cityName": "Pensacola",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 937-9974",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Now Yours Houston Sales",
    "cityName": "Pensacola",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(214) 731-1266",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Dallas Estate Sales",
    "cityName": "Pensacola",
    "stateCode": "FL",
    "rating": 4.7,
    "reviewCount": 32,
    "phoneNumber": "(214) 901-3872",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Legacy Estate Sales & Liquidation Services LLC",
    "cityName": "Pensacola",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 375-2552",
    "websiteUrl": "http://www.legacyestatesalesfl.com",
    "logoUrl": ""
  },
  {
    "name": "Aloha Estate Sales & Property Services",
    "cityName": "Lillian",
    "stateCode": "AL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(251) 210-8274",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Incredible Estate Sale",
    "cityName": "Elberta",
    "stateCode": "AL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(251) 644-4826",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Florabama Auction Services",
    "cityName": "Milton",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 626-7173",
    "websiteUrl": "http://www.florabamaauctions.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/147284/637654512175958510.jpg"
  },
  {
    "name": "Gulf Beach Estate Sales",
    "cityName": "Pensacola",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 462-4250",
    "websiteUrl": "http://www.gulfbeachestatesales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/164060/638666037272249648.jpg"
  },
  {
    "name": "Amazing City Sales",
    "cityName": "Pensacola",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 941-4321",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/168248/638865417105061486.jpg"
  },
  {
    "name": "Almand Estate Sales LLC",
    "cityName": "Cantonment",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 712-3446",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/156998/638296488491302814.jpg"
  },
  {
    "name": "Veteran’s Indoor Yardsale",
    "cityName": "Elberta",
    "stateCode": "AL",
    "rating": 4.6,
    "reviewCount": 14,
    "phoneNumber": "(205) 928-4710",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/155312/638186609949224244.jpg"
  },
  {
    "name": "Franklin Antiques And State Liquidators",
    "cityName": "Pensacola",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 305,
    "phoneNumber": "(850) 910-5350",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Blue Horizon Estate Sales",
    "cityName": "Pensacola",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 341-8985",
    "websiteUrl": "https://www.facebook.com/share/19ruVYDJXD/?mibextid=wwXIfr",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/165359/638673042509147644.jpg"
  },
  {
    "name": "Kay Keller Estate Liquidations",
    "cityName": "Pensacola",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 554-3926",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/162569/638510286127065599.jpg"
  },
  {
    "name": "Coastal Estate Liquidations",
    "cityName": "Robertsdale",
    "stateCode": "AL",
    "rating": 4.8,
    "reviewCount": 19,
    "phoneNumber": "(251) 423-8912",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/153830/638098000175740645.jpg"
  },
  {
    "name": "Cotton & Associates, Inc.",
    "cityName": "Pensacola",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 3,
    "phoneNumber": "(850) 380-7413",
    "websiteUrl": "http://www.Cotton-Auctions.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/4571/638984007291528709.jpg"
  },
  {
    "name": "Coffields Estate And Down-sizing Sales",
    "cityName": "Milton",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 777-1745",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/33833/637167508404736911.jpg"
  },
  {
    "name": "Pensacola Estate Sale Team",
    "cityName": "Pensacola",
    "stateCode": "FL",
    "rating": 4.7,
    "reviewCount": 32,
    "phoneNumber": "(850) 516-2425",
    "websiteUrl": "http://www.pensacolaestatesaleteam.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/28517/636227674947399106.jpg"
  },
  {
    "name": "Brewer's Estate Sales",
    "cityName": "Pensacola",
    "stateCode": "FL",
    "rating": 4.7,
    "reviewCount": 32,
    "phoneNumber": "(931) 374-2217",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/151166/638913958627571589.jpg"
  },
  {
    "name": "Uncommon Artifacts Estate Services LLC",
    "cityName": "Stockton",
    "stateCode": "AL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(251) 635-2927",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/139307/637654539155477598.jpg"
  },
  {
    "name": "The Estate Sale Ladies",
    "cityName": "Cantonment",
    "stateCode": "FL",
    "rating": 4.7,
    "reviewCount": 32,
    "phoneNumber": "(850) 288-2552",
    "websiteUrl": "https://pensacolaestatesaleladies.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/158549/639074139939595597.jpg"
  },
  {
    "name": "Restore Reuse & Relove",
    "cityName": "Pensacola",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 208-5599",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "The Great Estate",
    "cityName": "Pensacola",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 22,
    "phoneNumber": "(850) 361-5682",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Specialists Of The South, Inc",
    "cityName": "Pensacola",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 819-6003",
    "websiteUrl": "http://www.sospcfl.com",
    "logoUrl": "//s3.amazonaws.com/pictures.estatesales.net/orglogos/20462/635761941031671380.jpg"
  },
  {
    "name": "Coastal Legacy LLC",
    "cityName": "Milton",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 76,
    "phoneNumber": "(850) 400-3990",
    "websiteUrl": "http://www.coastallegacysales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/141101/637068460453620415.jpg"
  },
  {
    "name": "Elite Auction Associates. Inc",
    "cityName": "Gulf Breeze",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 25,
    "phoneNumber": "(850) 723-5752",
    "websiteUrl": "http://www.auctionzip.com/cgi-bin/auctionlist.cgi",
    "logoUrl": ""
  },
  {
    "name": "Joy Bell's Estate Sales",
    "cityName": "Pensacola",
    "stateCode": "FL",
    "rating": 4.7,
    "reviewCount": 32,
    "phoneNumber": "(850) 293-6043",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Assured Coverage Assistance",
    "cityName": "Pensacola",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 525-8366",
    "websiteUrl": "http://www.assured-llc.com",
    "logoUrl": ""
  },
  {
    "name": "Busy Bee Moving Sales",
    "cityName": "Pensacola",
    "stateCode": "FL",
    "rating": 4.4,
    "reviewCount": 17,
    "phoneNumber": "(615) 864-8991",
    "websiteUrl": "http://www.busybeemovingsales.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/133895/636485150968133045.jpg"
  },
  {
    "name": "Estate Sales By Williams",
    "cityName": "Pensacola",
    "stateCode": "FL",
    "rating": 4.7,
    "reviewCount": 32,
    "phoneNumber": "(850) 206-3788",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Florida-Alabama Estate Sales",
    "cityName": "Pensacola",
    "stateCode": "FL",
    "rating": 4.7,
    "reviewCount": 32,
    "phoneNumber": "(850) 426-7479",
    "websiteUrl": "http://www.fbestatesales.com",
    "logoUrl": ""
  },
  {
    "name": "Two Sisters Secret Treasures LLC",
    "cityName": "Pensacola",
    "stateCode": "FL",
    "rating": 4.7,
    "reviewCount": 6,
    "phoneNumber": "(850) 380-9169",
    "websiteUrl": "http://www.twosisterssecrettreaures.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/141485/637170647431103040.jpg"
  },
  {
    "name": "Cn Estate Liqudations",
    "cityName": "Pensacola",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 696-9968",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Boyleston Auctions",
    "cityName": "Pensacola",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 393-1154",
    "websiteUrl": "http://www.BoylestonAuctions.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/37349/636146105713559647.jpg"
  },
  {
    "name": "Southern Delight Estate Sales & Specialties",
    "cityName": "Milton",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 533-5667",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Florida Antique & Fine Arts, Inc.",
    "cityName": "Pensacola",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 346-2135",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Gioia Auctions",
    "cityName": "Pensacola",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 418-8242",
    "websiteUrl": "http://www.gioiaauctions.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/140774/637489140750856815.jpg"
  },
  {
    "name": "Oooodles Antiques",
    "cityName": "Pensacola",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 287,
    "phoneNumber": "(850) 266-4610",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "G&s Estate Sales",
    "cityName": "Orange Beach",
    "stateCode": "AL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(251) 223-6523",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "C & W Estate Sales and Services LLC",
    "cityName": "Pensacola",
    "stateCode": "FL",
    "rating": 3.9,
    "reviewCount": 13,
    "phoneNumber": "(850) 777-1680",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Past Time Treasures, LLC",
    "cityName": "Milton",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 232-1201",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/20396/636554640199830247.jpg"
  },
  {
    "name": "On The Coast Estate Sales And Home Transformations, LLC",
    "cityName": "Pensacola",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 10,
    "phoneNumber": "(850) 501-3555",
    "websiteUrl": "https://onthecoastestatesale.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/163445/638591576795366022.jpg"
  },
  {
    "name": "McMillan Estate Sales",
    "cityName": "Pensacola",
    "stateCode": "FL",
    "rating": 4.7,
    "reviewCount": 32,
    "phoneNumber": "",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/140462/637816183762759541.jpg"
  },
  {
    "name": "Estate Liquidations By Leigh Shell",
    "cityName": "Gulf Breeze",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 516-6090",
    "websiteUrl": "http://www.leighshell.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/17096/636920801713997984.jpg"
  },
  {
    "name": "Blue Sky Trading Company",
    "cityName": "Lillian",
    "stateCode": "AL",
    "rating": 4.9,
    "reviewCount": 88,
    "phoneNumber": "(251) 961-1150",
    "websiteUrl": "http://www.blueskytradingcoal.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/159266/638550932993711519.jpg"
  },
  {
    "name": "Island Estate Sales",
    "cityName": "Foley",
    "stateCode": "AL",
    "rating": 4.5,
    "reviewCount": 89,
    "phoneNumber": "(205) 514-4071",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "The Brothers Gallery",
    "cityName": "Mobile",
    "stateCode": "AL",
    "rating": 5.0,
    "reviewCount": 9,
    "phoneNumber": "(251) 660-0020",
    "websiteUrl": "http://www.thebrothersgallery.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/23384/636801687874889811.jpg"
  },
  {
    "name": "Garth's Auction",
    "cityName": "Pensacola",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 221-7192",
    "websiteUrl": "https://garthsonlineauction.com/Public",
    "logoUrl": ""
  },
  {
    "name": "A Vieux Marché Estate Liquidations",
    "cityName": "Diberville",
    "stateCode": "MS",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(228) 872-4441",
    "websiteUrl": "http://www.vieuxmarche.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/21863/636294428964273802.jpg"
  },
  {
    "name": "Oooodles Estate Services",
    "cityName": "Pensacola",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 266-4610",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/23309/636400482146930553.jpg"
  },
  {
    "name": "Pink Flamingo Estate Sales",
    "cityName": "Lillian",
    "stateCode": "AL",
    "rating": 4.7,
    "reviewCount": 3,
    "phoneNumber": "(251) 284-4333",
    "websiteUrl": "http://thepinkflamingoantiques.com/aap_pink_flamingo_antiques_estate_sale_1.php",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/16403/636118321896998252.jpg"
  },
  {
    "name": "Brewton Auction and Estate Sales",
    "cityName": "Brewton",
    "stateCode": "AL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(251) 286-8085",
    "websiteUrl": "http://www.brewtonauction.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/92426/638562419132965558.jpg"
  },
  {
    "name": "The Price Is Right Estate Sales Inc",
    "cityName": "Pensacola",
    "stateCode": "FL",
    "rating": 4.0,
    "reviewCount": 3,
    "phoneNumber": "(850) 748-4357",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/167579/638853322972825740.jpg"
  },
  {
    "name": "Objects of Interest",
    "cityName": "Tallahassee",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 321-4919",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Attic Heirlooms, LLC",
    "cityName": "Tallahassee",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 5,
    "phoneNumber": "(850) 661-6811",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Red Team",
    "cityName": "Chattahoochee",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(324) 324-3242",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Big Bend Estate Services",
    "cityName": "Tallahassee",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 1,
    "phoneNumber": "(850) 971-5228",
    "websiteUrl": "http://www.bigbendestateservices.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/119603/636231062672529195.jpg"
  },
  {
    "name": "Firefly Home Services, LLC",
    "cityName": "Tallahassee",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 322-3004",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Seven Hills Estate Sales, LLC",
    "cityName": "Panacea",
    "stateCode": "FL",
    "rating": 4.3,
    "reviewCount": 12,
    "phoneNumber": "(850) 567-9335",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Triple A Vintage LLC",
    "cityName": "Tallahassee",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 210-3737",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/160274/638478896790642063.jpg"
  },
  {
    "name": "Sweet South Estate Sales",
    "cityName": "Tallahassee",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 259,
    "phoneNumber": "(850) 878-0165",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Kelley's Estate Liquidators, LLC",
    "cityName": "Crawfordville",
    "stateCode": "FL",
    "rating": 5.0,
    "reviewCount": 1,
    "phoneNumber": "(850) 508-7352",
    "websiteUrl": "http://kelleysestateliquidators.com",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/21344/636396574328911206.jpg"
  },
  {
    "name": "Sam Aren Interiors",
    "cityName": "Tallahassee",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(229) 881-4546",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Aaron Joseph - Real Estate & Personal Property Services",
    "cityName": "Tallahassee",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 778-3003",
    "websiteUrl": "http://aaronjosephllc.com/estate-sales-services/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/142061/637170308289863964.jpg"
  },
  {
    "name": "Community Thrift Market",
    "cityName": "Tallahassee",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 92,
    "phoneNumber": "(850) 273-0279",
    "websiteUrl": "http://www.communitythriftmarket.com",
    "logoUrl": ""
  },
  {
    "name": "Bloomingdeals, LLC",
    "cityName": "Havana",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 545-7722",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Omnia Auction",
    "cityName": "Tallahassee",
    "stateCode": "FL",
    "rating": 4.4,
    "reviewCount": 21,
    "phoneNumber": "(850) 294-7121",
    "websiteUrl": "https://www.omniaauctions.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/141653/637117671056965611.jpg"
  },
  {
    "name": "Skelding & Co",
    "cityName": "Tallahassee",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 591-7736",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/163814/638582856216484707.jpg"
  },
  {
    "name": "Uniquefinds At The Berry Patch",
    "cityName": "Tallahassee",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 321-7387",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Cornerstone Warehouse & Sales",
    "cityName": "Monticello",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 228-2542",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/130970/636388607771309168.jpg"
  },
  {
    "name": "Tally Estate Sales",
    "cityName": "Tallahassee",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 259,
    "phoneNumber": "(850) 544-5477",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Paragon Auctions LLC",
    "cityName": "Tallahassee",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(863) 899-9356",
    "websiteUrl": "https://paragonauctions.hibid.com/",
    "logoUrl": ""
  },
  {
    "name": "United Country Inational, Inc.",
    "cityName": "Tallahassee",
    "stateCode": "FL",
    "rating": 4.6,
    "reviewCount": 91,
    "phoneNumber": "(800) 711-9175",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Antique And Estate Sales",
    "cityName": "Tallahassee",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 259,
    "phoneNumber": "(850) 509-8633",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Rm Sales  Estate Buyer",
    "cityName": "Tallahassee",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 321-1618",
    "websiteUrl": "http://RAYAUCTION.COM",
    "logoUrl": ""
  },
  {
    "name": "Aaron Joseph & Company, LLC",
    "cityName": "Tallahassee",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 878-3030",
    "websiteUrl": "http://www.globalauctionservices.com",
    "logoUrl": ""
  },
  {
    "name": "Everyday Estate Sales, LLC",
    "cityName": "Tallahassee",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 259,
    "phoneNumber": "(850) 544-6985",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/139895/636977177485215621.jpg"
  },
  {
    "name": "The Junque Masters",
    "cityName": "Tallahassee",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(904) 472-3283",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/146912/637623757470477933.jpg"
  },
  {
    "name": "M & L Estate Sales",
    "cityName": "Havana",
    "stateCode": "FL",
    "rating": 4.7,
    "reviewCount": 26,
    "phoneNumber": "(850) 539-7745",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Gregg@talquintradingco.com",
    "cityName": "Tallahassee",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(185) 059-1773",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Gibson Estate Sales",
    "cityName": "Tallahassee",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 259,
    "phoneNumber": "(850) 566-5305",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/158297/638621977957222463.jpg"
  },
  {
    "name": "Kim’s Home Decor Sales",
    "cityName": "Tallahassee",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 228-2600",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/155516/638217462461022597.jpg"
  },
  {
    "name": "Vintage Treasures",
    "cityName": "Monticello",
    "stateCode": "FL",
    "rating": 4.7,
    "reviewCount": 53,
    "phoneNumber": "(850) 228-2542",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/133367/636430221846120657.jpg"
  },
  {
    "name": "Centurion Auctions",
    "cityName": "Tallahassee",
    "stateCode": "FL",
    "rating": 4.7,
    "reviewCount": 83,
    "phoneNumber": "(386) 868-2889",
    "websiteUrl": "https://www.centurionauctions.com/",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/37091/637925281019221700.jpg"
  },
  {
    "name": "Integrity Estate Sales",
    "cityName": "Tallahassee",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 259,
    "phoneNumber": "(850) 566-0094",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Transitions Estate Sales & Services",
    "cityName": "Tallahassee",
    "stateCode": "FL",
    "rating": 4.5,
    "reviewCount": 57,
    "phoneNumber": "(850) 688-2742",
    "websiteUrl": "",
    "logoUrl": ""
  },
  {
    "name": "Florida Estate Sales Inc.",
    "cityName": "Tallahassee",
    "stateCode": "FL",
    "rating": 4.8,
    "reviewCount": 259,
    "phoneNumber": "(850) 303-2727",
    "websiteUrl": "http://www.floridaestatesales.org",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/147320/637656728376197920.jpg"
  },
  {
    "name": "Premier Sales",
    "cityName": "Tallahassee",
    "stateCode": "FL",
    "rating": 0.0,
    "reviewCount": 0,
    "phoneNumber": "(850) 739-0399",
    "websiteUrl": "",
    "logoUrl": "https://picturescdn.estatesales.net/orglogos/140339/637207600505236879.jpg"
  }
];