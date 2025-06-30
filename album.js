new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "images/avengers1.jpg",
          img2: "images/avengers2.jpg",
          img3: "images/avengers3.jpg",
          title: "Avengers",
          isOpen: false,
        },
        {
          img1: "images/iron1.jpg",
          img2: "images/iron2.jpg",
          img3: "images/iron3.jpg",
          title: "Iron Man",
          isOpen: false,
        },
        {
          img1: "images/new1.jpg",
          img2: "images/new2.jpg",
          img3: "images/new3.jpg",
          title: "New Avengers",
          isOpen: false,
        },
        {
<<<<<<< HEAD
<<<<<<< HEAD
          img1: "images/cap1.jpg",
          img2: "images/cap2.jpg",
          img3: "images/cap3.jpg",
          title: "Captain America",
=======
          img1: "images/widow1.jpg",
          img2: "images/widow2.jpg",
          img3: "images/widow3.jpg",
          title: "Black Widow",
>>>>>>> feature/viuda-negra
=======
          img1: "images/panter1.jpg",
          img2: "images/panter2.jpg",
          img3: "images/panter3.jpg",
          title: "Black Panter",
>>>>>>> feature/pantera-negra
          isOpen: false,
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
