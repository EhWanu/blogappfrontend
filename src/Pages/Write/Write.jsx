import './Write.css';

export default function Write() {
    return (
        <div className="write">
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i class="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id='fileInput' style={{display: "none"}} />
                    <input type="text" placeholder="Title" className="writeInput" autofocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea 
                        placeholder="Tell Your Story..." 
                        type="text" 
                        className="writeInput writeText">
                    </textarea>
                    <button className="writeSubmit">Publish</button>
                </div>
            </form>
        </div>
    )
}
