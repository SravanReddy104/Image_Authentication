

exports.get = async (req, res) => {

  console.log("in");
  res
    .status(200)
    .send([
      {
        name: "cheetah",
        url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FCheetah&psig=AOvVaw3LmKTc1Sf4LbH9JUw2_45V&ust=1667915313456000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCMCclvKanPsCFQAAAAAdAAAAABAx",
        id: "1",
      },
      {
        name: "horse",
        url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Fanimal%2Fhorse&psig=AOvVaw1TrC84uszJG5XevWwE-sdN&ust=1667915606476000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCLD2tPybnPsCFQAAAAAdAAAAABAE",
        id: "2",
      },
      {
        name: "dog",
        url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.goodhousekeeping.com%2Flife%2Fpets%2Fg4531%2Fcutest-dog-breeds%2F&psig=AOvVaw0WTBFPvBt8gGuI76g2Rmxo&ust=1667915669754000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCPCi3pqcnPsCFQAAAAAdAAAAABAF",
        id: "3",
      },
      {
        name: "monkey",
        url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.deccanherald.com%2Fopinion%2Fright-in-the-middle%2Fmonkey-numbers-1014037.html&psig=AOvVaw2soFJJcI0JWcOy19JMaQzx&ust=1667915774205000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCKicxs-cnPsCFQAAAAAdAAAAABAE",
        id: "4",
      },
      {
        name: "lion",
        url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.programme-television.org%2Fnews-tv%2FLe-Roi-lion-M6-L-incroyable-defi-technologique-de-Jon-Favreau-4685558&psig=AOvVaw36HUYLrRzzxVBkPf3OMZH5&ust=1667915819340000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCPi2sOOcnPsCFQAAAAAdAAAAABAj",
        id: "5",
      },
      {
        name: "giraffe",
        url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wiktionary.org%2Fwiki%2Fgiraffe&psig=AOvVaw2R442K6LQylHq0ccXPGqs8&ust=1667915996242000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCKDk47adnPsCFQAAAAAdAAAAABAF",
        id: "6",
      },
      {
        name: "mobile",
        url: "https://images.xtracover.com/Apple_Apple-iPhone-X-Silver-64-GB-_WPJE_1653025651.JPEG",
        id: "7",
      },
      {
        name: "laptop",
        url: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9520/media-gallery/black/laptop-xps-9520-t-black-gallery-5.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=676&qlt=100,1&resMode=sharp2&size=676,402&chrss=full",
        id: "8",
      },
      {
        name: "watch",
        url: "https://m.media-amazon.com/images/I/81+d6eSA0eL._UY445_.jpg",
        id: "9",
      },
      {
        name: "Aeroplane",
        url: "https://t4.ftcdn.net/jpg/00/71/31/85/360_F_71318503_9g1UATIOZzwELZg2DZb7w4oaVyenhQkh.jpg",
        id: "10",
      },
      {
        name: "Train",
        url: "https://images.hindustantimes.com/img/2022/09/24/550x309/baf12b52-3c32-11ed-8cba-ba7ad76ffd07_1664043747034.jpg",
        id: "11",
      },
      {
        name: "Bus",
        url: "https://etimg.etb2bimg.com/photo/85487718.cms",
        id: "12",
      },
      {
        name: "Ship",
        url: "https://i.pinimg.com/736x/6d/c3/79/6dc3792181622a60cf04c512af0e78a7.jpg",
        id: "13",
      },
      {
        name: "Orange",
        url: "https://st.depositphotos.com/1000141/1963/i/450/depositphotos_19638723-stock-photo-fresh-orange-fruit-with-leaf.jpg",
        id: "14",
      },
      {
        name: "Banana",
        url: "https://media.istockphoto.com/id/1184345169/photo/banana.jpg?s=612x612&w=0&k=20&c=NdHyi6Jd9y1855Q5mLO2tV_ZRnaJGtZGCSMMT7oxdF4=",
        id: "15",
      },
      {
        name: "Apple",
        url: "https://media.istockphoto.com/id/185262648/photo/red-apple-with-leaf-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=gUTvQuVPUxUYX1CEj-N3lW5eRFLlkGrU_cwwwOWxOh8=",
        id: "16",
      },
      {
        name: "Grapes",
        url: "https://media.istockphoto.com/id/803721418/photo/grape-dark-grape-grapes-with-leaves-isolated-with-clipping-path-full-depth-of-field.jpg?s=612x612&w=0&k=20&c=-jAJlO3WbgFzxwwSmG3pc7bqUva117TYUKKrQW3-RK8=",
        id: "17",
      },
      {
        name: "Mango",
        url: "https://img.freepik.com/premium-vector/mango-fruit-cartoon-vector-icon-illustration_480044-489.jpg?w=2000",
        id: "18",
      },
      {
        name: "Guava",
        url: "https://thekitchencommunity.org/wp-content/uploads/2021/09/What-Does-Guava-Taste-Like-1200x675.jpg",
        id: "19",
      },
      {
        name: "Pineapple",
        url: "https://img.freepik.com/premium-vector/pineapple-illustration-suitable-decoration-stickers-icons-others_525134-25.jpg?w=2000",
        id: "20",
      },
      {
        name: "Parrot",
        url: "https://i.pinimg.com/originals/69/e2/e9/69e2e9cd082c665dd0dff0fd98f79503.jpg",
        id: "21",
      },
      {
        name: "Eagle",
        url: "https://cdn.britannica.com/96/76096-050-8CF14F84/Bald-eagle-snag-Alaska-Kenai.jpg",
        id: "22",
      },
      {
        name: "Duck",
        url: "https://img.freepik.com/free-vector/cute-duck-white_1308-41058.jpg?w=2000",
        id: "23",
      },
      {
        name: "Crow",
        url: "https://cdn.birdwatchingdaily.com/2019/11/American_Crow_Toolkit_2019-07-13_300.jpg",
        id: "24",
      },
      {
        name: "Smile",
        url: "https://static3.depositphotos.com/1002188/167/i/600/depositphotos_1670284-stock-photo-smiley-face-on-ball.jpg",
        id: "25",
      },
      {
        name: "tears",
        url: "https://freepngimg.com/thumb/emoji/65257-emoticon-of-smiley-face-tears-crying-joy.png",
        id: "26",
      },
      {
        name: "Thinking",
        url: "https://www.dictionary.com/e/wp-content/uploads/2018/03/Thinking_Face_Emoji-Emoji-Island.png",
        id: "27",
      },
    ]).json();
};
