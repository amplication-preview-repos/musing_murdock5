import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { HistoryList } from "./history/HistoryList";
import { HistoryCreate } from "./history/HistoryCreate";
import { HistoryEdit } from "./history/HistoryEdit";
import { HistoryShow } from "./history/HistoryShow";
import { SettingsList } from "./settings/SettingsList";
import { SettingsCreate } from "./settings/SettingsCreate";
import { SettingsEdit } from "./settings/SettingsEdit";
import { SettingsShow } from "./settings/SettingsShow";
import { RedEnvelopeCoverList } from "./redEnvelopeCover/RedEnvelopeCoverList";
import { RedEnvelopeCoverCreate } from "./redEnvelopeCover/RedEnvelopeCoverCreate";
import { RedEnvelopeCoverEdit } from "./redEnvelopeCover/RedEnvelopeCoverEdit";
import { RedEnvelopeCoverShow } from "./redEnvelopeCover/RedEnvelopeCoverShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"RedEnvelopeCoverGenerator"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="History"
          list={HistoryList}
          edit={HistoryEdit}
          create={HistoryCreate}
          show={HistoryShow}
        />
        <Resource
          name="Settings"
          list={SettingsList}
          edit={SettingsEdit}
          create={SettingsCreate}
          show={SettingsShow}
        />
        <Resource
          name="RedEnvelopeCover"
          list={RedEnvelopeCoverList}
          edit={RedEnvelopeCoverEdit}
          create={RedEnvelopeCoverCreate}
          show={RedEnvelopeCoverShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
