import { useState, useRef, useEffect } from 'react';

function Header_Navbar() {
    const [status, setStatus] = useState("");
    const barRef = useRef();
    const bg = useRef();
    const i = useRef();
    
    useEffect(() => {
        i.current.addEventListener('click', ()=> {
            handleStatus()
        })

        return () => {
            i.current.removeEventListener('click', () => {
                handleStatus()
            })
        }
    }, [])

    const handleStatus = () => {
        if(status === "") {
            barRef.current.classList.add("transform");
            setStatus("transform");
            bg.current.classList.add("bg");
            
        } else {
            barRef.current.classList.remove("transform");
            setStatus("");
            bg.current.classList.remove("bg");
        }
    }

    useEffect(() => {
        barRef.current.addEventListener('click', (e) => {
            e.stopPropagation();
        })
    }, [])

    useEffect(() => {
        bg.current.addEventListener('click', ()=> {
            if(bg.current.classList.contains("bg") ) {
                bg.current.classList.remove("bg");
                barRef.current.classList.remove("transform");
                setStatus("");
            };
           
          
            
        })
        return () => {
            bg.current.removeEventListener('click', (e)=> {
                if(bg.current.classList.contains("bg") ) {
                    bg.current.classList.remove("bg");
                    barRef.current.classList.remove("transform");
                    setStatus("");
                };
                
            })
        }

    }, [])


   


    return (
        <div className="Header__navbar ">
           <div className="grid wide">
               
               <div className="row no-gutter">
                
                   <div className="Header__navbar-title col l-5  m-4 c-6">
                        <h3>What happened</h3>
                   </div>
                   <i className="fas fa-bars header__bar l-7 m-8 c-6" ref={i}></i>
                   <div className="Header__navbar-list  col l-7 " ref={bg} >
                       <div className="row " ref={barRef}>
                           <div className="Header__navbar-item l-2-4">
                                <span>Introduction</span>
                           </div>
                           <div className="Header__navbar-item l-2-4">
                                <span>solution</span>
                           </div>
                           <div className="Header__navbar-item l-2-4">
                                <span>Rate plan</span>
                           </div>
                           <div className="Header__navbar-item l-2-4">
                                <span>login</span>
                           </div>
                           <div className="Header__navbar-item l-2-4">
                                <span>Apply for free use</span>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Header_Navbar;