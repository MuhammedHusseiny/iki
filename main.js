window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      headerElement.classList.add("scroll-down")
    } else  {
      headerElement.classList.remove("scroll-down")
      
    }
  })
  