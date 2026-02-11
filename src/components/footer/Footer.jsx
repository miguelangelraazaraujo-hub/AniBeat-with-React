import "./Footer.css";
import Map from '../map/Map';
import { Link } from 'react-router-dom';

const socials = [
    {
        name: 'Facebook',
        url: 'https://facebook.com/tu_pagina',
        icon: (
            <svg viewBox="0 0 24 24" width="35" height="35" fill="currentColor">
                <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z" />
            </svg>
        )
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com/tu_usuario',
        icon: (
            <svg viewBox="0 0 24 24" width="35" height="35" fill="currentColor">
                <path d="M19.83 8.00001C19.83 8.17001 19.83 8.35001 19.83 8.52001C19.8393 10.0302 19.5487 11.5272 18.9751 12.9242C18.4014 14.3212 17.5562 15.5904 16.4883 16.6583C15.4204 17.7262 14.1512 18.5714 12.7542 19.1451C11.3572 19.7187 9.86017 20.0093 8.34999 20C6.15213 20.0064 3.9992 19.3779 2.14999 18.19C2.47999 18.19 2.78999 18.19 3.14999 18.19C4.96345 18.19 6.72433 17.5808 8.14999 16.46C7.30493 16.4524 6.48397 16.1774 5.80489 15.6744C5.12581 15.1714 4.62349 14.4662 4.36999 13.66C4.62464 13.7006 4.88213 13.7207 5.13999 13.72C5.49714 13.7174 5.85281 13.6738 6.19999 13.59C5.2965 13.4056 4.48448 12.9147 3.90135 12.2003C3.31822 11.486 2.99981 10.5921 2.99999 9.67001C3.55908 9.97841 4.18206 10.153 4.81999 10.18C4.25711 9.80767 3.79593 9.30089 3.47815 8.7055C3.16038 8.11011 2.99604 7.44489 2.99999 6.77001C3.00124 6.06749 3.18749 5.37769 3.53999 4.77001C4.55172 6.01766 5.81423 7.03889 7.24575 7.76757C8.67727 8.49625 10.2459 8.91613 11.85 9.00001C11.7865 8.69737 11.753 8.38922 11.75 8.08001C11.7239 7.25689 11.9526 6.44578 12.4047 5.75746C12.8569 5.06913 13.5104 4.53714 14.2762 4.23411C15.0419 3.93109 15.8826 3.87181 16.6833 4.06437C17.484 4.25693 18.2057 4.69195 18.75 5.31001C19.655 5.12822 20.5214 4.78981 21.31 4.31001C21.0088 5.24317 20.3754 6.0332 19.53 6.53001C20.3337 6.44316 21.1194 6.23408 21.86 5.91001C21.3116 6.71097 20.6361 7.41694 19.86 8.00001H19.83Z" />
            </svg>
        )
    },
    {
        name: 'Instagram',
        url: 'https://instagram.com/tu_usuario',
        icon: (
            <svg viewBox="0 0 24 24" width="32" height="32" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"></path>
                    <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"></path>
                </g>
            </svg>
        )
    },
    {
        name: 'GitHub',
        url: 'https://github.com/miguelangelraazaraujo-hub/AniBeat-with-React',
        icon: (
            <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
                <path d="M9.35003 16.88C9.35003 16.95 9.28003 17 9.18003 17C9.08003 17 9.00003 17 9.00003 16.88C9.00003 16.76 9.08003 16.76 9.17003 16.76C9.26003 16.76 9.35003 16.81 9.35003 16.88ZM8.35003 16.73C8.35003 16.8 8.35003 16.88 8.49003 16.9C8.52584 16.9172 8.56701 16.9195 8.6045 16.9064C8.642 16.8933 8.67275 16.8658 8.69003 16.83C8.69003 16.76 8.69003 16.69 8.55003 16.66C8.41003 16.63 8.37003 16.66 8.35003 16.73ZM9.77003 16.68C9.68003 16.68 9.62003 16.76 9.63003 16.84C9.64003 16.92 9.72003 16.95 9.82003 16.93C9.92003 16.91 9.97003 16.84 9.96003 16.77C9.95003 16.7 9.87003 16.67 9.77003 16.68ZM11.9 4.00002C10.8454 3.99009 9.79962 4.19333 8.82547 4.59754C7.85132 5.00175 6.96887 5.5986 6.23107 6.35227C5.49328 7.10594 4.91535 8.0009 4.53197 8.98343C4.14859 9.96597 3.96765 11.0158 4.00003 12.07C3.97211 13.7969 4.48426 15.4894 5.46493 16.9111C6.4456 18.3328 7.84582 19.4127 9.47003 20C9.88003 20.07 10.03 19.81 10.03 19.6C10.03 19.39 10.03 18.26 10.03 17.6C10.03 17.6 7.77003 18.1 7.29003 16.6C7.29003 16.6 6.93003 15.6 6.40003 15.39C6.40003 15.39 5.66003 14.87 6.45003 14.88C6.70877 14.9149 6.95573 15.01 7.17108 15.1576C7.38643 15.3052 7.56417 15.5013 7.69003 15.73C7.79466 15.9351 7.9401 16.1167 8.11742 16.2635C8.29473 16.4104 8.50019 16.5195 8.72118 16.5841C8.94218 16.6487 9.17404 16.6675 9.40255 16.6393C9.63106 16.6111 9.85139 16.5364 10.05 16.42C10.0879 16.0025 10.2679 15.6107 10.56 15.31C8.76003 15.1 6.94003 14.84 6.94003 11.65C6.92091 11.2896 6.97881 10.9293 7.10985 10.5931C7.2409 10.2569 7.44209 9.95241 7.70003 9.70002C7.45667 8.96799 7.48507 8.17282 7.78003 7.46002C8.46003 7.24002 10.01 8.35002 10.01 8.35002C11.3342 7.97655 12.7359 7.97655 14.06 8.35002C14.06 8.35002 15.61 7.24002 16.29 7.46002C16.5914 8.17142 16.6198 8.96894 16.37 9.70002C16.6371 9.94893 16.8489 10.2511 16.9919 10.587C17.1348 10.9229 17.2057 11.285 17.2 11.65C17.2 14.85 15.3 15.1 13.5 15.31C13.6809 15.5129 13.8186 15.7506 13.9046 16.0085C13.9905 16.2664 14.023 16.5391 14 16.81C14 17.93 14 19.31 14 19.58C13.9994 19.6475 14.015 19.7142 14.0456 19.7744C14.0763 19.8346 14.1209 19.8866 14.1759 19.9258C14.2308 19.9651 14.2945 19.9905 14.3613 19.9999C14.4282 20.0094 14.4964 20.0025 14.56 19.98C16.1813 19.3978 17.5786 18.321 18.5547 16.9017C19.5309 15.4824 20.0364 13.7922 20 12.07C20.0094 11.0051 19.8061 9.94902 19.402 8.96371C18.9979 7.9784 18.4011 7.08369 17.6467 6.33205C16.8923 5.58041 15.9953 4.98696 15.0085 4.58651C14.0217 4.18606 12.9649 3.98667 11.9 4.00002ZM7.14003 15.41C7.14003 15.41 7.14003 15.52 7.14003 15.58C7.15118 15.5912 7.16442 15.6001 7.17901 15.6061C7.1936 15.6122 7.20923 15.6153 7.22503 15.6153C7.24082 15.6153 7.25646 15.6122 7.27105 15.6061C7.28563 15.6001 7.29888 15.5912 7.31003 15.58C7.31003 15.58 7.31003 15.47 7.31003 15.4C7.31003 15.33 7.18003 15.37 7.14003 15.41ZM6.79003 15.14C6.79003 15.14 6.79003 15.24 6.86003 15.27C6.86846 15.2805 6.87913 15.2889 6.89124 15.2947C6.90335 15.3004 6.91661 15.3035 6.93003 15.3035C6.94345 15.3035 6.9567 15.3004 6.96881 15.2947C6.98093 15.2889 6.99159 15.2805 7.00003 15.27C7.00003 15.27 7.00003 15.17 6.93003 15.14C6.86003 15.11 6.81003 15.11 6.79003 15.14ZM7.79003 16.32C7.79003 16.32 7.79003 16.46 7.79003 16.53C7.79003 16.6 7.96003 16.61 8.00003 16.53C8.04003 16.45 8.00003 16.39 8.00003 16.32C8.00003 16.25 7.87003 16.27 7.83003 16.32H7.79003ZM7.42003 15.83C7.42003 15.83 7.42003 15.95 7.42003 16.03C7.42003 16.11 7.56003 16.14 7.61003 16.11C7.63535 16.0809 7.6493 16.0436 7.6493 16.005C7.6493 15.9664 7.63535 15.9291 7.61003 15.9C7.56003 15.82 7.48003 15.79 7.42003 15.83Z" />
            </svg>
        )
    }
];

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Top Row: Images + Map + Contact */}
                <div className="footer-row">
                    {/* Left: Flickr-style images */}
                    <div className="footer-section">
                        <h3 className="footer-title">See all our pictures on flickr</h3>
                        <div className="footer-links-grid">
                            <div className="footer-grid-column">
                                <h3 className="footer-grid-title">inicio</h3>
                                <ul className="footer-grid-links">
                                    <li><a href="/novedades" className="footer-grid-link">novedades</a></li>
                                    <li><a href="/equipo" className="footer-grid-link">equipo</a></li>
                                    <li><a href="/registro-de-cambios" className="footer-grid-link">registro de cambios</a></li>
                                    <li><a href="/descarga" className="footer-grid-link">descarga</a></li>
                                    <li><a href="/busqueda" className="footer-grid-link">búsqueda</a></li>
                                </ul>
                            </div>

                            <div className="footer-grid-column">
                                <h3 className="footer-grid-title">mapas</h3>
                                <ul className="footer-grid-links">
                                    <li><a href="/lista-de-mapas" className="footer-grid-link">lista de mapas</a></li>
                                    <li><a href="/artistas-destacados" className="footer-grid-link">artistas destacados</a></li>
                                    <li><a href="/paquetes-de-mapas" className="footer-grid-link">paquetes de mapas</a></li>
                                </ul>
                            </div>

                            <div className="footer-grid-column">
                                <h3 className="footer-grid-title">comunidad</h3>
                                <ul className="footer-grid-links">
                                    <li><a href="/foro" className="footer-grid-link">foro</a></li>
                                    <li><a href="/chat" className="footer-grid-link">chat</a></li>
                                    <li><a href="/concursos" className="footer-grid-link">concursos</a></li>
                                    <li><a href="/torneos" className="footer-grid-link">torneos</a></li>
                                    <li><a href="/transmisiones" className="footer-grid-link">transmisiones en vivo</a></li>
                                </ul>
                            </div>

                            <div className="footer-grid-column">
                                <h3 className="footer-grid-title">ayuda</h3>
                                <ul className="footer-grid-links">
                                    <li><a href="/wiki" className="footer-grid-link">wiki</a></li>
                                    <li><a href="/preguntas-frecuentes" className="footer-grid-link">preguntas frecuentes</a></li>
                                    <li><a href="/reglas" className="footer-grid-link">reglas</a></li>
                                    <li><a href="/reportar-abuso" className="footer-grid-link">reportar abuso</a></li>
                                    <li><a href="/ayuda-real" className="footer-grid-link">no, en serio, ¡necesito ayuda!</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Center: Map */}
                    <div className="footer-section">
                        <h3 className="footer-title">Our Office</h3>
                        <div className="footer-map">
                            <Map lat={28.12749828562955} lng={-15.44668665156636} zoom={18} />
                        </div>
                        <p className="footer-map-caption">Get directions to our office</p>
                    </div>

                    {/* Right: Contact */}
                    <div className="footer-section">
                        <h3 className="footer-title">Contact Us</h3>
                        <address className="footer-contact">
                            <p>Calle del industrial Jose Sanchez Peñate, Las Palmas de Gran Canaria</p>
                            <p>Las Palmas, 35001</p>
                            <p className="footer-contact-item">
                                <span className="footer-icon">📞</span>
                                <a href="tel:+1234567890" className="footer-link">+1 (234) 567-8900</a>
                            </p>
                            <p className="footer-contact-item">
                                <span className="footer-icon">✉️</span>
                                <a href="mailto:info@anibeat.example" className="footer-link">info@anibeat.example</a>
                            </p>
                        </address>
                    </div>
                </div>

                {/* Social Icons */}
                <div className="footer-social">
                    {socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.name}
                            className="footer-social-icon"
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>

                {/* Copyright */}
                <div className="footer-copyright">
                    &copy; {new Date().getFullYear()} AniBeat. All rights reserved ·{' '}
                    <Link to="/cookies">Privacy and Cookies Policy</Link> |{' '}
                    <Link to="/sales-conditions">Sale Conditions</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer