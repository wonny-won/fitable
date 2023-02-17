import { useState } from "react"
import AboutUI from "./about.presenter"

export default function About(){
    const [isModalOpen,setIsModalOpen] = useState(false)
    const showModal = () => {
        setIsModalOpen(true);
    };

    return <AboutUI isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    showModal={showModal}/> 
}