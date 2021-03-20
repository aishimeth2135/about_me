<template>
  <MainContainer v-bind="containerData">
    <section class="column works">
      <div class="content-top">
        <div class="left">
          <div class="container-1">
            <div class="title">
              <span>Cy's Grimoire</span>
            </div>
            <div class="content">
              此網站為針對一款MMORPG類型的手機遊戲「Toram Online」製作的工具型網站，裡面包含該遊戲各種資料的查詢及各種系統的模擬器。 該網站的所有程式及介面設計皆由我獨力完成。
            </div>
          </div>
        </div>
        <div class="right">
          <img src="imgs/achievement_img1.jpg">
        </div>
      </div>
      <div class="content">
        <div class="container-1">
          <div class="title">
            <span>特色</span>
          </div>
          <div class="content items">
            <div class="item">多頁面應用程式。</div>
            <div class="item">有多種模擬遊戲內系統的模擬器。</div>
            <div class="item">支援PWA。</div>
            <div class="item">支援完全的離線瀏覽。</div>
            <div class="item">串接API，以Google試算表作為資料庫，讓玩家參與資料的輸入。</div>
            <div class="item">直接聽取來自使用者的意見，持續進行更新及優化。</div>
            <div class="item">可支援多國語言的系統。</div>
          </div>
        </div>
        <div class="container-1">
          <div class="title">
            <span>狀態</span>
          </div>
          <div class="content items">
            目前常態使用人數約一千四百人，週瀏覽量約一萬七千。其中包含台灣、中國及馬來西亞等世界各地的玩家。
          </div>
        </div>
      </div>
    </section>
  </MainContainer>
</template>

<script>
import vue_MainContainer from "./components/MainContainer.vue";

export default {
  props: ['containerData'],
  components: {
    MainContainer: vue_MainContainer
  }
}
</script>

<style lang="less" scoped>
.works {
  > .content-top {
    display: flex;
    align-items: flex-start;
    margin-bottom: 0.8rem;

    @media screen and (max-width: 40rem) {
      flex-wrap: wrap;
    }

    > .right {
      width: 20rem;
      margin-left: 1rem;
      flex-shrink: 0;

      > img {
        width: 100%;
        margin-top: 1.2rem;
      }
    }
  }
}
</style>