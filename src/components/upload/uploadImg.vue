<template>
    <div class="uploadImg">
        <div>
            <div class="img-bg">
                <input type="file" v-on:change="choose" class="multiple">
            </div>
            <div class="image-box" v-for="(item ,index) in imgItems">
                <div class="close-img" v-on:click="deleteI(index)">
                    <Icon type="close-circled" size="24" v-bind:key="item" ></Icon>
                </div>
                <img v-bind:src="item" alt="">
            </div>
        </div>
       <div class="postImg">
           <Button type="primary">提交</Button>
       </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                imgList:[],
                imgItems:[]
            }
        },
        methods:{
            choose(e){
                console.log(e);
                let Files=e.target.files;
                this.imgList.push(Files);
                let len=this.imgList.length;
                console.log(this.imgList);
                for(let i=0;i< len;i++){
                    console.log( this.imgList[i][0])
                    this.ImgToBase64(this.imgList[i][0],(base64)=>{
                        if(this.imgItems.indexOf(base64)==-1){
                            this.imgItems.push(base64);
                            console.log(this.imgItems)
                        }
                    })
                }
            },
            ImgToBase64(file, callBack){
                let img = new Image();
                let reader = new FileReader();//读取客户端上的文件
                reader.onload = function () {
                    let url = reader.result;//读取到的文件内容.这个属性只在读取操作完成之后才有效,并且数据的格式取决于读取操作是由哪个方法发起的.所以必须使用reader.onload，
                    img.src = url;//reader读取的文件内容是base64,利用这个url就能实现上传前预览图片
                };
                img.onload = function () {
                    //生成canvas
                    let canvas = document.createElement("canvas");
                    let ctx = canvas.getContext("2d");
                    canvas.width = img.width;
                    canvas.height = img.height;
                    ctx.drawImage(img, 0, 0, img.width, img.height);
                    let base64 = canvas.toDataURL('image/jpeg', 0.9);
                    callBack(base64);
                };
                reader.readAsDataURL(file);
            },
            deleteI(num){
                console.log(num);
                this.imgList.splice(num,1);
                this.imgItems.splice(num,1);
            }
        }
    }
</script>
<style>
.uploadImg{
    width: 100%;
    height: 100%;
    padding: 10px;
    background-color: #fff;
    overflow: auto;
}
.postImg{
    margin-top: 20px;
}
.img-bg{
    width: 200px;
    height: 200px;
    display: inline-block;
    background-image: url(../../assets/phote.png);
    background-repeat: no-repeat;
    background-size: cover;
    vertical-align: top;
}
.multiple{
    width: 200px;
    height: 200px;
    opacity: 0;
}
    .image-box{
        width: 200px;
        height: 200px;
        display: inline-block;
        margin-left: 20px;
        vertical-align: top;
        position: relative;
    }
    .image-box img{
        width: 100%;
        height: 100%;
        border: none;
    }
    .close-img{
        position: absolute;
        right: 0;
        top: 0;
        width: 25px;
        height: 25px;
        z-index: 9999;
    }
</style>
