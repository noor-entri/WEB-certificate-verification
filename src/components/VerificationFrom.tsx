import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import type { CertificateData } from './CertificateDetails';
import { API_BASE_URL } from 'astro:env/client';

interface VerificationFormProps {
    onSuccess: (data: CertificateData) => void;
}

const VerificationForm: React.FC<VerificationFormProps> = ({ onSuccess }) => {
    const [certificateCode, setCertificateCode] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isValid, setIsValid] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const query = new URLSearchParams(document.location.search);
        const ref = query.get('ref');
        if (ref) {
            setCertificateCode(ref);
            fetchCertificateData(ref);
        }
    }, []);

    const resetStates = () => {
        setIsValid(false);
        setError('');
        // remove query params
        window.history.replaceState({}, document.title, window.location.pathname);
    }

    const fetchCertificateData = (certificateId: string) => {
        resetStates();
        setIsLoading(true);

        const newCertificateData: CertificateData = {
            "isValid": true,
            "message": "Certificate found",
            "referenceNumber": "2024/01",
            "certificateFile": "https://storage.googleapis.com/entri-certificates/user_certificates/2024/01/test_certificate.pdf",
            "issuedDate": "2024-01-17T10:37:57.123456Z",
            "courseName": "Accounting and Finance",
            "isEnhancedVerification": true,
            "courseDetails": {
                "learningOutcomes": [
                    {
                        title: "Fundamentals of Accounting",
                        description: "Established a solid foundation in accounting principles, essential for accurate financial management and reporting"
                    },
                    {
                        title: "Computerized Accounting (Tally Prime)",
                        description: "Gained hands-on experience with industry-standard accounting software, streamlining financial operations."
                    },
                    {
                        title: "Business Structure and Banking Essentials",
                        description: "Acquired a comprehensive understanding of business frameworks and banking functions critical to corporate success."
                    },
                    {
                        title: "Corporate and Labour Law",
                        description: "Developed proficiency in essential legal regulations governing businesses and employee rights, ensuring compliance and risk management."
                    }
                ],
                "acquiredSkills": [
                    "Financial Accounting",
                    "Business Finance",
                    "Budgeting & Forecasting",
                    "Financial Analysis",
                    "Tax Compliance",
                    "Labour Law",
                    "Corporate Law",
                    "Financial Reporting",
                    "Professional Communication",
                ],
                "courseDuration": "6 months"
            },
            "userDetails": {
                "name": "John Doe",
                "dateOfBirth": "1990-01-01"
            },
            "statusCode": 200
        }

        const oldCertificateData = {
            "isValid": true,
            "message": "Certificate found",
            "certificateFile": "https://storage.googleapis.com/entri-certificates/user_certificates/2024/01/certificate.pdf",
            "issuedDate": "2024-01-17T12:00:00Z",
            "courseDetails": null,
            "isEnhancedVerification": false,
            "userDetails": {
                "name": "John Doe",
                "dateOfBirth": "1990-01-01"
            },
            "statusCode": 200
        }


        fetch(`${API_BASE_URL}/v9/certificate/validate/?ref=${certificateId}`)
            .then(response => response.json())
            .then(data => {
                const { isValid, courseDetails, message, isEnhancedVerification } = data;
                if (isValid) {
                    if (isEnhancedVerification && courseDetails) {
                        onSuccess({ referenceNumber: certificateCode, ...data });
                    } else {
                        setIsValid(true);
                    }
                } else {
                    setError(message);
                }
            })
            .catch(error => {
                setError('An error occurred while fetching certificate details');
                console.error('Error:', error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetchCertificateData(certificateCode);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCertificateCode(e.target.value.trim());
        resetStates();
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <div className='w-full grid grid-cols-8 flex-grow'>
                {/* Left Section with Illustration */}
                <div className="bg-blueContainer p-8 flex items-center justify-center col-span-8 md:col-span-3">
                    <img
                        src="/illustration_1.png"
                        alt="Certificate Verification Homepage Illustration"
                        className="w-[70%] md:w-100"
                    />
                </div>
                {/* Right Section with Form */}
                <div className="p-8 flex flex-col justify-center max-w-2xl mx-auto col-span-8 md:col-span-5">
                    <div className="mb-8 text-center md:text-left">
                        <h1 className="text-lg md:text-5xl font-bold md:font-semibold mb-2">
                            Certificate Verification
                        </h1>
                        <p className="text-sm text-grayText mb-8">
                            Verify Your Certification Details Here
                        </p>
                        <form onSubmit={handleFormSubmit}>
                            <div className="mb-6">
                                <input
                                    type="text"
                                    id="certificate-code"
                                    name='ref'
                                    value={certificateCode}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 border ${error ? 'border-redText' : 'border-borderGray'
                                        } rounded-lg focus:ring-2 focus:ring-entriBlue focus:border-transparent`}
                                    placeholder="Certificate Reference Code"
                                />
                                {error && (
                                    <p className="ml-4 mt-2 text-left text-xs text-redText">
                                        {error}
                                    </p>
                                )}
                                {isValid && (
                                    <div className='flex items-center gap-2 mt-3'>
                                        <img src="/icon_verified.png" className="w-6 h-6 inline-block" />
                                        <p className="text-left text-green-600">
                                            Certificate is valid
                                        </p>
                                    </div>
                                )}
                            </div>
                            <button
                                type='submit'
                                disabled={!certificateCode.trim() || isLoading}
                                className="w-full bg-entriBlue text-white py-3 rounded-full text-sm font-bold hover:bg-blue-700 transition-colors disabled:bg-disabledBg disabled:text-disabledText"
                            >
                                Verify
                            </button>
                        </form>
                        <div className="text-left mt-12 p-6 rounded-lg bg-lightBg border border-borderLightGray">
                            <h2 className="font-semibold text-darkGray mb-2">
                                About Entri App
                            </h2>
                            <p className="text-darkGray text-xs md:text-sm mb-4">
                                Entri App is a rapidly growing e-learning platform in India, serving over 10 million users. It offers a diverse range of courses, including government job preparation, coding, digital marketing, spoken English, and finance, all available in six regional languages.
                            </p>
                            <a
                                href="https://entri.app"
                                target='_blank'
                                className="text-entriBlue text-xs md:text-sm hover:underline"
                            >
                                Learn more
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerificationForm;
