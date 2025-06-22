import { PersonalizationProvider } from './component/context/personalization.context';
import { PersonalizationButton } from './component/PersonalizationButton';
import { PersonalizationPanel } from './component/PersonalizationPanel';
import Footer from './view/footer/footer';
import Menu from './view/menu/menu';
import RouterConfig from './view/menu/routerConfig';
import styles from './App.module.css';

function App() {
  return (
    <PersonalizationProvider>
      <div className={styles.appcontainer}>
        <PersonalizationButton />
        <PersonalizationPanel />
        <Menu />
        <RouterConfig />
        <Footer />
      </div>
    </PersonalizationProvider>
  );
}

export default App;
