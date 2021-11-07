import React from 'react';
import Appointment from '../Appointment/AppointmentBanner';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Navigation from './Shared/Navigation/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;