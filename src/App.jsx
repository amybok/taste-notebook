import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TastingChart from './components/tastingChart'
import PhotoCard from './components/photoCard'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", scale:"130%", marginTop:"7em"}}>
			<PhotoCard/>
			<TastingChart/>
		</div>
	)
}

export default App
