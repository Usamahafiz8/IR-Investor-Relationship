
"use client";
import React, { useState } from "react";
import NewsSearch from "../form/NewsSearch";


const SearchNews = () => {
    const [keyword, setKeyword] = useState(" ");
    const handleSubmit = (keyword: string) => {
        setKeyword(keyword);
    };
    return (
        <NewsSearch
            keyword={keyword}
            setKeyword={setKeyword}
            onSubmit={handleSubmit}
        />
    )
}

export default SearchNews
