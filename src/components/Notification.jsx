import React, { useEffect } from 'react';

const Notification = ({ message, type, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 5000);
        return () => clearTimeout(timer);
    }, [onClose]);

    const colors = {
        success: 'linear-gradient(135deg, #00ff88 0%, #00d4ff 100%)',
        error: 'linear-gradient(135deg, #ff5370 0%, #ff6b9d 100%)',
        info: 'linear-gradient(135deg, #00d4ff 0%, #0066ff 100%)'
    };

    const style = {
        position: 'fixed',
        top: '100px',
        right: '20px',
        padding: '20px 30px',
        background: colors[type] || colors.info,
        color: 'white',
        borderRadius: '12px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        zIndex: 10000,
        animation: 'slideInRight 0.4s ease-out',
        maxWidth: '400px',
        fontFamily: "'Inter', sans-serif",
        fontWeight: 500
    };

    return (
        <>
            <style>
                {`
          @keyframes slideInRight {
            from { transform: translateX(400px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
        `}
            </style>
            <div style={style} className={`notification notification-${type}`}>
                {message}
            </div>
        </>
    );
};

export default Notification;
