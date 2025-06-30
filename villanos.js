new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "images/thanos1.jpg",
          img2: "images/thanos2.jpg",
          img3: "images/thanos3.jpg",
          title: "Thanos",
          isOpen: false,
        },
        {
          img1: "images/loki1.jpg",
          img2: "images/loki2.jpg",
          img3: "images/loki3.jpg",
          title: "Loki",
          isOpen: false,
        },
        },
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },

    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },

    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});
