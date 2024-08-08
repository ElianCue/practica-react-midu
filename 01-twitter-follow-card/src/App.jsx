import { TwitterFollowCard } from "./TwitterFollowCard";

export function App () {
    return (
        <>
            <TwitterFollowCard isFollowing={true} userName="elianc_c" name="Elian Cueva Coronel"/>
            <TwitterFollowCard isFollowing={false} userName="_sofizepam" name="Sofia Abigail Palazzini"/>
        </>
    )
};