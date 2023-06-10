const sections = document.querySelectorAll("section")

const observer = new IntersectionObserver(entries => {
     entries.forEach(entry => {
        if(entry.intersectionRatio > 0.1) {
           entry.target.classList.add("in-view")
        } else {
          entry.target.classList.remove("in-view")

        }
     })
}, {
   threshold: [0.0, 1.0]
})

sections.forEach(section => {
    observer.observe(section)

    const div = section.querySelector("div")
    const mq = window.matchMedia("(prefers-reduce-motion: no-preference)")

    document.addEventListener("mousemove", (rotate) => {
      let x = (window.innerWidth / 2 - rotate.pageX) / 15;
      let y = (window.innerHeight / 2 - rotate.pageY) / 15;
      div.style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)";
    });
  

})