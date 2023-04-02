import Login from '../login/Login';
import style from './Navbar.module.css';
import { useState } from 'react';
const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <nav className={style.nav}>
        <h3>DynamiProof</h3>
        <button onClick={toggleModal}>Conectar Wallet</button>
      </nav>

      {/* MODAL */}
      <Login isOpen={isModalOpen} />
    </>
  );
};

export default Navbar;
