<template>
  <article>
    <div class="nav">
      <CircleTitle :icon="currentTitleData.icon" :key="currentTitleData.id">
        {{ currentTitleData.title }}
      </CircleTitle>
    </div>
    <section class="top" data-id="0">
      <div class="info">
        <div class="container-1">
          <div class="title">
            <span>陳子蓁</span>
          </div>
          <div class="content">
            <div v-for="p in introduction" :key="p.id" class="item">
              <cy-icon-text :iconify-name="p.icon">
                {{ p.value }}
              </cy-icon-text>
            </div>
          </div>
          <div class="summary">
            自學了四年的網頁前端程式設計，喜歡把腦中的介面用程式做出來的感覺。
            <br />熟悉Javascript及CSS，主要學習的前端框架為Vue.js。
            <br />目前有製作一個較大型的工具型網站「Cy's Grimoire」，常態使用人數約一千四百人。
          </div>
          <div class="link">
            <a href="https://github.com/aishimeth2135" target="_blank" class="left-icon">
              <cy-icon-text iconify-name="ant-design:github-filled" text-color="light-3">
                GitHub
              </cy-icon-text>
            </a>
            <a href="https://cy-grimoire.netlify.app/" target="_blank">
              <cy-icon-text iconify-name="bx-bx-link-external" text-color="light-3">
                Cy's Grimoire
              </cy-icon-text>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section class="column autobiography" data-id="1">
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
    <cy-hr />
    <section class="column exp" data-id="2">
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
    <cy-hr />
    <section class="column works" data-id="3">
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
            <div class="item">基於多頁面應用程式、單一頁面多模組的系統架構設計。</div>
            <div class="item">有多種模擬遊戲內系統的模擬器。</div>
            <div class="item">支援PWA。</div>
            <div class="item">支援完全的離線瀏覽。</div>
            <div class="item">以Google試算表作為資料庫，讓玩家參與資料的輸入。</div>
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
  </article>
</template>

<script>
import CircleTitle from "./CircleTitle.vue";

export default {
  data() {
    return {
      introduction: [
        {
          id: 'status',
          value: '男、23歲、役畢',
          icon: 'bx-bxs-user'
        },
        {
          id: 'school',
          value: '國立聯合大學－資訊工程學系',
          icon: 'ic-baseline-school'
        },
        {
          id: 'phone',
          value: '0978-586-369',
          icon: 'ant-design:phone-filled'
        }, {
          id: 'email',
          value: 'aishimeth2135@gmail.com',
          icon: 'ic-round-email'
        }
      ],
      currentTitleData: {
        title: '',
        icon: ''
      },
      titleData: [
        {
          id: 0,
          title: '簡介',
          icon: 'bx-bxs-user-detail'
        },
        {
          id: 1,
          title: '自傳',
          icon: 'bx-bxs-book-bookmark'
        },
        {
          id: 2,
          title: '經驗',
          icon: 'ic-baseline-web-asset'
        },
        {
          id: 3,
          title: '作品',
          icon: 'ic-baseline-web-asset'
        }
      ]
    }
  },
  mounted() {
    const self = this;
    const els = this.$el.querySelectorAll('section');

    const options = {
      threshold: [0, 0.25, 0.5, 0.75, 1]
    };
    const callback = function(entries) {
      console.log(entries);
      const t = entries
        .sort((a, b) => {
          const r = b.intersectionRatio  - a.intersectionRatio;
          if (r == 0)
            return a.boundingClientRect.top - b.boundingClientRect.top;
          return r;
        })[0];
      if (t.intersectionRatio > 0.5) {
        const id = parseInt(t.target.getAttribute('data-id'), 10);
        self.currentTitleData = self.titleData.find(p => p.id == id);
      }
    };
    const observer = new IntersectionObserver(callback, options);
    Array.from(els).forEach(p => observer.observe(p));
  },
  components: {
    CircleTitle
  }
}
</script>

<style lang="less" scoped>
@deep: ~'>>>';

article {
  margin-bottom: 3rem;
}

.column {
  padding: 1.2rem;
  max-width: 50rem;
  margin: 0 auto;

  & + & {
    margin-top: 2rem;
  }
}

.container-1 {
  > .title {
    font-size: 1.1rem;
    border-bottom: 0.1rem solid var(--primary-light-4);
    padding: 0.1rem;
    padding-left: 0.8rem;
    margin-bottom: 0.8rem;
    font-weight: bold;

    display: flex;
    align-items: center;

    > .left-icon {
      margin-left: auto;
    }
  }

  > .content {
    padding-left: 0.4rem;

    > .item {

      & + & {
        margin-top: 0.2rem;
      }

      @{deep} .text {
        margin-left: 0.7rem;
      }
    }
  }

  & + & {
    margin-top: 1.4rem;
  }
}

.items {
  > .item {
    padding-left: 1rem;
    position: relative;

    & + .item {
      margin-top: 0.2rem;
    }

    &::before {
      content: '';
      display: inline-block;
      height: 0.3rem;
      width: 0.3rem;
      border-radius: 50%;
      position: absolute;
      left: 0;
      top: 0.2rem;
      background-color: var(--primary-light);
    }
  }
}

.nav {
  position: fixed;
  left: calc((100% - 60rem) * 2 / 9);
  top: 30%;

  @media screen and (max-width: 60rem) {
    opacity: 0;
  }
}

.top {
  background-color: rgba(var(--rgb-primary-light), 0.1);
  padding: 1.5rem 1.2rem;
  margin-bottom: 1.7rem;
  display: flex;
  justify-content: center;
}

.info {
  padding: 1rem 0;
}

.summary {
  margin-top: 1.2rem;
  padding: 0 0.6rem;
}

.link {
  margin-top: 1.2rem;
  padding: 0 0.6rem;

  > a + a {
    margin-left: 0.8rem;
  }
}

.autobiography {
  padding-left: 4rem;
  position: relative;

  &::before {
    content: '';
      display: inline-block;
      height: calc(100% - 1.5rem);
      width: 0.2rem;
      border-radius: 0.1rem;
      position: absolute;
      left: 1.5rem;
      top: 1.5rem;
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
      }
    }
  }
}
</style>