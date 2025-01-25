import { Rutas } from './rutas/Rutas'
import { Menu } from './componentes' 
import './App.css'

const items = [
  { id: 1, inicio: 'Inicio', acerca: 'Sobre mi', contacto: 'Contacto', productos: 'Productos' }
]

function App( ) {
  return (
    <div>
      < Menu items={items} />      
      <div>
        <Rutas />         
      </div>
    </div>    
  )
}

export default App
