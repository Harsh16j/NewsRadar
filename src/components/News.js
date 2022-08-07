import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export class News extends Component {
  articles = [
    {
      source: { id: "the-washington-post", name: "The Washington Post" },
      author: "Evan Halper, Tony Romm",
      title:
        "Republicans block cap on insulin costs for millions of patients - The Washington Post",
      description:
        "GOP lawmakers stripped efforts by Democrats to impose a $35 price cap on the cost of insulin for many patients from the legislativle package moving through Congress.",
      url: "https://www.washingtonpost.com/nation/2022/08/07/insulin-cap-budget-congress/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/IW7F5QQVYII63BECA3A4QTHI6I.jpg&w=1440",
      publishedAt: "2022-08-07T16:21:23Z",
      content:
        "Comment on this story\r\nRepublican lawmakers on Sunday successfully stripped a $35 price cap on the cost of insulin for many patients from the ambitious legislative package Democrats are moving throug… [+2618 chars]",
    },
    {
      source: { id: null, name: "New York Times" },
      author: "Jonathan Martin",
      title:
        "Liz Cheney Risks Primary Over Jan. 6 and Trump Investigation - The New York Times",
      description:
        "The Republican says her crusade to stop Donald J. Trump will continue — even if she loses her primary next week. Restoring a “very sick” G.O.P. will take years, she says, “if it can be healed.”",
      url: "https://www.nytimes.com/2022/08/07/us/politics/liz-cheney-trump-republicans.html",
      urlToImage:
        "https://static01.nyt.com/images/2022/08/05/multimedia/00pol-cheney-mingle/00pol-cheney-mingle-facebookJumbo.jpg",
      publishedAt: "2022-08-07T16:15:56Z",
      content:
        "Whats more puzzling than her schedule is why Ms. Cheney, who has raised over $13 million, has not poured more money into the race, especially early on when she had an opportunity to define Ms. Hagema… [+1540 chars]",
    },
    {
      source: { id: null, name: "ESPN" },
      author: null,
      title:
        "Source - RB Kareem Hunt requests trade but Cleveland Browns decline - ESPN",
      description:
        "Running back Kareem Hunt, who is seeking a contract extension, has requested a trade from the Browns, but the team has declined that request, sources confirmed to ESPN.",
      url: "https://www.espn.com/nfl/story/_/id/34363739/source-rb-kareem-hunt-requests-trade-cleveland-browns-decline",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0807%2Fr1045512_1296x729_16%2D9.jpg",
      publishedAt: "2022-08-07T15:30:27Z",
      content:
        "Running back Kareem Hunt, who is seeking a contract extension, has requested a trade from the Cleveland Browns, but the team has privately declined that request, sources confirmed to ESPN.\r\nHunt, who… [+1349 chars]",
    },
    {
      source: { id: "politico", name: "Politico" },
      author: null,
      title:
        "Republican lawmaker warns if party goes too far, abortion could hurt GOP in November - POLITICO",
      description:
        "“Somewhere in the middle is where we’ve got to meet,” Rep. Nancy Mace said.",
      url: "https://www.politico.com/news/2022/08/07/republicans-abortion-nancy-mace-midterms-00050229",
      urlToImage:
        "https://static.politico.com/1d/8e/4cfad7914af28c2017f168d63844/https-delivery.gettyimages.com/downloads/1241318281",
      publishedAt: "2022-08-07T15:26:19Z",
      content:
        "I am staunchly pro-life. I have a 100 percent pro-life voting record. I do think that it will be an issue in November if were not moderating ourselves, that we are including exceptions for women whov… [+979 chars]",
    },
    {
      source: { id: null, name: "New York Times" },
      author: "Patrick Kingsley, Isabel Kershner, Raja Abdulrahim",
      title:
        "Israeli Airstrikes Hit Gaza for 2nd Day; Militants Respond With Rockets - The New York Times",
      description:
        "No cease-fire appeared imminent, despite early mediation efforts by international actors, including the United Nations. The death toll from the fighting grew to at least 24, Palestinian health authorities said.",
      url: "https://www.nytimes.com/live/2022/08/06/world/israel-gaza-fighting-airstrikes",
      urlToImage:
        "https://static01.nyt.com/images/2022/08/06/multimedia/06israel-gaza-briefing-promo-545pm/merlin_211116924_bedcaff4-6e4a-4436-8487-ae430bbf6e5b-facebookJumbo.jpg",
      publishedAt: "2022-08-07T15:11:00Z",
      content:
        "About 14,000 Palestinian laborers from Gaza have received permits to enter Israel every day for work this year, a shift in Israeli policy toward Gaza.Credit...Oded Balilty/Associated Press\r\nHamas has… [+3639 chars]",
    },
    {
      source: { id: "the-verge", name: "The Verge" },
      author: "Sean Hollister",
      title:
        "DeWalt USB-C Charging Kit review: your power tool battery can charge gadgets now - The Verge",
      description: "A portable way to charge your drill, driver — or laptop",
      url: "https://www.theverge.com/23287770/dewalt-dcb094-usb-c-pd-charging-kit-review",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/d4gMNIgTsKZ7xLete3JY7Ud7yoc=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23925690/vpavic_220210_5030_0132.jpg",
      publishedAt: "2022-08-07T15:00:00Z",
      content:
        "If you buy something from a Verge link, Vox Media may earn a commission. See our ethics statement.Your leaf blower battery should be able to charge a laptop. Your drill battery should charge your pho… [+7575 chars]",
    },
    {
      source: { id: "the-verge", name: "The Verge" },
      author: "Emma Roth",
      title:
        "Samsung launches its Android 13-based One UI 5 beta on Galaxy S22 phones - The Verge",
      description:
        "Samsung’s rolling out its One UI 5 beta, which is powered by Android 13, to Galaxy S22 owners in the US, Germany, and South Korea.",
      url: "https://www.theverge.com/2022/8/7/23295610/samsung-launches-one-ui-5-beta-android-13-galaxy-s22-us-germany-south-korea",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/O6kndi0lGbvy8lPOg8W0f4AeaL4=/0x103:1440x857/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23928123/One_UI_5_Beta_dl1.jpg",
      publishedAt: "2022-08-07T14:59:30Z",
      content:
        "Its only rolling out to phones in the US, Germany, and South Korea for now\r\nNew customization options in the One UI 5 beta.\r\nImage: Samsung\r\nSamsung has officially started to roll out its One UI 5 op… [+2333 chars]",
    },
    {
      source: { id: null, name: "New York Post" },
      author: "Lee Brown",
      title:
        "Britney Spears rips Kevin Federline for revealing sons don't talk to her - New York Post ",
      description:
        "Britney Spears has ripped ex-husband Kevin Federline for revealing that she is estranged from their teenage sons — while admitting their troubled relationship started “LONG before&#8221…",
      url: "https://nypost.com/2022/08/07/britney-spears-rips-kevin-federline-for-revealing-sons-dont-talk-to-her/",
      urlToImage:
        "https://nypost.com/wp-content/uploads/sites/2/2022/08/spears-asghari-getty-comp2.jpg?quality=75&strip=all&w=1024",
      publishedAt: "2022-08-07T14:46:00Z",
      content:
        "Britney Spears has ripped ex-husband Kevin Federline for revealing that she is estranged from their teenage sons — while admitting their troubled relationship started “LONG before” he said.\r\n“It sadd… [+2814 chars]",
    },
    {
      source: { id: null, name: "Page Six" },
      author: "Caroline Blair",
      title:
        "Inside Teresa Giudice and Luis Ruelas' extravagant wedding - Page Six",
      description:
        "The “RHONJ” star’s daughters, Gia, Gabriella, Milania and Audriana, served as bridesmaids, as did her co-stars Dolores Catania and Jennifer Aydin.",
      url: "https://pagesix.com/2022/08/07/inside-teresa-giudice-and-luis-ruelas-wedding/",
      urlToImage:
        "https://pagesix.com/wp-content/uploads/sites/3/2022/08/teresa-giudice-extravagant-wedding.jpg?quality=75&strip=all&w=1200",
      publishedAt: "2022-08-07T14:32:00Z",
      content:
        "Teresa Giudice and Luis “Louie” Ruelas appeared to have the time of their lives at their wedding.\r\nThe “Real Housewives of New Jersey” star, 50, and the businessman, 48, tied the knot in an extravaga… [+5194 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "Samira Asma-Sadeque",
      title:
        "Anne Heche ‘stable’ after suffering severe burns in Los Angeles car accident - The Guardian US",
      description:
        "Fans and friends express support for Hollywood star who drove her car into house, which was left ‘uninhabitable’",
      url: "https://amp.theguardian.com/us-news/2022/aug/07/anne-heche-stable-condition-car-accident",
      urlToImage: null,
      publishedAt: "2022-08-07T13:59:00Z",
      content:
        "US newsFans and friends express support for Hollywood star who drove her car into house, which was left uninhabitable\r\nActor Anne Heche was stable in hospital amid a wave of support from fans and fel… [+3803 chars]",
    },
    {
      source: { id: null, name: "The Guardian" },
      author: "David Smith",
      title:
        "Pelosi’s ‘reckless’ Taiwan visit deepens US-China rupture – why did she go? - The Guardian US",
      description:
        "The speaker insisted she was promoting democracy but critics suggest a last hurrah before she loses the gavel in November",
      url: "https://amp.theguardian.com/us-news/2022/aug/07/nancy-pelosi-taiwan-china-visit-military",
      urlToImage:
        "https://i.guim.co.uk/img/media/94be63d6781b24f7ee68c82aabe4530aa7e8fdf9/0_215_4075_2446/master/4075.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=a976183bd3002d9c38982050a6e49672",
      publishedAt: "2022-08-07T13:41:00Z",
      content:
        "Roy Blunt lived up to his surname when he said this week: So Im about to use four words in a row that I havent used in this way before, and those four words are: Speaker Pelosi was right.\r\nThe Republ… [+6452 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Raja Razek and Christina Maxouris, CNN",
      title:
        "Albuquerque police are asking the public to share photos, videos that may help the investigation into the killings of 4 Muslim men - CNN",
      description:
        "Police in Albuquerque, New Mexico, have created an online portal where residents can upload videos and images that may help authorities investigating the recent killings of four Muslim men.",
      url: "https://www.cnn.com/2022/08/07/us/albuquerque-muslim-men-killings-sunday/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220806191112-albuquerque-muslim-men-four-killings-super-tease.jpg",
      publishedAt: "2022-08-07T13:22:00Z",
      content: null,
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title: "Ukraine accuses Russia of shelling nuclear plant again - Reuters",
      description:
        'Ukraine accused Russia on Sunday of again shelling Europe\'s largest nuclear power plant, the Zaporizhzhia, and called for new international sanctions on Moscow for "nuclear terror".',
      url: "https://www.reuters.com/world/europe/ukraine-says-worker-wounded-new-russian-strike-zaporizhzhia-nuclear-plant-2022-08-07/",
      urlToImage:
        "https://www.reuters.com/resizer/H-lFuxpICtAGjOATDxBAC5gSb60=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/BX3RLTXM6BMVLJPQQDX34VAXQM.jpg",
      publishedAt: "2022-08-07T13:15:00Z",
      content:
        "KYIV, Aug 7 (Reuters) - Ukraine accused Russia on Sunday of again shelling Europe's largest nuclear power plant, the Zaporizhzhia, and called for new international sanctions on Moscow for \"nuclear te… [+1941 chars]",
    },
    {
      source: { id: "the-washington-post", name: "The Washington Post" },
      author: "Christian Shepherd",
      title:
        "China expands military drills, escalates threats against Taiwan - The Washington Post",
      description:
        "China announced additional live-fire drills in the Bohai and Yellow Seas, as Beijing broadcasts its fury over a visit to Taiwan by House Speaker Nancy Pelosi.",
      url: "https://www.washingtonpost.com/world/2022/08/07/china-taiwan-military-drills/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/TRHUH4AWBUI63BECA3A4QTHI6I.jpg&w=1440",
      publishedAt: "2022-08-07T12:38:18Z",
      content:
        "Comment on this story\r\nChina has announced additional live-fire drills in the Bohai and Yellow Seas, as Beijing broadcasts its fury over a visit to Taiwan by House Speaker Nancy Pelosi (D-Calif.) wit… [+4853 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Nouran Salahieh and Elizabeth Wolfe, CNN",
      title:
        "More human remains discovered in Lake Mead's receding waters - CNN",
      description:
        "This is the fourth time human remains have been found at Lake Mead National Recreation Area since May.",
      url: "https://www.cnn.com/2022/08/07/us/more-skeletal-remains-at-lake-mead/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220807003711-lake-mead-national-recreation-area-file-super-tease.jpg",
      publishedAt: "2022-08-07T12:21:00Z",
      content: null,
    },
    {
      source: { id: null, name: "CNBC" },
      author: "Amelia Lucas",
      title:
        "Some consumers are cutting back on restaurant spending, but CEOs say not all chains are affected - CNBC",
      description:
        "Bloomin' Brands, Restaurant Brands International and Starbucks said they aren't seeing changes in consumer spending.",
      url: "https://www.cnbc.com/2022/08/07/consumers-are-cutting-back-on-restaurant-spending-but-ceos-say-not-all-chains-are-affected.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/104143095-RTR4TXOD.jpg?v=1529452188&w=1920&h=1080",
      publishedAt: "2022-08-07T12:00:01Z",
      content:
        "Some restaurants are reporting weaker sales or declining traffic in the second quarter, signaling that diners are cutting back on eating out to save money.\r\nBut CEOs are split on how consumer behavio… [+3941 chars]",
    },
    {
      source: { id: null, name: "Sports Illustrated" },
      author: "Albert Breer",
      title:
        "49ers Training Camp: Brandon Aiyuk Appears Poised for Breakout Season - Sports Illustrated",
      description:
        "Five observations from San Francisco’s training camp, including how wideout Brandon Aiyuk is the talk of the town entering his third season.",
      url: "https://www.si.com/nfl/2022/08/07/49ers-training-camp-brandon-aiyuk-poised-breakout-season",
      urlToImage:
        "https://www.si.com/.image/t_share/MTkxNDM3ODcxOTE0MTY1Nzkz/brandon-aiyuk.jpg",
      publishedAt: "2022-08-07T12:00:00Z",
      content:
        "SANTA CLARA, Calif. — The Niners’ practice on Saturday morning was fast and competitive. It was pretty clear, from start to finish, how talented this group is. Oh, and Trey Lance capped it with a pre… [+2455 chars]",
    },
    {
      source: { id: "newsweek", name: "Newsweek" },
      author: "Anders Anglesey",
      title:
        "Russian Commanders Dismissed Over 'Poor Performance' in Ukraine: U.K. MoD - Newsweek",
      description:
        "The U.K.'s defense ministry gave a scathing assessment of Russia's military performance during the war.",
      url: "https://www.newsweek.com/russian-commanders-dismissed-after-poor-performance-ukraine-uk-mod-1731578",
      urlToImage:
        "https://d.newsweek.com/en/full/2093113/vladimir-putin-russian-generals.jpg",
      publishedAt: "2022-08-07T10:50:29Z",
      content:
        "Russian officials have fired several commanders following the nation's \"poor performance\" in Ukraine, according to the U.K.'s Ministry of Defence (MoD).\r\nThe MoD said in a Sunday, August 7, tweet tha… [+4121 chars]",
    },
    {
      source: { id: null, name: "SciTechDaily" },
      author: null,
      title:
        "NASA's Curiosity Mars Rover Still Going 10 Years After Landing – What It's Learned - SciTechDaily",
      description:
        "Despite signs of wear, the intrepid spacecraft is about to start an exhilarating new chapter of its mission as it climbs a Martian mountain. Ten years ago, on August 5, 2012, a jetpack lowered NASA’s Curiosity rover onto the Red Planet. This was the beginning…",
      url: "https://scitechdaily.com/nasas-curiosity-mars-rover-still-going-10-years-after-landing-what-its-learned/",
      urlToImage:
        "https://scitechdaily.com/images/NASA-Curiosity-Mars-Rover-Header.jpg",
      publishedAt: "2022-08-07T10:28:49Z",
      content:
        "ByJet Propulsion LaboratoryAugust 7, 2022\r\nCuriosity set out to answer the question: Did Mars ever have the right environmental conditions to support small life forms called microbes? Early in its mi… [+8292 chars]",
    },
    {
      source: { id: null, name: "msnNOW" },
      author: null,
      title:
        "Earth to be hit by solar storm after hole opens in the Sun - msnNOW",
      description: null,
      url: "https://www.msn.com/en-us/weather/topstories/earth-to-be-hit-by-solar-storm-after-hole-opens-in-the-sun/ar-AA10oGcm?li=BBnbfcL",
      urlToImage: null,
      publishedAt: "2022-08-07T10:27:26Z",
      content: null,
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    let span = 4;
    let offset = 0; //offset not needed
    return (
      <div className="container">
        <h2 className="my-3">News Monkey - Top Headlines</h2>

        <Container>
          <Row className="my-3">
            {this.state.articles.map((element) => {
              return (
                <Col key={element.url} md={{ span: span, offset: offset }}>
                  {/* // url will be unique and can be used as a key */}
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageURL={element.urlToImage}
                    newsURL={element.url}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

export default News;
