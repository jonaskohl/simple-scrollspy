document.querySelectorAll(".link").forEach(el => {
  el.addEventListener("click", ev => {
    ev.preventDefault()
    const tg = document.querySelector(el.getAttribute("href"))
    if (tg !== null)
      scrollTo({
        "left": 0,
        "top": tg.offsetTop,
        "behavior": "smooth"
      })
  })
})
