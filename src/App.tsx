import { Rutas } from './rutas/Rutas'
import { Menu } from './componentes' 
import './App.css'


function App( ) {
  const menuItems = [
    { id: 1, path: '/inicio', label: 'Inicio' },
    { id: 2, path: '/acerca', label: 'Acerca' },
    { id: 3, path: '/contacto', label: 'Contacto' },
    { id: 4, path: '/productos', label: 'Productos' }
  ];
  return (
    <div>
      <Menu items={menuItems} />
      <div>
        <Rutas />         
      </div>
    </div>    
  )
}

export default App
