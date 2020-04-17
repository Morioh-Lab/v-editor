<template>
    <div>
        <div class="container">

            <header>
                <h1>v-editor</h1>
                <h4>A rich-text editor component for Vue.js</h4>
            </header>

            <div class="form-group">                
                <v-editor ref="editor" v-model="value" :tools="tools" />
            </div>


            <div class="form-group">
                <textarea class="form-control h-500">{{value}}</textarea>
            </div>

            <div class="form-group">
                <button @click="val" class="btn btn-primary">Change</button>                

            </div>


        </div>


        <footer>

            <p>
                <a class="social-icon" href="https://github.com/nasa8x/v-editor" target="_blank">
                    <i class="fa-3x fab fa-github-square"></i>
                </a>

            </p>

            <p>Themed by <a href="http://on.morioh.net/96d5d36367" target="_blank">Morioh Theme</a><br>
                Made Love by <a href="https://morioh.com">Morioh</a>

            </p>


        </footer>

    </div>
</template>


<script>

    import Header from '@editorjs/header'
    import List from '@editorjs/list'
    import ImageTool from '@editorjs/image'
    import inlineCode from '@editorjs/inline-code'
    import embed from '@editorjs/embed'
    import quote from '@editorjs/quote'
    import marker from '@editorjs/marker'
    import code from '@editorjs/code'
    import link from '@editorjs/link'
    import delimiter from '@editorjs/delimiter'
    import raw from '@editorjs/raw'
    import table from '@editorjs/table'
    import warning from '@editorjs/warning'
    import paragraph from '@editorjs/paragraph'
    import checklist from '@editorjs/checklist'

    export default {
        data() {
            return {
                value: null,

                tools: {
                    header: {
                        class: Header,
                        config: {
                            placeholder: 'Enter a header'
                        }
                    },
                    list: {
                        class: List,
                    },
                    code: {
                        class: code,
                    },
                    inlineCode: {
                        class: inlineCode,
                    },
                    embed: {
                        class: embed,
                    },
                    link: {
                        class: link,
                    },
                    marker: {
                        class: marker,
                    },
                    table: {
                        class: table,
                    },
                    raw: {
                        class: raw,
                    },
                    delimiter: {
                        class: delimiter,
                    },
                    quote: {
                        class: quote,
                    },
                    image: {
                        class: ImageTool,
                    },
                    warning: {
                        class: warning,
                    },
                    paragraph: {
                        class: paragraph,
                    },
                    checklist: {
                        class: checklist,
                    },
                }


            }
        },

        methods: {
            val() {
                this.value = JSON.parse('{"time":1558356864490,"blocks":[{"type":"paragraph","data":{"text":"First text"}},{"type":"paragraph","data":{"text":"Second text"}}],"version":"2.13"}')
            },



            onReady() {
                console.log('editor are ready')
            },


        },

        mounted() {
            this.initData = JSON.parse('{"time":1558356864490,"blocks":[{"type":"paragraph","data":{"text":"First text"}},{"type":"paragraph","data":{"text":"Second text"}}],"version":"2.13"}')
        },


        created() {


        }


    }

</script>