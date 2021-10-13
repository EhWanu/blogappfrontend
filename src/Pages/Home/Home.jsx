import Header from '../../Header/Header'
import Posts from '../../Posts/Posts'
import Sidebar from '../../Sidebar/Sidebar'
import './Home.css'

export default function Home() {
    return (
        <>
            <Header />
                <div className="home">
                    <Posts />
                    <Sidebar />
                </div>
        </>
    )
}
