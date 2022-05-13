\c crypto_users;

INSERT INTO users(username, password, contact_email, active) VALUES
('Christina_234','12345','123@gmail', true),
('Oliver_123','mypassword123','HTMLStudy@meetup.com', true),
('Milton456','mPassword345','Flexbox@studygroup.com', true);

INSERT INTO resources(subject, description, type, url, articles_id, is_favorite) VALUES
('Bitcoin','Bitcoin 101','article','www.Bitcoin101.com','1223',true),
('Ethereum','ETH for Beginners','article','www.ETH-for-Beginners.com','54321',true),
('Blockchain','Blockchain Fundamentals','article','www.Blockchain101.com','22454',true);
