import { problemRoutes } from "../config/routes"

const Problems = () => {
  return (
    <>
      <h3>Problems</h3>
      <ol>
        {problemRoutes.map((route, index) =>
          <li key={index}>
            <a href={route.route}>{route.title}</a>
          </li>
        )}
      </ol>
    </>
  )
}
export default Problems