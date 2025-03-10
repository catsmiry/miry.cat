import { Router, Route } from "@solidjs/router";
import Home from "./pages/Home";
import Flash from "./pages/Flash";
import NotFound from "./pages/404";
import { MetaProvider, Title} from '@solidjs/meta';

const App = () => {
  return (
    <MetaProvider>
      <Title>みりーのねこ通信</Title>
      <Router>
        <Route>
          <Route path="/" component={Home} />
          <Route path="/flash" component={Flash} />
          <Route path="*" component={NotFound} />
        </Route>
      </Router>
    </MetaProvider>
  );
};

export default App;