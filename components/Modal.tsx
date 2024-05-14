import { useEffect, useRef } from 'react';

interface Props {
    onClose: () => void;
    children: React.ReactNode;
}

const Modal = ({ onClose, children }: Props) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        window.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('keydown', handleEsc);
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div className="modal">
            <div className="modal-content" ref={modalRef}>
                {children}
            </div>
        </div>
    );
};

export default Modal;