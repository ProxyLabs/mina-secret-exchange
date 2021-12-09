document.addEventListener('DOMContentLoaded', function () {
  initVue();
});

const initVue = () => {
  new Vue({
    el: '#app',
    data: {
      msg: 'hey',
    },
  });
};
