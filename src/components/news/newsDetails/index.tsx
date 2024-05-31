import CommonBanner from '@/components/common/Banner'
import React from 'react'
import Details from './Details'

const NewsDetails = ({ ID, detailof}: any) => {
    return (
        <div>
            <CommonBanner Heading={detailof} />
            <div className='container pt-16 pb-16'>
                <Details ID={ID} />
            </div>
        </div>
    )
}

export default NewsDetails
