


import { useRouter } from 'next/navigation';
import React from 'react';
interface SearchFormProps {
  onSubmit: (keyword: string) => void;
  setKeyword: (keyword: string) => void;
  keyword: string;
  navigate:string;
}
const CommonSearchForm = ({ onSubmit, setKeyword, keyword , navigate }: SearchFormProps) => {
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/${navigate}?search=${keyword}`)
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="bd-blog-3-search-input-2">
        <input type="text" onChange={handleChange} placeholder="Search here..." id="bd-blog-3-search-input-label" />
        <div className="bd-blog-3-search-submit">
          <button type="submit"><i className="fa-regular fa-magnifying-glass"></i></button>
        </div>
      </div>
    </form>
  );
};
export default CommonSearchForm;


