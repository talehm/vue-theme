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
