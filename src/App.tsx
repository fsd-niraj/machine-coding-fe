import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Problem from "./problems/index";
import Home from './pages/Home';
import { ROUTE_AUTO_COMPLETE, ROUTE_FILE_EXPLORER, ROUTE_OTP_INPUT, ROUTE_PROGRESSBAR } from './config/routes';
import Layout from './pages/Layout';

const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route element={<Layout />}>
            <Route path={ROUTE_PROGRESSBAR} element={<Problem.Progressbar progress={20} />} />
            <Route path={ROUTE_OTP_INPUT} element={<Problem.OtpInput />} />
            <Route path={ROUTE_FILE_EXPLORER} element={<Problem.FileExplorer />} />
            <Route path={ROUTE_AUTO_COMPLETE} element={<Problem.AutoComplete />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}
export default App