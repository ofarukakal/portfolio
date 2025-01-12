(function() {
    const banner = document.createElement('div');
    banner.id = 'consentBanner';
    //31
    banner.innerHTML = `
    <style>
        #gdpr_consent_banner_v2_unique_2024 {
            position: fixed !important;
            bottom: 24px !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            background: #FFFFFF !important;
            box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.08) !important;
            border-radius: 16px !important;
            padding: 24px !important;
            width: 90% !important;
            max-width: 500px !important;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
            z-index: 99999 !important;
        }

        #gdpr_consent_banner_v2_unique_2024 h2 {
            font-size: 20px !important;
            color: #1a1a1a !important;
            font-weight: 600 !important;
            margin: 0 0 12px 0 !important;
        }

        #gdpr_consent_banner_v2_unique_2024 p {
            font-size: 14px !important;
            color: #666666 !important;
            line-height: 1.5 !important;
            margin: 0 0 24px 0 !important;
        }

        #gdpr_consent_banner_v2_unique_2024 .consent-option {
            display: flex !important;
            align-items: center !important;
            margin-bottom: 16px !important;
        }

        #gdpr_consent_banner_v2_unique_2024 .toggle {
            position: relative !important;
            width: 40px !important;
            height: 24px !important;
            margin-right: 12px !important;
            background: #e4e4e7 !important;
            border-radius: 12px !important;
            cursor: pointer !important;
            transition: background-color 0.3s !important;
        }

        #gdpr_consent_banner_v2_unique_2024 .toggle.active {
            background: #4f46e5 !important;
        }

        #gdpr_consent_banner_v2_unique_2024 .toggle::after {
            content: '' !important;
            position: absolute !important;
            width: 20px !important;
            height: 20px !important;
            background: white !important;
            border-radius: 50% !important;
            top: 2px !important;
            left: 2px !important;
            transition: transform 0.3s !important;
        }

        #gdpr_consent_banner_v2_unique_2024 .toggle.active::after {
            transform: translateX(16px) !important;
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
            padding: 12px 24px !important;
            border-radius: 8px !important;
            font-size: 14px !important;
            font-weight: 500 !important;
            cursor: pointer !important;
            border: none !important;
            transition: opacity 0.2s !important;
        }

        #gdpr_consent_banner_v2_unique_2024 button:hover {
            opacity: 0.9 !important;
        }

        #gdpr_consent_banner_v2_unique_2024 .primary-button {
            background: #4f46e5 !important;
            color: white !important;
            flex: 1 !important;
        }

        #gdpr_consent_banner_v2_unique_2024 .secondary-button {
            background: #f4f4f5 !important;
            color: #1a1a1a !important;
        }
    </style>

    <div id="gdpr_consent_banner_v2_unique_2024">
        <h2>Çerez Tercihleri</h2>
        <p>Size daha iyi bir deneyim sunabilmek için çerezleri kullanıyoruz. Tercihlerinizi istediğiniz zaman güncelleyebilirsiniz.</p>
        
        <div class="consent-options">
            <div class="consent-option">
                <div class="toggle active"></div>
                <span class="consent-label">Analitik Çerezler</span>
            </div>
            
            <div class="consent-option">
                <div class="toggle active"></div>
                <span class="consent-label">Reklam Çerezleri</span>
            </div>
            
            <div class="consent-option">
                <div class="toggle active"></div>
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