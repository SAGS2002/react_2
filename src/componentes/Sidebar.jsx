import React from 'react'

const Sidebar = () => {
  return (
    <>
      <div className='navbar bg-slate-700 text-white '>
            <div className="drawer">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="btn drawer-button">Todo</label>
              </div>
              <div className="drawer-side z-20">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-neutral-950   text-base-content min-h-full w-80 p-4">
                  <div className='tituloheader font-bold text-2xl'>Hola, identificate</div>
                  <br />
                  <li><a>Sidebar Item 1</a></li>
                  <li><a>Sidebar Item 2</a></li>
                  <li><a>Sidebar item 3</a></li>
                  <li><a>Sidebar item 4</a></li>
                  <li><a>Sidebar item 5</a></li>
                  <li><a>Sidebar item 6</a></li>
                  <li><a>Sidebar item 7</a></li>
                  <li><a>Sidebar item 8</a></li>
                </ul>
              </div>
            </div>
        </div>
    </>
  )
}

export default Sidebar
