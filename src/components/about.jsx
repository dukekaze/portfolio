const About = () => {
    return(
        <div className="bg-slate-900 w-screen ">
            <div className="row-neg flex justify-center pt-24">
                <div className="about-me w-28 h-7 bg-gray-700 flex rounded-md justify-center items-center">
                    <div className="about px-5 py-1">About me</div>
                </div>
            </div>
            <div className=" w-full flex justify-between mt-12">
                <div className="column-neg w-1/2 ml-8">
                    <div className="pic-container">
                        <div className="zurag "><img className="w-96 h-96 object-cover" src="https://s3-alpha-sig.figma.com/img/a823/7c2d/a751e4a2db426ecfca4f62d9ba3dc8f4?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ScmRPtqSr3oqubAqMFwbeSujIqtc0BEB7HBtiF3q3PwzAz9cdfVMmpsoJDvcjMHnSNvajy~qXtB8wwXM-leo4lRSaNwBRfMoNuwGDj40wzPE9nvWkc-0EMddEgBiOLhzwjSD-PVkn7gzA2TisMzyrmWDt0FgWVSBXrHiFdkcFKpq2xBUruNbzJmgQVyotlE4IdWS1tN1mtZ04u~1u7YBhpDCStbEKgzvukJL9q~MNfpij~qgzu92SDEwoLNt58-KSlVmtNPgPZa8EUbryKrmxdCyevmKvR5XY~ToLvEK5vavKlZJ-vQLzgBXg3fEwo0e0AvcKPbCnvsK1DBGTl9QAQ__" alt="" /></div>
                        <div className="zurag-ar "><img className="w-96 h-96 object-cover" src="./images/ar-zurag.png" alt="" /></div>
                    </div>
                </div>
                <div className="column-hoyr w-1/2 mr-8">
                    <div className="garchig text-3xl font-semibold">Curious about me? Here you have it:</div>
                    <div className="contect text-base ">
                        <div className="mt-6">I'm a designer turned full stack developer, passionate about React.js and Node.js. I excel in blending technical and visual aspects to craft exceptional digital products, prioritizing user experience, precise design, and optimized code.</div>
                        <br />
                        <div>Since starting my web development journey in 2015, I've embraced challenges and kept up with the latest tech trends. Now in my early thirties, seven years in, I'm building cutting-edge web apps using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and more.</div>
                        <br />
                        <div>With a progressive mindset, I enjoy the entire product development process, from ideation to execution. Off duty, you'll find me on Twitter, tracking startup journeys, or unwinding. Follow me for tech insights and public project updates on Twitter or GitHub.</div>
                        <br />
                        <div>Finally, some quick bits about me.</div>
                        <br />
                        <div className="check-list flex">
                            <div className="neg-column">
                                <ul className="list-disc list-inside">
                                    <li>B.E. in Computer Engineering</li>
                                    <li>Full time freelancer</li>
                                </ul>
                            </div>
                            <div className="hoyr-column ml-9">
                                <ul className="list-disc list-inside">
                                    <li>Avid learner</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-4">One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;