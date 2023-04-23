import './Write.css'
import resim1 from '../../assets/history.jpeg'

export default function Write() {
  return (
    <div className='write'>
        <img className='writeImg' src={resim1} alt=''></img>
        <form  className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor='fileInput'>
                <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type='file' id='fileInput' style={{display: 'none'}}></input>
                <input className='writeInput' type='text' placeholder='Title' autoFocus={true}></input>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder='Tell history..' type='text' className='writeInput writeText'>
                    
                </textarea>
            </div>
            <button className="writeSubmit">
                Publish
            </button>
        </form>
    </div>
  )
}
