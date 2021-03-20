<template>
  <MainContainer v-bind="containerData">
    <section class="column autobiography">
      <div class="container-1">
        <div class="title">個人特質</div>
        <div class="content">
          我的個性較為隨和，樂於嘗試及挑戰新事物，喜歡不斷學習新東西及尋求加快工作效率的方法。我的話不多，但善於傾聽，面對問題時習慣先理性的分析再做出選擇。我平時的行事作風較為隨性一點，但我只要開始做一件事情時就可以非常認真，不會因為私人感情就隨便應付任何事情。
        </div>
      </div>
      <div class="container-1">
        <div class="title">自學的歷程與經驗</div>
        <div class="content">
          <p>
            我自學了四年的網頁前端程式設計，有一個投注許多心力的自製網頁，這個自製網頁也是我的自學過程中不斷學習新東西的出發點。
          </p>
          <p>
            我從小就喜歡創作東西，從小時候上課時的手工藝，到長大後的繪畫、寫詩、寫小說及分享教學型文章等。寫程式對我來說也是一種創作，寫網頁對我來說就像繪畫一樣，只是工具從筆變成了電腦。
          </p>
          <p>
            我的高中在高一時有程式設計方面的課程，這也是我第一次接觸到寫程式。該堂課的老師教的是VB，VB是先有使用者介面才開始寫程式，這點我認為跟網頁有點像，應該也是我產生濃厚興趣的原因。
            <br />這名老師他有自己特殊的評分方式，而我在某一次的作業中拿到了最高分，也是全班唯一一位，期末也拿到了最高分99分的成績。當時我沒有自己的電腦，只能帶著USB，每天午休時間到電腦教室撰寫程式。
          </p>

          <p>
            大學後因緣際會下開始自學網頁程式設計，從大一開始每天的空堂及晚上的自由時間，我都拿來學習及撰寫程式。
            <br />我的自製網頁成為了我學習用的工具，每當想到一個新的功能，就開始到處尋找資料並嘗試把它做出來，成功做出來後又再思索下一個新功能，不斷重複這樣的過程。
            <br />在這樣的過程中，我不斷累積經驗，從一開始只是想把某些功能做出來，到後來開始思索如何優化我的程式，讓程式碼更易於維護，思考如何改善我的使用者介面，讓使用者有更好的體驗。
            <br />我的自製網頁歷經了無數次的更新，在這過程中也不斷吸收使用者的反饋並嘗試去改善，才成了現在看到的樣子。
          </p>
          <p>
            由於自學網頁帶來的能力與經驗，使我在學習與程式語言相關的新東西時能夠很快速地上手，讓我無論在課業、專題還是實驗室的計劃上，都能夠更快步入軌道。
          </p>
        </div>
      </div>
      <div class="container-1">
        <div class="title">展望</div>
        <div class="content">
          我認為我目前於網頁前端程式設計的經驗與能力，已經足以應付各種使用者的需求，我也將持續在這方面精進自己的能力。希望未來的工作可以在相關領域發揮我的能力。
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
.autobiography {
  padding-left: 4rem!important;
  position: relative;

  &::before {
    content: '';
      display: inline-block;
      height: calc(100% - 1.7rem);
      width: 0.2rem;
      border-radius: 0.1rem;
      position: absolute;
      left: 1.5rem;
      top: 1.7rem;
      background-color: var(--primary-light);
  }

  > .container-1 > .title {
    position: relative;

    &::before {
      content: '';
      display: inline-block;
      height: 0.8rem;
      width: 0.8rem;
      border-radius: 50%;
      position: absolute;
      left: -2.8rem;
      top: calc(50% - 0.4rem);
      background-color: var(--primary-light);
    }
  }
}
</style>