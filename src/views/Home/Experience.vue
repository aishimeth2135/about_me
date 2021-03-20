<template>
  <MainContainer v-bind="containerData">
    <section class="column exp">
      <fieldset class="exp-content half">
        <legend>
          <cy-icon-text iconify-name="ic-baseline-web-asset">
            網站前端
          </cy-icon-text>
        </legend>
        <div class="content items">
          <div class="item">Javascript、HTML5、CSS3</div>
          <div class="item">Node.js、Webpack</div>
          <div class="item">Vue.js</div>
          <div class="item">PWA</div>
          <div class="item">Service Worker</div>
          <div class="item">SVG、Canvas</div>
        </div>
      </fieldset>
      <fieldset class="exp-content half">
        <legend>
          <cy-icon-text iconify-name="akar-icons:cloud">
            後端伺服器
          </cy-icon-text>
        </legend>
        <div class="content items">
          <div class="item">Express (Node.js)</div>
          <div class="item">Flask (Python)</div>
        </div>
      </fieldset>
      <fieldset class="exp-content">
        <legend>
          <cy-icon-text iconify-name="bx-bx-message-rounded-dots">
            Line Bot、 Line Notify
          </cy-icon-text>
        </legend>
        <div class="content">
          使用Line Bot或Line Notify提供的API並撰寫相關的程式，來實現於Line推送通知的功能。
        </div>
      </fieldset>
      <fieldset class="exp-content">
        <legend>
          <cy-icon-text iconify-name="bx-bx-message-rounded-dots">
            影像跌倒偵測系統
          </cy-icon-text>
        </legend>
        <div class="content">
          使用深度學習搭配攝影機建立跌倒偵測系統。此系統會不斷接收攝影機傳來的影像，並利用深度學習訓練好的模型來判斷影像中的人員是否跌倒。判斷有人跌倒時，將發送通知給使用者。此系統也提供一個網頁端，提供使用者更改參數的圖形化介面。
          <br />此系統將跌倒偵測系統安裝於晶片上，並使用Express建立一個伺服器來當作發送通知及更改參數的中繼站，此伺服器也同時作為網頁端的後端伺服器。
        </div>
      </fieldset>
      <fieldset class="exp-content">
        <legend>
          <cy-icon-text iconify-name="clarity-video-camera-solid">
            學校實驗室：智慧居家
          </cy-icon-text>
        </legend>
        <div class="content items">
          <div class="item">
            在網頁端串接攝影機的串流API，來播放攝影機的即時畫面。
          </div>
          <div class="item">
            在網頁端串接相關API，使網頁端可以開關居家的電燈、電器等。
          </div>
          <div class="item">
            在網頁端串接室內定位系統的API，讓使用者在網頁上可以透過居家平面圖來查看成員的定位。
          </div>
          <div class="item">
            在網頁端串接相關API，來獲取生醫感測器的數據並繪製成圖表。
          </div>
          <div class="item">
            使用WebSocket讓伺服器與網頁前端溝通，建立可以即時訓練並辨識的人臉辨識系統。
          </div>
        </div>
      </fieldset>
      <fieldset class="exp-content">
        <legend>
          <cy-icon-text iconify-name="ic-baseline-web-asset">
            作業：努力積分
          </cy-icon-text>
        </legend>
        <div class="content">
          此系統提供一個網站，讓使用者可以建立群組或加入群組，群組管理員可以設定完成哪些目標可以獲得多少積分，群組成員則可以透過完成目標來獲得積分，群組內也會列出成員們的積分排名。
          <br />此系統讓群組內的成員可以透過累積積分並互相比較來獲得成就感，促進整個群組的成員能夠更有動力去完成某些目標。
          <br />此系統使用Vue.js+Express+MongoDB進行實作。
        </div>
      </fieldset>
      <fieldset class="exp-content">
        <legend>
          <cy-icon-text iconify-name="ph-share-network">
            無線感測網路—演算法模擬
          </cy-icon-text>
        </legend>
        <div class="content">
          使用Matlab撰寫程式來模擬並進行無線感測網路中幾種演算法的比較，以撰寫成論文。
          <br />此論文投稿到TANET2020台灣網際網路研討會。
        </div>
      </fieldset>
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
@deep: ~'>>>';

.exp {
  display: flex;
  flex-wrap: wrap;
  // align-items: flex-start;

  > .exp-content {
    border: 0.1rem solid var(--primary-light);
    border-radius: 0.3rem;
    margin: 0.6rem;
    width: 100%;

    &.half {
      max-width: 22.6rem;
    }

    > legend {
       font-weight: bold;
       padding: 0 0.8rem;

       @{deep} .text {
        font-size: 1.1rem;
       }
    }

    > .content {
      padding: 0.2rem 1rem;
    }
  }
}
</style>