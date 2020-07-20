<?php

/**
 * Class Custom_Metadata_Type
 * This is inside "metadata_type/metadata-type.php"
 */
class Custom_Metadata_Type extends \Tainacan\Metadata_Types\Metadata_Type {

    function __construct() {

        parent::__construct();

        // Basic options
        $this->set_name( __('Custom Metadata Type', 'custom-metadata-type') );
        $this->set_description( __('A numeric value, integer or float', 'custom-metadata-type') );
        $this->set_primitive_type(['float']);
        $this->set_component('tainacan-metadata-type-custom');
        $this->set_preview_template('
            <div>
                <div class="control is-clearfix">
                    <input type="number" placeholder="3,1415" class="input">
                </div>
            </div>
        ');

        // For custom Metadata Type Options
        $this->set_form_component('tainacan-metadata-form-type-custom');
        $this->set_default_options([
            'step' => 1
        ]);
    }
    
    public function get_form_labels(){
        return [
            'step' => [
                'title' => __( 'Step', 'tainacan' ),
                'description' => __( 'The amount to be increased or decreased when clicking on filter control buttons.', 'tainacan' ),
            ]
        ];
    }
    
    public function validate_options( \Tainacan\Entities\Metadatum $metadatum ) {

        $option = $this->get_option('step');

        if (is_numeric($option)) { // Or any other validation condition
            return true; // validated!
        } else {
            return ['step' => __('The option "step" is invald. Must be a number!', 'custom-metadata-type')];
        }
    }
}
?>
