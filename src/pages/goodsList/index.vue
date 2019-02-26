<template>
  <div class="goodsList-container">
    <van-nav-bar :title="title" left-text="返回" left-arrow @click-left="$router.go(-1)" fixed/>

    <scroller ref="sc" :on-infinite="infinite" noDataText="没有更多数据了" :snapping="true">
      <van-card
        :desc="'市场价: ¥'+item.price"
        :title="item.name"
        :thumb="item.cover_img"
        v-for="item in goodsList"
        :key="item.id"
        @click="goGoodsInfo(item.id)"
      />
    </scroller>
    <!-- <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-card
        :desc="'市场价: ¥'+item.price"
        :title="item.name"
        :thumb="item.cover_img"
        v-for="item in goodsList"
        :key="item.id"
        @click="goGoodsInfo(item.id)"
      />
    </van-list>
    -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.query.id,
      title: this.$route.query.title,
      page: 1,
      pageSize: 6,
      goodsList: [],
      list: [],
      loading: false,
      finished: false,
      offset: 100
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
          // console.log(result.data.data.goods)
          this.goodsList = result.data.data.goods;
        })
        .catch(error => {
          console.dir(error);
        });
    },
    onLoad() {
      // console.log("出发了");
      // this.loading = true
      // this.page++
      // this.getGoodsList()
      // this.goodsList = this.goodsList.concat(this.goodsList)
      // this.loading = false
      // this.page++
      // setTimeout(() => {
      //   // this.getGoodsList();
      //   // this.goodsList = this.goodsList.concat(this.goodsList)
      //   // 加载状态结束
      //   this.loading = false;
      //   // 数据全部加载完成
      //   if (this.goodsList.length >= 20) {
      //     this.finished = true;
      //   }
      // }, 500)
      // this.loading = false;
      // console.log('触发了事件');
      // this.page++
      // this.getGoodsList()
      // this.goodsList = this.goodsList.concat(this.goodsList)
      // console.log(this.goodsList);
      // 加载状态结束
      // this.loading = false;
      // 数据全部加载完成
      // if (this.list.length >= 40) {
      //   this.finished = true;
      // }
    },
    goGoodsInfo(id) {
      this.$router.push("/classify/goodsInfo/" + id);
    },
    infinite() {
      // console.log("我在上拉加载")
      setTimeout(() => {
        // console.log("我在上拉加载")
        this.page++;
        this.$http
          .get("/goods/getGoodsList", {
            params: {
              cateId: this.id,
              page: this.page,
              pageSize: this.pageSize
            }
          })
          .then(result => {
            // console.log(result.data.data.goods)
            this.goodsList = this.goodsList.concat(result.data.data.goods);
          })
      }, 1500);
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
  ._v-content {
    margin-top: 46px;
    padding-bottom: 50px;
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
