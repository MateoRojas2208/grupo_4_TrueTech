CREATE TABLE `user` (
  `id` int(10) UNSIGNED NOT NULL,
  `full_name` varchar(75) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `clearence` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT "user" NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `brands` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `brand_models` (
  `id` int(10) UNSIGNED NOT NULL,
  `brand_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `product_categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `countries` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `product_type_id` int(10) UNSIGNED DEFAULT NULL,
  `category_id` int(10) UNSIGNED DEFAULT NULL,
  `market_id` int(10) UNSIGNED DEFAULT NULL,
  `shop_id` int(10) UNSIGNED DEFAULT NULL,
  `country_id` int(10) UNSIGNED DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(11) NOT NULL,
  `discount_price` int(11) NOT NULL,
  `discount` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `views` int(11) NOT NULL,
  `likes` int(11) NOT NULL,
  `sort_order` int(11) NOT NULL,
  `status` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `shop` (
  `id` int(10) UNSIGNED NOT NULL,
  `market_id` int(10) UNSIGNED DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `product_types_count` int(11) NOT NULL,
  `products_count` int(11) NOT NULL,
  `views` int(11) NOT NULL,
  `photo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admins_username_unique` (`username`),
  ADD UNIQUE KEY `admins_phone_unique` (`phone`),
  ADD UNIQUE KEY `admins_email_unique` (`email`),
  ADD KEY `admins_shop_id_foreign` (`shop_id`);

ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `brand_models`
  ADD PRIMARY KEY (`id`),
  ADD KEY `brand_models_brand_id_foreign` (`brand_id`),
  ADD KEY `brand_models_product_type_id_foreign` (`product_type_id`);

ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categories__lft__rgt_parent_id_index` (`_lft`,`_rgt`,`parent_id`);

ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `markets`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `m_options`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `m_option_values`
  ADD PRIMARY KEY (`id`),
  ADD KEY `m_option_values_m_option_id_foreign` (`m_option_id`);

ALTER TABLE `options`
  ADD PRIMARY KEY (`id`),
  ADD KEY `options_product_type_id_foreign` (`product_type_id`);

ALTER TABLE `option_values`
  ADD PRIMARY KEY (`id`),
  ADD KEY `option_values_option_id_foreign` (`option_id`);

ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_product_type_id_foreign` (`product_type_id`),
  ADD KEY `products_category_id_foreign` (`category_id`),
  ADD KEY `products_market_id_foreign` (`market_id`),
  ADD KEY `products_shop_id_foreign` (`shop_id`),
  ADD KEY `products_country_id_foreign` (`country_id`);

ALTER TABLE `product_m_option_values`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_m_option_values_product_type_id_foreign` (`product_type_id`),
  ADD KEY `product_m_option_values_m_option_id_foreign` (`m_option_id`);

ALTER TABLE `product_option_values`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_option_values_product_id_foreign` (`product_id`),
  ADD KEY `product_option_values_option_id_foreign` (`option_id`),
  ADD KEY `product_option_values_option_value_id_foreign` (`option_value_id`);

ALTER TABLE `product_types`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_types_category_id_foreign` (`category_id`);

ALTER TABLE `product_type_m_options`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_type_m_options_product_type_id_foreign` (`product_type_id`),
  ADD KEY `product_type_m_options_m_option_id_foreign` (`m_option_id`),
  ADD KEY `product_type_m_options_m_option_value_id_foreign` (`m_option_value_id`);

ALTER TABLE `shops`
  ADD PRIMARY KEY (`id`),
  ADD KEY `shops_market_id_foreign` (`market_id`);