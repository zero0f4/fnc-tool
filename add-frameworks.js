#!/usr/bin/env node
// Script to add CCM, ABDO, ISO 27002, ISO 45001 mappings to all ABRO requirements
const fs = require('fs');

const content = fs.readFileSync('abro-data.js', 'utf8');
const fn = new Function(content + '; return { ABRO_CHAPTERS, ABRO_SECTIONS, ABRO_REQUIREMENTS };');
const data = fn();
const reqs = data.ABRO_REQUIREMENTS;

// ============================================================
// CCM MAPPING - Cloud Control Matrix CSA v4
// ============================================================
function getCCM(req) {
  const s = req.section;
  const ch = req.chapter;
  const desc = req.description.toLowerCase();

  // Chapter 5 Cloud - primary CCM relevance
  if (ch === 5) {
    if (s === '5.1') {
      return { controls: ['GRC-01','GRC-02','GRC-03','STA-01','STA-02'], coverage: 'full', note: 'CCM GRC governance en STA supply chain dekt algemene cloud governance eisen' };
    }
    if (s === '5.2') {
      if (desc.includes('risicoanalyse')) return { controls: ['GRC-02','GRC-05','GRC-06'], coverage: 'partial', note: 'CCM GRC dekt risicoanalyse, maar niet NBIV-specifieke goedkeuring' };
      if (desc.includes('soc2') || desc.includes('assurance')) return { controls: ['STA-01','STA-02','STA-03','STA-04'], coverage: 'full', note: 'CCM STA dekt assurance en auditing requirements volledig' };
      if (desc.includes('ccm') || desc.includes('cloud control matrix')) return { controls: ['STA-01','STA-02','STA-03','STA-04','GRC-01'], coverage: 'full', note: 'CCM is direct het referentiekader; deze eis verwijst expliciet naar CCM' };
      if (desc.includes('wijziging')) return { controls: ['CCC-01','CCC-02','CCC-03','STA-03'], coverage: 'partial', note: 'CCM CCC wijzigingsbeheer en STA assurance; ABRO vereist NBIV-goedkeuring' };
      if (desc.includes('beveiligingsplan') || desc.includes('beveiligingshoofdstuk')) return { controls: ['GRC-01','GRC-02','STA-01','STA-02'], coverage: 'partial', note: 'CCM GRC governance dekt beveiligingsplan; ABRO vereist NBIV-specifieke goedkeuring' };
      return { controls: ['GRC-01','GRC-02','STA-01'], coverage: 'partial', note: 'CCM GRC en STA deels relevant; ABRO heeft NBIV-specifieke eisen' };
    }
    if (s === '5.3') {
      if (desc.includes('architectuur')) return { controls: ['IVS-01','IVS-03','IVS-09','IPY-01'], coverage: 'partial', note: 'CCM IVS infrastructuur en IPY interoperabiliteit; ABRO vereist NBIV-rapportage' };
      if (desc.includes('rollen') || desc.includes('verantwoordelijkheden') || desc.includes('sla')) return { controls: ['GRC-01','GRC-03','STA-05','DSP-01'], coverage: 'partial', note: 'CCM GRC en DSP dekt rolverdeling; ABRO vereist specifieke SLA/DAP' };
      if (desc.includes('monitoring') || desc.includes('logging')) return { controls: ['LOG-01','LOG-02','LOG-03','LOG-04','SEF-01'], coverage: 'partial', note: 'CCM LOG en SEF dekt monitoring; ABRO vereist detectie statelijke actoren' };
      if (desc.includes('secure by default') || desc.includes('hardening')) return { controls: ['IVS-04','TVM-01','TVM-02','CCC-01'], coverage: 'full', note: 'CCM IVS hardening en TVM vulnerability management dekt secure by default' };
      return { controls: ['IVS-01','IVS-03','DSP-01'], coverage: 'partial', note: 'CCM IVS en DSP deels relevant voor cloud beveiligingsmaatregelen' };
    }
    if (s === '5.4') {
      return { controls: ['CEK-01','CEK-02','CEK-03','CEK-04','CEK-05'], coverage: 'partial', note: 'CCM CEK dekt cryptografie en sleutelbeheer; ABRO vereist Goedgekeurde Middelen en NBIV-goedkeuring' };
    }
    if (s === '5.5') {
      if (desc.includes('medewerking') || desc.includes('nalevingscontrole')) return { controls: ['STA-01','STA-02','STA-03','STA-04','GRC-04'], coverage: 'partial', note: 'CCM STA auditing en GRC compliance; ABRO vereist NBIV-specifieke medewerking' };
      if (desc.includes('overheidsonderzoek')) return { controls: ['DSP-05','GRC-04'], coverage: 'partial', note: 'CCM DSP en GRC compliance deels relevant; ABRO-specifiek voor overheidsonderzoeksvragen' };
      if (desc.includes('exit')) return { controls: ['STA-09','DSP-02','DSP-04'], coverage: 'partial', note: 'CCM STA en DSP dekt data lifecycle; ABRO-specifieke exit-eisen' };
      return { controls: ['STA-01','GRC-04'], coverage: 'partial', note: 'CCM STA en GRC compliance deels relevant' };
    }
  }

  // Chapter 4 Cyber - secondary CCM relevance
  if (ch === 4) {
    if (s === '4.1') {
      if (desc.includes('cmdb') || desc.includes('bedrijfsmiddelen') || desc.includes('inventaris')) return { controls: ['UEM-01','UEM-02','UEM-03'], coverage: 'partial', note: 'CCM UEM asset management deels relevant; ABRO heeft NBIV-specifieke eisen' };
      if (desc.includes('vernietig') || desc.includes('wis')) return { controls: ['DSP-04','DSP-02'], coverage: 'partial', note: 'CCM DSP data sanitization; ABRO vereist Goedgekeurde Middelen' };
      return { controls: ['UEM-01','UEM-02'], coverage: 'partial', note: 'CCM UEM asset management deels relevant' };
    }
    if (s === '4.2') {
      return { controls: ['DSP-01','DSP-02','DSP-03','DSP-04','DSP-05'], coverage: 'partial', note: 'CCM DSP data security en privacy; ABRO heeft rubriceringsspecifieke eisen' };
    }
    if (s === '4.3') {
      if (desc.includes('mfa') || desc.includes('multi-factor') || desc.includes('authenticatie')) return { controls: ['IAM-01','IAM-02','IAM-03','IAM-04'], coverage: 'partial', note: 'CCM IAM identiteits- en toegangsbeheer; ABRO heeft NBIV-specifieke eisen' };
      return { controls: ['IAM-01','IAM-02','IAM-03'], coverage: 'partial', note: 'CCM IAM deels relevant voor identificatie en authenticatie' };
    }
    if (s === '4.4') {
      return { controls: ['IVS-04','CCC-01','CCC-02'], coverage: 'partial', note: 'CCM IVS en CCC configuratiebeheer deels relevant' };
    }
    if (s === '4.5') {
      return { controls: ['IVS-01','IVS-03','IVS-05','IVS-09'], coverage: 'partial', note: 'CCM IVS netwerkbeveiliging deels relevant; ABRO vereist NBIV-goedgekeurde architectuur' };
    }
    if (s === '4.6') {
      return { controls: ['IVS-04','UEM-04','UEM-05','TVM-01'], coverage: 'partial', note: 'CCM UEM en IVS endpoint beveiliging deels relevant' };
    }
    if (s === '4.7') {
      return { controls: ['UEM-04','UEM-05','UEM-06'], coverage: 'partial', note: 'CCM UEM mobile device management deels relevant' };
    }
    if (s === '4.8') {
      return { controls: ['CEK-01','CEK-02','CEK-03','CEK-04','CEK-05'], coverage: 'partial', note: 'CCM CEK cryptografie en sleutelbeheer; ABRO vereist Goedgekeurde Middelen' };
    }
    if (s === '4.9') {
      return { controls: ['DCS-01','DCS-02','DCS-03'], coverage: 'partial', note: 'CCM DCS datacenter beveiliging deels relevant; ABRO heeft fysiek-specifieke eisen' };
    }
    if (s === '4.10') {
      return { controls: ['TVM-01','TVM-02','TVM-03'], coverage: 'partial', note: 'CCM TVM kwetsbaarheden- en patchmanagement deels relevant' };
    }
    if (s === '4.11') {
      return { controls: ['CCC-01','CCC-02','CCC-03','CCC-04','CCC-05'], coverage: 'partial', note: 'CCM CCC wijzigingsbeheer deels relevant' };
    }
    if (s === '4.12') {
      return { controls: ['IVS-04','CCC-01'], coverage: 'partial', note: 'CCM IVS en CCC onderhoudsbeheer deels relevant' };
    }
    if (s === '4.13') {
      return { controls: ['LOG-01','LOG-02','LOG-03','LOG-04','SEF-01','SEF-02','SEF-03'], coverage: 'partial', note: 'CCM LOG en SEF monitoring en logging; ABRO vereist NBIV-rapportage' };
    }
    if (s === '4.14') {
      return { controls: ['BCR-01','BCR-02','BCR-03','BCR-04'], coverage: 'partial', note: 'CCM BCR bedrijfscontinuiteit deels relevant; ABRO vereist NBIV-goedkeuring' };
    }
    if (s === '4.15') {
      return { controls: ['AIS-01','AIS-02','AIS-03','AIS-04'], coverage: 'partial', note: 'CCM AIS applicatiebeveiliging en ontwikkeling deels relevant' };
    }
    return { controls: [], coverage: 'none', note: 'CCM niet primair relevant voor deze cyber-eis' };
  }

  // Chapter 1 Bestuur - limited CCM relevance
  if (ch === 1) {
    if (s === '1.1' && (desc.includes('beveiligingsbeleid') || desc.includes('risico'))) return { controls: ['GRC-01','GRC-02'], coverage: 'partial', note: 'CCM GRC governance deels relevant; ABRO heeft overheidsspecifieke eisen' };
    if (s === '1.5') return { controls: ['STA-01','STA-05','STA-09'], coverage: 'partial', note: 'CCM STA supply chain relevant voor onderaannemers' };
    if (s === '1.7') return { controls: ['SEF-01','SEF-02','SEF-03','SEF-04'], coverage: 'partial', note: 'CCM SEF security incident management deels relevant; ABRO vereist NBIV-melding' };
    return { controls: [], coverage: 'none', note: 'CCM primair gericht op cloud; beperkt relevant voor bestuur en organisatie' };
  }

  // Chapter 2 Personeel - minimal CCM relevance
  if (ch === 2) {
    if (s === '2.5') return { controls: ['HRS-09','HRS-10','HRS-11'], coverage: 'partial', note: 'CCM HRS training en bewustzijn deels relevant' };
    if (desc.includes('screening') || desc.includes('veiligheidsonderzoek') || desc.includes('vog') || desc.includes('vgb')) return { controls: ['HRS-01','HRS-02','HRS-03'], coverage: 'partial', note: 'CCM HRS personeelsbeveiliging deels relevant; ABRO vereist VGB/VOG' };
    return { controls: [], coverage: 'none', note: 'CCM primair gericht op cloud; beperkt relevant voor personeelseisen' };
  }

  // Chapter 3 Fysiek - minimal CCM relevance
  if (ch === 3) {
    if (s === '3.1' && desc.includes('toegang')) return { controls: ['DCS-01','DCS-02'], coverage: 'partial', note: 'CCM DCS datacenter beveiliging deels relevant voor fysieke toegang' };
    return { controls: [], coverage: 'none', note: 'CCM primair gericht op cloud; beperkt relevant voor fysieke beveiligingseisen' };
  }

  return { controls: [], coverage: 'none', note: 'CCM niet relevant voor deze eis' };
}

// ============================================================
// ABDO 2019 MAPPING - predecessor
// ============================================================
function getABDO(req) {
  const s = req.section;
  const ch = req.chapter;
  const id = req.id;
  const desc = req.description.toLowerCase();

  // Chapter 5 Cloud - entirely new in ABRO 2026
  if (ch === 5) {
    return { controls: [], coverage: 'none', note: 'Hoofdstuk 5 Cloud is nieuw in ABRO 2026; geen ABDO 2019 equivalent' };
  }

  // Chapter 1 -> ABDO Hoofdstuk 1 Bestuur en Organisatie
  if (ch === 1) {
    if (s === '1.1') {
      if (id === '1.1.1') return { controls: ['ABDO 1.1.1'], coverage: 'full', note: 'ABDO 1.1.1 beveiligingsbeleid; nagenoeg identiek' };
      if (id === '1.1.2') return { controls: ['ABDO 1.1.2'], coverage: 'full', note: 'ABDO 1.1.2 risicoanalyse; nagenoeg identiek' };
      if (id === '1.1.3') return { controls: ['ABDO 1.1.3'], coverage: 'full', note: 'ABDO 1.1.3 risicomanagementproces' };
      if (id === '1.1.4') return { controls: ['ABDO 1.1.4'], coverage: 'full', note: 'ABDO 1.1.4 beveiligingsfunctionaris benoeming NBIV' };
      if (id === '1.1.5') return { controls: ['ABDO 1.1.5'], coverage: 'partial', note: 'ABDO had beperktere Cyber-BVF rol; ABRO 2026 uitgebreider' };
      // Generic for other 1.1.x
      const num = parseInt(id.split('.')[2]);
      if (num <= 10) return { controls: ['ABDO ' + id], coverage: 'full', note: 'ABDO ' + id + ' nagenoeg identieke eis' };
      return { controls: ['ABDO 1.1'], coverage: 'partial', note: 'ABDO 1.1 had vergelijkbare eis; ABRO 2026 is strenger' };
    }
    if (s === '1.2') {
      return { controls: ['ABDO 1.2'], coverage: 'full', note: 'ABDO 1.2 beveiligingsfunctionaris; nagenoeg identiek' };
    }
    if (s === '1.3') {
      return { controls: ['ABDO 1.3'], coverage: 'full', note: 'ABDO 1.3 zeggenschap en bedrijfsstructuur; nagenoeg identiek' };
    }
    if (s === '1.4') {
      return { controls: ['ABDO 1.4'], coverage: 'full', note: 'ABDO 1.4 rubricering; nagenoeg identiek' };
    }
    if (s === '1.5') {
      return { controls: ['ABDO 1.5'], coverage: 'partial', note: 'ABDO 1.5 onderaannemers; ABRO 2026 stelt strengere keteneisen' };
    }
    if (s === '1.6') {
      return { controls: ['ABDO 1.6'], coverage: 'full', note: 'ABDO 1.6 opnamen en publicaties; nagenoeg identiek' };
    }
    if (s === '1.7') {
      return { controls: ['ABDO 1.7'], coverage: 'partial', note: 'ABDO 1.7 beveiligingsincidenten; ABRO 2026 vereist uitgebreidere incidentafhandeling' };
    }
    return { controls: ['ABDO H1'], coverage: 'partial', note: 'ABDO H1 had vergelijkbare eisen; ABRO 2026 is aangescherpt' };
  }

  // Chapter 2 -> ABDO Hoofdstuk 2 Personeel
  if (ch === 2) {
    if (s === '2.1') {
      if (desc.includes('vog')) return { controls: ['ABDO 2.1'], coverage: 'full', note: 'ABDO 2.1 VOG/VGB-eisen; nagenoeg identiek' };
      if (desc.includes('vgb')) return { controls: ['ABDO 2.1'], coverage: 'full', note: 'ABDO 2.1 VGB-eisen; nagenoeg identiek' };
      if (desc.includes('nationaliteit')) return { controls: ['ABDO 2.1'], coverage: 'full', note: 'ABDO 2.1 nationaliteitseisen; nagenoeg identiek' };
      return { controls: ['ABDO 2.1'], coverage: 'full', note: 'ABDO 2.1 veiligheidsonderzoek; nagenoeg identiek' };
    }
    if (s === '2.2') return { controls: ['ABDO 2.2'], coverage: 'full', note: 'ABDO 2.2 geheimhoudingsverklaring; nagenoeg identiek' };
    if (s === '2.3') return { controls: ['ABDO 2.3'], coverage: 'full', note: 'ABDO 2.3 ontheffing vertrouwensfunctie; nagenoeg identiek' };
    if (s === '2.4') return { controls: ['ABDO 2.4'], coverage: 'full', note: 'ABDO 2.4 wijziging beveiligingsorganisatie; nagenoeg identiek' };
    if (s === '2.5') {
      if (desc.includes('awareness') || desc.includes('bewustzijn') || desc.includes('training')) return { controls: ['ABDO 2.5'], coverage: 'partial', note: 'ABDO 2.5 training; ABRO 2026 stelt uitgebreidere awareness-eisen' };
      return { controls: ['ABDO 2.5'], coverage: 'full', note: 'ABDO 2.5 training en bewustzijn' };
    }
    if (s === '2.6') return { controls: ['ABDO 2.6'], coverage: 'full', note: 'ABDO 2.6 reizen buitenland; nagenoeg identiek' };
    return { controls: ['ABDO H2'], coverage: 'partial', note: 'ABDO H2 had vergelijkbare eisen' };
  }

  // Chapter 3 -> ABDO Hoofdstuk 3 Fysiek
  if (ch === 3) {
    if (s === '3.1') return { controls: ['ABDO 3.1'], coverage: 'full', note: 'ABDO 3.1 organisatorische maatregelen fysiek; nagenoeg identiek' };
    if (s === '3.2') return { controls: ['ABDO 3.2'], coverage: 'full', note: 'ABDO 3.2 bouwkundige maatregelen; nagenoeg identiek' };
    if (s === '3.3') return { controls: ['ABDO 3.3'], coverage: 'full', note: 'ABDO 3.3 elektronische maatregelen; nagenoeg identiek' };
    if (s === '3.4') return { controls: ['ABDO 3.4'], coverage: 'full', note: 'ABDO 3.4 reactieve maatregelen; nagenoeg identiek' };
    if (s === '3.5') return { controls: ['ABDO 3.5'], coverage: 'partial', note: 'ABDO 3.5 transport algemeen; ABRO 2026 heeft strengere transporteisen' };
    if (s === '3.6') return { controls: ['ABDO 3.6'], coverage: 'full', note: 'ABDO 3.6 fysiek verzenden; nagenoeg identiek' };
    if (s === '3.7') return { controls: ['ABDO 3.7'], coverage: 'full', note: 'ABDO 3.7 fysiek transport TBB; nagenoeg identiek' };
    if (s === '3.8') return { controls: ['ABDO 3.8'], coverage: 'full', note: 'ABDO 3.8 fysiek transport bijzondere informatie; nagenoeg identiek' };
    if (s === '3.9') return { controls: ['ABDO 3.9'], coverage: 'partial', note: 'ABDO 3.9 opslag en vernietiging; ABRO 2026 heeft aanvullende eisen voor vernietiging' };
    return { controls: ['ABDO H3'], coverage: 'partial', note: 'ABDO H3 had vergelijkbare fysieke eisen' };
  }

  // Chapter 4 -> ABDO Hoofdstuk 4 Cyber
  if (ch === 4) {
    if (s === '4.1') return { controls: ['ABDO 4.1'], coverage: 'full', note: 'ABDO 4.1 beheer ICT-bedrijfsmiddelen; nagenoeg identiek' };
    if (s === '4.2') return { controls: ['ABDO 4.2'], coverage: 'full', note: 'ABDO 4.2 data classificatie; nagenoeg identiek' };
    if (s === '4.3') {
      if (desc.includes('mfa') || desc.includes('multi-factor')) return { controls: ['ABDO 4.3'], coverage: 'partial', note: 'ABDO 4.3 authenticatie; ABRO 2026 stelt strengere MFA-eisen' };
      return { controls: ['ABDO 4.3'], coverage: 'full', note: 'ABDO 4.3 identificatie en authenticatie; nagenoeg identiek' };
    }
    if (s === '4.4') return { controls: ['ABDO 4.4'], coverage: 'partial', note: 'ABDO 4.4 configuratiebeheer; ABRO 2026 heeft strengere hardening-eisen' };
    if (s === '4.5') return { controls: ['ABDO 4.5'], coverage: 'partial', note: 'ABDO 4.5 netwerkbeveiliging; ABRO 2026 vereist uitgebreidere segmentatie' };
    if (s === '4.6') return { controls: ['ABDO 4.6'], coverage: 'partial', note: 'ABDO 4.6 endpoint beveiliging; ABRO 2026 stelt strengere eisen' };
    if (s === '4.7') return { controls: ['ABDO 4.7'], coverage: 'partial', note: 'ABDO 4.7 mobiele apparatuur; ABRO 2026 is aangescherpt' };
    if (s === '4.8') return { controls: ['ABDO 4.8'], coverage: 'full', note: 'ABDO 4.8 cryptografie; nagenoeg identiek (Goedgekeurde Middelen)' };
    if (s === '4.9') return { controls: ['ABDO 4.9'], coverage: 'full', note: 'ABDO 4.9 fysieke en omgevingsbeveiliging ICT; nagenoeg identiek' };
    if (s === '4.10') return { controls: ['ABDO 4.10'], coverage: 'partial', note: 'ABDO 4.10 patchmanagement; ABRO 2026 stelt snellere patchtermijnen' };
    if (s === '4.11') return { controls: ['ABDO 4.11'], coverage: 'full', note: 'ABDO 4.11 wijzigingenbeheer; nagenoeg identiek' };
    if (s === '4.12') return { controls: ['ABDO 4.12'], coverage: 'full', note: 'ABDO 4.12 onderhoud; nagenoeg identiek' };
    if (s === '4.13') return { controls: ['ABDO 4.13'], coverage: 'partial', note: 'ABDO 4.13 monitoring en logging; ABRO 2026 vereist uitgebreidere detectie-eisen' };
    if (s === '4.14') return { controls: ['ABDO 4.14'], coverage: 'partial', note: 'ABDO 4.14 bedrijfscontinuiteit; ABRO 2026 heeft uitgebreidere BC/DR-eisen' };
    if (s === '4.15') return { controls: ['ABDO 4.15'], coverage: 'partial', note: 'ABDO 4.15 ontwikkeling; ABRO 2026 stelt strengere secure development eisen' };
    return { controls: ['ABDO H4'], coverage: 'partial', note: 'ABDO H4 had vergelijkbare cyber-eisen; ABRO 2026 is aangescherpt' };
  }

  return { controls: [], coverage: 'none', note: 'Geen ABDO 2019 equivalent' };
}

// ============================================================
// ISO 27002:2022 MAPPING
// ============================================================
function getISO27002(req) {
  const s = req.section;
  const ch = req.chapter;
  const desc = req.description.toLowerCase();

  // Chapter 1
  if (ch === 1) {
    if (s === '1.1') {
      if (desc.includes('beveiligingsbeleid')) return { controls: ['5.1 Informatiebeveiligingsbeleid','5.2 Rollen en verantwoordelijkheden'], coverage: 'partial', note: 'ISO 27002 5.1-5.2 dekt beleid en rollen; ABRO vereist NBIV-specifiek beleid' };
      if (desc.includes('risicoanalyse') || desc.includes('risicomanagement')) return { controls: ['5.1 Informatiebeveiligingsbeleid','5.3 Functiescheiding'], coverage: 'partial', note: 'ISO 27002 risicoaanpak via beleid; ABRO vereist opdrachtgever-specifieke risicoanalyse' };
      if (desc.includes('beveiligingsfunctionaris') || desc.includes('cyber-beveiligingsfunctionaris')) return { controls: ['5.2 Rollen en verantwoordelijkheden','5.4 Managementverantwoordelijkheden'], coverage: 'partial', note: 'ISO 27002 5.2 en 5.4 rollen en management; ABRO vereist NBIV-benoeming' };
      if (desc.includes('beveiligingsplan')) return { controls: ['5.1 Informatiebeveiligingsbeleid','5.35 Onafhankelijke beoordeling'], coverage: 'partial', note: 'ISO 27002 5.1 en 5.35 dekt beveiligingsplan; ABRO vereist NBIV-goedkeuring' };
      if (desc.includes('intern onderzoek') || desc.includes('audit')) return { controls: ['5.35 Onafhankelijke beoordeling','5.36 Naleving van beleid en normen'], coverage: 'partial', note: 'ISO 27002 5.35-5.36 audit en naleving' };
      return { controls: ['5.1 Informatiebeveiligingsbeleid','5.2 Rollen en verantwoordelijkheden','5.4 Managementverantwoordelijkheden'], coverage: 'partial', note: 'ISO 27002 organisatorische controls deels relevant' };
    }
    if (s === '1.2') {
      return { controls: ['5.2 Rollen en verantwoordelijkheden','5.4 Managementverantwoordelijkheden'], coverage: 'partial', note: 'ISO 27002 5.2 en 5.4 dekt security rollen; ABRO vereist specifieke BVF-taken via NBIV' };
    }
    if (s === '1.3') {
      return { controls: ['5.8 Informatiebeveiliging in projectmanagement','5.2 Rollen en verantwoordelijkheden'], coverage: 'partial', note: 'ISO 27002 5.2 en 5.8 deels relevant; ABRO heeft specifieke zeggenschap/bedrijfsstructuur-eisen' };
    }
    if (s === '1.4') {
      return { controls: ['5.12 Classificatie van informatie','5.13 Labeling van informatie'], coverage: 'partial', note: 'ISO 27002 5.12-5.13 classificatie en labeling; ABRO vereist specifiek rubriceringsdomein' };
    }
    if (s === '1.5') {
      return { controls: ['5.19 Informatiebeveiliging in leveranciersrelaties','5.20 Adresseren van IB in leveranciersovereenkomsten','5.21 Beheer van ICT-supply chain','5.22 Monitoring en beoordeling leveranciers'], coverage: 'partial', note: 'ISO 27002 5.19-5.22 leveranciersbeheer; ABRO vereist ABRO-verklaring voor onderaannemers' };
    }
    if (s === '1.6') {
      return { controls: ['5.14 Informatieoverdracht'], coverage: 'partial', note: 'ISO 27002 5.14 informatieoverdracht; ABRO heeft specifieke eisen voor opnamen en publicaties' };
    }
    if (s === '1.7') {
      return { controls: ['5.24 Planning en voorbereiding incidentmanagement','5.25 Beoordeling en besluit over informatiebeveiligingsgebeurtenissen','5.26 Respons op informatiebeveiligingsincidenten','5.27 Leren van informatiebeveiligingsincidenten','5.28 Verzameling van bewijsmateriaal'], coverage: 'partial', note: 'ISO 27002 5.24-5.28 incidentmanagement; ABRO vereist NBIV-melding' };
    }
    return { controls: ['5.1 Informatiebeveiligingsbeleid'], coverage: 'partial', note: 'ISO 27002 organisatorische controls deels relevant' };
  }

  // Chapter 2
  if (ch === 2) {
    if (s === '2.1') {
      return { controls: ['6.1 Screening','6.2 Arbeidsvoorwaarden'], coverage: 'partial', note: 'ISO 27002 6.1 screening; ABRO vereist specifiek VOG/VGB/MIVD-veiligheidsonderzoek' };
    }
    if (s === '2.2') {
      return { controls: ['6.2 Arbeidsvoorwaarden','6.6 Vertrouwelijkheids- of geheimhoudingsovereenkomsten'], coverage: 'partial', note: 'ISO 27002 6.2 en 6.6 geheimhouding; ABRO vereist NBIV-format geheimhoudingsverklaring' };
    }
    if (s === '2.3') {
      return { controls: ['6.5 Verantwoordelijkheden na beeindiging of wijziging'], coverage: 'partial', note: 'ISO 27002 6.5 beeindiging dienstverband; ABRO heeft specifieke ontheffingsprocedure' };
    }
    if (s === '2.4') {
      return { controls: ['6.1 Screening','6.5 Verantwoordelijkheden na beeindiging of wijziging'], coverage: 'partial', note: 'ISO 27002 6.1 en 6.5 wijziging personeel; ABRO vereist NBIV-melding' };
    }
    if (s === '2.5') {
      return { controls: ['6.3 Bewustzijn, opleiding en training informatiebeveiliging'], coverage: 'partial', note: 'ISO 27002 6.3 awareness; ABRO vereist specifieke defensie/ABRO-training' };
    }
    if (s === '2.6') {
      return { controls: ['6.7 Werken op afstand'], coverage: 'partial', note: 'ISO 27002 6.7 remote werken deels relevant; ABRO heeft specifieke buitenlandreizen-eisen' };
    }
    return { controls: ['6.1 Screening','6.2 Arbeidsvoorwaarden'], coverage: 'partial', note: 'ISO 27002 people controls deels relevant' };
  }

  // Chapter 3
  if (ch === 3) {
    if (s === '3.1') {
      if (desc.includes('toegangscontrole') || desc.includes('toegangsauthenticatie') || desc.includes('bezoek')) return { controls: ['7.1 Fysieke beveiligingsperimeters','7.2 Fysieke toegangsbeveiliging','7.3 Beveiliging kantoren, ruimten en faciliteiten','7.6 Werken in beveiligde zones'], coverage: 'partial', note: 'ISO 27002 7.1-7.3 en 7.6 fysieke toegang; ABRO vereist compartimentering en NBIV-goedkeuring' };
      if (desc.includes('sleutel') || desc.includes('cijfercombinatie')) return { controls: ['7.2 Fysieke toegangsbeveiliging','7.6 Werken in beveiligde zones'], coverage: 'partial', note: 'ISO 27002 7.2 en 7.6; ABRO heeft specifieke eisen voor sleutel- en combinatiebeheer' };
      return { controls: ['7.1 Fysieke beveiligingsperimeters','7.2 Fysieke toegangsbeveiliging','7.3 Beveiliging kantoren, ruimten en faciliteiten'], coverage: 'partial', note: 'ISO 27002 7.1-7.3 fysieke beveiliging; ABRO heeft compartiment-specifieke eisen' };
    }
    if (s === '3.2') {
      return { controls: ['7.1 Fysieke beveiligingsperimeters','7.3 Beveiliging kantoren, ruimten en faciliteiten','7.5 Bescherming tegen fysieke en omgevingsdreigingen'], coverage: 'partial', note: 'ISO 27002 7.1, 7.3, 7.5 bouwkundige eisen; ABRO vereist specifieke constructie-eisen (URA/SCIF)' };
    }
    if (s === '3.3') {
      return { controls: ['7.1 Fysieke beveiligingsperimeters','7.4 Fysieke beveiligingsmonitoring'], coverage: 'partial', note: 'ISO 27002 7.1, 7.4 monitoring; ABRO vereist specifieke elektronische beveiligingssystemen conform EN-normen' };
    }
    if (s === '3.4') {
      return { controls: ['7.4 Fysieke beveiligingsmonitoring','5.24 Planning en voorbereiding incidentmanagement'], coverage: 'partial', note: 'ISO 27002 7.4 en 5.24 monitoring en incident response; ABRO vereist specifieke reactietijden en PAC-meldkamer' };
    }
    if (s === '3.5' || s === '3.6' || s === '3.7' || s === '3.8') {
      return { controls: ['7.10 Opslagmedia','5.14 Informatieoverdracht'], coverage: 'partial', note: 'ISO 27002 7.10 en 5.14 media en transport; ABRO heeft uitgebreide transportbeveiligingseisen' };
    }
    if (s === '3.9') {
      if (desc.includes('vernietig')) return { controls: ['7.10 Opslagmedia','7.14 Veilige verwijdering of hergebruik van apparatuur'], coverage: 'partial', note: 'ISO 27002 7.10, 7.14 verwijdering; ABRO vereist Goedgekeurde Middelen en bijlage 8 methoden' };
      if (desc.includes('opslag') || desc.includes('opberg')) return { controls: ['7.8 Plaatsing en bescherming van apparatuur','7.10 Opslagmedia'], coverage: 'partial', note: 'ISO 27002 7.8, 7.10 opslag; ABRO vereist specifieke opbergmiddelen conform bijlage 6.1' };
      return { controls: ['7.10 Opslagmedia','7.14 Veilige verwijdering of hergebruik van apparatuur'], coverage: 'partial', note: 'ISO 27002 7.10, 7.14 deels relevant' };
    }
    return { controls: ['7.1 Fysieke beveiligingsperimeters','7.2 Fysieke toegangsbeveiliging'], coverage: 'partial', note: 'ISO 27002 physical controls deels relevant' };
  }

  // Chapter 4
  if (ch === 4) {
    if (s === '4.1') {
      if (desc.includes('cmdb') || desc.includes('inventaris') || desc.includes('bedrijfsmiddelen')) return { controls: ['5.9 Inventarisatie van informatie en andere gerelateerde assets','5.10 Aanvaardbaar gebruik van informatie en andere gerelateerde assets','5.11 Teruggave van assets'], coverage: 'partial', note: 'ISO 27002 5.9-5.11 assetbeheer; ABRO vereist NBIV-goedgekeurde procedures' };
      if (desc.includes('vernietig') || desc.includes('wis')) return { controls: ['7.14 Veilige verwijdering of hergebruik van apparatuur','8.10 Verwijdering van informatie'], coverage: 'partial', note: 'ISO 27002 7.14, 8.10 verwijdering; ABRO vereist Goedgekeurde Middelen' };
      return { controls: ['5.9 Inventarisatie van informatie en andere gerelateerde assets','5.10 Aanvaardbaar gebruik van informatie en andere gerelateerde assets'], coverage: 'partial', note: 'ISO 27002 5.9-5.10 assetbeheer' };
    }
    if (s === '4.2') {
      return { controls: ['5.12 Classificatie van informatie','5.13 Labeling van informatie','5.14 Informatieoverdracht','8.10 Verwijdering van informatie','8.12 Preventie van datalekken'], coverage: 'partial', note: 'ISO 27002 5.12-5.14 classificatie en overdracht; ABRO heeft rubriceringsspecifieke eisen' };
    }
    if (s === '4.3') {
      if (desc.includes('mfa') || desc.includes('multi-factor')) return { controls: ['8.5 Veilige authenticatie','5.15 Toegangsbeveiliging','5.16 Identiteitsbeheer','5.17 Authenticatie-informatie'], coverage: 'full', note: 'ISO 27002 8.5, 5.15-5.17 authenticatie inclusief MFA' };
      if (desc.includes('privileged') || desc.includes('beheerder')) return { controls: ['8.2 Bevoegde toegangsrechten','8.5 Veilige authenticatie'], coverage: 'partial', note: 'ISO 27002 8.2, 8.5 privileged access; ABRO vereist NBIV-goedgekeurde procedures' };
      return { controls: ['5.15 Toegangsbeveiliging','5.16 Identiteitsbeheer','5.17 Authenticatie-informatie','5.18 Toegangsrechten','8.5 Veilige authenticatie'], coverage: 'partial', note: 'ISO 27002 5.15-5.18, 8.5 toegangsbeheer' };
    }
    if (s === '4.4') {
      return { controls: ['8.9 Configuratiebeheer','8.2 Bevoegde toegangsrechten'], coverage: 'partial', note: 'ISO 27002 8.9 configuratiebeheer; ABRO vereist hardening conform specifieke baseline' };
    }
    if (s === '4.5') {
      if (desc.includes('segmentat')) return { controls: ['8.22 Netwerksegmentatie','8.20 Netwerkbeveiliging','8.21 Beveiliging van netwerkdiensten','8.23 Webfiltering'], coverage: 'full', note: 'ISO 27002 8.20-8.23 netwerkbeveiliging inclusief segmentatie' };
      if (desc.includes('firewall') || desc.includes('ids') || desc.includes('ips')) return { controls: ['8.20 Netwerkbeveiliging','8.21 Beveiliging van netwerkdiensten','8.23 Webfiltering'], coverage: 'partial', note: 'ISO 27002 8.20-8.23 netwerkbeveiliging; ABRO vereist NBIV-goedgekeurde architectuur' };
      return { controls: ['8.20 Netwerkbeveiliging','8.21 Beveiliging van netwerkdiensten','8.22 Netwerksegmentatie'], coverage: 'partial', note: 'ISO 27002 8.20-8.22 netwerkbeveiliging' };
    }
    if (s === '4.6') {
      if (desc.includes('antivirus') || desc.includes('malware') || desc.includes('edr')) return { controls: ['8.7 Bescherming tegen malware','8.1 Gebruikersapparaten'], coverage: 'partial', note: 'ISO 27002 8.7, 8.1 malwarebescherming; ABRO vereist specifieke endpoint protection' };
      return { controls: ['8.1 Gebruikersapparaten','8.7 Bescherming tegen malware'], coverage: 'partial', note: 'ISO 27002 8.1, 8.7 endpoint beveiliging' };
    }
    if (s === '4.7') {
      return { controls: ['8.1 Gebruikersapparaten','6.7 Werken op afstand','8.7 Bescherming tegen malware'], coverage: 'partial', note: 'ISO 27002 8.1, 6.7 mobiele apparatuur; ABRO heeft aanvullende beperkingen' };
    }
    if (s === '4.8') {
      return { controls: ['8.24 Gebruik van cryptografie','5.31 Wettelijke, statutaire, regelgevende en contractuele eisen'], coverage: 'partial', note: 'ISO 27002 8.24 cryptografie; ABRO vereist Goedgekeurde Middelen en NBIV-goedkeuring' };
    }
    if (s === '4.9') {
      return { controls: ['7.1 Fysieke beveiligingsperimeters','7.2 Fysieke toegangsbeveiliging','7.5 Bescherming tegen fysieke en omgevingsdreigingen','7.8 Plaatsing en bescherming van apparatuur','7.11 Ondersteunende nutsvoorzieningen','7.12 Bekabeling'], coverage: 'partial', note: 'ISO 27002 7.x fysieke beveiliging ICT-omgeving; ABRO heeft aanvullende compartimenteisen' };
    }
    if (s === '4.10') {
      return { controls: ['8.8 Beheer van technische kwetsbaarheden','8.19 Installatie van software op operationele systemen'], coverage: 'partial', note: 'ISO 27002 8.8, 8.19 kwetsbaarheden en patching; ABRO stelt kortere patchtermijnen' };
    }
    if (s === '4.11') {
      return { controls: ['8.32 Wijzigingsbeheer','8.33 Testinformatie'], coverage: 'partial', note: 'ISO 27002 8.32 wijzigingsbeheer; ABRO vereist NBIV-goedkeuring voor wijzigingen' };
    }
    if (s === '4.12') {
      return { controls: ['7.13 Onderhoud van apparatuur','7.14 Veilige verwijdering of hergebruik van apparatuur'], coverage: 'partial', note: 'ISO 27002 7.13, 7.14 onderhoud; ABRO heeft aanvullende eisen voor onderhoud in beveiligde omgeving' };
    }
    if (s === '4.13') {
      return { controls: ['8.15 Logging','8.16 Monitoringactiviteiten','8.17 Kloksynchronisatie'], coverage: 'partial', note: 'ISO 27002 8.15-8.17 logging en monitoring; ABRO vereist NBIV-rapportage en SOC-integratie' };
    }
    if (s === '4.14') {
      return { controls: ['5.29 Informatiebeveiliging tijdens verstoring','5.30 ICT-gereedheid voor bedrijfscontinuiteit','8.13 Back-up van informatie','8.14 Redundantie van informatieverwerkende faciliteiten'], coverage: 'partial', note: 'ISO 27002 5.29-5.30, 8.13-8.14 BC/DR; ABRO vereist NBIV-goedgekeurd BC-plan' };
    }
    if (s === '4.15') {
      return { controls: ['8.25 Levenscyclus van veilige ontwikkeling','8.26 Beveiligingseisen voor applicaties','8.27 Veilige systeemarchitectuur en -ontwerpprincipes','8.28 Veilig coderen','8.29 Beveiligingstesten in ontwikkeling en acceptatie','8.30 Uitbestede ontwikkeling','8.31 Scheiding van ontwikkel-, test- en productieomgevingen'], coverage: 'partial', note: 'ISO 27002 8.25-8.31 secure development; ABRO vereist NBIV-goedkeuring en specifieke testmethoden' };
    }
    return { controls: ['8.1 Gebruikersapparaten'], coverage: 'partial', note: 'ISO 27002 technologische controls deels relevant' };
  }

  // Chapter 5
  if (ch === 5) {
    if (s === '5.1') return { controls: ['5.23 Informatiebeveiliging voor gebruik van clouddiensten','5.19 Informatiebeveiliging in leveranciersrelaties'], coverage: 'partial', note: 'ISO 27002 5.23 clouddiensten; ABRO heeft strengere cloud-eisen met NBIV-goedkeuring' };
    if (s === '5.2') return { controls: ['5.23 Informatiebeveiliging voor gebruik van clouddiensten','5.22 Monitoring en beoordeling van leveranciersdiensten','5.35 Onafhankelijke beoordeling'], coverage: 'partial', note: 'ISO 27002 5.22-5.23 cloud en leveranciers; ABRO vereist CCM-implementatie en NBIV-rapportage' };
    if (s === '5.3') {
      if (desc.includes('monitoring') || desc.includes('logging')) return { controls: ['5.23 Informatiebeveiliging voor gebruik van clouddiensten','8.15 Logging','8.16 Monitoringactiviteiten'], coverage: 'partial', note: 'ISO 27002 5.23, 8.15-8.16 cloud monitoring; ABRO vereist detectie statelijke actoren' };
      return { controls: ['5.23 Informatiebeveiliging voor gebruik van clouddiensten','8.22 Netwerksegmentatie','8.9 Configuratiebeheer'], coverage: 'partial', note: 'ISO 27002 5.23 cloud beveiligingsmaatregelen; ABRO heeft aanvullende NBIV-eisen' };
    }
    if (s === '5.4') return { controls: ['5.23 Informatiebeveiliging voor gebruik van clouddiensten','8.24 Gebruik van cryptografie'], coverage: 'partial', note: 'ISO 27002 5.23, 8.24 cloud cryptografie; ABRO vereist customer-managed keys en Goedgekeurde Middelen' };
    if (s === '5.5') return { controls: ['5.23 Informatiebeveiliging voor gebruik van clouddiensten','5.36 Naleving van beleid en normen','5.35 Onafhankelijke beoordeling'], coverage: 'partial', note: 'ISO 27002 5.23, 5.35-5.36 cloud compliance; ABRO vereist NBIV-specifieke nalevingscontrole' };
    return { controls: ['5.23 Informatiebeveiliging voor gebruik van clouddiensten'], coverage: 'partial', note: 'ISO 27002 5.23 cloud deels relevant' };
  }

  return { controls: [], coverage: 'none', note: 'Geen directe ISO 27002 mapping' };
}

// ============================================================
// ISO 45001 MAPPING - Occupational Health & Safety
// ============================================================
function getISO45001(req) {
  const s = req.section;
  const ch = req.chapter;
  const desc = req.description.toLowerCase();

  // Chapter 4 Cyber - not relevant
  if (ch === 4) {
    return { controls: [], coverage: 'none', note: 'ISO 45001 niet relevant voor cybersecurity-eisen' };
  }

  // Chapter 5 Cloud - not relevant
  if (ch === 5) {
    return { controls: [], coverage: 'none', note: 'ISO 45001 niet relevant voor cloud-eisen' };
  }

  // Chapter 1 Bestuur
  if (ch === 1) {
    if (s === '1.1' && (desc.includes('beveiligingsbeleid') || desc.includes('risico'))) {
      return { controls: ['4.1 Context van de organisatie','6.1 Maatregelen om risicos en kansen te behandelen'], coverage: 'partial', note: 'ISO 45001 4.1, 6.1 risicobeoordeling overlapt met veiligheidsbeleid, maar focus op arbeidsveiligheid' };
    }
    if (s === '1.7' && (desc.includes('incident') || desc.includes('noodprocedure'))) {
      return { controls: ['10.2 Incident, afwijking en corrigerende maatregel'], coverage: 'partial', note: 'ISO 45001 10.2 incidentonderzoek overlapt deels met beveiligingsincidenten' };
    }
    return { controls: [], coverage: 'none', note: 'ISO 45001 niet relevant voor bestuurlijke beveiligingseisen' };
  }

  // Chapter 2 Personeel - some overlap
  if (ch === 2) {
    if (s === '2.1') {
      if (desc.includes('screening') || desc.includes('vog') || desc.includes('vgb')) return { controls: ['7.2 Competentie','7.3 Bewustzijn'], coverage: 'partial', note: 'ISO 45001 7.2-7.3 competentie en bewustzijn; screeningsdoel verschilt (arbeidsveiligheid vs. betrouwbaarheid)' };
      return { controls: [], coverage: 'none', note: 'ISO 45001 niet relevant voor VGB/VOG veiligheidsonderzoek' };
    }
    if (s === '2.5') {
      return { controls: ['7.2 Competentie','7.3 Bewustzijn','7.4 Communicatie'], coverage: 'partial', note: 'ISO 45001 7.2-7.4 training en bewustzijn overlapt; focus verschilt (arbeidsveiligheid vs. informatiebeveiliging)' };
    }
    return { controls: [], coverage: 'none', note: 'ISO 45001 niet relevant voor deze personeelseis' };
  }

  // Chapter 3 Fysiek - most overlap
  if (ch === 3) {
    if (s === '3.1') {
      if (desc.includes('toegang') || desc.includes('bezoek')) return { controls: ['8.1 Operationele planning en beheersing','8.2 Gereedheid en respons bij noodsituaties'], coverage: 'partial', note: 'ISO 45001 8.1-8.2 operationele beheersing en noodvoorbereiding overlapt deels met fysieke toegang en bezoekersbeheer' };
      if (desc.includes('nooduitgang') || desc.includes('vluchtroute') || desc.includes('evacuatie')) return { controls: ['8.2 Gereedheid en respons bij noodsituaties'], coverage: 'full', note: 'ISO 45001 8.2 noodvoorbereiding dekt evacuatie en vluchtroutes volledig' };
      return { controls: ['8.1 Operationele planning en beheersing'], coverage: 'partial', note: 'ISO 45001 8.1 operationele beheersing overlapt deels met fysieke organisatorische maatregelen' };
    }
    if (s === '3.2') {
      if (desc.includes('brand') || desc.includes('nooduitgang') || desc.includes('constructie')) return { controls: ['8.1 Operationele planning en beheersing','8.2 Gereedheid en respons bij noodsituaties','6.1 Maatregelen om risicos en kansen te behandelen'], coverage: 'partial', note: 'ISO 45001 6.1, 8.1-8.2 bouwkundige veiligheid overlapt met brandveiligheid en constructie-eisen' };
      return { controls: ['8.1 Operationele planning en beheersing'], coverage: 'partial', note: 'ISO 45001 8.1 deels relevant voor bouwkundige veiligheidsmaatregelen' };
    }
    if (s === '3.3') {
      if (desc.includes('brandmelding') || desc.includes('brandalarm')) return { controls: ['8.2 Gereedheid en respons bij noodsituaties'], coverage: 'partial', note: 'ISO 45001 8.2 noodvoorbereiding relevant voor brandmeldinstallaties' };
      return { controls: [], coverage: 'none', note: 'ISO 45001 niet relevant voor elektronische beveiligingsmaatregelen (inbraakdetectie, camerasystemen)' };
    }
    if (s === '3.4') {
      return { controls: ['8.2 Gereedheid en respons bij noodsituaties','10.2 Incident, afwijking en corrigerende maatregel'], coverage: 'partial', note: 'ISO 45001 8.2, 10.2 noodrespons; overlapt deels met reactieve beveiligingsmaatregelen' };
    }
    if (s === '3.5' || s === '3.6' || s === '3.7' || s === '3.8') {
      if (desc.includes('transport')) return { controls: ['8.1 Operationele planning en beheersing'], coverage: 'partial', note: 'ISO 45001 8.1 operationele beheersing overlapt deels met veilig transport' };
      return { controls: [], coverage: 'none', note: 'ISO 45001 niet relevant voor beveiligd transport van informatie' };
    }
    if (s === '3.9') {
      if (desc.includes('vernietig') || desc.includes('chemisch') || desc.includes('gevaarlijk')) return { controls: ['8.1 Operationele planning en beheersing','6.1 Maatregelen om risicos en kansen te behandelen'], coverage: 'partial', note: 'ISO 45001 6.1, 8.1 relevant voor veilige vernietigingsprocedures' };
      return { controls: [], coverage: 'none', note: 'ISO 45001 niet relevant voor informatieopslag en -verwerking' };
    }
    return { controls: ['8.1 Operationele planning en beheersing'], coverage: 'partial', note: 'ISO 45001 8.1 deels relevant voor fysieke maatregelen' };
  }

  return { controls: [], coverage: 'none', note: 'ISO 45001 niet relevant voor deze eis' };
}


// ============================================================
// Main: Add all 4 frameworks to each requirement
// ============================================================

// Read original file
let fileContent = fs.readFileSync('abro-data.js', 'utf8');

// Process each requirement
for (const req of reqs) {
  const ccm = getCCM(req);
  const abdo = getABDO(req);
  const iso27002 = getISO27002(req);
  const iso45001 = getISO45001(req);

  // Find the closing of this requirement block and add properties before it
  // We look for the unique pattern: the last property line before the closing }
  // Strategy: find the requirement by its id, then find the closing brace

  // Build the new properties string
  const newProps = `,
    ccm: { controls: ${JSON.stringify(ccm.controls)}, coverage: '${ccm.coverage}', note: '${ccm.note.replace(/'/g, "\\'")}' },
    abdo: { controls: ${JSON.stringify(abdo.controls)}, coverage: '${abdo.coverage}', note: '${abdo.note.replace(/'/g, "\\'")}' },
    iso27002: { controls: ${JSON.stringify(iso27002.controls)}, coverage: '${iso27002.coverage}', note: '${iso27002.note.replace(/'/g, "\\'")}' },
    iso45001: { controls: ${JSON.stringify(iso45001.controls)}, coverage: '${iso45001.coverage}', note: '${iso45001.note.replace(/'/g, "\\'")}' }`;

  // Find the requirement block by its id
  // Pattern: id: 'X.Y.Z', ...  then find the closing "  },"  or "  }"
  const idEscaped = req.id.replace(/\./g, '\\.');

  // Find the position of this id in the file
  const idRegex = new RegExp(`id: '${idEscaped}',`);
  const match = idRegex.exec(fileContent);
  if (!match) {
    console.error('Could not find requirement:', req.id);
    continue;
  }

  const startPos = match.index;

  // Find the closing brace of this requirement object
  // We need to find the matching } that closes this { opened before id:
  // Go backwards from startPos to find the opening {
  let openBrace = startPos;
  while (openBrace > 0 && fileContent[openBrace] !== '{') openBrace--;

  // Now find the matching closing brace
  let depth = 1;
  let pos = openBrace + 1;
  while (pos < fileContent.length && depth > 0) {
    if (fileContent[pos] === '{') depth++;
    if (fileContent[pos] === '}') depth--;
    pos++;
  }
  // pos is now right after the closing }
  const closingBracePos = pos - 1;

  // Check if ccm already exists in this block
  const blockContent = fileContent.substring(openBrace, closingBracePos);
  if (blockContent.includes('ccm:')) {
    continue; // Already has CCM mapping
  }

  // Insert new properties before the closing brace
  // Find the last non-whitespace before closing brace
  let insertPos = closingBracePos;
  // Go back to find the end of the last property
  let lastContent = insertPos - 1;
  while (lastContent > openBrace && /\s/.test(fileContent[lastContent])) lastContent--;

  // Insert after the last property
  fileContent = fileContent.substring(0, lastContent + 1) + newProps + '\n  ' + fileContent.substring(closingBracePos);
}

fs.writeFileSync('abro-data.js', fileContent, 'utf8');
console.log('Done! Added 4 frameworks to all requirements.');

// Verify
const verifyContent = fs.readFileSync('abro-data.js', 'utf8');
const verifyFn = new Function(verifyContent + '; return ABRO_REQUIREMENTS;');
const verifyReqs = verifyFn();
console.log('Total requirements after:', verifyReqs.length);
let ccmCount = 0, abdoCount = 0, iso27002Count = 0, iso45001Count = 0;
verifyReqs.forEach(r => {
  if (r.ccm) ccmCount++;
  if (r.abdo) abdoCount++;
  if (r.iso27002) iso27002Count++;
  if (r.iso45001) iso45001Count++;
});
console.log('CCM:', ccmCount, 'ABDO:', abdoCount, 'ISO27002:', iso27002Count, 'ISO45001:', iso45001Count);
