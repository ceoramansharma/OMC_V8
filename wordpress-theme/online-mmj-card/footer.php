<?php
/**
 * The footer for Online MMJ Card theme
 *
 * Fully modular with dynamic sidebars/widgets, wp_nav_menu support,
 * and standard wp_footer() hook right before </body> for SEO & analytics scripts.
 *
 * @package Online_MMJ_Card
 */

$all_states_list = array(
  'Arizona', 'Arkansas', 'California', 'Connecticut', 'Delaware', 'Florida',
  'Georgia', 'Illinois', 'Iowa', 'Louisiana', 'Maine', 'Maryland',
  'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri',
  'Montana', 'Nevada', 'New Jersey', 'New Mexico', 'New York',
  'North Dakota', 'Ohio', 'Oklahoma', 'Pennsylvania', 'Texas',
  'Vermont', 'Virginia', 'Washington DC', 'West Virginia'
);
?>

<footer id="colophon" class="site-footer bg-[#0f172a] text-slate-300 pt-16 pb-12 border-t border-slate-800 text-xs">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- 4-Column Dynamic Widgets Grid (Editable via WP Admin > Appearance > Widgets) -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
      
      <!-- Column 1: Brand & Bio -->
      <div class="lg:col-span-2 space-y-4">
        <?php if (is_active_sidebar('footer-1')) : ?>
          <?php dynamic_sidebar('footer-1'); ?>
        <?php else : ?>
          <div class="flex items-center gap-2.5">
            <div class="w-9 h-9 rounded-xl bg-[#16a34a] flex items-center justify-center text-white shadow-sm">
              <svg viewBox="0 0 24 24" class="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C12 2 10 7 8 9C6 11 3 12 3 12C3 12 7 14 9 16C11 18 12 22 12 22C12 22 13 18 15 16C17 14 21 12 21 12C21 12 18 11 16 9C14 7 12 2 12 2Z" fill="white" />
              </svg>
            </div>
            <span class="text-xl font-black text-white tracking-tight">
              ONLINE MMJ <span class="text-[#16a34a]">CARD</span>
            </span>
          </div>

          <p class="text-xs text-slate-400 max-w-sm leading-relaxed">
            United States' most trusted medical marijuana card service. 100% online HIPAA-compliant doctor evaluations with same-day digital certification.
          </p>

          <div class="pt-2 text-xs text-slate-500">
            &copy; <?php echo date('Y'); ?> Online MMJ Card Health Services Inc. All rights reserved.
          </div>
        <?php endif; ?>
      </div>

      <!-- Column 2: Services Menu -->
      <div class="space-y-3">
        <?php if (is_active_sidebar('footer-2')) : ?>
          <?php dynamic_sidebar('footer-2'); ?>
        <?php else : ?>
          <h4 class="text-xs font-bold uppercase tracking-wider text-white">Services</h4>
          <?php
          if (has_nav_menu('footer_services')) {
              wp_nav_menu(array(
                  'theme_location' => 'footer_services',
                  'container'      => false,
                  'menu_class'     => 'space-y-2 text-slate-400',
                  'fallback_cb'    => false,
              ));
          } else {
              ?>
              <ul class="space-y-2 text-slate-400">
                <li><a href="<?php echo esc_url(home_url('/new-patient-medical-marijuana-card/')); ?>" class="hover:text-[#16a34a] transition-colors">Book 420 Evaluation</a></li>
                <li><a href="<?php echo esc_url(home_url('/medical-marijuana-card-renewal/')); ?>" class="hover:text-[#16a34a] transition-colors">Card Renewal</a></li>
                <li><a href="<?php echo esc_url(home_url('/99-plant-cultivation-recommendation/')); ?>" class="hover:text-[#16a34a] transition-colors">99-Plant Cultivation</a></li>
                <li><a href="<?php echo esc_url(home_url('/emotional-support-animal-letter/')); ?>" class="hover:text-[#16a34a] transition-colors">ESA Animal Letter</a></li>
              </ul>
              <?php
          }
          ?>
        <?php endif; ?>
      </div>

      <!-- Column 3: Top States Menu -->
      <div class="space-y-3">
        <?php if (is_active_sidebar('footer-3')) : ?>
          <?php dynamic_sidebar('footer-3'); ?>
        <?php else : ?>
          <h4 class="text-xs font-bold uppercase tracking-wider text-white">Top States</h4>
          <?php
          if (has_nav_menu('footer_states')) {
              wp_nav_menu(array(
                  'theme_location' => 'footer_states',
                  'container'      => false,
                  'menu_class'     => 'space-y-2 text-slate-400',
                  'fallback_cb'    => false,
              ));
          } else {
              ?>
              <ul class="space-y-2 text-slate-400">
                <li><a href="<?php echo esc_url(home_url('/medical-marijuana-card-california/')); ?>" class="hover:text-[#16a34a] transition-colors">California MMJ</a></li>
                <li><a href="<?php echo esc_url(home_url('/medical-marijuana-card-new-york/')); ?>" class="hover:text-[#16a34a] transition-colors">New York MMJ</a></li>
                <li><a href="<?php echo esc_url(home_url('/medical-marijuana-card-florida/')); ?>" class="hover:text-[#16a34a] transition-colors">Florida MMJ</a></li>
                <li><a href="<?php echo esc_url(home_url('/medical-marijuana-card-pennsylvania/')); ?>" class="hover:text-[#16a34a] transition-colors">Pennsylvania MMJ</a></li>
              </ul>
              <?php
          }
          ?>
        <?php endif; ?>
      </div>

      <!-- Column 4: Contact & Support -->
      <div class="space-y-3">
        <?php if (is_active_sidebar('footer-4')) : ?>
          <?php dynamic_sidebar('footer-4'); ?>
        <?php else : ?>
          <h4 class="text-xs font-bold uppercase tracking-wider text-white">Patient Support</h4>
          <p class="text-slate-400">Toll-Free Patient Care Desk:</p>
          <a href="tel:8884206789" class="text-base font-bold text-[#16a34a] block hover:underline">
            (888) 420-6789
          </a>
          <p class="text-slate-500 text-[11px]">Mon &ndash; Sun: 8:00 AM &ndash; 10:00 PM</p>
          <div class="pt-2">
            <span class="inline-block px-2.5 py-1 bg-slate-800 text-emerald-400 font-bold rounded-lg text-[10px]">
              &check; HIPAA Certified Clinic
            </span>
          </div>
        <?php endif; ?>
      </div>

    </div>

    <!-- State Directory Bar for SEO Interlinking -->
    <div class="py-8 border-b border-slate-800 text-[11px] text-slate-400 leading-relaxed text-center">
      <p class="font-semibold text-slate-300 mb-2">Nationwide Telehealth Medical Cannabis Coverage:</p>
      <p>
        <?php foreach ($all_states_list as $i => $st) : 
          $st_slug = sanitize_title($st);
        ?>
          <a href="<?php echo esc_url(home_url('/medical-marijuana-card-')); ?><?php echo esc_attr($st_slug); ?>/" class="hover:text-[#16a34a] transition-colors">
            <?php echo esc_html($st); ?>
          </a>
          <?php if ($i < count($all_states_list) - 1) : ?><span class="text-slate-600 mx-2">&middot;</span><?php endif; ?>
        <?php endforeach; ?>
      </p>
    </div>

    <!-- Disclaimer & Compliance -->
    <div class="pt-6 text-[11px] text-slate-400 leading-relaxed text-center sm:text-left">
      <p>
        <strong class="text-slate-300">Medical Disclaimer:</strong> Online MMJ Card connects patients with state-licensed physicians for medical cannabis evaluations in accordance with applicable state telehealth regulations. Website content is for informational purposes only and does not constitute medical advice. Recommendations are granted strictly at the evaluating physician's medical discretion.
      </p>
    </div>

  </div>
</footer>

<?php
/**
 * Critical SEO & Theme Hook:
 * wp_footer() called right before closing </body> for proper SEO scripts,
 * tracking, caching plugins, and Page Builder scripts.
 */
wp_footer();
?>
</body>
</html>
