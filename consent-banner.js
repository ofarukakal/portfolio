(function() {
    // Banner HTML'ini oluştur
    const banner = document.createElement('div');
    banner.id = 'consentBanner';
    banner.style.cssText = 'display:block; position:fixed; bottom:0; left:0; right:0; background:#fff; box-shadow:0 -2px 10px rgba(0,0,0,0.1); z-index:9999; padding:20px;';
    
    banner.innerHTML = `
        <div style="max-width:1200px; margin:0 auto;">
            <h2>Çerez Tercihleri</h2>
            <p>Size daha iyi bir deneyim sunabilmek için çerezleri kullanıyoruz.</p>
            <div>
                <label><input type="checkbox" id="analytics_consent" checked> Analitik Çerezler</label>
                <label><input type="checkbox" id="ads_consent" checked> Reklam Çerezleri</label>
                <label><input type="checkbox" id="personalization_consent" checked> Kişiselleştirme Çerezleri</label>
            </div>
            <div>
                <button onclick="consentManager.acceptAll()">Tümünü Kabul Et</button>
                <button onclick="consentManager.savePreferences()">Tercihleri Kaydet</button>
                <button onclick="consentManager.rejectAll()">Tümünü Reddet</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(banner);
    
    // Consent Manager
    window.consentManager = {
        updateConsent: function(preferences) {
            // Cookie'yi kaydet
            document.cookie = 'user_consent_preferences=' + JSON.stringify(preferences) + ';path=/;max-age=31536000';
            
            // GTM'e consent update gönder
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: 'consent_update',
                consent_prefs: preferences
            });
            
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