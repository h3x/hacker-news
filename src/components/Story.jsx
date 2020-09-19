import React, {useEffect, useState} from 'react';
import {getStory} from '../services/hnAPI';

export const Story = ({storyId}) => {
    const [story, setStory] = useState({});

    useEffect( () => {
        const story = async () => {
             const data = await getStory(storyId);
             console.log(data)
             setStory(data);
        }
        story();
    },[])

    return story && story.url ? (
        <>
            <a href={story.url}>{story.title}</a>
            <p>By: {story.by}</p>
             <p>Posted: {story.time}</p>
        </>
    ):null;
}