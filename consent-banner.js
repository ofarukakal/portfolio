(function() {
    // Banner HTML (aynı)
    
    // Consent Manager
    window.consentManager = {
        updateConsent: function(preferences) {
            // Cookie'yi kaydet
            document.cookie = 'user_consent_preferences=' + JSON.stringify(preferences) + ';path=/;max-age=31536000';
            
            // GTM'e consent update gönder
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: 'consent_update',
                ad_storage: preferences.ad ? 'granted' : 'denied',
                ad_user_data: preferences.ad ? 'granted' : 'denied',
                ad_personalization: preferences.ad ? 'granted' : 'denied',
                analytics_storage: preferences.analytics ? 'granted' : 'denied',
                functionality_storage: preferences.functionality ? 'granted' : 'denied',
                personalization_storage: preferences.personalization ? 'granted' : 'denied',
                security_storage: 'granted'
            });
            
            // gtag consent update
            if (window.gtag) {
                window.gtag('consent', 'update', {
                    'ad_storage': preferences.ad ? 'granted' : 'denied',
                    'ad_user_data': preferences.ad ? 'granted' : 'denied',
                    'ad_personalization': preferences.ad ? 'granted' : 'denied',
                    'analytics_storage': preferences.analytics ? 'granted' : 'denied',
                    'functionality_storage': preferences.functionality ? 'granted' : 'denied',
                    'personalization_storage': preferences.personalization ? 'granted' : 'denied',
                    'security_storage': 'granted'
                });
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
            this.updateConsent({
                ad: document.getElementById('ads_consent').checked,
                analytics: document.getElementById('analytics_consent').checked,
                functionality: true,
                personalization: document.getElementById('personalization_consent').checked
            });
        }
    };
})();