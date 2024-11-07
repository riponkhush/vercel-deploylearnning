import axios from "axios";


export const imageUpload = async (image) => {
    const formData = new  FormData();
    formData.append('image', image);

    const {data} = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_api}`,
    formData
    )
return data
}