import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Problem from "./problems/index";
import ProblemsIndex from './pages/ProblemIndex';
import Home from './pages/Home';
import { ROUTE_FILE_EXPLORER, ROUTE_OTP_INPUT, ROUTE_PROGRESSBAR } from './config/routes';

const App = () => {

  const ProblemLayout = () => {
    return (
      <>
        <ProblemsIndex />
        <Outlet />
      </>
    )
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path={ROUTE_PROGRESSBAR} element={<Problem.Progressbar progress={20} />} />
          <Route path={ROUTE_OTP_INPUT} element={<Problem.OtpInput />} />
          <Route path={ROUTE_FILE_EXPLORER} element={<Problem.OtpInput />} />
        </Routes>
      </Router>
    </>
  )
}
export default App