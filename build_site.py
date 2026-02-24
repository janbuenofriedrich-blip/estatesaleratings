import csv
import os
from collections import defaultdict

# -----------------------------
# 1️⃣ Read data
# -----------------------------
with open('fl_companies_rated.csv', 'r', encoding='utf-8') as f:
    companies = list(csv.DictReader(f))

# Group by metro area
metros = defaultdict(list)
for c in companies:
    metros[c['scraped_metro']].append(c)

# -----------------------------
# 2️⃣ Prepare output folders
# -----------------------------
os.makedirs('docs', exist_ok=True)
os.makedirs('docs/florida', exist_ok=True)

# -----------------------------
# 3️⃣ Helper functions
# -----------------------------
def stars(rating):
    if not rating:
        return ''
    r = float(rating)
    full = int(r)
    half = 1 if r - full >= 0.5 else 0
    return '★' * full + ('½' if half else '') + f' {rating}'

def company_card(c):
    rating = c.get('google_rating', '')
    reviews = c.get('google_review_count', '')
    website = c.get('websiteUrl', '')
    phone = c.get('phoneNumber', '')
    city = c.get('cityName', '')
    state = c.get('stateCode', '')

    rating_html = ''
    if rating:
        rating_html = f'<div class="rating"><span class="stars">{stars(rating)}</span> <span class="review-count">({reviews} Google reviews)</span></div>'
    else:
        rating_html = '<div class="rating unrated">Not rated on Google</div>'

    website_html = f'<a href="{website}" target="_blank" rel="nofollow">Visit Website</a>' if website else ''
    phone_html = f'<span class="phone">{phone}</span>' if phone else ''

    return f'''
<div class="company-card">
    <h3>{c["name"]}</h3>
    <div class="location">{city}, {state}</div>
    {rating_html}
    <div class="contact">{phone_html} {website_html}</div>
</div>'''

# -----------------------------
# 4️⃣ CSS
# -----------------------------
CSS = '''
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: Arial, sans-serif; background: #f4f6f8; color: #1a1a1a; }
header { background: #004d40; color: white; padding: 16px 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; }
header h1 { font-size: 1.5rem; }
header p { font-size: 0.85rem; opacity: 0.8; margin-top: 4px; }
header a { color: white; text-decoration: none; }
header nav a { color: #e0f2f1; margin-left: 16px; font-size: 0.9rem; }
nav { background: #00695c; padding: 10px 24px; }
nav a { color: #e0f2f1; text-decoration: none; font-size: 0.9rem; margin-right: 20px; font-weight: bold; }
nav a:hover { color: white; text-decoration: underline; }
.container { max-width: 1200px; margin: 0 auto; padding: 24px 16px; }
.breadcrumb { font-size: 0.85rem; color: #777; margin-bottom: 20px; }
.breadcrumb a { color: #00796b; text-decoration: none; }
.breadcrumb a:hover { text-decoration: underline; }
.company-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 18px; }
.company-card { background: white; border-radius: 10px; padding: 18px; border: 1px solid #e0e0e0; box-shadow: 0 2px 4px rgba(0,0,0,0.04); position: relative; transition: transform 0.15s, box-shadow 0.15s; }
.company-card:hover { transform: translateY(-2px); box-shadow: 0 6px 16px rgba(0,0,0,0.09); }
.company-card h3 { color: #004d40; font-size: 0.98rem; margin-bottom: 3px; padding-right: 70px; line-height: 1.3; }
.badge { position: absolute; top: 14px; right: 14px; background: #e8f5e9; color: #2e7d32; font-size: 0.7rem; padding: 3px 8px; border-radius: 20px; font-weight: bold; }
.location { font-size: 0.82rem; color: #777; margin-bottom: 10px; }
.rating-row { display: flex; align-items: center; gap: 6px; margin-bottom: 10px; flex-wrap: wrap; }
.stars { color: #fbc02d; font-size: 1.05rem; }
.rating-num { font-weight: bold; font-size: 0.95rem; color: #333; }
.review-count { font-size: 0.78rem; color: #999; }
.unrated { color: #bbb; font-size: 0.82rem; font-style: italic; }
.contact { font-size: 0.82rem; display: flex; flex-wrap: wrap; gap: 6px; align-items: center; margin-top: 4px; }
.contact a { color: #00796b; text-decoration: none; background: #e0f2f1; padding: 3px 8px; border-radius: 4px; }
.contact a:hover { background: #b2dfdb; }
.phone { color: #555; }
.metro-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px; margin-top: 16px; }
.metro-card { background: white; border: 1px solid #e0e0e0; border-radius: 8px; padding: 16px; transition: box-shadow 0.15s; }
.metro-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
.metro-card a { text-decoration: none; color: #004d40; font-weight: bold; font-size: 0.95rem; }
.metro-card .count { font-size: 0.82rem; color: #777; margin-top: 5px; }
.faq { margin-top: 40px; background: white; border: 1px solid #e0e0e0; border-radius: 10px; padding: 24px; }
.faq h2 { color: #004d40; margin-bottom: 16px; font-size: 1.2rem; }
.faq h3 { font-size: 1rem; margin-bottom: 6px; color: #1a1a1a; }
.faq p { color: #555; line-height: 1.6; }
footer { background: #004d40; color: #b2dfdb; text-align: center; padding: 24px 16px; margin-top: 56px; font-size: 0.85rem; line-height: 1.8; }
footer a { color: #e0f2f1; text-decoration: none; }
footer a:hover { text-decoration: underline; }
'''

# -----------------------------
# 5️⃣ Page template
# -----------------------------
def page(title, body, description="", canonical_path="/"):
    return f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title}</title>
<meta name="description" content="{description}">
<link rel="canonical" href="https://estatesaleratings.com{canonical_path}">
<style>{CSS}</style>
</head>
<body>
<header>
  <div>
    <a href="/"><h1>EstateSaleRatings.com</h1></a>
    <p>Find top-rated estate sale companies near you</p>
  </div>
  <nav style="background:none; padding:0;">
    <a href="/">Home</a>
    <a href="/florida/">Florida</a>
  </nav>
</header>
<nav>
  <a href="/">Home</a>
  <a href="/florida/">Florida Directory</a>
</nav>
<div class="container">
{body}
</div>
<footer>
  <p>&copy; 2026 EstateSaleRatings.com &mdash; <a href="/">Home</a> | <a href="/florida/">Florida Directory</a></p>
  <p>Ratings sourced from Google. Company data from public listings. Not affiliated with any estate sale company.</p>
</footer>
</body>
</html>'''

# -----------------------------
# 6️⃣ Homepage
# -----------------------------
total = len(companies)
rated = len([c for c in companies if c['google_rating']])
top = len([c for c in companies if c['google_rating'] and float(c['google_rating']) >= 4.5])

home_body = f'''
<div class="hero" style="margin: -24px -16px 32px;">
  <h1>Find Top-Rated Estate Sale Companies</h1>
  <p>We list {total:,}+ estate sale companies with verified Google ratings so you can hire with confidence.</p>
</div>
<h2>Browse by State</h2>
<div class="state-grid">
  <div class="state-card">
    <a href="/florida/">Florida</a>
    <div class="count">{total:,} companies &bull; {top} rated 4.5+★</div>
  </div>
  <div class="state-card" style="opacity:0.5">
    <span style="color:#999">Texas</span>
    <div class="count">Coming soon</div>
  </div>
  <div class="state-card" style="opacity:0.5">
    <span style="color:#999">California</span>
    <div class="count">Coming soon</div>
  </div>
</div>
<div style="margin-top:48px; background:white; border:1px solid #ddd; border-radius:8px; padding:24px;">
  <h2>Why EstateSaleRatings.com?</h2>
  <p style="margin-top:12px; line-height:1.7">Hiring an estate sale company is one of the most important decisions you can make when liquidating an estate. We combine company listings with real Google ratings so you can see at a glance which companies have earned the trust of their customers. Filter by city, sort by rating, and hire with confidence.</p>
</div>
'''

with open('docs/index.html', 'w', encoding='utf-8') as f:
    f.write(page('EstateSaleRatings.com - Find Top-Rated Estate Sale Companies', home_body,
                 'Find top-rated estate sale companies near you. Verified Google ratings for 1,500+ companies across Florida.'))

# -----------------------------
# 7️⃣ Florida page
# -----------------------------
slug_map = {}
metro_slugs = {}
for metro in metros:
    slug = metro.lower().replace(' / ', '-').replace('/', '-').replace(' ', '-').replace(',', '')
    metro_slugs[metro] = slug
    os.makedirs(f'docs/florida/{slug}', exist_ok=True)

fl_body = f'<h2>Estate Sale Companies in Florida</h2>\n<p style="margin-bottom:16px;color:#555">{total:,} companies listed &bull; {top} rated 4.5★ or higher on Google</p>\n<div class="metro-grid">'
for metro, comps in sorted(metros.items(), key=lambda x: -len(x[1])):
    slug = metro_slugs[metro]
    top_in_metro = len([c for c in comps if c['google_rating'] and float(c['google_rating']) >= 4.5])
    fl_body += f'''
<div class="metro-card">
  <a href="/florida/{slug}/">{metro}</a>
  <div class="count">{len(comps)} companies &bull; {top_in_metro} rated 4.5+★</div>
</div>'''
fl_body += '</div>'

with open('docs/florida/index.html', 'w', encoding='utf-8') as f:
    f.write(page('Estate Sale Companies in Florida | EstateSaleRatings.com', fl_body,
                 f'Browse {total} estate sale companies across Florida. Find top-rated companies in Orlando, Miami, Tampa, Jacksonville and more.'))

# -----------------------------
# 8️⃣ Metro pages
# -----------------------------
for metro, comps in metros.items():
    slug = metro_slugs[metro]
    sorted_comps = sorted(comps, key=lambda x: (-(float(x['google_rating']) if x['google_rating'] else 0), -(int(x['google_review_count']) if x['google_review_count'] else 0)))
    top_count = len([c for c in comps if c['google_rating'] and float(c['google_rating']) >= 4.5])
    rated_count = len([c for c in comps if c['google_rating']])
    pct_rated = int(rated_count / len(comps) * 100) if comps else 0

    # Top company for this metro
    top_company = sorted_comps[0] if sorted_comps else None
    top_name = top_company['name'] if top_company and top_company.get('google_rating') else None
    top_rating = top_company['google_rating'] if top_company else None
    top_reviews = top_company['google_review_count'] if top_company else None

    # Unique intro paragraph
    if top_count > 0:
        intro = f'Looking for a trustworthy estate sale company in {metro}, Florida? We\'ve compiled {len(comps)} companies serving the {metro} area, {top_count} of which are rated 4.5 stars or higher on Google. All ratings are verified directly from Google Reviews so you can hire with confidence.'
        if top_name and top_rating:
            intro += f' {top_name} is currently one of the top-rated companies in {metro} with a {top_rating}-star rating'
            if top_reviews:
                intro += f' across {top_reviews} Google reviews'
            intro += '.'
    else:
        intro = f'Looking for an estate sale company in {metro}, Florida? We\'ve listed {len(comps)} companies serving the {metro} area. Contact them directly using the information below to compare availability and commission rates.'

    faq_html = f'''<div class="faq" style="margin-top:40px; background:white; border:1px solid #e0e0e0; border-radius:10px; padding:24px;">
  <h2 style="color:#004d40; margin-bottom:16px;">Hiring an Estate Sale Company in {metro}: What You Need to Know</h2>
  <div style="margin-bottom:16px;">
    <h3 style="font-size:1rem; margin-bottom:6px;">How do estate sale companies in {metro} charge?</h3>
    <p style="color:#555; line-height:1.6;">Most estate sale companies charge a commission of 25%–40% of total sales. Some may also charge setup fees or minimum guarantees. Always ask for a written contract before signing.</p>
  </div>
  <div style="margin-bottom:16px;">
    <h3 style="font-size:1rem; margin-bottom:6px;">How do I choose the best estate sale company in {metro}?</h3>
    <p style="color:#555; line-height:1.6;">Look for companies with strong Google ratings and a high number of reviews — this shows a consistent track record. Ask how they price items, how they advertise sales, and whether they handle cleanup afterward.</p>
  </div>
  <div>
    <h3 style="font-size:1rem; margin-bottom:6px;">How far in advance should I book an estate sale company in {metro}?</h3>
    <p style="color:#555; line-height:1.6;">Top-rated companies in {metro} can book up 4–8 weeks in advance, especially during busy seasons (spring and fall). Contact several companies as early as possible to compare availability and commission rates.</p>
  </div>
</div>'''

    body = f'''<div class="breadcrumb"><a href="/">Home</a> &rsaquo; <a href="/florida/">Florida</a> &rsaquo; {metro}</div>
<div style="background:white; border:1px solid #e0e0e0; border-radius:10px; padding:20px 24px; margin-bottom:24px;">
  <h1 style="color:#004d40; font-size:1.4rem; margin-bottom:10px;">Estate Sale Companies in {metro}, FL</h1>
  <p style="color:#555; line-height:1.7; margin-bottom:8px;">{intro}</p>
  <p style="font-size:0.85rem; color:#888;">{len(comps)} companies listed &bull; {top_count} rated 4.5★ or higher &bull; {rated_count} with Google ratings ({pct_rated}%)</p>
</div>
<div class="company-grid">'''
    for c in sorted_comps:
        body += company_card(c)
    body += '</div>'
    body += faq_html

    with open(f'docs/florida/{slug}/index.html', 'w', encoding='utf-8') as f:
        f.write(page(f'Estate Sale Companies in {metro}, FL | EstateSaleRatings.com', body,
                     f'Find the best estate sale companies in {metro}, Florida. {top_count} companies rated 4.5 stars or higher on Google.', canonical_path=f'/florida/{slug}/'))

# -----------------------------
# 9️⃣ Add .nojekyll for GitHub Pages
# -----------------------------
open('docs/.nojekyll', 'w').close()

print(f"Site built! Pages created:")
print(f"  - Homepage")
print(f"  - Florida state page")
print(f"  - {len(metros)} city pages")
print(f"\nTotal files in docs/: {sum(len(files) for _, _, files in os.walk('docs'))}")