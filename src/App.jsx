import StoreProvider from './providers/StoreProvider';
import RoutesProvider from './providers/RoutesProvider';

export default function App() {
  return (
    <StoreProvider>
      <RoutesProvider />
    </StoreProvider>
  );
}
