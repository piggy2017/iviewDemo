<template>
    <div class="drag">
        <Table ref="dragable"  :columns="columnsList" :data="value" border></Table>
    </div>
</template>
<script>
    import Sortable from 'Sortablejs'
    export default {
        name:'dragtable',
        props:{
            columnsList:Array,
            value:Array
        },
        methods:{
            startFunc(e){
                console.log(e);
                this.$emit("on-start",e.oldIndex)
            },
            endFunc(e){
                console.log(e);
                let movedRow = this.value[e.oldIndex];
                this.value.splice(e.oldIndex, 1);
                this.value.splice(e.newIndex, 0, movedRow);
                this.$emit("on-end",{
                    value:this.value,
                    from:e.oldIndex,
                    to:e.newIndex
                })
                console.log(this.value)
            },
            chooseFunc (e) {
                this.$emit('on-choose', e.oldIndex);
            }
        },
        mounted(){
            var el=this.$refs.dragable.$children[1].$el.children[1];
            console.log(this.$refs.dragable.$children[1]);
            console.log(this.$refs.dragable.$children[1].$el);
            console.log(el);
            let vm=this;
            Sortable.create(el,{
                onStart:vm.startFunc,
                onEnd:vm.endFunc,
                onChoose:vm.chooseFunc
            })
        }
    }
</script>
<style>

</style>
