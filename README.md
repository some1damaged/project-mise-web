# Project MISE

Customer-facing landing page for Project MISE.

## Mission

Project MISE provides restaurant operating intelligence and decision support
for independent restaurant operators who normally cannot afford controllers,
analysts, executive chefs, procurement specialists, and enterprise-grade
business intelligence.

## Production

The main branch deploys to Azure Static Web Apps.

## Forge

Forge must read AGENTS.md before editing the website.


## Homepage development

Static HTML, CSS, and browser JavaScript; no framework or install step.
Run `python -m http.server 8765 --bind 127.0.0.1` from this directory.
Open http://127.0.0.1:8765/.

The design partner form validates required fields, creates a text-only email preview,
and provides a mailto link to the existing recipient cory@mcsatech.com. The visitor
must send from their email client. A copy-message fallback supports webmail.
No server submission, storage, login, or document upload is implemented.
The Controller and wider team are explicitly described as in development/planned.

### Homepage imagery

`assets/images/mise-operations-1536.webp` (1536 x 1024) and
`assets/images/mise-operations-960.webp` (960 x 640) are responsive variants of an
original image generated with the built-in imagegen tool. They are conceptual
restaurant operations imagery, not photographs of a customer or the founder.
The original PNG is retained outside the public source tree.

Generation prompt:

> Use case: photorealistic-natural
> Asset type: high-resolution landscape editorial image for the Project MISE restaurant intelligence homepage
> Primary request: A professional independent restaurant kitchen before service. Close view of a chef's hands checking a delivery of fresh seasonal produce beside a clipboard with invoice papers and an organized mise en place on a stainless steel counter. Quiet, authentic operational focus, conveying care for ingredients and attention to restaurant costs.
> Style/medium: Photorealistic editorial food and hospitality photography, natural skin and material texture, premium but believable, not staged stock imagery.
> Composition/framing: Wide 3:2 landscape, medium close perspective showing the working counter, produce and hands prominently, kitchen softly receding in the background. Face outside frame. Crisp foreground details with restrained depth of field. Output at high resolution for a large website image.
> Lighting/mood: Warm natural window light, calm pre-service atmosphere.
> Color palette: Deep forest green apron, warm whites, subtle copper accents, natural produce colors and stainless steel.
> Constraints: No readable text, no UI overlays, no logos, no watermark. Invoice papers may show only indistinct fine lines. Anatomically correct hands. Do not depict an identifiable founder or imply a real customer restaurant.

### Validation for the homepage refresh

- `node --check script.js` and `git diff --check` passed.
- Local HTML audit: unique IDs, valid fragment targets, referenced assets, image alt text.
- Browser review at desktop, 390px, and 320px widths; no horizontal overflow.
- Expanded sample evidence and FAQ; checked mobile menu state and anchor navigation.
- Required-field and invalid-email validation prevented email preview.
- Valid fictional inquiry produced an encoded mailto URL with the correct recipient.
- HTML-like input remained literal text. Copy-message action succeeded.
- No browser console warnings/errors observed. Responsive image loaded successfully.
- Email sending/delivery was deliberately not executed; it depends on the visitor's email client.
- Honeypot and no-JavaScript fallback reviewed in source.

Production publication requires explicit approval. The Azure workflow is unchanged.


### MisEnSoft chef coat

`assets/images/mise-chef-coat.webp` is a 1122 x 1402 artistic restoration of Cory's
original `coat.gif`, created with built-in imagegen. The source GIF is untouched.
It appears in the founder story with attribution to the original MisEnSoft site,
meaningful alt text, lazy loading, and responsive cropping.

Prompt: Edit the supplied archival chef coat graphic into a polished high-resolution editorial image for Project MISE's founder-story section. Preserve its recognizable white chef jacket, dark charcoal collar lining, single visible row of dark buttons, and dark horizontal breast-pocket trim. Reconstruct clean natural fabric texture, seams and folds instead of pixelated GIF dithering. Show only the cropped jacket torso, no face, no hands, no invented person or logo. Keep the left-edge cropped composition and visible right sleeve, similar to the original. Replace stark white background with a subtle warm porcelain #F5F1E8 studio background, soft directional window light and gentle realistic shadows. Premium restrained culinary heritage feel, white fabric distinguished clearly from the background, charcoal details, no text, no watermark, no props. Portrait 4:5 framing, high resolution. This is an artistic restoration of the actual provided image, not an unrelated chef scene.

Validation: inspected desktop and 390px mobile placement; image loaded and no horizontal overflow. `git diff --check` passed. No JavaScript or infrastructure changes.
