class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                footer {
                    background-color: #1e293b;
                    color: #f8fafc;
                    padding: 2rem 0;
                    margin-top: 3rem;
                }
                
                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1rem;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 2rem;
                }
                
                .footer-section h3 {
                    font-size: 1.125rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                    color: #e2e8f0;
                }
                
                .footer-section ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                
                .footer-section li {
                    margin-bottom: 0.5rem;
                }
                
                .footer-section a {
                    color: #cbd5e1;
                    transition: color 0.2s;
                }
                
                .footer-section a:hover {
                    color: #ffffff;
                }
                
                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1rem;
                }
                
                .social-links a {
                    color: #cbd5e1;
                    transition: color 0.2s;
                }
                
                .social-links a:hover {
                    color: #ffffff;
                }
                
                .copyright {
                    text-align: center;
                    margin-top: 2rem;
                    padding-top: 1rem;
                    border-top: 1px solid #334155;
                    color: #94a3b8;
                    font-size: 0.875rem;
                }
                
                @media (max-width: 768px) {
                    .footer-container {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
            <footer>
                <div class="footer-container">
                    <div class="footer-section">
                        <h3>DiabCost Predictor</h3>
                        <p>Công cụ dự báo chi phí điều trị đái tháo đường chính xác, nhanh chóng.</p>
                    </div>
                    
                    <div class="footer-section">
                        <h3>Liên kết</h3>
                        <ul>
                            <li><a href="#">Trang chủ</a></li>
                            <li><a href="#">Giới thiệu</a></li>
                            <li><a href="#">Điều khoản</a></li>
                            <li><a href="#">Chính sách</a></li>
                        </ul>
                    </div>
                    
                    <div class="footer-section">
                        <h3>Liên hệ</h3>
                        <ul>
                            <li>Email: info@diabcost.com</li>
                            <li>Điện thoại: 0123 456 789</li>
                            <li>Địa chỉ: Hà Nội, Việt Nam</li>
                        </ul>
                        
                        <div class="social-links">
                            <a href="#"><i data-feather="facebook"></i></a>
                            <a href="#"><i data-feather="twitter"></i></a>
                            <a href="#"><i data-feather="instagram"></i></a>
                            <a href="#"><i data-feather="linkedin"></i></a>
                        </div>
                    </div>
                </div>
                
                <div class="copyright">
                    &copy; ${new Date().getFullYear()} DiabCost Predictor. All rights reserved.
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);