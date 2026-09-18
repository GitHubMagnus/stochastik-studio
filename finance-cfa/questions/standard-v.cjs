const {Q}=require('../author.cjs');
const q=(id,pool,los,stem,options,correct,solution,section)=>Q('ev-'+id,'standard-v','ethics',pool,los,stem,options,correct,solution,{section});
module.exports=[
 q('01','practice','a c','An analyst adopts an external investment recommendation solely because the provider is famous. She has not assessed the research quality, assumptions, or suitability of its use. Under Standard V(A), the main concern is:',[
  ['external research may never be used.','Die Nutzung fremder Forschung ist nicht pauschal verboten.'],
  ['fame alone is not a sufficient basis for reliance.','Verlässlichkeit und Eignung müssen angemessen beurteilt werden.'],
  ['a recommendation must always be profitable to be reasonable.','Die tragfähige Grundlage wird nicht erst durch den späteren Gewinn definiert.']
 ],1,['Die Aufgabe betrifft den fehlenden Prüfprozess. Die Analyse muss zum eigenen Einsatz passen; ein bekannter Name liefert dafür allein keine ausreichende Evidenz.'],'basis'),
 q('02','practice','a c','An investment loses value after a careful, independent analysis with a reasonable supporting basis. No relevant information was ignored. The loss alone:',[
  ['establishes a violation of Standard V(A).','Ein Verlust ist kein hinreichender Beweis für einen mangelhaften Prozess.'],
  ['proves that the analyst must have used confidential information.','Diese Behauptung folgt nicht aus dem Anlageergebnis.'],
  ['does not establish a violation of the diligence requirement.','Unsichere Anlagen können auch bei angemessener Analyse verlieren.']
 ],2,['Ergebnis und Prozess sind getrennt zu beurteilen. Der Sachverhalt gibt gerade eine angemessene Grundlage an und nennt keine zusätzliche Pflichtverletzung.'],'basis'),
 q('03','practice','a c','A team has a reasonable and well-supported basis for its recommendation. One analyst prefers a different valuation assumption but finds the team’s assumptions defensible. She may most appropriately:',[
  ['remain associated with the team report despite the difference of opinion.','Eine vertretbare gemeinsame Grundlage setzt keine völlige Meinungsidentität voraus.'],
  ['claim that every analytical disagreement requires public denunciation of the team.','Meinungsunterschiede sind nicht automatisch ein Standardverstoß.'],
  ['erase all evidence that alternative assumptions were considered.','Eine tragfähige Dokumentation sollte relevante Überlegungen nicht aus Täuschungsgründen entfernen.']
 ],0,['Die tragende Bedingung ist die nachvollziehbare Grundlage. Wären wesentliche Daten manipuliert oder Annahmen unvertretbar, wäre der Gegenfall anders zu beurteilen.'],'basis'),
 q('04','practice','a c','A client communication lists an advisory fee but does not explain the actual nature of the service. It creates the impression of personalized financial planning although only a standardized portfolio is provided. The primary issue under V(B) is:',[
  ['fees can never be mentioned in client communications.','Kosteninformation gehört gerade zum relevanten Umfang.'],
  ['the service description is insufficient for an informed client decision.','Der Kunde erhält kein zutreffendes Bild der angebotenen Leistung.'],
  ['standardized portfolios are categorically prohibited.','Die konkrete Produktart ist nicht der beschriebene Kommunikationsmangel.']
 ],1,['Die Gebühr erklärt nicht allein den Leistungsumfang. Eine sachliche Beschreibung muss zum tatsächlich bereitgestellten Service passen.'],'communication'),
 q('05','practice','a c','An analyst presents next year’s estimated earnings as a certain fact, even though the estimate depends on uncertain demand and pricing assumptions. The communication most likely fails to:',[
  ['include every conceivable economic variable.','Der Standard verlangt relevante Faktoren, nicht eine grenzenlose Aufzählung.'],
  ['use a sufficiently precise number of decimal places.','Zusätzliche Dezimalstellen machen die Prognose nicht zu einer Tatsache.'],
  ['distinguish opinion and forecast from fact.','Die bedingte Schätzung wird als Gewissheit dargestellt.']
 ],2,['Der Fehler liegt in der Erkenntnisqualität, die der Aussage zugeschrieben wird. Annahmen, Risiken und Prognosecharakter müssen angemessen erkennbar bleiben.'],'fact-opinion'),
 q('06','practice','a c','A strategy changes materially from liquid large-company equities to concentrated illiquid small-company holdings. Clients have not been informed. The firm should most appropriately:',[
  ['promptly explain the material process change and relevant risks.','Anlageuniversum und Liquiditätsprofil verändern den zuvor beschriebenen Prozess wesentlich.'],
  ['wait until the change produces a loss before disclosing it.','Information darf nicht davon abhängen, ob sich das Risiko bereits realisiert hat.'],
  ['assume that retaining the same strategy name is sufficient disclosure.','Der unveränderte Name erklärt die tatsächliche Änderung nicht.']
 ],0,['Die zeitnahe Erklärung gibt Kunden die Möglichkeit, die Änderung im Verhältnis zu ihrem Auftrag zu beurteilen. Ein Jahresbericht nach einem späteren Verlust wäre dafür zu spät.'],'fact-opinion'),
 q('07','practice','a c','An adviser sends a brief buy recommendation by text message. Under V(B), the communication:',[
  ['is exempt from professional communication requirements because it is digital.','Der Kommunikationskanal hebt die Pflicht nicht auf.'],
  ['may be abbreviated, but relevant supporting information and its availability must be addressed appropriately.','Kurze Formen sind möglich, müssen aber eine informierte Einordnung ermöglichen.'],
  ['must always contain the full source code of every analytical model.','Eine solche pauschale technische Offenlegungspflicht besteht nicht.']
 ],1,['Die knappe Form ist nicht automatisch unzulässig. Sie darf jedoch keine falsche Vorstellung erzeugen oder entscheidende Informationen unerreichbar machen.'],'communication'),
 q('08','practice','a c','After reviewing a holding, a manager decides to make no trade. Standard V(C) most accurately implies that:',[
  ['no records are needed because there was no transaction.','Auch die begründete Entscheidung zum Halten gehört zur Anlagearbeit.'],
  ['only profitable decisions require records.','Die Dokumentation hängt nicht vom späteren Ergebnis ab.'],
  ['appropriate support for the review and decision should be retained.','Die damalige Grundlage muss nachvollziehbar sein.']
 ],2,['Ein unveränderter Bestand kann das Ergebnis einer aktiven Prüfung sein. Diese Prüfung ist bei späteren Fragen ebenso relevant wie eine Kauf- oder Verkaufsentscheidung.'],'records'),
 q('09','practice','a c','Neither regulatory guidance nor firm policy specifies a record-retention period. CFA Institute’s guidance recommends maintaining relevant records for at least:',[
  ['seven years.','Dies ist die Empfehlung für den ausdrücklich beschriebenen Fall fehlender sonstiger Vorgaben.'],
  ['one year in all cases.','Eine solche allgemeine Einjahresregel besteht nicht.'],
  ['until the investment first becomes profitable.','Erfolg beendet die Nachweisfunktion nicht.']
 ],0,['Die Bedingungen in der Frage sind wesentlich. Die Siebenjahresempfehlung darf nicht als universelle Frist ausgegeben werden, die jede gesetzliche oder betriebliche Vorgabe ersetzt.'],'records'),
 q('10','practice','a c','Applicable law requires records for at least five years, and the employer requires eight years. There is no conflicting maximum-retention rule. Which period satisfies both stated requirements?',[
  ['Five years.','Dies erfüllt die betriebliche Achtjahresvorgabe nicht.'],
  ['Seven years.','Die CFA-Empfehlung bei fehlenden Regeln verkürzt die vorhandene längere Firmenvorgabe nicht.'],
  ['Eight years.','Acht Jahre erfüllen die gesetzliche Mindest- und die betriebliche Vorgabe.']
 ],2,['Zunächst werden die tatsächlich geltenden Regeln zusammengeführt. Die Frage ist keine reine Erinnerung an eine einzelne Zahl.'],'retention-controls'),
 q('11','practice','b','A team overwrites all model inputs monthly and retains only the latest output. Which change most directly improves its ability to support earlier investment decisions?',[
  ['Retain dated model versions, material inputs, and the relevant decision rationale.','So lässt sich der damalige Informationsstand rekonstruieren.'],
  ['Increase the font size of the latest report.','Die Darstellung löst den Verlust früherer Grundlagen nicht.'],
  ['Replace earlier assumptions with information learned later.','Dies würde vergangene Entscheidungen mit nachträglichem Wissen verfälschen.']
 ],0,['Die Aufbewahrung soll erklären, was zu welchem Zeitpunkt bekannt und entscheidungsrelevant war. Ein nur aktueller Stand kann diese Funktion nicht erfüllen.'],'retention-controls'),
 q('12','practice','b','Before relying on a vendor’s apparently accurate credit model, a firm wants to strengthen its due diligence. Which action is most useful?',[
  ['Accept the reported hit rate without examining how it was measured.','Ohne Stichprobe und Definition kann das Gütemaß irreführend sein.'],
  ['Evaluate the data, assumptions, relevant validation, and limitations for the intended use.','Die Untersuchung verbindet Modellnachweis und tatsächlichen Einsatz.'],
  ['Assume that high subscription fees prove reliability.','Der Preis ist kein Validierungsnachweis.']
 ],1,['Eine passende Untersuchung fragt unter anderem, ob die Tests die neue Anwendung repräsentieren. Sie muss nicht mit einer vollständigen Eigenentwicklung identisch sein.'],'research-process'),
 q('a1','mock-a','a c','A firm thoroughly evaluates a new investment process and retains complete records. It fails to tell clients about a significant new liquidity limitation. The completed research and records:',[
  ['eliminate any need to explain the limitation.','Analyse und Archiv ersetzen die Kommunikation nicht.'],
  ['prove that the limitation cannot be significant.','Die Bedeutung der Einschränkung ist im Sachverhalt ausdrücklich angegeben.'],
  ['do not remedy the separate communication failure.','Jede Stufe von Standard V ist eigenständig zu erfüllen.']
 ],2,['Der beschriebene Mangel betrifft, was die Kunden erfahren. Gute Grundlagen und Nachweise können zugleich vorhanden sein, während die Information unzureichend bleibt.'],'linked-case'),
 q('a2','mock-a','a c','A former employee wants to use an old employer’s research report at a new firm. The supporting records are unavailable, and he has no permission to take the former employer’s files. The most appropriate action is to:',[
  ['recreate an adequate supporting basis using permissible sources before relying on the work.','Neue Verwendung braucht eine zulässige nachvollziehbare Grundlage.'],
  ['use the old recommendation solely because he remembers its conclusion.','Die Erinnerung an das Ergebnis ersetzt die fehlenden Nachweise nicht.'],
  ['take confidential backups without permission because record retention overrides ownership.','Die Aufbewahrungspflicht schafft kein allgemeines Recht zur unberechtigten Mitnahme.']
 ],0,['Die Pflichten aus Arbeitgeberloyalität und Dokumentation müssen gemeinsam erfüllt werden. Ein fehlendes Archiv darf nicht durch unerlaubte Datenübernahme ersetzt werden.'],'retention-controls'),
 q('b1','mock-b','a c','An analyst receives new reliable evidence that materially undermines a published recommendation. She continues distributing the unchanged recommendation without assessing the evidence. The main issue is:',[
  ['all published recommendations must remain permanently unchanged.','Neue wesentliche Informationen können eine erneute Prüfung erfordern.'],
  ['the recommendation’s continuing reasonable basis has not been reassessed.','Die frühere Grundlage kann durch die neue Evidenz unzureichend geworden sein.'],
  ['research is unnecessary once the initial recommendation was profitable.','Ein früherer Gewinn ersetzt keine aktuelle sachliche Grundlage.']
 ],1,['Die Pflicht bezieht sich auf die tatsächlich weiterverwendete Empfehlung. Wesentliche neue Informationen dürfen nicht ignoriert werden, weil der erste Bericht einmal vertretbar war.'],'basis'),
 q('b2','mock-b','b','A firm uses messaging applications for substantive investment advice but excludes those messages from its archive solely because they are not formal reports. Its record policy should:',[
  ['continue excluding them because only signed paper reports count.','Das Format entscheidet nicht allein über die inhaltliche Nachweispflicht.'],
  ['delete all supporting research to treat every channel equally.','Gleichmäßiger Verlust der Nachweise ist keine angemessene Lösung.'],
  ['capture relevant communications regardless of medium through an appropriate retention process.','Der Inhalt und die Entscheidungsfunktion bestimmen die Relevanz.']
 ],2,['Ein kanalübergreifender Prozess verhindert, dass wesentliche Beratung nur wegen der verwendeten App später nicht mehr nachvollziehbar ist.'],'retention-controls')
];
