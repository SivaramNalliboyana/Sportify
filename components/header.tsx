

export default function Header() {
    return (
       <header className="flex flex-row justify-between ml-10 mr-10 mt-6">
        <img src="https://t3.ftcdn.net/jpg/01/35/60/44/360_F_135604480_dqMkcaCFIMmmUTAbimpsMPGeIASvb0R5.jpg" alt="Sports Logo" className="logo w-12 h-12 rounded-full overflow-hidden " />
            <nav>
                <ul className="flex space-x-6 text-white font-semibold text-lg">
                    <li><a href="/">Home</a></li>
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li><a href="/book">Book</a></li>
                    <li><a href="/contact">Chats</a></li>
                </ul>
            </nav>
        </header>
    );
}