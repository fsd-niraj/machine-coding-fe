import { Outlet } from "react-router-dom"
import { problemRoutes } from "../config/routes";
import { useEffect, useState } from "react";

const Layout = () => {
  const [isDisabled, setIsDisabled] = useState({
    prev: false,
    next: false
  })
  const currentProblem = window?.location?.pathname.replace("/", "");
  const problems = problemRoutes;

  useEffect(() => {
    const index = getCurrentIndex();
    if (index === 0) setIsDisabled((p) => ({ ...p, prev: true }))
    if (index === problems.length - 1) setIsDisabled((p) => ({ ...p, next: true }))
  }, [currentProblem])

  function getCurrentIndex() {
    return problems.findIndex((p) => p.route === currentProblem);
  }

  const changeRoute = (direction: "next" | "prev") => {
    const index = getCurrentIndex();
    if (direction == "next") {
      window.location.replace(problems[index + 1].route)
    } else {
      window.location.replace(problems[index - 1].route)
    }
  }
  return (
    <>
      <Outlet />
      <hr />
      <div>
        <button onClick={() => changeRoute("prev")} disabled={isDisabled.prev}>{"<< prev"}</button> &nbsp; &nbsp;
        <button onClick={() => window.location.reload()}>Reload</button> &nbsp; &nbsp;
        <button onClick={() => changeRoute("next")} disabled={isDisabled.next}>{"next >>"}</button>
      </div>
    </>
  )
}
export default Layout