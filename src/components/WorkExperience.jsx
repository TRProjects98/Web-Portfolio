function WorkExperience() {
    let works = [
            {
            id: 1,
            company: 'Miligram Brand Agency',
            job_description: 'My role at Miligram Brand Agency involved website development, creating videos for social media, brand presentation videos, corporate videos, and UI/UX design. At Miligram, I worked with technologies such as WordPress, HTML, CSS, JavaScript, React.js, and Tailwind for web development. For UI/UX design, I used Adobe Illustrator and Adobe XD. Additionally, I utilized Adobe Premiere Pro, Adobe Photoshop, Adobe After Effects, and Adobe Illustrator for content creation.  I developed skills in web development, graphic design for the web, video production and editing, as well as Motion Graphics animation.',
            link: 'https://miligram.pt/',
            image: '/miligram.jpg'
            }
        ]

    return(
        <section className="h-screen w-screen px-10 mb-36">
            <h1 className="mb-16 text-5xl md:text-7xl text-center md:text-start"><span className="secundaryColor">Work</span> Experience</h1>
            <section className="flex flex-col md:flex-row h-full gap-10 md:gap-0">
                <div className="w-full md:w-2/4 flex flex-col justify-center md:justify-start lg:justify-center items-center"> 
                    <div className="work_image_outline w-3/5">
                        <img className="work_image_pos" src={works[0].image} alt={works[0].company}></img>
                    </div>
                </div>
                <div className=" work_desc md:w-2/4 justify-center md:justify-start lg:justify-center items-start gap-2.5">
                    <h2>{works[0].company}</h2>
                    <p>{works[0].job_description}</p>
                    <a href={works[0].link} target="_blank" rel="noreferrer">{works[0].link}</a>
                </div>
            </section>
        </section>
    )
}

export default WorkExperience