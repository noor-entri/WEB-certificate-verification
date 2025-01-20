import React, { useState } from 'react';
import CertificateDetails from './CertificateDetails';
import VerificationForm from './VerificationFrom';

const HomePage = () => {
    const [pageState, setPageState] = useState('form');
    const [certificateData, setCertificateData] = useState<any>(null);

    const handleOnFormSuccess = (certificateData: any) => {
        setCertificateData(certificateData);
        setPageState('details');
    };

    return (
        <div>
            {pageState === 'form' && <VerificationForm onSuccess={handleOnFormSuccess} />}
            {pageState === 'details' && certificateData && <CertificateDetails {...certificateData} />}
        </div>
    );
};

export default HomePage;