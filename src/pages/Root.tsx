import { Outlet } from 'react-router-dom';
import MainHeader from "../components/navigation/MainHeader.tsx";

export default function Root() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}
