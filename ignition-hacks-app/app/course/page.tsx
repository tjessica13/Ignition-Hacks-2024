import { SideBar, Footer, Home, NavBar } from '../../components/Components';

export default function Course() {
    return (
      <div className="grid grid-rows-10">

      <div className="row-span-8 flex space-x-6">

        <div className="w-1/6">
            <SideBar />
        </div>

        <div className="w-5/6">
            <div className="flex space-x-4">

              <div id="chat" className="w-full">
                <ul>
                  <li id="bot-message">
                    <p><b>Android v5.5</b></p>
                    <p>Are you ready to learn about AI?</p>
                  </li>

                  <li id="user-message">
                    <p><b>User</b></p>
                    <p>Yes I am ready!</p>
                  </li>
                </ul>
              </div>

              <div id="tutor-bot" className="w-full">
                <img src="img/chatbot-pngtuber.png" />
              </div>
            </div>
            
        </div>
      </div>

      <div id="chat-box" className="flex row-span-2 justify-center">
          <form className="px-2 m-5 h-10 justify-center">
            <input type="text" className="min-w-full" placeholder="Ask your questions here"></input>
            <input type="submit" value="Send" className="mx-2 py-1 px-4 bg-black text-white"></input>
          </form>
      </div>

      <Footer />
    </div>

    );
}