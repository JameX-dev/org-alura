import { useState } from "react"
import  "./MiOrg.css"

const MiOrg = (props) =>{

    // const [nombreVariable, funcionActualiza] = useState(valorInicial)
    // const [mostar, actualizarMostrar] = useState(true)

    // const manejarClick = ()=>{
    //     console.log("mostrar jsjsj", !mostar)
    //     actualizarMostrar(!mostar)
    // }

    return <section className="orgSection"> 
        <h3 className="title">Mi Organisacion</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg