<template>
  <div class="newsList-container">
    <van-tabs @click="onClick">
      <van-tab title="精简">
        <ul>
          <li>
            <img
              src="https://m.360buyimg.com/mobilecms/s460x300_jfs/t1/28118/39/1575/79082/5c134fd0E1e067eba/9326c61dd9220629.jpg!q70.jpg"
              alt
            >
            <div>
              <p>标题</p>
              <p>
                <span>时间</span>
                <span>点击1111次数</span>
              </p>
            </div>
          </li>
          <li>
            <img
              src="https://m.360buyimg.com/mobilecms/s460x300_jfs/t1/28118/39/1575/79082/5c134fd0E1e067eba/9326c61dd9220629.jpg!q70.jpg"
              alt
            >
            <div>
              <p>标题</p>
              <p>
                <span>时间</span>
                <span>点击1111次数</span>
              </p>
            </div>
          </li>
        </ul>
      </van-tab>
      <van-tab title="手机">内容 2</van-tab>
      <van-tab title="家居">内容 2</van-tab>
      <van-tab title="美食">内容 2</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  methods: {
    onClick(index, title) {
      this.$toast(title);
    }
  }
};
</script>
<style lang="less" scoped>
.newsList-container{
  display: flex;
  justify-content: space-between;
  img{
    width: 100%;
  }
}
</style>
