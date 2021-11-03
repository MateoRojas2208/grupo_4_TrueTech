CREATE DATABASE  IF NOT EXISTS `database_trueTech1`;
USE `database_trueTech1`;



CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `full_name` varchar(75) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `photo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `clearence` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT "user" NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `brands` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `brand_models` (
  `id` int(10) UNSIGNED NOT NULL,
  `brand_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,

  PRIMARY KEY (`id`),
  index (brand_id),
 	foreign key (brand_id )
 		references brands(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED  COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



CREATE TABLE `shop` (
  `id` int(10) UNSIGNED NOT NULL,
  `admin_id` int(10) UNSIGNED NOT NULL,
  `manager_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `products_count` int(11) NOT NULL,
  `photo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sold_items` int(11) NOT NULL,
  
  PRIMARY KEY (`id`),
  
  index (admin_id),
  index (manager_id),
  
 	foreign key (admin_id)
 		references users(id),
 		
 	foreign key (manager_id)
 		references users(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `categories_id` int(10) UNSIGNED NOT NULL,
  `model_id` int(10) UNSIGNED NOT NULL,
  `shop_id` int(10) UNSIGNED DEFAULT NULL,
  `seller_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(500) NOT null,
  `color` varchar(20)  DEFAULT NULL,
  `price` int(11) UNSIGNED NOT NULL,
  `discount_price` int(11) DEFAULT NULL,
  `discount` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT "1",
  `sold_items` int(11) DEFAULT "0",
  `likes` int(11) DEFAULT "0",
  `status` boolean DEFAULT NULL,
  `image` varchar(100) NOT NULL,
  `creation_date` datetime NOT NULL,
  `update_date` datetime NOT NULL,

  PRIMARY KEY (`id`),

  index (categories_id),
  index (model_id),
  index (shop_id),
  index (seller_id),

  foreign key (categories_id)
 		references categories(id),

  foreign key (model_id)
    references brand_models(id),
  foreign key (shop_id)
 		references shop(id),

  foreign key (seller_id)
 		references users(id)

) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- insert brands
LOCK TABLES `brands` WRITE;
insert into brands (id, name) values (1, 'Divanoodle');
insert into brands (id, name) values (2, 'Centimia');
insert into brands (id, name) values (3, 'Devpoint');
insert into brands (id, name) values (4, 'Fadeo');
insert into brands (id, name) values (5, 'Ntag');
insert into brands (id, name) values (6, 'Mynte');
insert into brands (id, name) values (7, 'Twinte');
insert into brands (id, name) values (8, 'Kwideo');
insert into brands (id, name) values (9, 'Mynte');
insert into brands (id, name) values (10, 'Edgeify');
insert into brands (id, name) values (11, 'Realmix');
insert into brands (id, name) values (12, 'Kwimbee');
insert into brands (id, name) values (13, 'Photospace');
insert into brands (id, name) values (14, 'Geba');
insert into brands (id, name) values (15, 'Brainsphere');
insert into brands (id, name) values (16, 'Bluezoom');
insert into brands (id, name) values (17, 'Oozz');
insert into brands (id, name) values (18, 'Skaboo');
insert into brands (id, name) values (19, 'Jabberstorm');
insert into brands (id, name) values (20, 'Wordify');
UNLOCK TABLES;

-- brands-models INSERTS
LOCK TABLES `brand_models` WRITE;
insert into brand_models (id, brand_id, name) values (1, 10, 'Murciélago');
insert into brand_models (id, brand_id, name) values (2, 2, 'Cutlass Supreme');
insert into brand_models (id, brand_id, name) values (3, 19, 'Cherokee');
insert into brand_models (id, brand_id, name) values (4, 20, 'Grand Caravan');
insert into brand_models (id, brand_id, name) values (5, 6, 'New Yorker');
insert into brand_models (id, brand_id, name) values (6, 13, 'Accord');
insert into brand_models (id, brand_id, name) values (7, 5, 'H1');
insert into brand_models (id, brand_id, name) values (8, 16, 'Sienna');
insert into brand_models (id, brand_id, name) values (9, 8, 'Grand Cherokee');
insert into brand_models (id, brand_id, name) values (10, 13, 'A3');
insert into brand_models (id, brand_id, name) values (11, 16, '3500');
insert into brand_models (id, brand_id, name) values (12, 3, 'Suburban 2500');
insert into brand_models (id, brand_id, name) values (13, 10, 'Suburban 1500');
insert into brand_models (id, brand_id, name) values (14, 2, 'Civic');
insert into brand_models (id, brand_id, name) values (15, 20, 'A4');
insert into brand_models (id, brand_id, name) values (16, 7, 'G37');
insert into brand_models (id, brand_id, name) values (17, 14, 'Sidekick');
insert into brand_models (id, brand_id, name) values (18, 3, 'RAV4');
insert into brand_models (id, brand_id, name) values (19, 11, 'Millenia');
insert into brand_models (id, brand_id, name) values (20, 6, 'Voyager');
UNLOCK TABLES;

-- product categories INSERTS
LOCK TABLES `categories` WRITE;
insert into categories (id, name) values (1, 'Kids');
insert into categories (id, name) values (2, 'Automotive');
insert into categories (id, name) values (3, 'Baby');
insert into categories (id, name) values (4, 'Shoes');
insert into categories (id, name) values (5, 'Beauty');
insert into categories (id, name) values (6, 'Movies');
insert into categories (id, name) values (7, 'Outdoors');
insert into categories (id, name) values (8, 'Jewelry');
insert into categories (id, name) values (9, 'Health');
insert into categories (id, name) values (10, 'Clothing');
insert into categories (id, name) values (11, 'Computers');
insert into categories (id, name) values (12, 'Kids');
insert into categories (id, name) values (13, 'Garden');
insert into categories (id, name) values (14, 'Clothing');
insert into categories (id, name) values (15, 'Games');
insert into categories (id, name) values (16, 'Automotive');
insert into categories (id, name) values (17, 'Industrial');
insert into categories (id, name) values (18, 'Grocery');
insert into categories (id, name) values (19, 'Industrial');
insert into categories (id, name) values (20, 'Sports');
UNLOCK TABLES;

-- insert users
LOCK TABLES `users` WRITE;
insert into users (id, full_name, username, email, password, photo, clearence) values (1, 'Aleda Collett', 'acollett0', 'acollett0@blinklist.com', '5094d42c0d2ebe17e40a832c59b2e9da7e2c1d7e', 'http://dummyimage.com/241x147.png/5fa2dd/ffffff', true);
insert into users (id, full_name, username, email, password, photo, clearence) values (2, 'Carlin Gyrgorwicx', 'cgyrgorwicx1', 'cgyrgorwicx1@freewebs.com', '5094d42c0d2ebe17e40a832c59b2e9da7e2c1d7e', 'http://dummyimage.com/241x147.png/5fa2dd/ffffff', false);
insert into users (id, full_name, username, email, password, photo, clearence) values (3, 'Jone Garry', 'jgarry2', 'jgarry2@smh.com.au', '5094d42c0d2ebe17e40a832c59b2e9da7e2c1d7e', 'http://dummyimage.com/241x147.png/5fa2dd/ffffff', false);
insert into users (id, full_name, username, email, password, photo, clearence) values (4, 'Broderick Lonergan', 'blonergan3', 'blonergan3@xrea.com', '5094d42c0d2ebe17e40a832c59b2e9da7e2c1d7e', 'http://dummyimage.com/241x147.png/5fa2dd/ffffff', true);
insert into users (id, full_name, username, email, password, photo, clearence) values (5, 'Lura Sandison', 'lsandison4', 'lsandison4@devhub.com', '5094d42c0d2ebe17e40a832c59b2e9da7e2c1d7e', 'http://dummyimage.com/241x147.png/5fa2dd/ffffff', false);
insert into users (id, full_name, username, email, password, photo, clearence) values (6, 'Haydon Penreth', 'hpenreth5', 'hpenreth5@discuz.net', '5094d42c0d2ebe17e40a832c59b2e9da7e2c1d7e', 'http://dummyimage.com/241x147.png/5fa2dd/ffffff', true);
insert into users (id, full_name, username, email, password, photo, clearence) values (7, 'Vaclav Rowthorne', 'vrowthorne6', 'vrowthorne6@hud.gov', '5094d42c0d2ebe17e40a832c59b2e9da7e2c1d7e', 'http://dummyimage.com/241x147.png/5fa2dd/ffffff', true);
insert into users (id, full_name, username, email, password, photo, clearence) values (8, 'Sharai Tanton', 'stanton7', 'stanton7@weibo.com', '5094d42c0d2ebe17e40a832c59b2e9da7e2c1d7e', 'http://dummyimage.com/241x147.png/5fa2dd/ffffff', true);
insert into users (id, full_name, username, email, password, photo, clearence) values (9, 'Devland Yewdale', 'dyewdale8', 'dyewdale8@youtube.com', '5094d42c0d2ebe17e40a832c59b2e9da7e2c1d7e', 'http://dummyimage.com/241x147.png/5fa2dd/ffffff', false);
insert into users (id, full_name, username, email, password, photo, clearence) values (10, 'Lucila Bilston', 'lbilston9', 'lbilston9@ibm.com', '5094d42c0d2ebe17e40a832c59b2e9da7e2c1d7e', 'http://dummyimage.com/241x147.png/5fa2dd/ffffff', false);
insert into users (id, full_name, username, email, password, photo, clearence) values (11, 'Carrissa Zima', 'czimaa', 'czimaa@bluehost.com', '5094d42c0d2ebe17e40a832c59b2e9da7e2c1d7e', 'http://dummyimage.com/241x147.png/5fa2dd/ffffff', true);
insert into users (id, full_name, username, email, password, photo, clearence) values (12, 'Georgetta Boyce', 'gboyceb', 'gboyceb@nba.com', '5094d42c0d2ebe17e40a832c59b2e9da7e2c1d7e', 'http://dummyimage.com/241x147.png/5fa2dd/ffffff', true);
insert into users (id, full_name, username, email, password, photo, clearence) values (13, 'Mitzi Feather', 'mfeatherc', 'mfeatherc@washington.edu', '5094d42c0d2ebe17e40a832c59b2e9da7e2c1d7e', 'http://dummyimage.com/241x147.png/5fa2dd/ffffff', true);
insert into users (id, full_name, username, email, password, photo, clearence) values (14, 'Wilbur Tuckerman', 'wtuckermand', 'wtuckermand@yellowpages.com', '5094d42c0d2ebe17e40a832c59b2e9da7e2c1d7e', 'http://dummyimage.com/241x147.png/5fa2dd/ffffff', true);
insert into users (id, full_name, username, email, password, photo, clearence) values (15, 'Florance Dennison', 'fdennisone', 'fdennisone@blogspot.com', '5094d42c0d2ebe17e40a832c59b2e9da7e2c1d7e', 'http://dummyimage.com/241x147.png/5fa2dd/ffffff', false);
insert into users (id, full_name, username, email, password, photo, clearence) values (16, 'Graeme Ballin', 'gballinf', 'gballinf@t-online.de', '5094d42c0d2ebe17e40a832c59b2e9da7e2c1d7e', 'http://dummyimage.com/241x147.png/5fa2dd/ffffff', false);
insert into users (id, full_name, username, email, password, photo, clearence) values (17, 'Andromache Poundsford', 'apoundsfordg', 'apoundsfordg@barnesandnoble.com', '5094d42c0d2ebe17e40a832c59b2e9da7e2c1d7e', 'http://dummyimage.com/241x147.png/5fa2dd/ffffff', true);
insert into users (id, full_name, username, email, password, photo, clearence) values (18, 'Tiertza Wormleighton', 'twormleightonh', 'twormleightonh@cnbc.com', '5094d42c0d2ebe17e40a832c59b2e9da7e2c1d7e', 'http://dummyimage.com/241x147.png/5fa2dd/ffffff', true);
insert into users (id, full_name, username, email, password, photo, clearence) values (19, 'Gerti Mineghelli', 'gmineghellii', 'gmineghellii@samsung.com', '5094d42c0d2ebe17e40a832c59b2e9da7e2c1d7e', 'http://dummyimage.com/241x147.png/5fa2dd/ffffff', false);
insert into users (id, full_name, username, email, password, photo, clearence) values (20, 'Cosmo Postles', 'cpostlesj', 'cpostlesj@ezinearticles.com', '4b231ca66098db0c9fa0002fa5a8e75fbd326ded', 'http://dummyimage.com/241x147.png/5fa2dd/ffffff', false);
UNLOCK TABLES;

-- shop insert
LOCK TABLES `shop` WRITE;
insert into shop (id, admin_id, manager_id, name, address, products_count, photo, sold_items) values (1, 1, 1, 'Leenti', '89 Spenser Pass', 140, 'http://dummyimage.com/241x147.png/5fa2dd/ffffff', 151);
insert into shop (id, admin_id, manager_id, name, address, products_count, photo, sold_items) values (2, 2, 2, 'Jayo', '979 Manley Avenue', 678, 'http://dummyimage.com/237x125.png/ff4444/ffffff', 367);
insert into shop (id, admin_id, manager_id, name, address, products_count, photo, sold_items) values (3, 3, 3, 'Yombu', '4 Wayridge Plaza', 953, 'http://dummyimage.com/164x208.png/dddddd/000000', 632);
insert into shop (id, admin_id, manager_id, name, address, products_count, photo, sold_items) values (4, 4, 4, 'Leexo', '1769 Kedzie Street', 418, 'http://dummyimage.com/116x121.png/cc0000/ffffff', 858);
insert into shop (id, admin_id, manager_id, name, address, products_count, photo, sold_items) values (5, 5, 5, 'Skimia', '336 Helena Street', 525, 'http://dummyimage.com/170x152.png/dddddd/000000', 578);
insert into shop (id, admin_id, manager_id, name, address, products_count, photo, sold_items) values (6, 6, 6, 'Tagtune', '77 Maryland Center', 399, 'http://dummyimage.com/237x235.png/dddddd/000000', 792);
insert into shop (id, admin_id, manager_id, name, address, products_count, photo, sold_items) values (7, 7, 7, 'Youtags', '696 Little Fleur Drive', 769, 'http://dummyimage.com/182x204.png/dddddd/000000', 200);
insert into shop (id, admin_id, manager_id, name, address, products_count, photo, sold_items) values (8, 8, 8, 'Skivee', '51728 Anderson Circle', 708, 'http://dummyimage.com/218x188.png/cc0000/ffffff', 14);
insert into shop (id, admin_id, manager_id, name, address, products_count, photo, sold_items) values (9, 9, 9, 'Quaxo', '2 Carioca Circle', 631, 'http://dummyimage.com/187x174.png/cc0000/ffffff', 206);
insert into shop (id, admin_id, manager_id, name, address, products_count, photo, sold_items) values (10, 10, 10, 'Zoomdog', '96 Sloan Hill', 394, 'http://dummyimage.com/149x138.png/dddddd/000000', 242);
insert into shop (id, admin_id, manager_id, name, address, products_count, photo, sold_items) values (11, 11, 11, 'Meezzy', '5 Independence Road', 922, 'http://dummyimage.com/127x228.png/dddddd/000000', 296);
insert into shop (id, admin_id, manager_id, name, address, products_count, photo, sold_items) values (12, 12, 12, 'Mydeo', '71304 Canary Road', 453, 'http://dummyimage.com/114x134.png/cc0000/ffffff', 509);
insert into shop (id, admin_id, manager_id, name, address, products_count, photo, sold_items) values (13, 13, 13, 'Thoughtstorm', '2 5th Avenue', 757, 'http://dummyimage.com/174x115.png/cc0000/ffffff', 224);
insert into shop (id, admin_id, manager_id, name, address, products_count, photo, sold_items) values (14, 14, 14, 'Buzzster', '6801 Randy Avenue', 378, 'http://dummyimage.com/232x211.png/5fa2dd/ffffff', 184);
insert into shop (id, admin_id, manager_id, name, address, products_count, photo, sold_items) values (15, 15, 15, 'Bubblemix', '69 Grayhawk Terrace', 777, 'http://dummyimage.com/132x170.png/ff4444/ffffff', 116);
insert into shop (id, admin_id, manager_id, name, address, products_count, photo, sold_items) values (16, 16, 16, 'Gigashots', '0 Carey Hill', 826, 'http://dummyimage.com/183x184.png/dddddd/000000', 370);
insert into shop (id, admin_id, manager_id, name, address, products_count, photo, sold_items) values (17, 17, 17, 'Dabjam', '16814 Daystar Way', 877, 'http://dummyimage.com/159x179.png/5fa2dd/ffffff', 54);
insert into shop (id, admin_id, manager_id, name, address, products_count, photo, sold_items) values (18, 18, 18, 'Skiptube', '610 Wayridge Court', 955, 'http://dummyimage.com/247x127.png/ff4444/ffffff', 184);
insert into shop (id, admin_id, manager_id, name, address, products_count, photo, sold_items) values (19, 19, 19, 'Topicshots', '557 Atwood Park', 287, 'http://dummyimage.com/228x150.png/dddddd/000000', 368);
insert into shop (id, admin_id, manager_id, name, address, products_count, photo, sold_items) values (20, 20, 20, 'Aimbu', '32 Vidon Trail', 261, 'http://dummyimage.com/112x202.png/cc0000/ffffff', 866);
UNLOCK TABLES;

-- PRODUCTS INSERTS
LOCK TABLES `products` WRITE;
insert into products (id, categories_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (1, 1, 1, 1, 1, 'hendrerit at vulputate vitae', 'semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes', '#e353bd', '195126.87', '944737.17', 30, 647, 73254, 76611, false, 'http://dummyimage.com/469x442.png/ff4444/ffffff', '2020-12-08 07:50:08', '2021-02-14 12:03:22');
insert into products (id, categories_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (2, 2, 2, 2, 2, 'hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer', 'maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam', '#ffef0d', '183495.74', '999520.42', 80, 956, 90901, 74321, false, 'http://dummyimage.com/277x299.png/5fa2dd/ffffff', '2021-09-05 06:38:36', '2020-12-07 03:57:20');
insert into products (id, categories_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (3, 3, 3, 3, 3, 'id pretium iaculis diam erat', 'libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat', '#912c2a', '870121.93', '964358.76', 45, 839, 73742, 42453, true, 'http://dummyimage.com/440x338.png/cc0000/ffffff', '2021-03-05 23:30:23', '2020-12-05 17:19:24');
insert into products (id, categories_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (4, 4, 4, 4, 4, 'etiam pretium iaculis justo in hac', 'vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent', '#46287a', '993321.49', '677297.63', 46, 604, 2113, 16016, false, 'http://dummyimage.com/273x170.png/cc0000/ffffff', '2021-03-09 22:26:28', '2021-07-01 08:31:52');
insert into products (id, categories_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (5, 5, 5, 5, 5, 'ante ipsum primis in faucibus orci luctus', 'amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet', '#af91a0', '228591.48', '322496.10', 50, 584, 75769, 52381, false, 'http://dummyimage.com/263x163.png/cc0000/ffffff', '2021-01-23 04:26:44', '2021-05-26 21:23:06');
insert into products (id, categories_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (6, 6, 6, 6, 6, 'purus eu magna', 'posuere metus vitae ipsum aliquam non mauris morbi non lectus', '#4fbd7c', '517004.08', '47213.68', 56, 141, 79213, 22921, false, 'http://dummyimage.com/401x347.png/cc0000/ffffff', '2021-09-24 18:39:50', '2021-04-14 13:07:31');
insert into products (id, categories_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (7, 7, 7, 7, 7, 'purus aliquet at feugiat non', 'a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec', '#338abb', '882954.32', '514779.15', 41, 984, 99755, 3092, true, 'http://dummyimage.com/198x109.png/dddddd/000000', '2021-06-25 15:04:54', '2021-02-08 23:59:02');
insert into products (id, categories_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (8, 8, 8, 8, 8, 'tristique tortor eu', 'elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat', '#e16298', '52168.96', '587054.68', 35, 704, 82483, 39466, false, 'http://dummyimage.com/127x160.png/5fa2dd/ffffff', '2021-05-22 11:59:15', '2021-02-14 15:39:46');
insert into products (id, categories_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (9, 9, 9, 9, 9, 'volutpat dui maecenas tristique est', 'cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis', '#b7fd0b', '223087.14', '629934.11', 6, 291, 71577, 49980, false, 'http://dummyimage.com/192x180.png/5fa2dd/ffffff', '2020-12-04 07:20:48', '2021-04-04 01:37:45');
insert into products (id, categories_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (10, 10, 10, 10, 10, 'vel sem sed sagittis nam congue risus', 'quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam', '#7f01e0', '530212.22', '597025.98', 4, 805, 32488, 24433, true, 'http://dummyimage.com/419x351.png/5fa2dd/ffffff', '2021-07-16 20:41:38', '2020-10-31 12:41:59');
insert into products (id, categories_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (11, 11, 11, 11, 11, 'a feugiat et eros vestibulum ac est lacinia nisi venenatis', 'leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum', '#661cc6', '616041.46', '715940.49', 54, 972, 47759, 3851, true, 'http://dummyimage.com/492x457.png/dddddd/000000', '2021-03-06 14:43:36', '2021-04-19 02:02:45');
insert into products (id, categories_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (12, 12, 12, 12, 12, 'quis libero nullam sit amet turpis elementum', 'varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et', '#2dc017', '445999.46', '574435.98', 66, 361, 46283, 85219, true, 'http://dummyimage.com/433x311.png/ff4444/ffffff', '2021-07-06 23:21:07', '2021-07-17 05:44:12');
insert into products (id, categories_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (13, 13, 13, 13, 13, 'ut dolor morbi vel lectus in quam fringilla rhoncus', 'ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh', '#d8c539', '984995.03', '32459.00', 69, 338, 68136, 78929, true, 'http://dummyimage.com/338x361.png/cc0000/ffffff', '2021-03-12 18:56:49', '2021-03-16 23:04:22');
insert into products (id, categories_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (14, 14, 14, 14, 14, 'pede ullamcorper', 'eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt', '#a3fc96', '210357.29', '730301.13', 69, 741, 1865, 77692, false, 'http://dummyimage.com/110x118.png/cc0000/ffffff', '2021-07-07 20:33:43', '2021-07-15 07:02:47');
insert into products (id, categories_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (15, 15, 15, 15, 15, 'sed justo pellentesque viverra pede ac diam cras pellentesque', 'eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet', '#e65b2b', '567352.75', '456091.29', 3, 142, 21719, 40894, false, 'http://dummyimage.com/359x428.png/5fa2dd/ffffff', '2021-02-13 00:41:45', '2020-12-28 02:16:00');
insert into products (id, categories_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (16, 16, 16, 16, 16, 'consequat metus sapien ut', 'duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis', '#f419bc', '314212.59', '533630.29', 60, 14, 3046, 7739, false, 'http://dummyimage.com/328x253.png/ff4444/ffffff', '2021-07-28 05:40:41', '2020-12-03 17:39:27');
insert into products (id, categories_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (17, 17, 17, 17, 17, 'vehicula consequat morbi a ipsum integer', 'nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam', '#0de08b', '903831.50', '30864.95', 58, 472, 80772, 12452, false, 'http://dummyimage.com/193x448.png/ff4444/ffffff', '2020-11-20 06:47:35', '2021-07-28 05:43:16');
insert into products (id, categories_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (18, 18, 18, 18, 18, 'natoque penatibus et magnis dis parturient montes', 'vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt', '#5556de', '775108.45', '759137.17', 62, 14, 10637, 93184, true, 'http://dummyimage.com/217x290.png/dddddd/000000', '2020-10-27 23:32:51', '2021-08-13 06:12:19');
insert into products (id, categories_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (19, 19, 19, 19, 19, 'integer aliquet massa id lobortis convallis', 'sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy', '#fd5a45', '80981.99', '659358.04', 59, 532, 23739, 88436, true, 'http://dummyimage.com/157x112.png/ff4444/ffffff', '2021-07-10 15:55:26', '2020-11-24 10:12:48');
insert into products (id, categories_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (20, 20, 20, 20, 20, 'eleifend pede libero quis orci nullam molestie nibh in lectus', 'sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin', '#8b0321', '520305.97', '296843.86', 68, 151, 513, 30812, false, 'http://dummyimage.com/390x461.png/dddddd/000000', '2021-09-20 09:46:12', '2021-03-04 16:58:20');
UNLOCK TABLES;