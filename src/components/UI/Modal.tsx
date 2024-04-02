import { forwardRef, ReactNode, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
    children: ReactNode;
    onClose: () => void;
};

export type ModalHandle = {
    open: () => void;
}

const Modal = forwardRef<ModalHandle, ModalProps>(
    function Modal({children , onClose}, ref){

        const modalRef = useRef<HTMLDialogElement>(null);

        useImperativeHandle(ref, () => {
            return {
                open() {
                    modalRef.current?.showModal()
                }
            }
        })

    return createPortal(
        <dialog ref={modalRef} className={'modal'} onClose={onClose}>
            {children}
        </dialog>
        , document.getElementById('modal-root')!);
});

export default Modal;