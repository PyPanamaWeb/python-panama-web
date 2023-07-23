import "./HomePage.css"

import pythonPanamaLogo from "../assets/img/logo.png"
import pythonPanamaDarkLogo from "../assets/img/logo-dark.png"
import pythonPanamaSlide1 from "../assets/img/slides/python_panama_slide_1.png"

import news1 from "../assets/img/blog/medium/noti_1.jpg";
import news2 from "../assets/img/blog/medium/noti_2.jpg";
import news3 from "../assets/img/blog/medium/noti_3.jpg";
import news4 from "../assets/img/blog/medium/noti_4.jpg";
import news5 from "../assets/img/blog/medium/noti_5.jpg";
import news6 from "../assets/img/blog/medium/noti_6.jpg";

export function HomePage() {
    return (
        <>
            <div className="loading-overlay">
                <div className="bounce-loader">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>
            </div>

            <div className="body">
                <header id="header" className="header-effect-shrink" data-plugin-options="{'stickyEnabled': true, 'stickyEffect': 'shrink', 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': true, 'stickyChangeLogo': true, 'stickyStartAt': 30, 'stickyHeaderContainerHeight': 70}">
                    <div className="header-body">
                        <div className="header-container container">
                            <div className="header-row">
                                <div className="header-column">
                                    <div className="header-row">
                                        <div className="header-logo">
                                            <a href="#">
                                                <img alt="Python Panama"  width="250" height="55" src={pythonPanamaLogo}/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="header-column justify-content-end">
                                    <div className="header-row">
                                        <div
                                            className="header-nav header-nav-line header-nav-top-line header-nav-top-line-with-border order-2 order-lg-1">
                                            <div
                                                className="header-nav-main header-nav-main-square header-nav-main-effect-2 header-nav-main-sub-effect-1">
                                                <nav className="collapse">
                                                    <ul className="nav nav-pills" id="mainNav">

                                                        <li className="dropdown">
                                                            <a className="dropdown-item dropdown-toggle active" href="#">
                                                                Inicio
                                                            </a>
                                                        </li>
                                                        <li className="dropdown">
                                                            <a className="dropdown-item dropdown-toggle" href="#">
                                                                Contáctanos
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                            <button className="btn header-btn-collapse-nav" data-toggle="collapse" data-target=".header-nav-main nav">
                                                <i className="fas fa-bars"></i>
                                            </button>
                                        </div>
                                        <div className="header-nav-features order-1 order-lg-2">
                                            <div className="header-nav-feature header-nav-features-social-icons d-inline-flex">
                                                <ul className="header-social-icons social-icons d-none d-sm-block social-icons-clean ml-0">
                                                    <li className="social-icons-facebook">
                                                        <a href="https://www.facebook.com/profile.php?id=100078380970388" target="_blank"
                                                            title="Facebook"><i className="fab fa-facebook"></i></a>
                                                    </li>
                                                    <li className="social-icons-twitter">
                                                        <a href="https://www.instagram.com/pythonpanama/" target="_blank" title="Instagram"><i
                                                            className="fab fa-instagram"></i></a>
                                                    </li>
                                                    <li className="social-icons-twitter">
                                                        <a href="https://twitter.com/PythonPanama" target="_blank" title="Telegram">
                                                            <i className="fab fa-twitter"></i>
                                                        </a>
                                                    </li>
                                                    <li className="social-icons-discord">
                                                        <a href="https://twitter.com/PythonPanama" target="_blank" title="Discord"><i
                                                            className="fab fa-discord"></i></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div role="main" className="main">
                    <div className="slider-container rev_slider_wrapper">
                        <div id="revolutionSlider" className="slider rev_slider" data-version="5.4.8" data-plugin-revolution-slider
                            data-plugin-options="{'delay': 9000, 'gridwidth': 1170, 'gridheight': 670, 'disableProgressBar': 'on', 'responsiveLevels': [4096,1200,992,500], 'parallax': { 'type': 'scroll', 'origo': 'enterpoint', 'speed': 1000, 'levels': [2,3,4,5,6,7,8,9,12,50], 'disable_onmobile': 'on' }, 'navigation' : {'arrows': { 'enable': false }, 'bullets': {'enable': true, 'style': 'bullets-style-1', 'h_align': 'center', 'v_align': 'bottom', 'space': 7, 'v_offset': 70, 'h_offset': 0}}}">
                            <ul>
                                <li className="slide-overlay" data-transition="fade">
                                    <img src={pythonPanamaSlide1} alt="" data-bgposition="center center"
                                        data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" />

                                    <h1 className="tp-caption font-weight-extra-bold text-title-light negative-ls-2"
                                        data-frames='[{"delay":1000,"speed":2000,"frame":"0","from":"sX:1.5;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                                        data-x="center" data-y="center" data-voffset="['-55','-55','-55','-55']"
                                        data-fontsize="['50','50','50','90']" data-lineheight="['55','55','55','95']"
                                        data-letterspacing="-1">
                                        COMUNIDAD PANAMEÑA DE PYTHON
                                    </h1>
                                    <div className="tp-caption font-weight-light text-color-light"
                                        data-frames='[{"from":"opacity:0;","speed":300,"to":"o:0.8;","delay":2000,"split":"chars","splitdelay":0.05,"ease":"Power2.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
                                        data-x="center" data-y="center" data-voffset="['-5','-5','-5','15']"
                                        data-fontsize="['18','18','18','35']" data-lineheight="['20','20','20','40']">
                                        Comprometidos a que todo Panamá hable Python
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <section className="section bg-color-grey-scale-1 section-height-3 border-0 m-0">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <h2 className="font-weight-normal text-center text-6 pb-3">
                                        Nuestra <strong className="font-weight-extra-bold"> Comunidad</strong>
                                    </h2>
                                </div>
                            </div>
                            <div className="row mb-lg-4">
                                <div className="col-lg-4 appear-animation" data-appear-animation="fadeInLeftShorter"
                                    data-appear-animation-delay="300">
                                    <div className="feature-box feature-box-style-2">
                                        <div className="feature-box-icon">
                                            <i className="icons icon-support text-color-primary"></i>
                                        </div>
                                        <div className="feature-box-info">
                                            <h4 className="font-weight-bold mb-2">Meetups</h4>
                                            <p>
                                                Únete a nuestro grupo en&nbsp;
                                                <span className="alternative-font">
                                                    <a href="https://www.meetup.com/python-panama/" target="_blank" title="Meetup"> 
                                                    Meetup
                                                    </a>
                                                </span> y participa de nuestros eventos.

                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 appear-animation" data-appear-animation="fadeInUpShorter">
                                    <div className="feature-box feature-box-style-2">
                                        <div className="feature-box-icon">
                                            <i className="icons icon-layers text-color-primary"></i>
                                        </div>
                                        <div className="feature-box-info">
                                            <h4 className="font-weight-bold mb-2">Talleres</h4>
                                            <p>
                                                Encuentra cursos, manuales para que mejores en Python.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 appear-animation" data-appear-animation="fadeInRightShorter"
                                    data-appear-animation-delay="300">
                                    <div className="feature-box feature-box-style-2">
                                        <div className="feature-box-icon">
                                            <i className="icons icon-menu text-color-primary"></i>
                                        </div>
                                        <div className="feature-box-info">
                                            <h4 className="font-weight-bold mb-2">Comunidad</h4>
                                            <p>
                                                Forma parte de nuestra comunidad por medio de nuestros diversos canales y redes
                                                sociales.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="container py-4">
                        <div className="row">
                            <div className="col">
                                <div className="blog-posts">
                                    <div className="masonry-loader masonry-loader-showing">
                                        <div className="masonry row" data-plugin-masonry data-plugin-options="{'itemSelector': '.masonry-item'}">
                                            <div className="masonry-item no-default-style col-md-4">
                                                <article className="post post-medium border-0 pb-0 mb-5">
                                                    <div className="post-image">
                                                        <a href="#">
                                                            <img src={news1}
                                                                className="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0"
                                                                alt="Top Camper Trailer Towing Tips" />
                                                        </a>
                                                    </div>

                                                    <div className="post-content">
                                                        <h2 className="font-weight-semibold text-5 line-height-6 mt-3 mb-2">
                                                            <a href="#">Historia de Python</a>
                                                        </h2>
                                                        <p>
                                                            Python es un lenguaje de programación de alto nivel creado por Guido
                                                            van Rossum en los Países
                                                            Bajos en 1989. El nombre "Python" proviene de una afición de van
                                                            Rossum por el grupo cómico
                                                            británico Monty Python.
                                                        </p>
                                                        <div className="post-meta">
                                                            <span className="d-block mt-2">
                                                                <a href="#" className="btn btn-xs btn-light text-1 text-uppercase">
                                                                    Mas
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>

                                            <div className="masonry-item no-default-style col-md-4">
                                                <article className="post post-medium border-0 pb-0 mb-5">
                                                    <div className="post-image">
                                                        <a href="#">
                                                            <img src={news2} className="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="How to Become a Professional Photographer" />
                                                        </a>
                                                    </div>
                                                    <div className="post-content">
                                                        <h2 className="font-weight-semibold text-5 line-height-6 mt-3 mb-2">
                                                            <a href="conoce_guido_van_rossum.html">Conoce a Guido van Rossum</a>
                                                        </h2>
                                                        <p>
                                                            Guido van Rossum es un programador y matemático holandés, más
                                                            conocido por ser el creador del
                                                            lenguaje de programación
                                                        </p>
                                                        <div className="post-meta">
                                                            <span className="d-block mt-2">
                                                                <a href="conoce_guido_van_rossum.html" className="btn btn-xs btn-light text-1 text-uppercase">
                                                                    Mas
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>

                                            <div className="masonry-item no-default-style col-md-4">
                                                <article className="post post-medium border-0 pb-0 mb-5">
                                                    <div className="post-image">
                                                        <a href="#">
                                                            <img src={news3} className="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="Best Ways to Be Happier" />
                                                        </a>
                                                    </div>
                                                    <div className="post-content">
                                                        <h2 className="font-weight-semibold text-5 line-height-6 mt-3 mb-2">
                                                            <a href="#">
                                                                Como Empezar en Ciencia de Datos con Python
                                                            </a>
                                                        </h2>
                                                        <p>
                                                            La ciencia de datos es una disciplina que se centra en el uso de
                                                            técnicas estadísticas y de
                                                            aprendizaje automático para analizar grandes conjuntos de datos.
                                                        </p>

                                                        <div className="post-meta">
                                                            <span className="d-block mt-2">
                                                                <a href="#" className="btn btn-xs btn-light text-1 text-uppercase">
                                                                    Mas
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className="masonry-item no-default-style col-md-4">
                                                <article className="post post-medium border-0 pb-0 mb-5">
                                                    <div className="post-image">
                                                        <a href="#">
                                                            <img src={news4} className="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="Best Ways to Be Happier" />
                                                        </a>
                                                    </div>
                                                    <div className="post-content">
                                                        <h2 className="font-weight-semibold text-5 line-height-6 mt-3 mb-2">
                                                            <a href="flask_buena_opcion.html">Usar Flask aún es buena opción?</a>
                                                        </h2>
                                                        <p>
                                                            Flask es un popular framework de Python utilizado para construir
                                                            aplicaciones web. Fue creado
                                                            por Armin Ronacher en 2010 y se ha convertido en uno de los
                                                            frameworks de Python más
                                                            utilizados para el desarrollo de aplicaciones web.
                                                        </p>
                                                        <div className="post-meta">
                                                            <span className="d-block mt-2">
                                                                <a href="#" className="btn btn-xs btn-light text-1 text-uppercase">
                                                                    Mas
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className="masonry-item no-default-style col-md-4">
                                                <article className="post post-medium border-0 pb-0 mb-5">
                                                    <div className="post-image">
                                                        <a href="#">
                                                            <img src={news5}
                                                                className="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0"
                                                                alt="Best Ways to Be Happier" />
                                                        </a>
                                                    </div>
                                                    <div className="post-content">
                                                        <h2 className="font-weight-semibold text-5 line-height-6 mt-3 mb-2">
                                                            <a href="#">
                                                                Vale la Pena Estudiar Python?
                                                            </a>
                                                        </h2>
                                                        <p>
                                                            ¡Definitivamente! Aprender Python es una habilidad valiosa que puede
                                                            ser beneficiosa en muchos
                                                            aspectos. Aquí te presento algunas razones por las que vale la pena
                                                            aprender.
                                                        </p>
                                                        <div className="post-meta">
                                                            <span className="d-block mt-2">
                                                                <a href="#" className="btn btn-xs btn-light text-1 text-uppercase">
                                                                    Mas
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className="masonry-item no-default-style col-md-4">
                                                <article className="post post-medium border-0 pb-0 mb-5">
                                                    <div className="post-image">
                                                        <a href="#">
                                                            <img src={news6}
                                                                className="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0"
                                                                alt="Best Ways to Be Happier" />
                                                        </a>
                                                    </div>

                                                    <div className="post-content">
                                                        <h2 className="font-weight-semibold text-5 line-height-6 mt-3 mb-2">
                                                            <a href="#">Conoce el lenguaje JULIA</a>
                                                        </h2>
                                                        <p>
                                                            Julia es un lenguaje de programación dinámico y de alto nivel
                                                            diseñado para abordar los
                                                            desafíos de la ciencia computacional y el análisis de datos.
                                                        </p>

                                                        <div className="post-meta">
                                                            <span className="d-block mt-2"><a href="#"
                                                                className="btn btn-xs btn-light text-1 text-uppercase">Mas</a></span>
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="section section-height-3 parallax-first-section-style section-background section-text-light section-center overlay overlay-show overlay-op-9 overlay-color-primary m-0 appear-animation" data-appear-animation="fadeIn">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-10 appear-animation" data-appear-animation="fadeInUpShorter"
                                    data-appear-animation-delay="200">
                                    <div className="owl-carousel owl-theme nav-bottom rounded-nav dots-light mb-0"
                                        data-plugin-options="{'items': 1, 'loop': false, 'autoHeight': true}"></div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <footer id="footer" className="border-0 parallax-second-section-style">
                    <div className="container py-4">
                        <div className="row justify-content-md-center py-5 mt-3">
                            <div className="col-md-12 col-lg-3 d-flex align-items-center justify-content-center justify-content-lg-start mb-5 mb-lg-0">
                                <a href="#">
                                    <img src={pythonPanamaDarkLogo} alt="Logo" className="img-fluid custom-width" />
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-2 text-center text-lg-left mb-5 mb-lg-0">
                                <h5 className="text-5 text-transform-none font-weight-semibold text-color-light mb-4">
                                    Paginas
                                </h5>
                                <ul className="list list-unstyled">
                                    <li className="mb-1">
                                        <a href="#" className="link-hover-style-1">Contacto</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-lg-2 text-center text-lg-left mb-5 mb-lg-0">
                                <h5 className="text-5 text-transform-none font-weight-semibold text-color-light mb-4">
                                    Enlaces
                                </h5>
                                <ul className="list list-unstyled">
                                    <li className="mb-1">
                                        <a href="#" className="link-hover-style-1">
                                            Python Sitio Oficial</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright footer-copyright-style-2 background-transparent footer-top-light-border">
                        <div className="container py-2">
                            <div className="row py-4">
                                <div className="col d-flex align-items-center justify-content-center mb-4 mb-lg-0">
                                    <p>© Copyright 2023. Todos los derechos reservados.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}