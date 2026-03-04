// PREF: improve font rendering by using DirectWrite everywhere like Chrome [WINDOWS]
user_pref("gfx.font_rendering.cleartype_params.rendering_mode", 5);
user_pref("gfx.font_rendering.cleartype_params.cleartype_level", 100);
user_pref("gfx.font_rendering.directwrite.use_gdi_table_loading", false);
//user_pref("gfx.font_rendering.cleartype_params.enhanced_contrast", 50); // 50-100 [OPTIONAL]

// PREF: allow websites to ask you for your location
user_pref("permissions.default.geo", 0);

// PREF: allow websites to ask you to receive site notifications
user_pref("permissions.default.desktop-notification", 0);

// PREF: enable container tabs
user_pref("privacy.userContext.enabled", true);
