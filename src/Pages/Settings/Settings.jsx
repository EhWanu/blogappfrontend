import Sidebar from '../../Components/Sidebar/Sidebar'
import './Settings.css'

export default function Settings() {
    return (
        <div className="settings">
           <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDelete Title">Delete Account</span>
                </div>  
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img 
                            src="https://images.pexels.com/photos/792326/pexels-photo-792326.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                            alt="" 
                        />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id='fileInput' style={{display: 'none'}} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder='Jim' />
                    <label>Email</label>
                    <input type="text" placeholder='jim@gmail.com' />
                    <label>Password</label>
                    <input type="password"/>
                    <button className="settingsSUBMIT">Update</button>
                    
                </form> 
            </div> 
           <Sidebar />
        </div>
    )
}
