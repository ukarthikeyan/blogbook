import {useState} from 'react'

const CreateBlog = ()=>{

    const [formData, setFormData] = useState({
        title:'',
        author:'',
        content:''
    })

    const handleChange = (e)=>{
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        //setFormData(formData)
        console.log(formData)
    }
    return(
        
    
<div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6 bg-white border-b border-gray-200">
                    <form method="POST" action="" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="text-xl text-gray-600">Title <span className="text-red-500">*</span></label> <br/>
                            <input type="text" className="border-2 border-gray-300 p-2 w-full" name="title" id="title" value={formData.value} onChange={handleChange} placeholder="Blog Title" required/>
                        </div>

                        <div className="mb-4">
                            <label className="text-xl text-gray-600">Author</label><br/>
                            <input type="text" className="border-2 border-gray-300 p-2 w-full" name="author" id="author" placeholder="Name" value={formData.value} onChange={handleChange} required/>
                        </div>

                        <div className="mb-8">
                            <label className="text-xl text-gray-600">Content <span className="text-red-500">*</span></label><br/>
                            <textarea name="content" id="content" className="border-2 w-full h-72 border-gray-500" placeholder="Blog Content..." value={formData.value} onChange={handleChange} required>
                                
                            </textarea>
                        </div>

                        <div className="flex p-1">
                            {/* <input type='submit' value="Post Blog"/> */}
                            <select className="border-2 border-gray-300 border-r p-2" name="action">
                                <option>Save and Publish</option>
                                <option className='disabled'>Save Draft</option>
                            </select>
                            <button type="submit" className="p-3 bg-indigo-500 text-white hover:bg-indigo-400" >Submit Post</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    //  <script src="https://cdn.ckeditor.com/4.16.0/standard/ckeditor.js"></script>

    //  <script>
    //      CKEDITOR.replace( 'content' );
    //  </script>
        
    )
}

export default CreateBlog