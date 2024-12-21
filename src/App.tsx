import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import PageTitle from './components/PageTitle';
import Admin from './pages/Dashboard/Admin';
import FormElements from './pages/Form/FormElements';
import DefaultLayout from './layout/DefaultLayout';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <DefaultLayout>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Dashboard" />
              <Admin />
            </>
          }
        />
        <Route
          path="/forms/form"
          element={
            <>
              <PageTitle title="Form" />
              <FormElements />
            </>
          }
        />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
