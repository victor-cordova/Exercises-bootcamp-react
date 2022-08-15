import "../../styles/registerPage.css"
// import { useLocation } from "react-router-dom";
import { RegisterFormik } from "../../components/pure/forms/registerFormik";
import { DataLS } from "../../constructors/data.LS.constructor";

interface Props {
	dataLS: DataLS,
	toggleLogged: () => void,
	redirectTo: (path: string) => void,
}

const RegisterPage = (
	{
		dataLS,
		toggleLogged,
		redirectTo,
	}: Props
	) => {

	// const location = useLocation();
	// console.log("We are in" + location.pathname);

	return (
		<div>

			<h1 className="font">There will be a register page.</h1>
			<h2>This is a subtitle</h2>

			<RegisterFormik
				dataLS={dataLS}
				toggleLogged={toggleLogged}
			/>

			<button
				onClick={() => redirectTo("login")}
			>
				Go to register
			</button>
		</div>
	);
}

export { RegisterPage }
