<template>
  <div class="title">
    <div class="text">
      <slot></slot>
    </div>
    <iconify-icon :name="icon" class="icon" />
  </div>
</template>

<script>
export default {
  props: {
    'icon': {
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
.title {
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  border: 2px solid var(--primary-light-2);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  transition: 0.3s;
  background-color: var(--white);

  > .text {
    font-size: 1.1rem;
  }

  > .icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 2.2rem;
    height: 2.2rem;
    fill: currentcolor;
    color: var(--primary-light-2);
    background-color: var(--white);
    border-radius: 50%;

    animation: move-rotate 1.3s ease;
  }

  // &:hover {
  //   border-color: var(--primary-light-3);
  //   > .icon {
  //     color: var(--primary-light-3);
  //     animation: move-rotate 1.3s ease;
  //   }
  // }
}

@keyframes move-rotate {
  0%{
    top: 2.4rem;
    left: 2.4rem;
    transform: rotate(-135deg) translateX(3.5rem) rotate(135deg);
  }
  100%{
    top: 2.4rem;
    left: 2.4rem;
    transform: rotate(225deg) translateX(3.5rem) rotate(-225deg);
  }
}
</style>