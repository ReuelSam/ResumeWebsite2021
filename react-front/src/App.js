import './CSS/App.css';
import React, { useEffect, useState} from 'react';
import {HashRouter} from 'react-router-dom';
import MainRouter from './MainRouter';
import axios from 'axios';

const URL = "https://ip.nf/me.json";

const App = () => {

	const [info, setInfo] = useState({ip: ""});
	const [count, setCount] = useState(0);

	const writeData = async () => {
		setCount(count + 1);
		const city = info.ip.city;
		const country = info.ip.country;
		const country_code = info.ip.country_code;
		const date = new Date().toLocaleString();
		// console.log(count);
		// console.log(city, country, country_code, date);
		
		if (country && count === 1)
		{
			// console.log("YAY: ",city, country, country_code, date);
			setCount(count + 1);
			axios.post('https://sheet.best/api/sheets/1e099c90-9004-4523-b1f2-265cb1cf09ef', {
				city, country, country_code, date
			})
		}

		
	}

	useEffect(() => {
		// console.log("Activated");
		fetch(URL, {method: "get"})
		.then((response) => response.json())
		.then((data) => {
			setInfo({...data});
			writeData();
		});
	})

	return (
		<HashRouter>
			<MainRouter />
		</HashRouter>
	)
}
	


export default App;
