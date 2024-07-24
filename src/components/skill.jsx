const Skill = () => {
    return(
        <div>
            <div className=" flex flex-col items-center mt-24">
                <div className="w-20 h-7 text-sm font-medium bg-gray-700 flex justify-center items-center rounded-md">Skills</div>
                <div className="text-xl mt-4 font-normal">The skills, tools and technologies I am really good at:</div>
            </div>
            <div>
                <div className="flex justify-evenly mt-12">
                    <div className="w-20 h-24 flex flex-col items-center">
                        <img className="w-16 h-16" src="./images/js-icon.svg" alt="" />
                        <div className="text-lg mt-2">Javascript</div>
                    </div>
                    <div className="w-20 h-24 flex flex-col items-center">
                        <img className="w-16 h-16" src="./images/type-script.svg" alt="" />
                        <div className="text-lg mt-2 text-gray-300" >Typescript</div> 
                    </div>
                    <div className="w-20 h-24 flex flex-col items-center">
                        <img className="w-16 h-16" src="/images/icon-react.svg" alt="" />
                        <div className="text-lg mt-2 text-gray-300">React</div>
                    </div>
                    <div className="w-20 h-24 flex flex-col items-center">
                        <img className="w-16 h-16" src="./images/icon-nextjs.svg" alt="" />
                        <div className="text-lg mt-2 text-gray-300">Next.js</div>
                    </div>
                    <div className="w-20 h-24 flex flex-col items-center">
                        <img className="w-16 h-16" src="./images/icon-nodejs.svg" alt="" />
                        <div className="text-lg mt-2 text-gray-300">Node.js</div>
                    </div>
                    <div className="w-20 h-24 flex flex-col items-center">
                        <img className="w-16 h-16" src="./images/icon-express.svg" alt="" />
                        <div className="text-lg mt-2 text-gray-300">Express.js</div>
                    </div>
                    <div className="w-20 h-24 flex flex-col items-center">
                        <img className="w-16 h-16" src="./images/icon-nest.svg" alt="" />
                        <div className="text-lg mt-2 text-gray-300">Nest.js</div>
                    </div>
                    <div className="w-20 h-24 flex flex-col items-center">
                        <img className="w-16 h-16" src="./images/icon-socket.svg" alt="" />
                        <div className="text-lg mt-2 text-gray-300">Socket.io</div>
                    </div>
                </div>
                <div className="flex justify-evenly mt-12">
                    <div className="w-20 h-24 flex flex-col items-center">
                        <img className="w-16 h-16" src="https://s3-alpha-sig.figma.com/img/037a/513d/56d029729e044d6a8e68e68025aaf0c2?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aDBnLZKYTqvQU8hg8i0BNqOqXjTPkuu4HRWUj8YyBvruFERjK68nYmpFo4D9UEf571SENxoYmSKf8OsEFmWbJ7Ek4WA1YjiuhReXNkiUU3HKU4dQkL~m7zIu9AoR55yL0TSILt70K-jI66OVpOedYqaZQjVdTnH9m0rhButHDR6FK37fBwPrjYFyg~qS1dtvCQwySKLZtfNokbHdEIrmvjdpUgBUOJRcNV7M-Tm7lunuO1UKrA5-Mlz~BwujoCD4yLsFBjQoFe-1pXd8-vBmGJnttcz6ulre7quneRo9xi0pzjtqExaY4y~r042vJnI58UZAhSUHG8tunHtuXx43bA__" alt="" />
                        <div className="text-lg mt-2">PostgreSQL</div>
                    </div>
                    <div className="w-20 h-24 flex flex-col items-center">
                        <img className="w-16 h-16" src="./images/icon-mongodb.svg" alt="" />
                        <div className="text-lg mt-2 text-gray-300" >MongoDB</div> 
                    </div>
                    <div className="w-20 h-24 flex flex-col items-center">
                        <img className="w-16 h-16" src="/images/icon-sass.svg" alt="" />
                        <div className="text-lg mt-2 text-gray-300">Sass/Scss</div>
                    </div>
                    <div className="w-20 h-24 flex flex-col items-center">
                        <img className="w-16 h-16" src="./images/icon-tailwindcss.svg" alt="" />
                        <div className="text-lg mt-2 text-gray-300">Tailwindcss</div>
                    </div>
                    <div className="w-20 h-24 flex flex-col items-center">
                        <img className="w-16 h-16" src="./images/icon-figma.svg" alt="" />
                        <div className="text-lg mt-2 text-gray-300">Figma</div>
                    </div>
                    <div className="w-20 h-24 flex flex-col items-center">
                        <img className="w-16 h-16" src="./images/icon-cypress.svg" alt="" />
                        <div className="text-lg mt-2 text-gray-300">Cypress</div>
                    </div>
                    <div className="w-20 h-24 flex flex-col items-center">
                        <img className="w-16 h-16" src="./images/icon-storybook.svg" alt="" />
                        <div className="text-lg mt-2 text-gray-300">Storybook</div>
                    </div>
                    <div className="w-20 h-24 flex flex-col items-center">
                        <img className="w-16 h-16" src="./images/icon-git.svg" alt="" />
                        <div className="text-lg mt-2 text-gray-300">Git</div>
                    </div>
                </div>
                <br /><br /><br /><br /><br />
            </div>
        </div>
    );
};
export default Skill;