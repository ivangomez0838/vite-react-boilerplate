import './App.css'
import { Button } from './components/ui/button';

function App() {

  const showMsj = () =>{
    alert("buena suerte!");
  }
  return (
    <div className='flex flex-col justify-center items-center gap-8 min-h-screen'>
     <h1 className='text-5xl font-bold text-blue-600 text-center uppercase'>Proyecto boilerplate</h1>
     <p className='text-muted-foreground'>Sirve como base para iniciar un proyecto utilizando vite + react + typescript + react-query + tailwind css + schadcn</p>
     <Button onClick={showMsj}>mostrar msj</Button> 
    </div>
  )
}

export default App
