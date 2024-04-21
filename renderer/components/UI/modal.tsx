const Modal = ({ children }) => {
    return (
        <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'auto',
            padding: '20px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            backgroundColor: 'white',
            zIndex: 1000
        }}>
            {children}
        </div>
    );
};

export default Modal;
