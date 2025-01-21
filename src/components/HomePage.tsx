import React, { useState } from 'react';
import CertificateDetails, { type CertificateData } from './CertificateDetails';
import VerificationForm from './VerificationFrom';

const HomePage = () => {
    const [pageState, setPageState] = useState('form');
    const [certificateData, setCertificateData] = useState<CertificateData>();

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