import { UserMain } from "./user_page/user-main"
import { HomePage } from "./home/home-main"


export const Core = () => {
    return (
        <div>
            CORE
            <HomePage/>

            <UserMain/>
        </div>
    )
}