

const Home = () => {
    return (
        <div className="flex flex-col justify-center bg-white text-center h-screen">
            <h1 className="text-7xl font-bold py-10">Your Personal Tutor to Learn Artificial Intelligence</h1>
            <p className="text-2xl font-light py-4">Chatbot Structured Lessons for Interactive Learning</p>
            <div className="homeButtons flex gap-5 justify-center pt-3">
                <button className="bg-white hover:bg-black text-black hover:text-white py-2 px-4 border border-black rounded">Try Demo</button>
                <button className="bg-black hover:bg-white text-white hover:text-black py-2 px-4 rounded">See Courses</button>
            </div>
        </div>
    );
}

export default Home