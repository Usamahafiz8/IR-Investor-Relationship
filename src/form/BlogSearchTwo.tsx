


import { useRouter } from 'next/navigation';
import React from 'react';
interface SearchFormProps {
  onSubmit: (keyword: string) => void;
  setKeyword: (keyword: string) => void;
  keyword:string
}
const BlogSearchTwo: React.FC<SearchFormProps> = ({ onSubmit,setKeyword,keyword }) => {
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/news?search=${keyword}`)
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // if(keyword.length>= 0){
    //   router.push(`/news  `)
    // }
    setKeyword(e.target.value);
  };


  return (
    <form onSubmit={handleSubmit}>
    <div className="bd-blog-3-search-input-2">
       <input type="text" onChange={handleChange} placeholder="Type here..." id="bd-blog-3-search-input-label"/>
       <div className="bd-blog-3-search-submit">
          <button type="submit"><i className="fa-regular fa-magnifying-glass"></i></button>
       </div>
    </div>
 </form>
  );
};
export default BlogSearchTwo;

                               
