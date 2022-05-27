const newsData = [
  {
    name: "Ethereum News",
    description: `Bank accounts in the U.S. are protected by deposit insurance offered by the Federal Deposit Insurance Corporation. In the event a bank fails, the FDIC steps in to protect deposits up to $250,000, preventing depositors from going broke along with the bank. Crypto exchanges don't offer that same protection—which is the primary reason why crypto enthusiasts advise investors to hold their cryptocurrency in a personal wallet, rather than on an exchange.`,
    photo: "https://api.time.com/wp-content/uploads/2022/05/GettyImages-1326414122.jpg?quality=85&w=800",
    url: "https://news.bitcoin.com/bitcoin-ethereum-technical-analysis-eth-back-below-2000-as-btc-down-6-to-start-weekend/",
    date: "May 11, 2022 ",
    is_favorite: true,
    views: 130
  },
  {
    name: "Bitcoin News",
    description: `Coinbase does offer a self-custody wallet, titled “Coinbase Wallet,” in which users know their private key, and a Coinbase Wallet—or any crypto wallet—is not required to trade crypto on Coinbase. But by admitting that crypto assets aren't secure in the event of a bankruptcy, Coinbase is also highlighting a major difference between storing your funds with blockchain exchanges, versus keeping cash with traditional banks.`,
    photo: "https://d1-invdn-com.investing.com/content/pic1f20278e43ef9de68acecd489f4bd4db.jpg",
    url: "https://news.bitcoin.com/bitcoin-ethereum-technical-analysis-eth-btc-surge-over-10-as-big-2-lead-crypto-rebound/",
    date: "June 12, 2022",
    is_favorite: true,
    views: 160
  },
  {
    name: "Crypto Wallet",
    description: `Access to a crypto wallet is governed by a private key, which is a long string of characters that effectively acts as a password. Without the key, the cryptocurrency in the wallet can’t be accessed. On Coinbase, the exchange holds the private key and lets users access the funds within the wallet using a more conventional password. The setup makes it easier for users to enter their accounts, by remembering an easier password.`,
    photo: "https://ton.twitter.com/onboarding/privacy_policy_2022/privacy_cover.png",
    url: "https://news.bitcoin.com/rich-dad-poor-dads-robert-kiyosaki-plans-to-buy-bitcoin-when-the-bottom-is-in-17k/",
    date: "May 13, 2022",
    is_favorite: false,
    views: 185
  },
  // {
  //   name: "Bitcoin, Ethereum Technical Analysis",
  //   description: `The token of the Terra ecosystem, LUNA, took the brunt of the news, and has lost more than 30% of its value since Thursday, May 5th. The price of LUNA fell from $87, down to as low as $58.6, and is trading at $60.17 as of this writing.`,
  //   photo: "https://image.cnbcfm.com/api/v1/image/107005776-1643087617730-gettyimages-1237955656-20090101220124-99-833573.jpeg?v=1644414643",
  //   url: "https://bitcoinmagazine.com/culture/what-makes-bitcoin-different-from-crypto",
  //   date: "June 11, 2022",
  //   is_favorite: true,
  //   views: 230
  // },
  {
    name: "Pursuit Announces Crypto for Fellows",
    description: `The market crash, which saw Bitcoin hit a 10-month low, also caused an unexpected twist of fate for Terra’s algorithmic stablecoin, TerraUSD (UST). On Saturday, the UST lost its 1:1 dollar peg for a brief moment.`,
    photo: "https://time.com/nextadvisor/wp-content/uploads/2022/05/daily-crypto-update-4-9-884x584.jpg",
    url: "https://news.bitcoin.com/coinbase-now-allows-cardano-staking-services-firm-plans-to-continue-to-scale-staking-portfolio/",
    date: "August 14, 2022",
    is_favorite: false,
    views: 145
  },
  {
    name: "Crypto for Retirement",
    description: `Since Thursday, Bitcoin has lost more than 17% of its value. Bitcoin, which was priced at around $39,800 just after the announcement, hit an interday low of $32,813–its lowest value since June 2021.`,
    photo: "https://phantom-marca.unidadeditorial.es/4c8a5cd6093e1ca13b001e77b6433f61/resize/660/f/webp/assets/multimedia/imagenes/2022/03/19/16476999218789.jpg",
    url: "https://news.bitcoin.com/tesla-ceo-elon-musk-reaffirms-dogecoin-has-potential-as-a-currency-as-twitter-deal-is-put-on-hold/",
    date: "July 15, 2022",
    is_favorite: false,
    views: 15
  },
  {
    name: "Teachers Donating Crypto",
    description: `Access to a crypto wallet is governed by a private key, which is a long string of characters that effectively acts as a password. Without the key, the cryptocurrency in the wallet can’t be accessed. On Coinbase, the exchange holds the private key and lets users access the funds within the wallet using a more conventional password. The setup makes it easier for users to enter their accounts, by remembering an easier password.`,
    photo: "https://www.cnet.com/a/img/resize/941676ec40a5f484a5a3421c0fab4fc66d83adf2/2022/04/23/ddcb4d2b-32be-43f0-b48f-f6d31e44bec9/crypto-story-1.png?auto=webp&fit=crop&height=630&width=1200",
    url: "https://news.bitcoin.com/cardano-to-reach-58-by-2030-according-to-finders-poll/",
    date: "May 13, 2022",
    is_favorite: false,
    views: 185
  },
  {
    name: "Charity funds Crypto for Homeless",
    description: `The token of the Terra ecosystem, LUNA, took the brunt of the news, and has lost more than 30% of its value since Thursday, May 5th. The price of LUNA fell from $87, down to as low as $58.6, and is trading at $60.17 as of this writing.`,
    photo: "https://assets.theedgemarkets.com/Cryptocurrency_20210211161132_theedgemarkets_9.jpg?Azh.eJsWDGb9T6DsBNIq5X27Z6ywBG5q",
    url: "https://news.bitcoin.com/bitcoin-ethereum-technical-analysis-eth-bounces-back-up-2-while-btc-climbs-above-30000/",
    date: "June 11, 2022",
    is_favorite: true,
    views: 230
  },
  {
    name: "Crypto Machines Coming Soon to Walmart",
    description: `The market crash, which saw Bitcoin hit a 10-month low, also caused an unexpected twist of fate for Terra’s algorithmic stablecoin, TerraUSD (UST). On Saturday, the UST lost its 1:1 dollar peg for a brief moment.`,
    photo: "https://www2.deloitte.com/content/dam/Deloitte/us/Images/promo_images/abstract/green-circular-connecting-globe-promo.jpg",
    url: "https://news.bitcoin.com/top-diamond-producer-de-beers-deploys-blockchain-based-platform-at-scale/",
    date: "August 14, 2022",
    is_favorite: true,
    views: 145
  },
  {
    name: "Crypto Accelerator Program in Kenya",
    description: `The blockchain ecosystem is growing exponentially. It has brought prosperity to most African countries by creating wealth for individuals and fast economic growth for their people. However, many believe that the region is yet to tap into its full potential, that is, leveraging blockchain technology to build a solid ecosystem. As a result, there has been an increasing global interest in Africa recently, with many prominent investors and companies looking to invest in this promising continent.`,
    photo: "https://thedial.co/wp-content/uploads/2022/03/crypto.jpeg",
    url: "https://news.bitcoin.com/lbank-and-adanian-labs-kickstarts-a-crypto-accelerator-program-in-kenya/",
    date: "July 15, 2022",
    is_favorite: true,
    views: 45
  }
]

export default newsData;