<?php query_posts( array(
	'post_type' => array( 'post', 'recipe' ),
	'cat' => 3,
	'showposts' => 5 )
); ?>


<?php if (have_posts()): while (have_posts()) : the_post(); ?>

	<!-- article -->
	<article id="post-<?php the_ID(); ?>" <?php post_class('post'); ?>>

		<?php if ( has_post_thumbnail()) : // Check if thumbnail exists 
			$post_thumbnail_id = get_post_thumbnail_id();
	        $post_thumbnail_url = wp_get_attachment_url( $post_thumbnail_id ); ?>
			<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
				<img title="image title" alt="thumb image" class="post__featured-image" src="<?php echo $post_thumbnail_url; ?>">
			</a>
		<?php endif; ?>

		<span class="post__date"><?php the_time('j M Y'); ?></span>

		<h2 class="post__title">
			<a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a>
		</h2>

		<!-- <span class="post__author"><?php _e( 'Published by', 'html5blank' ); ?> <?php the_author_posts_link(); ?></span> -->
		<!-- <span class="post__comments"><?php if (comments_open( get_the_ID() ) ) comments_popup_link( __( 'Leave your thoughts', 'html5blank' ), __( '1 Comment', 'html5blank' ), __( '% Comments', 'html5blank' )); ?></span> -->

		<?php html5wp_excerpt('html5wp_index'); // Build your custom callback length in functions.php ?>

		<?php edit_post_link(); ?>

	</article>
	<!-- /article -->

<?php endwhile; ?>

<?php else: ?>

	<!-- article -->
	<article>
		<h2><?php _e( 'Sorry, nothing to display.', 'html5blank' ); ?></h2>
	</article>
	<!-- /article -->

<?php endif; ?>
