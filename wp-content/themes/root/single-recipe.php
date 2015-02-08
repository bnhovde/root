<?php get_header(); ?>

	<main role="main" ui-hide-when-menu>
	<!-- section -->
	<section>

	<?php if (have_posts()): while (have_posts()) : the_post(); ?>

		<!-- article -->
		<article id="post-<?php the_ID(); ?>" <?php post_class("post"); ?>>

			<?php if ( has_post_thumbnail()) : // Check if thumbnail exists 
				$post_thumbnail_id = get_post_thumbnail_id();
		        $post_thumbnail_url = wp_get_attachment_url( $post_thumbnail_id ); ?>
				<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
					<img title="image title" alt="thumb image" class="post__featured-image" src="<?php echo $post_thumbnail_url; ?>">
				</a>
			<?php endif; ?>

			<span class="post__date"><?php the_time('j M Y'); ?></span>

			<h1 class="post__title">
				<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a>
			</h1>

			<?php the_content(); // Dynamic Content ?>

			<p class="post__subtitle"><?php the_title(); ?></p>

			<section class="post__section">
				<h2 class="h3">Ingredients</h2>
				<?php the_field('ingredients'); ?>
			</section>

			<section class="post__section">
				<h2 class="h3">Directions</h2>
				<?php the_field('directions'); ?>
			</section>
			

			<?php the_tags( __( 'Tags: ', 'html5blank' ), ', ', '<br>'); // Separated by commas with a line break at the end ?>
			<p><?php _e( 'Categorised in: ', 'html5blank' ); the_category(', '); // Separated by commas ?></p>
			<p><?php _e( 'This post was written by ', 'html5blank' ); the_author(); ?></p>

			<?php edit_post_link(); // Always handy to have Edit Post Links available ?>

			<?php comments_template(); ?>

		</article>
		<!-- /article -->

	<?php endwhile; ?>

	<?php else: ?>

		<!-- article -->
		<article>

			<h1><?php _e( 'Sorry, nothing to display.', 'html5blank' ); ?></h1>

		</article>
		<!-- /article -->

	<?php endif; ?>

	</section>
	<!-- /section -->
	</main>

<?php get_sidebar(); ?>

<?php get_footer(); ?>
