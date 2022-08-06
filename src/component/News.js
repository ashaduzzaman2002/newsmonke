import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "Blogspot.com",
      },
      author: "noreply@blogger.com (Unknown)",
      title:
        "Urgent Apple warning issued to 1.65BILLION iPad and iPhone users as privacy concerns mount – see if you are at risk",
      description:
        "An urgent warning is  issued for iPad and iPhone users due to looming privacy and security concerns. Apple developer Kosta Eleftheriou announced that the App Store is home to a number of illegal movie streaming services. Movie trailers and photo filters to fo…",
      url: "https://techncruncher.blogspot.com/2022/01/urgent-apple-warning-issued-to.html",
      urlToImage:
        "https://blogger.googleusercontent.com/img/a/AVvXsEgmxOoLI51HCB42MF_okinAfFuI-F0-3GztmEeGbG7lVDH7EOm0qJQ48emwaUEi9DHZyYtixcj5qcnTs05HmUOh6m4oS6uGZo9m6e8tObx0VYDKYTctdCs-41rNv9pmKEOj-QXNBLO9JAoQ5GN8b9lqjstfs-5cMJtDxHVXcFN2e4iRvPP3FSrKY-i3pA=w1200-h630-p-k-no-nu",
      publishedAt: "2022-01-01T16:05:00Z",
      content:
        "An urgent warning is  issued for iPad and iPhone users due to looming privacy and security concerns. Apple developer Kosta Eleftheriou announced that the App Store is home to a number of illegal movi… [+1263 chars]",
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Tom Hunt",
      title: "How to turn leftover alcohol into vinegar – recipe | Waste not",
      description:
        "It’s surprisingly easy to turn leftover wine, cider or beer into homemade vinegar“Vinegar can be made from any fermented alcohol or solution of fermentable sugars,” says the fermentation expert and author Sandor Katz, whose recipe in his book The Art of Ferme…",
      url: "https://amp.theguardian.com/food/2022/jan/01/how-to-turn-leftover-alcohol-into-vinegar-recipe-zero-waste-cooking",
      urlToImage:
        "https://i.guim.co.uk/img/media/2b664b534d831499d7b64c8ecaa88a028c3232c9/0_97_2048_1229/master/2048.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=794642a920d08d9eb26c112fd4b63899",
      publishedAt: "2022-01-01T06:00:41Z",
      content:
        "Vinegar can be made from any fermented alcohol or solution of fermentable sugars, says the fermentation expert and author Sandor Katz, whose recipe in his book The Art of Fermentation I have adapted … [+3249 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka.com",
      },
      author: "Javier Pastor",
      title:
        "En el mundo hay dos tipos de personas: las que activan el scroll natural y las que no",
      description:
        "Octubre de 2010. Un ya algo demacrado Steve Jobs hacía una pequeña introducción a lo que sería Mac OS X 10.7 Lion. Su voz y su aura seguían intactas, y aunque no lo desveló entonces, aquel era el inicio de una nueva era para los trackpads de Apple.\n<!-- BREAK…",
      url: "https://www.xataka.com/aplicaciones/mundo-hay-dos-tipos-personas-que-activan-scroll-natural-que-no",
      urlToImage:
        "https://i.blogs.es/18be0c/captura-de-pantalla-2021-12-30-a-las-14.26.58/840_560.jpeg",
      publishedAt: "2022-01-01T16:01:05Z",
      content:
        "Octubre de 2010. Un ya algo demacrado Steve Jobs hacía una pequeña introducción a lo que sería Mac OS X 10.7 Lion. Su voz y su aura seguían intactas, y aunque no lo desveló entonces, aquel era el ini… [+4657 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka.com",
      },
      author: "Eva Rodríguez de Luis",
      title:
        "Especial cuidarse teletrabajo y actividad: 18 máquinas, dispositivos y gadgets que te ayudarán a estar en forma en 2022",
      description:
        "Uno de los inconvenientes de trabajar en casa es que corres el riesgo de pasarte todo el día sin pijama y moviéndote lo mínimo. Si te has propuesto ser consciente de lo que te mueves y tratar de estar activo o activa incluso sin salir de tu domicilio, en esta…",
      url: "https://www.xataka.com/seleccion/especial-cuidarse-teletrabajo-actividad-18-maquinas-dispositivos-gadgets-que-te-ayudaran-a-estar-forma-2022",
      urlToImage: "https://i.blogs.es/1b29c2/deporte/840_560.jpeg",
      publishedAt: "2022-01-01T14:01:03Z",
      content:
        "Uno de los inconvenientes de trabajar en casa es que corres el riesgo de pasarte todo el día sin pijama y moviéndote lo mínimo. Si te has propuesto ser consciente de lo que te mueves y tratar de esta… [+13937 chars]",
    },
    {
      source: {
        id: null,
        name: "Templetons.com",
      },
      author: null,
      title: "The Problem with Vanity TLDs",
      description: "Comments",
      url: "https://www.templetons.com/brad/dns/vanity-tld.html",
      urlToImage: null,
      publishedAt: "2022-01-01T17:33:04Z",
      content:
        "<tr><td>\r\nDNS articles\r\nBrad Templeton Home\r\nBrad Ideas(My Blog)\r\nClariNetInterviews\r\nEFF\r\nJokes / RHF\r\nPhoto Pages\r\nPanoramic Photos\r\nSF Publishing\r\nSoftware\r\nArticles\r\nSpam\r\nDNS\r\nDot!\r\nPackages\r\nIn… [+3615 chars]",
    },
    {
      source: {
        id: null,
        name: "Trevorspiniolas.com",
      },
      author: null,
      title: "A persistent denial of service vulnerability affecting iOS",
      description: "Comments",
      url: "https://trevorspiniolas.com/doorlock/doorlock.html",
      urlToImage: null,
      publishedAt: "2022-01-01T20:40:40Z",
      content:
        "A persistent denial of service vulnerability affecting iOS 15.2 - iOS 14.7 (and likely through 14.0), triggered via HomeKit\r\nView PDFView on GitHubReason for Public Disclosure\r\nThis bug was initially… [+7393 chars]",
    },
    {
      source: {
        id: null,
        name: "Blender.org",
      },
      author: "Blender Foundation",
      title: "Blender – Top Committers 2021",
      description:
        "Home of the Blender project - Free and Open 3D Creation Software",
      url: "https://www.blender.org/development/top-30-committers-2021/",
      urlToImage:
        "https://www.blender.org/wp-content/themes/bthree/assets_shared/images/blender_the_freedom_to_create_01.jpg",
      publishedAt: "2022-01-01T15:56:34Z",
      content:
        "Below is the list of top committers to the Blender project in 2021. The amount of commits obviously doesnt mean much, but its a neutral metric to put limelight on people who made Blender possible las… [+5878 chars]",
    },
    {
      source: {
        id: null,
        name: "Izzys.casa",
      },
      author: "Isabella Muerte",
      title: "Wrapping Up 2021. Leaving C++",
      description: "Comments",
      url: "https://izzys.casa/2021/12/wrapping-up-2021/",
      urlToImage: null,
      publishedAt: "2022-01-01T13:26:48Z",
      content:
        "December 31, 20217 minutes\r\n2021 was not too kind to me. I discovered that I not only have OCD but OCPD, a\r\npersonality disorder. If you’ve ever had a conversation with me where I just\r\ncouldn’t let … [+7498 chars]",
    },
    {
      source: {
        id: null,
        name: "Matt-rickard.com",
      },
      author: "Matt Rickard",
      title: "2022 Predictions",
      description:
        "How do I become a better decision maker? In a world of ever-increasing\ninformation, It's only becoming more difficult to filter through sources, check\ncognitive biases, and collect useful data from your hypothesis. Before I dive\ninto my 2022 predictions, a se…",
      url: "https://matt-rickard.com/2022-predictions/",
      urlToImage: null,
      publishedAt: "2022-01-01T16:39:16Z",
      content:
        "How do I become a better decision maker? In a world of ever-increasing information, It's only becoming more difficult to filter through sources, check cognitive biases, and collect useful data from y… [+9924 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Chance Miller",
      title:
        "Apple shares real stories from Apple Watch users in new ‘911’ video",
      description:
        "In a new video posted to YouTube today, Apple is continuing to emphasize the potentially life-saving features of the Apple Watch. The new video is titled ‘911’ and it it tells three stories of people who were able to get help from emergency services using the…",
      url: "https://9to5mac.com/2022/01/01/apple-watch-emergency-sos-911/",
      urlToImage:
        "https://i1.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/01/maxresdefault-3.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2022-01-01T22:58:00Z",
      content:
        "In a new video posted to YouTube today, Apple is continuing to emphasize the potentially life-saving features of the Apple Watch. The new video is titled ‘911’ and it it tells three stories of people… [+1739 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Bradley Chambers",
      title:
        "Apple @ Work: MacBook Air vs 14″ MacBook Pro – What’s best for business users?",
      description:
        "Apple @ Work is brought to you by Mosyle, the leader in modern mobile device management (MDM) and security for Apple enterprise and education customers. Over 22,000 organizations leverage Mosyle solutions to automate the management and security of millions of…",
      url: "https://9to5mac.com/2022/01/01/macbook-air-vs-14-macbook-pro-whats-best-for-business-uses/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2021/05/macbook-air-m1-.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2022-01-01T14:00:00Z",
      content:
        "Apple @ Work is brought to you by Mosyle, the leader in modern mobile device management (MDM) and security for Apple enterprise and education customers. Over 22,000 organizations leverage Mosyle solu… [+4725 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Parker Ortolani",
      title:
        "Apple launches special edition Tiger AirPods Pro for Chinese New Year",
      description:
        "Like they did to celebrate the Year of the Ox in 2021, Apple has released a new special edition pair of AirPods Pro exclusively available in select markets. 2022 is the Year of the Tiger and Apple has created an adorable tiger emoji that’s engraved on these A…",
      url: "https://9to5mac.com/2022/01/01/apple-launches-special-edition-tiger-airpods-pro-for-chinese-new-year/",
      urlToImage:
        "https://i1.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/01/airpods.png?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2022-01-01T22:25:56Z",
      content:
        "Like they did to celebrate the Year of the Ox in 2021, Apple has released a new special edition pair of AirPods Pro exclusively available in select markets. 2022 is the Year of the Tiger and Apple ha… [+1188 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Bradley Chambers",
      title:
        "The best apps and services to keep your New Year’s goals on track in 2022",
      description:
        "2022 is here, and I know I have some major goals for the coming year related to wellness, health, finances, and family. As you set out to make 2022 your best year yet, here are some useful apps and services to keep you on track all year long.\n more…\nThe post …",
      url: "https://9to5mac.com/2022/01/01/a-new-year-means-new-goals-here-are-the-best-apps-and-services-to-keep-you-on-track-in-2022/",
      urlToImage:
        "https://i2.wp.com/9to5mac.com/wp-content/uploads/sites/6/2021/12/new-years-apps.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2022-01-01T13:00:00Z",
      content:
        "2022 is here, and I know I have some major goals for the coming year related to wellness, health, finances, and family. As you set out to make 2022 your best year yet, here are some useful apps and s… [+3703 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (Malcolm Owen)",
      title:
        "Best Deals January 1: $50 off Apple Watch Series 7, $73 Logitech MX Master 3, more!",
      description:
        "Appearing alongside Apple Watch discounts, the best deals for New Years Day include $50 off Amazon Echo Buds and a soldering station for $25.Best Deals for January 1To help you search through the continuing holiday deal and January sale chaos, we've curated s…",
      url: "https://appleinsider.com/articles/22/01/01/best-deals-january-1-50-off-apple-watch-series-7-73-logitech-mx-master-3-more",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/46299-90199-deals-jan-1-xl.jpg",
      publishedAt: "2022-01-01T15:19:06Z",
      content:
        "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+5577 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (William Gallagher)",
      title:
        "Apple's December 2021 in Review: Cartoon 'Ted Lasso,' and worms in Foxconn workers' meals",
      description:
        "You've been around Apple for a long time, so you know to expect bugs, but probably not worms. It's fair to say that Apple's December 2021 contained some ups and downs.Apple's December 2021 was certainly animatedAs November 2021 faded away, December brought Fo…",
      url: "https://appleinsider.com/articles/22/01/01/apples-december-2021-in-review-cartoon-ted-lasso-and-worms-in-foxconn-workers-meals",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/46197-90175-000-lead-D2-December-2021-xl.jpg",
      publishedAt: "2022-01-01T12:47:07Z",
      content:
        "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+8617 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (Christine McKee)",
      title:
        "Deal: Apple AirPods Pro with MagSafe dip to $179 (28% off) for the start of 2022",
      description:
        "A 28% price drop is in effect on AirPods Pro with MagSafe this January, marking the return of holiday pricing. Units are in stock and ready to ship.New Year, great AirPods deals\r\nAmazon's $179.99 promotion on AirPods Pro with MagSafe delivers the cheapest Air…",
      url: "https://appleinsider.com/articles/22/01/01/deal-apple-airpods-pro-with-magsafe-dip-to-179-28-off-for-the-start-of-2022",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/46301-90212-airpods-pro-gold-background-xl.jpg",
      publishedAt: "2022-01-01T20:50:14Z",
      content:
        "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+2760 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (Malcolm Owen)",
      title: "HomeKit bug affecting iOS disclosed by security researcher",
      description:
        "A vulnerability has been found in iOS that uses HomeKit as an attack vector involving very long device games, a vulnerability disclosed by a security researcher due to Apple allegedly being slow to fix it.As with its other products, Apple is keen on keeping H…",
      url: "https://appleinsider.com/articles/22/01/01/homekit-bug-affecting-ios-disclosed-by-security-researcher",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/46303-90221-45644-88846-36433-67876-iOS-14-HomeKit-Status-Bar-xl-xl-xl.jpg",
      publishedAt: "2022-01-01T23:22:03Z",
      content:
        "AppleInsider is supported by its audience and may earn commission as an Amazon Associate and affiliate partner on qualifying purchases. These affiliate partnerships do not influence our editorial con… [+3566 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.jp",
      },
      author: "小暮ひさのり",
      title:
        "Appleもお正月だよ！ アプリや音楽、映像、書籍など、特別価格や限定イベントが目白押し！",
      description:
        "Image:Apple新年あけまして、初Apple。おめでたい一年の始まりの日、みなさんどうお過ごしですか？えっ、ちょうどiPhone見てるって？なんと幸運！だって、僕らのだいっ好きなAppleが、新年の特別なセールやイベント、キャンペーン始めてるんですもん！AppStoreの初売り。ゲームやキャンペーンで正月を楽しもう！Image:AppleAppStoreでは「Today」タブ、「ゲーム」タブ",
      url: "https://www.gizmodo.jp/2022/01/2022-apple-new-year.html",
      urlToImage:
        "https://assets.media-platform.com/gizmodo/dist/images/2021/12/24/2021-12-24apk00-w960.jpg",
      publishedAt: "2022-01-01T00:00:00Z",
      content:
        "Apple\r\niPhone Apple\r\nAppStore\r\nImage: Apple\r\nApp StoreTodayAppApp\r\nApple Music \r\nImage: Apple\r\nApple MusicNew Year Starters 2022\r\nback number/ Apple MusicUp NextJapanOB\r\nApple MusicDJ2Apple Music\r\nAp… [+150 chars]",
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: "Jon Skillings",
      title:
        "9 great reads from CNET this week: Great resignation, music AI, gaming culture and more - CNET",
      description:
        "We offer some year-end thoughts on the state of work today, where artificial intelligence is taking pop music, how gaming is opening up to inclusivity and diversity, and a whole lot more.",
      url: "https://www.cnet.com/news/9-great-reads-from-cnet-this-week-010122-great-resignation-music-ai-gaming-culture-and-more/",
      urlToImage:
        "https://www.cnet.com/a/img/UeL85dEqKgvojml5eEo49jsNX2o=/1200x630/2021/12/24/e37047bc-6c3d-465f-9978-0e4a5091475f/00-main-story.png",
      publishedAt: "2022-01-01T13:00:09Z",
      content:
        'Workplace culture has changed immensely since the start of the pandemic, in large part because that "place" is no longer the office; it\'s our homes. Meetings are mostly virtual. Business travel dried… [+2059 chars]',
    },
    {
      source: {
        id: null,
        name: "Windows Central",
      },
      author: "Zac Bowden",
      title:
        "Surface Duo fails to receive Android 11 update before the end of 2021",
      description:
        "A whole year with zero major updates.\n\nBack in September, Microsoft confirmed to media that it was working on bringing Android 11 to Surface Duo V1 customers before the end of 2021. That news came after the company had already said it planned to ship Android …",
      url: "https://www.windowscentral.com/microsoft-fails-deliver-android-11-surface-duo-end-2021",
      urlToImage:
        "https://www.windowscentral.com/sites/wpcentral.com/files/styles/large/public/field/image/2020/09/surface-duo-hero-2020-1.jpg",
      publishedAt: "2022-01-01T17:14:21Z",
      content:
        "Back in September, Microsoft confirmed to media that it was working on bringing Android 11 to Surface Duo V1 customers before the end of 2021. That news came after the company had already said it pla… [+4011 chars]",
    },
  ];
  constructor() {
    super();
    console.log("Hello I am a constructor");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=e7d111c6aa5044adadd68f3d41512e50";
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ articles: parseData.articles });
  }
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center text-3xl font-bold">TOP HEADLINE</h1>
        <div className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap mx-auto grid lg:grid-cols-4 md:grid-cols-3 gap-1">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-3" key={element.url}>
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
