let placeImageUrls = {
  kerala:
    "https://static.wanderon.in/wp-content/uploads/2023/08/untitled-design-2023-08-31t173135.079-min.png",
  dwaraka: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Dwaraka.jpg",
  jaipur:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg/1200px-East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg",
  varanasi:
    "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6f/12/a6.jpg",
  coorg:
    "https://www.theindia.co.in/blog/wp-content/uploads/2019/07/View-of-Coorg-1.jpg",
};

let placeSelectEl = document.getElementById("placeSelect");
let placeImgEl = document.getElementById("placeImg");

placeSelectEl.addEventListener("change", function () {
  let selectedPlace = placeSelectEl.value;
  let selectedPlaceImgUrl = placeImageUrls[selectedPlace];
  placeImgEl.src = selectedPlaceImgUrl;
});
