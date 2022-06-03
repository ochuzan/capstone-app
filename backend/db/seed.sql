\c crypto_users;

INSERT INTO users(firstname, lastname, username, password, contact_email, active) VALUES
('Christina', 'Loiacono', 'Christina_234','12345','123@gmail.org', true),
('Oliver', 'Chuzan', 'Oliver_123','mypassword123','HTMLStudy@meetup.com', true),
('Deborah', 'Campos', 'Deb2468','54321','1abc@gmail', true),
('Milton', 'Clark', 'Milton456','mPassword345','Flexbox@studygroup.com', true),
('Ruben', 'Profit', 'Ruben4321','yupYup2022','codepro@mentor.com', true),
('Olaver', 'Cheezin', 'Olaver_123','mepass100','HTMLman@meetup.com', false),
('Dab', 'Camper', 'Dab2468','543a210','ethereum@gmail.edu', false),
('Malton', 'Clerk', 'Malton456','drowssaP','CSSlearner@study.com', false),
('Greg', 'Coffeeman', 'coffee7Shop','cupOcoffee1','beans@coffee.com', true),
('Sam', 'Caffeinated', 'g00dCoffee','goodCoffe3','garbagecoffee@coffee.com', true),
('Cody', 'Coder', 'coderHero','codecode4','cody@coding.com', true);

INSERT INTO resources(name, type, category, url, is_favorite) VALUES
(
    'Dodgecoin Jumps On Elon Musk Space X Tweet', 'article', 'news', 
    'https://www.coindesk.com/business/2022/05/27/dogecoin-jumps-on-elon-musk-space-x-tweet/', 
    true
),
(
    'Crypto City Guide To New York', 'article', 'news', 
    'https://cointelegraph.com/magazine/2021/10/28/crypto-city-guide-to-new-york', 
    true
),
(
    'Crypto Is Changing How Humanitarian Agencies Deliver Aid', 'article', 'news', 
    'https://cointelegraph.com/magazine/2022/05/25/crypto-blockchain-changing-humanitarian-agencies-deliver-aid', 
    true
),
(
    'How Can The U.S. Establish Itself As a Crypto Leader?', 'article', 'news', 
    'https://www.coindesk.com/layer2/2022/05/27/how-the-us-can-establish-itself-as-a-crypto-leader/', 
    true
),
(
    'How To Keep Your Crypto Safe', 'article', 'news', 
    'https://cointelegraph.com/magazine/2022/01/25/security-experts-reveal-how-keep-crypto-safe', 
    true
),
(   
    'Inflationary & Deflationary Cryptocurrencies', 'article', 'news', 
    'https://www.coindesk.com/learn/inflationary-and-deflationary-cryptocurrencies-whats-the-difference/', 
    true
),
(   
    'Stripe Partners With Opennnode To Allow Instant Bitcoin Conversions for Businesses', 'article', 'news', 
    'https://www.coindesk.com/business/2022/05/24/stripe-partners-with-opennode-to-allow-instant-fiat-to-bitcoin-conversions-for-businesses/', 
    true
),
(   
    '6 Crypto Myths Debunked', 'article', 'news',
    'https://www.gobankingrates.com/investing/crypto/crypto-myths-debunked/', 
    true
),
(   
    'How To Use Crypto For Buy Now Pay Later Transactions', 'article', 'news', 
    'https://www.gobankingrates.com/investing/crypto/how-use-crypto-buy-now-pay-later-transactions/', 
    true
),
(   
    'What is Bitcoin?', 'article', 'education-article', 
    'https://www.bitcoin.com/get-started/what-is-bitcoin/', 
    true
),
(   
    'How to Buy Bitcoin', 'article', 'education-article', 
    'https://www.bitcoin.com/get-started/how-to-buy-bitcoin/', 
    true
),
(   
    'How to Sell Bitcoin', 'article', 'education-article', 
    'https://www.bitcoin.com/get-started/how-to-sell-bitcoin/', 
    true
),
(   
    'What is a Bitcoin Wallet?', 'article', 'education-article', 
    'https://www.bitcoin.com/get-started/what-is-a-bitcoin-wallet/', 
    true
),
(   
    'What is Ethereum?', 'article', 'education-article', 
    'https://www.bitcoin.com/get-started/what-is-ethereum/', 
    true
),
(   
    'What is Ethereum Used For?', 'article', 'education-article', 
    'https://www.bitcoin.com/get-started/what-is-eth-used-for/', 
    true
),
(   
    'What is Bitcoin? Bitcoin Explained Simply', 'video', 'education', 
    'https://www.youtube.com/embed/41JCpzvnn_0', 
    true
),
(   
    'Bitcoin Cryptocurrency For Beginners 2022', 'video', 'education', 
    'https://www.youtube.com/embed/WO-O2K_Fqw0', 
    true
),
(   
    'How does a blockchain work - Simply Explained', 'video', 'education', 
    'https://www.youtube.com/embed/SSo_EIwHSd4', 
    true
),
(   
    'Cryptocurrency In 5 Minutes | Cryptocurrency Explained', 'video', 'education', 
    'https://www.youtube.com/embed/1YyAzVmP9xQ', 
    true
),
(   
    'How Cryptocurrency ACTUALLY works', 'video', 'education', 
    'https://www.youtube.com/embed/rYQgy8QDEBI', 
    true
),
(   
    'Cryptocurrency For Beginners Full Course', 'video', 'education', 
    'https://www.youtube.com/embed/dgjZ2fHg4y4', 
    true
);

INSERT INTO favorites(favorited_date, resources_id, users_id, resources_name, resources_url) VALUES
('10/22/2017 10:00', 1, 2, 'Dodgecoin Jumps On Elon Musk Space X Tweet','https://www.coindesk.com/business/2022/05/27/dogecoin-jumps-on-elon-musk-space-x-tweet/'),
('09/24/2019 10:15', 2, 1, 'Crypto City Guide To New York', 'https://cointelegraph.com/magazine/2021/10/28/crypto-city-guide-to-new-york'),
('07/18/2018 12:00', 3, 4, 'Crypto Is Changing How Humanitarian Agencies Deliver Aid', 'https://cointelegraph.com/magazine/2022/05/25/crypto-blockchain-changing-humanitarian-agencies-deliver-aid'),
('11/21/2021 09:45', 4, 3, 'How Can The U.S. Establish Itself As a Crypto Leader?','https://www.coindesk.com/layer2/2022/05/27/how-the-us-can-establish-itself-as-a-crypto-leader/'),
('02/13/2021 14:00', 5, 6, 'How To Keep Your Crypto Safe','https://cointelegraph.com/magazine/2022/01/25/security-experts-reveal-how-keep-crypto-safe'),
('03/02/2017 09:30', 13, 1, 'What is a Bitcoin Wallet?','https://www.bitcoin.com/get-started/what-is-a-bitcoin-wallet/' ),
('04/22/2016 14:00', 17, 4, 'Bitcoin Cryptocurrency For Beginners 2022', 'https://www.youtube.com/embed/WO-O2K_Fqw0'),
('05/19/2016 18:00', 16, 1, 'What is Bitcoin? Bitcoin Explained Simply', 'https://www.youtube.com/embed/41JCpzvnn_0'),
('06/25/2014 20:15', 21, 2, 'Cryptocurrency For Beginners Full Course','https://www.youtube.com/embed/dgjZ2fHg4y4'),
('01/11/2022 09:00', 10, 5, 'What is Bitcoin?','https://www.bitcoin.com/get-started/what-is-bitcoin/' );