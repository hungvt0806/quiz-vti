import React from 'react'

const Profile = () => {
  return (
    <div className='h-full w-full bg-gray-100 flex items-center justify-center'>
      <div className="profile-wrapper">
                  <div className="body ">
                      <div className="cards">
                            <div className="left">
                                <div className="img-uploader">
                                    <div>Upload Avatar Image</div>
                                    <div className="upload-box">
                                        <input  type="file" />
                                       
                                            <img className="display-image" src="" />
                                             
                                    </div>
                                    <div style={{ fontSize: '.8em', margin: '20px 0'}}></div>
                                    <button className="image-btn" >Save</button>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
    </div>
  )
}

export default Profile;
