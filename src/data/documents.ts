import { createHash } from "node:crypto";
import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

const DOCUMENTS_DIR = path.join(process.cwd(), "public", "documents");
const IMAGE_EXTENSIONS = new Set(["jpg", "jpeg", "png", "webp", "gif"]);

export type DocumentCategory = "certificates" | "health-safety" | "policies";

export type SiteDocument = {
   file: string;
   href: string;
   title: string;
   extension: string;
   size: string;
   isImage: boolean;
   category: DocumentCategory;
};

export const DOCUMENT_GROUPS: { id: DocumentCategory; title: string; intro: string }[] = [
   {
      id: "certificates",
      title: "Certificates and training",
      intro: "Qualification certificates, training records and course completions held by our team.",
   },
   {
      id: "health-safety",
      title: "Health and safety",
      intro: "Risk assessments, method statements, COSHH, accident reporting, induction and site welfare records.",
   },
   {
      id: "policies",
      title: "Policies and statements",
      intro: "Company policies, statements and evidence of how they are communicated to our workforce.",
   },
];

const CERTIFICATE_PATTERN = /certificate|olugosi|manual_handling|health_safety_and_welfare|training_matrix/i;
const HEALTH_SAFETY_PATTERN =
   /risk_assessment|method_statement|coshh|riddor|accident|first_aid|cscs|induction|toolbox|welfare|subcontractor/i;

function categorise(file: string, isImage: boolean): DocumentCategory {
   if (isImage || CERTIFICATE_PATTERN.test(file)) return "certificates";
   if (HEALTH_SAFETY_PATTERN.test(file)) return "health-safety";
   return "policies";
}

function toTitle(file: string): string {
   return path
      .parse(file)
      .name.replace(/\s*\(\d+\)$/, "")
      .replace(/^_+/, "")
      .replace(/^(Number_)?\d+_/, "")
      .replace(/\s*-\s*[^\s]+@[^\s]+$/, "")
      .replace(/_/g, " ")
      .replace(/\s+/g, " ")
      .trim();
}

function formatSize(bytes: number): string {
   return bytes >= 1024 * 1024 ? `${(bytes / (1024 * 1024)).toFixed(1)} MB` : `${Math.round(bytes / 1024)} KB`;
}

export function getDocuments(): SiteDocument[] {
   const files = readdirSync(DOCUMENTS_DIR)
      .filter((file) => !file.startsWith("."))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

   const seenHashes = new Set<string>();
   const titleCounts = new Map<string, number>();
   let photoCount = 0;

   return files.flatMap((file) => {
      const fullPath = path.join(DOCUMENTS_DIR, file);
      const hash = createHash("md5").update(readFileSync(fullPath)).digest("hex");
      if (seenHashes.has(hash)) return [];
      seenHashes.add(hash);

      const extension = path.extname(file).slice(1).toLowerCase();
      const isImage = IMAGE_EXTENSIONS.has(extension);
      let title = isImage ? `Qualification certificate ${++photoCount}` : toTitle(file);

      const count = (titleCounts.get(title) ?? 0) + 1;
      titleCounts.set(title, count);
      if (count > 1) title = `${title} (${count})`;

      return {
         file,
         href: `/documents/${encodeURIComponent(file)}`,
         title,
         extension,
         size: formatSize(statSync(fullPath).size),
         isImage,
         category: categorise(file, isImage),
      };
   });
}
