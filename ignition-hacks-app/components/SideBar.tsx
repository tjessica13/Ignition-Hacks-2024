import Link from 'next/link'

const SideBar = () => {

  return (
    <aside id="chatbot-sidebar" className="flex h-full top-0 left-0 max-w-xs">
        <div className="h-full px-2 py-1 overflow-y-auto bg-white">
            <span className="text-sm">Lesson 1</span>
            <p className="text-lg"><b>Introduction to AI and ML</b></p>
            <hr className="border-gray-400 my-2" />

            <ul>
                <li id="sidebar-lesson">
                    <p className="text-base"><a href="#">What is AI?</a></p>
                    <p className="text-sm font-light">Define AI and the history of AI</p>
                </li>
                <li id="sidebar-lesson">
                    <p className="text-base"><a href="#">Artificial Intelligence vs. Machine Learning vs. Deep Learning</a></p>
                    <p className="text-sm font-light">A comparison between AI, ML, and DL, and how it all fits together</p>
                </li>
                <li id="sidebar-lesson">
                    <p className="text-base"><a href="#">Applications of AI</a></p>
                    <p className="text-sm font-light">How is AI used today?</p>
                </li>
                <li id="sidebar-lesson">
                    <p className="text-base"><a href="#">Machine Learning Basics</a></p>
                    <p className="text-sm font-light">Supervised vs. Unsupervised Learning</p>
                </li>
                <li id="sidebar-lesson">
                    <p className="text-base"><a href="#">Key Algorithms</a></p>
                    <p className="text-sm font-light">Linear Regression, Decision Trees, Naive Bayes</p>
                </li>
            </ul>
        </div>
    </aside>
  )
}

export default SideBar
