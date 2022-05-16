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

INSERT INTO resources(subject, description, type, url, articles_id, is_favorite, users_id) VALUES
('Bitcoin','Bitcoin 101','article','www.Bitcoin101.com','1223',true, 1),
('Ethereum','ETH for Beginners','article','www.ETH-for-Beginners.com','54321',true, 2),
('Blockchain','Blockchain Fundamentals','article','www.Blockchain101.com','22454',true, 1),
('Solana','Solana 101','article','www.Solana101.com','1223',false, 2),
('Litecoin','LTE for Intermediate','article','www.LTE-for-Beginners.com','54321',true, 3),
('Ethereum','ETH for Beginners','article','www.ETH-for-Beginners.com','54321',true, 2),
('Cardano','Cardano Fundamentals','video','www.Blockchain101.com','22454',false, 3),
('Bitcoin2','Bitcoin 101','article','www.Bitcoin101.com','1223',true, 2),
('Dogecoin','Dogecoin for Beginners','video','www.Dogecoin-for-Beginners.com','54321',true, 3),
('Uniswap','Uniswap Fundamentals','article','www.Blockchain101.com','22454',false, 1);

