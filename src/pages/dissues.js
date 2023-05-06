import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

const Dissues = () => {
  return (
    <div className="rounded overflow-hidden shadow-lg h-auto w-1/2 p-12 mr-auto ml-auto mt-10 bg-violet-50">
      <h1 className="font-sans text-4xl mb-5">
        Tell us in more about Alice's food and nutrition issues...
      </h1>
      <form>
        <ul className=" text-sm font-medium text-gray-900  border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li className="block border-b border-gray-200 bg-white rounded-t-lg dark:border-gray-600 mb-4">
            <div className="flex items-center pl-3 m-4">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label for="vue-checkbox">
                <h1 className="font-sans text-2xl mb-2">
                  Baby was born premature
                </h1>
              </label>
            </div>
          </li>

          <li className="block border-b border-gray-200 bg-white rounded-t-lg dark:border-gray-600 mb-4">
            <div className="flex items-center pl-3 m-4">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label for="vue-checkbox">
                <h1 className="font-sans text-2xl mb-2">Has Autism</h1>
              </label>
            </div>
          </li>

          <li className="block border-b border-gray-200 bg-white rounded-t-lg dark:border-gray-600 mb-4">
            <div className="flex items-center pl-3 m-4">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label for="vue-checkbox">
                <h1 className="font-sans text-2xl mb-2">Has ADHD</h1>
              </label>
            </div>
          </li>

          <li className="block border-b border-gray-200 bg-white rounded-t-lg dark:border-gray-600 mb-4">
            <div className="flex item-center pl-3 m-4">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label for="vue-checkbox">
                <h1 className="font-sans text-2xl mb-2">Has Cerebral Palsy</h1>
              </label>
            </div>
          </li>

          <li className="block border-b border-gray-200 bg-white rounded-t-lg dark:border-gray-600 mb-4">
            <div className="flex items-center pl-3 m-4">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label for="vue-checkbox">
                <h1 className="font-sans text-2xl mb-2">Has Down Syndrome</h1>
              </label>
            </div>
          </li>

          <li className="block border-b border-gray-200 bg-white rounded-t-lg dark:border-gray-600 mb-4">
            <div className="flex items-center pl-3 m-4">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label for="vue-checkbox">
                <h1 className="font-sans text-2xl mb-2">Other issues</h1>
              </label>
            </div>
          </li>
        </ul>
        <Link to={"/otherinfo"}>
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

export default Dissues;
