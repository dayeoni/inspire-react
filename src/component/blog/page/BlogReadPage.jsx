import { useState } from "react";

const BlogReadPage = () => {
    const [comment, setComment] = useState('');

    const getBlog = async () => {
        // api get() 데이터 가져온 후 해당 데이터 state 상태로 만들어보자
        // queryString : http://xxxxxxxx/blogs?id=1
        // const response = await api.get(`/blogs?id=${blogId}`)
        // const response = await api.get(`/blogs`, {
        //      params : {id : blogId}
        //  })
    }

}