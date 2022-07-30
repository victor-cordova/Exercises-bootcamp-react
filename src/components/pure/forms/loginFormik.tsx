// import * as React from 'react';

import { ErrorMessage, Formik, useField, useFormik } from "formik";
import * as Yup from "yup";

export interface IAppProps {
}

// const App = (props: IAppProps) => {

const defaultValues = {
	email: "",
	password: "",
}

const loginSchema = Yup.object({
	email: Yup.string()
				.email("Invalid email format")
				.required("Email is required"),
	password: Yup.string()
						.required("Password is required"),
})

const SignupForm = () => {
	// Pass the useFormik() hook initial form values and a submit function that will
	// be called when the form is submitted
	// const formik = useFormik({
	// 	initialValues: {
	// 		email: "",
	// 		password: "",
	// 	},
	// 	validationSchema: loginSchema,
	// 	onSubmit: values => {
	// 		alert(JSON.stringify(values, null, 2));
	// 	},

	// });

	// useField();

	return (
		<Formik
			initialValues={defaultValues}
			onSubmit={(values, actions) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					actions.setSubmitting(false);
				}, 1000);
			}}
			validationSchema={ loginSchema }
		>

			{props => {
				const {
					errors,
					values,
					handleChange,
					isSubmitting,
					handleBlur,
					// is
				} = props;
				// console.log(errors);
				return (
					<form onSubmit={props.handleSubmit}>
						<input
							type="text"
							onChange={props.handleChange}
							onBlur={props.handleBlur}
							value={props.values.email}
							name="email"
						/>
						{props.errors.email && <ErrorMessage name="email" component="div"/>}

						<input
							type="password"
							onChange={props.handleChange}
							onBlur={props.handleBlur}
							value={props.values.password}
							name="password"
						/>
						{props.errors.password && <ErrorMessage name="password" component="div"/>}

						<button type="submit">Submit</button>
						{isSubmitting && <p>Login your credentials</p>}
					</form>
				)}
			}


		</Formik>
	);
};
// }

export { SignupForm };
	// function props(props: any) {
	// 	throw new Error("Function not implemented.");
	// }

