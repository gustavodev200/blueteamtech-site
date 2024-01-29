import { AboutServices } from './components/AboutServices';
import { Cover } from './components/Cover';
import { NavBar } from './components/NavBar';
import { Portfolio } from './components/Portfolio';

export default function Home() {
  return (
    <main>
      <NavBar />

      <Cover />

      <AboutServices />

      <Portfolio />
    </main>
  );
}
