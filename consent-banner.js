(function() {
    const banner = document.createElement('div');
    banner.id = 'consentBanner';
    banner.innerHTML = `
    <style>
        #gdpr_consent_banner_v2_unique_2024 {
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

        #gdpr_consent_banner_v2_unique_2024 .gdpr_consent_heading_x92j {
            margin: 0 0 12px 0;
            font-size: 18px;
            color: #1a1a1a;
            font-weight: 600;
        }

        #gdpr_consent_banner_v2_unique_2024 .gdpr_consent_text_p4k2 {
            margin: 0 0 20px 0;
            font-size: 14px;
            color: #666666;
            line-height: 1.5;
        }

        #gdpr_consent_banner_v2_unique_2024 .gdpr_consent_options_wrapper_m8n3 {
            margin-bottom: 24px;
        }

        #gdpr_consent_banner_v2_unique_2024 .gdpr_consent_option_item_y7h2 {
            display: flex;
            align-items: center;
            margin-bottom: 12px;
        }

        #gdpr_consent_banner_v2_unique_2024 .gdpr_consent_option_item_y7h2:last-child {
            margin-bottom: 0;
        }

        #gdpr_consent_banner_v2_unique_2024 .gdpr_consent_toggle_wrapper_f9p4 {
            position: relative;
            display: inline-block;
            width: 36px;
            height: 20px;
            margin-right: 12px;
        }

        #gdpr_consent_banner_v2_unique_2024 .gdpr_consent_toggle_input_k3m7 {
            opacity: 0;
            width: 0;
            height: 0;
        }

        #gdpr_consent_banner_v2_unique_2024 .gdpr_consent_toggle_slider_w5n8 {
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

        /* ... diğer stil tanımlamaları aynı mantıkla devam eder ... */

        #gdpr_consent_banner_v2_unique_2024 .gdpr_consent_button_group_h6t9 {
            display: flex;
            gap: 12px;
        }

        #gdpr_consent_banner_v2_unique_2024 .gdpr_consent_primary_btn_r4k8 {
            background-color: #2563eb;
            color: white;
            flex: 1;
            padding: 10px 20px;
            border: none;
            border-radius: 6px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
        }

        #gdpr_consent_banner_v2_unique_2024 .gdpr_consent_secondary_btn_l2j5 {
            background-color: #f4f4f5;
            color: #1a1a1a;
            padding: 10px 20px;
            border: none;
            border-radius: 6px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
        }
    </style>

    <div id="gdpr_consent_banner_v2_unique_2024">
        <h2 class="gdpr_consent_heading_x92j">Çerez Tercihleri</h2>
        <p class="gdpr_consent_text_p4k2">Size daha iyi bir deneyim sunabilmek için çerezleri kullanıyoruz. Tercihlerinizi istediğiniz zaman güncelleyebilirsiniz.</p>
        
        <div class="gdpr_consent_options_wrapper_m8n3">
            <div class="gdpr_consent_option_item_y7h2">
                <label class="gdpr_consent_toggle_wrapper_f9p4">
                    <input type="checkbox" class="gdpr_consent_toggle_input_k3m7" id="analytics_consent_x8v2" checked>
                    <span class="gdpr_consent_toggle_slider_w5n8"></span>
                </label>
                <span class="gdpr_consent_label_t6m3">Analitik Çerezler</span>
            </div>
            
            <!-- Diğer seçenekler benzer şekilde güncellenir -->
        </div>
        
        <div class="gdpr_consent_button_group_h6t9">
            <button class="gdpr_consent_primary_btn_r4k8" onclick="consentManager.acceptAll()">Tümünü Kabul Et</button>
            <button class="gdpr_consent_secondary_btn_l2j5" onclick="consentManager.savePreferences()">Tercihleri Kaydet</button>
            <button class="gdpr_consent_secondary_btn_l2j5" onclick="consentManager.rejectAll()">Reddet</button>
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