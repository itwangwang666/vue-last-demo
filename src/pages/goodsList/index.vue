<template>
  <div class="goodsList-container">
    <van-nav-bar :title="title" left-text="返回" left-arrow @click-left="$router.go(-1)" fixed="true"/>
    <div class="goodsList">
        <van-card
      :desc="'市场价: ¥'+item.price"
      :title="item.name"
      :thumb="item.cover_img"
      v-for="item in goodsList"
      :key="item.id"
    />
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.query.id,
      title: this.$route.query.title,
      page: 1,
      pageSize: 10,
      goodsList: []
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      this.$http
        .get("/goods/getGoodsList", {
          params: {
            cateId: this.id,
            page: this.page,
            pageSize: this.pageSize
          }
        })
        .then(result => {
          console.log(result.data.data.goods);
          this.goodsList = result.data.data.goods;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  watch: {
    $route(to, from) {
      console.log(to, from);
    }
  }
};
</script>
<style lang="less">
.goodsList-container {
    .goodsList{
        margin-top: 46px;
    }
  .van-card {
    background-color: #fff;
    .van-card__header {
      border: 1px solid #eaeaea;
      box-shadow: 0 0 5px #eaeaea;
      .van-card__title {
        margin-top: 20px;
      }
      .van-card__desc {
        color: red;
        font-weight: 400;
      }
    }
  }
}
</style>
