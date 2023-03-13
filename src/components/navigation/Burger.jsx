import { useState } from "react"

export default function Burger() {
  // to change burger classes
  const [open, setOpen] = useState(false)

  // toggle burger menu change
  const updateMenu = () => {
    if(!isMenuClicked) {
      setBurgerClass('burger-bar clicked')
      setMenuClass("menu visible")
    } else {
      setBurgerClass("burger-bar unclicked")
      setMenuClass("menu hidden")
    }
  }

  return (
      <nav className="burger" open={open} onClick={()=> setOpen(!open)}>

          <div className={burgerClass} onClick={updateMenu}></div>
          <div className={burgerClass} onClick={updateMenu}></div>
          <div className={burgerClass} onClick={updateMenu}></div>

      </nav>
  )
}
