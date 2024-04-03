import { type FC, FormEvent, useEffect, useRef } from 'react';
import Button from '../UI/Button.tsx';
import Input from '../UI/Input.tsx';
import Modal, { ModalHandle } from '../UI/Modal.tsx';
import { SessionType, useSessionsContext } from '../../context/sessions-context.tsx';

type BookSessionProps = {
    session: SessionType;
    handleClose: () => void;
    isOpen: boolean;
}
const BookSession: FC<BookSessionProps> = ({handleClose, isOpen, session}) => {
    const {addSession} = useSessionsContext();
    const modalRef = useRef<ModalHandle>(null);

    function openModal() {
        modalRef.current?.open();
    }

    function onClose() {
        handleClose();
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);
        console.log("=>(BookSession.tsx:29) data", data);
        addSession(session);
        handleClose();
    }

    useEffect(() => {
        if (isOpen) openModal();
    }, [isOpen]);

    return (
        <Modal ref={modalRef} onClose={onClose}>
            <h2>Book Session</h2>
            <form method="dialog" onSubmit={handleSubmit}>
                <Input id={'name'} label={'Your Name'}/>
                <Input id={'email'} label={'Your Email'}/>
                <p className={'actions'}>
                    <Button className={'button--text-only'}>Cancel</Button>
                    <Button type={'submit'}>Book Session</Button>
                </p>
            </form>
        </Modal>
    );
};

export default BookSession;