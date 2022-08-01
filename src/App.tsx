import { AriaRoles } from './types/AriaRoles';
import StopWatch from './components/stop-watch/StopWatch';

const App = () => {
    return (
        <main role={AriaRoles.main}>
            <StopWatch />
        </main>
    );
};

export default App;