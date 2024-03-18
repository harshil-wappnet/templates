import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from 'react';
import { fetchData, fetchTags, addPost } from '../api/api'

const Buttons = () => {
    const [page, setPage] = useState(1);

    const queryClient = useQueryClient();
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['posts'],
        queryFn: fetchData,
    })

    const { data: tagsData, isLoading: isTagsLoading } = useQuery({
        queryKey: ["tags"],
        queryFn: fetchTags,
        // 👇 Since this wont change we dont want to refetch it
        staleTime: Infinity,
    });

    const {
        mutate,
        isPending,
        isError: isPostError,
        reset,
    } = useMutation({
        mutationFn: addPost,
        //👇 num of times it will retry before failing
        retry: 3,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["posts", { page }],
                exact: true,
                queryKey: ["todos", { page: 10 }],
                predicate: (query) => query.queryKey[0] === "posts" && query.queryKey[1].page >= 2,
            });
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const title = formData.get("title");
        const tags = Array.from(formData.keys()).filter(
            (key) => formData.get(key) === "on"
        );

        if (!title || tags.length === 0) return;

        // Find the maximum ID from existing posts
        const maxId = fetchData?.data?.reduce((max, post) => Math.max(max, post.id), 0);

        // Generate a new ID by incrementing the maximum ID
        const nextId = maxId !== undefined ? maxId + 1 : 1;

        mutate({ id: nextId, title, tags });

        e.target.reset(); // reset form
    };
    return (
        <div>
            <h1>Buttons Component</h1>
            <form onSubmit={handleSubmit}>
                {isPostError && <h5 onClick={() => reset()}>Unable to Post</h5>}
                <input
                    type="text"
                    placeholder="Enter your post.."
                    className="postbox"
                    name="title"
                />
                <div className="tags">
                    {tagsData?.map((tag) => {
                        return (
                            <div key={tag}>
                                <input name={tag} id={tag} type="checkbox" />
                                <label htmlFor={tag}>{tag}</label>
                            </div>
                        );
                    })}
                </div>
                <button disabled={isPending}>
                    {isPending ? "Posting..." : "Post"}
                </button>
            </form>
            {isLoading &&
                <span className="visually-hidden">Loading...</span>
            }
            {isError && <h3>{error?.message}</h3>}
            <div className='row row-cols-2'>
                {data && data.map((item) => (
                    <div key={item.id} className='col my-3'>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                {
                                    item.tags.map((tag) => {
                                        return (
                                            <span key={tag} className='tags'>{tag}</span>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Buttons
