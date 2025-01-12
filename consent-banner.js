(function() {
    const banner = document.createElement('div');
    banner.id = 'consentBanner';
    banner.innerHTML = `
        <style>
            #consentBanner {
                position: fixed;
                bottom: 24px;
                left: 50%;
                transform: translateX(-50%);
                background: #FFFFFF;
                box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.12);
                border-radius: 12px;
                padding: 24px;
                width: 90%;
                max-width: 500px;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
                z-index: 99999;
            }

            #consentBanner h2 {
                margin: 0 0 12px 0;
                font-size: 18px;
                color: #1a1a1a;
                font-weight: 600;
            }

            #consentBanner p {
                margin: 0 0 20px 0;
                font-size: 14px;
                color: #666666;
                line-height: 1.5;
            }

            #consentBanner .consent-options {
                margin-bottom: 24px;
            }

            #consentBanner .consent-option {
                display: flex;
                align-items: center;
                margin-bottom: 12px;
            }

            #consentBanner .consent-option:last-child {
                margin-bottom: 0;
            }

            #consentBanner .toggle {
                position: relative;
                display: inline-block;
                width: 36px;
                height: 20px;
                margin-right: 12px;
            }

            #consentBanner .toggle input {
                opacity: 0;
                width: 0;
                height: 0;
            }

            #consentBanner .slider {
                position: absolute;
                cursor: pointer;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: #e4e4e7;
                transition: .3s;
                border-radius: 20px;
            }

            #consentBanner .slider:before {
                position: absolute;
                content: "";
                height: 16px;
                width: 16px;
                left: 2px;
                bottom: 2px;
                background-color: white;
                transition: .3s;
                border-radius: 50%;
            }

            #consentBanner input:checked + .slider {
                background-color: #2563eb;
            }

            #consentBanner input:checked + .slider:before {
                transform: translateX(16px);
            }

            #consentBanner .consent-label {
                font-size: 14px;
                color: #1a1a1a;
            }

            #consentBanner .consent-buttons {
                display: flex;
                gap: 12px;
            }

            #consentBanner button {
                padding: 10px 20px;
                border: none;
                border-radius: 6px;
                font-size: 14px;
                font-weight: 500;
                cursor: pointer;
                transition: background-color 0.2s;
            }

            #consentBanner .primary-button {
                background-color: #2563eb;
                color: white;
                flex: 1;
            }

            #consentBanner .primary-button:hover {
                background-color: #1d4ed8;
            }

            #consentBanner .secondary-button {
                background-color: #f4f4f5;
                color: #1a1a1a;
            }

            #consentBanner .secondary-button:hover {
                background-color: #e4e4e7;
            }
        </style>
        <div>
            <h2>Çerez Tercihleri</h2>
            <p>Size daha iyi bir deneyim sunabilmek için çerezleri kullanıyoruz. Tercihlerinizi istediğiniz zaman güncelleyebilirsiniz.</p>
            
            <div class="consent-options">
                <div class="consent-option">
                    <label class="toggle">
                        <input type="checkbox" id="analytics_consent" checked>
                        <span class="slider"></span>
                    </label>
                    <span class="consent-label">Analitik Çerezler</span>
                </div>
                
                <div class="consent-option">
                    <label class="toggle">
                        <input type="checkbox" id="ads_consent" checked>
                        <span class="slider"></span>
                    </label>
                    <span class="consent-label">Reklam Çerezleri</span>
                </div>
                
                <div class="consent-option">
                    <label class="toggle">
                        <input type="checkbox" id="personalization_consent" checked>
                        <span class="slider"></span>
                    </label>
                    <span class="consent-label">Kişiselleştirme Çerezleri</span>
                </div>
            </div>
            
            <div class="consent-buttons">
                <button class="primary-button" onclick="consentManager.acceptAll()">Tümünü Kabul Et</button>
                <button class="secondary-button" onclick="consentManager.savePreferences()">Tercihleri Kaydet</button>
                <button class="secondary-button" onclick="consentManager.rejectAll()">Reddet</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(banner);
    
    window.consentManager = {
        updateConsent: function(preferences) {
            // Cookie'yi kaydet
            document.cookie = 'user_consent_preferences=' + JSON.stringify(preferences) + ';path=/;max-age=31536000;SameSite=Lax';
            
            // GTM consent'i güncelle
            if (typeof window.updateGTMConsent === 'function') {
                window.updateGTMConsent(preferences);
            }
            
            // Banner'ı kaldır
            const banner = document.getElementById('consentBanner');
            if (banner) banner.remove();
        },
        
        acceptAll: function() {
            this.updateConsent({
                ad: true,
                analytics: true,
                functionality: true,
                personalization: true
            });
        },
        
        rejectAll: function() {
            this.updateConsent({
                ad: false,
                analytics: false,
                functionality: false,
                personalization: false
            });
        },
        
        savePreferences: function() {
            const analytics = document.getElementById('analytics_consent');
            const ads = document.getElementById('ads_consent');
            const personalization = document.getElementById('personalization_consent');
            
            this.updateConsent({
                ad: ads ? ads.checked : false,
                analytics: analytics ? analytics.checked : false,
                functionality: true,
                personalization: personalization ? personalization.checked : false
            });
        }
    };
})();