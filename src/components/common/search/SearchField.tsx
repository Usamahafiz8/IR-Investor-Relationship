
"use client";
import React, { useState } from "react";
import CommonSearchForm from "./SearchForm";


const CommonSearch = ({navigate}:any) => {
    const [keyword, setKeyword] = useState(" ");
    const handleSubmit = (keyword: string) => {
        setKeyword(keyword);
    };
    return (
        <CommonSearchForm
            keyword={keyword}
            setKeyword={setKeyword}
            onSubmit={handleSubmit}
            navigate={navigate}
        />
    )
}

export default CommonSearch
