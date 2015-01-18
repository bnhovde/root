<?php query_posts( array(
    'post_type' => array( 'post', 'recipe' ),
    'cat' => 3,
    'showposts' => 50 )
); ?>


<?php if (have_posts()): while (have_posts()) : the_post(); ?>

    <!-- article -->
    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

        <a class="h4" href="<?php the_permalink(); ?>" title="<?php the_title(); ?>"><?php the_title(); ?></a>

    </article>

<?php endwhile; ?>

<?php else: ?>

    <!-- article -->
    <article>
        <h2><?php _e( 'Sorry, nothing to display.', 'html5blank' ); ?></h2>
    </article>
    <!-- /article -->

<?php endif; ?>
