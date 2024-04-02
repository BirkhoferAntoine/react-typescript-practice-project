import { type FC, useEffect, useRef } from 'react';
import Button from '../UI/Button.tsx';
import Input from '../UI/Input.tsx';
import Modal, { ModalHandle } from '../UI/Modal.tsx';

type BookSessionProps = {
    handleClose: () => void;
    isOpen: boolean;
}
const BookSession: FC<BookSessionProps> = ({handleClose, isOpen}) => {
    const modalRef = useRef<ModalHandle>(null);

    function openModal() {
        modalRef.current?.open();
    }

    function onClose() {
        handleClose();
    }

    useEffect(() => {
        if (isOpen) openModal();
    }, [isOpen]);

    return (
        <Modal ref={modalRef} onClose={onClose}>
            <h2>Book Session</h2>
            <form method="dialog">
                <Input id={'name'} label={'Your Name'}/>
                <Input id={'email'} label={'Your Email'}/>
                <p className={'actions'}>
                    <Button className={'button--text-only'}>Cancel</Button>
                    <Button>Book Session</Button>
                </p>
            </form>
        </Modal>
    );
};

export default BookSession;