# Viva Raviolis 裕禧 — site web

Site vitrine du restaurant **Viva Raviolis** (raviolis & nouilles faits main, cuisine du Sichuan) — Paris 9ᵉ.

Site statique (HTML / CSS / JavaScript), sans étape de build.

## Pages
- `index.html` — accueil (vidéo de fond, signatures, salon, commander, FAQ, visiter)
- `menu.html` — carte complète à onglets
- `mentions-legales.html` · `politique-confidentialite.html`

## Fonctionnalités
- Multilingue **FR · EN · 中文 · IT · ES** (`js/i18n.js`)
- Vidéos de fond (hero + salle), animations au scroll
- Réservation & commande en ligne via **ody**, livraison Deliveroo

## Lancer en local
```bash
python -m http.server 8099
# puis http://localhost:8099/index.html
```

Powered by [ody](https://pro.ody.app/).
