window.tainacan_extra_components = typeof window.tainacan_extra_components != "undefined" ? window.tainacan_extra_components : {};

const TainacanMetadataTypeCustom = {
    name: "TainacanMetadataTypeCustom",
    props: {
        itemMetadatum: Object,
        value: [String, Number, Array],
        disabled: false,
    },
    methods: {
        onInput: function(value) {
            this.$emit('input', value);
        },
        onBlur: function() {
            this.$emit('blur');
        }
    },
    template: `
    <b-input
            :disabled="disabled"
            :id="itemMetadatum.metadatum.metadata_type_object.component + '-' + itemMetadatum.metadatum.slug"
            :value="value"
            @input="onInput($event)"
            @blur="onBlur"
            type="number"
            lang="en"/>
    `
}

window.tainacan_extra_components["tainacan-metadata-type-custom"] = TainacanMetadataTypeCustom;
