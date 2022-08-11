import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddProf from '../cardnamee/AddProf';
import Tampildata from '../cardName/Tampildata'


const Main = () => (
    <div>
        <Routes>
            <Route path="/main" element={<AddProf />}>
            {/* <Route index element={<Home />} />
            <Route path="teams" element={<Teams />}>
              <Route path=":teamId" element={<Team />} />
              <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} />
            </Route> */}
          </Route>
          <Route path="/kartu" element={<Tampildata />}>
          </Route>
        </Routes>
    </div>
);

export default Main;