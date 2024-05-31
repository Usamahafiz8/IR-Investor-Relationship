"use client"
import React, { useState, useEffect, useCallback } from 'react';
import { Table, DatePicker, Button, Card } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


interface StockData {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

const HistoricalDataTable = ({ data, websiteInfo }: any) => {
  const [filteredData, setFilteredData] = useState<any>(data || []);
  const [fromDate, setFromDate] = useState<any | null>(null);
  const [toDate, setToDate] = useState<any | null>(null);


  const filterData = useCallback((start: Date, end: Date): StockData[] => {
    return data && data?.filter((item: any) => {
      const itemDate = new Date(item.date);
      return itemDate >= start && itemDate <= end;
    });
  }, [data]); // Dependency array

  // Initially, load the last two months data without setting dates in picker
  useEffect(() => {
    const end = new Date();
    const start = new Date();
    start.setMonth(end.getMonth() - 2);
    setFilteredData(filterData(start, end));
  }, [filterData]);

  const handleFromDateChange = (date: any | null, dateString: any) => {
    setFromDate(date);
  };

  const handleToDateChange = (date: any | null, dateString: any) => {
    setToDate(date);
  };

  const showResult = () => {
    if (fromDate && toDate) {
      setFilteredData(filterData(new Date(fromDate), new Date(toDate)));
    }
  };

  const showLatest = () => {
    const end = new Date();
    const start = new Date();
    start.setMonth(end.getMonth() - 2);
    setFilteredData(filterData(start, end));
    setFromDate(null);
    setToDate(null);
  };

  const columns = [
    { title: 'Date', dataIndex: 'date', key: 'date' },
    { title: 'Open', dataIndex: 'open', key: 'open' },
    { title: 'High', dataIndex: 'high', key: 'high' },
    { title: 'Low', dataIndex: 'low', key: 'low' },
    { title: 'Close', dataIndex: 'close', key: 'close' },
    { title: 'Volume', dataIndex: 'volume', key: 'volume' },
  ];

  return (
    <section className="py-16 bg-white w-full flex items-center justify-center xl:pe-1 lg:w-3/4 max-lg:w-3/4 xl:w-3/4 max-xl:w-3/4 xxl:px-8">
      {data ? <div className="p-4 flex flex-col items-start">
        <div className='flex flex-col items-start mb-5 gap-4'>
          <span className='text-2xl font-medium'>Price History</span>
          {websiteInfo?.data[0]?.attributes?.name && <div className="flex flex-col gap-1">
            <span className='text-xl font-medium'>
              {websiteInfo?.data[0]?.attributes?.name}
            </span>
            <span className='text-xl'>

              {websiteInfo?.data[0]?.attributes?.exchange} Capital Market: {websiteInfo?.data[0]?.attributes?.ticker}
            </span>
          </div>}

        </div>
        <LineChart
          width={730}
          height={250}
          data={filteredData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="close" stroke="#8884d8" />
        </LineChart>
        <div className='flex gap-3 items-center' style={{ marginBottom: 20 }}>
          <DatePicker onChange={handleFromDateChange} value={fromDate} placeholder="From Date" />
          <DatePicker onChange={handleToDateChange} value={toDate} placeholder="To Date" />
          <Button type="primary" onClick={showResult} disabled={!fromDate || !toDate}>
            Show Result
          </Button>
          <Button type="primary" onClick={showLatest}>
            Show Latest
          </Button>
        </div>
        <div className="overflow-x-auto w-full pe-6">
          <Table
            columns={columns}
            dataSource={filteredData}
            rowKey="date"
            pagination={{ pageSize: 10 }}
            scroll={{ x: 400 }}
          />
        </div>
      </div> : <div className='pt-20 text-md h-screen'  >
        Please check back soon for updates.
      </div>}
    </section>
  );
};

export default HistoricalDataTable;
