import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom'

function Footer(){
    return(
        <>
            <footer>
                <section>
                    <div>
                        <h2><Link to="/">Tiago Reis</Link></h2>
                    </div>
                    <div className="flex flex-col items-center md:flex-row md:items-start gap-11">
                        <p><HashLink to="/#AboutMe">About-me</HashLink></p>
                        <p><HashLink to="/#Skills">Skills</HashLink></p>
                        <p><HashLink to="/#Projects">Projects</HashLink></p>
                        <p><HashLink to="/#Contacts">Contacts</HashLink></p>
                    </div>
                </section>
            </footer>
        </>
    )
}

export default Footer