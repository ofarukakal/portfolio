(function() {
    // Banner HTML'ini oluştur
    const banner = document.createElement('div');
    banner.id = 'consentBanner';
    banner.style.cssText = 'display:block; position:fixed; bottom:0; left:0; right:0; background:#fff; box-shadow:0 -2px 10px rgba(0,0,0,0.1); z-index:9999; padding:20px; font-family:Arial,sans-serif;';
    
    banner.innerHTML = `
        <div style="max-width:1200px; margin:0 auto;">
            <h2 style="margin:0 0 10px 0;">Çerez Tercihleri</h2>
            <p style="margin:0 0 20px 0;">Size daha iyi bir deneyim sunabilmek için çerezleri kullanıyoruz.</p>
            <div style="margin:20px 0;">
                <div style="margin-bottom:10px;">
                    <label style="display:flex;align-items:center;gap:8px;">
                        <input type="checkbox" id="analytics_consent" checked>
                        <span>Analitik Çerezler</span>
                    </label>
                </div>
                <div style="margin-bottom:10px;">
                    <label style="display:flex;align-items:center;gap:8px;">
                        <input type="checkbox" id="ads_consent" checked>
                        <span>Reklam Çerezleri</span>
                    </label>
                </div>
                <div style="margin-bottom:10px;">
                    <label style="display:flex;align-items:center;gap:8px;">
                        <input type="checkbox" id="personalization_consent" checked>
                        <span>Kişiselleştirme Çerezleri</span>
                    </label>
                </div>
            </div>
            <div style="display:flex;gap:10px;">
                <button onclick="consentManager.acceptAll()" style="padding:10px 20px;background:#007bff;color:white;border:none;border-radius:5px;cursor:pointer;">
                    Tümünü Kabul Et
                </button>
                <button onclick="consentManager.savePreferences()" style="padding:10px 20px;background:#6c757d;color:white;border:none;border-radius:5px;cursor:pointer;">
                    Tercihleri Kaydet
                </button>
                <button onclick="consentManager.rejectAll()" style="padding:10px 20px;background:#6c757d;color:white;border:none;border-radius:5px;cursor:pointer;">
                    Tümünü Reddet
                </button>
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