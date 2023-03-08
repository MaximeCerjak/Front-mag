
const Intro = () => {
    return (
            <div className="intro">
                <h1 className="intro-title">Pour la faire courte...</h1>
                    <div className="intro-container">
                        <div className="intro-text">
                        <div>
                            <h2>Une iniative étudiante</h2>
                            <p>Un petit groupe de 12 étudiants, qui charbonne pour innover</p>
                        </div>
                        <div>
                            <h2>Un but commun</h2>
                            <p>Permettre à tous les étudiants d'avoir accés gratuitement à des typographies, samples audio, assets graphiques, tutoriels...</p>
                        </div>
                        <div>
                            <h2>Un besoin essentiel</h2>
                            <p>Une problématique bien réelle : le manque de ressources créatives centralisées !</p>
                        </div>
                    </div>
                    <div className="intro-picture">
                        <video autoPlay loop={true}>
                            <source src="./src/assets/intro_mag.mp4" type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>
    );
}

export default Intro;