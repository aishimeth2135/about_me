<template>
  <section>
    <transition name="fade" mode="out-in"
      @after-enter="nextContainer">
      <div class="main-title" v-if="!visible" ref="main-title" key="title"
        style="transition-delay: 1s">
        <transition name="fade" mode="out-in"
          @after-enter="!visible && (visible = true)">
          <CircleTitle v-if="titleVisible" :icon="icon" key="title-circle">
            {{ title }}
          </CircleTitle>
          <div v-else key="title-circle">
            {{ title }}
          </div>
        </transition>
        <!-- <CircleTitle :icon="icon">
          {{ title }}
        </CircleTitle> -->
      </div>
      <div class="main-content" v-else key="content">
        <slot></slot>
      </div>
    </transition>
  </section>
</template>

<script>
import vue_CircleTitle from "./CircleTitle.vue";

export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ""
    },
    defaultVisbile: {
      type: Boolean,
      default: false
    }
  },
  inject: ['nextContainer'],
  data() {
    return {
      visible: false,
      titleVisible: false
    }
  },
  created() {
    this.visible = this.defaultVisbile;
    this.visible && this.nextContainer();
  },
  mounted() {
    if (this.visible)
      return;
    const self = this;

    const options = {
      threshold: [1]
    }
    const callback = function(entries) {
      if (entries[0].intersectionRatio == 1) {
        self.titleVisible = true;
        observer.disconnect();
      }
    }
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs['main-title']);
  },
  components: {
    CircleTitle: vue_CircleTitle
  }
}
</script>

<style lang="less">
.main-title {
  height: 30vh;
  font-size: 1.5rem;
  font-weight: bold;
  
  display: flex;
  align-items: center;
  justify-content: center;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: 0.4s ease;
}
.fade-enter-to, .fade-leave {
  opacity: 1;
}

</style>