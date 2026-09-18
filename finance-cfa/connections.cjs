// Deliberate connections between already authored sections, not inferred keyword matches.
const R=(unit,section,label)=>({unit,section,label});
module.exports={
 'income-statement':[R('ratios','profitability','Vom Ergebnis zu Margen und Rentabilität'),R('leases-compensation','lease-comparison','Warum Leasing die Aufwandsstruktur verändert')],
 'ratios':[R('income-statement','basic-eps','Aktienzahl und Ergebnis je Aktie'),R('leases-compensation','lease-comparison','Bilanzierungsunterschiede vor Kennzahlenvergleichen')],
 'leases-compensation':[R('ratios','solvency','Folgen für Verschuldung und Deckungskennzahlen'),R('income-statement','dilution','Aktienvergütung und potenzielle Verwässerung')],
 'benchmarks':[R('standard-iii','performance','Renditen korrekt und fair darstellen')],
 'ethics-foundations':[R('code','standard-map','Die konkreten Standards hinter den Grundsätzen'),R('ethics-cases','case-method','Den Entscheidungsrahmen auf verbundene Fälle anwenden')],
 'code':[R('standard-i','law','I: Recht und berufliche Verantwortung'),R('standard-ii','material-public','II: Informationsgrundlage und Marktintegrität'),R('standard-iii','loyalty','III: Pflichten gegenüber Kunden'),R('standard-iv','loyalty','IV: Pflichten gegenüber Arbeitgebern'),R('standard-v','basis','V: Analyse und Kommunikation'),R('standard-vi','conflicts','VI: Interessenkonflikte'),R('standard-vii','status','VII: Kandidatur und CFA-Bezeichnung')],
 'standard-i':[R('standard-v','basis','Sorgfalt der Analyse von richtiger Darstellung unterscheiden'),R('standard-vi','conflicts','Unabhängigkeit und Konfliktoffenlegung')],
 'standard-ii':[R('standard-vi','priority','Insiderinformation von vorgezogenen Eigengeschäften unterscheiden'),R('ethics-cases','research-chain','Informationsquelle, Plagiat und Verteilung im selben Fall')],
 'standard-iii':[R('benchmarks','performance-example','Zeit- und geldgewichtete Rendite durchrechnen'),R('standard-iv','gift-boundaries','Bonuszustimmung und faire Kundenbehandlung'),R('ethics-cases','client-instruction','Grenzen einer Kundenanweisung')],
 'standard-iv':[R('standard-vi','referrals','Zusatzvergütung von Vermittlungsvergütung unterscheiden'),R('ethics-cases','departure','Arbeitgeberwechsel und Datenrechte')],
 'standard-v':[R('standard-iii','performance','Spezielle Anforderungen an Leistungsdarstellungen'),R('ethics-cases','vendor-model','Externe Modelle und fortbestehende Verantwortung')],
 'standard-vi':[R('standard-iv','compensation','Wann zusätzlich vorherige schriftliche Zustimmung nötig ist'),R('standard-iii','fair-dealing','Vorrang und Fairness gegenüber Kunden')],
 'standard-vii':[R('code','conduct-program','Zuständigkeiten bei möglichen Regelverstößen'),R('ethics-foundations','professionalism','Qualifikation und verantwortliche Berufsausübung')]
};
