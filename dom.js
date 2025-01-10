// Ajouter un écouteur d'événement pour 'DOMContentLoaded'
document.addEventListener("DOMContentLoaded", function () {
// getElementById
 let colorBox = document.querySelector(".color-box");
  let changecolor = document.querySelector(".change-color");
function getRandomcolor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  //generating 6 random values
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    
  }
  return color;
}



  
  // Ajouter un écouteur d'événement pour 'click'
if (changecolor) {
  changecolor.addEventListener("click", function () {
  // Changer la couleur de la boîte de couleur
  });
}
});
    
