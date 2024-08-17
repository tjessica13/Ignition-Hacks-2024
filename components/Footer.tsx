import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="footer flex justify-between bg-white p-6">
            <div className="logo p-3">
                <h1 className="logo text-lg font-bold pb-3">VTutor AI</h1>
                <h2>Your Personal Tutor to Learn Artifical Intelligence and Machine Learning.</h2>
                <div className="socials flex justify-start gap-5 items-center h-10 pt-5">
                    <FaLinkedin size={30} />
                    <a href="https://github.com/tjessica13/Ignition-Hacks-2024"><FaGithub size={30} /></a>
                    <FaSquareXTwitter size={30} />
                </div>
            </div>
            
            <div className="links flex justify-end items-center gap-10 p-3">
                <div className="about">
                    <p className="font-bold pb-5">About Us</p>
                    <p className="mb-2">Team</p>
                    <p className="mb-2">Contact</p>
                    <p className="mb-2">FAQ</p>
                </div>
                
                <div className="legal">
                    <p className="font-bold pb-5">Legal</p>
                    <p className="mb-2">Terms</p>
                    <p className="mb-2">Privacy</p>
                    <p className="mb-2">References</p>
                </div>
                
            </div>
        </div>
    )
}

export default Footer;