import React from 'react'
import HeaderTwo from './header/HeaderTwo'
import Footer from './footer/Footer';

const MainLayout = ({ children }: any) => {
    
    return (
        <div className='flex flex-col'>
            <HeaderTwo />
            {children}
            <Footer customeClass="bd-footer footer-bg" />;
        </div>
    )
}

export default MainLayout
