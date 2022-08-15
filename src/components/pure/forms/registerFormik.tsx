import { ROLES } from "../../../models/roles.enum";
import * as Yup from "yup";
import { ErrorMessage, Field, Formik, FormikHelpers } from "formik";
import { DataLS } from "../../../constructors/data.LS.constructor";
import { createId } from "../../../utils";
import { Data } from "../../../models/data.model";
import { RegisterDataUserDto } from "../../../models/data-user.dto";

export interface Props {
	dataLS: DataLS,
	toggleLogged: () => void,
}

const isRequired: string = "is required";
const tooShort: string = "too short";
const tooLong: string = "too long";

const initialValues: RegisterDataUserDto = {
	nickname: "",
	email: "",
	password: "",
	passwordConfirm: "",
	role: ROLES.user
}

const createDataUser = (values: RegisterDataUserDto): Data => {

	return {
		user: {
			nickname: values.nickname,
			email: values.email,
			password: values.password,
			role: values.role,
			id: createId(),
		},
		logged: true,
		data: []
	}
}

const RegisterFormik = ({
	dataLS,
	toggleLogged,
}: Props) => {

	const registerSchema = Yup.object({
		nickname: Yup.string()
			.min(2, `Nickname ${tooShort}`)
			.max(15, `Nickname ${tooLong}`)
			.required(`Nickname ${isRequired}`)
			// @ts-ignore
			.notOneOf([dataLS.getItems("nickname")], "That nickname is occupied.")
			,
		email: Yup.string()
			.email("Invalid email format")
			.required(`Email ${isRequired}`)
			// @ts-ignore
			.notOneOf([dataLS.getItems("email")], "That email is occupied.")
			,
		role: Yup.string()
			.oneOf([ROLES.admin, ROLES.user], "Must select a role: User / Admin")
			.required(`Roles ${isRequired}`),
		password: Yup.string()
			.min(5, `Password ${tooShort}`)
			.required(`Password ${isRequired}`),
		passwordConfirm: Yup.string()
			.when("password", {
				is: (value: string) => (value && value.length ? true : false),
				then: Yup.string().oneOf( //verify if confirm is like password
					[Yup.ref("password")], "Password doens't match"
				)
			})
	})

	const createUser = (values: RegisterDataUserDto, actions: FormikHelpers<RegisterDataUserDto>) => {
		actions.setSubmitting(false);
		setTimeout(() => {
			dataLS.addData(createDataUser(values));
			toggleLogged();
		}, 1000);
	}

	return (
		<div>
			<Formik
				initialValues={initialValues}
				validationSchema={registerSchema}
				onSubmit={createUser}
			>
				{props => (
					<form onSubmit={props.handleSubmit}>
						<label htmlFor="nickname">Nickname</label>
						<Field
							placeholder="Insert nickname"
							type="text"
							id="nickname"
							name="nickname"
						/>
						{props.errors.nickname && <ErrorMessage name="nickname" component="div"/>}

						<label htmlFor="email">Email</label>
						<Field
							placeholder="Insert email"
							type="text"
							id="email"
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
							name="password"
						/>
						{props.errors.password && <ErrorMessage name="password" component="div"/>}

						<Field
							placeholder="Insert password"
							type="password"
							id="passwordConfirm"
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
