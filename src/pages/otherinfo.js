import React from "react";
import { Link } from "react-router-dom";

const otherInfo = () => {
  return (
    <div className="rounded overflow-hidden shadow-lg h-auto w-1/2 p-12 mr-auto ml-auto mt-10 bg-violet-50">
      <h1 className="font-sans text-3xl mb-5">
        Any other information you'd like us to know?
      </h1>
      <form>
        <textarea
          id="message"
          rows="6"
          class="block p-2.5 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Mention any medical history, family history, any incident which caused concern, food and sleep routine"
        ></textarea>
        <Link to={"/appointment"}>
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

export default otherInfo;
