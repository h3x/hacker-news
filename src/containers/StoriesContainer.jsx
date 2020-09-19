import React, {useEffect, useState} from 'react';
import {getStoryIds} from '../services/hnAPI';
import {Story} from '../components/Story';

export const StoriesContainer = () => {
    const [storyIds, setStoryIds] = useState([])
    
    useEffect(()=> {
        const getNewStories = async() => {
            const stories = await getStoryIds();
            setStoryIds(stories);
        }
        getNewStories();
           
    }, [])

    return (
        <>
            {storyIds.map(story => <Story key={story} storyId={story} />)}
        </>
    )
}