import { useEffect } from 'react';

interface Props {
    onClose: () => void;
    children: React.ReactNode;
}

const Modal = ({ onClose, children }: Props) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);

    return (
        <div className="modal">
            <div className="modal-content">
                {children}
            </div>
        </div>
    );
};

export default Modal;