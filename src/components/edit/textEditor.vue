<template>
    <div class="textEditor">
        <!--<textarea id="tinymceEditer"></textarea>-->
    </div>
</template>
<script>
    import tinymce from 'tinymce';
    export default {
        methods:{
//            init(){
//                tinymce.init({
//                    selector: document.getElementById('tinymceEditer')
//                });
//            }
        },
        mounted(){
            //this.init();
            tinymce.init({
                selector: document.getElementById('tinymceEditer')
            });
        }
//        destroyed () {
//            tinymce.get('tinymceEditer').destroy();
//        }
    }
</script>
<style>
.textEditor{
    width: 100%;
    height: 100%;
    padding: 10px;
    background-color: #fff;
    overflow: auto;
}
</style>
