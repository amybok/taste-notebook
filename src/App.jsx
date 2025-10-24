import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TastingChart from './components/tastingChart'
import PhotoCard from './components/photoCard'
import Untitled from './assets/Untitled.png'

function App() {
	const [count, setCount] = useState(0)

	return (
		<div>
			<div className='font-mono tracking-widest' style={{backgroundColor:"rgb(33,53,54)", height:"100vh", position:"absolute", left:"0", width:"12em", boxShadow:"7px 0px 7px rgba(0, 0, 0, 0.2)", color:"beige", paddingBottom:"5rem"}}>
				<div style={{margin:"2.25rem 1.25rem"}}>
					<h2 className='text-2xl mb-8 font-medium border-b-amber-400 border-b pb-2'>TASTE NOTEBOOK</h2>
					<h3 className='text-left font-bold mb-2'>NOTES</h3>
					<ul className='text-left font-light overflow-clip'>
						<li className='mb-4 border-t-amber-100 border-t pt-2'><h4>Chigi no shiro 24/10/2025</h4></li>
						<li className='mb-4 border-t-amber-100 border-t pt-2'><h4>Chiyo no shiro 24/10/2025</h4></li>
						<li className='mb-4 border-t-amber-100 border-t pt-2'><h4>Wakatake 24/10/2025</h4></li>
						<li className='mb-4 border-t-amber-100 border-t pt-2'><h4>Myogetsu 24/10/2025</h4></li>
					</ul>
					<img src={Untitled} style={{scale:"60%", marginTop:"2.3em"}}/>
				</div>
				
				{/* <img src={download} style={{bottom:"0", position:"absolute", scale:"40%"}}/>
				<h6 style={{bottom:0, position:"absolute", fontSize:"small", textAlign:"center"}}>Made with love by bokbok</h6> */}
			</div>
			<div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", maxHeight:"100vh", scale:"95%", marginLeft:"8em", marginRight:"-3.5em"}}>
				<PhotoCard/>
				<TastingChart/>
			</div>
		</div>
	)
}

export default App
