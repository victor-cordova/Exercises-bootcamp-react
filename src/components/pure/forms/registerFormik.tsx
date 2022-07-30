// import * as React from 'react';
import { User } from "../../../constructors/user.constructor";
import { ROLES } from "../../../models/roles.model";
import * as Yup from "yup";
import { ErrorMessage, Field, Formik } from "formik";

export interface Props {
}

// const user = new User();

const isRequired: string = "is required";
const tooShort: string = "too short";
const tooLong: string = "too long";

const initialValues = {
	name: "",
	email: "",
	password: "",
	passwordConfirm: "",
	role: ROLES.user
}

const registerSchema = Yup.object({
	name: Yup.string()
		.min(2, `Username ${tooShort}`)
		.max(12, `Username ${tooLong}`)
		.required(`Username ${isRequired}`),
	email: Yup.string()
		.email("Invalid email format")
		.required(`Email ${isRequired}`),
	role: Yup.string()
		.oneOf([ROLES.admin, ROLES.user], "Must select a role: User / Admin")
		.required(`Roles ${isRequired}`),
	password: Yup.string()
		.min(8, `Password ${tooShort}`)
		.required(`Password ${isRequired}`),
	passwordConfirm: Yup.string()
		.when("password", {
			is: (value: string) => (value && value.length ? true : false),
			then: Yup.string().oneOf( //verify if confirm is like password
				[Yup.ref("password")], "Password doens't match"
			)
		})
})

const RegisterFormik = ({}: Props) => {

	// const submit = (values) => {
	// 	alert("Register user")
	// }
	return (
		<div>
			<Formik
				initialValues={initialValues}
				validationSchema={registerSchema}
				onSubmit={(values, actions) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						actions.setSubmitting(false);
					}, 1000);
				}}
			>
				{props => (
					<form onSubmit={props.handleSubmit}>
						<label htmlFor="name">User name</label>
						<Field
							placeholder="Insert username"
							type="text"
							id="name"
							// onChange={props.handleChange}
							// onBlur={props.handleBlur}
							// value={props.values.name}
							name="name"
						/>
						{props.errors.name && <ErrorMessage name="name" component="div"/>}

						<label htmlFor="email">Email</label>
						<Field
							placeholder="Insert email"
							type="text"
							id="email"
							// onChange={props.handleChange}
							// onBlur={props.handleBlur}
							// value={props.values.email}
							name="email"
						/>
						{props.errors.email && <ErrorMessage name="email" component="div"/>}

						<label htmlFor="role">User role</label>
						<Field name="role" as="select" className="" id="role">
							<option value="user">User</option>
							<option value="admin">Admin</option>
						</Field>

						<Field
							placeholder="Insert password"
							type="password"
							id="password"
							// onChange={props.handleChange}
							// onBlur={props.handleBlur}
							// value={props.values.password}
							name="password"
						/>
						{props.errors.password && <ErrorMessage name="password" component="div"/>}

						<Field
							placeholder="Insert password"
							type="password"
							id="passwordConfirm"
							// onChange={props.handleChange}
							// onBlur={props.handleBlur}
							// value={props.values.passwordConfirm}
							name="passwordConfirm"
						/>
						{props.errors.passwordConfirm && <ErrorMessage name="passwordConfirm" component="div"/>}

						<button type="submit">Submit</button>
					</form>)
				}
			</Formik>
		</div>
	);
}

export { RegisterFormik };
