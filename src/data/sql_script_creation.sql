CREATE DATABASE  IF NOT EXISTS `database_trueTechV2`;
USE `database_trueTechV2`;



CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `full_name` varchar(75) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
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

CREATE TABLE `product_categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
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
  `category_id` int(10) UNSIGNED NOT NULL,
  `model_id` int(10) UNSIGNED NOT NULL,
  `image` varchar(100) NOT NULL,
  `shop_id` int(10) UNSIGNED DEFAULT NULL,
  `seller_id` int(10) UNSIGNED NOT NULL,
  `color` varchar(20)  DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(500) NOT null,
  `price` int(11) UNSIGNED NOT NULL,
  `discount_price` int(11) DEFAULT NULL,
  `discount` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT "1",
  `sold_items` int(11) DEFAULT "0",
  `likes` int(11) DEFAULT "0",
  `status` boolean DEFAULT NULL,
  `creation_date` datetime NOT NULL,
  `update_date` datetime NOT NULL,

  PRIMARY KEY (`id`),

  index (category_id),
  index (model_id),
  index (shop_id),
  index (seller_id),

  foreign key (category_id)
 		references product_categories(id),

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
UNLOCK TABLES

-- brands-models INSERTS
LOCK TABLES `products` WRITE;
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
UNLOCK TABLES

-- product categories INSERTS
LOCK TABLES `product_categories` WRITE;
insert into product_categories (id, name) values (1, 'Kids');
insert into product_categories (id, name) values (2, 'Automotive');
insert into product_categories (id, name) values (3, 'Baby');
insert into product_categories (id, name) values (4, 'Shoes');
insert into product_categories (id, name) values (5, 'Beauty');
insert into product_categories (id, name) values (6, 'Movies');
insert into product_categories (id, name) values (7, 'Outdoors');
insert into product_categories (id, name) values (8, 'Jewelry');
insert into product_categories (id, name) values (9, 'Health');
insert into product_categories (id, name) values (10, 'Clothing');
insert into product_categories (id, name) values (11, 'Computers');
insert into product_categories (id, name) values (12, 'Kids');
insert into product_categories (id, name) values (13, 'Garden');
insert into product_categories (id, name) values (14, 'Clothing');
insert into product_categories (id, name) values (15, 'Games');
insert into product_categories (id, name) values (16, 'Automotive');
insert into product_categories (id, name) values (17, 'Industrial');
insert into product_categories (id, name) values (18, 'Grocery');
insert into product_categories (id, name) values (19, 'Industrial');
insert into product_categories (id, name) values (20, 'Sports');
UNLOCK TABLES




-- PRODUCTS INSERTS
LOCK TABLES `products` WRITE;
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (1, 1, 1, 1, 1, 'hendrerit at vulputate vitae', 'semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes', '#e353bd', '195126.87', '944737.17', 30, 647, 73254, 76611, false, 'http://dummyimage.com/469x442.png/ff4444/ffffff', '2020-12-08 07:50:08', '2021-02-14 12:03:22');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (2, 2, 2, 2, 2, 'hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer', 'maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam', '#ffef0d', '183495.74', '999520.42', 80, 956, 90901, 74321, false, 'http://dummyimage.com/277x299.png/5fa2dd/ffffff', '2021-09-05 06:38:36', '2020-12-07 03:57:20');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (3, 3, 3, 3, 3, 'id pretium iaculis diam erat', 'libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat', '#912c2a', '870121.93', '964358.76', 45, 839, 73742, 42453, true, 'http://dummyimage.com/440x338.png/cc0000/ffffff', '2021-03-05 23:30:23', '2020-12-05 17:19:24');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (4, 4, 4, 4, 4, 'etiam pretium iaculis justo in hac', 'vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent', '#46287a', '993321.49', '677297.63', 46, 604, 2113, 16016, false, 'http://dummyimage.com/273x170.png/cc0000/ffffff', '2021-03-09 22:26:28', '2021-07-01 08:31:52');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (5, 5, 5, 5, 5, 'ante ipsum primis in faucibus orci luctus', 'amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet', '#af91a0', '228591.48', '322496.10', 50, 584, 75769, 52381, false, 'http://dummyimage.com/263x163.png/cc0000/ffffff', '2021-01-23 04:26:44', '2021-05-26 21:23:06');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (6, 6, 6, 6, 6, 'purus eu magna', 'posuere metus vitae ipsum aliquam non mauris morbi non lectus', '#4fbd7c', '517004.08', '47213.68', 56, 141, 79213, 22921, false, 'http://dummyimage.com/401x347.png/cc0000/ffffff', '2021-09-24 18:39:50', '2021-04-14 13:07:31');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (7, 7, 7, 7, 7, 'purus aliquet at feugiat non', 'a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec', '#338abb', '882954.32', '514779.15', 41, 984, 99755, 3092, true, 'http://dummyimage.com/198x109.png/dddddd/000000', '2021-06-25 15:04:54', '2021-02-08 23:59:02');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (8, 8, 8, 8, 8, 'tristique tortor eu', 'elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat', '#e16298', '52168.96', '587054.68', 35, 704, 82483, 39466, false, 'http://dummyimage.com/127x160.png/5fa2dd/ffffff', '2021-05-22 11:59:15', '2021-02-14 15:39:46');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (9, 9, 9, 9, 9, 'volutpat dui maecenas tristique est', 'cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis', '#b7fd0b', '223087.14', '629934.11', 6, 291, 71577, 49980, false, 'http://dummyimage.com/192x180.png/5fa2dd/ffffff', '2020-12-04 07:20:48', '2021-04-04 01:37:45');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (10, 10, 10, 10, 10, 'vel sem sed sagittis nam congue risus', 'quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam', '#7f01e0', '530212.22', '597025.98', 4, 805, 32488, 24433, true, 'http://dummyimage.com/419x351.png/5fa2dd/ffffff', '2021-07-16 20:41:38', '2020-10-31 12:41:59');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (11, 11, 11, 11, 11, 'a feugiat et eros vestibulum ac est lacinia nisi venenatis', 'leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum', '#661cc6', '616041.46', '715940.49', 54, 972, 47759, 3851, true, 'http://dummyimage.com/492x457.png/dddddd/000000', '2021-03-06 14:43:36', '2021-04-19 02:02:45');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (12, 12, 12, 12, 12, 'quis libero nullam sit amet turpis elementum', 'varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et', '#2dc017', '445999.46', '574435.98', 66, 361, 46283, 85219, true, 'http://dummyimage.com/433x311.png/ff4444/ffffff', '2021-07-06 23:21:07', '2021-07-17 05:44:12');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (13, 13, 13, 13, 13, 'ut dolor morbi vel lectus in quam fringilla rhoncus', 'ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh', '#d8c539', '984995.03', '32459.00', 69, 338, 68136, 78929, true, 'http://dummyimage.com/338x361.png/cc0000/ffffff', '2021-03-12 18:56:49', '2021-03-16 23:04:22');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (14, 14, 14, 14, 14, 'pede ullamcorper', 'eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt', '#a3fc96', '210357.29', '730301.13', 69, 741, 1865, 77692, false, 'http://dummyimage.com/110x118.png/cc0000/ffffff', '2021-07-07 20:33:43', '2021-07-15 07:02:47');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (15, 15, 15, 15, 15, 'sed justo pellentesque viverra pede ac diam cras pellentesque', 'eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet', '#e65b2b', '567352.75', '456091.29', 3, 142, 21719, 40894, false, 'http://dummyimage.com/359x428.png/5fa2dd/ffffff', '2021-02-13 00:41:45', '2020-12-28 02:16:00');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (16, 16, 16, 16, 16, 'consequat metus sapien ut', 'duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis', '#f419bc', '314212.59', '533630.29', 60, 14, 3046, 7739, false, 'http://dummyimage.com/328x253.png/ff4444/ffffff', '2021-07-28 05:40:41', '2020-12-03 17:39:27');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (17, 17, 17, 17, 17, 'vehicula consequat morbi a ipsum integer', 'nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam', '#0de08b', '903831.50', '30864.95', 58, 472, 80772, 12452, false, 'http://dummyimage.com/193x448.png/ff4444/ffffff', '2020-11-20 06:47:35', '2021-07-28 05:43:16');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (18, 18, 18, 18, 18, 'natoque penatibus et magnis dis parturient montes', 'vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt', '#5556de', '775108.45', '759137.17', 62, 14, 10637, 93184, true, 'http://dummyimage.com/217x290.png/dddddd/000000', '2020-10-27 23:32:51', '2021-08-13 06:12:19');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (19, 19, 19, 19, 19, 'integer aliquet massa id lobortis convallis', 'sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy', '#fd5a45', '80981.99', '659358.04', 59, 532, 23739, 88436, true, 'http://dummyimage.com/157x112.png/ff4444/ffffff', '2021-07-10 15:55:26', '2020-11-24 10:12:48');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (21, 21, 21, 21, 21, 'mi', 'mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede', '#17b527', '820618.60', '777274.09', 50, 318, 44963, 18407, false, 'http://dummyimage.com/102x280.png/5fa2dd/ffffff', '2021-07-24 20:45:30', '2020-11-22 00:54:32');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (20, 20, 20, 20, 20, 'eleifend pede libero quis orci nullam molestie nibh in lectus', 'sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin', '#8b0321', '520305.97', '296843.86', 68, 151, 513, 30812, false, 'http://dummyimage.com/390x461.png/dddddd/000000', '2021-09-20 09:46:12', '2021-03-04 16:58:20');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (22, 22, 22, 22, 22, 'nec nisi vulputate nonummy maecenas tincidunt lacus at velit', 'congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac', '#fe6122', '79287.96', '299057.94', 63, 438, 51070, 5813, false, 'http://dummyimage.com/498x399.png/ff4444/ffffff', '2021-04-07 22:09:45', '2021-09-07 12:19:30');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (23, 23, 23, 23, 23, 'suspendisse', 'adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula', '#7339fc', '225799.32', '435984.38', 83, 506, 72328, 4385, true, 'http://dummyimage.com/156x493.png/cc0000/ffffff', '2021-07-12 20:08:47', '2021-03-28 17:59:11');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (24, 24, 24, 24, 24, 'nulla ut erat id mauris vulputate elementum nullam varius', 'cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam', '#f75386', '2575.15', '39376.90', 54, 872, 4467, 14427, false, 'http://dummyimage.com/455x310.png/cc0000/ffffff', '2021-05-22 10:22:53', '2021-01-13 05:08:09');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (25, 25, 25, 25, 25, 'rutrum ac lobortis', 'at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla', '#21ba08', '807075.94', '38065.96', 31, 257, 66157, 96588, false, 'http://dummyimage.com/214x152.png/cc0000/ffffff', '2021-06-26 08:42:20', '2021-08-16 12:25:33');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (26, 26, 26, 26, 26, 'odio elementum eu interdum', 'nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis', '#e86489', '694232.05', '634557.72', 43, 784, 20, 93707, true, 'http://dummyimage.com/422x396.png/dddddd/000000', '2021-01-04 09:00:33', '2020-11-24 03:53:30');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (27, 27, 27, 27, 27, 'blandit ultrices enim lorem ipsum dolor', 'molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit', '#b155c9', '391169.04', '648719.69', 79, 965, 42265, 78668, true, 'http://dummyimage.com/118x326.png/dddddd/000000', '2021-09-18 12:25:01', '2021-05-04 00:01:29');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (28, 28, 28, 28, 28, 'ipsum dolor sit amet consectetuer adipiscing elit proin risus', 'volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus', '#a10690', '554058.89', '771667.72', 8, 754, 53512, 8678, true, 'http://dummyimage.com/483x477.png/5fa2dd/ffffff', '2021-04-07 13:08:50', '2021-01-27 01:51:40');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (29, 29, 29, 29, 29, 'molestie sed justo pellentesque viverra', 'justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl u volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac', '#f63b77', '853556.01', '812760.95', 93, 17, 51658, 13438, false, 'http://dummyimage.com/152x484.png/cc0000/ffffff', '2021-07-15 12:56:22', '2020-11-07 14:37:01');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (30, 30, 30, 30, 30, 'risus', 'in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec', '#77696f', '106813.20', '65081.47', 41, 832, 98442, 86868, true, 'http://dummyimage.com/119x354.png/dddddd/000000', '2020-11-02 08:14:46', '2021-03-11 19:09:21');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (31, 31, 31, 31, 31, 'leo odio porttitor id consequat in consequat ut', 'ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst', '#ebdcbb', '957647.87', '562698.29', 69, 581, 14544, 5615, false, 'http://dummyimage.com/384x401.png/ff4444/ffffff', '2021-10-01 03:52:35', '2021-01-24 00:10:56');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (32, 32, 32, 32, 32, 'integer tincidunt ante vel ipsum praesent', 'vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci', '#d68be2', '398378.02', '950966.15', 73, 959, 48889, 11028, false, 'http://dummyimage.com/384x308.png/cc0000/ffffff', '2021-07-30 19:31:37', '2021-06-25 01:26:06');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (33, 33, 33, 33, 33, 'amet', 'ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse', '#14f026', '784827.53', '174969.09', 40, 348, 37859, 88262, false, 'http://dummyimage.com/230x225.png/cc0000/ffffff', '2021-06-16 01:40:51', '2021-03-19 07:59:09');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (34, 34, 34, 34, 34, 'felis donec semper sapien a libero', 'nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan', '#328842', '221156.17', '76003.84', 92, 99, 27259, 74728, true, 'http://dummyimage.com/325x155.png/ff4444/ffffff', '2020-12-30 07:58:01', '2021-01-25 08:25:23');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (35, 35, 35, 35, 35, 'feugiat et eros vestibulum ac est lacinia', 'odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec', '#c059e9', '458153.30', '462588.19', 19, 2, 3434, 30301, false, 'http://dummyimage.com/483x442.png/ff4444/ffffff', '2021-10-20 00:57:46', '2021-09-21 12:22:42');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (36, 36, 36, 36, 36, 'vestibulum sit amet cursus', 'augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus', '#a94207', '288367.52', '77633.65', 89, 891, 85812, 10016, false, 'http://dummyimage.com/393x451.png/5fa2dd/ffffff', '2020-12-21 04:34:55', '2021-08-07 12:02:43');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (37, 37, 37, 37, 37, 'congue vivamus metus arcu adipiscing molestie', 'et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum', '#c725f7', '541179.71', '679385.29', 15, 785, 34149, 9767, true, 'http://dummyimage.com/177x159.png/5fa2dd/ffffff', '2021-06-02 22:07:48', '2021-03-29 11:06:15');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (38, 38, 38, 38, 38, 'sapien quis libero nullam sit amet turpis', 'ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec', '#00f567', '940259.44', '967628.72', 68, 459, 48083, 37847, false, 'http://dummyimage.com/462x369.png/5fa2dd/ffffff', '2021-08-06 16:59:49', '2021-03-25 19:02:06');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (39, 39, 39, 39, 39, 'praesent lectus vestibulum quam sapien varius ut', 'faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed', '#7bce82', '823235.00', '145319.06', 61, 346, 63035, 55305, true, 'http://dummyimage.com/270x293.png/cc0000/ffffff', '2021-10-13 18:17:41', '2021-03-07 03:12:30');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (40, 40, 40, 40, 40, 'posuere cubilia', 'at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed', '#fd1db4', '366050.37', '477885.97', 71, 41, 92637, 17708, false, 'http://dummyimage.com/315x174.png/dddddd/000000', '2021-03-15 18:23:27', '2021-08-20 19:10:09');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (41, 41, 41, 41, 41, 'velit id pretium iaculis diam erat fermentum', 'in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas', '#0216e0', '25293.33', '684114.23', 97, 862, 57488, 33347, true, 'http://dummyimage.com/211x185.png/cc0000/ffffff', '2021-06-28 02:44:50', '2021-04-01 17:34:10');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (42, 42, 42, 42, 42, 'amet consectetuer', 'congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam', '#e726a5', '604894.90', '268031.68', 39, 541, 76518, 67013, false, 'http://dummyimage.com/183x262.png/cc0000/ffffff', '2021-02-21 12:36:21', '2021-01-04 08:03:54');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (43, 43, 43, 43, 43, 'amet diam in magna bibendum imperdiet nullam orci', 'eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam', '#81cb42', '745312.08', '530639.92', 96, 965, 95516, 50923, false, 'http://dummyimage.com/386x402.png/dddddd/000000', '2020-11-07 04:13:02', '2021-02-04 18:45:18');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (44, 44, 44, 44, 44, 'eget tincidunt eget tempus vel pede morbi porttitor lorem', 'vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo', '#dfcd33', '49552.20', '584353.90', 89, 100, 47224, 82062, false, 'http://dummyimage.com/402x154.png/dddddd/000000', '2021-06-02 01:10:54', '2021-02-23 11:33:04');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (45, 45, 45, 45, 45, 'mattis odio donec vitae nisi nam ultrices libero non', 'non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut', '#0994ff', '177546.60', '621571.94', 58, 366, 72315, 85725, false, 'http://dummyimage.com/193x384.png/cc0000/ffffff', '2021-10-09 12:23:56', '2021-08-08 17:33:36');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (46, 46, 46, 46, 46, 'odio cras mi pede malesuada', 'sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis', '#b82cb9', '769961.46', '454042.98', 25, 549, 78181, 78071, false, 'http://dummyimage.com/151x489.png/ff4444/ffffff', '2021-08-11 13:09:02', '2020-10-27 12:22:12');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (47, 47, 47, 47, 47, 'erat quisque erat eros viverra eget congue eget semper rutrum', 'eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla', '#323698', '559424.72', '678287.73', 61, 918, 49425, 36018, false, 'http://dummyimage.com/387x460.png/cc0000/ffffff', '2020-11-26 21:40:38', '2021-05-04 19:00:29');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (48, 48, 48, 48, 48, 'proin risus praesent lectus vestibulum quam sapien varius ut blandit', 'maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat', '#45a123', '875526.65', '473188.94', 9, 464, 44427, 59885, false, 'http://dummyimage.com/120x146.png/cc0000/ffffff', '2021-07-19 02:55:34', '2020-12-01 05:31:42');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (49, 49, 49, 49, 49, 'volutpat sapien', 'eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec', '#72260f', '88506.78', '332308.28', 11, 768, 26843, 81456, false, 'http://dummyimage.com/459x211.png/5fa2dd/ffffff', '2021-02-15 23:09:46', '2021-07-17 00:36:24');
insert into products (id, category_id, model_id, shop_id, seller_id, name, description, color, price, discount_price, discount, quantity, sold_items, likes, status, image, creation_date, update_date) values (50, 50, 50, 50, 50, 'vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id', 'lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus', '#5279ae', '281384.29', '74794.41', 22, 250, 38156, 78528, false, 'http://dummyimage.com/432x306.png/5fa2dd/ffffff', '2021-05-06 23:26:27', '2021-10-04 17:56:47');
UNLOCK TABLES

-- Users
LOCK TABLES `users` WRITE;
insert into users (id, full_name, username, email, password, clearence) values (1, 'Nicol Simenel', 'nsimenel0', 'nsimenel0@huffingtonpost.com', '683fc150de1e61aa3224c1adb66b7c29e9981921', true);
insert into users (id, full_name, username, email, password, clearence) values (2, 'Sibella Rycroft', 'srycroft1', 'srycroft1@myspace.com', '683fc150de1e61aa3224c1adb66b7c29e9981921', true);
insert into users (id, full_name, username, email, password, clearence) values (3, 'Gal Marsden', 'gmarsden2', 'gmarsden2@opensource.org', '683fc150de1e61aa3224c1adb66b7c29e9981921', true);
insert into users (id, full_name, username, email, password, clearence) values (4, 'Donielle Mouat', 'dmouat3', 'dmouat3@wix.com', '683fc150de1e61aa3224c1adb66b7c29e9981921', false);
insert into users (id, full_name, username, email, password, clearence) values (5, 'Jarrod Pllu', 'jpllu4', 'jpllu4@cafepress.com', '683fc150de1e61aa3224c1adb66b7c29e9981921', false);
insert into users (id, full_name, username, email, password, clearence) values (6, 'Adelind Raiment', 'araiment5', 'araiment5@vkontakte.ru', '683fc150de1e61aa3224c1adb66b7c29e9981921', true);
insert into users (id, full_name, username, email, password, clearence) values (7, 'Norby Yetton', 'nyetton6', 'nyetton6@digg.com', '683fc150de1e61aa3224c1adb66b7c29e9981921', true);
insert into users (id, full_name, username, email, password, clearence) values (8, 'Nannie Bunner', 'nbunner7', 'nbunner7@csmonitor.com', '683fc150de1e61aa3224c1adb66b7c29e9981921', false);
insert into users (id, full_name, username, email, password, clearence) values (9, 'Jakob Roch', 'jroch8', 'jroch8@tmall.com', '683fc150de1e61aa3224c1adb66b7c29e9981921', true);
insert into users (id, full_name, username, email, password, clearence) values (10, 'Tabbi Avramow', 'tavramow9', 'tavramow9@rakuten.co.jp', '683fc150de1e61aa3224c1adb66b7c29e9981921', false);
insert into users (id, full_name, username, email, password, clearence) values (11, 'Sallyanne Duigenan', 'sduigenana', 'sduigenana@exblog.jp', '683fc150de1e61aa3224c1adb66b7c29e9981921', true);
insert into users (id, full_name, username, email, password, clearence) values (12, 'Georgie Johanning', 'gjohanningb', 'gjohanningb@omniture.com', '683fc150de1e61aa3224c1adb66b7c29e9981921', true);
insert into users (id, full_name, username, email, password, clearence) values (13, 'Roderick Hanby', 'rhanbyc', 'rhanbyc@ucla.edu', '683fc150de1e61aa3224c1adb66b7c29e9981921', false);
insert into users (id, full_name, username, email, password, clearence) values (14, 'Cherry Harmar', 'charmard', 'charmard@google.co.jp', '683fc150de1e61aa3224c1adb66b7c29e9981921', false);
insert into users (id, full_name, username, email, password, clearence) values (15, 'Zelma Gamble', 'zgamblee', 'zgamblee@livejournal.com', '683fc150de1e61aa3224c1adb66b7c29e9981921', false);
insert into users (id, full_name, username, email, password, clearence) values (16, 'Giavani Line', 'glinef', 'glinef@vkontakte.ru', '683fc150de1e61aa3224c1adb66b7c29e9981921', true);
insert into users (id, full_name, username, email, password, clearence) values (17, 'Meggi Vowells', 'mvowellsg', 'mvowellsg@ft.com', '683fc150de1e61aa3224c1adb66b7c29e9981921', false);
insert into users (id, full_name, username, email, password, clearence) values (18, 'Ginelle Caustick', 'gcaustickh', 'gcaustickh@tinypic.com', '683fc150de1e61aa3224c1adb66b7c29e9981921', false);
insert into users (id, full_name, username, email, password, clearence) values (19, 'Reiko Cattermull', 'rcattermulli', 'rcattermulli@umn.edu', '683fc150de1e61aa3224c1adb66b7c29e9981921', false);
insert into users (id, full_name, username, email, password, clearence) values (20, 'Maure Keeping', 'mkeepingj', 'mkeepingj@slashdot.org', '683fc150de1e61aa3224c1adb66b7c29e9981921', false);
UNLOCK TABLES



