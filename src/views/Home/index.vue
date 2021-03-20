<template>
  <article>
    <!-- <div class="nav">
      <CircleTitle :icon="currentTitleData.icon" :key="currentTitleData.id">
        {{ currentTitleData.title }}
      </CircleTitle>
    </div> -->
    <EnterBall v-if="start" @animation-done="start = false" />
    <template v-for="p in visibleContainers">
      <cy-hr v-if="p.hr" :key="p.id + '--hr'" />
      <component :is="p.component" :key="p.id"
        :container-data="containerData(p)">
      </component>
    </template>
  </article>
</template>

<script>
import vue_EnterBall from "./components/EnterBall.vue";

import vue_Top from "./Top.vue";
import vue_Autobiography from "./Autobiography.vue";
import vue_Experience from "./Experience.vue";
import vue_Works from "./Works.vue";

export default {
  data() {
    const containers = [
      {
        id: 0,
        title: '簡介',
        icon: 'bx-bxs-user-detail',
        defaultVisbile: true,
        component: vue_Top,
        hr: false
      },
      {
        id: 1,
        title: '自傳',
        icon: 'bx-bxs-book-bookmark',
        defaultVisbile: false,
        component: vue_Autobiography,
        hr: false
      },
      {
        id: 2,
        title: '經驗',
        icon: 'ic-baseline-web-asset',
        defaultVisbile: false,
        component: vue_Experience,
        hr: true
      },
      {
        id: 3,
        title: '作品',
        icon: 'ic-baseline-web-asset',
        defaultVisbile: false,
        component: vue_Works,
        hr: true
      }
    ];

    return {
      containers,
      visibleContainersCount: 0,
      start: true
    }
  },
  provide() {
    return {
      'nextContainer': this.nextContainer
    }
  },
  computed: {
    visibleContainers() {
      return !this.start ? this.containers.slice(0, this.visibleContainersCount + 1) : [];
    }
  },
  methods: {
    containerData(v) {
      return {
        title: v.title,
        icon: v.icon,
        defaultVisbile: v.defaultVisbile
      };
    },
    nextContainer() {
      ++this.visibleContainersCount;
    }
  },
  components: {
    EnterBall: vue_EnterBall
  }
}
</script>

<style lang="less" scoped>
@deep: ~'>>>';

article {
  margin-bottom: 3rem;
}

@{deep} .column {
  padding: 1.2rem;
  max-width: 50rem;
  margin: 0 auto;

  & + & {
    margin-top: 2rem;
  }
}

@{deep} .container-1 {
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

      & + .item {
        margin-top: 0.2rem;
      }

      @{deep} .text {
        margin-left: 0.7rem;
      }
    }
  }

  & + .container-1 {
    margin-top: 1.4rem;
  }
}

@{deep} .items {
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
</style>