let off = document.querySelector(".off")
let popap = document.querySelector(".popap_photo")
let isPopap = [false, ""]

function popapFun(src) {
  let img = `<img src="${src}" alt="">`
  popap.innerHTML = img
  let height = document.documentElement.clientHeight
  let width = document.documentElement.clientWidth
  let height_popap = popap.offsetHeight
  let width_popap = popap.offsetWidth
  document.documentElement.style.setProperty("--top_popap", `${(window.pageYOffset || window.scrollTop) + (height / 2 - (height_popap / 2))}px`)
  document.documentElement.style.setProperty("--left_popap", `${(width - width_popap) / 2}px`)
}
function offFun() {
  popap.innerHTML = ""
  document.documentElement.style.setProperty("--top_popap", "-10000px")
  isPopap = [false, ""]
}

let block = document.querySelector(".fourth_block")
block.onclick = (e) => {
  let src = e.target.src
  if (src) {
    isPopap = [true, src]
    popapFun(src)
  }
}
window.addEventListener("scroll", e => {
  if (isPopap[0]) {
    popapFun(isPopap[1])
  }
})
off.onclick = (e) => {
  offFun()
}
