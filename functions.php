<?php

function vue_wordpress_enqueue_assets() {
    // Path to the assets JSON file (manifest)
		$jsPath = get_template_directory() . '/dist/js'; // Replace with your folder path

		// Get all files and directories
		$jsfiles = scandir($jsPath);

		// Filter out '.' and '..' from the result
		$jsfiles = array_diff($jsfiles, array('.', '..'));
        // Check if assets were loaded successfully
        if (is_array($jsfiles)) {
            // Loop through the assets and enqueue them
            foreach ($jsfiles as $file => $path) {
                // Enqueue JavaScript files
                if (strpos($path, '.js') !== false && strpos($path, '.map') === false) {
					$handle = 'vue-wordpress-' . basename($path, '.js'); // Handle with file name

                    wp_enqueue_script(
                        $handle, // Handle with file name
                        get_template_directory_uri() .'/dist/js/'. $path, // File URL
                        array(), // No dependencies
                        null, // No versioning
                        true // Load in footer
                    );
					wp_script_add_data($handle, 'type', 'module');
                }
            }
        }


		$folderPath = get_template_directory() . '/dist/css'; // Replace with your folder path

		// Get all files and directories
		$files = scandir($folderPath);

		// Filter out '.' and '..' from the result
		$files = array_diff($files, array('.', '..'));
        // Check if assets were loaded successfully
        if (is_array($files)) {
            // Loop through the assets and enqueue them
            foreach ($files as $file => $path) {
                // Enqueue CSS files
                if (strpos($path, '.css') !== false) {
                    wp_enqueue_style(
                        'vue-wordpress-' . basename($path, '.css'), // Handle with file name
                        get_template_directory_uri() .'/dist/css/'. $path, // File URL
                        array(), // No dependencies
                        null // No versioning
                    );
                }
            }
        }
}
add_action('wp_enqueue_scripts', 'vue_wordpress_enqueue_assets');

function custom_rewrite_rules() {
    add_rewrite_rule('^page/([^/]*)/?', 'index.php?pagename=$matches[1]', 'top');
}
add_action('init', 'custom_rewrite_rules');

function custom_page_permalink($post_link, $post) {
	if (is_int($post)) {
        $post = get_post($post); // Retrieve the full post object
    }

    // Ensure we are dealing with a page
    if ($post && $post->post_type == 'page') {
        return home_url('/page/' . $post->post_name);
    }
    return $post_link;
}
add_filter('page_link', 'custom_page_permalink', 10, 2);

add_filter('jetpack_sitemap_post_types', 'custom_jetpack_sitemap_post_types' );

function custom_jetpack_sitemap_post_types( $post_types ) {
    // Add multiple custom post types
    $custom_types = ['riddle', 'definition', 'nanogram'];

    // Merge custom types into the existing post types array
    $post_types = array_merge( $post_types, $custom_types );

    return $post_types;
}





function register_yoast_meta() {
    // Define an array of meta keys to register
    $meta_keys = array(
        '_yoast_wpseo_focuskw' => 'Yoast Focus Keyword',
        '_yoast_wpseo_metadesc' => 'Yoast Meta Description',
        '_yoast_wpseo_title' => 'Yoast SEO Title',
        '_yoast_wpseo_schema_article_type' => 'Yoast Schema Article Type',
        '_yoast_wpseo_opengraph_title' => 'Yoast OpenGraph Title',
        '_yoast_wpseo_opengraph_description' => 'Yoast OpenGraph Description',
        '_yoast_wpseo_twitter_title' => 'Yoast Twitter Title',
        '_yoast_wpseo_twitter_description' => 'Yoast Twitter Description',
        '_yoast_wpseo_canonical' => 'Yoast Canonical URL',
    );

    // Register metadata for both 'definition' and 'riddle' post types
    $post_types = array('definition', 'riddle');  // Add other post types as needed

    foreach ($post_types as $post_type) {
        foreach ($meta_keys as $meta_key => $description) {
            register_post_meta($post_type, $meta_key, array(
                'type'         => 'string',
                'description'  => $description,
                'single'       => true,
                'show_in_rest' => true,  // Makes it accessible via REST API
                'auth_callback' => function() {
                    return current_user_can('edit_posts'); // Permission check
                }
            ));
        }
    }
}
add_action('init', 'register_yoast_meta');


// add_action('init', 'definition_publicize'); function definition_publicize() { add_post_type_support('definition', 'publicize');  add_post_type_support('definition', 'thumbnail');}
add_action('init', 'riddle_publicize'); function riddle_publicize() { add_post_type_support('riddle', 'publicize');  add_post_type_support('definition', 'thumbnail');}

add_theme_support('post-thumbnails');
