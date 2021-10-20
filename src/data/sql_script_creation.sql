CREATE TABLE `admins` (
  `id` int(10) UNSIGNED NOT NULL,
  `shop_id` int(10) UNSIGNED DEFAULT NULL,
  `name` varchar(75) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` int(11) NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `brands` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `brand_models` (
  `id` int(10) UNSIGNED NOT NULL,
  `brand_id` int(10) UNSIGNED DEFAULT NULL,
  `product_type_id` int(10) UNSIGNED DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `_lft` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `_rgt` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `parent_id` int(10) UNSIGNED DEFAULT NULL,
  `top` tinyint(4) NOT NULL,
  `sort_order` int(11) NOT NULL,
  `status` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `countries` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `markets` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shops_count` int(11) NOT NULL,
  `products_count` int(11) NOT NULL,
  `photo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `m_options` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `m_option_values` (
  `id` int(10) UNSIGNED NOT NULL,
  `m_option_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `options` (
  `id` int(10) UNSIGNED NOT NULL,
  `product_type_id` int(10) UNSIGNED DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `option_values` (
  `id` int(10) UNSIGNED NOT NULL,
  `option_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
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

CREATE TABLE `product_m_option_values` (
  `id` int(10) UNSIGNED NOT NULL,
  `product_type_id` int(10) UNSIGNED DEFAULT NULL,
  `m_option_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `product_option_values` (
  `id` int(10) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED DEFAULT NULL,
  `option_id` int(10) UNSIGNED DEFAULT NULL,
  `option_value_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `product_types` (
  `id` int(10) UNSIGNED NOT NULL,
  `category_id` int(10) UNSIGNED DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `product_type_m_options` (
  `id` int(10) UNSIGNED NOT NULL,
  `product_type_id` int(10) UNSIGNED DEFAULT NULL,
  `m_option_id` int(10) UNSIGNED DEFAULT NULL,
  `m_option_value_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `shops` (
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