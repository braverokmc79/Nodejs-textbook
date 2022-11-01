create user `nodejs_textbook`@`localhost` identified by '1111';
    
create database nodejs_textbook CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
  
grant all privileges on nodejs_textbook.* to `nodejs_textbook`@`localhost` ;