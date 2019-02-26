<template>
  <div class="goodsInfo-container">
    <van-nav-bar
      :title="goodsInfo.name"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
      fixed
    />
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in goodsInfo.big_img" :key="item.id">
        <img :src="item" @click="imgPreview(index)">
      </van-swipe-item>
    </van-swipe>
    <div class="goodsInfo">
      <div class="name">商品名称:
        <span>{{goodsInfo.name}}</span>
      </div>
      <div class="price">商品价格:
        <span>¥{{goodsInfo.price}}</span>
      </div>
      <div class="shopNum">
        <span>购买数量:</span>
        <div class="checkNum">
          <input type="button" value="-" @click="subtract" :disabled="count == 1">
          <input type="text" v-model="count">
          <input type="button" value="+" @click="add" :disabled="count == goodsInfo.sale_count">
        </div>
      </div>
      <div class="desc">商品描述:{{goodsInfo.description}}</div>
      <div class="descInfo">
        <p>商品详情:</p>
        <div v-html="goodsInfo.content" class="goodsCon"></div>
      </div>
    </div>
    <van-goods-action>
      <van-goods-action-mini-btn icon="chat-o" text="客服"/>
      <van-goods-action-mini-btn info="0" icon="cart-o" text="购物车" id="badge"/>
      <van-goods-action-big-btn text="加入购物车" @click="addToShop"/>
      <van-goods-action-big-btn primary text="立即购买"/>
    </van-goods-action>
  </div>
</template>
<script>
import { ImagePreview } from "vant";
export default {
  data() {
    return {
      id: this.$route.params.id,
      goodsInfo: {},
      count:1,
      disable:false
    };
  },
  created() {
    // console.log(this.id);
    this.getImg();
  },
  methods: {
    imgPreview(i) {
      ImagePreview({
        images: this.goodsInfo.big_img,
        startPosition: i
      });
    },
    getImg() {
      this.$http.get("/goods/getGoodsInfo/" + this.id).then(result => {
        console.log(result);
        this.goodsInfo = result.data.data;
      });
    },
    subtract(){
      this.count--
      if(this.count <= 1){
        this.count = 1
      }
    },
    add(){
      this.count++
      if(this.count > this.goodsInfo.sale_count){
        this.count = this.goodsInfo.sale_count
      }
    },
    addToShop(){
      this.$store.commit("addCar",{
        id:this.id,
        count:this.count
      })
      let token = localStorage.getItem('token') || ''
      if(token){
        this.$http.post("/cart/postGoodsToCart/"+this.id,{
          header:{
            Authorization:token
          },
          params:{
            id:this.id,
            count:this.count
          }
        }).then(result=>{
          console.log(result);
        })
      }else{
        this.$router.push("/my/login")
      }
    },
    
  }
};
</script>
<style lang="less">
.goodsInfo-container {
  .bg{
    background-color: red;
  }
  .van-goods-action{
    z-index: 99;
  }
  .van-swipe-item {
    margin-top: 46px;
    img {
      height: 250px;
      width: 100%;
    }
  }
  .goodsInfo {
    padding: 10px;
    .name {
      span {
        margin-left: 10px;
        font-size: 20px;
      }
    }
    .price {
      margin: 10px 0;
      span {
        color: red;
        font-size: 24px;
      }
    }
    .shopNum {
      display: flex;
      align-items: center;
      margin: 10px 0;
      .checkNum {
        display: flex;
        height: 30px;
        margin-left: 20px;
        input {
          width: 30px;
          padding: 0;
          margin: 0;
          text-align: center;
            border:1px solid #ccc;
            border-left:none;
            border-right:none;
          &[type="button"] {
            outline: none;
            background-color: #fff;
            border:none;
            border:1px solid #ccc;
          }
        }
      }
    }
    .descInfo {
      p {
        margin: 10px 0;
      }
      .goodsCon {
        img {
          width: 100%;
        }
      }
    }
    
  }
}
</style>
