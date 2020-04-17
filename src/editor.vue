<template>
    <div :id="id">

    </div>

</template>

<script>

    import EditorJS from '@editorjs/editorjs';

    export default {
        props: {

            id: {
                type: String,
                default: () => {
                    return 'v-editor-' + Math.random().toString(16).substr(2, 9);
                }
            },

            placeholder: {
                type: String,
                default: () => { return 'What\'s on your mind?' }
            },

            autofocus: {
                type: Boolean,
                default: () => false
            },

            value: {
                type: Object,
                default: () => { },
                required: false
            },

            tools: {
                type: Object,
                default: () => { },
                required: false
            }


        },

        data() {
            return {
                editor: null
            }
        },

        watch: {
            value(_new, _old) {
                // if (_new && _old && JSON.stringify(_new.blocks) != JSON.stringify(_old.blocks) && this.editor) {

                // this.editor.render(_new);
                //}                

                if (!this.__stated && this.editor) {
                    this.editor.render(_new);
                }
                this.__stated = false;
            }
        },

        mounted() {

            if (this.__rendered) return;

            this.editor = new EditorJS({
                holder: this.id,
                autofocus: this.autofocus,
                placeholder: this.placeholder,
                data: this.value,
                tools: this.tools,
                onReady: () => { this.$emit('ready') },
                onChange: (e) => {
                    
                    this.__stated = true;
                    this.editor.save().then(val => { this.$emit('input', val); });
                },

            });

            this.__rendered = true;

        },


        beforeDestroy() {
            if (this.editor) {
                this.editor.destroy();
                this.editor = null;
            }
        }

    }

</script>