<?php get_header(); ?>

	<main role="main">
		<!-- section -->
		<section>

			<h1 class="h2"><?php _e( 'All ', 'html5blank' ); single_cat_title(); ?></h1>

			<?php get_template_part('loop-archive'); ?>

			<?php get_template_part('pagination'); ?>

		</section>
		<!-- /section -->
	</main>

<?php get_footer(); ?>
