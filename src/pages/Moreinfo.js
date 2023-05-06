import React from "react";
import { Link } from "react-router-dom";

const Moreinfo = () => {
  return (
    <div className="rounded overflow-hidden shadow-lg h-auto w-1/2 p-12 mr-auto ml-auto mt-10 bg-violet-50">
      <h1 className="font-sans text-5xl mb-5">Alice needs help with...</h1>
      <form>
        <ul className=" text-sm font-medium text-gray-900  border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <li className="block border-b border-gray-200 bg-white rounded-t-lg dark:border-gray-600 mb-4">
            <div className="flex items-center pl-3 m-4">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                hidden
              />
              <label for="vue-checkbox">
                <h1 className="font-sans text-2xl mb-2">
                  Speech and Communication
                </h1>
                <h3 className="font-sans text-sm text-gray-500">
                  Difficulty in speaking,stutters,stammers..
                </h3>
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
                hidden
              />
              <label for="vue-checkbox">
                <h1 className="font-sans text-2xl mb-2">Food and nutrition</h1>
                <h3 className="font-sans text-sm text-gray-500">
                  Underweight child, food allergies, picky eater...
                </h3>
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
                hidden
              />
              <label for="vue-checkbox">
                <h1 className="font-sans text-2xl mb-2">
                  Developmental issues
                </h1>
                <h3 className="font-sans text-sm text-gray-500">
                  premature birth, ADHD, Autism....
                </h3>
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
                hidden
              />
              <label for="vue-checkbox">
                <h1 className="font-sans text-2xl mb-2">
                  Skin, allergies, sleep...
                </h1>
                <h3 className="font-sans text-sm text-gray-500">
                  rashes, acne, disturbed sleep, dry skin...
                </h3>
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
                hidden
              />
              <label for="vue-checkbox">
                <h1 className="font-sans text-2xl mb-2">
                  Gross motor and movement
                </h1>
                <h3 className="font-sans text-sm text-gray-500">
                  Crawling, walking, jumping, catching...
                </h3>
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
                hidden
              />
              <label for="vue-checkbox">
                <h1 className="font-sans text-2xl mb-2">
                  Behaviour and social
                </h1>
                <h3 className="font-sans text-sm text-gray-500">
                  Cries a lot, tantrums, pinches, bites...
                </h3>
              </label>
            </div>
          </li>
        </ul>
        <Link to={"/issues"}>
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

export default Moreinfo;
