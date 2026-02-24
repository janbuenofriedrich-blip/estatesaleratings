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
body { font-family: Georgia, serif; color: #222; background: #fafaf8; }
header { background: #2c5f2e; color: white; padding: 16px 24px; }
header a { color: white; text-decoration: none; }
header h1 { font-size: 1.6rem; }
header p { font-size: 0.9rem; opacity: 0.85; margin-top: 4px; }
nav { background: #1e4220; padding: 8px 24px; }
nav a { color: #cde8ce; text-decoration: none; font-size: 0.9rem; margin-right: 16px; }
nav a:hover { color: white; }
.container { max-width: 1100px; margin: 0 auto; padding: 24px 16px; }
h2 { font-size: 1.5rem; margin-bottom: 16px; color: #2c5f2e; }
h3 { font-size: 1rem; margin-bottom: 4px; }
.company-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; }
.company-card { background: white; border: 1px solid #ddd; border-radius: 8px; padding: 16px; }
.company-card h3 { color: #1a1a1a; font-size: 1rem; }
.location { color: #666; font-size: 0.85rem; margin: 4px 0; }
.rating { margin: 8px 0; font-size: 0.9rem; }
.stars { color: #f5a623; font-size: 1rem; }
.review-count { color: #666; font-size: 0.8rem; }
.unrated { color: #999; font-size: 0.85rem; }
.contact { margin-top: 8px; font-size: 0.85rem; }
.phone { color: #444; margin-right: 8px; }
.contact a { color: #2c5f2e; }
.metro-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 12px; margin-top: 16px; }
.metro-card { background: white; border: 1px solid #ddd; border-radius: 8px; padding: 14px; }
.metro-card a { text-decoration: none; color: #2c5f2e; font-weight: bold; }
.metro-card .count { font-size: 0.85rem; color: #666; margin-top: 4px; }
.hero { background: #2c5f2e; color: white; padding: 48px 24px; text-align: center; }
.hero h1 { font-size: 2rem; margin-bottom: 12px; }
.hero p { font-size: 1.1rem; opacity: 0.9; max-width: 600px; margin: 0 auto; }
.state-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px; margin-top: 24px; }
.state-card { background: white; border: 1px solid #ddd; border-radius: 8px; padding: 16px; text-align: center; }
.state-card a { text-decoration: none; color: #2c5f2e; font-weight: bold; font-size: 1.1rem; }
.state-card .count { font-size: 0.85rem; color: #666; margin-top: 6px; }
footer { background: #222; color: #aaa; text-align: center; padding: 24px; margin-top: 48px; font-size: 0.85rem; }
footer a { color: #ccc; }
'''

# -----------------------------
# 5️⃣ Page template
# -----------------------------
def page(title, body, description=""):
    return f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title}</title>
<meta name="description" content="{description}">
<style>{CSS}</style>
</head>
<body>
<header>
  <a href="/"><h1>EstaSaleRatings.com</h1></a>
  <p>Find top-rated estate sale companies near you</p>
</header>
<nav>
  <a href="/">Home</a>
  <a href="/florida/">Florida</a>
</nav>
<div class="container">
{body}
</div>
<footer>
  <p>&copy; 2025 EstateSaleRatings.com &mdash; <a href="/">Home</a> | <a href="/florida/">Florida</a></p>
  <p style="margin-top:8px">Ratings sourced from Google. Company data from public listings.</p>
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
    
    body = f'<h2>Estate Sale Companies in {metro}, FL</h2>\n<p style="margin-bottom:16px;color:#555">{len(comps)} companies &bull; {top_count} rated 4.5★ or higher</p>\n<div class="company-grid">'
    for c in sorted_comps:
        body += company_card(c)
    body += '</div>'
    
    with open(f'docs/florida/{slug}/index.html', 'w', encoding='utf-8') as f:
        f.write(page(f'Estate Sale Companies in {metro}, FL | EstateSaleRatings.com', body,
                     f'Find the best estate sale companies in {metro}, Florida. {top_count} companies rated 4.5 stars or higher on Google.'))

# -----------------------------
# 9️⃣ Add .nojekyll for GitHub Pages
# -----------------------------
open('docs/.nojekyll', 'w').close()

print(f"Site built! Pages created:")
print(f"  - Homepage")
print(f"  - Florida state page")
print(f"  - {len(metros)} city pages")
print(f"\nTotal files in docs/: {sum(len(files) for _, _, files in os.walk('docs'))}")