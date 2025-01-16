import React from 'react';
import SampleCertificate from "../../public/certificate_sample.png";
import Footer from './Footer';
import dayjs from 'dayjs';

export interface CertificateData {
    isValid: boolean;
    message: string;
    certificateFile: string;
    courseName: string;
    issuedDate: string;
    courseDetails: {
        learningOutcomes: {
            title: string;
            description: string;
        }[];
        acquiredSkills: string[];
        courseDuration: string;
    };
    userDetails: {
        name: string;
        dateOfBirth: string;
    };
    statusCode: number;
}

type CertificateDetailsProps = Omit<CertificateData, 'isValid' | 'message' | 'statusCode'>;

const CertificateDetails: React.FC<CertificateDetailsProps> = ({
    userDetails,
    certificateFile,
    issuedDate,
    courseName,
    courseDetails,

}) => {
    return (
        <div className="min-h-screen">
            <div className="max-w-4xl mx-auto px-6 pb-16">
                {/* NavBar */}
                <nav>
                    <div className="container mx-auto py-3 shadow-sm">
                        <a href="/">
                            <img src="/entri_logo.png" alt="Brand Logo" className="w-[120px]" />
                        </a>
                    </div>
                </nav>

                {/* Profile Section */}
                <div className="flex flex-col md:flex-row md:items-center gap-6 mt-6 mb-12">
                    <img
                        src="/person.png"
                        alt="Profile"
                        className="w-20 md:w-60 h-20 md:h-60 rounded-full object-cover"
                    />
                    <div>
                        <h1 className="text-lg md:text-4xl font-bold md:font-semibold mb-3 md:mb-6">{userDetails.name}</h1>
                        <table>
                            <tbody>
                                <tr>
                                    <td className="text-xs md:text-base text-[#757575] pr-4">Date of birth</td>
                                    <td>:</td>
                                    <td className='pl-2 text-[#212121] font-medium text-sm md:text-lg'>{userDetails.dateOfBirth}</td>
                                </tr>
                                <tr>
                                    <td className="text-xs md:text-base text-[#757575] pr-4">Course Duration</td>
                                    <td>:</td>
                                    <td className='pl-2 text-[#212121] font-medium text-sm md:text-lg'>{courseDetails.courseDuration}</td>
                                </tr>
                                <tr>
                                    <td className="text-xs md:text-base text-[#757575] pr-4">Date of Issue</td>
                                    <td>:</td>
                                    <td className='pl-2 text-[#212121] font-medium text-sm md:text-lg'>
                                        {dayjs(issuedDate).format('D MMMM, YYYY')}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="flex items-start gap-2 mt-3 text-entriBlue bg-blueContainer md:bg-transparent p-3 pl-2 md:p-0">
                            <img src="/icon_verified.png" className="w-6 md:w-10 h-6 md:h-10" />
                            <p className='text-xs md:text-base'>
                                {`${userDetails.name}'s account is verified. Entri certifies their successful completion of ${courseName}`}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Certificate Section */}
                <div className="mb-6 md:mb-12">
                    <h2 className="text-xs md:text-lg text-grayText mb-3">Course Certificate</h2>
                    <h3 className=" md:text-4xl font-semibold mb-4 md:mb-6">{courseName}</h3>
                    <div className="bg-blueContainer p-8 rounded-lg">
                        <img
                            src={SampleCertificate.src}
                            alt="Certificate"
                            className="w-100 mx-auto"
                        />
                    </div>
                </div>

                {/* Reference Details */}
                <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-20">
                    <div className="bg-lightBg border border-borderLightGray px-3 py-2 md:p-4 rounded-lg">
                        <h3 className="text-grayText font-medium text-xs md:text-lg mb-2">Certificate Reference number</h3>
                        <p className="font-semibold text-sm md:text-2xl">ELCOM0114</p>
                    </div>
                    <div className="bg-lightBg border border-borderLightGray px-3 py-2 md:p-4 rounded-lg">
                        <h3 className="text-grayText font-medium text-xs md:text-lg mb-2">Certifying Organization</h3>
                        <p className="font-semibold text-sm md:text-2xl">Entri Software Private Limited</p>
                    </div>
                </div>

                {/* Expertise Section */}
                <div className="mb-8 md:mb-20">
                    <h2 className="md:text-4xl font-semibold mb-4 md:mb-6">Areas of Expertise Acquired</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {courseDetails.learningOutcomes.map((item, index) => (
                            <div key={index} className="flex gap-2 md:gap-4 text-[10px] md:text-base">
                                <img src="/icon_check.png" className="w-5 md:w-8 h-5 md:h-8" />
                                <div>
                                    <h3 className="font-semibold mb-2">{item.title}</h3>
                                    <p className="text-darkGray">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Skills Section */}
                <div>
                    <h2 className="md:text-4xl font-semibold mb-6">Skills Demonstrated</h2>
                    <div className="flex flex-wrap gap-4">
                        {courseDetails.acquiredSkills.map((skill, index) => (
                            <span key={index} className="px-4 py-2 bg-lightBg text-darkGray text-xs md:text-base rounded-full">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer  */}
            <Footer />
        </div>

    );
};

export default CertificateDetails;
