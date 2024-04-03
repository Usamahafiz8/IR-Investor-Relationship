import Link from 'next/link';
import React from 'react';

const BlogSideLinks = () => {
    return (
        <>
            <div className="bd-blog-3-sidebar mb-50">
                        <h5 className="bd-blog-3-sidebar-title">Categories</h5>
                        <div className="bd-blog-3-sidebar-cat">
                           <ul>
                              <li>
                                 <Link href="/blog">
                                    <span>Restaurant</span>
                                    <span>(04)</span>
                                 </Link>
                              </li>
                              <li>
                                 <Link href="/blog">
                                    <span>Hotel</span>
                                    <span>(03)</span>
                                 </Link>

                              </li>
                              <li>
                                 <Link href="/blog">
                                    <span>Event</span>
                                    <span>(02)</span>
                                 </Link>
                              </li>
                              <li>
                                 <Link href="/blog">
                                    <span>Pool</span>
                                    <span>(04)</span>
                                 </Link>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="bd-blog-3-sidebar mb-50">
                        <h5 className="bd-blog-3-sidebar-title">Tags</h5>
                        <div className="bd-blog-3-sidebar-content">
                           <div className="bd-blog-3-sidebar-tag">
                              <ul>
                                 <li><Link href="/blog">luxury</Link></li>
                                 <li> <Link href="/blog">deals</Link></li>
                                 <li><Link href="/blog">booking</Link></li>
                                 <li><Link href="/blog">motel</Link></li>
                                 <li><Link href="/blog">cheap</Link></li>
                                 <li><Link href="/blog">Restaurant</Link></li>
                                 <li><Link href="/blog">Popular</Link></li>
                              </ul>
                           </div>
                        </div>
                     </div>
        </>
    );
};

export default BlogSideLinks;