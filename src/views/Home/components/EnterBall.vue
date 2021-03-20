<template>
  <div class="ball-container">
    <transition appear
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
      :css="false">
      <div class="ball" v-if="show"></div>
    </transition>
  </div>
</template>

<script>
import Velocity from "velocity-animate";

export default {
  data() {
    return {
      show: true
    }
  },
  methods: {
    beforeEnter: function (el) {
      el.style.top = '-20%';
    },
    enter: function (el, done) {
      const self = this;

      Velocity(el, {
        top: '+=60%', rotateZ: '180deg'
      }, {
        duration: 400, delay: 800, easing: [0.42, 0, 1.0, 1.0]
      });
      Velocity(el, {
        top: '-=20%', rotateZ: '+=90deg'
      }, {
        duration: 300, easing: [0, 0, 0.58, 1.0]
      });
      Velocity(el, {
        top: '+=20%', rotateZ: '+=90deg'
      }, {
        complete: () => {
          self.show = false;
          done();
        }
      });
    },
    leave: function (el, done) {
      Velocity(el, {
        backgroundColor: '#fff',
        width: '200vh',
        height: '200vh',
        left: '-=100vh',
        top: '-=100vh'
      }, {
        duration: 600,
        complete: () => {
          done();
          this.$emit('animation-done');
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.ball-container {
  position: fixed;
  width: 100vw;
  height: 100vh;
}
.ball {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: var(--primary-light-3);
  border: 0.2rem solid var(--primary-light-3);
  position: absolute;
  transform-origin: center;
  left: 50%;

  &::before {
    content: '';
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    top: 0.5rem;
    left: 0.5rem;
    background-color: var(--white);
    position: absolute;
  }
}
</style>