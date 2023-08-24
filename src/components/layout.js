import { useCallback, useEffect, useState } from 'react'

let Layout = ({ children }) => {

    const [mousePos, setMousePos] = useState({})
    let mouseMove = event => {
      setMousePos({
        x: event.clientX,
        y: event.clientY
      });
    };

    let handleClick = event => {
        blob.animate({
            scale: 1.2,
            // opacity: 1.2
        }, {duration: 300, fill:'forwards'})
        blob.animate({
            scale: 0.8333,
            // opacity: 0.8333
        }, {duration: 200, fill:'forwards'})
    }

    useEffect(() => {
      let blob = document.getElementById('blob');
      window.addEventListener('mousemove', mouseMove)
      window.addEventListener('click', handleClick)
      blob.animate({
        left: `${mousePos.x - 250}px`,
        top: `${mousePos.y - 250}px`
      }, { duration: 3000, fill: "forwards"})
      // blob.style.left = `${mousePos.x - 250}px`;
      // blob.style.top = `${mousePos.y - 250}px`;
      return () => {
        window.removeEventListener('mousemove', mouseMove);
        window.removeEventListener('click', handleClick);
      }
    })

    return (
        <>
            <div id='blob' className=' bg-white h-500 aspect-video absolute rounded-full -z-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-spin-slow blur-5xl'>
            </div>
            {/* <div id='blob' className=' bg-white h-350 aspect-video absolute rounded-full -z-20 '> */}
            {/* </div> */}
            <div id='topbar' className='bg-white/50 h-20 rounded-lg -mt-5 backdrop-blur-md w-full' ></div>
            <main>{children}</main>
        </>
    )
}

export default Layout;