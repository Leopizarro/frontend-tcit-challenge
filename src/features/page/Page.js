import React from "react";
import { NewPost } from "../newpost/NewPost";
import { PostsList } from "../postslist/PostsList";
import { Search } from "../search/Search";
import './Page.css'

export const Page = () => {
    return(
        <div className="content-container">
            <Search />
            <PostsList />
            <NewPost />
        </div>
    )
}