import Button from "../UI/Button.tsx";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import UpcomingSessions from '../sessions/UpcomingSessions.tsx';


const MainHeader = () => {

    const [upcomingModalIsOpen, setUpcomingModalIsOpen] = useState<boolean>(false);

    function handleCloseModal() {
        setUpcomingModalIsOpen(false);
    }

    function handleOpenModal() {
        setUpcomingModalIsOpen(true);
    }

    return (
        <header id={'main-header'}>
            <h1>ReactMentoring</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to={'/'} className={({ isActive }) => isActive ? 'active' : ''}>
                            Our Mission
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/sessions'} className={({ isActive }) => isActive ? 'active' : ''}>
                            Browse Sessions
                        </NavLink>
                    </li>
                    <li><Button onClick={handleOpenModal}>Upcoming Sessions</Button></li>
                </ul>
            </nav>
            {upcomingModalIsOpen && <UpcomingSessions onClose={handleCloseModal}/>}
        </header>
    );
};

export default MainHeader;