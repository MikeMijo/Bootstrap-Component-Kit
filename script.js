submitForm.onclick = function(){
  cardName.textContent = inputName.value
  cardAbout.textContent = inputAbout.value
  cardImage.src = inputImage.value
  cardLink.href = inputLink.value
  cardLink.textContent = inputLinkName.value

  myCard.style.display = "inline-block"
}


















var moveProgress  = function(id, percent){
  var progressBar = document.getElementById(id)
  progressBar.style.width = percent+'%'
}

var point = 0

setInterval(function(){
  moveProgress('pb1',Math.floor(Math.random() * 100))
  moveProgress('pb2',Math.floor(Math.random() * 100))
  moveProgress('pb3',Math.floor(Math.random() * 100))
  point += 10
  if (point >=100 ) {
    point = 0
  }
},200)

