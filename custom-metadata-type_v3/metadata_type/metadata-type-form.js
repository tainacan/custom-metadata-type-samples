window.tainacan_extra_components = typeof window.tainacan_extra_components != "undefined" ? window.tainacan_extra_components : {};

const TainacanMetadataFormCustomType = {
    name: "TainacanMetadataFormTypeCustom",
    props: {
        value: [String, Number, Array]
    },
    data: function() {
        return {
            step: [Number, String],
            showEditStepOptions: false
        }
    },
    created: function() {
        this.step = this.value && this.value.step ? this.value.step : 1;
    },
    methods: {
        onUpdateStep: function(value) {
            this.$emit('input', { step: value });
        },
    },
    template: `
    <div>
        <b-field :addons="false">
            <label class="label is-inline">
                {{ $i18n.getHelperTitle('tainacan-filter-numeric', 'step') }}<span>&nbsp;*&nbsp;</span>
                <help-button
                        :title="$i18n.getHelperTitle('tainacan-filter-numeric', 'step')"
                        :message="$i18n.getHelperMessage('tainacan-filter-numeric', 'step')"/>
            </label>
            <div
                    v-if="!showEditStepOptions"
                    class="is-flex">
                <b-select
                        name="step_options"
                        v-model="step"
                        @input="onUpdateStep">
                    <option value="0.001">0.001</option>
                    <option value="0.01">0.01</option>
                    <option value="0.1">0.1</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="100">100</option>
                    <option value="1000">1000</option>
                    <option
                            v-if="step && ![0.001,0.01,0.1,1,2,5,10,100,1000].find( function(element) { return element == step })"
                            :value="step">
                        {{ step }}</option>
                </b-select>
                <button
                        class="button is-white is-pulled-right"
                        :aria-label="$i18n.get('edit')"
                        @click.prevent="showEditStepOptions = true">
                    <span
                            v-tooltip="{
                                content: $i18n.get('edit'),
                                autoHide: true,
                                placement: 'bottom'
                            }"
                            class="icon">
                        <i class="tainacan-icon tainacan-icon-18px tainacan-icon-edit has-text-secondary"/>
                    </span>
                </button>
            </div>
            <div
                    v-if="showEditStepOptions"
                    class="is-flex">
                <b-input
                        name="max_options"
                        v-model="step"
                        @input="onUpdateStep"
                        type="number"
                        step="1" />
                <button
                        @click.prevent="showEditStepOptions = false"
                        class="button is-white is-pulled-right">
                    <span
                            v-tooltip="{
                                content: $i18n.get('close'),
                                autoHide: true,
                                placement: 'bottom'
                            }"
                            class="icon">
                        <i class="tainacan-icon tainacan-icon-18px tainacan-icon-close has-text-secondary"/>
                    </span>
                </button>
            </div>
        </b-field>
    </div>
    `
}
window.tainacan_extra_components["tainacan-metadata-form-type-custom"] = TainacanMetadataFormCustomType;
