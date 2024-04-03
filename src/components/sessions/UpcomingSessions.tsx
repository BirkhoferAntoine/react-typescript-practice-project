import { type FC, useEffect, useRef } from 'react';
import { useSessionsContext } from '../../context/sessions-context.tsx';
import Modal, { ModalHandle } from '../UI/Modal.tsx';
import Button from '../UI/Button.tsx';
import UpcomingSession from './UpcomingSession.tsx';

type UpcomingSessionsProps = {
    onClose: () => void;
};

const UpcomingSessions: FC<UpcomingSessionsProps> = ({onClose}) => {

    const {bookedSessions, removeSession} = useSessionsContext();
    const modalRef = useRef<ModalHandle>(null);

    function handleRemoveSession(id: string) {
        removeSession(id);
    }

    function closeModal() {
        onClose();
    }

    useEffect(() => {
        if (modalRef.current) {
            modalRef.current.open();
        }

    }, []);

    const hasSessions = bookedSessions.length > 0;

    return (
        <Modal onClose={closeModal} ref={modalRef}>
            <h2>Upcoming Sessions</h2>
            <ul>
                {bookedSessions.map((bookedSession) => (
                    <UpcomingSession onCancel={handleRemoveSession} 
                                     session={bookedSession}
                                     key={'upcoming-session-'+bookedSession.id}
                    />
                ))}
            </ul>
            {!hasSessions && <p>No upcoming sessions.</p>}
            <p className={'actions'}>
                <Button onClick={closeModal}>Close</Button>
            </p>
        </Modal>
    );
};

export default UpcomingSessions;