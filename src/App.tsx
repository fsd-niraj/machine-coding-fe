import Progressbar from "./problems/progressbar/Progressbar"

const App = () => {
  const pgb = [5, 25, 30, 45, 50, 60, 75, 90];
  return (
    <>
      {pgb.map((p, i) =>
        <Progressbar progress={p} key={i} />
      )}
    </>
  )
}
export default App