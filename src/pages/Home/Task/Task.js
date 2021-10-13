import React , {useState, useEffect} from "react";


//css 

//import  './Task.css';

//components
import Title from "../../../commons/Title/Title"
import Label from "../../../commons/Label/Label"

//firebase

import {db} from '../../../firebase';

const Task = () => { 

    const [tareas, setTareas] = useState([]);
    const [tarea, setTarea] = useState('');
    const [hasError,setHassError] = useState(false);
    const [modoEdicion,setModoEdicion] = useState(false);
    const [id, setId] = useState([]);
    
    useEffect(() => {
        const obtenerDatos = async () => {
            try {
                const data = await db.collection('tareas').get()        
                const arrayData = data.docs.map(doc => ({
                    id: doc.id, ...doc.data()
                }))
                setTareas(arrayData)
                console.log(arrayData)    
            } catch (error) {
                console.log(error);
            }
        }
      
        obtenerDatos();
    },[])

     function handleChange(name, value){

        if (name === 'task') {      
            setTarea(value);
            setHassError(false);
                 
        }else {
            setHassError(true);  
        }

    };

    const agregar = async (e) => {
       
        e.preventDefault()

        if (!tarea.trim()) {
            console.log("no hay información")
            setTarea('')
            return
        } 
        try {
            const nuevaTarea = {
                name: tarea,
                fecha: Date.now()
            }    
            const data = await db.collection('tareas').add(nuevaTarea)
            setTareas([
                ...tareas,
                {...nuevaTarea, id: data.id}
            ])
            setTarea('')
        } catch (error) {

        }
            
    }

    const activarEdicion = (item) => { 
        console.log(item)
        setModoEdicion(true)
        handleChange('task', item.name)
        //setTarea()  //useEffect o callback
        setId(item.id)
        console.log(tarea)
    }

    const editar = async (e) =>{
        e.preventDefault()
        if(!tarea.trim()){
            console.log('vacio')
            return
        }
        try {
            await db.collection('tareas').doc(id).update({
                name: tarea
            })
            const arrayEditado = tareas.map(item => (
                item.id === id ? {id: item.id, fecha: item.fecha, name: tarea} : item
              ))
            setTareas(arrayEditado)
            setModoEdicion(false)
            setTarea('')
            setId('')
        } catch (error) {
            console.log(error)
        }
    }



    const eliminar = async (id) => {
        try {          
            await db.collection('tareas').doc(id).delete()

            const arrayFiltrado = tareas.filter(item => item.id !== id)
            setTareas(arrayFiltrado)
        } catch (error) {
            
        }
    }


    
    
    return (
        <div className="task-container">
            <Label   text={modoEdicion ? 'Editar tarea' : 'Agregar tarea'}/>
            <form onSubmit={modoEdicion ? editar : agregar}>
                <input 
                    type="text" 
                    name="task"
                    placeholder='Ingrese Tarea'
                    value={tarea}
                    onChange={ (e) => handleChange(e.target.name, e.target.value)}
                    className ='regular-style'
                />
                <div className="submit-button-container">  
                    <button className='submit-button' onClick={modoEdicion ? editar : agregar} > 
                        {modoEdicion ? 'Editar' : 'Agregar' }
                    </button>                   
                </div>
            </form>  
     
            <Label text="Lista de tareas "/>
                        
            <ul>
                        
                {tareas.map(item => (
                    <li key={item.id}>                                   
                        {item.name}                                  
                        <button  onClick={() => activarEdicion(item)}>
                            Editar
                        </button>
                                    
                        <button  onClick={() => eliminar(item.id)}>
                            Eliminar
                        </button>                                   
                    </li>
                ))}        
            </ul>                 
        </div> 
    ); 
}

export default Task;