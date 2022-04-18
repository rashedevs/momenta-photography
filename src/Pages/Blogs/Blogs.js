import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className=' blog-box' style={{ minHeight: "100vh" }}>
            <div className='single-blog'>
                <h5>Difference between authorization and authentication?</h5>
                <p>Authentication is the process of verifying who a person is, whereas authorization is the technique of verifying what precise applications, files, and data a user has get entry to to. In the digital world, authentication and authorization accomplish those equal goals. Authentication is used to verify that users simply are who they represent themselves to be. As soon as this has been confirmed, authorization is then used to grant the person permission to get entry to exceptional levels of information and perform specific functions, depending at the regulations set up for exclusive varieties of customers.</p>
            </div>
            <div className='single-blog'>
                <h5>Why are you using firebase? What other options do you have to implement authentication?</h5>
                <p>Firebase authentication makes it less difficult to get your users signed-in without having to recognize the complexities in the back of enforcing your very own authentication system.  It helps authentication using passwords, phone numbers, popular federated identification providers like google, fb and twitter, and more. There are many third party authentication solution providers we can use. As example: Okta, Auth0, IBM, Oracle etc. Other custom ways to authenticate can be through retina scans, voice recognition, cards and fingerprints.</p>
            </div>
            <div className='single-blog'>
                <h5>What other services does firebase provide other than authentication?</h5>
                <p>
                    Firebase provides services for tracking analytics, reporting and solving app crashes, product test, developing advertising and marketing experiment. Except authentication, there are numerous services which firebase provides. Some of them are: Cloud Firestore, Realtime database, Cloud Functions, Hosting, Google Analytics, Crashlytics, Predictions, Performance, Cloud Messaging, Test lab.
                </p>
            </div>
        </div>
    );
};

export default Blogs;