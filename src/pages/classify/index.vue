<template>
  <div class="classify-container">
    <van-tabs @click="getList">
      <van-tab :title="item.name" v-for="item in goodsCategories" :key="item.id">
        <div class="goodsList">
          <router-link tag="div" class="goods" v-for="item in goodsSubCategories" :key="item.id" :to="'/classify/goodsList?id='+item.id+'&'+'title='+item.name ">
            <img :src="item.img">
            <p>{{item.name}}</p>
          </router-link>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goodsCategories: [],
      goodsSubCategories: []
    };
  },
  created() {
    this.getGoodsCategories();
  },
  methods: {
    //获取列表点击事件
    getList(index) {
      let id = this.goodsCategories[index].id;
      this.getGoodsSubCategories(id);
    },
    //获取一级分类以及第一个分类项列表
    getGoodsCategories() {
      this.$http
        .get("/goods/getGoodsCategories")
        .then(result => {
          // console.log(result.data)
          if (result.data.status === 200) {
            this.goodsCategories = result.data.data;
            return this.$http.get(
              "/goods/getGoodsSubCategories/" + this.goodsCategories[0].id
            );
          }
        })
        .then(result => {
          this.goodsSubCategories = result.data.data;
        });
    },
    //根据id获取二级分类
    getGoodsSubCategories(id) {
      this.$http.get("/goods/getGoodsSubCategories/" + id).then(result => {
        // console.log(result)
        this.goodsSubCategories = result.data.data;
      });
    }
  }
};
</script>
<style lang="less">
.classify-container {
    .van-tabs__wrap{
        position: fixed;
    }
  .goodsList {
    padding: 10px 30px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .goods {
      border: 1px solid #eaeaea;
      box-shadow: 0 0 5px #eaeaea;
      text-align: center;
      margin-bottom: 20px;
      img {
        width: 100%;
        display: block;
      }
      p{
          margin:10px 0;
      }
    }
  }
}
</style>
