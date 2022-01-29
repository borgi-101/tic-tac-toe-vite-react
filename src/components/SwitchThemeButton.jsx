import React, { useContext } from 'react';
import { BsFillMoonFill, BsSun } from 'react-icons/bs';
import ThemeContext from '../context/ThemeContext';

function SwitchThemeButton() {
	const {darkmode, setDarkmode} = useContext(ThemeContext);
	const handleTheme = () =>{
		setDarkmode(!darkmode);
	};

	return (
		<button type="button" className="SwitchThemeButton" onClick={handleTheme}>
			{darkmode ? <BsSun/> : <BsFillMoonFill/> }
		</button>
	);
}

export default SwitchThemeButton;
