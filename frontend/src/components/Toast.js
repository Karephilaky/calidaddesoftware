import React, { useRef } from 'react';
import { Toast } from 'primereact/toast';

const Notification = () => {
    const toast = useRef(null);

    const showSuccess = (message) => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: message, life: 3000 });
    };

    const showError = (message) => {
        toast.current.show({ severity: 'error', summary: 'Error', detail: message, life: 3000 });
    };

    return (
        <div>
            <Toast ref={toast} />
        </div>
    );
};

export default Notification;
