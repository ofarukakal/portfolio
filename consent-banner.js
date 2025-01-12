(function() {
    const banner = document.createElement('div');
    banner.id = 'consentBanner';
    //31
    banner.innerHTML = `
    <style>
        #gdpr_consent_banner_v2_unique_2024 {
            all: revert;
            position: fixed !important;
            bottom: 24px !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            background: #FFFFFF !important;
            box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.12) !important;
            border-radius: 12px !important;
            padding: 24px !important;
            width: 90% !important;
            max-width: 500px !important;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
            z-index: 99999 !important;
        }

        #gdpr_consent_banner_v2_unique_2024 * {
            all: revert;
            box-sizing: border-box !important;
            margin: 0 !important;
            padding: 0 !important;
        }

        #gdpr_consent_banner_v2_unique_2024 h2 {
            font-size: 20px !important;
            color: #1a1a1a !important;
            font-weight: 600 !important;
            margin-bottom: 12px !important;
        }

        #gdpr_consent_banner_v2_unique_2024 p {
            font-size: 14px !important;
            color: #666666 !important;
            line-height: 1.5 !important;
            margin-bottom: 24px !important;
        }

        #gdpr_consent_banner_v2_unique_2024 .consent-option {
            display: flex !important;
            align-items: center !important;
            margin-bottom: 12px !important;
        }

        #gdpr_consent_banner_v2_unique_2024 .switch {
            position: relative !important;
            display: inline-block !important;
            width: 44px !important;
            height: 24px !important;
            margin-right: 12px !important;
        }

        #gdpr_consent_banner_v2_unique_2024 .switch input {
            opacity: 0 !important;
            width: 0 !important;
            height: 0 !important;
        }

        #gdpr_consent_banner_v2_unique_2024 .slider {
            position: absolute !important;
            cursor: pointer !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            background-color: #e4e4e7 !important;
            transition: .3s !important;
            border-radius: 24px !important;
        }

        #gdpr_consent_banner_v2_unique_2024 .slider:before {
            position: absolute !important;
            content: "" !important;
            height: 20px !important;
            width: 20px !important;
            left: 2px !important;
            bottom: 2px !important;
            background-color: white !important;
            transition: .3s !important;
            border-radius: 50% !important;
        }

        #gdpr_consent_banner_v2_unique_2024 input:checked + .slider {
            background-color: #2563eb !important;
        }

        #gdpr_consent_banner_v2_unique_2024 input:checked + .slider:before {
            transform: translateX(20px) !important;
        }

        #gdpr_consent_banner_v2_unique_2024 .consent-label {
            font-size: 14px !important;
            color: #1a1a1a !important;
        }

        #gdpr_consent_banner_v2_unique_2024 .consent-buttons {
            display: flex !important;
            gap: 12px !important;
            margin-top: 24px !important;
        }

        #gdpr_consent_banner_v2_unique_2024 button {
            padding: 10px 20px !important;
            border-radius: 6px !important;
            font-size: 14px !important;
            font-weight: 500 !important;
            cursor: pointer !important;
            border: none !important;
        }

        #gdpr_consent_banner_v2_unique_2024 .primary-button {
            background-color: #2563eb !important;
            color: white !important;
            flex: 1 !important;
        }

        #gdpr_consent_banner_v2_unique_2024 .secondary-button {
            background-color: #f4f4f5 !important;
            color: #1a1a1a !important;
        }
    </style>

    <div id="gdpr_consent_banner_v2_unique_2024">
        <h2>Çerez Tercihleri</h2>
        <p>Size daha iyi bir deneyim sunabilmek için çerezleri kullanıyoruz. Tercihlerinizi istediğiniz zaman güncelleyebilirsiniz.</p>
        
        <div class="consent-options">
            <div class="consent-option">
                <label class="switch">
                    <input type="checkbox" checked>
                    <span class="slider"></span>
                </label>
                <span class="consent-label">Analitik Çerezler</span>
            </div>
            
            <div class="consent-option">
                <label class="switch">
                    <input type="checkbox" checked>
                    <span class="slider"></span>
                </label>
                <span class="consent-label">Reklam Çerezleri</span>
            </div>
            
            <div class="consent-option">
                <label class="switch">
                    <input type="checkbox" checked>
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
    //OFA-consent-preferences
    
    //31
    //31
    window.consentManager = {
        updateConsent: function(preferences) {
            console.log('Updating consent with:', preferences);
            
            // LocalStorage'a kaydet
            window.localStorage.setItem('ofa-consent-preferences', JSON.stringify(preferences));
            
            // GTM consent'i güncelle
            if (typeof window.updateGTMConsent === 'function') {
                window.updateGTMConsent(preferences);
            }
            
            // Banner'ı kaldır
            const banner = document.getElementById('consentBanner');
            if (banner && banner.parentNode) {
                banner.parentNode.removeChild(banner);
            }
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