import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom"
import { CurrentUserContext } from "./UserInfo"

function CocktailDetail () {
    const [ cocktail, setCocktail ] = useState([])
    const [ comments, setComments ] = useState([])
    const [ newComment, setNewComment ] = useState("")
    const { id } = useParams()
    const { base, username, description, image, dateCreated, likes } = cocktail
    const [ likeCount, setLikeCount ] = useState(0)
    const date = new Date()
    const jsonDate = date.toJSON()
    const currentUser = useContext(CurrentUserContext)


    useEffect(() => {
        fetch(`http://localhost:3000/cocktails/${id}`)
        .then(r => r.json())
        .then(data => {
            setCocktail(data)
            setLikeCount(data.likes)
            setComments(data.comments)
        })
    }, [])

    //console.log(comments)

    //comments.map(comment => console.log(comment))


    function handleNewCommentInput(e){
        setNewComment(e.target.value)
    }

    function handleNewCommentSubmit(e){
        e.preventDefault()
        const newCommentData = {
            username: currentUser,
            comment: newComment,
            dateCommentCreated: jsonDate
        }
        fetch(`http://localhost:3000/cocktails/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "comments": [...comments, {
                "username": newCommentData.username,
                "comment": newCommentData.comment,
                "dateCommentCreated": newCommentData.dateCommentCreated
                }]
            })
        })
        .then(r => r.json())
        .then(data => {
            setComments(data.comments)
            console.log(data)
        })
    }


    function handleLikeClick(){
        setLikeCount((likeCount) => likeCount + 1)
        fetch(`http://localhost:3000/cocktails/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ "likes": likeCount + 1 })
        })
        .then(r => r.json())
    }

    return (
        <section>
            <div className="cocktail-card">
                <img src={image} width="100px" alt={base} />
                <p>{username}: <span> {dateCreated}</span> </p>
                <p>Base: {base}</p>
                <p>Description: {description} </p>
                <button onClick={handleLikeClick}>Like &#10084;</button>
                <label> {likeCount} Likes </label>
                <form onSubmit={handleNewCommentSubmit}>
                    <input onChange={handleNewCommentInput} type="text" placeholder="add comment" />
                    <button>Add</button>
                </form>
                <ul>
                    {comments.map(comment => {
                        return (
                            <li key={comment.dateCommentCreated}>
                                {comment.username}: {comment.comment} ({comment.dateCommentCreated})
                            </li>
                        )
                    })}
                </ul>
                
            </div>
        </section>
    )
}

export default CocktailDetail;