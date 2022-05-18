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

-- adding `favorited_date` so we can see the differences in our tables/data
INSERT INTO favorites(favorited_date, resources_id, users_id) VALUES
('10-22-2017', 1, 1),
('09-24-2019', 2, 2),
('07-18-2018', 3, 3),
('11-21-2021', 4, 4),
('02-13-2021', 5, 5),
('03-02-2017', 6, 6),
('04-22-2016', 7, 7),
('05-19-2016', 8, 8),
('06-25-2014', 9, 9),
('01-20-2022', 10, 10);