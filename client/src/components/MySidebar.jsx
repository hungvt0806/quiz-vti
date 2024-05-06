import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import avatarUser from '../assets/avatarUser.png';
import logo from '../assets/logo.png';
import { TinyColor } from '@ctrl/tinycolor';
import { Button, ConfigProvider, Modal } from 'antd';
import { BankOutlined, CameraOutlined,  FormOutlined, LogoutOutlined, MonitorOutlined, PlusCircleOutlined, SettingOutlined } from '@ant-design/icons';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import authService from '../services/authService';

const colors2 = ['#fc6076', '#ff9a44', '#ef9d43', '#e75516'];

const getHoverColors = (colors) =>
  colors.map((color) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors) =>
  colors.map((color) => new TinyColor(color).darken(5).toString());

const MySidebar = () => {

  const [username, setUsername] = useState("");
  const [role, setRole] = useState("User");
  const [avatar, setAvatar] = useState("");
  const [newAvatar, setNewAvatar] = useState(null); // State để lưu trữ ảnh mới
  const [isModalVisible, setIsModalVisible] = useState(false); // State để điều khiển hiển thị Modal
  const [isUpload,setIsUpload] =useState(false);
  const [newAvatarURL, setNewAvatarURL] = useState(null);
  const [oldAvatarURL, setOldAvatarURL] = useState(null);


  useEffect(() => {
    // Lấy dữ liệu từ localStorage khi component được tạo
    const storageUser = localStorage.getItem('username');
    const storageRole = localStorage.getItem('role');
    const storageImage = localStorage.getItem('avatar');
    
    if (storageUser) setUsername(storageUser.replace(/"/g, '')); 
    if (storageRole) setRole(storageRole);
    if (storageImage !== "none") setAvatar(storageImage);
    else setAvatar(avatarUser);

    // Lưu giá trị avatar ban đầu vào oldAvatarURL
    setOldAvatarURL(newAvatarURL);

  }, []);
  
  // Phương thức xử lý khi người dùng chọn ảnh mới
  const handleImageUpload = (e) => {
    console.log(e.target.files)
    const file = e.target.files[0];
  if (file) {
    // Tạo URL cho hình ảnh được chọn
    const imageURL = URL.createObjectURL(file);
    // Cập nhật state newAvatarURL với URL của hình ảnh mới
    setNewAvatarURL(imageURL);
    // Cập nhật state newAvatar với file hình ảnh được chọn
    setNewAvatar(file);
    setIsUpload(true);
  };
}

  // Phương thức xử lý khi người dùng nhấn nút "Upload"
  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('avatar', newAvatar);

      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Image uploaded successfully:', response.data);
      setNewAvatar(response.data.image_url)
      setOldAvatarURL(response.data.image_url)
      toast.success('Image uploaded successfully');
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error('Error uploading image');
    }
    setIsModalVisible(false);
    setIsUpload(false);
  };



  

 // Phương thức xử lý khi modal bị hủy
 const handleCancel = () => {
  // Đặt lại giá trị của newAvatarURL và newAvatarURL về giá trị của avatar cũ
  setNewAvatarURL(oldAvatarURL);
  setIsModalVisible(false);
  setIsUpload(false);
};

  
  return (
    <div className='h-screen w-[300px] bg-gray-800'>
      <div className='bg-white h-[50px]'>
        <div className='text-xl font-bold text-center flex items-center justify-center text-red h-full'>
        <img src={logo} alt="logo"  className='w-[130px]'/>
        </div>
      </div>
      <div className='flex flex-col justify-between h-[calc(100vh-3rem)] bg-white'>
        <div className='menu-man text-left whitespace-nowrap'>
            <div className='profile flex justify-center items-center text-center p-5'>
                <div className='text-center'>
                  <div className='flex items-end'>
                  <img src={newAvatarURL || avatar ||oldAvatarURL|| avatarUser} alt="Jack" className="rounded-full w-24 h-24 mr-0 mb-2" />
                <label htmlFor="file-upload">
                  <CameraOutlined className='mb-4 ml-0 cursor-pointer'/>
                </label>
                <input id="file-upload" type="file" onChange={handleImageUpload} style={{ display: "none" }} />
              </div>
               
               {isUpload && (
                <Button type="primary" className='w-15 h-7 text-center' onClick={() => setIsModalVisible(true)}>Upload</Button>
              )}
                    <h5 className='text-xl font-medium leading-tight mb-2'>{username}</h5>
                    <p className='text-gray-600'>{role =="true"?'Admin':'User'}</p>
                </div>
            </div>
            <div className='flex justify-center py-2'>

            <ConfigProvider
            theme={{
             components: {
                Button: {
                colorPrimary: `linear-gradient(90deg,  ${colors2.join(', ')})`,
                colorPrimaryHover: `linear-gradient(90deg, ${getHoverColors(colors2).join(', ')})`,
                colorPrimaryActive: `linear-gradient(90deg, ${getActiveColors(colors2).join(', ')})`,
                lineWidth: 0,
                  },
                },
              }}
            >
            <Link to="/" className="px-2 flex space-x-2">        
              <Button type="primary" size="large" className='flex items-center justify-center py-2 w-[200px] h-[50px]'>
              <PlusCircleOutlined />
               CREAT
              </Button>
              </Link>
            </ConfigProvider>
                    </div>

           

            <div className="py-3 w-full cursor-pointer text-gray-600 hover:text-white hover:bg-gray-300">
                <Link to="/admin" className="px-7 flex space-x-2">
                <MonitorOutlined />
                <span>Explore</span>
                </Link>
            </div>

            <div className="py-3  cursor-pointer text-gray-600 hover:text-white hover:bg-gray-300">
                <Link to="/admin/createdByMe" className="px-7 flex space-x-2">
                <BankOutlined />
                <span >My Library</span>
                </Link>
            </div>

            {role === "true" &&
            <div className="py-3 cursor-pointer text-gray-600 hover:text-white hover:bg-gray-300">
                <Link to="/admin/report" className="px-7 flex space-x-2">
                <FormOutlined />
                <span>Report</span>
                </Link>
            </div>
            }
            <div className="py-3 cursor-pointer text-gray-600 hover:text-white hover:bg-gray-300">
                <Link to="/admin/setting" className="px-7 flex space-x-2">
                <SettingOutlined />
                <span>Setting</span>
                </Link>
            </div>

            <div className="py-3  cursor-pointer text-gray-600 hover:text-white hover:bg-gray-300" >
                <Link to="/" className="px-7 flex space-x-2">
                <LogoutOutlined />
                <span>Logout</span>
                </Link>
            </div>

        </div>
      </div>
      <Modal title="Upload Avatar" visible={isModalVisible} onOk={handleUpload} onCancel={handleCancel}>
        <p>Are you sure ?</p>
      </Modal>
    </div>
  )
}

export default MySidebar