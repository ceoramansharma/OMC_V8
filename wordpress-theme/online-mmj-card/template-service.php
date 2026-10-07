<?php
/**
 * Template Name: Service Landing Page
 * Template Post Type: page
 *
 * Dedicated landing page template for telehealth packages (New Patient, Renewal, 99-Plant Cultivation, ESA).
 * Fully authorable with Page Builders (Elementor, Gutenberg, Divi) using the standard the_content() loop.
 *
 * @package Online_MMJ_Card
 */

get_header();
?>

<div id="online-mmj-card-root">
  <!-- Breadcrumb Navigation for SEO Hierarchy -->
  <div class="bg-slate-50 border-b border-slate-200 py-3 text-xs text-slate-500">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <?php online_mmj_breadcrumbs(); ?>
    </div>
  </div>

  <main id="main-content" class="site-main service-landing-template py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <?php
      // Standard WordPress loop executing the_content() for Page Builders & Gutenberg
      while (have_posts()) :
        the_post();
        ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class('entry-service-page'); ?>>
          <div class="entry-content">
            <?php the_content(); ?>
          </div>

          <?php
          wp_link_pages(array(
            'before' => '<div class="page-links text-center py-4 font-bold">' . esc_html__('Pages:', 'online-mmj-card'),
            'after'  => '</div>',
          ));
          ?>
        </article>
        <?php
      endwhile;
      ?>
    </div>
  </main>
</div>

<?php
get_footer();
