// Providers
import IssueProvider from "../Contexts/Issue";

// Components
import Issues from "../Contexts/Issues";

const App = () => {
  return (
    <IssueProvider
      url="https://api.github.com/repos/ContentPI/ContentPI/issues"
    >
      <Issues />
    </IssueProvider>
  );
};

export default App;