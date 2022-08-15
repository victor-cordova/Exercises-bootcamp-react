import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";
import { DataLS } from "../../../constructors/data.LS.constructor";
import { LoginDataUserDto } from "../../../models/data-user.dto";

export interface Props {
	dataLS: DataLS,
	logged: boolean,
	toggleLogged: () => void,
}

const defaultValues: LoginDataUserDto = {
	email: "",
	password: "",
}


const LoginForm = (
	{
		logged,
		dataLS,
		toggleLogged
	} : Props
) => {

	const loginSchema = Yup.object({
		email: Yup.string()
					.email("Invalid email format")
					.required("Email is required")
					// @ts-ignore
					.oneOf([dataLS.getItems("email")], "That doesnt' exist."),
		password: Yup.string()
							.required("Password is required")
							.test(
								"password", "Password incorrect",
								(value, context) => {
									return dataLS.isPasswordCorrect(value, context);
								}
							)
	})


	return (
		<Formik
			initialValues={defaultValues}
			onSubmit={(values, actions) => {
				setTimeout(() => {
					// alert(JSON.stringify(values, null, 2));
					actions.setSubmitting(false);
					toggleLogged()
					dataLS.login(values);
				}, 1000);
			}}
			validationSchema={ loginSchema }
		>

			{(props) => {

				return (
					<form onSubmit={props.handleSubmit}>

						<label htmlFor="email">Email</label>
						<Field
							type="text"
							id="email"
							name="email"
						/>
						{props.errors.email && <ErrorMessage name="email" component="div"/>}

						<label htmlFor="password">Password</label>
						<Field
							type="password"
							id="password"
							name="password"
						/>
						{props.errors.password && <ErrorMessage name="password" component="div"/>}

						<button type="submit">Submit</button>
						{props.isSubmitting && <p>Login your credentials</p>}
					</form>
				)}
			}


		</Formik>
	);
};
// }

export { LoginForm };
