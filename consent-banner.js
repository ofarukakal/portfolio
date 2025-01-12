(function() {
    const banner = document.createElement('div');
    banner.id = 'consentBanner';
    banner.innerHTML = `
    <style>
        #gdpr_consent_banner_v2_unique_2024 {
            all: initial;
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
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif !important;
            z-index: 99999 !important;
            box-sizing: border-box !important;
        }

        #gdpr_consent_banner_v2_unique_2024 * {
            all: unset;
            box-sizing: border-box !important;
        }

        #gdpr_consent_banner_v2_unique_2024 .gdpr_consent_heading_x92j {
            all: initial;
            display: block !important;
            font-family: inherit !important;
            margin: 0 0 12px 0 !important;
            font-size: 18px !important;
            color: #1a1a1a !important;
            font-weight: 600 !important;
            line-height: 1.5 !important;
            text-transform: none !important;
        }

        #gdpr_consent_banner_v2_unique_2024 .gdpr_consent_text_p4k2 {
            all: initial;
            display: block !important;
            font-family: inherit !important;
            margin: 0 0 20px 0 !important;
            font-size: 14px !important;
            color: #666666 !important;
            line-height: 1.5 !important;
        }

        #gdpr_consent_banner_v2_unique_2024 .gdpr_consent_options_wrapper_m8n3 {
            margin-bottom: 24px !important;
        }

        #gdpr_consent_banner_v2_unique_2024 .gdpr_consent_option_item_y7h2 {
            display: flex !important;
            align-items: center !important;
            margin-bottom: 12px !important;
        }

        #gdpr_consent_banner_v2_unique_2024 .gdpr_consent_toggle_wrapper_f9p4 {
            position: relative !important;
            display: inline-block !important;
            width: 36px !important;
            height: 20px !important;
            margin-right: 12px !important;
        }

        #gdpr_consent_banner_v2_unique_2024 .gdpr_consent_toggle_input_k3m7 {
            opacity: 0 !important;
            width: 0 !important;
            height: 0 !important;
        }

        #gdpr_consent_banner_v2_unique_2024 .gdpr_consent_toggle_slider_w5n8 {
            position: absolute !important;
            cursor: pointer !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            background-color: #e4e4e7 !important;
            transition: .3s !important;
            border-radius: 20px !important;
        }

        #gdpr_consent_banner_v2_unique_2024 .gdpr_consent_button_group_h6t9 {
            display: flex !important;
            gap: 12px !important;
        }

        #gdpr_consent_banner_v2_unique_2024 .gdpr_consent_primary_btn_r4k8 {
            all: initial;
            display: inline-block !important;
            font-family: inherit !important;
            background-color: #2563eb !important;
            color: white !important;
            flex: 1 !important;
            padding: 10px 20px !important;
            border: none !important;
            border-radius: 6px !important;
            font-size: 14px !important;
            font-weight: 500 !important;
            cursor: pointer !important;
            text-align: center !important;
        }

        #gdpr_consent_banner_v2_unique_2024 .gdpr_consent_secondary_btn_l2j5 {
            all: initial;
            display: inline-block !important;
            font-family: inherit !important;
            background-color: #f4f4f5 !important;
            color: #1a1a1a !important;
            padding: 10px 20px !important;
            border: none !important;
            border-radius: 6px !important;
            font-size: 14px !important;
            font-weight: 500 !important;
            cursor: pointer !important;
            text-align: center !important;
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
            
            <div class="gdpr_consent_option_item_y7h2">
                <label class="gdpr_consent_toggle_wrapper_f9p4">
                    <input type="checkbox" class="gdpr_consent_toggle_input_k3m7" id="ads_consent_x8v2" checked>
                    <span class="gdpr_consent_toggle_slider_w5n8"></span>
                </label>
                <span class="gdpr_consent_label_t6m3">Reklam Çerezleri</span>
            </div>
            
            <div class="gdpr_consent_option_item_y7h2">
                <label class="gdpr_consent_toggle_wrapper_f9p4">
                    <input type="checkbox" class="gdpr_consent_toggle_input_k3m7" id="personalization_consent_x8v2" checked>
                    <span class="gdpr_consent_toggle_slider_w5n8"></span>
                </label>
                <span class="gdpr_consent_label_t6m3">Kişiselleştirme Çerezleri</span>
            </div>
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