import "./index.css";

function LandingPage({ setIsLogged }) {
    return (
        <div id="bodyLandPage">
            <main id="mainLandPage">
                <section id="geral">
                    <svg width="123" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.092.858c.659 0 1.196.217 1.612.65.433.433.65.997.65 1.69v13.91c0 .71-.208 1.283-.624 1.716-.416.433-.953.65-1.612.65-.78 0-1.37-.26-1.768-.78L4.446 8.84v8.268c0 .71-.2 1.283-.598 1.716-.399.433-.936.65-1.612.65-.659 0-1.196-.217-1.612-.65C.208 18.391 0 17.819 0 17.108V3.198c0-.693.208-1.257.624-1.69.416-.433.953-.65 1.612-.65.745 0 1.326.26 1.742.78l7.904 9.828V3.198c0-.71.2-1.274.598-1.69.416-.433.953-.65 1.612-.65Z"
                            fill="url(#a)"
                        />
                        <path
                            d="M29.948 6.266c.71 0 1.274.19 1.69.572.416.381.624.901.624 1.56v8.996c0 .607-.217 1.11-.65 1.508-.434.381-.997.572-1.69.572-.624 0-1.136-.165-1.534-.494-.399-.347-.607-.806-.624-1.378-.399.624-.91 1.1-1.534 1.43-.607.33-1.309.494-2.106.494-1.647 0-2.869-.45-3.666-1.352-.798-.919-1.196-2.305-1.196-4.16V8.398c0-.659.208-1.179.624-1.56.416-.381.98-.572 1.69-.572s1.274.19 1.69.572c.416.381.624.901.624 1.56v5.72c0 1.248.537 1.872 1.612 1.872.624 0 1.135-.225 1.534-.676.398-.45.598-1.04.598-1.768V8.398c0-.659.208-1.179.624-1.56.416-.381.98-.572 1.69-.572Z"
                            fill="url(#b)"
                        />
                        <path
                            d="M58.177 15.73c.45.433.676.936.676 1.508s-.217 1.075-.65 1.508c-.433.433-.945.65-1.534.65-.641 0-1.23-.277-1.768-.832l-7.41-7.592v6.136c0 .728-.217 1.309-.65 1.742-.433.416-1.023.624-1.768.624-.728 0-1.309-.208-1.742-.624-.416-.433-.624-1.014-.624-1.742V3.198c0-.71.208-1.274.624-1.69.433-.433 1.014-.65 1.742-.65.745 0 1.335.217 1.768.65.433.416.65.98.65 1.69v5.72l7.306-7.358c.45-.468.962-.702 1.534-.702.572 0 1.075.217 1.508.65.433.416.65.91.65 1.482s-.251 1.1-.754 1.586l-5.33 5.226 5.772 5.928Z"
                            fill="url(#c)"
                        />
                        <path
                            d="M70.822 15.21c.399 0 .72.156.962.468.26.312.39.72.39 1.222 0 .693-.338 1.222-1.014 1.586-.589.295-1.291.546-2.106.754a9.548 9.548 0 0 1-2.21.286c-1.421 0-2.66-.269-3.718-.806a5.732 5.732 0 0 1-2.444-2.314c-.572-1.005-.858-2.184-.858-3.536 0-1.283.269-2.427.806-3.432.555-1.023 1.318-1.811 2.288-2.366.988-.572 2.098-.858 3.328-.858 1.196 0 2.245.26 3.146.78a5.23 5.23 0 0 1 2.08 2.21c.503.953.754 2.071.754 3.354 0 .399-.095.71-.286.936-.173.208-.433.312-.78.312h-6.864c.122.832.39 1.43.806 1.794.416.364 1.032.546 1.846.546a5.16 5.16 0 0 0 1.196-.13 14.7 14.7 0 0 0 1.222-.416c.26-.104.512-.19.754-.26.26-.087.494-.13.702-.13Zm-4.446-5.876c-.606 0-1.092.2-1.456.598-.364.381-.58.945-.65 1.69h4.082c-.104-1.525-.762-2.288-1.976-2.288Z"
                            fill="url(#d)"
                        />
                        <path
                            d="M82.942 6.214c1.526 0 2.661.46 3.406 1.378.746.901 1.118 2.28 1.118 4.134v5.616c0 .659-.208 1.179-.624 1.56-.416.381-.979.572-1.69.572-.71 0-1.274-.19-1.69-.572-.416-.381-.624-.901-.624-1.56v-5.408c0-.763-.138-1.317-.416-1.664-.26-.347-.658-.52-1.196-.52-.693 0-1.248.225-1.664.676-.398.433-.598 1.023-.598 1.768v5.148c0 .659-.208 1.179-.624 1.56-.416.381-.979.572-1.69.572-.71 0-1.274-.19-1.69-.572-.416-.381-.624-.901-.624-1.56V8.346c0-.607.217-1.1.65-1.482.434-.399.997-.598 1.69-.598.66 0 1.18.182 1.56.546.4.364.598.84.598 1.43a4.435 4.435 0 0 1 1.742-1.508c.711-.347 1.5-.52 2.366-.52Z"
                            fill="url(#e)"
                        />
                        <path
                            d="M99.777 15.912c1.386 0 2.08.563 2.08 1.69 0 1.144-.694 1.716-2.08 1.716h-8.19c-.607 0-1.101-.19-1.482-.572a1.878 1.878 0 0 1-.572-1.378c0-.572.216-1.1.65-1.586l5.46-5.85h-4.186c-1.387 0-2.08-.572-2.08-1.716 0-1.127.693-1.69 2.08-1.69h7.878c.606 0 1.1.19 1.482.572.381.381.572.84.572 1.378 0 .555-.217 1.075-.65 1.56l-5.486 5.876h4.524Z"
                            fill="url(#f)"
                        />
                        <path
                            d="M105.875 19.474c-.659 0-1.213-.173-1.664-.52-.433-.364-.65-.901-.65-1.612V8.398c0-.71.217-1.24.65-1.586.451-.364 1.005-.546 1.664-.546s1.205.182 1.638.546c.451.347.676.875.676 1.586v8.944c0 .71-.225 1.248-.676 1.612-.433.347-.979.52-1.638.52Zm0-15.028c-.78 0-1.404-.2-1.872-.598-.451-.416-.676-.962-.676-1.638 0-.676.225-1.213.676-1.612.468-.399 1.092-.598 1.872-.598.763 0 1.378.2 1.846.598.468.399.702.936.702 1.612s-.234 1.222-.702 1.638c-.451.399-1.066.598-1.846.598Z"
                            fill="url(#g)"
                        />
                        <path
                            d="M121.274 15.21c.398 0 .719.156.962.468.26.312.39.72.39 1.222 0 .693-.338 1.222-1.014 1.586-.59.295-1.292.546-2.106.754a9.552 9.552 0 0 1-2.21.286c-1.422 0-2.661-.269-3.718-.806a5.729 5.729 0 0 1-2.444-2.314c-.572-1.005-.858-2.184-.858-3.536 0-1.283.268-2.427.806-3.432.554-1.023 1.317-1.811 2.288-2.366.988-.572 2.097-.858 3.328-.858 1.196 0 2.244.26 3.146.78a5.236 5.236 0 0 1 2.08 2.21c.502.953.754 2.071.754 3.354 0 .399-.096.71-.286.936-.174.208-.434.312-.78.312h-6.864c.121.832.39 1.43.806 1.794.416.364 1.031.546 1.846.546.433 0 .832-.043 1.196-.13.364-.104.771-.243 1.222-.416.26-.104.511-.19.754-.26.26-.087.494-.13.702-.13Zm-4.446-5.876c-.607 0-1.092.2-1.456.598-.364.381-.581.945-.65 1.69h4.082c-.104-1.525-.763-2.288-1.976-2.288Z"
                            fill="url(#h)"
                        />
                        <defs>
                            <linearGradient id="a" x1="35.386" y1="19.318" x2="35.886" y2="19.318" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FD377E" />
                                <stop offset="1" stop-color="#fff" />
                            </linearGradient>
                            <linearGradient id="b" x1="35.386" y1="19.318" x2="35.886" y2="19.318" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FD377E" />
                                <stop offset="1" stop-color="#fff" />
                            </linearGradient>
                            <linearGradient id="c" x1="35.386" y1="19.318" x2="35.886" y2="19.318" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FD377E" />
                                <stop offset="1" stop-color="#fff" />
                            </linearGradient>
                            <linearGradient id="d" x1="35.386" y1="19.318" x2="35.886" y2="19.318" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FD377E" />
                                <stop offset="1" stop-color="#fff" />
                            </linearGradient>
                            <linearGradient id="e" x1="35.386" y1="19.318" x2="35.886" y2="19.318" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FD377E" />
                                <stop offset="1" stop-color="#fff" />
                            </linearGradient>
                            <linearGradient id="f" x1="35.386" y1="19.318" x2="35.886" y2="19.318" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FD377E" />
                                <stop offset="1" stop-color="#fff" />
                            </linearGradient>
                            <linearGradient id="g" x1="35.386" y1="19.318" x2="35.886" y2="19.318" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FD377E" />
                                <stop offset="1" stop-color="#fff" />
                            </linearGradient>
                            <linearGradient id="h" x1="35.386" y1="19.318" x2="35.886" y2="19.318" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FD377E" />
                                <stop offset="1" stop-color="#fff" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <h1 id="h1LandPage">Centralize o controle das suas finanças</h1>
                    <p id="pLandPage">de forma rápida e segura</p>
                    <button id="btnLandPage" onClick={() => setIsLogged(true)}>
                        Iniciar
                    </button>
                </section>
                <div>
                    <svg width="593" height="593" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="296.5" cy="296.5" r="296.5" fill="#E064CC" fill-opacity=".05" />
                        <circle cx="296.5" cy="296.5" r="258.476" fill="#E064CC" fill-opacity=".05" />
                        <circle cx="293.784" cy="296.5" r="212.303" fill="#E064CC" fill-opacity=".05" />
                        <rect x="174.731" y="104.115" width="256.212" height="354.895" rx="3.621" fill="#fff" />
                        <rect x="197" y="197" width="206" height="36" rx="1.811" fill="#F3F3F3" />
                        <rect x="197" y="248" width="206" height="36" rx="1.811" fill="#F3F3F3" />
                        <rect x="197" y="146" width="206" height="36" rx="1.811" fill="#F3F3F3" />
                        <rect x="197" y="350" width="206" height="36" rx="1.811" fill="#F3F3F3" />
                        <rect x="197" y="401" width="206" height="36" rx="1.811" fill="#F3F3F3" />
                        <rect x="197" y="299" width="206" height="36" rx="1.811" fill="#F3F3F3" />
                        <rect x="197" y="240.35" width="52.51" height="15.391" rx="1.811" fill="#FCEFFA" />
                        <g filter="url(#a)">
                            <rect x="220" y="307" width="231.786" height="69" rx="2.68" fill="#fff" />
                        </g>
                        <rect x="230.049" y="320.398" width="44.883" height="42.874" rx="2.68" fill="#66C085" />
                        <rect x="283.641" y="320.398" width="152.738" height="11.388" rx="1.34" fill="#66C085" fill-opacity=".11" />
                        <rect x="283.641" y="339.155" width="38.854" height="11.388" rx="1.34" fill="#66C085" fill-opacity=".11" />
                        <g clip-path="url(#b)" stroke="#fff" stroke-width="1.34" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M258.184 336.476h-12.058c-.74 0-1.34.6-1.34 1.34v8.038c0 .74.6 1.34 1.34 1.34h12.058c.74 0 1.34-.6 1.34-1.34v-8.038c0-.74-.6-1.34-1.34-1.34ZM244.786 340.495h14.738" />
                        </g>
                        <g filter="url(#c)">
                            <rect x="81.481" y="238.105" width="313.249" height="93.25" rx="3.621" fill="#fff" />
                        </g>
                        <rect x="95.061" y="256.212" width="60.658" height="57.942" rx="3.621" fill="#FD377E" />
                        <rect x="167.489" y="256.212" width="206.418" height="15.391" rx="1.811" fill="#FCEFFA" />
                        <rect x="167.489" y="281.562" width="52.51" height="15.391" rx="1.811" fill="#FCEFFA" />
                        <g clip-path="url(#d)" stroke="#fff" stroke-width="1.811" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M133.086 277.94h-16.297c-1 0-1.81.811-1.81 1.811v10.864c0 1 .81 1.811 1.81 1.811h16.297c1 0 1.81-.811 1.81-1.811v-10.864c0-1-.81-1.811-1.81-1.811ZM114.979 283.373h19.917" />
                        </g>
                        <g filter="url(#e)">
                            <rect x="81.481" y="238.105" width="313.249" height="93.25" rx="3.621" fill="#fff" />
                        </g>
                        <rect x="95.061" y="256.212" width="60.658" height="57.942" rx="3.621" fill="#FD377E" />
                        <rect x="167.489" y="256.212" width="206.418" height="15.391" rx="1.811" fill="#FCEFFA" />
                        <rect x="167.489" y="281.562" width="52.51" height="15.391" rx="1.811" fill="#FCEFFA" />
                        <g clip-path="url(#f)" stroke="#fff" stroke-width="1.811" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M133.086 277.94h-16.297c-1 0-1.81.811-1.81 1.811v10.864c0 1 .81 1.811 1.81 1.811h16.297c1 0 1.81-.811 1.81-1.811v-10.864c0-1-.81-1.811-1.81-1.811ZM114.979 283.373h19.917" />
                        </g>
                        <circle cx="370.5" cy="119.5" r="4.5" fill="#FD377E" />
                        <circle cx="385.5" cy="119.5" r="4.5" fill="#66C085" />
                        <circle cx="400.5" cy="119.5" r="4.5" fill="#000" />
                        <defs>
                            <clipPath id="b">
                                <path fill="#fff" transform="translate(244.117 333.796)" d="M0 0h16.078v16.078H0z" />
                            </clipPath>
                            <clipPath id="d">
                                <path fill="#fff" transform="translate(114.073 274.319)" d="M0 0h21.728v21.728H0z" />
                            </clipPath>
                            <clipPath id="f">
                                <path fill="#fff" transform="translate(114.073 274.319)" d="M0 0h21.728v21.728H0z" />
                            </clipPath>
                            <filter
                                id="a"
                                x="193.204"
                                y="282.883"
                                width="285.379"
                                height="122.592"
                                filterUnits="userSpaceOnUse"
                                color-interpolation-filters="sRGB"
                            >
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="2.68" />
                                <feGaussianBlur stdDeviation="13.398" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_181_240" />
                                <feBlend in="SourceGraphic" in2="effect1_dropShadow_181_240" result="shape" />
                            </filter>
                            <filter
                                id="c"
                                x="45.267"
                                y="205.513"
                                width="385.676"
                                height="165.678"
                                filterUnits="userSpaceOnUse"
                                color-interpolation-filters="sRGB"
                            >
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="3.621" />
                                <feGaussianBlur stdDeviation="18.107" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_181_240" />
                                <feBlend in="SourceGraphic" in2="effect1_dropShadow_181_240" result="shape" />
                            </filter>
                            <filter
                                id="e"
                                x="45.267"
                                y="205.513"
                                width="385.676"
                                height="165.678"
                                filterUnits="userSpaceOnUse"
                                color-interpolation-filters="sRGB"
                            >
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="3.621" />
                                <feGaussianBlur stdDeviation="18.107" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_181_240" />
                                <feBlend in="SourceGraphic" in2="effect1_dropShadow_181_240" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </main>
        </div>
    );
}

export default LandingPage;
