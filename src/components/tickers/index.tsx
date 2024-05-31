import React from 'react'
import HomeBanner from '../Home/Banner'
import CommonBanner from '../common/Banner'
import { getTickersData } from '@/utils/strapiApi'
import TickerInfo from './tickerlist'
import Item from 'antd/es/list/Item'
import CommonSearch from '../common/search/SearchField'

const TickerList = async ({ searchvalue }: any) => {
    const getTickerData = await getTickersData(searchvalue)
    if (!getTickerData) {
        return (<>
            <CommonBanner Heading={"Tickers"} />
            ....</>)
    }
    return (
        <div>
            <CommonBanner Heading={"Tickers"} />
            <div className="bd-blog-3-sidebar-area x-clip pt-50 pb-50 ">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-12">
                            <div className="bd-blog-3-sidebar-wrapper mb-60">
                                <CommonSearch navigate={'tickers-list'}/>
                            </div>
                        </div>
                        <div className="wow fadeInUp" data-wow-delay=".5s">
                            {getTickerData?.map((item: any, index: any) => <TickerInfo key={index} item={item.attributes} />)}

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TickerList
