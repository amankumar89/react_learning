import { Link } from "react-router-dom";
import { APPS_LIST } from "./constant.jsx";

const App = () => {
  return (
    <div className="px-4">
      <div className="text-4xl underline my-4">React Apps</div>
      <div>
        {APPS_LIST.map(({title, path}, index) => (
          <Link key={title} className="underline text-blue-900" to={path}>
            {`[ ${index + 1} ] - ${title}`}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default App