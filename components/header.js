class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                header {
                    background: linear-gradient(135deg, #3b82f6 0%, #10b981 100%);
                    color: white;
                    padding: 1.5rem 0;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .logo {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    font-weight: 600;
                    font-size: 1.25rem;
                }
                
                .logo-icon {
                    width: 2rem;
                    height: 2rem;
                }
                
                nav ul {
                    display: flex;
                    gap: 1.5rem;
                }
                
                nav a {
                    color: white;
                    font-weight: 500;
                    transition: opacity 0.2s;
                }
                
                nav a:hover {
                    opacity: 0.8;
                }
                
                @media (max-width: 768px) {
                    .container {
                        flex-direction: column;
                        gap: 1rem;
                    }
                    
                    nav ul {
                        flex-direction: column;
                        gap: 0.5rem;
                        align-items: center;
                    }
                }
            </style>
            <header>
                <div class="container">
                    <div class="logo">
                        <svg class="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
                        </svg>
                        DiabCost Predictor
                    </div>
                    <nav>
                        <ul>
                            <li><a href="#">Trang chủ</a></li>
                            <li><a href="#">Giới thiệu</a></li>
                            <li><a href="#">Liên hệ</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        `;
    }
}

customElements.define('custom-header', CustomHeader);