import axios from 'axios'


export const SendEmail = async(body, clear, setToasty, setErrToasty, setIsLoading) => {
    setIsLoading(true)
    try{
        await axios.post(`https://portfolio-back-end-eight.vercel.app/send`, body)
        setIsLoading(false)
        clear()
        setToasty(true)
    }
    catch (err) {
        setIsLoading(false)
        setErrToasty(true)
    }

}
