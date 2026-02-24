import csv
import json

input_csv = "fl_companies_rated.csv"
output_js = "docs/companies.js"

all_companies = []

with open(input_csv, newline='', encoding='utf-8') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        try:
            rating = float(row.get("google_rating", 0) or 0)
        except ValueError:
            rating = 0
        try:
            review_count = int(row.get("google_review_count", 0) or 0)
        except ValueError:
            review_count = 0

        company = {
            "name": row.get("name", ""),
            "cityName": row.get("cityName", ""),
            "stateCode": row.get("stateCode", ""),
            "rating": rating,
            "reviewCount": review_count,
            "phoneNumber": row.get("phoneNumber", ""),
            "websiteUrl": row.get("websiteUrl", ""),
            "logoUrl": row.get("logoUrl", "")
        }
        all_companies.append(company)

with open(output_js, "w", encoding="utf-8") as f:
    f.write("const allCompanies = ")
    json.dump(all_companies, f, ensure_ascii=False, indent=2)
    f.write(";")