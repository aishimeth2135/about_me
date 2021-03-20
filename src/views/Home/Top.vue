<template>
  <MainContainer v-bind="containerData">
    <section class="top">
      <div class="info">
        <div class="container-1">
          <div class="title">
            <span>陳子蓁</span>
          </div>
          <div class="summary">
            自學了四年的網頁前端程式設計，喜歡把腦中的介面用程式做出來的感覺。
            <br />熟悉Javascript及CSS，主要學習的前端框架為Vue.js。
            <br />目前有製作一個較大型的工具型網站「Cy's Grimoire」，常態使用人數約一千四百人。
          </div>
          <div class="content">
            <div v-for="p in introduction" :key="p.id" class="item">
              <cy-icon-text :iconify-name="p.icon">
                {{ p.value }}
              </cy-icon-text>
            </div>
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
            <a href="https://drive.google.com/drive/folders/1BVMmaIQF2rd9G9jrqt0TueKK93yWdV4U?usp=sharing"
              target="_blank">
              <cy-icon-text iconify-name="bx-bx-link-external" text-color="light-3">
                其他檔案
              </cy-icon-text>
            </a>
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
      ]
    };
  },
  components: {
    MainContainer: vue_MainContainer
  }
}
</script>

<style lang="less" scoped>
.top {
  // background-color: rgba(var(--rgb-primary-light), 0.1);
  background-image: url(/imgs/bg.png);
  padding: 1.5rem 1.2rem;
  margin-bottom: 1.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.info {
  padding: 1rem 0;
}

.summary {
  margin-top: 1.2rem;
  margin-bottom: 1.8rem;
  padding: 0 0.6rem;
}

.link {
  margin-top: 1.2rem;
  padding: 0 0.6rem;

  > a + a {
    margin-left: 0.8rem;
  }
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: 1s ease;
}
.fade-enter-to, .fade-leave {
  opacity: 1;
}
</style>