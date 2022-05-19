\c crypto_users;

INSERT INTO users(username, password, contact_email, active) VALUES
('Christina_234','12345','123@gmail.org', true),
('Oliver_123','mypassword123','HTMLStudy@meetup.com', true),
('Deb2468','54321','1abc@gmail', true),
('Milton456','mPassword345','Flexbox@studygroup.com', true),
('Ruben4321','yupYup2022','codepro@mentor.com', true),
('Olaver_123','mepass100','HTMLman@meetup.com', false),
('Dab2468','543a210','ethereum@gmail.edu', false),
('Malton456','drowssaP','CSSlearner@study.com', false),
('coffee7Shop','cupOcoffee1','beans@coffee.com', true),
('coderHero','codecode4','cody@coding.com', true);

INSERT INTO resources(name, type, category, url, is_favorite, users_id) VALUES
(
    'Ethereum News', 'article', 'education', 
    'https://news.bitcoin.com/bitcoin-ethereum-technical-analysis-eth-back-below-2000-as-btc-down-6-to-start-weekend/', 
    true, 1
),
(
    'Bitcoin News"', 'article', 'news', 
    'https://news.bitcoin.com/bitcoin-ethereum-technical-analysis-eth-btc-surge-over-10-as-big-2-lead-crypto-rebound/', 
    true, 1
),
(
    'Crypto Wallet', 'article', 'education', 
    'https://news.bitcoin.com/rich-dad-poor-dads-robert-kiyosaki-plans-to-buy-bitcoin-when-the-bottom-is-in-17k/', 
    false, 2
),
(
    'Bitcoin, Ethereum Technical Analysis', 'article', 'education', 
    'https://bitcoinmagazine.com/culture/what-makes-bitcoin-different-from-crypto', 
    true, 2
),
(
    'Pursuit Announces Crypto for Fellows', 'article', 'news', 
    'https://news.bitcoin.com/coinbase-now-allows-cardano-staking-services-firm-plans-to-continue-to-scale-staking-portfolio/', 
    false, 3
),
('Crypto for Retirement', 'article', 'education', 
    'https://news.bitcoin.com/tesla-ceo-elon-musk-reaffirms-dogecoin-has-potential-as-a-currency-as-twitter-deal-is-put-on-hold/', 
    false, 4),
('Teachers Donating Crypto', 'article', 'news', 
    'https://news.bitcoin.com/cardano-to-reach-58-by-2030-according-to-finders-poll/', 
    false, 5),
('Pursuit Now Accepting Crypto', 'article', 'education',
    'https://news.bitcoin.com/bitcoin-ethereum-technical-analysis-eth-bounces-back-up-2-while-btc-climbs-above-30000/', 
    true, 6),
('Bitcoin Market Crash', 'article', 'news', 
    'https://news.bitcoin.com/top-diamond-producer-de-beers-deploys-blockchain-based-platform-at-scale/', 
    true, 7),
('Crypto Platform Hack Rocks Blockchain Community', 'article', 'education', 
    'https://www.bloomberg.com/news/features/2022-05-19/crypto-platform-hack-rocks-blockchain-community', 
    true, 8),
('Crypto-loving S.Koreans bet on Luna rising from ashes, worrying regulator', 'article', 'news', 
    'https://www.reuters.com/markets/currencies/crypto-loving-skoreans-bet-luna-rising-ashes-worrying-regulator-2022-05-19/', 
    true, 9),
('Crypto Accelerator Program in Kenya', 'article', 'education', 
    'https://news.bitcoin.com/lbank-and-adanian-labs-kickstarts-a-crypto-accelerator-program-in-kenya/', 
    true, 10);

-- adding `favorited_date` so we can see the differences in our tables/data
INSERT INTO favorites(favorited_date, resources_id, users_id) VALUES
('10/22/2017 10:00', 1, 1),
('09/24/2019 10:15', 2, 1),
('07/18/2018 12:00', 3, 3),
('11/21/2021 09:45', 4, 3),
('02/13/2021 14:00', 5, 5),
('03/02/2017 09:30', 6, 6),
('04/22/2016 14:00', 7, 7),
('05/19/2016 18:00', 8, 1),
('06/25/2014 20:15', 9, 9),
('01/11/2022 09:00', 10, 10);