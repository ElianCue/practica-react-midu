import { useState } from "react"




export function TwitterFollowCard ({userName, name}) {

    const [isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'


    const [overMouse, isOverMouse] = useState(false);
    
    const hoverMouse = () =>{
        isOverMouse(!overMouse)
    } 

    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }


    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img alt="chofa" src={`https://unavatar.io/${userName}`} className="tw-followCard-avatar" />
                <div className="tw-followCard-info">
                    <strong className="followCard-infoUserName">{name}</strong>
                    <span>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick} onMouseOver={hoverMouse}>
                    {text}
                </button>
            </aside>
        </article>
    )
}