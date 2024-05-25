import { DeleteOutlined } from '@ant-design/icons';
import { Checkbox, Progress, Select } from 'antd'
import React from 'react'
import { FaSort } from 'react-icons/fa'


const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
const Dashboard = () => {

    

  return (
    <div className=' w-full h-full bg-gray-100 p-4 flex-col items-center justify-center'>






              
    <div className="bg-white p-4 m-2 rounded-md mt-4">
        <div className='flex items-center justify-between'>
    <h2 className="text-gray-500 text-lg font-semibold pb-4">Quizzes Table</h2>

    <Select
      defaultValue="This month"
      style={{
        width: 120,
      }}
      onChange={handleChange}
      options={[
        {
          value: 'Today',
          label: 'Today',
        },
        {
          value: 'Yesterday',
          label: 'Yesterday',
        },
        {
          value: 'Last week',
          label: 'Last week',
        },
        {
            value: 'This month',
            label: 'This month',
          },
          {
            value: 'Last month',
            label: 'Last month',
          },
          {
            value: 'This year',
            label: 'This year',
          },
          {
            value: 'All time',
            label: 'All time',
          },
        
      ]}
    />
    </div>
    <div className="my-1"></div> 
    <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div> 
    <table className="w-full table-auto text-sm">
        <thead>
            <tr className="text-sm leading-normal">
                <th className="w-1/12 py-2 px-1 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light"><DeleteOutlined/></th>
                <th className="w-1/6 py-2 px-1 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Image</th>
                <th className="w-1/3 py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Title</th>
                <th className="w-1/6 py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                <div className='flex items-center justify-center'>
                <select value="" onChange="" name='category' className='add-product-selector box-border  w-full h-[30px]  rounded-md pl-3 border border-gray-300 outline-none text-gray-700 text-sm'>
                    <option value="all">All Category</option>
                    <option value="math">Toan hoc</option>
                    <option value="science">Khoa hoc</option>
                    <option value="languae">Ngon Ngu</option>
                    <option value="english">Tieng Anh</option>
                    <option value="sci_soc">KH_XH</option>
                    <option value="comp">May Tinh</option>
                    <option value="career">GD_NgheNghiep</option>
                    <option value="arts">Nghe Thuat</option>
                    <option value="health">Suc Khoe</option>
                </select>
                    </div>
                    </th>
                <th className="w-1/6 py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                <div className='flex items-center justify-center'>
                    <span>Take Quiz</span> 
                    <button><FaSort /></button>
                    </div>
                    </th>
                <th className="w-1/6 py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                <div className='flex items-center justify-center'>
                    <span>Accuracy</span> 
                    <button><FaSort /></button>
                    </div>
                    </th>
            
            </tr>
        </thead>
        <tbody>
            <tr className="hover:bg-grey-lighter">
                <td className="py-2 px-1 border-b border-grey-light  w-1/12 text-center"><Checkbox  onChange=""/></td>
                <td className="py-2 px-1 border-b border-grey-light w-1/6  pl-14"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBBe7xC4qeoclB8mxE8VeWi6ZPRBQsILZDRA&s" alt="Foto Perfil" className="h-10 rounded-lg w-10"/></td>
                <td className="py-2 px-4 border-b border-grey-light w-1/3 text-left font-bold">This is my first Quiz</td>
                <td className="py-2 px-4 border-b border-grey-light  w-1/6 text-center">Football</td>
                <td className="py-2 px-4 border-b border-grey-light  w-1/6 text-center">May-17</td>
                <td className="py-2 px-4 border-b border-grey-light  w-1/6 text-center">
                <Progress type="circle" percent={30} size={40} />
                </td>
            </tr>
            
            
        </tbody>
    </table>
    
    
                </div>
    </div>
                
 
  )
}

export default Dashboard
