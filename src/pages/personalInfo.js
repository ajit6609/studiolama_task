// eslint-disable-next-line
import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const phoneRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);

const FormSchema = Yup.object().shape({
  cname: Yup.string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .matches(/^(\S+$)/g, "Cannot contain space")
    .required("Required"),
  dob: Yup.date()
    .max(new Date(), "Date should not be of today or any future date")
    .required(),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string()
    .matches(phoneRegex, "Invalid phone")
    .required("Phone is required"),
});

const PersonalInfo = () => {
  const Formik = useFormik({
    initialValues: {
      cname: "",
      dob: "",
      born_radio: "no",
      email: "",
      phone: "",
    },
    validationSchema: FormSchema,
    onSubmit: (values) => {
      localStorage.setItem(values);
    },
  });

  return (
    <div className="rounded overflow-hidden shadow-lg h-auto w-1/2 p-12 mr-auto ml-auto mt-10 bg-violet-50">
      <h1 className="font-sans text-3xl mb-5">
        Get your questions answered by our consultants from the comfort of your
        home
      </h1>
      <form onSubmit={Formik.handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm  mb-2" htmlFor="cname">
            Child's Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="cname"
            name="cname"
            type="text"
            placeholder="Alice"
            value={Formik.values.cname}
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
          />
          {Formik.touched.cname && Formik.errors.cname && (
            <span className="text-red-400">{Formik.errors.cname}</span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="dob">
            Chid's date of birth
          </label>

          <input
            id="dob"
            name="dob"
            type="date"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={Formik.values.dob}
            onChange={Formik.handleChange}
          />
          {Formik.errors.dob && (
            <span className="text-red-400">{Formik.errors.dob}</span>
          )}
        </div>
        <label className="block text-gray-700 text-sm mb-2" htmlFor="radio">
          Born at less than 37 weeks?
        </label>
        <div className="flex items-center mb-4" id="radio">
          <input
            defaultChecked
            id="radio-1"
            type="radio"
            value={"no"}
            name="born_radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={Formik.handleChange}
          />
          <label
            htmlFor="radio-1"
            className="ml-2 text-sm font-sm text-gray-900 dark:text-gray-300"
          >
            No
          </label>
        </div>
        <div className="flex items-center mb-4">
          <input
            id="radio-2"
            type="radio"
            value={"yes"}
            name="born_radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={Formik.handleChange}
          />
          <label
            htmlFor="radio-2"
            className="ml-2 text-sm font-sm text-gray-900 dark:text-gray-300"
          >
            Yes
          </label>
        </div>

        <div className="relative mb-3" data-te-input-wrapper-init>
          <label
            className="block text-gray-700 text-sm mb-2"
            htmlFor="bornweeks"
          >
            Born in weeks
          </label>
          <input
            type="number"
            id="bornweeks"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="35"
            min={1}
            max={36}
            required
          />
        </div>
        <div className="flex mb-4">
          <div className="w-full md:w-1/2 pr-2 mb-6 md:mb-0">
            <label
              htmlFor="cweight"
              className="block text-gray-700 text-sm mb-2"
            >
              Child weight
            </label>
            <input
              type="number"
              id="cweight"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>
          <div className="w-full md:w-1/2 ">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="wunit">
              Weight unit
            </label>

            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="wunit"
              id="wunit"
            >
              <option value="kg">Kg</option>
              <option value="gm">gm</option>
            </select>
          </div>
        </div>
        <div className="flex mb-4">
          <div className="w-full md:w-1/2 pr-2 mb-6 md:mb-0">
            <label
              htmlFor="cheight"
              className="block text-gray-700 text-sm mb-2"
            >
              Child height
            </label>
            <input
              type="number"
              id="cheight"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>
          <div className="w-full md:w-1/2 ">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="hunit">
              Height unit
            </label>

            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="hunit"
              id="hunit"
            >
              <option value="cm">cm</option>
              <option value="m">m</option>
            </select>
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 text-sm mb-2">
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john.doe@company.com"
            value={Formik.values.email}
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
          />
          {Formik.touched.email && Formik.errors.email && (
            <span className="text-red-400">{Formik.errors.email}</span>
          )}
        </div>
        <label htmlFor="phone" className="block text-gray-700 text-sm mb-2">
          Phone number
        </label>
        <div className="flex mb-8">
          <div className="w-full md:w-1/2 pr-2 mb-6 md:mb-0">
            <select
              name="country"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+10">+10</option>
            </select>
          </div>
          <div className="w-full md:w-1/2 ">
            <input
              type="text"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="123-45-678"
              value={Formik.values.phone}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
            />
            {Formik.touched.phone && Formik.errors.phone && (
              <span className="text-red-400">{Formik.errors.phone}</span>
            )}
          </div>
        </div>

        <Link to={"/moreinfo"}>
          <button
            className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 w-full"
            type="submit"
          >
            Next
          </button>
        </Link>
      </form>
    </div>
  );
};

export default PersonalInfo;
