const {Q,F}=require('../author.cjs');
const q=(id,pool,stem,options,correct,solution,section)=>Q('data-'+id,'data-science','quant',pool,'a',stem,options,correct,solution,{section});
const eq=(tex,reading,symbol,meaning)=>F(tex,reading,[[symbol,meaning]]);
module.exports=[
 q('01','practice','A model is trained using company characteristics and known subsequent default/non-default outcomes. This is primarily:',[
 ['supervised classification.','Die Zielklasse ist in den Trainingsdaten bekannt.'],['unsupervised clustering.','Clustering würde ohne vorgegebene Ausfalllabels nach Ähnlichkeiten gruppieren.'],['reinforcement learning.','Hier gibt es keine Folge von Handlungen mit daraus entstehenden Belohnungen.']
 ],0,['Dass das Modell später neue Ausfälle prognostiziert, ändert nicht, dass beim Training bekannte Zielwerte verwendet werden.'],'learning-types'),
 q('02','practice','An analyst groups companies by similarity in their financial characteristics without supplying target labels. This is most directly:',[
 ['supervised regression.','Es wird kein numerischer Zielwert vorgegeben.'],['unsupervised clustering.','Die Gruppen entstehen anhand der Merkmalsähnlichkeit.'],['proof that each group has a distinct future return.','Eine gefundene Ähnlichkeitsstruktur beweist keine Renditeprognose.']
 ],1,['Cluster müssen wirtschaftlich interpretiert werden. Ihre Existenz ist kein Nachweis eines handelbaren Effekts.'],'learning-types'),
 q('03','practice','In the common “three Vs” description of Big Data, velocity most directly refers to:',[
 ['the number of different data formats.','Das beschreibt Variety.'],['the reliability of data.','Das wird häufig unter Veracity eingeordnet.'],['the speed at which data are generated and processed.','Hohe Aktualisierungsfrequenz verändert die Anforderungen an Latenz und Zeitstempel.']
 ],2,['Mehr Geschwindigkeit ist nur nützlich, wenn die Information rechtzeitig und zuverlässig zur passenden Entscheidung gelangt.'],'big-data'),
 q('04','practice','A missing debt figure in a company dataset should generally be treated as:',[
 ['an unknown value requiring a justified handling rule.','Fehlend ist keine wirtschaftliche Aussage über den tatsächlichen Schuldenstand.'],['zero debt without further review.','Das kann hoch verschuldete Firmen fälschlich als schuldenfrei erscheinen lassen.'],['proof that the company is risk-free.','Aus fehlenden Daten folgt keine Risikofreiheit.']
 ],0,['Imputation oder Ausschluss kann sinnvoll sein, muss aber aus dem Datendesign begründet und ohne Informationsleck umgesetzt werden.'],'pipeline'),
 q('05','practice','Financial statements dated 31 December are released on 20 March. A backtest for decisions on 1 February uses their final figures. The primary issue is:',[
 ['the statements have too few decimal places.','Das Problem ist die Verfügbarkeit, nicht die Rundung.'],['look-ahead bias.','Das Modell verwendet Informationen, die zum Entscheidungszeitpunkt noch nicht zugänglich waren.'],['a guaranteed reduction in overfitting.','Spätere Information erzeugt eine unrealistisch günstige Auswertung.']
 ],1,['Point-in-time-Daten müssen Veröffentlichungszeitpunkte und gegebenenfalls spätere Revisionen unterscheiden.'],'time-split'),
 q('06','practice','A researcher chooses features using the entire dataset before splitting it into training and test samples. The main concern is:',[
 ['that feature selection can never be useful.','Sie kann sinnvoll sein, wenn sie innerhalb des Trainingsdesigns erfolgt.'],['that no model coefficients can be estimated.','Das Modell bleibt berechenbar.'],['test information has leaked into model development.','Die Merkmalsauswahl wurde bereits von den später als Test bezeichneten Daten beeinflusst.']
 ],2,['Auch Skalierung, Imputation und Hyperparameterwahl müssen die Trennung berücksichtigen. Eine bloß spätere Aufteilung macht vorherige Informationsnutzung nicht rückgängig.'],'time-split'),
 q('07','practice','A model has very low training error but much worse performance on suitable unseen data. This is most consistent with:',[
 ['overfitting.','Es hat Stichprobenbesonderheiten zu stark angepasst.'],['proof of superior generalization.','Die neue Datenleistung zeigt gerade eine Generalisierungsgrenze.'],['a guarantee that adding more features will fix the problem.','Weitere Freiheitsgrade können Überanpassung verstärken.']
 ],0,['Ein einfacheres Vergleichsmodell, Regularisierung und geeignete Validierung helfen bei der Diagnose und Begrenzung.'],'overfitting'),
 q('08','practice','A final test dataset is repeatedly used to select the model with the highest score. It has effectively become:',[
 ['a permanently independent final evaluation.','Die Auswahl hängt inzwischen von seinen Ergebnissen ab.'],['part of the validation process.','Es beeinflusst die Modellwahl und ist damit nicht mehr unberührt.'],['a source of new real-time market observations.','Wiederholte Auswertung erzeugt keine neuen Beobachtungen.']
 ],1,['Für eine abschließende unabhängige Beurteilung braucht man passende unbenutzte Daten oder ein sauber vorab festgelegtes Evaluationsdesign.'],'time-split'),
 q('09','practice','Among 2,000 cases, 60 actually default. A classifier issues no warnings. Its accuracy is:',[
 ['3%.','Das ist die Ausfallbasisrate.'],['0%.','Recall ist null, aber die vielen Nichtausfälle werden richtig klassifiziert.'],['97%.','1.940 richtige Nichtausfallentscheidungen geteilt durch 2.000.']
 ],2,[eq('Acc=1940/2000=97\\%','Die hohe Accuracy geht hier mit null erkannten Ausfällen einher.','Acc','Gesamttrefferrate.')],'classification'),
 q('10','practice','Among 60 defaults and 1,940 non-defaults, a classifier flags 42 defaults and 97 non-defaults. Its precision is closest to:',[
 ['30.22%.','42/(42 + 97).'],['70.00%.','Das ist bei insgesamt 60 Ausfällen der Recall.'],['5.00%.','Das ist bei 1.940 Nichtausfällen die Falsch-Positiv-Rate.']
 ],0,[eq('Precision=42/139\\approx30{,}2158\\%','Die Bezugsgruppe sind alle 139 ausgegebenen Warnungen.','Precision','Anteil tatsächlicher Ausfälle unter den Warnungen.')],'classification'),
 q('11','practice','A classifier identifies 36 of 60 actual defaults. Its recall is:',[
 ['40.00%.','Das ist der Anteil verpasster Ausfälle.'],['60.00%.','36/60.'],['97.00%.','Das ist keine aus den angegebenen Zahlen folgende Erkennungsquote.']
 ],1,[eq('Recall=36/60=60\\%','Die Bezugsgruppe sind alle tatsächlich eingetretenen Ausfälle.','Recall','Anteil der erkannten Ausfälle, auch Sensitivität.')],'classification'),
 q('12','practice','A validation rule misses 8 defaults and produces 70 false warnings. Costs are 50 per missed default and 2 per false warning. Total error cost is:',[
 ['78.','Das zählt Fehler ohne unterschiedliche Kosten.'],['400.','Das lässt die falschen Warnungen weg.'],['540.','8 × 50 + 70 × 2.']
 ],2,[eq('C=8\\cdot50+70\\cdot2=540','Die passende Entscheidung hängt nicht nur von der Gesamtzahl richtiger Klassifikationen ab.','C','Gesamte Fehlerkosten im vereinfachten Modell.')],'threshold'),
 q('13','practice','A probability model is well calibrated at a forecast probability of 10% when, over enough suitable comparable cases:',[
 ['roughly 10% of cases assigned 10% probability experience the event.','Kalibrierung vergleicht prognostizierte Wahrscheinlichkeiten mit tatsächlichen Häufigkeiten.'],['all cases assigned 10% probability avoid the event.','Das wäre keine Übereinstimmung mit 10 %.'],['its ranking must be perfect.','Kalibrierung und Trennfähigkeit sind unterschiedliche Eigenschaften.']
 ],0,['Kleine Gruppen besitzen erhebliche Stichprobenunsicherheit. Auch eine konstante Basisratenprognose kann durchschnittlich kalibriert sein, ohne Fälle gut zu unterscheiden.'],'probability-quality'),
 q('14','practice','An event occurs. A model had assigned it probability 0.20. Its contribution to the Brier score is:',[
 ['0.20.','Das ist nur die ausgegebene Wahrscheinlichkeit.'],['0.64.','(0,20 − 1)² = 0,64.'],['0.04.','Das würde einen nicht eingetretenen Fall bewerten.']
 ],1,[eq('(\\hat p-y)^2=(0{,}2-1)^2=0{,}64','Eine selbstsichere Prognose in der falschen Richtung erhält einen hohen quadratischen Fehler.','\\hat p,y','Prognostizierte Wahrscheinlichkeit und realisierter Ereignisindikator.')],'probability-quality'),
 q('15','practice','A text model gives identical negative scores to “we expect a loss” and “we do not expect a loss” because it counts the word “loss.” The main weakness is:',[
 ['that financial text can never contain useful information.','Text kann relevant sein, muss aber passend ausgewertet werden.'],['that word frequency always proves economic meaning.','Einzelne Wörter können ohne Kontext irreführend sein.'],['failure to account for context and negation.','Die Negation verändert die Aussage trotz desselben Schlüsselworts.']
 ],2,['Zusätzlich müssen Firmennamen, Zeitraum, Veröffentlichungszeit und Art der Aussage stimmen.'],'text-ai'),
 q('16','practice','A generative AI tool provides a plausible investment summary with citations. Before relying on it, an analyst should most appropriately:',[
 ['verify important claims, source documents, and calculations.','Plausible Sprache und Zitierformat beweisen keine sachliche Richtigkeit.'],['treat every citation as evidence the source was accurately used.','Quellen können falsch wiedergegeben oder unbelegt sein.'],['assume the model has taken responsibility for the recommendation.','Fachliche Verantwortung wird dadurch nicht automatisch übertragen.']
 ],0,['Generierung kann den Arbeitsprozess unterstützen; Quellenprüfung, Datenschutz und tragfähige Analyse bleiben erforderlich.'],'text-ai'),
 q('a1','mock-a','A model is developed for forward twelve-month default prediction. Randomly splitting adjacent monthly observations can give misleading validation primarily when:',[
 ['the training sample contains more than one company.','Mehrere Unternehmen sind für sich kein Problem.'],['target windows and related observations overlap across the split.','Training und Test können dieselben zukünftigen Ereignisse bzw. stark verbundene Informationen enthalten.'],['all features are measured in consistent units.','Einheitliche Messung ist wünschenswert.']
 ],1,['Zeitliche Informationsfenster und Gruppenabhängigkeiten müssen zum späteren Einsatz passen.'],'time-split'),
 q('b1','mock-b','A model’s relation between features and default outcomes changes after a refinancing regime shift, even though the input-variable distributions remain similar. This most directly illustrates:',[
 ['proof that historical estimates remain valid.','Gerade der Zielzusammenhang hat sich geändert.'],['only an increase in data storage volume.','Speicherumfang beschreibt das Problem nicht.'],['concept drift.','Die Beziehung zwischen Eingaben und Ziel ändert sich.']
 ],2,['Monitoring muss daher auch die Prognosebeziehung und realisierte Leistung verfolgen; stabile Eingangsverteilungen allein genügen nicht.'],'overfitting')
];
