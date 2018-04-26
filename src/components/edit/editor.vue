<template>
    <div class="edit">
        <VmEditor width="950px"
                  height="400px"
                  @upload="showHtml">
        </VmEditor>
    </div>
</template>
<script>
    import VmEditor from 'vm-editor'
    export default {
        components:{
            VmEditor
        },
        methods:{
            showHtml(data){
                console.log(data);
            }
        }
    }
</script>
<style>
.edit{
    width: 100%;
    height: 100%;
    padding: 10px;
    background-color: #fff;
    overflow: auto;
}
</style>
