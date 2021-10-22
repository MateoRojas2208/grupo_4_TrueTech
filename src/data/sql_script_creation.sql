CREATE DATABASE  IF NOT EXISTS `database_trueTechV2`;
USE `database_trueTechV2`;


CREATE TABLE `color` (
  `id` int(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
  `image_id` int(10) UNSIGNED NOT NULL,
  `shop_id` int(10) UNSIGNED DEFAULT NULL,
  `seller_id` int(10) UNSIGNED NOT NULL,
  `color_id` int(10) UNSIGNED DEFAULT NULL,
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










