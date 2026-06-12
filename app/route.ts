import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const contactEmail = "info@musubu.or.jp";
const xUrl = "https://x.com/musubu_kenkou?s=21&t=25ws7hcxDX2T5F4jovrePA";
const instagramUrl = "https://www.instagram.com/musubu_kenkou?igsh=ZXRoczI4M2hvcGF5&utm_source=qr%2F";

const footerActionStyles = `
      .footer-actions {
        display: inline-flex;
        align-items: center;
        gap: 10px;
      }

      .footer-action {
        display: inline-flex;
        width: 38px;
        height: 38px;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(39, 35, 31, 0.12);
        border-radius: 999px;
        background: rgba(255, 253, 248, 0.72);
        color: rgba(39, 35, 31, 0.62);
        text-decoration: none;
        transition:
          color 0.25s ease,
          border-color 0.25s ease,
          background 0.25s ease,
          transform 0.25s ease;
      }

      .footer-action:hover,
      .footer-action:focus-visible {
        border-color: rgba(143, 179, 155, 0.48);
        background: rgba(255, 253, 248, 0.96);
        color: #2c2823;
        transform: translateY(-1px);
      }

      .footer-action svg {
        width: 17px;
        height: 17px;
        stroke: currentColor;
      }

      .footer-action--x {
        font-size: 0.82rem;
        font-weight: 600;
        letter-spacing: 0;
      }
`;

function addContactLinks(html: string) {
  let updatedHtml = html.replace(/href="mailto:[^"]*"/, `href="mailto:${contactEmail}"`);

  if (updatedHtml.includes("footer-actions")) {
    return updatedHtml;
  }

  updatedHtml = updatedHtml.replace("\n    </style>", `${footerActionStyles}\n    </style>`);

  const footerActions = `
        <nav class="footer-actions" aria-label="MUSUBUのSNSとメール">
          <a class="footer-action footer-action--x" href="${xUrl.replace(/&/g, "&amp;")}" target="_blank" rel="noopener noreferrer" aria-label="XでMUSUBUを見る">
            <span aria-hidden="true">X</span>
          </a>
          <a class="footer-action" href="${instagramUrl.replace(/&/g, "&amp;")}" target="_blank" rel="noopener noreferrer" aria-label="InstagramでMUSUBUを見る">
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <rect x="5" y="5" width="14" height="14" rx="4"></rect>
              <circle cx="12" cy="12" r="3.1"></circle>
              <circle cx="16.5" cy="7.5" r="0.7" fill="currentColor" stroke="none"></circle>
            </svg>
          </a>
          <a class="footer-action" href="mailto:${contactEmail}" aria-label="MUSUBUへメールする">
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <rect x="4.5" y="6.5" width="15" height="11" rx="2"></rect>
              <path d="m5.5 8 6.5 5 6.5-5"></path>
            </svg>
          </a>
        </nav>`;

  return updatedHtml.replace(
    "        <small>General Incorporated Association MUSUBU</small>",
    `${footerActions}\n        <small>General Incorporated Association MUSUBU</small>`
  );
}

export async function GET() {
  const html = await readFile(join(process.cwd(), "public", "index.html"), "utf8");

  return new Response(addContactLinks(html), {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store, max-age=0"
    }
  });
}
