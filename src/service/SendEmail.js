import axios from 'axios'


export const SendEmail = async(body, clear, setToasty) => {
    try{
        await axios.post(`https://portfolio-back-end-eight.vercel.app/send`, body)
        clear()
        setToasty(true)
        alert("E-mail sent!")
    }
    catch (err) {
        console.log(err)
    }

}
