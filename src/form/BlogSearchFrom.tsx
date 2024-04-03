import React from 'react';
interface SearchFormProps {
  onSubmit: (keyword: string) => void;
  setKeyword: (keyword: string) => void;
  keyword:string
}
const BlogSearchFrom: React.FC<SearchFormProps> = ({ onSubmit,setKeyword,keyword }) => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(keyword);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="bd-blog-3-search-input-label">Search by Keyword</label>
      <div className="bd-blog-3-search-input">
        <input
          type="text"
          name="text"
          placeholder="Type here..."
          id="bd-blog-3-search-input-label"
          onChange={handleChange}
        />
        <div className="bd-blog-3-search-submit">
          <button type="submit">
            <i className="fa-regular fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
    </form>
  );
};
export default BlogSearchFrom;
