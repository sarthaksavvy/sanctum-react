import React from "react";
import axios from "axios";
function App() {
  const [state, setState] = React.useState({
    email: "",
    password: ""
  });

  const handleChange = ({ target }) => {
    setState({ ...state, [target.name]: target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:8000/sanctum/csrf-cookie").then(response => {
      axios.post("http://localhost:8000/login", state).then(res => {
        console.log(res.data);
      });
    });
  };

  return (
    <div className="App">
      <div className="w-full mt-20 mb-10 flex justify-center">
        <form
          className="bg-white shadow-md border rounded px-8 pt-6 pb-8 mb-4 w-1/3"
          onSubmit={onSubmit}
        >
          <h1 className="text-2xl text-center mb-4 pb-2 border-b border-grey-300">
            Login Here
          </h1>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={state.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="password"
              placeholder="*********"
              value={state.password}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center w-full justify-between">
            <button
              type="submit"
              className="w-full bg-purple-800 hover:bg-purple-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              <p className="tracking-wider">Login</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
