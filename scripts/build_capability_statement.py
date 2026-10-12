"""
Generates a DRAFT one-page capability statement PDF:
  public/documents/pure-fuel-solution-capability-statement.pdf

Requires: pip install reportlab pillow
Run:      python scripts/build_capability_statement.py

Replace the generated PDF with your final, approved capability statement when
available (keep the same filename) and set capabilityStatement.isDraft = false
in src/config/site.ts.
"""
from pathlib import Path
from reportlab.lib.pagesizes import letter
from reportlab.lib.colors import HexColor, white
from reportlab.pdfgen import canvas
from reportlab.lib.utils import ImageReader

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public/documents/pure-fuel-solution-capability-statement.pdf"
LOGO = ROOT / "public/brand/pfs-logo-full.png"
PHOTO = ROOT / "public/images/generator-engine-800.webp"

NAVY, NAVY2, ORANGE, INK, SLATE, MIST, LINE = (HexColor(c) for c in
    ("#102033", "#0a1522", "#f58220", "#16212d", "#4f5d6d", "#f3f5f7", "#dde2e8"))

W, H = letter
M = 36

COMPETENCIES = [
    ("Generator Systems & Emergency Power", "Generator & ATS supply and replacement; installation coordination; inspections, maintenance, and load bank testing; temporary power"),
    ("Fuel Infrastructure", "Aboveground storage tanks; day tanks; diesel storage systems; tank refurbishment, piping, transfer systems, inspections"),
    ("Fuel Quality Services", "Fuel polishing, filtration, water/contamination removal, sampling; preventive maintenance programs"),
    ("Equipment Procurement & Supply", "Generators, HVAC/PTAC, facility and industrial equipment, parts; manufacturer/distributor coordination; delivery logistics"),
    ("Facility & Specialized Services", "Facility and industrial equipment support; mechanical/electrical subcontractor coordination; project management and QA oversight"),
]
DIFFERENTIATORS = [
    "Single point of accountability for contract, schedule, and site coordination",
    "Contract administration: amendments, submittals, reporting, invoicing, closeout",
    "Specification review and documented lead times for equipment requirements",
    "Vetted, licensed, and insured subcontractor network under our site supervision",
]
PAST = [
    ("U.S. Navy", "NMCI Emergency Generator Fuel Tank Replacement", ""),
    ("Town of Mangonia Park", "Fuel Polishing and Fuel Tank Maintenance", ""),
    ("Town of Davie", "Fuel Tank Refurbishment and Painting", ""),
]
NAICS = ["811310", "238210", "238220", "238990", "423610", "423730", "423830", "561210"]


def wrap(c, text, font, size, width):
    words, lines, cur = text.split(), [], ""
    for w in words:
        t = (cur + " " + w).strip()
        if c.stringWidth(t, font, size) <= width:
            cur = t
        else:
            lines.append(cur); cur = w
    if cur: lines.append(cur)
    return lines


def heading(c, x, y, text):
    c.setFillColor(ORANGE); c.rect(x, y + 2, 14, 2, stroke=0, fill=1)
    c.setFillColor(NAVY); c.setFont("Helvetica-Bold", 10.5)
    c.drawString(x + 20, y, text.upper())
    return y - 15


def build():
    OUT.parent.mkdir(parents=True, exist_ok=True)
    c = canvas.Canvas(str(OUT), pagesize=letter)
    c.setTitle("PURE FUEL SOLUTION, LLC — Capability Statement")
    c.setAuthor("PURE FUEL SOLUTION, LLC")

    # Header
    logo = ImageReader(str(LOGO)); lw, lh = logo.getSize(); dw = 230
    c.drawImage(logo, M, H - M - dw * lh / lw, dw, dw * lh / lw, mask="auto")
    c.setFont("Helvetica-Bold", 20); c.setFillColor(NAVY)
    c.drawRightString(W - M, H - M - 16, "CAPABILITY STATEMENT")
    c.setFont("Helvetica", 9); c.setFillColor(SLATE)
    c.drawRightString(W - M, H - M - 30, "Government Contracting & Infrastructure Services")

    # Identifier band
    by = H - M - 78
    c.setFillColor(NAVY); c.rect(0, by, W, 30, stroke=0, fill=1)
    c.setFillColor(ORANGE); c.rect(0, by - 3, W * 0.28, 3, stroke=0, fill=1)
    items = [("CAGE", "20UN0"), ("UEI", "D6XSN3ESNPS4"), ("SAM.gov", "Active"), ("Coverage", "Nationwide"), ("Email", "admin@purefuelsolution.com")]
    x = M
    for k, v in items:
        c.setFont("Courier-Bold", 8); c.setFillColor(ORANGE); c.drawString(x, by + 11, k.upper())
        kw = c.stringWidth(k.upper(), "Courier-Bold", 8) + 5
        c.setFont("Courier", 9); c.setFillColor(white); c.drawString(x + kw, by + 11, v)
        x += kw + c.stringWidth(v, "Courier", 9) + 22

    # Columns
    top = by - 26
    lx, lwid = M, 330
    rx, rwid = M + lwid + 22, W - M - (M + lwid + 22)

    y = heading(c, lx, top, "Company Overview")
    c.setFont("Helvetica", 9); c.setFillColor(INK)
    overview = ("PURE FUEL SOLUTION, LLC is a government contracting and infrastructure services company specializing in "
                "generator systems, fuel infrastructure, equipment procurement, facility support, and specialized project "
                "execution. We support federal, state, municipal, and commercial clients through project management, equipment "
                "sourcing, qualified subcontractor coordination, technical services, and contract administration.")
    for line in wrap(c, overview, "Helvetica", 9, lwid):
        c.drawString(lx, y, line); y -= 12
    y -= 8

    y = heading(c, lx, y, "Core Competencies")
    for title, body in COMPETENCIES:
        c.setFont("Helvetica-Bold", 9); c.setFillColor(NAVY); c.drawString(lx, y, title); y -= 11.5
        c.setFont("Helvetica", 8.5); c.setFillColor(INK)
        for line in wrap(c, body, "Helvetica", 8.5, lwid):
            c.drawString(lx, y, line); y -= 11
        y -= 4
    y -= 10

    y = heading(c, lx, y, "Differentiators")
    c.setFont("Helvetica", 8.8); c.setFillColor(INK)
    for d in DIFFERENTIATORS:
        lines = wrap(c, d, "Helvetica", 8.8, lwid - 12)
        c.setFillColor(ORANGE); c.rect(lx, y + 2.5, 4, 4, stroke=0, fill=1); c.setFillColor(INK)
        for line in lines:
            c.drawString(lx + 12, y, line); y -= 11.5
        y -= 2

    # Right column
    photo = ImageReader(str(PHOTO))
    ph = 150
    c.drawImage(photo, rx, top - ph + 8, rwid, ph, preserveAspectRatio=False)
    c.setFont("Helvetica", 6); c.setFillColor(SLATE)
    c.drawString(rx, top - ph, "Representative image")
    ry = top - ph - 20

    ry = heading(c, rx, ry, "Projects")
    for cust, title, meta in PAST:
        c.setFont("Helvetica-Bold", 8.6); c.setFillColor(NAVY)
        for line in wrap(c, title, "Helvetica-Bold", 8.6, rwid):
            c.drawString(rx, ry, line); ry -= 10.5
        c.setFont("Helvetica", 8.2); c.setFillColor(SLATE); c.drawString(rx, ry, cust); ry -= 10
        if meta:
            c.setFont("Helvetica", 7.6); c.setFillColor(INK); c.drawString(rx, ry, meta); ry -= 10
        ry -= 5
    ry -= 4

    ry = heading(c, rx, ry, "NAICS Codes")
    c.setFont("Courier", 9); c.setFillColor(INK)
    for i, n in enumerate(NAICS):
        c.drawString(rx + (i % 4) * (rwid / 4), ry - (i // 4) * 12, n)
    ry -= 30
    ry -= 6

    ry = heading(c, rx, ry, "Contact")
    c.setFont("Helvetica", 8.8); c.setFillColor(INK)
    for line in ["admin@purefuelsolution.com", "www.purefuelsolution.com", "Nationwide government contracting", "Federal, state, local & commercial clients"]:
        c.drawString(rx, ry, line); ry -= 11.5

    # Footer
    c.setFillColor(NAVY2); c.rect(0, 0, W, 26, stroke=0, fill=1)
    c.setFont("Helvetica", 7.5); c.setFillColor(white)
    c.drawString(M, 10, "PURE FUEL SOLUTION, LLC  |  UEI D6XSN3ESNPS4  |  CAGE 20UN0  |  admin@purefuelsolution.com")
    c.setFillColor(ORANGE); c.drawRightString(W - M, 10, "DRAFT — FOR REVIEW")

    c.showPage(); c.save()
    print("wrote", OUT)


if __name__ == "__main__":
    build()
