import React, { useState, useEffect } from "react";

function CocktailDetail ({ currentUser }) {
    const [ cocktail, setCocktail ] = useState([])
    const [ comments, setComments ] = useState([])
    const [ newComment, setNewComment ] = useState("")
    const id = 2

    useEffect(() => {
        fetch(`http://localhost:3000/cocktails/${id}`)
        .then(r => r.json())
        .then(data => setCocktail(data))
        fetch(`http://localhost:3000/comments/`)
        .then(r => r.json())
        .then(data => setComments(data))
    }, [id])


    function handleDelete(){
        
    }

    function handleNewCommentInput(e){
        setNewComment(e.target.value)
    }

    function handleNewCommentSubmit(e){
        e.preventDefault()
        const newCommentData = {
            username: currentUser,
            comment: newComment
        }
        fetch(`http://localhost:3000/comments/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "username": newCommentData.username,
                "comment": newCommentData.comment,
                "commentID": id
            })
        })
        .then(r => r.json())
        .then(data => setComments([...comments, data]))
    }

    if (!cocktail) return <h2>Loading...</h2>

    const { base, username, description, image, dateCreated, likes } = cocktail


    return (
        <section>
            <div className="cocktail-card">
                <img src={image} width="100px" alt={base} />
                <p>{username} <span> {dateCreated}</span> </p>
                <p>Base: {base}</p>
                <p>Description: {description} </p>
                <label>Likes &#10084; </label>
                <button>{likes} Likes</button>
                <button onClick={handleDelete} >Delete</button>
                <form onSubmit={handleNewCommentSubmit}>
                    <input onChange={handleNewCommentInput} type="text" placeholder="add comment" />
                    <button>Add</button>
                </form>
                <ul>
                    {comments.map(comment => {
                        if (comment.commentID === id){
                        return (
                            <li key={comment.id}>{comment.username}: {comment.comment}</li>
                        )
                        }
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default CocktailDetail;