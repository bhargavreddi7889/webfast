export interface ClientLogo {
  name: string;
  slug: string;
  logo: string;
}

/** Logo files live in /public with exact filenames provided by the client. */
function logo(filename: string): string {
  return `/${encodeURI(filename)}`;
}

/** Client logos in display order (matches company portfolio sheet) */
export const CLIENT_LOGOS: ClientLogo[] = [
  { name: "Tamanna Aviation", slug: "tamanna-aviation", logo: logo("Tamanna.png") },
  { name: "Dilli Darbar", slug: "dilli-darbar", logo: logo("dilli darbar.png") },
  { name: "Wingzz Up", slug: "wingzz-up", logo: logo("wingzz.png") },
  { name: "Vedacare Herbal Power", slug: "vedacare", logo: logo("vedacare.png") },
  { name: "A Biz Chancellor", slug: "a-biz-chancellor", logo: logo("a biz chancellor.png") },
  { name: "Shark In", slug: "shark-in", logo: logo("shark in.png") },
  { name: "Kocktail Kraft", slug: "kocktail-kraft", logo: logo("Kocktail.png") },
  { name: "Sheaf", slug: "sheaf", logo: logo("sheaf.png") },
  { name: "Digi Psum", slug: "digipsum", logo: logo("digipsum.png") },
  { name: "MCX Call Tips", slug: "mcx-call-tips", logo: logo("mcx.png") },
  { name: "TVQ – True Value Quality", slug: "tvq", logo: logo("tvq.png") },
  { name: "Miraki Glaze", slug: "miraki-glaze", logo: logo("mirakglaze.png") },
  { name: "Cred Cash", slug: "cred-cash", logo: logo("cred cash.png") },
  { name: "Look's Ayurveda", slug: "looks-ayurveda", logo: logo("Look.png") },
  { name: "EIFT", slug: "eift", logo: logo("eift.png") },
  {
    name: "IPC – Indian Pest Control",
    slug: "indian-pest-control",
    logo: logo("indian pest control.png"),
  },
];
