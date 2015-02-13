<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
		<meta charset="<?php bloginfo('charset'); ?>">
		<title><?php wp_title(''); ?><?php if(wp_title('', false)) { echo ' :'; } ?> <?php bloginfo('name'); ?></title>

		<link href="//www.google-analytics.com" rel="dns-prefetch">
        <link href="<?php echo get_template_directory_uri(); ?>/img/icons/favicon.ico" rel="shortcut icon">
        <link href="<?php echo get_template_directory_uri(); ?>/img/icons/touch.png" rel="apple-touch-icon-precomposed">
        <link href='http://fonts.googleapis.com/css?family=Lato:300,400,700,900' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=PT+Sans:400,400italic' rel='stylesheet' type='text/css'>

		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="description" content="<?php bloginfo('description'); ?>">

		<?php wp_head(); ?>

	</head>
	<body <?php body_class(); ?> ui-menu-state ng-app="rootApp">

		<div class="wrapper">

			<header class="header clear" role="banner">

					<a class="burger" href="#" ui-menu-btn>
						<i class="burger__hl"></i>
					</a>

					<div class="logo">
						<a class="logo__text" href="<?php echo home_url(); ?>"><?php bloginfo(); ?></a>
					</div>

					<nav class="nav" role="navigation">

						<?php html5blank_nav(); ?>

						<ul class="mega-menu" ui-mega-menu>

							<li class="mega-menu__item">
								<p>5 Most Popular Recipes</p>
								<ul class="mega-menu__list">
									<li><a href="#" title="">Banan-o-rama loaf with nuts and stuff</a></li>
									<li><a href="#" title="">Totally sweet muffins with seed of the poppy</a></li>
									<li><a href="#" title="">Tag Here Too</a></li>
									<li><a href="#" title="">Banan-o-rama loaf with nuts</a></li>
									<li><a href="#" title="">Tag Here Tag Here</a></li>
								</ul>

								<p>5 Latest Recipes</p>
								<ul class="mega-menu__list">
									<li><a href="#" title="">Tag Here Too</a></li>
									<li><a href="#" title="">Totally sweet muffins with seed of the poppy</a></li>
									<li><a href="#" title="">Banan-o-rama loaf with nuts</a></li>
									<li><a href="#" title="">Banan-o-rama loaf with nuts and stuff</a></li>
									<li><a href="#" title="">Tag Here Tag Here</a></li>
								</ul>

								<p>Share The Love</p>
								<ul class="mega-menu__list--social">
									<li><a href="#" title="">Link</a></li>
									<li><a href="#" title="">Link</a></li>
									<li><a href="#" title="">Link</a></li>
									<li><a href="#" title="">Link</a></li>
									<li><a href="#" title="">Link</a></li>
								</ul>
							</li><!-- 
						 --><li class="mega-menu__item">
								<?php get_template_part('searchform'); ?>
								<p>Popular Tags &amp; Ingredients</p>

								<?php show_top_tags(); ?>

							</li>

						</ul>


					</nav>
			</header>
