import React from "react";
import { NewPost } from "../../features/newpost/NewPost";
import { PostsList } from "../../features/postslist/PostsList";
import { Search } from "../../features/search/Search";
import './MainPage.css'

export const MainPage = () => {
    return(
        <div className="content-container">
            <Search />
            <PostsList />
            <NewPost />
        </div>
    )
}